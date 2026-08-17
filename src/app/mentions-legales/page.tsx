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
                <li><strong>RNE :</strong> Immatriculée au Registre National des Entreprises (INPI)</li>
                <li><strong>Numéro de TVA intracommunautaire :</strong> FR77 999 167 760</li>
                <li><strong>Code NAF/APE :</strong> 62.02A — Conseil en systèmes et logiciels informatiques</li>
                <li><strong>Date de création :</strong> 2024</li>
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
                <strong>Hostinger International Ltd.</strong><br />
                61 Lordou Vironos Street<br />
                6023 Larnaca<br />
                Chypre<br />
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
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d’un
                droit d’accès, de rectification, de suppression et de portabilité
                de vos données personnelles.
              </p>
              <p>
                <strong>Données collectées :</strong> les données personnelles
                collectées sur ce site sont limitées aux informations que vous
                transmettez volontairement via le formulaire de contact ou la
                prise de rendez-vous (nom, email, téléphone).
              </p>
              <p>
                <strong>Finalité :</strong> ces données sont utilisées uniquement
                pour répondre à vos demandes et vous contacter dans le cadre de
                nos services.
              </p>
              <p>
                <strong>Conservation :</strong> vos données sont conservées
                pendant une durée maximale de trois ans après notre dernier
                contact.
              </p>
              <p>
                Pour exercer vos droits ou pour toute question relative à vos
                données personnelles, contactez-nous à : <a href="mailto:contact@amplixy.com">contact@amplixy.com</a>.
              </p>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>
                Ce site utilise des cookies à des fins de mesure d’audience. Ces
                cookies nous permettent de comprendre comment les visiteurs
                utilisent le site.
              </p>
              <p>
                <strong>Outil utilisé :</strong> Umami Analytics, une solution
                respectueuse de la vie privée ne nécessitant pas de consentement
                selon les recommandations de la CNIL.
              </p>
            </section>

            <section>
              <h2>7. Limitation de responsabilité</h2>
              <p>
                AMPLIXY s’efforce d’assurer l’exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, AMPLIXY ne peut
                garantir l’exactitude, la précision ou l’exhaustivité des
                informations mises à disposition. AMPLIXY décline toute
                responsabilité pour toute imprécision, inexactitude ou omission.
              </p>
            </section>

            <section>
              <h2>8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>

          <p className="legal-updated">Dernière mise à jour : février 2026</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
