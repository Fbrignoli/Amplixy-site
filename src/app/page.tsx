"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "diagnostique" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <>
      <Navbar />

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Amplixy - Organisation digitale pour PME</h1>

      {/* Hero Section */}
      <header
        id="home"
        className="relative mx-auto max-w-7xl px-5 pt-24 pb-12 lg:px-12 lg:pt-40 lg:pb-28 min-h-[90vh] lg:min-h-screen flex items-center"
      >
        {/* Mobile: Vertical stack */}
        <div className="flex flex-col items-center text-center lg:hidden w-full space-y-6">
          <Reveal>
            <p className="eyebrow mb-3">Organisation digitale</p>
            <p className="font-display text-3xl leading-tight text-white">
              Nous organisons vos outils,{" "}
              <span className="text-gradient">vous gérez votre business</span>
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full py-4">
              <div className="relative mx-auto w-56 h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-glow/20 to-transparent blur-3xl -z-10 scale-125"></div>
                <div className="relative rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-3 shadow-glass backdrop-blur-xl w-full h-full">
                  <Image
                    className="relative w-full h-full rounded-2xl object-cover shadow-2xl"
                    src="/img/premium_photo-1661329859712-76d8a4500fdb.avif"
                    alt="Organisation digitale Amplixy"
                    width={224}
                    height={224}
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base text-mist/90 max-w-md px-2 leading-relaxed">
              Vous perdez du temps avec vos outils digitaux ? Nous mettons de l&apos;ordre.
              Un système clair, des règles simples, une équipe qui sait comment travailler.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-row gap-3 justify-center pt-2">
              <a
                href="#rdv"
                className="rounded-full bg-gradient-to-r from-accent to-glow px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-105 active:scale-95 text-sm"
              >
                Parlons-en
              </a>
              <a
                href="#probleme"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/10 text-sm"
              >
                Comment ça marche
              </a>
            </div>
          </Reveal>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-20 xl:gap-24 lg:items-center w-full">
          <div className="text-left">
            <Reveal>
              <p className="eyebrow mb-4">Organisation digitale</p>
              <p className="font-display text-4xl xl:text-5xl leading-tight text-white">
                Nous organisons vos outils,{" "}
                <span className="text-gradient">vous gérez votre business</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-xl text-mist/90">
                Vous perdez du temps avec vos outils digitaux ? Nous mettons de l&apos;ordre.
                Un système clair, des règles simples, une équipe qui sait comment travailler.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex gap-4">
                <a
                  href="#rdv"
                  className="rounded-full bg-gradient-to-r from-accent to-glow px-8 py-4 font-semibold text-slate-900 shadow-2xl transition hover:scale-105 active:scale-95"
                >
                  Parlons-en
                </a>
                <a
                  href="#probleme"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Comment ça marche
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="relative flex justify-end">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-glow/20 to-transparent blur-3xl -z-10 scale-110"></div>
              <div className="relative rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-4 shadow-glass backdrop-blur-xl aspect-square max-w-md">
                <Image
                  className="relative w-full h-full rounded-2xl object-cover shadow-2xl"
                  src="/img/premium_photo-1661329859712-76d8a4500fdb.avif"
                  alt="Organisation digitale Amplixy"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main className="relative z-10">
        {/* Le Problème - On parle à VOUS */}
        <section id="probleme" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">L&apos;abondance d&apos;outils</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Vos outils vous coûtent cher. Et vous font perdre du temps.
              </h2>
            </Reveal>

            <div className="mt-10 lg:mt-16 max-w-3xl mx-auto space-y-6">
              <Reveal delay={0.1}>
                <p className="text-sm lg:text-base text-mist/90 text-center">
                  Slack, Notion, Trello, Drive, Monday, HubSpot, emails... Chaque outil semblait indispensable.
                  Résultat : des abonnements qui s&apos;accumulent, des fonctionnalités qui se chevauchent,
                  et une facture mensuelle qui explose — sans que la productivité suive.
                </p>
              </Reveal>

              {/* Stats cards */}
              <Reveal delay={0.15}>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="card-shell p-4 text-center">
                    <p className="font-display text-2xl lg:text-3xl text-glow font-bold">8 000€</p>
                    <p className="text-xs lg:text-sm text-mist/70 mt-1">/ an en moyenne en abonnements SaaS pour une PME</p>
                  </div>
                  <div className="card-shell p-4 text-center">
                    <p className="font-display text-2xl lg:text-3xl text-glow font-bold">30%</p>
                    <p className="text-xs lg:text-sm text-mist/70 mt-1">des licences sont sous-utilisées ou en doublon</p>
                  </div>
                  <div className="card-shell p-4 text-center">
                    <p className="font-display text-2xl lg:text-3xl text-glow font-bold">20h</p>
                    <p className="text-xs lg:text-sm text-mist/70 mt-1">/ mois perdues à chercher l&apos;information</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: "💸", text: "Vous payez des outils que personne n'utilise vraiment" },
                    { icon: "🔄", text: "Plusieurs outils font la même chose (CRM, tâches, docs...)" },
                    { icon: "🧠", text: "Tout repose sur votre tête (et ça vous épuise)" },
                    { icon: "❓", text: "Votre équipe ne sait pas quel outil utiliser pour quoi" }
                  ].map((item, i) => (
                    <li key={i} className="card-shell p-4 flex items-start gap-3 text-sm lg:text-base text-mist/90">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-sm lg:text-base text-mist/70 text-center italic mt-8">
                  Ce phénomène touche <strong className="text-white">78% des PME</strong>. Et il a une solution.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Vous vous reconnaissez ? */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Vous vous reconnaissez ?</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Si c&apos;est votre quotidien, on peut vous aider
              </h2>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-5 lg:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Reveal delay={0.1} className="card-shell p-5 lg:p-8">
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">Ça vous parle si...</h3>
                <ul className="space-y-3 text-sm text-mist/80">
                  {[
                    "Vous dirigez une équipe de 1 à 50 personnes",
                    "Vous êtes dans les services B2B",
                    "Vous avez accumulé des outils sans vraie stratégie",
                    "Vous passez trop de temps à coordonner",
                    "Vous avez du mal à déléguer efficacement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-glow mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2} className="card-shell p-5 lg:p-8">
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">On nous appelle souvent quand...</h3>
                <ul className="space-y-3 text-sm text-mist/80">
                  {[
                    "Vous recrutez et devez documenter pour déléguer",
                    "Votre boîte grandit et l'informel ne suffit plus",
                    "Vous frôlez le burn-out à force de tout porter",
                    "La perte de temps est devenue insupportable",
                    "Vous n'arrivez plus à onboarder de nouveaux collaborateurs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Nos Offres */}
        <section id="offres" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Nos offres</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Des solutions adaptées à votre taille
              </h2>
              <p className="mt-4 text-sm lg:text-base text-mist/80 text-center max-w-2xl mx-auto">
                Deux formules claires, sans surprise, pour structurer votre organisation digitale.
              </p>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-6 lg:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* FONDATION */}
              <Reveal delay={0.1} className="card-shell p-6 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🧩</span>
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-white">FONDATION</h3>
                  </div>
                  <p className="text-sm lg:text-base text-mist/80 mb-6">
                    Pour les indépendants et petites équipes
                  </p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs text-mist/60">À partir de</span>
                    <span className="font-display text-2xl lg:text-3xl text-white font-bold">4 900 €</span>
                    <span className="text-sm text-mist/60">HT</span>
                  </div>
                  <p className="text-xs text-mist/60 mb-6">Durée : 15 jours ouvrés</p>

                  <ul className="space-y-3">
                    {[
                      { icon: "🗺️", title: "Architecture", text: "On définit le rôle de chaque outil" },
                      { icon: "🧱", title: "Outil central", text: "Un espace où tout est regroupé" },
                      { icon: "🔗", title: "Outils connectés", text: "Vos apps synchronisées intelligemment" },
                      { icon: "📐", title: "Règles & usages", text: "Comment utiliser quoi, et quand" },
                      { icon: "🚀", title: "Adoption", text: "Formation pour ancrer les nouvelles habitudes" },
                      { icon: "🔧", title: "Ajustements", text: "On affine après les premiers jours d'usage" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-mist/80">
                        <span className="text-lg flex-shrink-0">{item.icon}</span>
                        <div>
                          <span className="text-white font-medium">{item.title}</span>
                          <span className="text-mist/60"> — {item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#rdv"
                      className="inline-block w-full text-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/10 text-sm"
                    >
                      Discuter de cette offre
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* STRUCTURE */}
              <Reveal delay={0.2} className="card-shell p-6 lg:p-8 relative overflow-hidden border-glow/30">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-glow/20 to-transparent rounded-bl-full"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-glow/20 text-glow text-xs font-medium">Populaire</span>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🧩</span>
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-white">STRUCTURE</h3>
                  </div>
                  <p className="text-sm lg:text-base text-mist/80 mb-6">
                    Pour les équipes en croissance
                  </p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs text-mist/60">À partir de</span>
                    <span className="font-display text-2xl lg:text-3xl text-white font-bold">7 900 €</span>
                    <span className="text-sm text-mist/60">HT</span>
                  </div>
                  <p className="text-xs text-mist/60 mb-6">Durée : 20 jours ouvrés</p>

                  <ul className="space-y-3">
                    {[
                      { icon: "🏗️", title: "Architecture d'équipe", text: "Système adapté à plusieurs collaborateurs" },
                      { icon: "🧱", title: "Outils structurants", text: "Base de données, tâches, documentation" },
                      { icon: "⚙️", title: "Automatisations utiles", text: "Moins de tâches manuelles, plus de fluidité" },
                      { icon: "📊", title: "Pilotage", text: "Vision claire sur les projets et les priorités" },
                      { icon: "🚀", title: "Adoption collective", text: "Toute l'équipe formée et alignée" },
                      { icon: "🔧", title: "Stabilisation", text: "Suivi post-déploiement pour ancrer le système" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-mist/80">
                        <span className="text-lg flex-shrink-0">{item.icon}</span>
                        <div>
                          <span className="text-white font-medium">{item.title}</span>
                          <span className="text-mist/60"> — {item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#rdv"
                      className="inline-block w-full text-center rounded-full bg-gradient-to-r from-accent to-glow px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-105 active:scale-95 text-sm"
                    >
                      Discuter de cette offre
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ils nous font confiance */}
        <section className="py-12 lg:py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Ils nous font confiance</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl">
                Nos partenaires
              </h2>
            </Reveal>
          </div>

          <div className="relative flex overflow-x-hidden py-6">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {[
                    "/img/partenaire/AIRBUS_Blue.png",
                    "/img/partenaire/CMA_CGM_logo.svg.png",
                    "/img/partenaire/dircom-logo_amu_cmjn.png",
                    "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png",
                  ].map((src, i) => (
                    <div key={`${setIndex}-${i}`} className="mx-4 lg:mx-6 flex items-center justify-center flex-shrink-0">
                      <div className="card-shell p-4 h-20 w-36 lg:h-24 lg:w-44 flex items-center justify-center hover:border-glow/30 transition-all">
                        <Image
                          src={src}
                          alt={`Partenaire ${i + 1}`}
                          width={176}
                          height={64}
                          className="max-h-12 lg:max-h-14 max-w-full object-contain brightness-0 invert"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="mx-4 lg:mx-6 flex items-center justify-center flex-shrink-0">
                    <div className="card-shell p-4 h-20 w-36 lg:h-24 lg:w-44 flex flex-col items-center justify-center">
                      <span className="font-display text-white text-2xl lg:text-3xl font-bold">+15</span>
                      <span className="font-sans text-white/60 text-[10px] lg:text-xs uppercase tracking-widest font-semibold">PME</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* La Solution - NOUS vous aidons */}
        <section id="solution" className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Notre approche</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Nous optimisons vos outils — et vos coûts
              </h2>
              <p className="mt-4 text-sm lg:text-base text-mist/80 text-center max-w-2xl mx-auto">
                Pas besoin de tout changer. Nous rationalisons ce que vous avez, supprimons les doublons,
                et vous faisons économiser sur vos abonnements.
              </p>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "1",
                  title: "Nous auditons",
                  text: "On cartographie tous vos outils, leurs coûts, et leur utilisation réelle. On identifie les doublons et les gaspillages."
                },
                {
                  num: "2",
                  title: "Nous rationalisons",
                  text: "On supprime les abonnements inutiles, on regroupe les fonctionnalités. Moins d'outils = moins de coûts."
                },
                {
                  num: "3",
                  title: "Nous structurons",
                  text: "On configure un système cohérent où chaque outil a un rôle précis. Fini les zones grises."
                },
                {
                  num: "4",
                  title: "Nous accompagnons",
                  text: "On forme votre équipe pour garantir l'adoption. Un outil bien utilisé, c'est un outil rentabilisé."
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1} className="card-shell p-5 lg:p-8 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30">
                    <span className="font-display text-lg lg:text-xl font-bold text-white">{item.num}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-xs lg:text-sm text-mist/80">{item.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-sm lg:text-base text-mist/90 max-w-2xl mx-auto">
                  <strong className="text-white">Le résultat ?</strong> Une facture SaaS allégée, un système clair,
                  et une équipe qui sait enfin comment travailler efficacement.
                </p>
              </div>
            </Reveal>
          </div>
        </section>


        {/* Le Fondateur */}
        <section id="fondateur" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Qui sommes-nous</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                La personne derrière AMPLIXY
              </h2>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-8 lg:grid-cols-[1fr_2fr] items-center max-w-4xl mx-auto">
              <Reveal delay={0.1}>
                <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-glow/20 to-transparent blur-2xl -z-10 scale-110"></div>
                  <div className="relative rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-2 shadow-glass backdrop-blur-xl w-full h-full overflow-hidden">
                    <Image
                      src="/img/profile-pic (9).png"
                      alt="Florian BRIGNOLI - Fondateur d'AMPLIXY"
                      width={256}
                      height={256}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                    Florian BRIGNOLI
                  </h3>
                  <p className="text-glow font-medium mb-4">Fondateur d&apos;AMPLIXY</p>

                  <div className="space-y-4 text-sm lg:text-base text-mist/90">
                    <p>
                      <strong className="text-white">Mon parcours :</strong> Formé en alternance sur des cursus techniques,
                      j&apos;ai rapidement compris que ma vraie valeur n&apos;était pas dans le code,
                      mais dans la capacité à transformer des idées en projets concrets.
                      Business analyste puis chef de projet, j&apos;ai travaillé pour des grands groupes
                      comme Airbus, Dassault Aviation ou CMA CGM — là où la rigueur organisationnelle
                      n&apos;est pas une option.
                    </p>
                    <p>
                      <strong className="text-white">Ce que j&apos;ai vu sur le terrain :</strong> En accompagnant une vingtaine de PME,
                      j&apos;ai constaté le même schéma : des abonnements SaaS qui s&apos;accumulent sans stratégie,
                      des fonctionnalités payées en double, des équipes perdues entre 5 ou 10 outils différents.
                      Résultat : des factures qui explosent et une productivité qui stagne.
                    </p>
                    <p>
                      <strong className="text-white">Ce que j&apos;apporte :</strong> Les méthodes des grands comptes,
                      adaptées à votre réalité. Je vous aide à rationaliser vos outils, réduire vos coûts SaaS,
                      et mettre en place un système simple que votre équipe utilisera vraiment.
                      Pas de sur-engineering, pas de solutions surdimensionnées — juste ce qu&apos;il vous faut.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-mist/80">Chef de projet</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-mist/80">Business Analyst</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-mist/80">+20 entreprises accompagnées</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Réserver un appel - Cal.com Embed */}
        <section id="rdv" className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <Reveal>
                  <p className="eyebrow mb-3">Discutons</p>
                  <h2 className="font-display text-xl text-white lg:text-4xl">
                    On en parle ?
                  </h2>
                  <p className="mt-4 text-sm lg:text-base text-mist/90">
                    30 minutes pour comprendre votre situation et voir si nous pouvons vous aider.
                    Sans engagement, sans blabla commercial.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-mist/80">
                    <p className="flex items-center gap-2">
                      <span className="text-glow">✓</span>
                      Nous faisons un diagnostic rapide de votre situation
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-glow">✓</span>
                      Nous vous donnons des pistes concrètes
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-glow">✓</span>
                      Vous décidez si ça vous parle
                    </p>
                  </div>
                  <div className="mt-6 grid gap-4 grid-cols-2">
                    <div className="card-shell p-4 lg:p-6">
                      <p className="eyebrow mb-1">Durée</p>
                      <p className="font-display text-2xl lg:text-3xl text-white mb-1">30 min</p>
                      <p className="text-xs text-mist/70">appel découverte</p>
                    </div>
                    <div className="card-shell p-4 lg:p-6">
                      <p className="eyebrow mb-1">Format</p>
                      <p className="font-display text-xl lg:text-2xl text-white mb-1">Visio</p>
                      <p className="text-xs text-mist/70">ou téléphone</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-3">
                <Reveal delay={0.2}>
                  <div className="card-shell p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-glow/30 to-accent/30 flex items-center justify-center">
                      <span className="text-4xl">📅</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Réservez votre créneau</h3>
                    <p className="text-sm text-mist/70 max-w-sm mb-6">
                      Choisissez le moment qui vous convient pour un premier échange de 30 minutes.
                    </p>
                    <button
                      data-cal-namespace="diagnostique"
                      data-cal-link="brignoli-florian-oykak5/diagnostique"
                      data-cal-origin="https://cal.eu"
                      data-cal-config='{"theme":"dark"}'
                      className="rounded-full bg-gradient-to-r from-accent to-glow px-8 py-4 font-semibold text-slate-900 shadow-xl transition hover:scale-105 active:scale-95"
                    >
                      Choisir un créneau
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
