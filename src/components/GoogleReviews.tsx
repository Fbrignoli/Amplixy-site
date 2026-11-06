"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { GoogleReviewsSnapshot } from "@/lib/google-reviews-types";
import { GOOGLE_REVIEWS_FALLBACK } from "@/lib/google-reviews-fallback";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/lib/site";

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris",
  }).format(new Date(value));
}

function ReviewComment({
  comment,
  expanded,
  contentId,
  onToggle,
}: {
  comment: string;
  expanded: boolean;
  contentId: string;
  onToggle: () => void;
}) {
  const textRef = useRef<HTMLQuoteElement>(null);
  const [truncated, setTruncated] = useState(false);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const measure = () => {
      if (!expanded) setTruncated(text.scrollHeight > text.clientHeight + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(text);
    return () => observer.disconnect();
  }, [expanded, comment]);

  return (
    <div className="google-review-comment">
      <blockquote ref={textRef} id={contentId} className={expanded ? "is-expanded" : undefined}>
        {comment}
      </blockquote>
      {truncated && (
        <button
          className="google-review-toggle"
          type="button"
          aria-controls={contentId}
          aria-expanded={expanded}
          onClick={onToggle}
        >
          {expanded ? "Moins" : "Plus"}
        </button>
      )}
    </div>
  );
}

export function GoogleReviewsView({ snapshot }: { snapshot: GoogleReviewsSnapshot | null }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(() => new Set());

  const toggleReview = (reviewId: string) => {
    setExpandedReviews((current) => {
      const next = new Set(current);
      if (next.has(reviewId)) next.delete(reviewId);
      else next.add(reviewId);
      return next;
    });
  };

  const scrollOneCard = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const card = carousel.querySelector<HTMLElement>(".google-review");
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const step = (card?.offsetWidth ?? carousel.clientWidth) + gap;
    const left = direction < 0 && carousel.scrollLeft <= 1
      ? maxScroll
      : direction > 0 && carousel.scrollLeft >= maxScroll - 1
        ? 0
        : carousel.scrollLeft + direction * step;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    carousel.scrollTo({ left, behavior: reducedMotion ? "instant" : "smooth" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    scrollOneCard(event.key === "ArrowLeft" ? -1 : 1);
  };

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
          <div className="google-reviews-carousel">
            <div
              className="google-reviews-list"
              ref={carouselRef}
              role="region"
              aria-label="Carrousel des avis Google"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
            {snapshot.reviews.map((review) => (
              <figure
                className="google-review"
                key={review.id}
                data-expanded={expandedReviews.has(review.id) || undefined}
              >
                <figcaption>
                  <strong>{review.author}</strong>
                  <span className="google-review-stars" aria-label={`${review.rating} sur 5 étoiles`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={15} fill={index < review.rating ? "currentColor" : "none"} aria-hidden="true" />
                    ))}
                  </span>
                </figcaption>
                {review.comment ? (
                  <ReviewComment
                    comment={review.comment}
                    expanded={expandedReviews.has(review.id)}
                    contentId={`google-review-${review.id}`}
                    onToggle={() => toggleReview(review.id)}
                  />
                ) : <p>Avis sans commentaire.</p>}
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
            <div className="google-reviews-controls" aria-label="Commandes du carrousel">
              <button type="button" onClick={() => scrollOneCard(-1)} aria-label="Afficher l’avis précédent">
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => scrollOneCard(1)} aria-label="Afficher l’avis suivant">
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
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
