import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThumbBar } from "@/components/ThumbBar";
import { ToolMarquee } from "@/components/ToolMarquee";
import { businessCases } from "@/lib/business-cases";
import {
  CALENDAR_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/lib/site";

const painPoints = [
  {
    problem: "Les informations se dispersent",
    answer:
      "On identifie les données de référence et les échanges utiles entre vos outils pour réduire les doubles saisies.",
  },
  {
    problem: "Un nouvel outil promet de tout changer",
    answer:
      "On vérifie ce qu’il apporte au travail réel, ce qu’il coûte et les dépendances qu’il crée avant de le retenir.",
  },
  {
    problem: "Tout repose sur une seule personne",
    answer:
      "On documente les règles, les accès et les décisions pour faciliter la continuité et la transmission.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Diagnostic et socle",
    description:
      "On observe le travail, on repère les outils et les données, puis on formalise les priorités dans votre dossier de référence.",
  },
  {
    number: "02",
    title: "Réalisation",
    description:
      "On configure, relie ou construit la solution utile : outil métier, automatisation, IA ou site. On la teste avec les utilisateurs, puis on forme et on documente.",
  },
  {
    number: "03",
    title: "Pilotage continu",
    description:
      "Nouveaux outils, accès à revoir, besoins qui changent : Amplixy aide à arbitrer les évolutions et à tenir la documentation à jour. Le périmètre et la fréquence du suivi sont convenus ensemble.",
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
          <div className="site-shell hero-layout">
            <div className="hero-copy">
              <p className="hero-label">Référent numérique indépendant des PME</p>
              <h1 className="display" id="hero-title">
                Les outils changent.{" "}
                <span>Votre entreprise garde le contrôle.</span>
              </h1>
              <p className="hero-lede">
                Amplixy aide les PME à choisir, relier et faire évoluer leurs outils
                numériques. En partant du travail réel, avec des décisions
                expliquées et une documentation que l’entreprise conserve.
              </p>

              <div className="hero-actions" id="hero-cta">
                <a
                  className="button button-primary"
                  href={CALENDAR_URL}
                >
                  Parler de votre besoin
                </a>
                <a className="text-link" href="#methode">
                  Découvrir l’accompagnement
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="hero-author">
                <Image
                  src="/img/florian-brignoli.png"
                  alt="Florian Brignoli"
                  width={96}
                  height={96}
                  priority
                />
                <p>
                  <strong>Florian Brignoli</strong>
                  Fondateur d’Amplixy et votre interlocuteur pour cadrer les priorités.
                  Selon le besoin, il coordonne d’autres spécialistes.
                </p>
              </div>
            </div>

            <figure className="principle-board">
              <figcaption>
                <span>Le point de confiance</span>
                Entre votre métier et le numérique
              </figcaption>

              <blockquote>
                <span>Votre <em>métier</em> d’abord,</span>
                <strong>la technique ensuite.</strong>
              </blockquote>

              <div className="principle-path">
                <div className="principle-step">
                  <span>01</span>
                  <div>
                    <strong>Votre réalité</strong>
                    <small>Le travail, les règles, les contraintes.</small>
                  </div>
                </div>
                <span className="principle-arrow" aria-hidden="true">→</span>
                <div className="principle-step">
                  <span>02</span>
                  <div>
                    <strong>Des choix utiles</strong>
                    <small>Des outils reliés à vos priorités.</small>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section className="approach" id="approche" aria-labelledby="approach-title">
          <div className="site-shell">
            <div className="section-intro split-intro">
              <h2 className="section-title" id="approach-title">
                Vos outils s’accumulent. Les décisions aussi.
              </h2>
              <p>
                Quel logiciel garder ? Où sont les bonnes informations ? L’IA
                est-elle utile ici ? Amplixy vous aide à décider à partir de
                votre activité, de vos contraintes et de ce qui existe déjà.
              </p>
            </div>

            <div className="pain-list">
              {painPoints.map((item) => (
                <article className="pain-row" key={item.problem}>
                  <span className="pain-mark" aria-hidden="true" />
                  <h3>{item.problem}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="compliance"
          id="conformite"
          aria-labelledby="compliance-title"
        >
          <div className="site-shell compliance-layout">
            <h2 id="compliance-title">
              Un dossier de référence qui reste dans votre entreprise.
            </h2>
            <div>
              <p>
                C’est votre socle numérique : les informations utiles pour comprendre
                vos outils, prendre les prochaines décisions et préparer leur reprise.
                Il vous appartient. Aucun nouveau logiciel n’est imposé pour le consulter.
              </p>
              <div className="compliance-visual">
                <div>
                  <span>Métier</span>
                  <strong>Vos processus et règles essentiels.</strong>
                </div>
                <div>
                  <span>Outils et données</span>
                  <strong>Les flux, les accès et leurs responsables.</strong>
                </div>
                <div>
                  <span>Continuité</span>
                  <strong>Les dépendances, les exports et les priorités.</strong>
                </div>
              </div>
              <p className="compliance-note">
                Son contenu est défini au cadrage : usages de l’IA et leurs limites,
                procédures de reprise, coûts ou feuille de route selon le besoin.
                Les possibilités d’export et de reprise dépendent aussi des outils retenus.
              </p>
              <Link className="compliance-link" href="/conformite-ia">
                Comprendre les enjeux de données et d’IA
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="method" id="methode" aria-labelledby="method-title">
          <div className="site-shell">
            <div className="section-intro method-intro">
              <h2 className="section-title" id="method-title">
                Comprendre, réaliser, puis faire évoluer.
              </h2>
              <p>
                On commence par vos priorités. On réalise ce qui est utile. Si vous
                avez besoin d’un suivi, Amplixy vous accompagne ensuite dans les
                décisions et les évolutions.
              </p>
            </div>

            <ol className="steps">
              {steps.map((step) => (
                <li className="step" key={step.number}>
                  <span className="step-number" aria-hidden="true">
                    {step.number}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="method-note">
              Chaque mission précise les livrables, les responsabilités et les coûts.
              Le suivi fait l’objet d’un accord distinct ou d’un volet prévu au contrat.
            </p>
          </div>
        </section>

        <section
          className="proof"
          id="realisations"
          aria-labelledby="proof-title"
        >
          <div className="site-shell">
            <div className="section-intro split-intro proof-intro">
              <h2 className="section-title" id="proof-title">
                Des décisions métier, des réalisations concrètes.
              </h2>
              <p>
                Organisation, IA ou communication : ces missions montrent comment
                Amplixy part du besoin pour choisir et mettre en place la réponse.
                Deux clients restent anonymes à leur demande.
              </p>
            </div>

            <div className="case-grid">
              {businessCases.map((caseStudy, index) => (
                <article className="use-case" key={caseStudy.title}>
                  <header className="case-heading">
                    <span className="case-index">Cas 0{index + 1}</span>
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
              <article className="use-case">
                <header className="case-heading">
                  <span className="case-index">Cas 03</span>
                  <h3>Communication</h3>
                </header>

                <dl className="case-facts">
                  <div>
                    <dt>Le problème</dt>
                    <dd>
                      Trois activités devaient présenter leur savoir-faire et
                      être trouvées par leurs futurs clients.
                    </dd>
                  </div>
                  <div>
                    <dt>La réalisation</dt>
                    <dd>
                      Trois sites adaptés à leur métier et à leur zone d’activité :
                      Vion Couverture, Accord’Âme et Corsicabrignoli.
                    </dd>
                  </div>
                </dl>

                <div className="case-links">
                  <a
                    className="case-link case-link-primary"
                    href="https://vioncouverture.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir Vion Couverture
                  </a>
                  <Link className="case-link" href="/portfolio">
                    Voir les réalisations
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>

            </div>
          </div>
        </section>

        <ToolMarquee />

        <section
          className="products"
          id="produits"
          aria-labelledby="products-title"
        >
          <div className="site-shell">
            <div className="section-intro split-intro products-intro">
              <h2 className="section-title" id="products-title">
                Les produits Amplixy.
              </h2>
              <p>
                Amplixy développe aussi des produits pour un public et un besoin
                précis. Ils ont leur propre marque et complètent l’activité
                d’accompagnement.
              </p>
            </div>

            <div className="product-grid">
              <article className="product-card product-card-live">
                <a
                  className="product-image-wrap"
                  href="https://firaxy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Découvrir Firaxy"
                >
                  <Image
                    className="product-image"
                    src="/img/reussites/firaxy-2026-09.webp"
                    alt="Page d’accueil de Firaxy, produit Amplixy pour les commerçants de foires et marchés"
                    width={1440}
                    height={900}
                  />
                </a>
                <div className="product-card-copy">
                  <div className="product-card-meta">
                    <span>Produit 01</span>
                    <span>En ligne</span>
                  </div>
                  <h3>Firaxy</h3>
                  <p className="product-audience">
                    Pour les commerçants de foires et marchés.
                  </p>
                  <p>
                    Leurs clients scannent un QR code et sont prévenus lorsqu’ils
                    reviennent dans leur région, sans application à installer.
                  </p>
                  <a
                    className="product-link"
                    href="https://firaxy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Découvrir Firaxy
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>

              <article className="product-card product-card-coming">
                <div className="product-coming-visual" aria-hidden="true">
                  <span>02</span>
                  <strong>En préparation.</strong>
                </div>
                <div className="product-card-copy">
                  <div className="product-card-meta">
                    <span>Produit 02</span>
                    <span>Bientôt disponible</span>
                  </div>
                  <h3>Le prochain produit arrive.</h3>
                  <p>
                    Il sera présenté ici dès que son usage et sa première version
                    pourront être testés.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="closing" id="contact" aria-labelledby="contact-title">
          <div className="site-shell closing-layout">
            <div>
              <p className="closing-label">Un premier échange de 30 minutes</p>
              <h2 className="section-title" id="contact-title">
                Quelle décision numérique devez-vous prendre&nbsp;?
              </h2>
            </div>
            <div className="closing-copy">
              <p>
                Un outil à choisir, un fonctionnement à simplifier, une question
                sur l’IA ? Vous expliquez la situation. On identifie les points
                à clarifier et on vous dit si Amplixy peut vous aider.
              </p>
              <a
                className="button button-inverse"
                href={CALENDAR_URL}
              >
                Parler de votre besoin
              </a>
              <span className="closing-phone">
                Vous préférez appeler ?{" "}
                <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ThumbBar />
    </div>
  );
}
