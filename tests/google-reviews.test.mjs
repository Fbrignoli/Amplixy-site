import test from 'node:test';
import assert from 'node:assert/strict';
import { createGoogleReviewsService, normalizeReviews, REVIEWS_TTL_MS } from '../src/lib/google-reviews.server.mjs';

const epoch = Date.parse('2026-09-08T12:00:00Z');
const env = {
  GOOGLE_BUSINESS_CLIENT_ID: 'test-client',
  GOOGLE_BUSINESS_CLIENT_SECRET: 'test-secret',
  GOOGLE_BUSINESS_REFRESH_TOKEN: 'test-refresh',
  GOOGLE_BUSINESS_LOCATION: 'accounts/123/locations/456',
};
const review = (id, rating = 'FIVE') => ({
  reviewId: id, starRating: rating, reviewer: { displayName: `Auteur de test ${id}` },
  comment: 'Texte synthétique de test.\nÀ conserver sans réécriture.',
  createTime: '2026-09-01T10:00:00Z', updateTime: '2026-09-02T10:00:00Z',
});
const payload = { totalReviewCount: 12, averageRating: 3.7, reviews: [review('1','ONE'),review('2'),review('3','THREE')] };
function setup(options = {}) {
  const calls = [];
  const logs = [];
  let time = epoch;
  let failing = false;
  let currentPayload = payload;
  const service = createGoogleReviewsService({
    env, now: () => time, report: (code) => logs.push(code),
    fetchImpl: async (url, init) => {
      calls.push({ url, init });
      if (failing) throw new Error('test-secret test-refresh must not be logged');
      if (url.includes('oauth2')) return Response.json({ access_token: 'test-access' });
      if (url.includes('businessinformation')) return Response.json({ title:'Amplixy', websiteUri:'https://amplixy.com/' });
      return Response.json(currentPayload);
    },
    ...options,
  });
  return { service, calls, logs, advance: (ms) => { time += ms; }, fail: () => { failing = true; }, setPayload: (value) => { currentPayload = value; } };
}

test('no configuration or invalid location: no external request and no invented reviews', async () => {
  for (const config of [{}, { ...env, GOOGLE_BUSINESS_LOCATION:'https://invalid.test/private' }]) {
    const { service, calls } = setup({ env:config });
    assert.equal(await service.load(), null);
    assert.equal(calls.length, 0);
  }
});

test('uses the global Google rating, keeps low-rated reviews and preserves original comments', () => {
  const result = normalizeReviews(payload, epoch);
  assert.equal(result.averageRating, 3.7);
  assert.equal(result.totalReviewCount, 12);
  assert.deepEqual(result.reviews.map(r=>r.rating), [1,5,3]);
  assert.equal(result.reviews[0].comment, payload.reviews[0].comment);
  assert.equal(Date.parse(result.expiresAt)-epoch, REVIEWS_TTL_MS);
  assert.ok(!JSON.stringify(result).includes('reviewer'));
});

test('empty listing has no fabricated zero-star average; malformed ratings fail closed', () => {
  assert.equal(normalizeReviews({ totalReviewCount:0 }, epoch).averageRating, null);
  for (const invalid of [NaN,Infinity,0,6,'5']) {
    assert.throws(()=>normalizeReviews({ ...payload, averageRating:invalid }, epoch));
  }
  assert.throws(()=>normalizeReviews({ ...payload, reviews:[] }, epoch));
});

test('one synchronization serves concurrent visitors without storing credentials in the result', async () => {
  const { service, calls } = setup();
  const values = await Promise.all([service.load(),service.load(),service.load()]);
  assert.equal(calls.length,3);
  assert.deepEqual(values[0],values[1]);
  assert.match(calls[2].url, /pageSize=3&orderBy=updateTime%20desc/);
  assert.ok(calls.every(c=>c.init.cache==='no-store' && c.init.redirect==='error'));
  assert.ok(!JSON.stringify(values).includes('test-secret'));
  assert.ok(!JSON.stringify(values).includes('test-refresh'));
  assert.ok(!JSON.stringify(values).includes('test-access'));
  await service.load();
  assert.equal(calls.length,3);
  service.dispose();
});

test('expired reviews are removed, errors are redacted and retries are rate-limited', async () => {
  const { service, calls, logs, advance, fail } = setup();
  assert.ok(await service.load());
  advance(REVIEWS_TTL_MS+1);
  fail();
  assert.equal(await service.load(),null);
  assert.deepEqual(logs,['sync-unavailable']);
  assert.equal(calls.length,4);
  assert.equal(await service.load(),null);
  assert.equal(calls.length,4);
  advance(5*60*1000);
  assert.equal(await service.load(),null);
  assert.equal(calls.length,5);
  service.dispose();
});

test('another business profile cannot be published', async () => {
  const { service, logs } = setup({ fetchImpl: async (url) => Response.json(
    url.includes('oauth2') ? {access_token:'test'} : {title:'Amplixy',websiteUri:'https://amplixy.ai'}
  ) });
  assert.equal(await service.load(),null);
  assert.deepEqual(logs,['profile-mismatch']);
  service.dispose();
});

test('Google denial produces no partial data or token in the logs', async () => {
  const { service, logs } = setup({ fetchImpl: async () => Response.json({error:'test-secret'},{status:403}) });
  assert.equal(await service.load(),null);
  assert.deepEqual(logs,['google-http-403']);
  service.dispose();
});

test('a fresh server instance fetches again, including deletions and changed global totals', async () => {
  const first = setup();
  await first.service.load();
  first.service.dispose();
  const second = setup();
  await second.service.load();
  assert.equal(second.calls.length,3);
  second.advance(REVIEWS_TTL_MS+1);
  second.setPayload({ totalReviewCount:0, reviews:[] });
  const refreshed = await second.service.load();
  assert.equal(second.calls.length,6);
  assert.equal(refreshed.totalReviewCount,0);
  assert.equal(refreshed.averageRating,null);
  assert.deepEqual(refreshed.reviews,[]);
  second.service.dispose();
});
