import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThumbBar } from "@/components/ThumbBar";
import { projects } from "@/lib/projects";
import { businessCases } from "@/lib/business-cases";

export const metadata: Metadata = {
  title: "Réalisations — Amplixy",
  description:
    "Gestion de projet, IA métier et sites web : des missions Amplixy présentées par leur problème de départ et la réponse mise en place.",
  alternates: {
    canonical: "https://amplixy.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu" className="portfolio-page">
        <section className="portfolio-hero">
          <div className="site-shell">
            <Link className="portfolio-back" href="/#realisations">
              <span aria-hidden="true">←</span>
              Retour aux réalisations
            </Link>
            <h1>Le métier donne le cap. Les réalisations le montrent.</h1>
            <p>
              Du suivi de projets à l’accès aux connaissances internes, jusqu’à
              la présentation d’une activité : chaque mission part d’un besoin
              concret. Les cas confidentiels sont présentés sans nommer les clients.
            </p>
          </div>
        </section>

        <section className="proof portfolio-business-cases" aria-labelledby="business-cases-title">
          <div className="site-shell">
            <div className="section-intro">
              <h2 className="section-title" id="business-cases-title">Organisation et IA métier.</h2>
            </div>
            <div className="case-grid">
              {businessCases.map((caseStudy) => (
                <article className="use-case" key={caseStudy.title}>
                  <header className="case-heading">
                    <span className="case-index">Client confidentiel</span>
                    <h3>{caseStudy.title}</h3>
                  </header>
                  <dl className="case-facts">
                    <div>
                      <dt>Le problème</dt>
                      <dd>{caseStudy.problem}</dd>
                    </div>
                    <div>
                      <dt>La réalisation</dt>
                      <dd>{caseStudy.solution}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-projects" aria-labelledby="web-projects-title">
          <div className="site-shell section-intro split-intro">
            <h2 className="section-title" id="web-projects-title">Trois sites, trois métiers.</h2>
            <p>
              Le contenu, la structure et la visibilité locale répondent au
              quotidien de chaque activité.
            </p>
          </div>
          <div className="site-shell portfolio-grid">
            {projects.map((project, index) => (
              <a
                className="project portfolio-project"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
              >
                <div className="project-image-wrap">
                  <Image
                    className="project-shot"
                    src={project.image}
                    alt={project.alt}
                    width={960}
                    height={600}
                    priority={index === 0}
                    sizes="(min-width: 900px) 360px, (min-width: 600px) 50vw, 100vw"
                  />
                </div>
                <div className="project-copy">
                  <span>{project.trade}</span>
                  <h2>{project.name}</h2>
                  <p>{project.build}</p>
                  <strong>{project.domain}</strong>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ThumbBar />
    </div>
  );
}
