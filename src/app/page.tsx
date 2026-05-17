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
            Fini les tâches répétitives qui{" "}
            <span className="relative inline-block">
              ralentissent votre PME.
              <SketchUnderline color="#3b82f6" opacity={0.6} strokeWidth={3} variant="wide" />
            </span>
          </h1>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Amplixy met en place des outils IA simples pour aider vos équipes à répondre plus vite, relancer au bon moment, produire des comptes-rendus propres et retrouver l&apos;information utile sans perdre des heures.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
              >
                Identifier mes gains de temps
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#outils"
                className="text-sm font-semibold text-charcoal hover:text-blue-dark transition-colors mt-1"
              >
                Voir les outils possibles →
              </a>
              <p className="text-xs text-slate-400 mt-2">Gratuit. Sans engagement. Pas de pitch commercial.</p>
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
            LE PROBLÈME — temps perdu, pas outil manquant
            ============================================ */}
        <section id="probleme" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-glow text-xs font-semibold uppercase tracking-wider">
                  Le constat
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Ce n&apos;est pas une question d&apos;outil.{" "}
                  <span className="relative inline-block">
                    C&apos;est une question de temps perdu.
                    <SketchUnderline color="currentColor" opacity={0.4} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Dans beaucoup de PME, les journées se remplissent de petites tâches invisibles : copier une information, reformuler un mail, chercher un document, refaire un compte-rendu, penser à relancer, demander où en est un dossier. L&apos;IA devient utile quand elle retire ces frictions du quotidien.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              <Reveal delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">Les demandes clients se perdent</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Le client écrit par mail, formulaire, téléphone, WhatsApp ou LinkedIn. Quelqu&apos;un répond, quelqu&apos;un oublie, quelqu&apos;un note dans un coin. Le suivi dépend trop de la mémoire de l&apos;équipe. Résultat : des demandes oubliées, des temps de réponse longs, et un dirigeant obligé de repasser derrière.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">Les devis dorment dans une boîte mail</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Le prospect est chaud. Mais le devis prend deux jours parce qu&apos;il faut retrouver l&apos;ancien modèle, reformuler, vérifier les infos, relancer quelqu&apos;un en interne. Le prospect refroidit pendant ce temps. Un prospect attend rarement ; vos devis ne devraient pas non plus.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">Les relances dépendent de la mémoire</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Tout le monde sait qu&apos;il faut relancer, mais personne ne le fait au bon moment. Les opportunités se perdent sans bruit. Ce n&apos;est pas parce qu&apos;un prospect ne répond pas qu&apos;il est perdu — encore faut-il penser à le relancer. Et la mémoire d&apos;une équipe n&apos;est pas un système de suivi.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <p className="mt-10 text-center text-white/70 text-sm max-w-2xl mx-auto leading-relaxed italic">
                Si trois personnes perdent chacune 30 minutes par jour en copier-coller, recherche d&apos;information et relances manuelles, cela représente déjà plus de 30 heures par mois — qui ne vont ni au client, ni au commercial, ni à la production.
              </p>
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
                  On commence par{" "}
                  <span className="relative inline-block">
                    un outil concret.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  Pas une plateforme de plus à brancher. Un outil IA qui retire une vraie friction de votre quotidien, intégré à vos outils existants, utilisé par les équipes qui en ont besoin.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Demandes clients résumées et priorisées",
                  text: "Chaque demande entrante (mail, formulaire, WhatsApp) est captée, résumée, qualifiée et orientée vers la bonne personne. Vous savez qui doit répondre, quoi répondre, et quelle relance prévoir.",
                },
                {
                  title: "Devis préparés plus vite",
                  text: "L'IA prépare un brouillon de devis, retrouve les éléments utiles dans vos anciens documents et propose une réponse claire. L'humain vérifie, ajuste et envoie. Moins de copier-coller, meilleure réactivité commerciale.",
                },
                {
                  title: "Relances commerciales suivies",
                  text: "L'outil repère les dossiers à relancer, prépare le message dans votre ton, et rappelle à l'équipe quoi faire. Moins de dépendance à la mémoire du commercial ou du dirigeant. Meilleure conversion sans recruter.",
                },
                {
                  title: "Comptes-rendus transformés en actions",
                  text: "Notes ou transcriptions d'appel transformées en compte-rendu clair : décisions prises, actions à mener, responsables, mail de suivi prêt à envoyer. Une réunion utile, c'est une réunion qui laisse des décisions et un suivi.",
                },
                {
                  title: "Base documentaire interrogeable",
                  text: "Vos procédures, anciens devis, mails utiles, documents internes sont structurés dans une base que l'équipe interroge en langage naturel. Moins d'interruptions pour redemander la même chose. Capitalisation du savoir.",
                },
                {
                  title: "Réponses répétitives préparées",
                  text: "Les questions qui reviennent toujours (parents, clients, prospects, prestataires) reçoivent un brouillon de réponse cohérente, à valider en un coup d'œil. Votre équipe garde la main — elle part juste d'un brouillon propre.",
                },
              ].map((tool, i) => (
                <Reveal key={tool.title} delay={i * 0.05}>
                  <article className="bg-white rounded-2xl border border-ink/10 p-6 h-full flex flex-col transition-all hover:border-blue-dark/30 hover:shadow-paper">
                    <h3 className="font-display text-base font-bold text-ink mb-3 leading-snug">{tool.title}</h3>
                    <p className="text-sm text-charcoal leading-relaxed flex-1">{tool.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <p className="mt-10 text-center text-sm text-charcoal max-w-2xl mx-auto italic">
                On part de vos outils existants et de vos vrais usages. Pas besoin de changer toute votre organisation pour gagner du temps dès maintenant.
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
                  Une méthode simple :{" "}
                  <span className="relative inline-block">
                    diagnostiquer, déployer, faire adopter.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                  Pas une stratégie IA de 60 pages. Cinq étapes pour passer d&apos;une tâche pénible à un outil que vos équipes utilisent vraiment.
                </p>
              </div>
            </Reveal>

            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "On repère les tâches répétitives qui coûtent du temps",
                  text: "Atelier de cadrage avec vous et 1 à 3 personnes terrain. On cartographie ce qui mange réellement les journées — pas ce qu'on imagine en théorie.",
                },
                {
                  step: "2",
                  title: "On choisit l'outil IA le plus rentable à créer",
                  text: "Scoring impact / effort / risque sur les cas d'usage identifiés. On sélectionne celui qui combine gain de temps mesurable et faisabilité avec votre stack actuelle.",
                },
                {
                  step: "3",
                  title: "On le met en place avec vos outils existants",
                  text: "Pas de refonte. On branche l'outil IA sur ce que vous utilisez déjà (mail, Drive, logiciel métier). Conception du fonctionnement cible, paramétrage, garde-fous confidentialité.",
                },
                {
                  step: "4",
                  title: "On forme l'équipe et on garde une validation humaine",
                  text: "Sessions courtes, sur les vrais cas d'usage, par les utilisateurs concernés — pas une journée de slides génériques. Validation humaine obligatoire sur les sorties sensibles.",
                },
                {
                  step: "5",
                  title: "On mesure le gain et on améliore",
                  text: "Mesure avant/après. Ajustement des prompts et automatisations selon les retours terrain. L'outil ne reste pas figé, il s'affine avec l'usage réel.",
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
                  Trois niveaux selon{" "}
                  <span className="relative inline-block">
                    votre maturité.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  Tarifs affichés. Pas de &quot;nous vous enverrons un devis après un premier entretien&quot;. Vous savez où on commence et où on va avant le premier appel.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Diagnostic IA Express */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border-2 border-blue-dark p-8 h-full flex flex-col relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                      La plupart commencent ici
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
                    En une demi-journée, on identifie où votre équipe perd vraiment du temps et quel outil IA peut être mis en place sans bouleverser votre organisation.
                  </p>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Vous repartez avec</p>
                  <ul className="space-y-2 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Carte des irritants opérationnels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>3 cas d&apos;usage IA priorisés (impact / effort / risque)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Estimation du temps économisable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Plan d&apos;action 30 jours</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Aucun engagement sur la suite. Le diagnostic se suffit à lui-même.
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
                    On prend une tâche récurrente qui fatigue votre équipe, on la transforme en outil simple, et on vous laisse avec un système utilisable, documenté et maîtrisé.
                  </p>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Inclus</p>
                  <ul className="space-y-2 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Cadrage du process actuel + conception cible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Paramétrage outils IA / automatisation, garde-fous confidentialité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Validation humaine sur les sorties sensibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Documentation simple + formation de l&apos;équipe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Mesure avant / après</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Pré-requis : un cas d&apos;usage identifié (issu d&apos;un Diagnostic ou évident).
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
                    L&apos;outil ne reste pas figé. On l&apos;améliore avec vos retours terrain pour qu&apos;il continue à faire gagner du temps.
                  </p>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Inclus</p>
                  <ul className="space-y-2 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Ajustement prompts et automatisations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Support usage et correction des irritants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Revue mensuelle des gains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Ajout léger de nouveaux cas d&apos;usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span>Veille outils utile, sans survente</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Optionnel. Vous restez autonomes si vous préférez.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <p className="mt-8 text-center text-sm text-charcoal max-w-2xl mx-auto">
                Chaque mission est cadrée par contrat avant démarrage. Si le périmètre change en cours : on s&apos;arrête, on re-cadre, on re-valide. Pas de facturation à l&apos;heure non prévue, pas de dépassement sans accord préalable.
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
                  Réassurance
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  L&apos;IA reste{" "}
                  <span className="relative inline-block">
                    sous contrôle.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm">
                  Cinq garde-fous intégrés à chaque outil mis en place, dès le cadrage — pas en option ajoutée à la fin.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Validation humaine", text: "Sur toutes les sorties sensibles. L'IA propose, l'humain valide." },
                { title: "Confidentialité dès le cadrage", text: "Certaines données ne doivent pas partir dans certains outils. On le tranche avant de brancher." },
                { title: "Documentation simple", text: "Vos équipes savent comment l'outil marche et comment le faire évoluer." },
                { title: "Pas de refonte globale", text: "On travaille avec vos outils existants. Une seule friction à la fois." },
                { title: "Priorité aux gains visibles", text: "Mesure avant/après. Si l'outil ne fait pas gagner de temps, il n'a pas sa place." },
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
            CE QUE JE NE FAIS PAS — adapté PME
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
                <p className="mt-4 text-charcoal">Pour vous éviter d&apos;investir un premier appel sur un sujet hors périmètre :</p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {[
                "Je ne vends pas de formation IA générique en deux jours de slides PowerPoint. Une formation OPCO classique ne change pas les pratiques. Je forme avec les outils utilisés au quotidien, par les utilisateurs qui en ont besoin.",
                "Je ne déploie pas une plateforme de plus à brancher sur vos outils existants. Si l'outil n'est pas intégré à votre quotidien, il devient un onglet de plus que personne n'utilise.",
                "Je ne promets pas « 5 heures gagnées par jour » avant la mesure. C'est fort commercialement, mais malhonnête sans diagnostic. On estime au diagnostic, on mesure après mise en place.",
                "Je ne déploie pas sans validation humaine sur les sorties sensibles. Sinon vous le payez plus tard, en mauvaise réponse client ou en fuite de donnée. Plus coûteux que le gain de temps qu'on venait chercher.",
                "Je ne sous-traite pas les missions à des consultants juniors. Je suis l'unique interlocuteur sur toute la durée — du diagnostic à la mise en place.",
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
                Si votre projet sort de ce périmètre, je vous le dirai dès le premier appel et je vous orienterai vers qui peut réellement vous aider.
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
            CAS CONCRET — terrain CMA-CGM, leçon transférable PME
            ============================================ */}
        <section id="cas-concret" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Terrain
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Ce que j&apos;apprends en alignant 50 personnes{" "}
                  <span className="relative inline-block">
                    sur un chantier de transformation
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm">
                  Pas une référence commerciale — le terrain d&apos;où je parle.
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
                  <span className="text-white/50 text-xs">Mission en cours depuis octobre 2023</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">La situation</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Lead Chapter au sein de l&apos;équipe Architecture IT de <strong className="text-white">CMA-CGM</strong> (50+ personnes), depuis octobre 2023 : change management, animation d&apos;équipe, dynamiques agiles. Trois acteurs aux métriques différentes à aligner sur un même chantier : architectes IT, direction métier, managers d&apos;équipe. Trois langages, trois calendriers, trois priorités.
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Ce que ça enseigne</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Le principal obstacle à un déploiement n&apos;est pas technique. C&apos;est l&apos;alignement humain : faire converger des équipes aux cultures différentes (terrain, ADV, direction) sur un même outil. Dans une PME 10-50 personnes, le problème est identique, à plus petite échelle — avec moins de marge d&apos;erreur.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">La leçon transférable</p>
                  <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                    Un outil IA réussit quand l&apos;adoption est intégrée dès la conception — pas ajoutée en fin de parcours pour « faire accepter » quelque chose que personne n&apos;a vu venir. Et le cadre confidentialité doit être posé au même moment — pas après le premier incident.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-center text-white/40 text-xs">
                Zéro chiffre client, zéro livrable précis, zéro donnée interne — uniquement le rôle, le contexte et la nature de la mission.
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
                      alt="Florian Brignoli — Fondateur Amplixy, outils IA pour PME"
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
                      J&apos;opère mon propre système agentique IA en production dans mes processus quotidiens. Ce n&apos;est pas de la veille technologique — c&apos;est ce que ça implique vraiment au quotidien : intégrer dans des workflows existants, gérer l&apos;adoption, gouverner les données, traiter les erreurs en temps réel.
                    </p>
                    <p>
                      Mon métier : <strong className="text-ink">retirer les tâches répétitives qui ralentissent vos équipes, en mettant en place un premier outil IA concret</strong>. Pas un architecte LLM qui vous explique comment fonctionne GPT-4. Pas un data scientist. Quelqu&apos;un qui fait le pont entre vos outils existants et vos vrais usages — et qui s&apos;assure que l&apos;outil est utilisé.
                    </p>
                    <p>
                      Ce positionnement vient du terrain : <strong className="text-ink">Lead Chapter au sein de l&apos;Architecture IT de CMA-CGM</strong> (change management, animation d&apos;équipe, dynamiques agiles) depuis octobre 2023.
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
                      Profil LinkedIn — Florian Brignoli
                    </a>
                  </div>

                  {/* Logos — parcours, pas "clients Amplixy" */}
                  <div>
                    <p className="text-xs text-charcoal/50 font-medium uppercase tracking-wider mb-4">
                      Organisations où Florian a travaillé
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
                      title: "Vous parlez toujours à moi",
                      text: "Du diagnostic à la mise en place. Pas de sous-traitance déguisée, pas de hand-off vers un junior en cours de mission.",
                    },
                    {
                      title: "Périmètre signé avant de démarrer",
                      text: "Chaque mission est cadrée par contrat. Périmètre, livrables, jalons, tarif. Si quelque chose change : on s'arrête, on re-cadre, on re-valide.",
                    },
                    {
                      title: "Un outil utilisable, pas une démo",
                      text: "Je ne livre pas un POC qui dort dans un slide. Chaque mission se termine par un outil que vos équipes utilisent — documenté et maîtrisé.",
                    },
                    {
                      title: "Je vous dis si vous êtes pas la bonne PME pour ça",
                      text: "Si lors du premier appel je juge que votre situation sort de mon périmètre, je vous le dis et je vous oriente. Pas de mission forcée.",
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
                    Réservez 30 minutes pour identifier{" "}
                    <span className="relative inline-block">
                      vos gains de temps
                      <SketchUnderline strokeWidth={3} />
                    </span>
                  </h2>
                  <p className="text-charcoal max-w-md mx-auto mb-6 text-sm">
                    Pas de pitch commercial. On part de votre quotidien — quelles tâches répétitives ralentissent vraiment votre équipe — et on voit ensemble si un outil IA peut soulager.
                  </p>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    En 30 min vous repartez avec une lecture claire : où sont les vraies frictions, lequel des outils IA aurait l&apos;impact le plus rapide, et combien de temps vous pourriez gagner.
                  </p>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="florianbrignoli/meetup"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    aria-label="Réserver 30 minutes de cadrage gratuit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
                  >
                    Réserver 30 min de cadrage gratuit
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 H19 M15 8 L19 12 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="mt-3 text-xs text-charcoal/60">30 min. Gratuit. Sans engagement. Pas de pitch commercial.</p>

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
