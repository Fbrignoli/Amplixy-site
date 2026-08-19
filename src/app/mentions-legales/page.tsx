import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mentions légales — Amplixy",
  description:
    "Mentions légales d’Amplixy EURL, atelier numérique indépendant basé à Melun.",
  alternates: {
    canonical: "https://amplixy.com/mentions-legales",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function MentionsLegales() {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu" className="legal-page">
        <div className="site-shell legal-shell">
          <Link className="portfolio-back" href="/">
            <span aria-hidden="true">←</span>
            Retour à l’accueil
          </Link>

          <h1>Mentions légales</h1>

          <div className="legal-content">
            <section>
              <h2>1. Éditeur du site</h2>
              <p>
                Le site <strong>amplixy.com</strong> est édité par :
              </p>
              <ul>
                <li><strong>Raison sociale :</strong> AMPLIXY</li>
                <li><strong>Forme juridique :</strong> Entreprise unipersonnelle à responsabilité limitée (EURL)</li>
                <li><strong>Capital social :</strong> 1 000,00 €</li>
                <li><strong>Siège social :</strong> 16 B Rue de la Rochette, 77000 Melun</li>
                <li><strong>SIREN :</strong> 999 167 760</li>
                <li><strong>SIRET :</strong> 999 167 760 00019</li>
                <li><strong>Immatriculation :</strong> RCS Melun 999 167 760</li>
                <li><strong>RNE :</strong> Immatriculée au Registre National des Entreprises (INPI)</li>
                <li><strong>Numéro de TVA intracommunautaire :</strong> FR77 999 167 760</li>
                <li><strong>Code NAF/APE :</strong> 62.02A — Conseil en systèmes et logiciels informatiques</li>
                <li><strong>Date de création :</strong> 1er janvier 2026</li>
              </ul>
            </section>

            <section>
              <h2>2. Directeur de la publication</h2>
              <p>
                <strong>Florian Brignoli</strong><br />
                Email : <a href="mailto:contact@amplixy.com">contact@amplixy.com</a>
              </p>
            </section>

            <section>
              <h2>3. Hébergement</h2>
              <p>
                Le site est hébergé par :<br />
                <strong>HOSTINGER INTERNATIONAL LIMITED</strong><br />
                61 Lordou Vironos Street<br />
                6023 Larnaca<br />
                Chypre<br />
                Email contractuel : {" "}
                <a href="mailto:compliance@hostinger.com">compliance@hostinger.com</a><br />
                Téléphone officiel publié par Hostinger pour son bureau du
                registraire (HOSTINGER operations, UAB) : {" "}
                <a href="tel:+37064503378">+370 645 03378</a><br />
                Site : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">hostinger.fr</a>
              </p>
            </section>

            <section>
              <h2>4. Propriété intellectuelle</h2>
              <p>
                L’ensemble du contenu de ce site (textes, images, vidéos, logos,
                graphismes, etc.) est la propriété exclusive d’AMPLIXY ou de ses
                partenaires. Toute reproduction, représentation, modification,
                publication ou adaptation de tout ou partie des éléments du site,
                quel que soit le moyen ou le procédé utilisé, est interdite sans
                autorisation écrite préalable d’AMPLIXY.
              </p>
            </section>

            <section>
              <h2>5. Protection des données personnelles (RGPD)</h2>
              <p>
                Les traitements de données, leurs bases légales, leurs durées de
                conservation, les destinataires et les modalités d’exercice de
                vos droits sont décrits dans la {" "}
                <Link href="/politique-confidentialite">
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>
                Le site n’utilise pas de cookies publicitaires. La mesure
                d’audience Umami est bloquée tant que vous ne l’avez pas acceptée
                et votre refus n’empêche aucune fonctionnalité du site.
              </p>
              <p>
                Une exemption de consentement n’est possible que si toutes les
                conditions applicables sont démontrées. Amplixy ne la revendique
                pas pour sa configuration actuelle.
              </p>
            </section>

            <section>
              <h2>7. Limitation de responsabilité</h2>
              <p>
                AMPLIXY s’efforce d’assurer l’exactitude et la mise à jour des
                informations diffusées sur ce site. Une erreur ou indisponibilité
                peut néanmoins survenir. Cette information générale ne remplace
                pas un conseil adapté à votre situation. Aucune disposition de
                cette page n’exclut ni ne limite une responsabilité qui ne peut
                légalement l’être.
              </p>
            </section>

            <section>
              <h2>8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les règles de compétence prévues par les textes
                applicables déterminent la juridiction compétente.
              </p>
            </section>

            <section>
              <h2>9. Public professionnel</h2>
              <p>
                Les offres présentées sur amplixy.com sont destinées exclusivement
                à des clients agissant à des fins professionnelles. Les conditions
                commerciales applicables sont communiquées avant tout engagement.
              </p>
            </section>
          </div>

          <p className="legal-updated">Dernière mise à jour : 19 août 2026</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
