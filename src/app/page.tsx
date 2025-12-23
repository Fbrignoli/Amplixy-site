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

      <header
        id="home"
        className="mx-auto max-w-6xl px-4 pt-28 pb-6 sm:px-8 lg:min-h-screen lg:pb-0"
      >
        {/* Mobile: Layout vertical empilé */}
        <div className="flex flex-col gap-6 lg:hidden">
          <Reveal>
            <p className="eyebrow mb-2">Partenaire de visibilité</p>
          </Reveal>
          
          <Reveal delay={0.1} className="flex justify-center">
            <div className="relative h-64 w-64 rounded-full border border-glow/30 bg-gradient-to-br from-accent/30 to-midnight/30 p-4 shadow-glass">
              <div className="absolute inset-6 rounded-full border border-dashed border-glow/40 opacity-60"></div>
              <Image
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl"
                src="/img/julius-drost-dS-q7-zkD9c-unsplash.jpg"
                alt="Expertise visuelle Amplixy"
                width={256}
                height={256}
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="text-center">
            <h1 className="font-display text-3xl leading-tight text-white">
              On rend votre entreprise <span className="text-glow">évidente</span> à choisir.
            </h1>
            <p className="mt-4 text-base text-mist/80">
              Nous aidons les entreprises à rendre leur expertise visible, crédible et cohérente. Construisez une présence en ligne qui travaille pour vous dans la durée, sans y consacrer votre temps.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="grid grid-cols-3 gap-4">
              <div>
                <dt className="text-xs uppercase text-mist/60">Visibilité</dt>
                <dd className="font-display text-2xl text-white">3x</dd>
                <p className="text-xs text-mist/70">plus de visite</p>
              </div>
              <div>
                <dt className="text-xs uppercase text-mist/60">Temps libéré</dt>
                <dd className="font-display text-2xl text-white">20h</dd>
                <p className="text-xs text-mist/70">par semaine</p>
              </div>
              <div>
                <dt className="text-xs uppercase text-mist/60">Contacts</dt>
                <dd className="font-display text-2xl text-white">2x</dd>
                <p className="text-xs text-mist/70">plus de contact</p>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Desktop: Layout en colonnes */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <Reveal>
            <p className="eyebrow mb-6">Partenaire de visibilité</p>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              On rend votre entreprise <span className="text-glow">évidente</span> à choisir.
            </h1>
            <p className="mt-6 text-lg text-mist/80">
              Nous aidons les entreprises à rendre leur expertise visible, crédible et cohérente. Construisez une présence en ligne qui travaille pour vous dans la durée, sans y consacrer votre temps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-gradient-to-r from-accent to-glow px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-[1.01]"
                href="#contact"
              >
                Audit gratuit
              </a>
              <a
                className="rounded-full px-6 py-3 font-semibold text-glow transition hover:text-white"
                href="#approche"
              >
                Notre approche
              </a>
            </div>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm uppercase text-mist/60">Visibilité</dt>
                <dd className="font-display text-3xl text-white">3x</dd>
                <p className="text-sm text-mist/70">plus de visite</p>
              </div>
              <div>
                <dt className="text-sm uppercase text-mist/60">Temps libéré</dt>
                <dd className="font-display text-3xl text-white">20h</dd>
                <p className="text-sm text-mist/70">par semaine économisé</p>
              </div>
              <div>
                <dt className="text-sm uppercase text-mist/60">Contacts</dt>
                <dd className="font-display text-3xl text-white">2x</dd>
                <p className="text-sm text-mist/70">plus de contact</p>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="relative flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full border border-glow/30 bg-gradient-to-br from-accent/30 to-midnight/30 p-6 shadow-glass">
              <div className="absolute inset-10 rounded-full border border-dashed border-glow/40 opacity-60"></div>
              <Image
                className="relative h-full w-full rounded-[2.5rem] object-cover shadow-2xl"
                src="/img/julius-drost-dS-q7-zkD9c-unsplash.jpg"
                alt="Expertise visuelle Amplixy"
                width={400}
                height={400}
              />
            </div>
          </Reveal>
        </div>
      </header>

      <main className="relative z-10">
        {/* À qui ça s'adresse */}
        <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:section-shell" aria-labelledby="story-title" id="approche">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal>
              <p className="eyebrow mb-4">Notre Mission</p>
            </Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <Reveal className="space-y-6">
                <h2 id="story-title" className="font-display text-3xl text-white sm:text-4xl">
                  Faire connaître votre entreprise de la bonne manière.
                </h2>
                <p>
                  Votre savoir-faire mérite d'être vu et compris. Nous transformons votre expertise en contenus et supports qui renforcent la confiance et facilitent la prise de contact.
                </p>
                <p>
                  L'objectif n'est pas simplement de "poster", mais de construire une présence stable et professionnelle qui travaille pour vous, sans que vous ayez à y consacrer votre temps précieux.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-mist/80">
                  <li>Valorisation de votre expertise réelle</li>
                  <li>Création de supports visuels haute qualité</li>
                  <li>Contenus de fond qui rassurent vos clients</li>
                  <li>Accompagnement serein et durable</li>
                </ul>
              </Reveal>
              <Reveal delay={0.3} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <div className="space-y-4">
                  {[
                    { step: 1, text: "Immersion : nous comprenons votre métier, votre équipe et vos méthodes uniques." },
                    { step: 2, text: "Production : création de contenus (photo, vidéo, textes) qui montrent le réel." },
                    { step: 3, text: "Déploiement : mise en place d'une visibilité cohérente et automatisée sur la durée." }
                  ].map((item) => (
                    <div key={item.step} className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-glow">Phase {item.step}</p>
                      <p className="mt-2 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pourquoi Amplixy / Valeurs */}
        <section className="section-shell" aria-labelledby="pillars-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow mb-4">Nos Valeurs</p>
                <h2 id="pillars-title" className="font-display text-3xl text-white sm:text-4xl">
                  Une approche basée sur le réel et l'utile.
                </h2>
              </div>
              <p className="max-w-2xl text-mist/80">
                Nous fuyons le marketing creux pour nous concentrer sur ce qui construit la crédibilité de votre entreprise sur le long terme.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Utilité & Clarté", text: "Chaque contenu sert un objectif précis : clarifier votre offre et rassurer vos prospects avec un discours simple.", id: "01" },
                { title: "Singularité & Réel", text: "Nous exposons au monde ce qui rend votre entreprise unique : vos équipes, vos méthodes et votre savoir-faire authentique.", id: "02" },
                { title: "Régularité & Durée", text: "Le temps devient votre meilleur allié : nous construisons une présence sur les réseaux qui gagne en force et en autorité chaque mois.", id: "03" }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1} className="card-shell">
                  <p className="text-sm uppercase tracking-[0.3em] text-glow">Pilier {item.id}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm text-mist/80">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nos offres */}
        <section id="services" className="section-shell" aria-labelledby="services-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-4">Nos solutions</p>
              <h2 id="services-title" className="font-display text-3xl text-white sm:text-4xl">
                Trois leviers pour une visibilité qui convertit.
              </h2>
              <p className="mt-4 text-mist/80">
                Nous ne nous contentons pas de créer du contenu, nous construisons un écosystème numérique qui renforce votre autorité et facilite le choix de vos clients.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Reveal delay={0.1} className="card-shell flex flex-col">
                <p className="text-sm uppercase tracking-[0.3em] text-glow">Conversion</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Site Web</h3>
                <p className="mt-3 text-sm text-mist/70">Un site qui ne se contente pas d'exister, il vend.</p>
                <ul className="mt-4 space-y-3 text-sm text-mist/80">
                  <li><strong>Design moderne & vivant</strong> : une vitrine qui reflète votre excellence.</li>
                  <li><strong>Optimisation Conversion</strong> : transformez chaque visiteur en client qualifié.</li>
                  <li><strong>Mises à jour incluses</strong> : un site qui évolue au rythme de votre activité.</li>
                  <li><strong>Expérience Client</strong> : fluidité totale sur mobile, tablette et ordinateur.</li>
                </ul>
                <p className="mt-6 text-sm font-semibold text-glow">Objectif : Crédibilité</p>
              </Reveal>
              <Reveal delay={0.2} className="card-shell flex flex-col">
                <p className="text-sm uppercase tracking-[0.3em] text-glow">Savoir-faire</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Création de Contenu</h3>
                <p className="mt-3 text-sm text-mist/70">Des contenus spécialisés par des experts</p>
                <ul className="mt-4 space-y-3 text-sm text-mist/80">
                  <li><strong>Reportages photo & vidéo</strong> : des visuels haute qualité qui captent l'attention.</li>
                  <li><strong>Rédaction experte</strong> : des textes qui valorisent votre expertise réelle.</li>
                  <li><strong>Contenu spécialisé</strong> : des supports créés par des experts de votre domaine.</li>
                  <li><strong>Savoir-faire réel</strong> : montrez l'authenticité de votre métier au monde.</li>
                </ul>
                <p className="mt-6 text-sm font-semibold text-glow">Objectif : Immersion</p>
              </Reveal>
              <Reveal delay={0.3} className="card-shell flex flex-col">
                <p className="text-sm uppercase tracking-[0.3em] text-glow">Croissance</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Accompagnement</h3>
                <p className="mt-3 text-sm text-mist/70">Notre expertise au service de votre visibilité</p>
                <ul className="mt-4 space-y-3 text-sm text-mist/80">
                  <li><strong>Stratégie de contenu</strong> : un plan d'action précis pour dominer votre marché.</li>
                  <li><strong>Brainstorming créatif</strong> : des idées neuves pour rester toujours pertinent.</li>
                  <li><strong>Gestion des postes</strong> : nous gérons la programmation et la diffusion pour vous.</li>
                  <li><strong>Accélération</strong> : mettez notre expertise au service de votre développement.</li>
                </ul>
                <p className="mt-6 text-sm font-semibold text-glow">Objectif : Croissance</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Ils nous ont fait confiance (Carousel) */}
        <section className="py-20 overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 mb-10">
            <Reveal>
              <p className="eyebrow mb-4 text-center">Partenariat</p>
              <h2 className="font-display text-3xl text-white text-center sm:text-4xl">
                Ils nous ont fait confiance.
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
                <div
                  key={i}
                  className="mx-8 flex items-center justify-center transition-all duration-300"
                >
                  <div className="relative h-24 w-48 flex items-center justify-center px-6 border border-white/20 rounded-2xl bg-white/15 shadow-glass backdrop-blur-xl overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Partenaire ${i + 1}`}
                      width={192}
                      height={64}
                      className="max-h-16 max-w-full object-contain relative z-10 brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
              
              {/* Badge +15 TPE PME */}
              <div className="mx-8 flex items-center justify-center transition-all duration-300">
                <div className="relative h-24 w-48 flex flex-col items-center justify-center px-6 border border-white/20 rounded-2xl bg-white/15 shadow-glass backdrop-blur-xl overflow-hidden group">
                  <span className="font-display text-white text-3xl font-bold">+15</span>
                  <span className="font-sans text-white/60 text-xs uppercase tracking-widest font-semibold">TPE / PME</span>
                </div>
              </div>

              {/* Duplicate for infinite loop */}
              {[
                "/img/partenaire/AIRBUS_Blue.png",
                "/img/partenaire/CMA_CGM_logo.svg.png",
                "/img/partenaire/dircom-logo_amu_cmjn.png",
                "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png",
              ].map((src, i) => (
                <div
                  key={`dup-${i}`}
                  className="mx-8 flex items-center justify-center transition-all duration-300"
                >
                  <div className="relative h-24 w-48 flex items-center justify-center px-6 border border-white/20 rounded-2xl bg-white/15 shadow-glass backdrop-blur-xl overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Partenaire ${i + 1}`}
                      width={192}
                      height={64}
                      className="max-h-16 max-w-full object-contain relative z-10 brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
              
              <div className="mx-8 flex items-center justify-center transition-all duration-300">
                <div className="relative h-24 w-48 flex flex-col items-center justify-center px-6 border border-white/20 rounded-2xl bg-white/15 shadow-glass backdrop-blur-xl overflow-hidden group">
                  <span className="font-display text-white text-3xl font-bold">+15</span>
                  <span className="font-sans text-white/60 text-xs uppercase tracking-widest font-semibold">TPE / PME</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-shell" aria-labelledby="contact-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow mb-4">Contact</p>
                <h2 id="contact-title" className="font-display text-3xl text-white sm:text-4xl">
                  Audit gratuit : échangez sur votre visibilité
                </h2>
                <p className="mt-4 text-mist/80">
                  Partagez votre situation actuelle (expertise, objectifs, présence en ligne). Nous revenons avec une première analyse de votre potentiel de visibilité et des recommandations concrètes.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-mist/60">Réactivité</p>
                    <p className="mt-2 font-display text-3xl text-white">24h</p>
                    <p className="text-sm text-mist/70">pour un premier retour qualifié</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-mist/60">Accompagnement</p>
                    <p className="mt-2 font-display text-3xl text-white">Sur-mesure</p>
                    <p className="text-sm text-mist/70">adapté à votre métier et vos enjeux</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-shell" aria-labelledby="faq-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <Reveal>
              <p className="eyebrow mb-4">Questions fréquentes</p>
              <h2 id="faq-title" className="font-display text-3xl text-white sm:text-4xl">
                Précisions sur notre accompagnement
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                { q: "Pourquoi parlez-vous de visibilité 'long terme' ?", a: "Le marketing ponctuel s'oublie vite. Nous construisons des actifs (articles, photos, vidéos, site) qui restent la propriété de l'entreprise et continuent de générer de la confiance des années après leur création." },
                { q: "Est-ce que je dois passer du temps sur la création de contenu ?", a: "Non, c'est tout l'intérêt. Après une phase d'immersion initiale pour comprendre votre métier, nous gérons la production de A à Z. Vous validez, nous publions." },
                { q: "Quels types de supports produisez-vous ?", a: "Tout ce qui sert votre crédibilité : reportages photo professionnels, interviews vidéo, articles de fond, newsletters, et même des visites virtuelles pour montrer vos locaux ou réalisations." },
                { q: "Comment mesurez-vous le succès ?", a: "Au-delà des vues, nous regardons la qualité des contacts entrants et le taux de transformation de vos devis. Une bonne visibilité rend la vente plus facile." },
                { q: "Travaillez-vous avec nos agences de communication ?", a: "Oui, nous pouvons agir en tant que partenaire stratégique pour coordonner la production et s'assurer que chaque contenu respecte votre expertise réelle." },
                { q: "Le site web est-il inclus ?", a: "Nous proposons l'optimisation ou la refonte de votre site pour qu'il devienne une véritable machine à convertir le trafic en demandes de contact." }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="card-shell">
                  <h3 className="text-xl font-semibold text-white">{item.q}</h3>
                  <p className="mt-3 text-sm text-mist/80">{item.a}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-block rounded-full bg-gradient-to-r from-accent to-glow px-6 py-3 font-semibold text-slate-900 shadow-xl transition hover:scale-[1.01]"
              >
                Audit gratuit
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
                "name": "Pourquoi parlez-vous de visibilité 'long terme' ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le marketing ponctuel s'oublie vite. Nous construisons des actifs (articles, photos, vidéos, site) qui restent la propriété de l'entreprise et continuent de générer de la confiance des années après leur création."
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
                  "text": "Tout ce qui sert votre crédibilité : reportages photo professionnels, interviews vidéo, articles de fond, newsletters, et même des visites virtuelles pour montrer vos locaux ou réalisations."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}

