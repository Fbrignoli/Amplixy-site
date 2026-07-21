import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CALENDAR_URL } from "@/lib/site";

const projects = [
  {
    name: "Vion Couverture",
    meta: "Site vitrine · SEO local · Seine-et-Marne",
    result: "Visibilité locale",
    image: "/img/reussites/vioncouverture.webp",
    alt: "Toiture en tuiles rénovée par Vion Couverture",
    url: "https://vioncouverture.fr",
  },
  {
    name: "Accord’Âme",
    meta: "École de musique · Lyon",
    result: "Parcours clarifié",
    image: "/img/reussites/accordame.webp",
    alt: "Cours de musique à l’école Accord’Âme à Lyon",
    url: "https://www.ecoleaccordame.fr",
  },
  {
    name: "Corsicabrignoli",
    meta: "Commerce de marché · Marseille",
    result: "Présence retrouvée",
    image: "/img/reussites/corsicabrignoli.webp",
    alt: "Produits corses présentés sur un étal de marché",
    url: "https://corsicabrignoli.fr",
  },
] as const;

const services = [
  {
    tag: "Pour décider et automatiser",
    title: "Conseil IA",
    description:
      "Choisir le bon usage, construire la solution et rendre vos équipes autonomes.",
    href: "https://florianbrignoli.fr",
    arrow: "↗",
    external: true,
  },
  {
    tag: "Pour être trouvé et choisi",
    title: "Sites web",
    description:
      "Des vitrines rapides, crédibles et conçues autour de la décision du client.",
    href: "#realisations",
    arrow: "↓",
    external: false,
  },
  {
    tag: "Pour mieux travailler",
    title: "Outils métier",
    description:
      "Un outil façonné autour de vos opérations, au lieu d’imposer un process générique.",
    href: "https://firaxy.com",
    arrow: "↗",
    external: true,
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Observer",
    description: "Le travail réel, les contraintes et le résultat attendu.",
  },
  {
    number: "02",
    title: "Simplifier",
    description: "Retirer les détours, les doublons et les fausses bonnes idées.",
  },
  {
    number: "03",
    title: "Construire",
    description: "Livrer vite une solution utile, testable dans vos opérations.",
  },
  {
    number: "04",
    title: "Transmettre",
    description:
      "Vous laisser autonome, propriétaire et capable de faire évoluer.",
  },
] as const;

export default function Home() {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu">
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="hero-context">
                Atelier numérique indépendant · Melun
              </p>
              <h1 id="hero-title">
                Le numérique doit s’adapter à{" "}
                <span className="highlight">votre métier.</span> Pas l’inverse.
              </h1>
              <p className="hero-lede">
                Amplixy conçoit des systèmes numériques utiles : conseil IA,
                sites web et outils métier sur mesure. Un seul principe relie
                les trois : partir du travail réel.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#realisations">
                  Voir ce qu’on construit <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="button button-secondary"
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cadrer un besoin
                </a>
              </div>
            </div>

            <div
              className="workbench"
              aria-label="Aperçu de trois projets réalisés par Amplixy"
            >
              {projects.map((project, index) => (
                <a
                  className={`project-window project-window-${index + 1}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir ${project.name}`}
                  key={project.name}
                >
                  <div className="window-bar">
                    <span>{new URL(project.url).hostname.replace("www.", "")}</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1440}
                    height={900}
                    sizes="(min-width: 960px) 42vw, (min-width: 640px) 64vw, 90vw"
                    priority={index === 0}
                  />
                  <div className="window-caption">
                    <span>{project.result}</span>
                    <strong>{project.name} ↗</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Engagements Amplixy">
          <div className="site-shell proof-grid">
            <div className="proof-item">
              <span className="proof-icon" aria-hidden="true">
                01
              </span>
              <div>
                <strong>Un seul interlocuteur</strong>
                <p>Du cadrage à la mise en ligne.</p>
              </div>
            </div>
            <div className="proof-item">
              <span className="proof-icon" aria-hidden="true">
                02
              </span>
              <div>
                <strong>Le métier avant l’outil</strong>
                <p>Chaque choix répond à une friction réelle.</p>
              </div>
            </div>
            <div className="proof-item">
              <span className="proof-icon" aria-hidden="true">
                03
              </span>
              <div>
                <strong>Vous restez propriétaire</strong>
                <p>Des livrables transmis, compris et évolutifs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="belief" aria-labelledby="belief-title">
          <div className="site-shell belief-inner">
            <h2 id="belief-title">
              La technologie n’a de valeur que lorsqu’elle rend le travail{" "}
              <span>plus simple, plus clair ou plus rapide.</span>
            </h2>
          </div>
        </section>

        <section
          className="services"
          id="expertises"
          aria-labelledby="services-title"
        >
          <div className="site-shell">
            <div className="section-head">
              <h2 id="services-title">
                Trois portes d’entrée. Une même exigence.
              </h2>
              <p>
                On commence par ce qui bloque : une tâche répétitive, une
                présence en ligne trop faible ou un logiciel qui ne suit plus.
              </p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <a
                  className="service-row"
                  href={service.href}
                  target={service.external ? "_blank" : undefined}
                  rel={service.external ? "noopener noreferrer" : undefined}
                  key={service.title}
                >
                  <span className="service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow" aria-hidden="true">
                    {service.arrow}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="work"
          id="realisations"
          aria-labelledby="work-title"
        >
          <div className="site-shell">
            <div className="work-head">
              <h2 className="work-title" id="work-title">
                Ce qu’on a déjà construit.
              </h2>
              <p>
                Trois entreprises. Pour chacune, Amplixy a conçu un site
                adapté à son métier et à ses clients.
              </p>
            </div>
            <div className="work-grid">
              {projects.map((project, index) => (
                <a
                  className={`project-card ${index === 0 ? "project-featured" : ""}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le site ${project.name}`}
                  key={project.name}
                >
                  <span className="project-result">{project.result}</span>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1440}
                    height={900}
                    sizes={
                      index === 0
                        ? "(min-width: 960px) 58vw, 100vw"
                        : "(min-width: 960px) 42vw, (min-width: 640px) 50vw, 100vw"
                    }
                  />
                  <div className="project-info">
                    <div>
                      <p>{project.meta}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span className="project-link" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="method"
          id="methode"
          aria-labelledby="method-title"
        >
          <div className="site-shell">
            <h2 id="method-title">Comprendre avant de construire.</h2>
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <small>{step.number}</small>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact" aria-labelledby="cta-title">
          <div className="site-shell cta-inner">
            <h2 id="cta-title">
              Quel point de friction vous coûte le plus aujourd’hui&nbsp;?
            </h2>
            <div className="cta-side">
              <p>
                Un échange de 30 minutes pour nommer le vrai problème et
                décider de la prochaine étape.
              </p>
              <a
                className="button button-signal"
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cadrer le sujet <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
