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
              Conseil IA & Change Management — ETI
            </span>
          </Reveal>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
            Vos équipes utilisent l&apos;IA en cachette.{" "}
            <span className="relative inline-block">
              Avec vos données.
              <SketchUnderline color="#3b82f6" opacity={0.6} strokeWidth={3} variant="wide" />
            </span>
          </h1>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Reprenez le contrôle. Faites-en gagner du temps. Sans former vos équipes au lance-pierre, sans exposer vos données.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
              >
                Réserver 30 min de cadrage
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-xs text-slate-400">Gratuit. Sans engagement. Pas de pitch commercial.</p>
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
                  Ce qui bloque
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  L&apos;IA avance vite.{" "}
                  <span className="relative inline-block">
                    Votre organisation, moins.
                    <SketchUnderline color="currentColor" opacity={0.4} strokeWidth={3} />
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              <Reveal delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">Vos équipes utilisent l&apos;IA. Sans vous.</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Vos collaborateurs utilisent ChatGPT depuis 18 mois. Vous le savez. Vous avez peut-être fermé les yeux. Le problème : ils le font avec vos données. Fichiers clients. Comptes-rendus. Briefs commerciaux. Ces données partent dans des serveurs hors RGPD, entraînent peut-être des modèles tiers, et vous n&apos;avez aucun contrôle. C&apos;est du shadow IT IA. Selon Cyberhaven et Microsoft Work Trend Index, 11 à 15% des salariés ont déjà copié-collé des données internes dans une IA publique. Le piège : ne pas prendre l&apos;IA en main n&apos;arrête pas le shadow IT. Il l&apos;aggrave.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">Le POC mort en sandbox</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Vous avez peut-être déjà investi dans un POC. Démo convaincante en comité. L&apos;outil fonctionnait. Six mois plus tard : personne ne l&apos;utilise. Les équipes ont repris leurs anciens réflexes. Ce n&apos;est pas un problème d&apos;outil. C&apos;est un problème de formation. On a livré une technologie sans intégrer les équipes qui devaient l&apos;utiliser. Pas de sessions courtes sur les vrais cas d&apos;usage. Pas de suivi à J+30. 80% des POC IA ne sortent jamais de la phase de test. La raison est presque toujours la même.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-3">200 000€ pour un POC. C&apos;est leur plancher.</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Vous avez demandé des devis. Capgemini Invent, Onepoint, un cabinet recommandé par un autre DSI. Tous arrivent à partir de 200k€. Avec une équipe de juniors encadrée par un partner qui n&apos;apparaît qu&apos;au lancement et à la livraison. Pour une ETI de 200 personnes, le ratio coût/risque ne tient pas. Vous avez besoin d&apos;un premier projet IA cadré, livré en 2 mois, qui sort vraiment de la sandbox — pas d&apos;un programme de transformation à 200k€.
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
            FRICTIONS IA CONCRÈTES
            ============================================ */}
        <section id="frictions" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Frictions réelles
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Trois blocages que vos équipes{" "}
                  <span className="relative inline-block">
                    vont rencontrer
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  Pas de théorie. Trois situations qui se produisent dans toute ETI qui démarre l&apos;IA.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Friction 1 */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                      Friction
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-3">
                    Le shadow IT IA déjà installé
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-5">
                    Votre équipe commerciale gagne du temps sur les synthèses de mails. Votre équipe RH accélère la rédaction des comptes-rendus d&apos;entretien. Votre service support répond aux clients avec ChatGPT. Mais personne ne vous l&apos;a signalé officiellement. C&apos;est non dit, non cadré, non gouverné. C&apos;est du shadow IT IA — déjà installé chez vous.
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold text-ink/60 uppercase tracking-wider mb-2">Diagnostic</p>
                    <p className="text-sm text-charcoal leading-relaxed">
                      La friction réelle n&apos;est pas &quot;comment déployer l&apos;IA&quot;. C&apos;est &quot;comment récupérer le shadow IT IA qui existe déjà, le sécuriser, et en faire quelque chose de mesurable&quot;. Avant de lancer un projet IA, faites un inventaire informel du shadow IT avec 3 managers. Votre premier cas d&apos;usage est probablement déjà là.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Friction 2 */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                      Friction
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-3">
                    Personne ne sait quoi déployer en priorité
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-5">
                    La direction dit &quot;on veut utiliser l&apos;IA&quot;. Votre équipe IT reçoit la demande. Trois réunions plus tard, personne n&apos;a tranché sur le périmètre.
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold text-ink/60 uppercase tracking-wider mb-2">Diagnostic</p>
                    <p className="text-sm text-charcoal leading-relaxed">
                      La friction est tarifaire avant d&apos;être stratégique. Quand le périmètre n&apos;est pas cadré, le devis grands cabinets monte à 200k€ — sans garantie de résultat. Essayez de reformuler votre projet IA en une phrase qui contient un chiffre concret de gain de temps. Si vous n&apos;y arrivez pas, il manque encore un audit.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Friction 3 */}
              <Reveal delay={0.2}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                      Friction
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-3">
                    L&apos;équipe data dit non — et elle a raison
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-5">
                    La direction pousse pour un projet IA. L&apos;équipe data signale que les données ne sont pas prêtes : qualité insuffisante, silos, gouvernance inexistante. Impasse.
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold text-ink/60 uppercase tracking-wider mb-2">Diagnostic</p>
                    <p className="text-sm text-charcoal leading-relaxed">
                      Le pré-requis data n&apos;est pas un détail technique. C&apos;est le premier point à auditer avant tout projet IA. Identifier le périmètre data réellement disponible permet de choisir un cas d&apos;usage faisable plutôt que de bloquer 6 mois sur un idéal inaccessible.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="mt-10 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-dark hover:text-blue-dark/80 transition-colors"
                >
                  Votre friction ressemble à ça ? Parlons-en.
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
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
                  Trois étapes pour{" "}
                  <span className="relative inline-block">
                    sortir de la sandbox
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  Chaque étape répond à une friction précise. Aucune obligation de continuer — chaque palier se suffit à lui-même.
                </p>
                <p className="mt-3 text-charcoal max-w-2xl mx-auto text-sm">
                  Discovery / POC / Déploiement. Construit pour éviter trois erreurs : déployer sans cadrer (le POC qui dort), cadrer sans sécuriser (le shadow IT qui se développe), sécuriser sans former (l&apos;outil que personne n&apos;utilise).
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Discovery */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border-2 border-blue-dark p-8 h-full flex flex-col relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                      1 — La plupart commencent ici
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-display text-xl font-bold text-ink">Discovery</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">5 000€ HT</p>
                    <p className="text-sm text-charcoal">~2 semaines</p>
                  </div>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Votre friction</p>
                  <p className="text-sm text-charcoal italic mb-4">
                    &quot;On ne sait pas par où commencer. On a plein d&apos;idées mais aucune ne semble prioritaire.&quot;
                  </p>
                  <ul className="space-y-3 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Gain de temps</strong> : audit des process pour identifier où l&apos;IA crée de la valeur mesurable rapidement (heures gagnées par semaine, par équipe, par cas d&apos;usage)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Sécurité</strong> : cartographie du shadow IT existant + analyse des flux sensibles concernés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Formation</strong> : état des lieux des compétences équipes — qui est prêt, qui doit être accompagné</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-charcoal leading-relaxed">
                    Livrable : rapport priorisé + plan d&apos;action concret + cadre sécurité, que vous continuiez ou non avec Amplixy.
                  </p>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Aucun engagement sur la suite. La Discovery se suffit à elle-même.
                  </p>
                </div>
              </Reveal>

              {/* POC */}
              <Reveal delay={0.15}>
                <div className="bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-dark text-white flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-display text-xl font-bold text-ink">POC</h3>
                  </div>
                  <div className="space-y-1 mb-6">
                    <p className="text-2xl font-bold text-ink">15 000 — 20 000€ HT</p>
                    <p className="text-sm text-charcoal">4 à 6 semaines</p>
                  </div>
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Votre friction</p>
                  <p className="text-sm text-charcoal italic mb-4">
                    &quot;On a un cas d&apos;usage. Mais entre l&apos;idée et quelque chose d&apos;utilisé par nos équipes, le chemin est flou.&quot;
                  </p>
                  <ul className="space-y-3 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Gain de temps</strong> : prototype IA construit avec les équipes métier, mesure des heures gagnées en conditions réelles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Formation</strong> : sessions courtes calibrées sur les outils utilisés — pas une journée de slides PowerPoint génériques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Sécurité</strong> : règles d&apos;usage documentées avant le premier utilisateur, hébergement UE, DPA RGPD signé, flux auditable</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-charcoal leading-relaxed">
                    Livrable : prototype fonctionnel déployé + plan de change management + cadre sécurité activé.
                  </p>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Pré-requis : avoir réalisé une Discovery ou disposer d&apos;un cas d&apos;usage déjà identifié et chiffré.
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
                  <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider mb-3">Votre friction</p>
                  <p className="text-sm text-charcoal italic mb-4">
                    &quot;Le POC a fonctionné. Maintenant on veut généraliser — mais l&apos;organisation résiste.&quot;
                  </p>
                  <ul className="space-y-3 text-sm text-charcoal leading-relaxed flex-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Gain de temps</strong> : passage à l&apos;échelle sur plusieurs périmètres métier, suivi du ROI en heures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Formation continue</strong> : managers formés à reconnaître les usages, sessions de montée en compétence régulières</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-dark mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Sécurité en gouvernance</strong> : alertes sur les outils non-validés, gouvernance shadow IT en continu</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-xs text-charcoal/60 border-t border-slate-100 pt-4">
                    Format : retainer mensuel ou forfait selon le périmètre.
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
                  Pas de &quot;nous vous enverrons un devis après un premier entretien&quot;. Les tarifs sont affichés.
                </p>
                <p className="mt-3 text-white/70 max-w-xl mx-auto text-sm">
                  Pourquoi c&apos;est important : un cabinet qui cache ses prix attend de voir si vous pouvez payer plus. C&apos;est leur métier. Mais ce n&apos;est pas le vôtre — vous voulez savoir si l&apos;investissement IA tient économiquement, dès la première lecture.
                </p>
                <p className="mt-3 text-white/70 max-w-xl mx-auto text-sm">
                  ROI à garder en tête : une équipe de 10 personnes qui gagne 5h/semaine grâce à un cas d&apos;usage IA bien intégré, c&apos;est ~12 500€/mois libérés (50€/h coût chargé). La Discovery se rentabilise en 2 semaines de gain de temps équipe.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left px-6 py-4 text-white/80 text-sm font-semibold">Étape</th>
                      <th className="text-left px-6 py-4 text-white/80 text-sm font-semibold">Tarif HT</th>
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
                      <td className="px-6 py-5 text-white/70 text-sm hidden lg:table-cell">Audit + identification cas d&apos;usage chiffrés + cartographie shadow IT + plan d&apos;action</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5">
                        <span className="font-display font-bold text-white">POC</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-bold text-white text-lg">15 000 — 20 000€ HT</span>
                      </td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden sm:table-cell">4-6 semaines</td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden lg:table-cell">Prototype IA opérationnel + équipes formées + cadre sécurité activé</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5">
                        <span className="font-display font-bold text-white">Déploiement</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-bold text-white text-lg">30 000€+ HT</span>
                      </td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden sm:table-cell">Forfait ou retainer</td>
                      <td className="px-6 py-5 text-white/70 text-sm hidden lg:table-cell">Passage à l&apos;échelle + formation continue + gouvernance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-center text-white/70 text-sm">
                Chaque mission est cadrée par contrat avant démarrage. Si le périmètre change en cours de mission : on s&apos;arrête, on re-cadre, on re-valide. Pas de facturation à l&apos;heure non prévue, pas de dépassement sans accord préalable.
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
                <p className="mt-4 text-charcoal">Pour vous éviter d&apos;investir un premier appel sur un sujet hors périmètre :</p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {[
                "Je ne développe pas de modèles de langage (LLM) ni d'algorithmes de machine learning. Pour ça, vous avez besoin d'un labo de recherche ou d'un éditeur (OpenAI, Mistral, Anthropic). Mon métier, c'est de déployer ces modèles en organisation.",
                "Je ne produis pas de rapports d'audit data science. Si votre problème est la qualité de vos données ou votre architecture data, je peux orienter vers le bon profil — mais ce n'est pas mon périmètre.",
                "Je ne forme pas en deux jours de PowerPoint génériques. Je forme avec les outils utilisés au quotidien, par les utilisateurs qui en ont besoin. Une formation OPCO classique ne change pas les pratiques.",
                "Je ne déploie pas sans cadre sécurité. Sinon vous le payez plus tard, en incident RGPD ou en shadow IT incontrôlé. Plus coûteux que le gain de temps qu'on venait chercher.",
                "Je ne sous-traite pas les missions à des consultants juniors. Je suis l'unique interlocuteur sur toute la durée.",
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
            CAS CONCRET
            ============================================ */}
        <section id="cas-concret" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Terrain
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Ce qu&apos;on apprend en alignant 50 personnes{" "}
                  <span className="relative inline-block">
                    sur un chantier IA
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
                      Lead Chapter au sein de l&apos;équipe Architecture IT de <strong className="text-white">CMA-CGM</strong> (50+ personnes), depuis octobre 2023. Trois acteurs aux métriques de succès différentes à aligner sur un même chantier : architectes IT (mesurés sur la robustesse), direction métier (mesurée sur les délais), managers d&apos;équipe (mesurés sur l&apos;adoption). Trois langages, trois calendriers, trois priorités. Chacun a raison de son côté.
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Ce que ça enseigne</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Le principal obstacle à un déploiement IA n&apos;est pas technique. C&apos;est l&apos;alignement : faire converger des équipes aux cultures différentes (tech, métier, direction) sur un cas d&apos;usage commun, avec des contraintes de calendrier et de budget réelles. Ce problème est identique dans une ETI qui démarre un projet IA — à plus petite échelle, avec moins de marge de manœuvre.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">La leçon transférable</p>
                  <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                    Un projet IA réussit quand le change management est intégré dès la conception. Pas ajouté en fin de parcours pour &quot;faire adopter&quot; un outil que personne n&apos;a vu venir. Et le cadre sécurité doit être posé au même moment — pas après la première fuite.
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
                      J&apos;opère mon propre système agentique IA en production dans mes processus quotidiens. Ce n&apos;est pas de la veille technologique — c&apos;est ce que ça implique vraiment : intégrer dans des workflows existants, gérer l&apos;adoption, gouverner les données, traiter les erreurs en temps réel.
                    </p>
                    <p>
                      Mon positionnement : <strong className="text-ink">profil change management qui pilote le déploiement IA en organisation</strong>. Pas un architecte LLM qui vous explique comment fonctionne GPT-4. Pas un data scientist qui optimise vos modèles. Quelqu&apos;un qui fait le pont entre la direction, la tech et le métier — et qui s&apos;assure que le projet sort de la sandbox.
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

                  {/* Logos — preuve discrète, parcours, pas "clients Amplixy" */}
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
                      text: "Du premier appel de cadrage à la livraison finale. Pas de sous-traitance déguisée, pas de hand-off vers un junior en cours de mission.",
                    },
                    {
                      title: "Périmètre signé avant de démarrer",
                      text: "Chaque mission est cadrée par contrat signé. Périmètre, livrables, jalons, tarif. Si quelque chose change en cours : on s'arrête, on re-cadre, on re-valide.",
                    },
                    {
                      title: "Un livrable utilisable à chaque palier",
                      text: "Je ne promets pas de miracle en temps record. Je promets des livrables actionnables à chaque étape — pas des slides en attente d'une suite.",
                    },
                    {
                      title: "Je vous dis si je suis pas la bonne personne",
                      text: "Si lors du premier appel je juge que votre problème sort de mon périmètre, je vous le dis et je vous oriente. Ce n'est pas de la générosité — c'est juste honnête.",
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
                    Réservez 30 minutes pour regarder{" "}
                    <span className="relative inline-block">
                      votre friction concrète
                      <SketchUnderline strokeWidth={3} />
                    </span>
                  </h2>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    Pas de pitch commercial. On part de votre situation réelle — où en êtes-vous, quelle est la friction principale, qu&apos;est-ce qui bloque vraiment — et on voit ensemble si Amplixy peut vous aider.
                  </p>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    En 30 min vous repartez avec une lecture claire sur trois axes : où vous pouvez gagner du temps mesurable, comment former vos équipes vraiment, et où sont les angles morts sécurité (shadow IT compris).
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
