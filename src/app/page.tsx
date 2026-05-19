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
              Outils IA pour PME — 10 à 50 personnes
            </span>
          </Reveal>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
            Moins de tâches répétitives.{" "}
            <span className="underline decoration-blue-500/70 decoration-4 underline-offset-[0.14em]">
              Plus de temps pour vos clients.
            </span>
          </h1>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Amplixy accompagne les dirigeants de PME dans le cadrage, la mise en place et l&apos;adoption d&apos;outils IA utiles à leurs opérations : suivi client, devis, relances, comptes-rendus, documentation interne.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
              >
                Planifier un échange de cadrage
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#outils"
                className="text-sm font-semibold text-charcoal hover:text-blue-dark transition-colors mt-1"
              >
                Voir les cas d&apos;usage →
              </a>
              <p className="text-xs text-slate-400 mt-2">30 minutes pour qualifier le contexte, les irritants et le niveau de maturité.</p>
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
            LE PROBLÈME — travail dispersé
            ============================================ */}
        <section id="probleme" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-glow text-xs font-semibold uppercase tracking-wider">
                  Le constat
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Votre équipe est capable. Elle passe juste{" "}
                  <span className="relative inline-block">
                    trop de temps sur les mauvaises choses.
                    <SketchUnderline color="currentColor" opacity={0.4} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Vos équipes jonglent entre les demandes qui arrivent de partout, les devis qui prennent une heure quand ils devraient en prendre dix minutes, et les relances qui glissent quand l&apos;opérationnel déborde. Ce n&apos;est pas un problème d&apos;organisation — c&apos;est un problème d&apos;outils.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Wave : blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 25 Q200 45 400 30 T800 35 T1200 25 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            LES OUTILS IA — 6 cartes
            ============================================ */}
        <section id="outils" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Outils IA
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Ce qu&apos;on met en place{" "}
                  <span className="relative inline-block">
                    concrètement.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  Pas de grand projet. On choisit un premier sujet qui coûte du temps à vos équipes, on le règle en quelques semaines, et on voit ce que ça change.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Traitement des demandes clients",
                  text: "Qualifier et orienter les demandes entrantes sans les laisser s'accumuler — mail, téléphone, formulaire.",
                  gain: "Si +10 demandes par jour : 30 min par personne gagnées, soit 14 jours de travail économisés par an.",
                },
                {
                  title: "Préparation des devis",
                  text: "Préparer une base exploitable à partir des infos disponibles : anciens modèles, tarifs, contraintes. Le commercial adapte et valide.",
                  gain: "À raison de 3 devis par semaine : 50 min économisées par devis, soit 15 jours par an.",
                },
                {
                  title: "Pilotage des relances",
                  text: "Identifier les dossiers à relancer au bon moment, avec le contexte utile et un message prêt à ajuster.",
                  gain: "2h récupérées par semaine sur le suivi commercial, soit 12 jours par an.",
                },
                {
                  title: "Comptes-rendus exploitables",
                  text: "Transformer une réunion ou un appel en synthèse utile : décisions, actions, responsables.",
                  gain: "30 min par réunion, soit jusqu'à 15 jours économisés par an pour une équipe à 5 réunions par semaine.",
                },
                {
                  title: "Base documentaire métier",
                  text: "Rendre les procédures et réponses types interrogeables en langage naturel — plus besoin de chercher dans les dossiers.",
                  gain: "20 min de recherche par jour évitées, soit 9 jours par an et par personne.",
                },
                {
                  title: "Réponses récurrentes cadrées",
                  text: "Préparer des réponses pour les questions fréquentes (tarifs, délais, conditions) à partir des éléments validés par l'entreprise. L'équipe ajuste et envoie.",
                  gain: "1h par jour récupérée pour le support ou l'ADV, soit 27 jours par an.",
                },
              ].map((tool, i) => (
                <Reveal key={tool.title} delay={i * 0.05}>
                  <article className="bg-white rounded-2xl border border-ink/10 p-6 h-full flex flex-col transition-all hover:border-blue-dark/30 hover:shadow-paper">
                    <h3 className="font-display text-base font-bold text-ink mb-3 leading-snug">{tool.title}</h3>
                    <p className="text-sm text-charcoal leading-relaxed flex-1">{tool.text}</p>
                    <p className="mt-3 pt-3 border-t border-ink/10 text-sm font-semibold text-blue-dark leading-snug">{tool.gain}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <p className="mt-10 text-center text-sm text-charcoal max-w-2xl mx-auto italic">
                Vous gardez la main sur chaque outil mis en place.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Wave : paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 35 Q300 15 600 35 T1200 25 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            MÉTHODE — diagnostiquer, déployer, faire adopter
            ============================================ */}
        <section id="methode" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Méthode
                </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Comment on travaille{" "}
                  <span className="relative inline-block">
                    ensemble.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                  On commence par comprendre ce qui prend du temps chez vous — et on avance étape par étape.
                </p>
              </div>
            </Reveal>

            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "On comprend votre fonctionnement",
                  text: "Une demi-journée avec vous et 1 à 2 personnes terrain. On identifie ce qui prend du temps, pourquoi, et ce qui serait le plus utile à automatiser.",
                },
                {
                  step: "2",
                  title: "On choisit le bon premier sujet",
                  text: "Le plus utile d'abord. Celui qui va changer quelque chose rapidement pour votre équipe.",
                },
                {
                  step: "3",
                  title: "On construit dans vos outils existants",
                  text: "Mail, Drive, CRM, tableur : on travaille dans l'environnement que vous utilisez déjà.",
                },
                {
                  step: "4",
                  title: "On forme les personnes concernées",
                  text: "Chaque utilisateur teste sur ses propres exemples. Il comprend ce que l'IA fait, ce qu'elle ne fait pas, et garde la main sur les validations.",
                },
                {
                  step: "5",
                  title: "On mesure et on ajuste",
                  text: "Les premières semaines servent à affiner. On reste disponibles jusqu'à ce que l'outil soit vraiment adopté.",
                },
              ].map((item, i) => (
                <Reveal key={item.step} delay={i * 0.05}>
                  <li className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex gap-5">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Wave : blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q300 50 600 25 T1200 30 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            OFFRE — 3 paliers
            ============================================ */}
        <section id="tarifs" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Offre
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Trois façons de{" "}
                  <span className="relative inline-block">
                    travailler ensemble.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  On commence par un diagnostic pour voir ce qui prend du temps. On met ensuite en place l&apos;outil qui change quelque chose. Et on continue à vos côtés si vous le souhaitez.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Diagnostic IA Express */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border-2 border-blue-dark p-8 h-full flex flex-col">
                  <div className="mb-5">
                    <span className="inline-flex whitespace-nowrap bg-blue-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Recommandé
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-display text-xl font-bold text-ink">Diagnostic IA Express</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">1 500€ HT</p>
                    <p className="text-sm text-charcoal">Demi-journée à 1 jour</p>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed mb-5">
                    Une demi-journée à une journée pour identifier où va le temps, prioriser ce qu&apos;on peut automatiser, et repartir avec un plan d&apos;action clair.
                  </p>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Vous repartez avec</p>
                  <ul className="space-y-2 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Carte des tâches qui prennent du temps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>3 cas d&apos;usage priorisés : impact, effort, risque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Estimation du temps récupérable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Plan d&apos;action 30 jours</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Le diagnostic peut se suffire à lui-même. Vous repartez avec une décision claire.
                  </p>
                </div>
              </Reveal>

              {/* Mise en place */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-display text-xl font-bold text-ink">Mise en place d&apos;un outil IA métier</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">À partir de 5 000€ HT</p>
                    <p className="text-sm text-charcoal">2 à 4 semaines</p>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed mb-5">
                    On prend le cas le plus utile et on le met en place avec votre équipe : paramétrage, formation, mesure.
                  </p>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Inclus</p>
                  <ul className="space-y-2 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Cadrage du flux actuel et fonctionnement cible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Paramétrage IA / automatisation et garde-fous confidentialité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Validation humaine sur les sorties sensibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Documentation courte et formation des utilisateurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Mesure avant / après</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Idéal après le diagnostic, ou si vous savez déjà ce que vous voulez automatiser.
                  </p>
                </div>
              </Reveal>

              {/* Run */}
              <Reveal delay={0.2}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">3</span>
                    <h3 className="font-display text-xl font-bold text-ink">Run IA PME</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">300 à 800€ HT / mois</p>
                    <p className="text-sm text-charcoal">Engagement mensuel léger</p>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed mb-5">
                    Après la mise en place, on ajuste l&apos;outil selon les retours de vos équipes et on ouvre de nouveaux cas d&apos;usage au fil du temps.
                  </p>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Inclus</p>
                  <ul className="space-y-2 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Ajustement des consignes et automatisations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Support d&apos;usage et ajustements terrain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Revue mensuelle des usages et gains observés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Ajout léger de nouveaux cas d&apos;usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Veille sur les évolutions utiles à votre secteur</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Optionnel. Vous gardez la main à tout moment.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <p className="mt-8 text-center text-sm text-charcoal max-w-2xl mx-auto">
                Chaque mission démarre avec un cadre clair : sujet, résultat attendu et tarif validés ensemble.
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
            RÉASSURANCE — L'IA reste sous contrôle
            ============================================ */}
        <section id="reassurance" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Vos garanties
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Vous gardez le contrôle{" "}
                  <span className="relative inline-block">
                    à chaque étape.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm">
                  Chaque outil travaille sous le regard de votre équipe, encadré et ajustable à tout moment.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Validation humaine", text: "Les réponses, devis et contenus sensibles restent validés par les personnes responsables." },
                { title: "Données cadrées", text: "Les données utiles, sensibles et confidentielles sont identifiées et encadrées avant le démarrage." },
                { title: "Règles visibles", text: "L'équipe connaît le rôle de l'outil, son fonctionnement, et garde la main à tout moment." },
                { title: "Usage vérifié", text: "Les retours de vos équipes servent à affiner l'outil jusqu'à ce qu'il soit vraiment utile." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 h-full">
                    <h3 className="font-display text-sm font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wave : blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q300 50 600 25 T1200 30 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            CADRE DE TRAVAIL — adapté PME
            ============================================ */}
        <section id="perimetre" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center mb-10">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Comment on travaille
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                  Ce sur quoi vous{" "}
                  <span className="relative inline-block">
                    pouvez compter.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal">Un cadre clair, adapté aux PME qui veulent avancer vite :</p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {[
                "La formation est liée à un outil concret, sur des exemples issus du quotidien de l'équipe.",
                "Les outils existants restent le point de départ : messagerie, Drive, CRM, tableurs ou logiciel métier.",
                "Les gains sont estimés pendant le diagnostic, puis vérifiés après usage.",
                "Les devis, réponses clients et contrats gardent une validation humaine avant envoi.",
                "Le déroulé reste clair pour vous : objectifs, étapes, qui fait quoi.",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white rounded-xl border border-ink/10 px-6 py-4 flex items-start gap-4">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-slate-300 mt-0.5" />
                    <p className="text-sm text-charcoal leading-relaxed">{item}</p>
                  </div>
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
            EXPERTISE — conseil, delivery, adoption
            ============================================ */}
        <section id="cas-concret" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Expertise
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Une expertise en opérations, outils{" "}
                  <span className="relative inline-block">
                    et accompagnement terrain.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm">
                  Florian Brignoli construit Amplixy à partir d&apos;une expérience concrète : piloter des projets IT, faire adopter des outils et organiser le travail d&apos;équipe dans des environnements exigeants.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Image
                    src="/img/partenaire/CMA_CGM_logo.svg.png"
                    alt="CMA CGM"
                    width={100}
                    height={32}
                    className="h-7 w-auto object-contain brightness-0 invert opacity-70"
                  />
                  <span className="text-white/30">·</span>
                  <span className="text-white/50 text-xs">Expérience terrain en environnement IT exigeant</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Le socle</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Florian a piloté des projets IT, coordonné des équipes et mis en place des outils dans des environnements où les usages devaient vraiment s&apos;installer dans le quotidien.
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">La conviction</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Un outil IA fonctionne quand il répond à un vrai processus, avec des règles claires et des personnes impliquées dès le départ.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">L&apos;application PME</p>
                  <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                    Pour une PME, cette approche permet d&apos;avancer vite : un premier sujet concret, un outil mis en place, une équipe qui l&apos;utilise vraiment.
                  </p>
                </div>
              </div>
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
            CABINET
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
                      alt="Florian Brignoli — Fondateur d'Amplixy"
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
                    À propos
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-2">
                    Amplixy, cabinet conseil IA basé à Melun
                  </h2>
                  <p className="text-charcoal text-sm mb-5">Cadrage opérationnel, automatisation IA, adoption des usages</p>

                  <div className="space-y-4 text-charcoal text-sm leading-relaxed">
                    <p>
                      Amplixy accompagne les PME qui veulent structurer leurs usages IA avec une approche sérieuse : comprendre le processus, choisir le bon cas, livrer un outil utilisable, former les équipes.
                    </p>
                    <p>
                      Florian Brignoli dirige Amplixy. Ancien chef de projet technique, il traite l&apos;IA comme un sujet d&apos;organisation autant que d&apos;outil.
                    </p>
                    <p>
                      L&apos;intervention est conçue pour les dirigeants et leurs équipes : un cadre simple, des résultats concrets, une attention forte à ce que ça s&apos;utilise vraiment.
                    </p>
                  </div>

                  <div className="mt-6 mb-8">
                    <a
                      href="https://www.linkedin.com/in/florianbrignoli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-dark hover:text-blue-dark/80 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Voir le profil du dirigeant
                    </a>
                  </div>

                  {/* Logos — parcours professionnel */}
                  <div>
                    <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wider mb-4">
                      Expériences professionnelles mobilisées
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
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
                          width={100}
                          height={32}
                          sizes="100px"
                          className="h-7 w-auto object-contain opacity-35 hover:opacity-60 transition-opacity"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
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
                    Prenons 30 minutes pour trouver{" "}
                    <span className="relative inline-block">
                      le bon premier cas
                      <SketchUnderline strokeWidth={3} />
                    </span>
                  </h2>
                  <p className="text-charcoal max-w-md mx-auto mb-6 text-sm">
                    On part d&apos;une question simple : quelle tâche pèse vraiment sur votre équipe, et comment un outil IA peut l&apos;alléger dans votre organisation actuelle ?
                  </p>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    En 30 minutes, on clarifie le sujet, ce qui est faisable rapidement, et la prochaine étape.
                  </p>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="florianbrignoli/meetup"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    aria-label="Réserver 30 minutes de cadrage gratuit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
                  >
                    Réserver un premier échange
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 H19 M15 8 L19 12 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="mt-3 text-xs text-charcoal/60">30 min. Gratuit. On part de votre situation réelle.</p>

                  <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-charcoal">
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
