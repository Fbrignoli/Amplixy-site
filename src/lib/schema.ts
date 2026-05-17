// Seule source de vérité pour les données structurées JSON-LD et le contenu FAQ.
// Importé par layout.tsx (JSON-LD globaux) ET page.tsx (FAQ visuel).
// Cible : PME 10-50 personnes. Positionnement : outils IA simples pour soulager les tâches répétitives.

export const FAQ_ITEMS = [
  {
    q: "On n'est pas assez gros pour l'IA. Ça vaut le coup ?",
    a: "Justement, l'offre est pensée pour les PME de 10 à 50 personnes. On ne démarre pas par une stratégie globale, mais par une tâche répétitive qui vous coûte déjà du temps : demandes clients dispersées, devis qui traînent, relances oubliées, comptes-rendus jamais faits. Si trois personnes perdent chacune 30 min par jour sur ces tâches, c'est déjà plus de 30 heures par mois à reprendre. Un Diagnostic IA Express à 1 500€ HT suffit pour identifier le bon premier outil.",
  },
  {
    q: "On a déjà essayé ChatGPT. Pourquoi vous ?",
    a: "ChatGPT seul aide ponctuellement — quand quelqu'un pense à l'utiliser et sait bien le prompter. La valeur arrive quand on crée un outil autour d'un vrai usage métier : une demande client arrive, elle est résumée, qualifiée, orientée, puis suivie. Un brouillon de devis est préparé avec vos anciens documents. Une relance est rappelée au bon moment. C'est intégré au quotidien, pas une fenêtre de plus à ouvrir.",
  },
  {
    q: "Nos données sont sensibles. Comment vous gérez ?",
    a: "On cadre les usages avant de brancher quoi que ce soit. Certaines informations ne doivent pas partir dans certains outils — on le tranche dès le diagnostic. Validation humaine obligatoire sur les sorties sensibles, hébergement UE quand c'est possible, documentation des flux. La confidentialité fait partie du fonctionnement, pas une option ajoutée à la fin.",
  },
  {
    q: "Mon équipe ne va pas l'utiliser. Comment vous assurez l'adoption ?",
    a: "On part d'une douleur terrain, pas d'une technologie. Si l'outil retire une tâche pénible au quotidien — recopier, chercher, relancer, reformuler — l'adoption est beaucoup plus naturelle. La formation est faite avec les outils utilisés réellement, par les utilisateurs concernés, sur leurs vrais cas d'usage. Pas une journée de slides génériques. Et on mesure l'usage avant/après pour vérifier que ça tient.",
  },
  {
    q: "Je n'ai pas le temps pour un projet. Combien ça prend ?",
    a: "Le format est volontairement court. Diagnostic IA Express : une demi-journée à 1 jour. Mise en place d'un outil IA métier : 2 à 4 semaines. On choisit une seule tâche à soulager, on évite la refonte globale, on vise un gain visible rapidement. L'idée n'est pas de transformer votre entreprise mais de retirer une friction qui mange vos journées.",
  },
  {
    q: "Combien de temps on gagne concrètement ?",
    a: "On l'estime au diagnostic, puis on le mesure après déploiement. Pas de promesse à 5h/jour avant d'avoir regardé votre quotidien — c'est fort commercialement mais malhonnête. Sur certaines tâches répétitives, 30 minutes par personne et par jour suffisent déjà à représenter plusieurs dizaines d'heures par mois. Le ROI dépend du cas d'usage choisi, du nombre de personnes qui en bénéficient, et de la qualité de l'adoption.",
  },
  {
    q: "Vous travaillez seul. C'est un risque pour nous ?",
    a: "C'est une question légitime. L'avantage : vous savez exactement qui travaille sur votre dossier, pas de hand-off en cours de mission, communication directe. La limite : en cas d'empêchement majeur, la mission est suspendue. Je suis transparent dès le cadrage. Chaque mission est cadrée sur un périmètre défini avec des jalons clairs — en cas d'interruption, le travail réalisé est documenté et transférable.",
  },
  {
    q: "Vous êtes basé à Melun. Vous travaillez à distance ?",
    a: "Principalement à distance, avec des déplacements ponctuels sur site si nécessaire (sessions de diagnostic, ateliers de formation au démarrage). Je travaille avec des PME en Île-de-France et au-delà, sans restriction géographique stricte. Pour les outils IA, la majorité du travail se fait très bien en distanciel.",
  },
] as const;

export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://amplixy.com/#organization",
    name: "Amplixy",
    legalName: "AMPLIXY EURL",
    url: "https://amplixy.com",
    logo: {
      "@type": "ImageObject",
      url: "https://amplixy.com/img/icon-wm.png",
      width: 512,
      height: 512,
    },
    image: "https://amplixy.com/img/icon-wm.png",
    description:
      "Amplixy met en place des outils IA simples pour PME de 10 à 50 personnes : demandes clients résumées, devis préparés plus vite, relances suivies, comptes-rendus transformés en actions. Diagnostic IA Express 1 500€ HT — Mise en place outil IA métier à partir de 5 000€ HT — Run IA PME 300 à 800€/mois.",
    email: "contact@amplixy.com",
    telephone: "+33778209044",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      "@id": "https://amplixy.com/#florian-brignoli",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 B Rue de la Rochette",
      addressLocality: "Melun",
      postalCode: "77000",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    knowsLanguage: ["fr", "en"],
    sameAs: [
      "https://www.linkedin.com/company/amplixy",
      "https://www.societe.com/societe/amplixy-999167760.html",
    ],
    vatID: "FR",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIREN",
      value: "999167760",
    },
  };
}

export function schemaLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://amplixy.com/#localbusiness",
    name: "Amplixy",
    url: "https://amplixy.com",
    image: "https://amplixy.com/img/icon-wm.png",
    telephone: "+33778209044",
    email: "contact@amplixy.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 B Rue de la Rochette",
      addressLocality: "Melun",
      postalCode: "77000",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function schemaPerson() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://amplixy.com/#florian-brignoli",
    name: "Florian Brignoli",
    givenName: "Florian",
    familyName: "Brignoli",
    jobTitle: "Fondateur Amplixy — Outils IA pour PME",
    worksFor: {
      "@type": "Organization",
      "@id": "https://amplixy.com/#organization",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melun",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    description:
      "Fondateur d'Amplixy. Met en place des outils IA simples pour les PME de 10 à 50 personnes — pour retirer les tâches répétitives qui ralentissent les équipes (demandes clients, devis, relances, comptes-rendus). Lead Chapter Architecture IT chez CMA-CGM depuis 2023. Parcours : Airbus, NAF NAF, Aix-Marseille Université.",
    knowsAbout: [
      "Outils IA pour PME",
      "Automatisation des tâches répétitives",
      "Change management",
      "Adoption d'outils IA",
      "Gestion de projet IT",
      "Qualification de demandes clients",
      "Préparation automatisée de devis",
      "Suivi des relances commerciales",
    ],
    url: "https://amplixy.com",
  };
}

export function schemaWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://amplixy.com/#website",
    url: "https://amplixy.com",
    name: "Amplixy",
    description:
      "Outils IA simples pour PME de 10 à 50 personnes. Demandes clients, devis, relances, comptes-rendus — moins de tâches répétitives, plus de temps utile.",
    publisher: {
      "@type": "Organization",
      "@id": "https://amplixy.com/#organization",
    },
    inLanguage: "fr-FR",
  };
}

export function schemaFAQPage() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
