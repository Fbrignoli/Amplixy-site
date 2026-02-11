"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "diagnostique" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="sr-only">Amplixy - Des outils digitaux simples pour les TPE-PME</h1>

      {/* ============================================
          HERO
          ============================================ */}
      <header id="home" className="relative min-h-screen flex flex-col justify-center bg-paper">
        <div className="mx-auto max-w-5xl px-6 pt-32 pb-12 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              Toute entreprise mérite d&apos;être vue.
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
              On aide les TPE-PME à prendre le{" "}
              <span className="relative inline-block">
                virage du numérique
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 4 T200 4" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Des outils simples, accessibles, pensés pour votre réalité —
              <br className="hidden sm:block" />
              pas des usines à gaz conçues pour les grandes entreprises.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#outils"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90"
              >
                Découvrir nos outils
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                data-cal-namespace="diagnostique"
                data-cal-link="florianbrignoli/meetup"
                data-cal-origin="https://cal.eu"
                data-cal-config='{"theme":"light"}'
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white text-ink px-8 py-4 font-semibold transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                Prendre rendez-vous
              </button>
            </div>
          </Reveal>

          {/* Trust */}
          <Reveal delay={0.5}>
            <p className="mt-10 text-sm text-accent font-medium">
              Ils nous ont fait confiance
            </p>
          </Reveal>
        </div>

        {/* Partner logos */}
        <div className="pb-12">
          <Reveal delay={0.6}>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 px-6">
              {[
                "/img/partenaire/AIRBUS_Blue.png",
                "/img/partenaire/CMA_CGM_logo.svg.png",
                "/img/partenaire/dircom-logo_amu_cmjn.png",
                "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Partenaire ${i + 1}`}
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity"
                />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Arrow to next section */}
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

      <main>
        {/* Wave divider: paper → blue-dark */}
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
                  Le numérique, c&apos;est{" "}
                  <span className="relative inline-block">
                    compliqué
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 4 Q25 0 50 4 T100 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                    </svg>
                  </span>{" "}
                  quand on est une petite entreprise.
                </h2>
              </div>
            </Reveal>

            {/* Grille 2x2 */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  title: "C'est trop cher",
                  desc: "Les agences web facturent 2 000 à 5 000€ un site. Les solutions WordPress reviennent à 150€/mois engagé 5 ans.",
                  icon: "💸",
                },
                {
                  title: "C'est trop compliqué",
                  desc: "Wix, Squarespace, WordPress... On vous dit que c'est simple. Mais configurer, rédiger, optimiser le SEO, ça prend des heures que vous n'avez pas.",
                  icon: "🤯",
                },
                {
                  title: "Personne ne vous comprend",
                  desc: "Les prestataires parlent de responsive, de CMS, de conversion. Vous, vous voulez juste que vos clients vous trouvent.",
                  icon: "🤷",
                },
                {
                  title: "C'est trop long",
                  desc: "4 semaines minimum pour un site chez une agence. Vous avez besoin d'être en ligne maintenant.",
                  icon: "⏰",
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-white/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wave divider: blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 25 Q200 45 400 30 T800 35 T1200 25 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            C'EST POUR VOUS SI...
            ============================================ */}
        <section className="pt-6 pb-16 lg:pt-8 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center mb-10">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Pour qui ?
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  C&apos;est pour vous{" "}
                  <span className="relative inline-block">
                    si
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 4 Q25 0 50 4 T100 4" stroke="#3d5a80" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4"/>
                    </svg>
                  </span>...
                </h2>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🔨", text: "Vous êtes artisan, commerçant, indépendant ou dirigez une entreprise de 1 à 50 personnes" },
                { icon: "📱", text: "Vous savez que le numérique est important mais vous n'avez pas le temps" },
                { icon: "💰", text: "Vous ne voulez pas dépenser des milliers d'euros pour un site web" },
                { icon: "🤝", text: "Vous préférez avoir une personne de confiance plutôt que de tout faire seul" },
                { icon: "📍", text: "Vous voulez que vos clients vous trouvent facilement en ligne" },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <p className="text-sm text-charcoal leading-snug">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wave divider: paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 35 Q250 15 500 35 T1000 30 T1200 35 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            NOS OUTILS
            ============================================ */}
        <section id="outils" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-wider">
                  Nos outils
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Des outils pensés{" "}
                  <span className="relative inline-block">
                    pour vous
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 4 Q25 0 50 4 T100 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                    </svg>
                  </span>
                </h2>
                <p className="mt-4 text-white/60 max-w-xl mx-auto">
                  Un seul interlocuteur de confiance. Des prix justes. Zéro complexité.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Card 1 — Sites web */}
              <Reveal delay={0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🌐</span>
                    <h3 className="font-display text-xl font-bold">Sites web professionnels</h3>
                  </div>
                  <div className="space-y-3 text-white/70 text-sm leading-relaxed flex-1">
                    <p className="text-white font-semibold">Un site à votre image, livré en 48h.</p>
                    <p>À partir de 40€/mois — hébergement, maintenance et support inclus</p>
                    <p>Prise de rendez-vous, réservation, formulaires intégrés</p>
                  </div>
                  <a
                    href="mailto:contact@amplixy.com"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-dark px-5 py-3 font-semibold text-sm transition-all hover:bg-white/90"
                  >
                    En savoir plus
                  </a>
                </div>
              </Reveal>

              {/* Card 2 — Firaxy */}
              <Reveal delay={0.2}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🎯</span>
                    <h3 className="font-display text-xl font-bold">Firaxy — Fidélisation clients</h3>
                  </div>
                  <div className="space-y-3 text-white/70 text-sm leading-relaxed flex-1">
                    <p className="text-white font-semibold">Programme de fidélité simple pour les commerçants ambulants.</p>
                    <p>Fini les cartes papier perdues. Vos clients reviennent.</p>
                  </div>
                  <a
                    href="https://firaxy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-dark px-5 py-3 font-semibold text-sm transition-all hover:bg-white/90"
                  >
                    Découvrir Firaxy
                  </a>
                </div>
              </Reveal>

              {/* Card 3 — Et demain ? */}
              <Reveal delay={0.3}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔮</span>
                    <h3 className="font-display text-xl font-bold">Et demain ?</h3>
                  </div>
                  <div className="space-y-3 text-white/70 text-sm leading-relaxed flex-1">
                    <p>D&apos;autres outils viendront, toujours conçus pour les TPE-PME, toujours simples, toujours accessibles.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Wave divider: blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q300 50 600 25 T1200 30 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            POURQUOI NOUS FAIRE CONFIANCE
            ============================================ */}
        <section id="confiance" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
              <Reveal>
                <div className="relative max-w-[220px] mx-auto lg:mx-0">
                  {/* Hand-drawn frame effect */}
                  <div className="absolute inset-0 -m-3 border-2 border-ink/10 rounded-2xl border-dashed"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden">
                    <Image
                      src="/img/profile-pic (9).png"
                      alt="Florian BRIGNOLI - Fondateur d'AMPLIXY"
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
                    Pourquoi nous ?
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-5">
                    Pourquoi nous faire{" "}
                    <span className="relative inline-block">
                      confiance
                      <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                        <path d="M0 4 Q25 0 50 4 T100 4" stroke="#3d5a80" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4"/>
                      </svg>
                    </span>{" "}?
                  </h2>

                  <div className="space-y-4 text-charcoal text-sm leading-relaxed">
                    <p>
                      J&apos;ai grandi sur les marchés — je connais la réalité des commerçants et des artisans.
                    </p>
                    <p>
                      Puis j&apos;ai travaillé chez <strong className="text-ink">Airbus, Dassault Aviation, CMA CGM</strong> — là où la rigueur n&apos;est pas une option.
                    </p>
                    <p>
                      En accompagnant +20 entreprises, j&apos;ai vu le même problème partout : les TPE-PME n&apos;ont pas accès aux bons outils digitaux. Pas parce qu&apos;ils n&apos;existent pas, mais parce que personne ne prend le temps de les adapter à leur réalité.
                    </p>
                    <p>
                      <strong className="text-ink">AMPLIXY, c&apos;est ça.</strong> Les bons outils, pensés pour vous, à un prix qui a du sens.
                    </p>
                  </div>

                  <p className="mt-6 text-ink font-semibold text-sm">
                    Florian Brignoli — Fondateur d&apos;AMPLIXY
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Wave divider: paper → blue-dark */}
        <div className="relative h-12 lg:h-16 bg-paper">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 25 Q200 45 400 28 T800 32 T1200 28 L1200 60 L0 60 Z" fill="#3d5a80"/>
          </svg>
        </div>

        {/* ============================================
            CTA - On en parle ?
            ============================================ */}
        <section id="contact" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="bg-white rounded-2xl p-8 lg:p-12 text-center relative">
                {/* Hand-drawn corner decorations */}
                <svg className="absolute top-4 left-4 w-8 h-8 text-ink/10" viewBox="0 0 30 30">
                  <path d="M5 25 L5 5 L25 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <svg className="absolute bottom-4 right-4 w-8 h-8 text-ink/10" viewBox="0 0 30 30">
                  <path d="M25 5 L25 25 L5 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>

                <div className="relative z-10">
                  <span className="inline-block mb-4 text-4xl">💬</span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-3">
                    On en{" "}
                    <span className="relative inline-block">
                      parle
                      <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                        <path d="M0 4 Q25 0 50 4 T100 4" stroke="#3d5a80" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
                      </svg>
                    </span>{" "}?
                  </h2>
                  <p className="text-charcoal max-w-md mx-auto mb-8 text-sm">
                    Dites-nous ce dont vous avez besoin. On vous répond sous 24h.
                  </p>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="florianbrignoli/meetup"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90 hover:gap-3"
                  >
                    Prendre rendez-vous
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 H19 M15 8 L19 12 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-charcoal">
                    <a href="mailto:contact@amplixy.com" className="flex items-center gap-2 hover:text-ink transition-colors">
                      <span>📧</span> contact@amplixy.com
                    </a>
                    <a href="tel:+33778209044" className="flex items-center gap-2 hover:text-ink transition-colors">
                      <span>📱</span> 07 78 20 90 44
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Wave divider: blue-dark → paper (before footer) */}
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
