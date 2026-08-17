import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThumbBar } from "@/components/ThumbBar";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio — Amplixy",
  description:
    "Trois sites conçus par Amplixy pour un artisan, une école de musique et un commerce de marché.",
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
              Retour aux cas d’usage
            </Link>
            <h1>Trois sites conçus autour de trois métiers.</h1>
            <p>
              Le contenu, la structure et la visibilité locale répondent au
              quotidien de chaque activité.
            </p>
          </div>
        </section>

        <section className="portfolio-projects" aria-label="Sites réalisés">
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
