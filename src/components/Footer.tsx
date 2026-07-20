import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="footer-brand">
            AMPLIXY<span>.</span>
          </p>
          <p>
            Conseil IA, sites web et outils métier conçus autour du travail
            réel.
          </p>
        </div>
        <div>
          <h3>Écrire</h3>
          <p>
            <a href="mailto:contact@amplixy.com">contact@amplixy.com</a>
            <br />
            <a href="tel:+33778209044">07 78 20 90 44</a>
          </p>
        </div>
        <div>
          <h3>Structure</h3>
          <p>
            Amplixy EURL
            <br />
            16 B Rue de la Rochette
            <br />
            77000 Melun · France
            <br />
            SIREN 999 167 760
          </p>
        </div>
      </div>
      <div className="site-shell legal">
        <span>© {new Date().getFullYear()} Amplixy</span>
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
};
