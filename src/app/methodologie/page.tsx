"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Methodologie() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "diagnostique" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <Link
              href="/#probleme"
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
              Comment on obtient ce chiffre ?
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                Le chiffre de <strong>1 500€ minimum perdus par an et par salarié</strong> est une estimation
                conservatrice basée sur les données suivantes :
              </p>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6">
                <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                  <span>💸</span> Coût des licences SaaS
                </h2>
                <p className="text-charcoal mb-3">
                  Selon <strong>Gartner</strong>, <strong>30% des dépenses SaaS</strong> (soit 30% des 102 milliards de dollars en 2020) ne sont même pas utilisées.
                  Les entreprises sur-payent leurs solutions SaaS de 30% en moyenne.
                </p>
                <p className="text-charcoal mb-3">
                  En 2025, le coût moyen des licences SaaS est de <strong>4 000€ par salarié et par an</strong>.
                  Avec 30% sous-utilisées ou en doublon, cela représente :
                </p>
                <div className="bg-blue-dark/5 rounded-xl p-4 text-center">
                  <p className="font-display text-2xl font-bold text-blue-dark">4 000€ × 30% = 1 200€</p>
                  <p className="text-sm text-slate-600">perdus par salarié et par an</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-sm text-slate-500">Sources :</p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>
                      <a href="https://blog.payproglobal.com/fr/saas-spend-optimization" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-dark">PayPro Global - SaaS Spend Optimization (Gartner)</a>
                    </li>
                    <li>
                      <a href="https://www.followtribes.io/economie-outil/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-dark">Tribes - Économie d&apos;outils (Gartner)</a>
                    </li>
                    <li>
                      <a href="https://itsocial.fr/logiciel-agilite/logiciel-agilite-articles/la-gestion-des-logiciels-saas-est-devenue-une-question-strategique-majeure-pour-les-entreprises-en-2025/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-dark">ITSocial, 2025</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6">
                <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                  <span>🔍</span> Temps perdu à chercher l&apos;information
                </h2>
                <p className="text-charcoal mb-3">
                  Selon <strong>McKinsey</strong>, les employés passent en moyenne <strong>1,8 heure par jour</strong> (soit 9,3 heures par semaine)
                  à chercher et rassembler des informations. Cela représente environ <strong>4 jours par mois</strong>.
                </p>
                <p className="text-charcoal mb-3">
                  Avec un salaire médian en France de <strong>2 147€</strong>, le coût journalier est de 107€ (2 147€ ÷ 20 jours).
                </p>
                <div className="bg-blue-dark/5 rounded-xl p-4 text-center">
                  <p className="font-display text-2xl font-bold text-blue-dark">107€ × 4 jours × 12 mois = 5 136€</p>
                  <p className="text-sm text-slate-600">de temps perdu par salarié et par an</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    Source : <a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-dark">McKinsey Global Institute</a>
                  </p>
                </div>
              </div>

              <div className="bg-blue-dark rounded-2xl p-6 text-white mb-6">
                <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <span>📊</span> Total cumulé
                </h2>
                <div className="space-y-2 text-white/80 mb-4">
                  <p>Licences SaaS gaspillées : <strong className="text-white">1 200€</strong></p>
                  <p>Temps perdu à chercher l&apos;info : <strong className="text-white">5 136€</strong></p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="font-display text-3xl font-bold text-white">6 336€</p>
                  <p className="text-sm text-white/60">perdus par salarié et par an</p>
                </div>
              </div>

              <p className="text-charcoal">
                Pour une PME de 10 salariés, cela représente <strong>63 360€ par an</strong> —
                largement de quoi financer une structuration complète de vos outils.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <button
                data-cal-namespace="diagnostique"
                data-cal-link="brignoli-florian-oykak5/diagnostique"
                data-cal-origin="https://cal.eu"
                data-cal-config='{"theme":"light"}'
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-6 py-3 font-semibold transition-all hover:bg-blue-dark/90"
              >
                Réserver un diagnostic gratuit
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10 H15 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
