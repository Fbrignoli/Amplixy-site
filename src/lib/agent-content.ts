import { CALENDAR_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "./site";
import { aboutSections, contactSections } from "./trust-pages";

const contact = `- [Réserver 30 min](${CALENDAR_URL})
- [Email : ${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})
- [Téléphone : ${CONTACT_PHONE}](${CONTACT_PHONE_HREF})`;

function sectionsMarkdown(sections: typeof aboutSections | typeof contactSections) {
  return sections.map(({ title, paragraphs }) => `## ${title}\n\n${paragraphs.join("\n\n")}`).join("\n\n");
}

export const markdownPages: Record<string, string> = {
  "/": `# Amplixy — Référent numérique indépendant des PME

> Les outils changent. Votre entreprise garde le contrôle.

Amplixy aide les PME à choisir, relier et faire évoluer leurs outils numériques. En partant du travail réel, avec des décisions expliquées et une documentation que l’entreprise conserve.

Florian Brignoli est le fondateur d’Amplixy et votre interlocuteur pour cadrer les priorités. Selon le besoin, il coordonne d’autres spécialistes.

## L’approche : votre métier d’abord, la technique ensuite

- Les informations se dispersent : identifier les données de référence et les échanges utiles entre les outils pour réduire les doubles saisies.
- Un nouvel outil promet de tout changer : vérifier son apport au travail réel, son coût et les dépendances qu’il crée avant de le retenir.
- Tout repose sur une seule personne : documenter les règles, les accès et les décisions pour faciliter la continuité et la transmission.

## Un dossier de référence qui reste dans votre entreprise

Ce socle numérique est un livrable documentaire, pas une plateforme logicielle. Il vous appartient, sans nouveau logiciel imposé pour le consulter. Selon le périmètre convenu, il décrit les processus et règles métier, les outils et flux de données, les accès et leurs responsables, les dépendances, les exports, les usages de l’IA et leurs limites, les procédures de reprise, les coûts et la feuille de route. Les possibilités d’export et de reprise dépendent aussi des outils retenus.

## Comprendre, réaliser, puis faire évoluer

1. Diagnostic et socle : observer le travail, repérer les outils et les données, formaliser les priorités dans votre dossier de référence.
2. Réalisation : configurer, relier ou construire la solution utile — outil métier, automatisation, IA ou site. Tester avec les utilisateurs, former et documenter.
3. Pilotage continu : accompagner les décisions et les évolutions, selon un périmètre et une fréquence convenus ensemble.

Chaque mission précise les livrables, les responsabilités et les coûts. Le suivi fait l’objet d’un accord distinct ou d’un volet prévu au contrat.

## Des réalisations concrètes

- Gestion de projet : un Jira adapté à l’organisation de dix chefs de projet gérant environ 100 projets par an, avec automatisations, formation et accompagnement de la transition.
- IA en entreprise : un chatbot qui questionne le projet et son contexte pour proposer une solution fondée sur les standards et patterns internes.
- Communication : une fiche Google et un site adapté à l’activité de [Vion Couverture](https://vioncouverture.fr).
- [Portfolio complet](https://amplixy.com/portfolio) : également Accord’Âme et Corsicabrignoli. Deux clients restent anonymes à leur demande.

Ces missions ne démontrent pas un pilotage continu déjà déployé chez tous les clients.

## Les produits Amplixy

[Firaxy](https://firaxy.com) s’adresse aux commerçants de foires et marchés : leurs clients scannent un QR code et sont prévenus lorsqu’ils reviennent dans leur région, sans application à installer. Firaxy possède sa propre marque et reste distinct de l’accompagnement. Un prochain produit sera présenté lorsque son usage et sa première version pourront être testés.

## Questions fréquentes

### Comment démarre un accompagnement ?

Par un échange de 30 minutes pour comprendre votre activité, vos difficultés et vos priorités. Pas besoin d’un cahier des charges. Le périmètre, les livrables et le budget sont définis avant le début de la mission.

### Faut-il changer tous nos outils ?

Non. L’existant est étudié en premier : conserver, mieux configurer ou relier un outil. Un remplacement ou du sur-mesure doit répondre à un besoin identifié.

### Que se passe-t-il après la livraison ?

Vous conservez le dossier de référence et la documentation prévus. La prise en main et la transmission sont préparées avec vous. Un suivi éventuel a un périmètre, une fréquence et un coût convenus ensemble.

### Amplixy est-elle à l’origine d’amplixy.ai ?

Non. Amplixy n’est pas à l’origine d’amplixy.ai et n’exploite pas ce site. Le site officiel de l’entreprise est amplixy.com.

## Parler de votre besoin

${contact}

## Vérifier les informations

- [À propos](https://amplixy.com/about)
- [Contact](https://amplixy.com/contact)
- [Données et IA](https://amplixy.com/conformite-ia)
- [Mentions légales](https://amplixy.com/mentions-legales)
- [Politique de confidentialité](https://amplixy.com/politique-confidentialite)
- [Consignes pour les agents](https://amplixy.com/agent-instructions.md)
- [Index pour les agents](https://amplixy.com/llms.txt)
- [Plan du site](https://amplixy.com/sitemap.xml)
`,
  "/about": `# À propos d’Amplixy

${sectionsMarkdown(aboutSections)}

## Pour poursuivre

- [Voir les réalisations](https://amplixy.com/portfolio)
- [Contacter Amplixy](https://amplixy.com/contact)
- [Vérifier les mentions légales](https://amplixy.com/mentions-legales)
`,
  "/contact": `# Contacter Amplixy

${sectionsMarkdown(contactSections)}

## Vos coordonnées de contact

${contact}

AMPLIXY EURL · 16 B rue de la Rochette, 77000 Melun, France · SIREN 999 167 760.

- [Informations sur la réservation](https://amplixy.com/rendez-vous)
- [Politique de confidentialité et droits sur vos données](https://amplixy.com/politique-confidentialite)
`,
};

// Les pages sans représentation Markdown continuent d’être rendues par Next.
// Le test d’inventaire impose de revoir cette liste à chaque ajout de page.
export const htmlOnlyPaths = [
  "/portfolio", "/conformite-ia", "/mentions-legales",
  "/politique-confidentialite", "/rendez-vous", "/privacy",
];

export const notFoundMarkdown = `# Page introuvable — Amplixy

La page demandée n’existe pas sur ce site. Retrouvez les informations utiles dans l’[index pour les agents](https://amplixy.com/llms.txt), le [plan du site](https://amplixy.com/sitemap.xml) ou l’[accueil](https://amplixy.com/).
`;
