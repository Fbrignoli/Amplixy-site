"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "amplixy.analytics-consent";
const CONSENT_DATE_KEY = "amplixy.analytics-consent-date";
const UMAMI_DISABLE_KEY = "umami.disabled";
const OPEN_SETTINGS_EVENT = "amplixy:open-analytics-settings";
const SIX_MONTHS_MS = 183 * 24 * 60 * 60 * 1000;

type AnalyticsChoice = "accepted" | "refused";

function applyChoice(choice: AnalyticsChoice, recordDate = true) {
  localStorage.setItem(CONSENT_KEY, choice);
  if (recordDate) localStorage.setItem(CONSENT_DATE_KEY, String(Date.now()));

  if (choice === "accepted") {
    localStorage.removeItem(UMAMI_DISABLE_KEY);
  } else {
    localStorage.setItem(UMAMI_DISABLE_KEY, "1");
  }
}

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<AnalyticsChoice | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = localStorage.getItem(CONSENT_KEY);
      const storedAt = Number(localStorage.getItem(CONSENT_DATE_KEY));
      const isFresh =
        Number.isFinite(storedAt) && Date.now() - storedAt <= SIX_MONTHS_MS;
      const initialChoice =
        isFresh && (stored === "accepted" || stored === "refused")
          ? stored
          : null;

      if (initialChoice) {
        applyChoice(initialChoice, false);
        setChoice(initialChoice);
      } else {
        localStorage.removeItem(CONSENT_KEY);
        localStorage.removeItem(CONSENT_DATE_KEY);
        localStorage.setItem(UMAMI_DISABLE_KEY, "1");
      }

      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  const choose = (nextChoice: AnalyticsChoice) => {
    applyChoice(nextChoice);
    setChoice(nextChoice);
    setSettingsOpen(false);
  };

  const showPanel = ready && (choice === null || settingsOpen);

  return (
    <>
      {choice === "accepted" ? (
        <Script
          src="https://trafic.amplixy.cloud/script.js"
          data-website-id="0cbbe7f2-9749-460d-a88a-e665d0ee2904"
          data-domains="amplixy.com,www.amplixy.com"
          data-do-not-track="true"
          data-exclude-search="true"
          data-exclude-hash="true"
          strategy="afterInteractive"
        />
      ) : null}

      {showPanel ? (
        <section
          className="analytics-consent"
          role="dialog"
          aria-modal="false"
          aria-labelledby="analytics-consent-title"
          aria-describedby="analytics-consent-description"
        >
          <div>
            <h2 id="analytics-consent-title">Mesure d’audience</h2>
            <p id="analytics-consent-description">
              Avec votre accord, Amplixy utilise Umami, auto-hébergé, pour
              produire des statistiques de fréquentation. Le site fonctionne
              de la même façon si vous refusez.
            </p>
            <Link href="/politique-confidentialite#mesure-audience">
              En savoir plus
            </Link>
          </div>
          <div className="analytics-consent-actions">
            <button
              className="button button-secondary"
              type="button"
              onClick={() => choose("refused")}
            >
              Refuser
            </button>
            <button
              className="button button-primary"
              type="button"
              onClick={() => choose("accepted")}
            >
              Accepter
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function AnalyticsSettingsButton() {
  return (
    <button
      className="footer-privacy-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Gérer la mesure d’audience
    </button>
  );
}
