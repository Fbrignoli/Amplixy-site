"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import type { GoogleReviewsSnapshot } from "@/lib/google-reviews-types";
import { GOOGLE_REVIEWS_FALLBACK } from "@/lib/google-reviews-fallback";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/lib/site";

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris",
  }).format(new Date(value));
}

export function GoogleReviewsView({ snapshot }: { snapshot: GoogleReviewsSnapshot | null }) {
  return (
    <section className="google-reviews" id="avis-google" aria-labelledby="google-reviews-title">
      <div className="google-reviews-intro">
        <div>
          <h3 id="google-reviews-title">Avis publiés sur Google.</h3>
          {snapshot ? (
            <p className="google-reviews-rating">
              {snapshot.averageRating !== null && (
                <><Star size={18} fill="currentColor" aria-hidden="true" />
                  <strong>{snapshot.averageRating.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</strong>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span>{snapshot.totalReviewCount} avis</span>
            </p>
          ) : (
            <p>Retrouvez les retours de nos clients sur la fiche Amplixy.</p>
          )}
        </div>
        <a className="case-link" href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
          Consulter les avis sur Google <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
      {snapshot && snapshot.reviews.length > 0 && (
        <>
          <div className="google-reviews-list">
            {snapshot.reviews.map((review) => (
              <figure className="google-review" key={review.id}>
                <figcaption>
                  <strong>{review.author}</strong>
                  <span className="google-review-stars" aria-label={`${review.rating} sur 5 étoiles`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={15} fill={index < review.rating ? "currentColor" : "none"} aria-hidden="true" />
                    ))}
                  </span>
                </figcaption>
                {review.comment ? <blockquote>{review.comment}</blockquote> : <p>Avis sans commentaire.</p>}
                {review.visitLabel ? (
                  <p className="google-review-date">{review.visitLabel}</p>
                ) : (
                  <p className="google-review-date">
                    Publié le <time dateTime={review.publishedAt}>{dateLabel(review.publishedAt)}</time>
                    {review.updatedAt !== review.publishedAt && (
                      <> · Modifié le <time dateTime={review.updatedAt}>{dateLabel(review.updatedAt)}</time></>
                    )}
                  </p>
                )}
              </figure>
            ))}
          </div>
          <p className="google-reviews-note">
            Jusqu’à trois avis, classés par dernière mise à jour, sans filtre sur la note.
            {" "}Consultés le <time dateTime={snapshot.fetchedAt}>{dateLabel(snapshot.fetchedAt)}</time>.
          </p>
        </>
      )}
    </section>
  );
}

export function GoogleReviews() {
  const [snapshot, setSnapshot] = useState<GoogleReviewsSnapshot>(GOOGLE_REVIEWS_FALLBACK);

  useEffect(() => {
    const controller = new AbortController();
    let expiryTimer: ReturnType<typeof setTimeout>;
    fetch("/api/google-reviews", { cache: "no-store", signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((data: GoogleReviewsSnapshot | null) => {
        if (!data || controller.signal.aborted) return;
        const remaining = Date.parse(data.expiresAt) - Date.now();
        if (!Number.isFinite(remaining) || remaining <= 0) return;
        setSnapshot(data);
        expiryTimer = setTimeout(() => setSnapshot(GOOGLE_REVIEWS_FALLBACK), remaining);
      })
      .catch(() => { /* The existing Google profile link remains available. */ });
    return () => { controller.abort(); clearTimeout(expiryTimer); };
  }, []);

  return <GoogleReviewsView snapshot={snapshot} />;
}
