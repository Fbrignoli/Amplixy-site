"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">Amplixy - Développez votre présence en ligne</h1>

      {/* Hero Section */}
      <header
        id="home"
        className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 sm:px-8 lg:px-12 lg:pt-40 lg:pb-28 min-h-[80vh] lg:min-h-screen flex items-center"
      >
        {/* Mobile: Vertical stack, more spacing */}
        <div className="flex flex-col items-center text-center lg:hidden w-full space-y-6">
          <Reveal>
            <p className="eyebrow mb-3">Amplixy</p>
            <p className="font-display text-2xl leading-tight text-white sm:text-3xl max-w-2xl px-4">
              Développez votre{" "}
              <span className="text-gradient">présence en ligne</span>
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-4 w-full px-4">
              <div className="relative mx-auto w-48 h-48">
                {/* Forme ronde derrière */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-glow/20 to-transparent blur-3xl -z-10 scale-110"></div>
                <div className="relative rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-3 shadow-glass backdrop-blur-xl w-full h-full">
                  <Image
                    className="relative w-full h-full rounded-2xl object-cover shadow-2xl"
                    src="/img/julius-drost-dS-q7-zkD9c-unsplash.jpg"
                    alt="Expertise Amplixy"
                    width={192}
                    height={192}
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-3 text-base text-mist/90 max-w-xl px-4">
              Nous aidons les entreprises à rendre leur expertise visible, crédible et attrayante. Construisez une présence en ligne pour créer un lien durable avec vos clients et prospects, sans y consacrer tout votre temps.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-4 flex flex-row gap-3 px-4 justify-center">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-accent to-glow px-5 py-2.5 font-semibold text-slate-900 shadow-2xl transition hover:scale-105 active:scale-95 text-sm"
              >
                Audit gratuit
              </a>
              <a
                href="#mission"
                className="glass-button text-sm px-5 py-2.5"
              >
                Notre mission
              </a>
            </div>
          </Reveal>
        </div>

        {/* Desktop: Side by side layout, shifted right */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-20 xl:gap-24 lg:items-center w-full">
          <div className="text-left">
            <Reveal>
              <p className="eyebrow mb-4">Amplixy</p>
              <p className="font-display text-4xl xl:text-5xl leading-tight text-white">
                Développez votre{" "}
                <span className="text-gradient">présence en ligne</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-2xl text-mist/90">
                Nous aidons les entreprises à rendre leur expertise visible, crédible et attrayante. Construisez une présence en ligne pour créer un lien durable avec vos clients et prospects, sans y consacrer tout votre temps.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-accent to-glow px-8 py-4 font-semibold text-slate-900 shadow-2xl transition hover:scale-105 active:scale-95"
                >
                  Audit gratuit
                </a>
                <a
                  href="#mission"
                  className="glass-button"
                >
                  Notre mission
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="relative flex justify-end">
              {/* Forme ronde derrière */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-glow/20 to-transparent blur-3xl -z-10 scale-110"></div>
              <div className="relative rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-4 shadow-glass backdrop-blur-xl aspect-square max-w-md">
                <Image
                  className="relative w-full h-full rounded-2xl object-cover shadow-2xl"
                  src="/img/julius-drost-dS-q7-zkD9c-unsplash.jpg"
                  alt="Expertise Amplixy"
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
        {/* Notre Mission */}
        <section id="mission" className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Notre Mission</p>
              <h2 className="font-display text-3xl text-white text-center sm:text-4xl lg:text-5xl max-w-4xl mx-auto">
                Faire connaître votre entreprise de la bonne manière
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <Reveal delay={0.1} className="space-y-6">
                <p className="text-lg text-mist/90">
                  Votre savoir-faire mérite d&apos;être vu et compris. Nous transformons votre expertise en contenus et supports qui renforcent la confiance et facilitent la prise de contact.
                </p>
                <p className="text-lg text-mist/90">
                  L&apos;objectif n&apos;est pas simplement de « poster », mais de construire une présence en ligne stable et professionnelle qui travaille pour vous, sans que vous ayez à y consacrer votre temps précieux.
                </p>
                <ul className="space-y-4 text-mist/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glow/20 text-glow">✓</span>
                    <span>Valorisation de votre expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glow/20 text-glow">✓</span>
                    <span>Optimisation de votre présence en ligne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glow/20 text-glow">✓</span>
                    <span>Création de contenus visuels et textuels de haute qualité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-glow/20 text-glow">✓</span>
                    <span>Accompagnement serein et durable</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.3} className="card-shell space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-glow">Expert du numérique</p>
                <div className="space-y-5">
                  {[
                    { step: 1, title: "Immersion", text: "Nous comprenons votre métier, votre équipe et vos méthodes uniques." },
                    { step: 2, title: "Production", text: "Création de contenus (photo, vidéo, textes) qui mettent en avant votre image de marque et votre savoir-faire." },
                    { step: 3, title: "Déploiement", text: "Mise en place d'une présence digitale (site web, réseaux sociaux, etc.) cohérente et durable." }
                  ].map((item) => (
                    <div key={item.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30 font-display text-lg font-bold text-white">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-semibold text-white mb-1">{item.title}</p>
                          <p className="text-sm text-mist/80">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Nos Solutions */}
        <section id="services" className="section-shell bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Nos Solutions</p>
              <h2 className="font-display text-3xl text-white text-center sm:text-4xl lg:text-5xl max-w-4xl mx-auto">
                Trois leviers pour une visibilité qui convertit
              </h2>
              <p className="mt-6 text-lg text-mist/80 text-center max-w-3xl mx-auto">
                Nous ne nous contentons pas de créer du contenu, nous construisons un écosystème numérique qui renforce votre autorité et facilite le choix de vos clients.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Reveal delay={0.1} className="card-shell group hover:border-glow/30 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-glow/20 to-accent/20">
                  <svg className="h-7 w-7 text-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-glow mb-3">Conversion</p>
                <h3 className="text-2xl font-semibold text-white mb-3">Site Web</h3>
                <p className="text-mist/70 mb-6">Un site qui ne se contente pas d&apos;exister, il vend.</p>
                <ul className="space-y-3 text-sm text-mist/80">
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Design moderne et vivant</strong> : une vitrine qui reflète votre excellence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Optimisation et conversion</strong> : transformez chaque visiteur en client.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Mises à jour incluses</strong> : un site qui évolue au rythme de votre activité.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Expérience Client</strong> : fluidité totale sur mobile, tablette et ordinateur.</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.2} className="card-shell group hover:border-glow/30 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-glow/20 to-accent/20">
                  <svg className="h-7 w-7 text-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-glow mb-3">Création</p>
                <h3 className="text-2xl font-semibold text-white mb-3">Contenu</h3>
                <p className="text-mist/70 mb-6">Des contenus spécialisés créés par des experts</p>
                <ul className="space-y-3 text-sm text-mist/80">
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Photo et vidéo</strong> : des visuels haute qualité qui captent l&apos;attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Rédaction experte</strong> : des textes qui valorisent vos offres et captivent autant vos prospects que les algorithmes.</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.3} className="card-shell group hover:border-glow/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-glow/20 to-accent/20">
                  <svg className="h-7 w-7 text-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-glow mb-3">Croissance</p>
                <h3 className="text-2xl font-semibold text-white mb-3">Accompagnement</h3>
                <p className="text-mist/70 mb-6">Notre expertise au service de votre visibilité</p>
                <ul className="space-y-3 text-sm text-mist/80">
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Stratégie de contenu</strong> : un plan d&apos;action précis pour dominer votre marché</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Brainstorming créatif</strong> : des idées neuves pour rester toujours pertinent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Gestion des postes</strong> : gestion de la programmation et la diffusion pour vous.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-glow">•</span>
                    <span><strong className="text-white">Assistance technique</strong> : gestion, modifications et éventuels dépannages de chaque outil mis en place</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Nos Valeurs</p>
              <h2 className="font-display text-3xl text-white text-center sm:text-4xl lg:text-5xl max-w-4xl mx-auto">
                Une communication claire et des contenus originaux
              </h2>
              <p className="mt-6 text-lg text-mist/80 text-center max-w-3xl mx-auto">
                Nous fuyons le marketing creux pour nous concentrer sur ce qui construit la crédibilité de votre entreprise sur le long terme.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Reveal delay={0.1} className="card-shell text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30">
                  <span className="font-display text-2xl font-bold text-white">01</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Utilité & Clarté</h3>
                <p className="text-mist/80">
                  Chaque contenu sert un objectif précis : clarifier votre offre et rassurer vos prospects avec un discours simple.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="card-shell text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30">
                  <span className="font-display text-2xl font-bold text-white">02</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Originalité & Storytelling</h3>
                <p className="text-mist/80">
                  Nous exposons au monde ce qui rend votre entreprise unique : vos équipes, vos méthodes, vos produits et votre savoir-faire authentique.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="card-shell text-center">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30">
                  <span className="font-display text-2xl font-bold text-white">03</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Régularité & Durée</h3>
                <p className="text-mist/80">
                  Le temps devient votre meilleur allié : nous vous accompagnons durablement et construisons une présence sur les réseaux qui gagne en force et en autorité chaque mois.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Partenaires Carousel */}
        <section className="py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Ils nous font confiance</p>
              <h2 className="font-display text-3xl text-white text-center sm:text-4xl lg:text-5xl">
                Nos partenaires
              </h2>
            </Reveal>
          </div>

          <div className="relative flex overflow-x-hidden py-10">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                "/img/partenaire/AIRBUS_Blue.png",
                "/img/partenaire/CMA_CGM_logo.svg.png",
                "/img/partenaire/dircom-logo_amu_cmjn.png",
                "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png",
              ].map((src, i) => (
                <div key={i} className="mx-8 flex items-center justify-center">
                  <div className="card-shell h-24 w-48 flex items-center justify-center hover:border-glow/30 transition-all">
                    <Image
                      src={src}
                      alt={`Partenaire ${i + 1}`}
                      width={192}
                      height={64}
                      className="max-h-16 max-w-full object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              ))}

              <div className="mx-8 flex items-center justify-center">
                <div className="card-shell h-24 w-48 flex flex-col items-center justify-center">
                  <span className="font-display text-white text-3xl font-bold">+15</span>
                  <span className="font-sans text-white/60 text-xs uppercase tracking-widest font-semibold">TPE / PME</span>
                </div>
              </div>

              {[
                "/img/partenaire/AIRBUS_Blue.png",
                "/img/partenaire/CMA_CGM_logo.svg.png",
                "/img/partenaire/dircom-logo_amu_cmjn.png",
                "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png",
              ].map((src, i) => (
                <div key={`dup-${i}`} className="mx-8 flex items-center justify-center">
                  <div className="card-shell h-24 w-48 flex items-center justify-center hover:border-glow/30 transition-all">
                    <Image
                      src={src}
                      alt={`Partenaire ${i + 1}`}
                      width={192}
                      height={64}
                      className="max-h-16 max-w-full object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              ))}

              <div className="mx-8 flex items-center justify-center">
                <div className="card-shell h-24 w-48 flex flex-col items-center justify-center">
                  <span className="font-display text-white text-3xl font-bold">+15</span>
                  <span className="font-sans text-white/60 text-xs uppercase tracking-widest font-semibold">TPE / PME</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-shell bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <Reveal>
                  <p className="eyebrow mb-4">Contact</p>
                  <h2 className="font-display text-3xl text-white sm:text-4xl lg:text-5xl">
                    Audit gratuit : échangez sur votre visibilité
                  </h2>
                  <p className="mt-6 text-lg text-mist/90">
                    Partagez votre situation actuelle (expertise, objectifs, présence en ligne). Nous revenons avec une première analyse de votre potentiel de visibilité et des recommandations concrètes.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="card-shell">
                      <p className="text-xs uppercase tracking-[0.3em] text-glow mb-2">Réactivité</p>
                      <p className="font-display text-4xl text-white mb-1">24h</p>
                      <p className="text-sm text-mist/70">pour un premier retour qualifié</p>
                    </div>
                    <div className="card-shell">
                      <p className="text-xs uppercase tracking-[0.3em] text-glow mb-2">Accompagnement</p>
                      <p className="font-display text-3xl text-white mb-1">Sur-mesure</p>
                      <p className="text-sm text-mist/70">adapté à votre métier et vos enjeux</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-3">
                <Reveal delay={0.2}>
                  <ContactForm />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Questions fréquentes</p>
              <h2 className="font-display text-3xl text-white text-center sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
                FAQ
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
              {[
                {
                  q: "Pourquoi parlez-vous de visibilité « long terme » ?",
                  a: "Le marketing ponctuel s'oublie vite. Nous construisons des supports (articles, photos, vidéos, site) qui restent la propriété de l'entreprise et continuent de générer de la confiance des années après leur création."
                },
                {
                  q: "Est-ce que je dois passer du temps sur la création de contenu ?",
                  a: "Non, c'est tout l'intérêt. Après une phase d'immersion initiale pour comprendre votre métier, nous gérons la production de A à Z. Vous validez, nous publions."
                },
                {
                  q: "Quels types de supports produisez-vous ?",
                  a: "Tout ce qui sert votre crédibilité : reportages photo professionnels, interviews vidéo, articles SEO, fiches produits, rédaction de posts, newsletters, et même des visites virtuelles pour montrer vos locaux ou réalisations."
                },
                {
                  q: "Proposez-vous la création de site web ?",
                  a: "Oui. Nous proposons la création ou la refonte de votre site pour qu'il devienne une véritable machine à convertir le trafic en demandes de contact."
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="card-shell hover:border-glow/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4">{item.q}</h3>
                  <p className="text-mist/80 leading-relaxed">{item.a}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-block rounded-full bg-gradient-to-r from-accent to-glow px-8 py-4 font-semibold text-slate-900 shadow-2xl transition hover:scale-105 active:scale-95"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pourquoi parlez-vous de visibilité « long terme » ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le marketing ponctuel s'oublie vite. Nous construisons des supports (articles, photos, vidéos, site) qui restent la propriété de l'entreprise et continuent de générer de la confiance des années après leur création."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce que je dois passer du temps sur la création de contenu ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, c'est tout l'intérêt. Après une phase d'immersion initiale pour comprendre votre métier, nous gérons la production de A à Z. Vous validez, nous publions."
                }
              },
              {
                "@type": "Question",
                "name": "Quels types de supports produisez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tout ce qui sert votre crédibilité : reportages photo professionnels, interviews vidéo, articles SEO, fiches produits, rédaction de posts, newsletters, et même des visites virtuelles pour montrer vos locaux ou réalisations."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous la création de site web ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Nous proposons la création ou la refonte de votre site pour qu'il devienne une véritable machine à convertir le trafic en demandes de contact."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
