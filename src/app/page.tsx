import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThumbBar } from "@/components/ThumbBar";
import { ToolMarquee } from "@/components/ToolMarquee";
import {
  CALENDAR_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/lib/site";

const painPoints = [
  {
    problem: "Les informations se dispersent",
    answer:
      "On rassemble devis, planning, suivi et documents dans un outil pensé pour votre équipe.",
  },
  {
    problem: "Une tâche revient sans cesse",
    answer:
      "On automatise ce qui peut l’être, avec un contrôle humain là où il compte.",
  },
  {
    problem: "Votre activité est mal présentée",
    answer:
      "On construit le site ou l’interface qui rend votre valeur évidente et facile à trouver.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Comprendre le travail",
    description:
      "On regarde comment l’activité fonctionne aujourd’hui, avec ses raccourcis, ses doublons et ses vraies contraintes.",
  },
  {
    number: "02",
    title: "Dessiner la solution",
    description:
      "On choisit le chemin le plus simple. La technologie vient après, quand le besoin est clair.",
  },
  {
    number: "03",
    title: "Construire avec vous",
    description:
      "Une première version utilisable arrive vite. Vous la testez dans le quotidien, puis on l’ajuste.",
  },
  {
    number: "04",
    title: "Vous rendre autonome",
    description:
      "On forme les personnes qui l’utiliseront, on documente l’essentiel et la solution reste à vous.",
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
              <p className="hero-label">Atelier numérique indépendant · Melun</p>
              <h1 className="display" id="hero-title">
                On construit l’outil qui manque à{" "}
                <span>votre activité.</span>
              </h1>
              <p className="hero-lede">
                Vous nous montrez votre quotidien, les détours et les tâches qui
                prennent trop de temps. On construit la réponse autour de ça.
              </p>

              <div className="hero-actions" id="hero-cta">
                <a
                  className="button button-primary"
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parler de votre besoin
                </a>
                <a className="text-link" href="#approche">
                  Voir comment on travaille
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
                  Votre interlocuteur du premier échange à la livraison. Selon
                  le besoin, d’autres spécialistes rejoignent le projet.
                </p>
              </div>
            </div>

            <figure className="principle-board">
              <figcaption>
                <span>Avant de parler technologie</span>
                Une règle simple
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
                    <small>Le travail, les blocages, les contraintes.</small>
                  </div>
                </div>
                <span className="principle-arrow" aria-hidden="true">→</span>
                <div className="principle-step">
                  <span>02</span>
                  <div>
                    <strong>La réponse utile</strong>
                    <small>L’outil qui simplifie vraiment le quotidien.</small>
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
                On part de ce qui coince dans votre activité.
              </h2>
              <p>
                La bonne solution peut être minuscule ou ambitieuse, visible de
                vos clients ou réservée à votre équipe. Son rôle reste le même :
                rendre le travail plus simple.
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

        <section className="method" id="methode" aria-labelledby="method-title">
          <div className="site-shell">
            <div className="section-intro method-intro">
              <h2 className="section-title" id="method-title">
                D’un problème à un outil vraiment utilisé.
              </h2>
              <p>
                Un chemin court, avec des décisions visibles et une version
                concrète à tester le plus tôt possible.
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
                Communication, gestion de projet et IA en entreprise.
              </h2>
              <p>
                Deux clients souhaitent rester anonymes. On présente leur
                situation et la réponse mise en place, sans citer leur nom.
              </p>
            </div>

            <div className="case-grid">
              <article className="use-case">
                <header className="case-heading">
                  <span className="case-index">Cas 01</span>
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
                    <dt>La solution</dt>
                    <dd>
                      On a conçu trois sites adaptés à leur métier et à leur
                      zone d’activité.
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
                    D’autres réalisations
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>

              <article className="use-case">
                  <header className="case-heading">
                    <span className="case-index">Cas 02</span>
                    <h3>Gestion de projet</h3>
                  </header>
                  <dl className="case-facts">
                    <div>
                      <dt>Le problème</dt>
                      <dd>
                        Dix chefs de projet pilotaient environ 100 projets par
                        an dans un même fichier Excel.
                      </dd>
                    </div>
                    <div>
                      <dt>La solution</dt>
                      <dd>
                        On a configuré un Jira adapté à leur organisation et
                        ajouté les automatisations nécessaires. On a ensuite
                        formé l’équipe et accompagné la transition.
                      </dd>
                    </div>
                  </dl>
              </article>

              <article className="use-case">
                  <header className="case-heading">
                    <span className="case-index">Cas 03</span>
                    <h3>IA en entreprise</h3>
                  </header>
                  <dl className="case-facts">
                    <div>
                      <dt>Le problème</dt>
                      <dd>
                        Les salariés devaient retrouver les standards internes
                        et choisir la stratégie adaptée à leur situation.
                      </dd>
                    </div>
                    <div>
                      <dt>La solution</dt>
                      <dd>
                        On a d’abord recueilli les besoins et comparé les outils.
                        Après le POC, on a spécialisé le chatbot par cas d’usage.
                        Chaque salarié décrit sa situation et reçoit des conseils
                        fondés sur les standards de l’entreprise.
                      </dd>
                    </div>
                  </dl>
              </article>
            </div>
          </div>
        </section>

        <ToolMarquee />

        <section
          className="compliance"
          id="conformite"
          aria-labelledby="compliance-title"
        >
          <div className="site-shell compliance-layout">
            <h2 id="compliance-title">
              Vous gardez la main sur vos outils et vos données.
            </h2>
            <div>
              <p>
                Vos données, vos accès et vos outils restent maîtrisables par
                votre entreprise. On cadre chaque usage selon le RGPD et les
                obligations applicables de l’AI Act.
              </p>
              <div className="compliance-visual">
                <div>
                  <span>Données</span>
                  <strong>Vous savez où elles vont.</strong>
                </div>
                <div>
                  <span>Accès</span>
                  <strong>Vous décidez qui peut agir.</strong>
                </div>
                <div>
                  <span>Reprise</span>
                  <strong>Vous pouvez faire évoluer l’outil.</strong>
                </div>
              </div>
              <p className="compliance-note">
                Chaque projet documente les données utilisées, les accès et les
                limites du système.
              </p>
              <Link className="compliance-link" href="/conformite-ia">
                Comprendre le RGPD, l’AI Act et le rôle du DPO
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

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
                Des outils conçus pour un besoin précis, exploités sous leur
                propre marque en complément des projets sur mesure.
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
                    src="/img/reussites/firaxy.webp"
                    alt="Page d’accueil de Firaxy, produit Amplixy pour les commerçants de foires et marchés"
                    width={2880}
                    height={1800}
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
              <p className="closing-label">Le premier échange dure 30 minutes</p>
              <h2 className="section-title" id="contact-title">
                Qu’est-ce qui vous fait perdre du temps aujourd’hui&nbsp;?
              </h2>
            </div>
            <div className="closing-copy">
              <p>
                Vous nous expliquez la situation. On vous dit franchement ce
                qu’on construirait, et si Amplixy est la bonne réponse.
              </p>
              <a
                className="button button-inverse"
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
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
