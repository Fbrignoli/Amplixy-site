// Imported only by instrumentation and the server route. Never by client components.
export const REVIEWS_TTL_MS = 24 * 60 * 60 * 1000;
const RETRY_DELAY_MS = 5 * 60 * 1000;
const STAR_RATINGS = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

function validDate(value) {
  return typeof value === 'string' && Number.isFinite(Date.parse(value));
}

export function normalizeReviews(payload, now) {
  if (!Number.isInteger(payload?.totalReviewCount) || payload.totalReviewCount < 0) {
    throw new Error('invalid-review-count');
  }
  const total = payload.totalReviewCount;
  const average = total === 0 ? null : payload.averageRating;
  if (total > 0 && (typeof average !== 'number' || !Number.isFinite(average) || average < 1 || average > 5)) {
    throw new Error('invalid-average-rating');
  }
  if (total > 0 && (!Array.isArray(payload.reviews) || payload.reviews.length === 0)) {
    throw new Error('missing-reviews');
  }
  const reviews = (payload.reviews ?? []).slice(0, 3).map((review) => {
    const rating = STAR_RATINGS[review.starRating];
    if (!rating || typeof review.reviewId !== 'string' || !validDate(review.createTime) || !validDate(review.updateTime)) {
      throw new Error('invalid-review');
    }
    return {
      id: review.reviewId,
      author: typeof review.reviewer?.displayName === 'string' && review.reviewer.displayName.trim()
        ? review.reviewer.displayName : 'Utilisateur Google',
      rating,
      comment: typeof review.comment === 'string' ? review.comment : '',
      publishedAt: review.createTime,
      updatedAt: review.updateTime,
    };
  });
  return {
    fetchedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + REVIEWS_TTL_MS).toISOString(),
    averageRating: average,
    totalReviewCount: total,
    reviews,
  };
}

export function createGoogleReviewsService({
  env = process.env,
  fetchImpl = fetch,
  now = Date.now,
  report = (code) => console.warn(`[google-reviews] ${code}`),
} = {}) {
  let snapshot = null;
  let inFlight = null;
  let retryAt = 0;
  let expiryTimer;
  const location = env.GOOGLE_BUSINESS_LOCATION?.trim();
  const configured = Boolean(
    /^accounts\/\d+\/locations\/\d+$/.test(location ?? '') &&
    env.GOOGLE_BUSINESS_CLIENT_ID && env.GOOGLE_BUSINESS_CLIENT_SECRET && env.GOOGLE_BUSINESS_REFRESH_TOKEN
  );

  async function request(url, options = {}) {
    const response = await fetchImpl(url, {
      ...options,
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`google-http-${response.status}`);
    return response.json();
  }

  async function synchronize() {
    const token = await request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: env.GOOGLE_BUSINESS_CLIENT_ID,
        client_secret: env.GOOGLE_BUSINESS_CLIENT_SECRET,
        refresh_token: env.GOOGLE_BUSINESS_REFRESH_TOKEN,
      }),
    });
    if (typeof token.access_token !== 'string' || !token.access_token) throw new Error('missing-access-token');
    const headers = { Authorization: `Bearer ${token.access_token}` };
    const locationId = location.split('/').at(-1);
    const profile = await request(
      `https://mybusinessbusinessinformation.googleapis.com/v1/locations/${locationId}?readMask=title,websiteUri`,
      { headers },
    );
    // A mistakenly configured account must never display another company's reviews.
    let host;
    try { host = new URL(profile.websiteUri).hostname; } catch { throw new Error('profile-mismatch'); }
    if (profile.title?.trim().toLowerCase() !== 'amplixy' || !['amplixy.com', 'www.amplixy.com'].includes(host)) {
      throw new Error('profile-mismatch');
    }
    const payload = await request(
      `https://mybusiness.googleapis.com/v4/${location}/reviews?pageSize=3&orderBy=updateTime%20desc`,
      { headers },
    );
    snapshot = normalizeReviews(payload, now());
    clearTimeout(expiryTimer);
    // Remove content even when the site receives no traffic. Nothing is written to disk.
    expiryTimer = setTimeout(() => { snapshot = null; }, REVIEWS_TTL_MS);
    expiryTimer.unref?.();
    return snapshot;
  }

  return {
    configured,
    async load() {
      if (!configured) return null;
      if (snapshot && Date.parse(snapshot.expiresAt) <= now()) snapshot = null;
      if (snapshot) return snapshot;
      if (inFlight) return inFlight;
      if (now() < retryAt) return null;
      inFlight = synchronize().catch((error) => {
        snapshot = null;
        retryAt = now() + RETRY_DELAY_MS;
        // Never log OAuth responses, URLs with credentials, review text or raw exceptions.
        const code = /^google-http-\d{3}$|^profile-mismatch$|^invalid-[a-z-]+$|^missing-[a-z-]+$/.test(error?.message)
          ? error.message : 'sync-unavailable';
        report(code);
        return null;
      }).finally(() => { inFlight = null; });
      return inFlight;
    },
    dispose() { clearTimeout(expiryTimer); snapshot = null; },
  };
}

const serviceKey = Symbol.for('amplixy.google-reviews');
export function getGoogleReviewsService() {
  return globalThis[serviceKey] ??= createGoogleReviewsService();
}
