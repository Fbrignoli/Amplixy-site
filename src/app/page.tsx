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
              Agence numérique · Conseil · Sites web · Outils sur-mesure
            </span>
          </Reveal>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
            On vous aide à prendre{" "}
            <span className="underline decoration-blue-500/70 decoration-4 underline-offset-[0.14em]">
              le virage du numérique.
            </span>
          </h1>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Trois métiers, une agence : conseil IA, sites web pour TPE, outils sur-mesure pour les pros.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
              >
                Réserver un premier échange
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#piliers"
                className="text-sm font-semibold text-charcoal hover:text-blue-dark transition-colors mt-1"
              >
                Voir nos métiers →
              </a>
              <p className="text-xs text-slate-400 mt-2">30 minutes pour cadrer votre besoin.</p>
            </div>
          </Reveal>

        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Reveal delay={0.7}>
            <a href="#piliers" className="flex flex-col items-center text-slate-400 hover:text-accent transition-colors">
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
            LES 3 PILIERS
            ============================================ */}
        <section id="piliers" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-glow text-xs font-semibold uppercase tracking-wider">
                  Nos métiers
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Trois métiers, une seule{" "}
                  <span className="relative inline-block">
                    agence.
                    <SketchUnderline color="currentColor" opacity={0.4} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Vous avez un site à refaire, un outil à imaginer ou l&apos;IA à mettre dans vos opérations. On s&apos;en occupe.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pilier 1 — Conseil */}
              <Reveal delay={0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  <span className="text-glow text-xs font-mono font-semibold tracking-wider mb-4">01 · Conseil</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">Accompagnement IA</h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">
                    On installe l&apos;IA là où elle vous fait gagner du temps. Vos équipes savent s&apos;en servir, vous gardez la main.
                  </p>
                  <a
                    href="#conseil"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-glow hover:text-white transition-colors mt-auto"
                  >
                    En savoir plus <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>

              {/* Pilier 2 — Sites web */}
              <Reveal delay={0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  <span className="text-glow text-xs font-mono font-semibold tracking-wider mb-4">02 · Sites web</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">Vous rendre visibles en ligne</h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">
                    Un vrai site pour votre TPE : clair, rapide, utile. Pour que vos clients vous trouvent enfin sur internet.
                  </p>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-glow hover:text-white transition-colors mt-auto"
                  >
                    Voir le portfolio <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>

              {/* Pilier 3 — Outils sur-mesure */}
              <Reveal delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
                  <span className="text-glow text-xs font-mono font-semibold tracking-wider mb-4">03 · Outils sur-mesure</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">Des outils pour vos opérations</h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">
                    Un outil métier taillé pour votre façon de travailler. Vous l&apos;utilisez tous les jours, vous le gardez.
                  </p>
                  <a
                    href="#outils"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-glow hover:text-white transition-colors mt-auto"
                  >
                    Voir les outils <span aria-hidden="true">→</span>
                  </a>
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
            01 — CONSEIL (renvoi florianbrignoli.fr)
            ============================================ */}
        <section id="conseil" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  01 · Conseil
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Accompagnement IA, par{" "}
                  <span className="relative inline-block">
                    Florian Brignoli.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-6 text-charcoal max-w-2xl mx-auto leading-relaxed">
                  Vous avez une heure par jour qui disparaît sur des tâches qu&apos;une IA pourrait faire à votre place. On vous montre lesquelles, et on les installe.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center bg-white rounded-2xl border border-ink/10 p-8 lg:p-12">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 flex-shrink-0">
                  <div className="absolute inset-0 -m-3 border-2 border-blue-dark/15 rounded-full border-dashed"></div>
                  <div className="relative z-10 rounded-full overflow-hidden border border-ink/10">
                    <Image
                      src="/img/florian-brignoli.png"
                      alt="Florian Brignoli"
                      width={160}
                      height={160}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <p className="font-mono text-xs uppercase tracking-wider text-blue-dark mb-3">florianbrignoli.fr</p>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-ink mb-4 leading-tight">
                    Mettre l&apos;IA au service de votre business.
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-6 max-w-xl">
                    Pour les dirigeants de PME et les freelances. On choisit le bon endroit où mettre l&apos;IA dans votre business, et on s&apos;assure qu&apos;elle y reste utile.
                  </p>
                  <a
                    href="https://florianbrignoli.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-dark text-white px-6 py-3 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
                  >
                    Découvrir le site
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Wave : paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q200 50 400 28 T800 35 T1200 32 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            02 — PORTFOLIO SITES WEB
            ============================================ */}
        <section id="portfolio" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-glow text-xs font-semibold uppercase tracking-wider">
                  02 · Sites web
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Pour les TPE qui veulent enfin{" "}
                  <span className="relative inline-block">
                    exister en ligne.
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
                  </span>
                </h2>
                <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
                  Vos clients vous cherchent sur Google. Si vous n&apos;y êtes pas, ils trouvent quelqu&apos;un d&apos;autre. On construit le site qui vous remet sur la carte.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Vion Couverture",
                  sector: "BTP · Couverture",
                  desc: "Site vitrine pour une entreprise de couverture en Île-de-France. SEO local pour capter les chantiers du secteur.",
                  url: "https://vioncouverture.fr",
                },
                {
                  name: "Accord'Âme",
                  sector: "École de musique · Lyon",
                  desc: "Site pour une école de violon et d'alto. Identité douce, parcours pédagogique clair, formulaire d'inscription direct.",
                  url: "https://www.ecoleaccordame.fr",
                },
                {
                  name: "Corsicabrignoli",
                  sector: "Produits corses · Marchés",
                  desc: "Vitrine pour un commerçant de produits corses à Marseille. Pour que les clients des marchés le retrouvent en ligne.",
                  url: "https://corsicabrignoli.fr",
                },
              ].map((project, i) => (
                <Reveal key={project.name} delay={i * 0.05}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full flex flex-col transition-all hover:border-glow/50"
                  >
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">{project.sector}</p>
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-glow transition-colors">{project.name}</h3>
                    <p className="text-sm text-white/80 leading-relaxed flex-1">{project.desc}</p>
                    <p className="mt-4 pt-4 border-t border-white/10 text-sm font-semibold text-glow inline-flex items-center gap-2">
                      Voir le site <span aria-hidden="true">↗</span>
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <p className="mt-10 text-center text-sm text-white/70 max-w-2xl mx-auto">
                Vous voulez votre site ? <a href="#contact" className="font-semibold text-glow hover:underline">On en parle.</a>
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
            03 — OUTILS SUR-MESURE
            ============================================ */}
        <section id="outils" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  03 · Outils sur-mesure
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Un outil qui colle à{" "}
                  <span className="relative inline-block">
                    votre métier.
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-6 text-charcoal max-w-2xl mx-auto leading-relaxed">
                  Les SaaS génériques vous font plier votre process à leur logiciel. Ici, on fait l&apos;inverse : on construit un outil autour de votre façon de bosser.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Firaxy */}
              <Reveal delay={0.1}>
                <a
                  href="https://firaxy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl border border-ink/10 p-8 h-full flex flex-col transition-all hover:border-blue-dark/30 hover:shadow-paper"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold text-blue-dark uppercase tracking-wider">Premier produit</span>
                    <span className="text-xs font-semibold text-ink/40 uppercase tracking-wider">En chantier</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-blue-dark transition-colors">Firaxy</h3>
                  <p className="text-sm text-charcoal leading-relaxed flex-1 mb-4">
                    Le premier outil qu&apos;on construit pour structurer nos propres opérations. Bientôt ouvert à d&apos;autres équipes.
                  </p>
                  <p className="text-sm font-semibold text-blue-dark inline-flex items-center gap-2">
                    firaxy.com <span aria-hidden="true">↗</span>
                  </p>
                </a>
              </Reveal>

              {/* Prochain produit placeholder */}
              <Reveal delay={0.15}>
                <div className="bg-white/40 rounded-2xl border border-dashed border-ink/20 p-8 h-full flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-mono font-semibold text-ink/40 uppercase tracking-wider mb-4">Prochain produit</span>
                  <p className="font-display text-xl font-bold text-ink/40 mb-3">À venir.</p>
                  <p className="text-sm text-charcoal/60 leading-relaxed max-w-xs">
                    Vous avez un outil métier en tête ? On le construit avec vous.
                  </p>
                  <a href="#contact" className="mt-4 text-sm font-semibold text-blue-dark hover:underline">
                    En parler →
                  </a>
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
                    Prenons 30 minutes pour cadrer{" "}
                    <span className="relative inline-block">
                      votre besoin.
                      <SketchUnderline strokeWidth={3} />
                    </span>
                  </h2>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    Conseil IA, site web, outil sur-mesure : on identifie ce qui fait le plus de sens pour vous et la prochaine étape.
                  </p>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="florianbrignoli/meetup"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    aria-label="Réserver 30 minutes de cadrage gratuit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
                  >
                    Réserver 30 minutes
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 H19 M15 8 L19 12 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <p className="mt-3 text-xs text-charcoal/60">Gratuit. On part de votre situation réelle.</p>

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
