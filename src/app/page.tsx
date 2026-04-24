import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CalInit } from "@/components/CalInit";
import { SketchUnderline } from "@/components/ui/SketchUnderline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <CalInit />
      <Navbar />

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

          <h1 className="font-display text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
            On aide les TPE-PME
            <br className="sm:hidden" />
            {" "}à prendre le{" "}
            {/* Grand écran (lg+): souligne "virage du numérique" */}
            <span className="relative inline-block hidden lg:inline-block">
              virage du numérique.
              <SketchUnderline color="#3b82f6" opacity={1} strokeWidth={3} variant="wide" />
            </span>
            {/* Mobile + tablette (< lg): souligne seulement "numérique" */}
            <span className="lg:hidden">
              virage du{" "}
              <span className="relative inline-block">
                numérique.
                <SketchUnderline color="#3b82f6" opacity={1} strokeWidth={3} variant="wide" />
              </span>
            </span>
          </h1>

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
                { src: "/img/partenaire/AIRBUS_Blue.png", alt: "Airbus" },
                { src: "/img/partenaire/CMA_CGM_logo.svg.png", alt: "CMA CGM" },
                { src: "/img/partenaire/dircom-logo_amu_cmjn.png", alt: "Aix-Marseille Université" },
                { src: "/img/partenaire/NAF-NAF-Le-Grand-Mechant-Look-Logo-Vector.svg-.png", alt: "NAF NAF" },
              ].map((partner, i) => (
                <Image
                  key={partner.alt}
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={40}
                  sizes="120px"
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

      <main id="main-content">
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
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
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
                    <SketchUnderline />
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
                    <SketchUnderline color="currentColor" opacity={0.5} strokeWidth={3} />
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
                <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
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
                </article>
              </Reveal>

              {/* Card 2 — Firaxy */}
              <Reveal delay={0.2}>
                <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
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
                </article>
              </Reveal>

              {/* Card 3 — Et demain ? */}
              <Reveal delay={0.3}>
                <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔮</span>
                    <h3 className="font-display text-xl font-bold">Et demain ?</h3>
                  </div>
                  <div className="space-y-3 text-white/70 text-sm leading-relaxed flex-1">
                    <p>D&apos;autres outils viendront, toujours conçus pour les TPE-PME, toujours simples, toujours accessibles.</p>
                  </div>
                </article>
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
            NOS RÉUSSITES
            ============================================ */}
        <section id="reussites" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-ink/5 text-ink/60 text-xs font-semibold uppercase tracking-wider">
                  Nos réussites
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
                  Des entreprises qui{" "}
                  <span className="relative inline-block">
                    nous font confiance
                    <SketchUnderline />
                  </span>
                </h2>
                <p className="mt-4 text-charcoal max-w-2xl mx-auto">
                  Artisans, commerçants, indépendants : des sites livrés, simples à utiliser, pensés pour leur réalité.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  name: "Firaxy",
                  sector: "SaaS — Fidélisation commerçants ambulants",
                  location: "France",
                  url: "https://firaxy.com",
                  image: "/img/reussites/firaxy.webp",
                  desc: "Plateforme de fidélité pour vendeurs sur marchés et foires. Un QR code, et les clients sont alertés quand on revient dans leur région.",
                },
                {
                  name: "VionCouverture",
                  sector: "Artisan couvreur",
                  location: "Melun, Seine-et-Marne",
                  url: "https://vioncouverture.fr",
                  image: "/img/reussites/vioncouverture.webp",
                  desc: "Site vitrine pour un artisan couvreur indépendant. SEO local, structured data, formulaire de contact — livré clé en main.",
                },
                {
                  name: "Accord'Âme",
                  sector: "École de musique",
                  location: "Lyon",
                  url: "https://ecoleaccordame.fr",
                  image: "/img/reussites/accordame.webp",
                  desc: "Site one-page pour une école de violon et alto (méthode Suzuki). Design doux, sections cours par âge, carte de localisation intégrée.",
                },
                {
                  name: "Corsicabrignoli",
                  sector: "Produits corses (marchés)",
                  location: "Marseille",
                  url: "https://corsicabrignoli.fr",
                  image: "/img/reussites/corsicabrignoli.webp",
                  desc: "Vitrine pour un vendeur de charcuterie et fromages corses sur les marchés de la Côte Bleue. Planning des marchés à jour, crédibilité en ligne.",
                },
              ].map((item, i) => (
                <Reveal key={item.name} delay={i * 0.1}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl overflow-hidden border border-ink/10 transition-all hover:border-accent hover:shadow-paper-lg hover:-translate-y-1 h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                      <Image
                        src={item.image}
                        alt={`Aperçu du site ${item.name}`}
                        width={720}
                        height={450}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="min-w-0">
                          <h3 className="font-display text-xl font-bold text-ink truncate">{item.name}</h3>
                          <p className="text-xs text-charcoal/60 mt-0.5">
                            {item.sector} · {item.location}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                        </svg>
                      </div>
                      <p className="text-sm text-charcoal leading-relaxed">{item.desc}</p>
                      <p className="mt-4 text-xs font-semibold text-accent uppercase tracking-wider">
                        {item.url.replace(/^https?:\/\//, "")}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
                      src="/img/florian-brignoli.png"
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
                      <SketchUnderline />
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
              {[
                {
                  q: "À qui s'adressent vos services ?",
                  a: "Aux TPE et PME qui veulent prendre le virage du numérique sans se perdre dans des outils surdimensionnés. Chaque solution est pensée pour votre réalité, pas pour celle des grandes entreprises.",
                },
                {
                  q: "Quels outils proposez-vous ?",
                  a: "Des sites web professionnels simples et rapides à déployer (livrés en 48h, à partir de 40€/mois hébergement inclus), et Firaxy pour la fidélisation client (programme de fidélité digital pour commerçants ambulants). D'autres outils arriveront, toujours pensés pour les TPE-PME.",
                },
                {
                  q: "Combien coûte un site web avec Amplixy ?",
                  a: "Nos sites web démarrent à 40€/mois tout inclus (hébergement, maintenance, support, nom de domaine). Livraison en 48h. Pas de frais de mise en service cachés, pas d'engagement longue durée imposé comme chez certains concurrents WordPress.",
                },
                {
                  q: "Comment vous contacter ?",
                  a: "Par email à contact@amplixy.com, par téléphone au 07 78 20 90 44, ou directement en prenant rendez-vous via notre agenda en ligne.",
                },
                {
                  q: "Êtes-vous liés au site amplixy.ai ?",
                  a: "Non, amplixy.ai n'a aucun lien avec notre entreprise. Des démarches sont en cours pour que notre image soit clairement dissociée de ce site. Si vous rencontrez un problème avec amplixy.ai, nous vous conseillons de contacter directement Lemon Squeezy ou Vercel.",
                },
              ].map((item, i) => (
                <Reveal key={item.q} delay={i * 0.05}>
                  <details className="group bg-white rounded-xl border border-ink/10 overflow-hidden transition-all hover:border-ink/20">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-display font-semibold text-ink list-none [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <svg className="w-5 h-5 shrink-0 transition-transform group-open:rotate-45 text-ink/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      <SketchUnderline strokeWidth={3} />
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
