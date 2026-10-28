import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type Section = { readonly title: string; readonly paragraphs: readonly string[] };

export function TrustPage({ title, sections, children }: {
  title: string;
  sections: readonly Section[];
  children: React.ReactNode;
}) {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navbar />
      <main id="contenu" className="legal-page">
        <div className="site-shell legal-shell">
          <Link className="portfolio-back" href="/">
            <span aria-hidden="true">←</span>Retour à l’accueil
          </Link>
          <h1>{title}</h1>
          <div className="legal-content">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
