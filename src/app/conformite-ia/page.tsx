import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThumbBar } from "@/components/ThumbBar";

export const metadata: Metadata = {
  title: "RGPD, AI Act et DPO expliqués — Amplixy",
  description:
    "Comprendre les règles qui encadrent un projet d’intelligence artificielle : données personnelles, AI Act, DPO, responsabilités et contrôle humain.",
  alternates: {
    canonical: "https://amplixy.com/conformite-ia",
  },
};

const checks = [
  {
    title: "Définir l’usage",
    text: "Qui utilise le système, pour faire quoi et avec quelles conséquences si la réponse est fausse ?",
  },
  {
    title: "Cartographier les données",
    text: "Quelles données entrent dans l’outil, où elles partent, combien de temps elles restent et qui peut les consulter ?",
  },
  {
    title: "Choisir les outils",
    text: "On compare l’hébergement, les contrats, les accès, les possibilités d’export et les conditions d’utilisation des modèles.",
  },
  {
    title: "Garder un contrôle humain",
    text: "Une personne identifiée doit pouvoir vérifier, corriger ou arrêter le système lorsque le risque le demande.",
  },
  {
    title: "Documenter et former",
    text: "L’équipe reçoit des règles d’usage, connaît les limites de l’outil et sait vers qui se tourner en cas de doute.",
  },
] as const;

export default function CompliancePage() {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu" className="compliance-guide">
        <section className="compliance-guide-hero">
          <div className="site-shell">
            <Link className="portfolio-back" href="/">
              <span aria-hidden="true">←</span>
              Retour à l’accueil
            </Link>
            <h1>RGPD, AI Act et DPO&nbsp;: les explications utiles.</h1>
            <p>
              Ces règles ne demandent pas la même chose à chaque projet. Tout
              dépend de l’usage, des données et du niveau de risque. Cette page
              explique les mots et les vérifications utiles avant de déployer
              une IA dans une entreprise.
            </p>
            <p className="guide-disclaimer">
              Cette présentation aide à cadrer un projet. Elle ne remplace pas
              un audit juridique adapté à votre organisation.
            </p>
            <div className="guide-map" aria-label="Les trois axes du cadrage">
              <span>Vos données</span>
              <span aria-hidden="true">→</span>
              <span>Votre usage</span>
              <span aria-hidden="true">→</span>
              <span>Vos responsabilités</span>
            </div>
          </div>
        </section>

        <section className="guide-section" aria-labelledby="definitions-title">
          <div className="site-shell guide-split">
            <h2 id="definitions-title">Trois notions à distinguer</h2>
            <dl className="definition-list">
              <div>
                <dt>Le RGPD</dt>
                <dd>
                  Il encadre l’utilisation des données personnelles. Une donnée
                  personnelle permet d’identifier une personne, directement ou
                  par recoupement. Un projet doit définir son objectif, limiter
                  les données collectées, sécuriser les accès et permettre aux
                  personnes d’exercer leurs droits.
                </dd>
              </div>
              <div>
                <dt>L’AI Act</dt>
                <dd>
                  Le règlement européen sur l’IA classe les systèmes selon leur
                  niveau de risque. Les obligations varient ensuite : usages
                  interdits, systèmes à haut risque, transparence ou règles plus
                  légères. Un chatbot destiné aux salariés ne se traite donc pas
                  comme une IA utilisée pour recruter ou évaluer une personne.
                </dd>
              </div>
              <div>
                <dt>Le DPO</dt>
                <dd>
                  Le délégué à la protection des données conseille l’entreprise,
                  contrôle sa démarche RGPD et sert de point de contact avec la
                  CNIL. Il peut être salarié, prestataire externe ou cumuler cette
                  mission avec une autre fonction. En revanche, un dirigeant qui
                  décide des finalités et des moyens des traitements ne peut pas
                  être DPO&nbsp;: il serait juge et partie. Dans une petite
                  entreprise, ce conflit d’intérêts est fréquent. Sa désignation
                  n’est obligatoire que dans certains cas.
                  <span className="definition-actions">
                    <a
                      href="https://www.cnil.fr/fr/le-delegue-la-protection-des-donnees-dpo/devenir-delegue-la-protection-des-donnees"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vérifier qui peut être DPO
                      <span aria-hidden="true">↗</span>
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="guide-section guide-section-dark" aria-labelledby="checks-title">
          <div className="site-shell">
            <div className="guide-heading-row">
              <h2 id="checks-title">Ce que votre projet doit clarifier</h2>
              <p>
                La conformité commence avant le choix du modèle. Elle continue
                pendant les tests, le déploiement et l’utilisation quotidienne.
              </p>
            </div>
            <ol className="compliance-checks">
              {checks.map((check, index) => (
                <li key={check.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{check.title}</h3>
                    <p>{check.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="guide-section" aria-labelledby="roles-title">
          <div className="site-shell guide-split">
            <h2 id="roles-title">Qui est responsable de quoi ?</h2>
            <div className="role-list">
              <div>
                <h3>L’entreprise cliente</h3>
                <p>
                  Elle décide pourquoi l’outil existe, qui l’utilise et quelles
                  données il traite. Selon le projet, elle peut être responsable
                  du traitement au sens du RGPD et déployeur au sens de l’AI Act.
                </p>
              </div>
              <div>
                <h3>Amplixy</h3>
                <p>
                  On cadre l’usage, configure la solution, documente les choix et
                  signale les risques identifiés. Le rôle juridique d’Amplixy
                  dépend de la mission et du contrôle exercé sur les données.
                </p>
              </div>
              <div>
                <h3>Le fournisseur d’IA</h3>
                <p>
                  Il fournit le modèle ou le service. Ses conditions, son lieu
                  d’hébergement, ses garanties et son utilisation des données
                  font partie de l’étude des outils.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section guide-sources" aria-labelledby="sources-title">
          <div className="site-shell guide-split">
            <h2 id="sources-title">Pour aller à la source</h2>
            <ul>
              <li>
                <a
                  href="https://www.cnil.fr/fr/ia-comment-se-mettre-en-conformite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL : mettre un système d’IA en conformité
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnil.fr/fr/le-delegue-la-protection-des-donnees-dpo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL : comprendre le rôle du DPO
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnil.fr/fr/cnil-direct/question/reglement-europeen-le-delegue-la-protection-des-donnees-cest-obligatoire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL : savoir si la désignation d’un DPO est obligatoire
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnil.fr/fr/designation-dpo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL : désigner ou remplacer un DPO
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.edpb.europa.eu/sme-data-protection-guide/data-protection-officer_fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comité européen : guide DPO pour les PME
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Texte officiel du règlement européen sur l’IA
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
      <ThumbBar />
    </div>
  );
}
