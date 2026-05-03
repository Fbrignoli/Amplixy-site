import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CalInit } from "@/components/CalInit";
import { SketchUnderline } from "@/components/ui/SketchUnderline";
import { FAQ_ITEMS, schemaFAQPage } from "@/lib/schema";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQPage()) }} />
      <CalInit />
      <Navbar />

      {/* ============================================
          HERO
          ============================================ */}
      <header id="hero" className="relative min-h-screen flex flex-col justify-center bg-paper">
        <div className="mx-auto max-w-5xl px-6 pt-32 pb-12 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              Conseil IA & Change Management — ETI 50-500 personnes
            </span>
          </Reveal>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
            Votre DG vous demande une feuille de route IA.{" "}
            <span className="relative inline-block">
              Vos équipes ne savent pas par où commencer.
              <SketchUnderline color="#3b82f6" opacity={0.6} strokeWidth={3} variant="wide" />
            </span>
          </h1>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Vos premières demandes de devis sont toutes au-dessus de 200 000€.
              <br className="hidden sm:block" />
              Amplixy accompagne les ETI à construire leur premier projet IA concret —
              cadré, livré, absorbé par les équipes. Sans les tarifs des grands cabinets.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
              >
                Réserver 30 min de cadrage
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Logos parcours fondateur */}
          <Reveal delay={0.5}>
            <p className="mt-12 text-xs text-slate-400 font-medium uppercase tracking-wider">
              Organisations où Florian a travaillé
            </p>
          </Reveal>
        </div>

        <div className="pb-12">
          <Reveal delay={0.6}>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 px-6">
              {[
                { src: "/img/partenaire/AIRBUS_Blue.png", alt: "Airbus" },
                { src: "/img/partenaire/CMA_CGM_logo.svg.png", alt: "CMA CGM" },
                { src: "/img/partenaire/dircom-logo_amu_cmjn.png", alt: "Aix-Marseille Université" },
                { src: "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png", alt: "NAF NAF" },
              ].map((partner) => (
                <Image
                  key={partner.alt}
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={40}
                  sizes="120px"
                  className="h-8 sm:h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
                />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Reveal delay={0.7}>
            <a href="#probleme" className="flex flex-col items-center text-slate-400 hover:text-accent transition-colors">
              <svg width="40" height="50" viewBox="0 0 40 50" className="animate-bounce">
                <path d="M20 5 Q18 25 20 35 Q22 25 20 5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 30 L20 42 L28 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </header>

      <main id="main-content">
        {/* Wave : paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q150 50 300 30 T600 35 T900 25 T1200 30 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            LE PROBLÈME
            ============================================ */}
        <section id="probleme" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-glow text-xs font-semibold uppercase tracking-wider">
                  Le constat
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  L&apos;IA, tout le monde en parle.{" "}
                  <span className="relative inline-block">
                    Personne ne sait par où commencer.
                    <SketchUnderline color="currentColor" opacity={0.4} strokeWidth={3} />
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              <Reveal delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">La pression sans direction</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Depuis 18 mois, tout le monde parle d&apos;IA. Les articles, les conférences, les concurrents qui annoncent leurs projets. La direction générale pose la question à chaque COMEX. Mais personne n&apos;a de réponse claire sur ce qu&apos;on fait, par où on commence, et ce que ça va changer concrètement pour l&apos;organisation.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">Le POC mort en sandbox</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Beaucoup d&apos;ETI ont déjà tenté quelque chose : un POC avec un prestataire, un projet pilote avec une startup IA, un groupe de travail interne. Résultat : une démo impressionnante en comité, puis rien. Pas de déploiement, pas d&apos;adoption par les équipes, pas de ROI mesuré. Le projet dort dans un slide de présentation.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">L&apos;écart de ticket avec les grands cabinets</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Les cabinets de conseil connus répondent à partir de 200 000€. Pour un projet de transformation IA dans une ETI de 200 personnes, c&apos;est disproportionné. Et souvent, ce sont des juniors qui exécutent sous la supervision d&apos;un partner qui apparaît en réunion de cadrage et en livraison finale.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Wave : blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 25 Q200 45 400 30 T800 35 T1200 25 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            MÉTHODE
            ============================================ */}
        <section id="methode" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-4">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Méthode
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Chaque mission{" "}
                  <span className="relative inline-block">
                    commence petit
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  On valide avant d&apos;investir. On livre avant de continuer. Aucune obligation de continuer après chaque étape.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Discovery */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-display text-xl font-bold text-ink">Discovery</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">5 000€ HT</p>
                    <p className="text-sm text-charcoal">~2 semaines</p>
                  </div>
                  <ul className="space-y-3 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Audit organisationnel : quels processus consomment du temps inutilement ?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Identification de 2-3 cas d&apos;usage prioritaires avec estimation d&apos;effort et de ROI
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Livrable : rapport 15-20 pages avec recommandations priorisées et plan d&apos;action
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Aucun engagement sur la suite. La Discovery se suffit à elle-même.
                  </p>
                </div>
              </Reveal>

              {/* POC */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-2xl border-2 border-blue-dark p-8 h-full flex flex-col relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                      La plupart commencent ici
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-display text-xl font-bold text-ink">POC</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">15 000 — 20 000€ HT</p>
                    <p className="text-sm text-charcoal">4 à 6 semaines</p>
                  </div>
                  <ul className="space-y-3 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Développement et déploiement d&apos;un premier cas d&apos;usage IA opérationnel
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Implication des équipes métier dès la conception
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Livrable : prototype fonctionnel déployé + plan de change management
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Pré-requis : avoir réalisé une Discovery ou disposer d&apos;un cas d&apos;usage identifié.
                  </p>
                </div>
              </Reveal>

              {/* Déploiement */}
              <Reveal delay={0.2}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">3</span>
                    <h3 className="font-display text-xl font-bold text-ink">Déploiement</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">30 000€+ HT</p>
                    <p className="text-sm text-charcoal">Forfait ou retainer mensuel</p>
                  </div>
                  <ul className="space-y-3 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Accompagnement au déploiement à l&apos;échelle sur plusieurs périmètres métier
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Plan de formation, gestion du changement, indicateurs d&apos;adoption
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      Suivi opérationnel jusqu&apos;à l&apos;ancrage dans les pratiques
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Format : retainer mensuel ou forfait selon le périmètre défini.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <p className="mt-8 text-center text-sm text-charcoal max-w-2xl mx-auto">
                La majorité des clients commencent par une Discovery. Certains s&apos;arrêtent là — la clarté obtenue leur suffit pour avancer en interne. D&apos;autres continuent vers le POC, puis le Déploiement. Aucune clause de reconduction cachée.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Wave : paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 35 Q250 15 500 35 T1000 30 T1200 35 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            TARIFS
            ============================================ */}
        <section id="tarifs" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Tarifs
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Des tarifs{" "}
                  <span className="relative inline-block">
                    transparents
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto">
                  Pas de &quot;nous vous enverrons un devis après un premier entretien&quot;. Les tarifs sont affichés parce qu&apos;ils filtrent les projets non adaptés en amont — et parce que la transparence est une posture, pas un aveu de faiblesse.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left px-6 py-4 text-white/80 text-sm font-semibold">Étape</th>
                      <th className="text-left px-6 py-4 text-white/80 text-sm font-semibold">Tarif</th>
                      <th className="text-left px-6 py-4 text-white/80 text-sm font-semibold hidden sm:table-cell">Durée indicative</th>
                      <th className="text-left px-6 py-4 text-white/80 text-sm font-semibold hidden lg:table-cell">Ce que vous obtenez</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-5">
                        <span className="font-display font-bold text-white">Discovery</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-bold text-white text-lg">5 000€ HT</span>
                      </td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden sm:table-cell">~2 semaines</td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden lg:table-cell">Audit + identification cas d&apos;usage + rapport priorisé</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5">
                        <span className="font-display font-bold text-white">POC</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-bold text-white text-lg">15 000 — 20 000€ HT</span>
                      </td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden sm:table-cell">4 à 6 semaines</td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden lg:table-cell">Prototype IA opérationnel + plan de change management</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5">
                        <span className="font-display font-bold text-white">Déploiement</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-bold text-white text-lg">30 000€+ HT</span>
                      </td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden sm:table-cell">Forfait ou retainer</td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden lg:table-cell">Accompagnement à l&apos;échelle + adoption équipes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-center text-white/70 text-sm">
                Chaque mission est cadrée par contrat avant démarrage. Pas de facturation à l&apos;heure non prévue, pas de dépassement sans accord préalable.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Wave : blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q300 50 600 25 T1200 30 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            CE QUE JE NE FAIS PAS
            ============================================ */}
        <section id="perimetre" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center mb-10">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Périmètre
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                  Ce que je{" "}
                  <span className="relative inline-block">
                    ne fais pas
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal">Pour être clair dès maintenant :</p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {[
                "Je ne développe pas de modèles de langage (LLM) ni d'algorithmes de machine learning. Je travaille sur le déploiement organisationnel de l'IA, pas sur la recherche.",
                "Je ne produis pas de rapports d'audit data science. Si votre problème est la qualité de vos données ou votre architecture data, je peux orienter mais ce n'est pas mon périmètre.",
                "Je ne livre pas de PowerPoint sans livrable opérationnel. Chaque mission se termine par quelque chose de fonctionnel ou d'actionnable directement.",
                "Je ne prends pas de missions en dessous du niveau Discovery (5 000€ HT). En dessous de ce seuil, il est impossible de faire un travail sérieux.",
                "Je ne sous-traite pas les missions à des consultants juniors. Je suis l'unique interlocuteur sur toute la durée de la mission.",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white rounded-xl border border-ink/10 px-6 py-4 flex items-start gap-4">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-slate-300 mt-0.5" />
                    <p className="text-sm text-charcoal leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-6 text-center text-sm text-charcoal italic">
                Si votre projet sort de ce périmètre, je vous le dirai dès notre premier appel et je vous orienterai vers qui peut réellement vous aider.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Wave : paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 25 Q200 45 400 28 T800 32 T1200 28 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            CAS CONCRET
            ============================================ */}
        <section id="cas-concret" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Cas concret
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Pas du discours.{" "}
                  <span className="relative inline-block">
                    De l&apos;expérience terrain.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Image
                    src="/img/partenaire/CMA_CGM_logo.svg.png"
                    alt="CMA CGM"
                    width={100}
                    height={32}
                    className="h-8 w-auto object-contain brightness-0 invert opacity-80"
                  />
                  <span className="text-white/40">·</span>
                  <span className="text-white/60 text-sm">Mission en cours</span>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Contexte</p>
                    <p className="text-white text-sm leading-relaxed">
                      Pilotage de la transformation digitale au sein de l&apos;équipe Architecture IT du groupe <strong className="text-white">CMA-CGM</strong>, en tant que Chef de Projet Digital. Mission en cours.
                    </p>
                    <p className="text-white/70 text-sm mt-2">
                      Organisation : équipe pluridisciplinaire 50+ personnes réparties sur plusieurs sites.
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Rôle</p>
                    <p className="text-white text-sm leading-relaxed">
                      Chef de Projet Digital — pilotage d&apos;une équipe pluridisciplinaire architecture IT, coordination des parties prenantes, suivi de déploiement sur des chantiers de transformation dans une organisation à forte contrainte réglementaire et logistique internationale.
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Ce que ça prouve</p>
                    <p className="text-white text-sm leading-relaxed">
                      Piloter une transformation dans une organisation de cette taille, c&apos;est exactement le même type de problème qu&apos;une ETI face à un projet IA : des équipes à aligner, des contraintes métier à respecter, des décisions à cadrer pour que ça ne reste pas en sandbox.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-center text-white/50 text-xs">
                Zéro chiffre client, zéro livrable précis, zéro donnée interne. Ce qui est partagé ici : le rôle, le périmètre, la nature de la mission.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Wave : blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 32 Q350 50 700 28 T1200 35 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            LE FONDATEUR
            ============================================ */}
        <section id="fondateur" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <div className="relative max-w-[220px] mx-auto lg:mx-0">
                  <div className="absolute inset-0 -m-3 border-2 border-ink/10 rounded-2xl border-dashed"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden">
                    <Image
                      src="/img/florian-brignoli.png"
                      alt="Florian Brignoli — Fondateur Amplixy, Conseil IA & Change Management"
                      width={220}
                      height={220}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <span className="inline-block mb-3 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                    Le fondateur
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-2">
                    Florian Brignoli
                  </h2>
                  <p className="text-charcoal text-sm mb-5">Ingénieur + Chef de Projet, basé à Melun (77)</p>

                  <div className="space-y-4 text-charcoal text-sm leading-relaxed">
                    <p>
                      Parcours : <strong className="text-ink">Airbus, Dassault Systèmes, NAF NAF, Aix-Marseille Université</strong>, et une mission CDP en cours dans un groupe international du transport maritime (équipe 50+ personnes).
                    </p>
                    <p>
                      J&apos;opère mon propre système agentique IA en production dans mes processus quotidiens. Ce n&apos;est pas de la veille technologique — c&apos;est du déploiement réel, avec les problèmes réels que ça pose : intégration dans des workflows existants, adoption par les utilisateurs, gouvernance des données, gestion des erreurs.
                    </p>
                    <p>
                      Mon positionnement est celui d&apos;un chef de projet qui pilote le déploiement IA en organisation. Pas d&apos;un architecte LLM qui vous explique comment fonctionne GPT-4. Pas d&apos;un data scientist qui optimise vos modèles. Quelqu&apos;un qui fait le pont entre les décisions de direction, les équipes tech, et les équipes métier — et qui s&apos;assure que le projet sort de la sandbox.
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://www.linkedin.com/in/florianbrignoli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-dark hover:text-blue-dark/80 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Profil LinkedIn — Florian Brignoli
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================
            ENGAGEMENT
            ============================================ */}
        <section id="engagement" className="pt-0 pb-16 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="bg-ink rounded-2xl p-8 lg:p-10 text-white">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  Engagement
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
                  Ce que je{" "}
                  <span className="relative inline-block">
                    m&apos;engage à tenir
                    <SketchUnderline color="currentColor" opacity={0.4} strokeWidth={3} />
                  </span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Interlocuteur unique",
                      text: "Florian Brignoli est votre interlocuteur du premier appel de cadrage à la livraison finale. Pas de sous-traitance déguisée, pas de hand-off vers un collaborateur junior en cours de mission.",
                    },
                    {
                      title: "Contrat avant démarrage",
                      text: "Chaque mission est cadrée par un contrat signé avant démarrage. Le périmètre, les livrables, les jalons et le tarif sont définis et acceptés mutuellement. Aucun dépassement sans accord préalable.",
                    },
                    {
                      title: "Livrables concrets à chaque étape",
                      text: "La durée des missions est indicative car elle dépend de votre organisation. Je ne promets pas de miracle en temps record. Je promets des livrables concrets et actionnables à chaque étape.",
                    },
                    {
                      title: "Transparence sur le périmètre",
                      text: "Si lors de notre premier appel je juge que votre problème sort de mon périmètre ou que je ne suis pas la bonne personne pour vous aider, je vous le dirai clairement.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h3 className="font-display font-bold text-white">{item.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================
            FAQ
            ============================================ */}
        <section id="faq" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  FAQ
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                  Questions{" "}
                  <span className="relative inline-block">
                    fréquentes
                    <SketchUnderline />
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => (
                <Reveal key={item.q} delay={idx * 0.04}>
                  <details className="group bg-white rounded-xl border border-ink/10 overflow-hidden transition-all hover:border-ink/20">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-display font-semibold text-ink list-none [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <svg aria-hidden="true" focusable="false" className="w-5 h-5 shrink-0 transition-transform group-open:rotate-45 text-ink/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-charcoal text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wave : paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 25 Q200 45 400 28 T800 32 T1200 28 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            CTA FINAL — Cal.com embed
            ============================================ */}
        <section id="contact" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="bg-white rounded-2xl p-8 lg:p-12 text-center relative">
                <svg className="absolute top-4 left-4 w-8 h-8 text-ink/10" viewBox="0 0 30 30">
                  <path d="M5 25 L5 5 L25 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <svg className="absolute bottom-4 right-4 w-8 h-8 text-ink/10" viewBox="0 0 30 30">
                  <path d="M25 5 L25 25 L5 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>

                <div className="relative z-10">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-3">
                    Réservez 30 minutes de{" "}
                    <span className="relative inline-block">
                      cadrage
                      <SketchUnderline strokeWidth={3} />
                    </span>
                  </h2>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    Pas de pitch commercial — on discute de votre situation concrète et on voit si Amplixy peut vous aider. Gratuit. Sans engagement.
                  </p>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="florianbrignoli/meetup"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    aria-label="Réserver 30 minutes de cadrage gratuit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
                  >
                    Réserver 30 min de cadrage
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 H19 M15 8 L19 12 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-charcoal">
                    <a
                      href="https://www.linkedin.com/in/florianbrignoli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-ink transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Message LinkedIn
                    </a>
                    <a href="mailto:contact@amplixy.com" className="flex items-center gap-2 hover:text-ink transition-colors">
                      contact@amplixy.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Wave : blue-dark → paper (before footer) */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 32 Q350 50 700 28 T1200 35 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>
      </main>

      <Footer />
    </>
  );
}
