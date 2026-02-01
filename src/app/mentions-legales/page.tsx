"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-ink transition-colors mb-8"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <path d="M12 5 L7 10 L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Retour
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8">
              Mentions légales
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-slate max-w-none space-y-8">

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">1. Éditeur du site</h2>
                <p className="text-charcoal mb-2">
                  Le site <strong>amplixy.com</strong> est édité par :
                </p>
                <ul className="text-charcoal space-y-1">
                  <li><strong>Raison sociale :</strong> AMPLIXY</li>
                  <li><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</li>
                  <li><strong>Capital social :</strong> 1 000,00 €</li>
                  <li><strong>Siège social :</strong> 16 B Rue de la Rochette, 77000 Melun</li>
                  <li><strong>SIREN :</strong> 999 167 760</li>
                  <li><strong>SIRET :</strong> 999 167 760 00019</li>
                  <li><strong>RNE :</strong> Immatriculée au Registre National des Entreprises (INPI)</li>
                  <li><strong>Numéro TVA intracommunautaire :</strong> FR77 999 167 760</li>
                  <li><strong>Code NAF/APE :</strong> 62.02A - Conseil en systèmes et logiciels informatiques</li>
                  <li><strong>Date de création :</strong> 01/01/2026</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">2. Directeur de la publication</h2>
                <p className="text-charcoal">
                  <strong>Florian BRIGNOLI</strong><br />
                  Email : contact@amplixy.com
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">3. Hébergement</h2>
                <p className="text-charcoal">
                  Le site est hébergé par :<br />
                  <strong>Railway Corporation</strong><br />
                  548 Market St, PMB 68956<br />
                  San Francisco, California 94104<br />
                  États-Unis<br />
                  Site : <a href="https://railway.app" target="_blank" rel="noopener noreferrer" className="text-blue-dark underline">railway.app</a>
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">4. Propriété intellectuelle</h2>
                <p className="text-charcoal">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive d&apos;AMPLIXY ou de ses partenaires.
                  Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site,
                  quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable d&apos;AMPLIXY.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">5. Protection des données personnelles (RGPD)</h2>
                <p className="text-charcoal mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
                  vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles.
                </p>
                <p className="text-charcoal mb-4">
                  <strong>Données collectées :</strong> Les données personnelles collectées sur ce site sont limitées aux informations
                  que vous nous transmettez volontairement via le formulaire de contact ou la prise de rendez-vous (nom, email, téléphone).
                </p>
                <p className="text-charcoal mb-4">
                  <strong>Finalité :</strong> Ces données sont utilisées uniquement pour répondre à vos demandes et vous contacter
                  dans le cadre de nos services.
                </p>
                <p className="text-charcoal mb-4">
                  <strong>Conservation :</strong> Vos données sont conservées pendant une durée maximale de 3 ans après notre dernier contact.
                </p>
                <p className="text-charcoal">
                  Pour exercer vos droits ou pour toute question relative à vos données personnelles, contactez-nous à :
                  <a href="mailto:contact@amplixy.com" className="text-blue-dark underline ml-1">contact@amplixy.com</a>
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">6. Cookies</h2>
                <p className="text-charcoal mb-4">
                  Ce site utilise des cookies à des fins de mesure d&apos;audience (analytics).
                  Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site.
                </p>
                <p className="text-charcoal">
                  <strong>Outil utilisé :</strong> Umami Analytics (solution respectueuse de la vie privée,
                  ne nécessitant pas de consentement selon les recommandations de la CNIL).
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">7. Limitation de responsabilité</h2>
                <p className="text-charcoal">
                  AMPLIXY s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
                  Toutefois, AMPLIXY ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
                  AMPLIXY décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                </p>
              </section>

              <section className="bg-white rounded-2xl p-6 border border-slate-100">
                <h2 className="font-display text-xl font-bold text-ink mb-4">8. Droit applicable</h2>
                <p className="text-charcoal">
                  Les présentes mentions légales sont régies par le droit français.
                  En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <p className="text-sm text-slate-500 mt-8">
                Dernière mise à jour : Février 2026
              </p>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
