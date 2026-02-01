"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
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

      <h1 className="sr-only">Amplixy - Organisation digitale pour PME</h1>

      {/* ============================================
          HERO - Style impli.fr centré
          ============================================ */}
      <header id="home" className="relative min-h-screen flex flex-col justify-center bg-paper">
        <div className="mx-auto max-w-5xl px-6 pt-32 pb-12 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              Pour les PME qui veulent s&apos;organiser efficacement
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
              Les bons <span className="highlight">outils</span>,
              <br />
              <span className="relative inline-block">
                bien utilisés
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 4 T200 4" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Trop d&apos;outils, trop d&apos;abonnements, trop de temps perdu.
              <br className="hidden sm:block" />
              On vous aide à faire le tri, structurer et adopter les bons outils.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-cal-namespace="diagnostique"
                data-cal-link="brignoli-florian-oykak5/diagnostique"
                data-cal-origin="https://cal.eu"
                data-cal-config='{"theme":"light"}'
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-dark text-white px-8 py-4 font-semibold transition-all hover:bg-blue-dark/90"
              >
                Réserver un diagnostic
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#probleme"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white text-ink px-8 py-4 font-semibold transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                Découvrir l&apos;approche
              </a>
            </div>
          </Reveal>

          {/* Trust stats */}
          <Reveal delay={0.5}>
            <p className="mt-10 text-sm text-accent font-medium">
              100% de satisfaction pour les +20 PME accompagnées !
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
            LE PROBLÈME - Style numéroté avec alternance
            ============================================ */}
        <section id="probleme" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-glow text-xs font-semibold uppercase tracking-wider">
                  Le constat
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Vos outils vous coûtent{" "}
                  <span className="relative inline-block">
                    trop
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 4 Q25 0 50 4 T100 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                    </svg>
                  </span>{" "}
                  cher.
                </h2>
              </div>
            </Reveal>

            {/* Grille compacte 2x2 */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { title: "Trop d'abonnements", stat: "4 000€", statLabel: "/an par salarié en moyenne", icon: "💸" },
                { title: "Licences en doublon ou sous-utilisées", stat: "30%", statLabel: "en moyenne", icon: "🔄" },
                { title: "L'information introuvable", stat: "9,3h", statLabel: "/semaine perdues par personne", icon: "🔍" },
                { title: "Tout repose sur vous", stat: "78%", statLabel: "des dirigeants concernés", icon: "🧠" }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.statLabel}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="font-display text-2xl font-bold text-white">{item.stat}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Summary statement */}
            <Reveal delay={0.3}>
              <div className="mt-8 text-center">
                <p className="inline-block text-white/80 text-lg">
                  Vous perdez donc au minimum{" "}
                  <span className="relative inline-block font-bold text-white">
                    6 336€ par an et par salarié
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 5 Q20 2 40 5 T80 4 T100 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
                    </svg>
                  </span>{" "}
                  à cause de vos outils.
                </p>
                <div className="mt-3">
                  <Link href="/methodologie" className="text-white/50 text-sm hover:text-white/80 transition-colors underline underline-offset-2">
                    Comment on obtient ce chiffre ?
                  </Link>
                </div>
              </div>
            </Reveal>
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
                { icon: "👥", text: "Vous dirigez une équipe de 1 à 50 personnes" },
                { icon: "📈", text: "Votre boîte grandit et l'informel ne suffit plus" },
                { icon: "🔧", text: "Vous avez accumulé des outils sans stratégie" },
                { icon: "⏰", text: "Vous passez trop de temps à coordonner" },
                { icon: "🆘", text: "L'onboarding de vos nouveaux est chaotique" },
                { icon: "😤", text: "La perte de temps devient insupportable" }
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
            NOTRE APPROCHE - Steps 1-2-3-4 style impli
            ============================================ */}
        <section id="solution" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-wider">
                  Notre méthode
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                  4 étapes pour reprendre{" "}
                  <span className="relative inline-block">
                    le contrôle
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 4 Q25 0 50 4 T100 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                    </svg>
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* Hand-drawn arrow showing progression */}
            <div className="hidden lg:flex justify-center mb-8">
              <div className="flex items-center gap-4 text-white/40">
                <span className="text-sm italic">Du chaos...</span>
                <svg width="120" height="20" viewBox="0 0 120 20">
                  <path d="M0 10 Q30 5 60 12 T120 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M108 5 L120 10 L108 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <span className="text-sm italic">...à la clarté</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "1", title: "Audit", desc: "On cartographie vos outils, leurs coûts et leur utilisation réelle.", icon: "🗺️" },
                { num: "2", title: "Rationalisation", desc: "On supprime les doublons et abonnements inutiles.", icon: "✂️" },
                { num: "3", title: "Structuration", desc: "On configure un système où chaque outil a un rôle précis.", icon: "🏗️" },
                { num: "4", title: "Adoption", desc: "On forme votre équipe pour garantir l'utilisation.", icon: "🚀" }
              ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full relative">
                    {/* Hand-drawn number */}
                    <div className="absolute -top-3 -left-2 w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" fill="none" strokeDasharray="2 2"/>
                        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{step.num}</text>
                      </svg>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="font-display text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10 text-center">
                <p className="text-white/70 max-w-xl mx-auto">
                  <strong className="text-white">Le résultat ?</strong> Une facture allégée, un système clair,
                  et une équipe qui sait comment travailler.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Wave divider: blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 Q300 50 600 25 T1200 30 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            NOS OFFRES - Style cards premium
            ============================================ */}
        <section id="offres" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Nos offres
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Deux formules,{" "}
                  <span className="relative inline-block">
                    pas de surprise
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0 4 Q25 0 50 4 T100 4" stroke="#3d5a80" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4"/>
                    </svg>
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* FONDATION */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-paper h-full flex flex-col border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🧩</span>
                    <h3 className="font-display text-xl font-bold text-ink">Fondation</h3>
                  </div>
                  <p className="text-slate text-sm mb-4">Pour les petites équipes</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-ink">6 499€</span>
                      <span className="text-slate text-sm">HT</span>
                    </div>
                    <p className="text-xs text-slate mt-1">15 jours ouvrés</p>
                  </div>

                  <ul className="space-y-2 flex-1 text-sm">
                    {[
                      "Architecture : rôle de chaque outil",
                      "Outil central configuré",
                      "Outils connectés et synchronisés",
                      "Règles d'usage documentées",
                      "Formation de l'équipe",
                      "Ajustements post-déploiement"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-charcoal">
                        <svg className="w-4 h-4 text-blue-dark flex-shrink-0 mt-0.5" viewBox="0 0 20 20">
                          <path d="M4 10 L8 14 L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="brignoli-florian-oykak5/diagnostique"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink/10 text-ink px-5 py-3 font-semibold text-sm transition-all hover:border-ink/30 hover:bg-ink/5"
                  >
                    Discuter de cette offre
                  </button>
                </div>
              </Reveal>

              {/* STRUCTURE */}
              <Reveal delay={0.2}>
                <div className="bg-blue-dark rounded-2xl p-6 lg:p-8 shadow-paper h-full flex flex-col relative">
                  {/* Hand-drawn "populaire" annotation */}
                  <div className="absolute -top-3 -right-2 rotate-6">
                    <span className="inline-block px-3 py-1 bg-white text-blue-dark text-xs font-semibold rounded-full shadow-sm">
                      ⭐ Populaire
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🏗️</span>
                    <h3 className="font-display text-xl font-bold text-white">Structure</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Pour les équipes en croissance</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-white">9 499€</span>
                      <span className="text-white/60 text-sm">HT</span>
                    </div>
                    <p className="text-xs text-white/60 mt-1">20 jours ouvrés</p>
                  </div>

                  <ul className="space-y-2 flex-1 text-sm">
                    {[
                      "Tout Fondation inclus",
                      "Architecture multi-collaborateurs",
                      "Base de données structurée",
                      "Automatisations des tâches",
                      "Tableaux de bord et pilotage",
                      "Suivi post-déploiement étendu"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80">
                        <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" viewBox="0 0 20 20">
                          <path d="M4 10 L8 14 L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="brignoli-florian-oykak5/diagnostique"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-dark px-5 py-3 font-semibold text-sm transition-all hover:bg-white/90"
                  >
                    Discuter de cette offre
                  </button>
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
            LE FONDATEUR
            ============================================ */}
        <section id="fondateur" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-blue-dark text-white relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
              <Reveal>
                <div className="relative max-w-[220px] mx-auto lg:mx-0">
                  {/* Hand-drawn frame effect */}
                  <div className="absolute inset-0 -m-3 border-2 border-white/20 rounded-2xl border-dashed"></div>
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
                  <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-semibold uppercase tracking-wider">
                    Le fondateur
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                    Florian Brignoli
                  </h2>
                  <p className="text-white/50 text-sm mb-5 italic">Fondateur d&apos;Amplixy</p>

                  <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                    <p>
                      <strong className="text-white">Mon parcours :</strong> Business analyste puis chef de projet
                      pour <strong className="text-white">Airbus, Dassault Aviation, CMA CGM</strong> —
                      là où la rigueur n&apos;est pas une option.
                    </p>
                    <p>
                      <strong className="text-white">Ce que j&apos;ai vu :</strong> En accompagnant +20 PME,
                      toujours le même schéma : abonnements qui s&apos;accumulent, fonctionnalités en double,
                      équipes perdues.
                    </p>
                    <p>
                      <strong className="text-white">Ce que j&apos;apporte :</strong> Les méthodes des grands comptes,
                      adaptées à votre réalité. Pas de sur-engineering.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Wave divider: blue-dark → paper */}
        <div className="relative h-12 lg:h-16 bg-blue-dark">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 32 Q350 50 700 28 T1200 35 L1200 60 L0 60 Z" fill="#faf9f6"/>
          </svg>
        </div>

        {/* ============================================
            CTA - Réserver un appel
            ============================================ */}
        <section id="rdv" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="bg-blue-dark rounded-2xl p-8 lg:p-12 text-center text-white relative">
                {/* Hand-drawn corner decorations */}
                <svg className="absolute top-4 left-4 w-8 h-8 text-white/20" viewBox="0 0 30 30">
                  <path d="M5 25 L5 5 L25 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <svg className="absolute bottom-4 right-4 w-8 h-8 text-white/20" viewBox="0 0 30 30">
                  <path d="M25 5 L25 25 L5 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>

                <div className="relative z-10">
                  <span className="inline-block mb-4 text-4xl">📅</span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                    On en{" "}
                    <span className="relative inline-block">
                      parle
                      <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                        <path d="M0 4 Q25 0 50 4 T100 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                      </svg>
                    </span>{" "}?
                  </h2>
                  <p className="text-white/60 max-w-md mx-auto mb-6 text-sm">
                    30 minutes pour comprendre votre situation et voir si on peut vous aider.
                    Sans engagement, sans blabla.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs text-white/70">
                    {["Diagnostic gratuit", "Pistes concrètes", "Zéro engagement"].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 20 20">
                          <path d="M4 10 L8 14 L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="brignoli-florian-oykak5/diagnostique"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-dark px-8 py-4 font-semibold transition-all hover:bg-white/90 hover:gap-3"
                  >
                    Réserver mon créneau
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 H19 M15 8 L19 12 L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
