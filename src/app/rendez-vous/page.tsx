import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  CALENDAR_PROVIDER_NAME,
  CALENDAR_URL,
  CONTACT_EMAIL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Amplixy",
  description:
    "Réserver un échange de 30 minutes avec Amplixy et consulter les informations relatives à vos données.",
  alternates: {
    canonical: "https://amplixy.com/rendez-vous",
  },
};

export default function RendezVous() {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu" className="legal-page booking-page">
        <div className="site-shell legal-shell">
          <Link className="portfolio-back" href="/">
            <span aria-hidden="true">←</span>
            Retour à l’accueil
          </Link>

          <h1>Parler de votre besoin</h1>

          <div className="booking-panel">
            <div>
              <p className="booking-kicker">Un échange de 30 minutes</p>
              <h2>Choisissez votre créneau sur {CALENDAR_PROVIDER_NAME}</h2>
              <p>
                Le rendez-vous est organisé par Amplixy avec {CALENDAR_PROVIDER_NAME},
                Google Calendar et Google Meet. Ils traiteront vos nom, email,
                date et heure, fuseau horaire, notes libres et éventuels invités.
                Évitez toute donnée sensible dans les notes.
              </p>
              <p>
                Ces informations servent uniquement à organiser et préparer
                l’échange. Consultez la {" "}
                <Link href="/politique-confidentialite#prise-rendez-vous">
                  politique de confidentialité d’Amplixy
                </Link>{" "}
                avant de poursuivre.
              </p>
            </div>

            <a
              className="button button-primary booking-button"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continuer vers {CALENDAR_PROVIDER_NAME}
            </a>

            <p className="booking-alternative">
              Vous ne souhaitez pas utiliser {CALENDAR_PROVIDER_NAME}&nbsp;?
              Écrivez à {" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
