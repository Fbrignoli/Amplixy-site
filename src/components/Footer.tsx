import Link from "next/link";
import { AnalyticsSettingsButton } from "@/components/AnalyticsConsent";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p className="footer-line">
          Amplixy EURL · 16 B rue de la Rochette, 77000 Melun · SIREN 999 167 760
        </p>

        <div className="footer-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          <Link href="/conformite-ia">Conformité IA &amp; données</Link>
          <Link href="/politique-confidentialite">
            Politique de confidentialité
          </Link>
          <AnalyticsSettingsButton />
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>

        <p className="footer-line">© {new Date().getFullYear()} Amplixy</p>
      </div>
    </footer>
  );
};
