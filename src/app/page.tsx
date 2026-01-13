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
        className="relative mx-auto max-w-7xl px-5 pt-24 pb-12 lg:px-12 lg:pt-40 lg:pb-28 min-h-[90vh] lg:min-h-screen flex items-center"
      >
        {/* Mobile: Vertical stack */}
        <div className="flex flex-col items-center text-center lg:hidden w-full space-y-6">
          <Reveal>
            <p className="eyebrow mb-3">Votre partenaire numérique</p>
            <p className="font-display text-3xl leading-tight text-white">
              Développez votre{" "}
              <span className="text-gradient">présence en ligne</span>
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-full py-4">
              <div className="relative mx-auto w-56 h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-glow/20 to-transparent blur-3xl -z-10 scale-125"></div>
                <div className="relative rounded-full border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-3 shadow-glass backdrop-blur-xl w-full h-full">
                  <Image
                    className="relative w-full h-full rounded-2xl object-cover shadow-2xl"
                    src="/img/julius-drost-dS-q7-zkD9c-unsplash.jpg"
                    alt="Expertise Amplixy"
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
              Nous aidons les entreprises à rendre leur expertise visible, crédible et attrayante. Construisez une présence en ligne durable avec vos clients et prospects.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-row gap-3 justify-center pt-2">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-accent to-glow px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-105 active:scale-95 text-sm"
              >
                Audit gratuit
              </a>
              <a
                href="#mission"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/10 text-sm"
              >
                Notre mission
              </a>
            </div>
          </Reveal>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-20 xl:gap-24 lg:items-center w-full">
          <div className="text-left">
            <Reveal>
              <p className="eyebrow mb-4">Votre partenaire numérique</p>
              <p className="font-display text-4xl xl:text-5xl leading-tight text-white">
                Développez votre{" "}
                <span className="text-gradient">présence en ligne</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-xl text-mist/90">
                Nous aidons les entreprises à rendre leur expertise visible, crédible et attrayante. Construisez une présence en ligne pour créer un lien durable avec vos clients et prospects.
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
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Notre mission
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
        <section id="mission" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Notre Mission</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Faire connaître votre entreprise de la bonne manière
              </h2>
            </Reveal>

            <div className="mt-10 lg:mt-16 max-w-3xl mx-auto space-y-6">
              <Reveal delay={0.1}>
                <p className="text-sm lg:text-base text-mist/90 text-center">
                  Votre savoir-faire mérite d&apos;être vu et compris. Nous transformons votre expertise en contenus et supports qui renforcent la confiance et facilitent la prise de contact.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-sm lg:text-base text-mist/90 text-center">
                  L&apos;objectif n&apos;est pas simplement de « poster », mais de construire une présence en ligne stable et professionnelle qui travaille pour vous, sans que vous ayez à y consacrer votre temps précieux.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Valorisation de votre expertise",
                    "Optimisation de votre présence en ligne",
                    "Création de contenus visuels et textuels de haute qualité",
                    "Accompagnement serein et durable"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-mist/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-glow/20 text-glow text-xs">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Notre Fonctionnement */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Notre Fonctionnement</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Expert du numérique et de la création de contenu
              </h2>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  phase: "Phase 1",
                  title: "Immersion",
                  text: "Nous comprenons votre métier, votre équipe et vos méthodes uniques."
                },
                {
                  phase: "Phase 2",
                  title: "Production",
                  text: "Création de contenus (photo, vidéo, textes) qui mettent en avant votre image de marque et votre savoir-faire."
                },
                {
                  phase: "Phase 3",
                  title: "Déploiement",
                  text: "Mise en place d'une présence digitale (site web, réseaux sociaux, etc.) cohérente et durable."
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1} className="card-shell p-5 lg:p-8 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30">
                    <span className="font-display text-lg lg:text-xl font-bold text-white">{idx + 1}</span>
                  </div>
                  <p className="eyebrow mb-2">{item.phase}</p>
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-xs lg:text-sm text-mist/80">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Solutions */}
        <section id="services" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Nos Solutions</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Trois leviers pour une visibilité qui convertit
              </h2>
              <p className="mt-4 text-sm lg:text-base text-mist/80 text-center max-w-2xl mx-auto">
                Nous construisons un écosystème numérique qui renforce votre autorité et facilite le choix de vos clients.
              </p>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: (
                    <svg className="h-6 w-6 text-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  eyebrow: "Conversion",
                  title: "Site Web",
                  desc: "Un site qui ne se contente pas d'exister, il vend.",
                  items: [
                    { bold: "Design moderne", text: "une vitrine qui reflète votre excellence." },
                    { bold: "Optimisation", text: "transformez chaque visiteur en client." },
                    { bold: "Mises à jour", text: "un site qui évolue avec vous." },
                    { bold: "Multi-device", text: "fluide sur tous les écrans." }
                  ]
                },
                {
                  icon: (
                    <svg className="h-6 w-6 text-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  eyebrow: "Création",
                  title: "Contenu",
                  desc: "Des contenus créés par des experts.",
                  items: [
                    { bold: "Photo et vidéo", text: "visuels haute qualité." },
                    { bold: "Rédaction experte", text: "textes qui captivent." }
                  ]
                },
                {
                  icon: (
                    <svg className="h-6 w-6 text-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  eyebrow: "Croissance",
                  title: "Accompagnement",
                  desc: "Notre expertise à votre service.",
                  items: [
                    { bold: "Stratégie", text: "un plan d'action précis." },
                    { bold: "Brainstorming", text: "des idées neuves." },
                    { bold: "Gestion", text: "programmation et diffusion." },
                    { bold: "Support", text: "assistance technique." }
                  ]
                }
              ].map((service, idx) => (
                <Reveal key={idx} delay={idx * 0.1} className="card-shell p-5 lg:p-8 group hover:border-glow/30 transition-all duration-300">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-glow/20 to-accent/20">
                    {service.icon}
                  </div>
                  <p className="eyebrow mb-2">{service.eyebrow}</p>
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-xs lg:text-sm text-mist/70 mb-4">{service.desc}</p>
                  <ul className="space-y-2 text-xs lg:text-sm text-mist/80">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-glow">•</span>
                        <span><strong className="text-white">{item.bold}</strong> : {item.text}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Nos Valeurs</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-3xl mx-auto">
                Une communication claire et des contenus originaux
              </h2>
              <p className="mt-4 text-sm lg:text-base text-mist/80 text-center max-w-2xl mx-auto">
                Nous fuyons le marketing creux pour construire votre crédibilité sur le long terme.
              </p>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-5 lg:gap-8 md:grid-cols-3">
              {[
                { num: "01", title: "Utilité & Clarté", text: "Chaque contenu sert un objectif : clarifier votre offre et rassurer vos prospects." },
                { num: "02", title: "Originalité", text: "Nous exposons ce qui rend votre entreprise unique : vos équipes, vos méthodes, votre savoir-faire." },
                { num: "03", title: "Régularité", text: "Le temps devient votre allié : une présence qui gagne en force chaque mois." }
              ].map((value, idx) => (
                <Reveal key={idx} delay={idx * 0.1} className="card-shell p-5 lg:p-8 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-br from-glow/30 to-accent/30">
                    <span className="font-display text-lg lg:text-xl font-bold text-white">{value.num}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-xs lg:text-sm text-mist/80">{value.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partenaires Carousel */}
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
                <div key={i} className="mx-4 lg:mx-8 flex items-center justify-center">
                  <div className="card-shell p-4 h-20 w-36 lg:h-24 lg:w-48 flex items-center justify-center hover:border-glow/30 transition-all">
                    <Image
                      src={src}
                      alt={`Partenaire ${i + 1}`}
                      width={192}
                      height={64}
                      className="max-h-12 lg:max-h-16 max-w-full object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              ))}

              <div className="mx-4 lg:mx-8 flex items-center justify-center">
                <div className="card-shell p-4 h-20 w-36 lg:h-24 lg:w-48 flex flex-col items-center justify-center">
                  <span className="font-display text-white text-2xl lg:text-3xl font-bold">+15</span>
                  <span className="font-sans text-white/60 text-[10px] lg:text-xs uppercase tracking-widest font-semibold">TPE / PME</span>
                </div>
              </div>

              {[
                "/img/partenaire/AIRBUS_Blue.png",
                "/img/partenaire/CMA_CGM_logo.svg.png",
                "/img/partenaire/dircom-logo_amu_cmjn.png",
                "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png",
              ].map((src, i) => (
                <div key={`dup-${i}`} className="mx-4 lg:mx-8 flex items-center justify-center">
                  <div className="card-shell p-4 h-20 w-36 lg:h-24 lg:w-48 flex items-center justify-center hover:border-glow/30 transition-all">
                    <Image
                      src={src}
                      alt={`Partenaire ${i + 1}`}
                      width={192}
                      height={64}
                      className="max-h-12 lg:max-h-16 max-w-full object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              ))}

              <div className="mx-4 lg:mx-8 flex items-center justify-center">
                <div className="card-shell p-4 h-20 w-36 lg:h-24 lg:w-48 flex flex-col items-center justify-center">
                  <span className="font-display text-white text-2xl lg:text-3xl font-bold">+15</span>
                  <span className="font-sans text-white/60 text-[10px] lg:text-xs uppercase tracking-widest font-semibold">TPE / PME</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <Reveal>
                  <p className="eyebrow mb-3">Contact</p>
                  <h2 className="font-display text-xl text-white lg:text-4xl">
                    Audit gratuit : échangez sur votre visibilité
                  </h2>
                  <p className="mt-4 text-sm lg:text-base text-mist/90">
                    Partagez votre situation. Nous analysons votre potentiel et vous donnons des recommandations concrètes.
                  </p>
                  <div className="mt-6 grid gap-4 grid-cols-2">
                    <div className="card-shell p-4 lg:p-6">
                      <p className="eyebrow mb-1">Réactivité</p>
                      <p className="font-display text-2xl lg:text-3xl text-white mb-1">24h</p>
                      <p className="text-xs text-mist/70">pour un retour qualifié</p>
                    </div>
                    <div className="card-shell p-4 lg:p-6">
                      <p className="eyebrow mb-1">Offre</p>
                      <p className="font-display text-xl lg:text-2xl text-white mb-1">Sur-mesure</p>
                      <p className="text-xs text-mist/70">adapté à vos enjeux</p>
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
        <section id="faq" className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Questions fréquentes</p>
              <h2 className="font-display text-xl text-white text-center lg:text-4xl max-w-2xl mx-auto">
                FAQ
              </h2>
            </Reveal>

            <div className="mt-10 lg:mt-16 grid gap-4 lg:gap-6 md:grid-cols-2">
              {[
                {
                  q: "Pourquoi parlez-vous de visibilité « long terme » ?",
                  a: "Le marketing ponctuel s'oublie vite. Nous construisons des supports qui restent et continuent de générer de la confiance."
                },
                {
                  q: "Dois-je passer du temps sur la création ?",
                  a: "Non. Après une phase d'immersion, nous gérons tout de A à Z. Vous validez, nous publions."
                },
                {
                  q: "Quels types de supports produisez-vous ?",
                  a: "Photos, vidéos, articles SEO, fiches produits, posts, newsletters, et visites virtuelles."
                },
                {
                  q: "Proposez-vous la création de site web ?",
                  a: "Oui. Nous créons des sites qui convertissent le trafic en demandes de contact."
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="card-shell p-5 lg:p-8 hover:border-glow/30 transition-all">
                  <h3 className="text-base lg:text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-xs lg:text-sm text-mist/80 leading-relaxed">{item.a}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contact"
                className="inline-block rounded-full bg-gradient-to-r from-accent to-glow px-6 py-3 lg:px-8 lg:py-4 font-semibold text-slate-900 shadow-2xl transition hover:scale-105 active:scale-95 text-sm lg:text-base"
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
                  "text": "Le marketing ponctuel s'oublie vite. Nous construisons des supports qui restent et continuent de générer de la confiance."
                }
              },
              {
                "@type": "Question",
                "name": "Dois-je passer du temps sur la création ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Après une phase d'immersion, nous gérons tout de A à Z. Vous validez, nous publions."
                }
              },
              {
                "@type": "Question",
                "name": "Quels types de supports produisez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Photos, vidéos, articles SEO, fiches produits, posts, newsletters, et visites virtuelles."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous la création de site web ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Nous créons des sites qui convertissent le trafic en demandes de contact."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
