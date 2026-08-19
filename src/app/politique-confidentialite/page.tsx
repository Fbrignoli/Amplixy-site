import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Amplixy",
  description:
    "Traitements de données, durées de conservation et droits RGPD sur amplixy.com.",
  alternates: {
    canonical: "https://amplixy.com/politique-confidentialite",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="amplixy-site">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Navbar />

      <main id="contenu" className="legal-page">
        <div className="site-shell legal-shell">
          <Link className="portfolio-back" href="/">
            <span aria-hidden="true">←</span>
            Retour à l’accueil
          </Link>

          <h1>Politique de confidentialité</h1>

          <div className="legal-content">
            <section>
              <h2>1. Responsable du traitement</h2>
              <div>
                <p>
                  Le responsable des traitements décrits sur cette page est
                  <strong> AMPLIXY EURL</strong>, au capital de 1&nbsp;000&nbsp;€,
                  immatriculée au RCS de Melun sous le numéro 999&nbsp;167&nbsp;760,
                  dont le siège est situé 16 B rue de la Rochette, 77000 Melun,
                  France.
                </p>
                <p>
                  Email&nbsp;: {" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  <br />
                  Téléphone&nbsp;: {" "}
                  <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
                </p>
              </div>
            </section>

            <section>
              <h2>2. Demandes par email ou téléphone</h2>
              <div>
                <p>
                  Le site ne comporte pas de formulaire de contact. Lorsque vous
                  contactez Amplixy directement, sont susceptibles d’être traités&nbsp;:
                  vos nom et prénom, coordonnées, entreprise et fonction, le
                  contenu de votre demande, les pièces que vous choisissez de
                  transmettre et l’historique des échanges.
                </p>
                <p>
                  <strong>Finalités&nbsp;:</strong> répondre à votre demande, étudier
                  un projet, établir une proposition et assurer le suivi de la
                  relation.
                </p>
                <p>
                  <strong>Base légale&nbsp;:</strong> mesures précontractuelles prises
                  à votre demande ou exécution du contrat (article 6.1.b du RGPD).
                  Pour une demande sans perspective contractuelle, le traitement
                  repose sur l’intérêt légitime d’Amplixy à répondre aux messages
                  qui lui sont adressés (article 6.1.f).
                </p>
                <p>
                  <strong>Durée&nbsp;:</strong> si aucun contrat n’est conclu, trois
                  ans après le dernier échange actif. En cas de contrat, les
                  échanges utiles sont conservés pendant la relation puis jusqu’à
                  cinq ans à titre de preuve. Les pièces comptables sont conservées
                  dix ans lorsqu’elles sont concernées par une obligation légale.
                </p>
              </div>
            </section>

            <section id="prise-rendez-vous">
              <h2>3. Prise de rendez-vous</h2>
              <div>
                <p>
                  Amplixy utilise actuellement Cal.eu pour organiser les rendez-vous.
                  Les données demandées peuvent comprendre vos nom, email, date et
                  heure choisies, fuseau horaire, notes libres et éventuels invités.
                  N’inscrivez pas de données sensibles dans les notes.
                </p>
                <p>
                  <strong>Finalité&nbsp;:</strong> proposer un créneau, confirmer et
                  préparer le rendez-vous, puis envoyer les informations pratiques.
                </p>
                <p>
                  <strong>Base légale&nbsp;:</strong> mesures précontractuelles prises
                  à votre demande (article 6.1.b du RGPD).
                </p>
                <p>
                  <strong>Durée&nbsp;:</strong> les données opérationnelles du
                  rendez-vous sont conservées jusqu’à douze mois après sa date. Si
                  les échanges se poursuivent comme prospect ou client, les durées
                  indiquées à la section précédente s’appliquent aux informations
                  intégrées au suivi de la relation.
                </p>
                <p>
                  La réservation est facultative&nbsp;: vous pouvez aussi contacter
                  Amplixy par email ou téléphone. Cal.eu a annoncé sa fermeture le
                  1er novembre 2026&nbsp;; toute migration fera l’objet d’une nouvelle
                  analyse des destinataires, de l’hébergement et des transferts.
                </p>
              </div>
            </section>

            <section id="mesure-audience">
              <h2>4. Mesure d’audience</h2>
              <div>
                <p>
                  Amplixy utilise Umami Analytics, auto-hébergé sur son
                  infrastructure Hostinger située à Paris, en France, afin de
                  comprendre la fréquentation du site et d’améliorer ses contenus.
                  Umami peut traiter l’URL et le
                  titre de la page, le site référent, les date et heure, la langue,
                  la taille d’écran, le type d’appareil, le navigateur, le système
                  d’exploitation et une localisation approximative au niveau du
                  pays. Amplixy ne demande à Umami aucun nom, email ou identifiant
                  client.
                </p>
                <p>
                  <strong>Base légale&nbsp;:</strong> votre consentement (article
                  6.1.a du RGPD et article 82 de la loi Informatique et Libertés).
                  Tant que vous n’avez pas accepté, le script Umami n’est pas
                  chargé. Vous pouvez refuser sans conséquence sur le site, puis
                  modifier votre choix avec le lien «&nbsp;Gérer la mesure
                  d’audience&nbsp;» présent dans le pied de page.
                </p>
                <p>
                  Une mesure d’audience peut, sous certaines conditions strictes,
                  être exemptée de consentement. Amplixy ne revendique pas cette
                  exemption tant que sa configuration n’a pas été documentée avec
                  l’outil d’auto-évaluation de la CNIL.
                </p>
                <p>
                  <strong>Durée&nbsp;:</strong> les statistiques détaillées sont
                  conservées au maximum vingt-cinq mois. Le choix enregistré dans
                  votre navigateur est redemandé au plus tard après six mois.
                </p>
              </div>
            </section>

            <section>
              <h2>5. Journaux techniques</h2>
              <div>
                <p>
                  L’hébergement peut traiter temporairement l’adresse IP, la date et
                  l’heure, la ressource demandée, le code de réponse et des données
                  sur le navigateur afin d’acheminer les pages, maintenir la
                  sécurité et diagnostiquer un incident.
                </p>
                <p>
                  <strong>Base légale&nbsp;:</strong> intérêt légitime d’Amplixy à
                  sécuriser et maintenir le site (article 6.1.f du RGPD).
                  <strong> Durée&nbsp;:</strong> les journaux système placés sous le
                  contrôle direct d’Amplixy sont conservés au maximum sept jours.
                  Les journaux applicatifs sont soumis à une rotation par volume
                  et ne sont pas utilisés comme journaux d’accès visiteurs. En cas
                  d’incident, les seuls éléments nécessaires peuvent être isolés
                  jusqu’à trente jours, ou plus longtemps lorsqu’une obligation
                  légale ou la défense d’un droit l’impose.
                </p>
              </div>
            </section>

            <section>
              <h2>6. Destinataires et sous-traitants</h2>
              <div>
                <p>
                  Les données sont accessibles uniquement aux personnes habilitées
                  chez Amplixy et, dans la limite nécessaire à leur mission, aux
                  prestataires suivants&nbsp;:
                </p>
                <ul>
                  <li>
                    <strong>HOSTINGER INTERNATIONAL LIMITED</strong>&nbsp;: hébergement
                    du site, de l’instance Umami et messagerie professionnelle&nbsp;;
                  </li>
                  <li>
                    <strong>Cal.com, Inc. / Cal.eu</strong>&nbsp;: prise de
                    rendez-vous et notifications associées&nbsp;;
                  </li>
                  <li>
                    <strong>Google Ireland Limited / Google LLC</strong>&nbsp;:
                    ajout du rendez-vous dans Google Calendar et fourniture de
                    la visioconférence Google Meet&nbsp;;
                  </li>
                  <li>
                    les prestataires techniques auxquels ces fournisseurs ont
                    eux-mêmes recours, selon leurs listes de sous-traitants à jour.
                  </li>
                </ul>
                <p>
                  Amplixy ne vend pas les données et ne les utilise pas pour de la
                  publicité comportementale.
                </p>
              </div>
            </section>

            <section>
              <h2>7. Transferts hors Espace économique européen</h2>
              <div>
                <p>
                  HOSTINGER INTERNATIONAL LIMITED est établi à Chypre, dans l’Union
                  européenne. Cal.eu est présenté comme un environnement hébergé
                  dans l’Union européenne. Google peut traiter des données dans
                  différents pays pour Calendar et Meet. Certains services
                  d’assistance ou sous-traitants de ces prestataires peuvent aussi
                  impliquer un accès depuis un pays tiers.
                </p>
                <p>
                  Lorsqu’un transfert hors de l’Espace économique européen est
                  nécessaire, il doit reposer sur une décision d’adéquation ou sur
                  les clauses contractuelles types de la Commission européenne,
                  complétées si nécessaire par des mesures supplémentaires. Google
                  indique notamment recourir aux décisions d’adéquation, au cadre
                  de protection des données UE–États-Unis pour les entités
                  certifiées et à des clauses contractuelles types. Vous pouvez
                  demander à Amplixy des informations sur la garantie applicable à
                  votre situation. Aucune migration de Cal.eu vers Cal.com ne sera
                  considérée comme équivalente sans réévaluation préalable de ces
                  garanties.
                </p>
              </div>
            </section>

            <section>
              <h2>8. Vos droits</h2>
              <div>
                <p>
                  Dans les conditions prévues par le RGPD, vous pouvez demander
                  l’accès à vos données, leur rectification ou leur effacement, la
                  limitation du traitement, vous opposer aux traitements fondés sur
                  l’intérêt légitime et, lorsque le traitement repose sur un contrat
                  ou votre consentement et est automatisé, demander la portabilité
                  des données que vous avez fournies. Vous pouvez retirer votre
                  consentement à tout moment, sans remettre en cause les traitements
                  déjà effectués licitement.
                </p>
                <p>
                  Vous pouvez également définir des directives relatives au sort de
                  vos données après votre décès, dans les conditions du droit
                  français.
                </p>
              </div>
            </section>

            <section>
              <h2>9. Exercer vos droits</h2>
              <div>
                <p>
                  Adressez votre demande à {" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou par
                  courrier à AMPLIXY EURL, 16 B rue de la Rochette, 77000 Melun,
                  France. Indiquez le droit exercé et les informations permettant de
                  retrouver les données concernées. Une preuve d’identité ne sera
                  demandée qu’en cas de doute raisonnable, et uniquement dans la
                  mesure nécessaire.
                </p>
                <p>
                  Amplixy répond dans les meilleurs délais et au plus tard dans un
                  mois. Ce délai peut être prolongé de deux mois lorsque la demande
                  est complexe ou nombreuse&nbsp;; vous en serez informé dans le
                  premier mois.
                </p>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez
                  déposer une réclamation auprès de la {" "}
                  <a
                    href="https://www.cnil.fr/fr/adresser-une-plainte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commission nationale de l’informatique et des libertés (CNIL)
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>

          <p className="legal-updated">
            Version du 19 août 2026. Cette politique est réexaminée lors de
            l’ajout d’un formulaire, chatbot, média intégré ou nouvel outil de
            mesure.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
