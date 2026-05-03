// Seule source de vérité pour les données structurées JSON-LD et le contenu FAQ.
// Importé par layout.tsx (JSON-LD globaux) ET page.tsx (FAQ visuel).
// Cible : décideurs ETI 50-500 personnes (DSI, DRH, DAF). Pivot Conseil IA + Change Management.

export const FAQ_ITEMS = [
  {
    q: "Par où est-ce qu'on commence si on n'a aucun cas d'usage identifié ?",
    a: "C'est exactement pour ça que la Discovery existe. En 2 semaines, on fait ensemble l'inventaire de vos processus, on identifie où l'IA peut créer une valeur mesurable rapidement, et on sort un rapport priorisé avec 2-3 cas d'usage concrets. Vous repartez avec une feuille de route, que vous décidiez de continuer avec Amplixy ou non.",
  },
  {
    q: "Mes équipes ne sont pas formées à l'IA. Est-ce que c'est un frein ?",
    a: "Non. Le change management est intégré à la méthode dès le POC. On construit le projet avec les équipes métier, pas pour elles. La formation et l'adoption sont des livrables à part entière, pas une afterthought. L'objectif n'est pas de livrer un outil technique — c'est de livrer un outil qui est réellement utilisé.",
  },
  {
    q: "Mon DG veut des résultats en 3 mois. Est-ce que c'est tenable ?",
    a: "Oui, si on cadre le bon périmètre. Une Discovery prend 2 semaines. Un POC sur un cas d'usage ciblé prend 4 à 6 semaines. En 3 mois, un premier livrable opérationnel est réaliste — à condition de ne pas vouloir transformer toute l'organisation en même temps. La plupart des échecs IA viennent de périmètres trop larges définis trop vite.",
  },
  {
    q: "Pourquoi vous plutôt que Capgemini Invent ou un grand cabinet ?",
    a: "Parce que Capgemini Invent intervient à partir de 200 000€ de ticket, avec une équipe dans laquelle vous n'avez pas de visibilité sur qui travaille réellement sur votre dossier. Chez Amplixy, c'est moi sur toute la mission. Le tarif est proportionné à une ETI, pas à un grand compte. Et mon expérience terrain sur des organisations 50+ personnes me permet de parler le même langage que vos équipes, pas celui d'un cabinet.",
  },
  {
    q: "Qu'est-ce qui se passe après la mission ? On est autonomes ?",
    a: "L'objectif de chaque mission est que vous soyez autonomes à la fin. Les livrables vous appartiennent. Je ne crée pas de dépendance à Amplixy — si vous avez besoin de moi pour continuer à faire tourner ce qu'on a déployé ensemble, quelque chose n'a pas fonctionné. Je reste disponible pour des questions ponctuelles après livraison, mais ce n'est pas un abonnement forcé.",
  },
  {
    q: "Vous travaillez seul. C'est un risque pour nous ?",
    a: "C'est une question légitime. L'avantage d'un consultant solo : vous savez exactement qui travaille sur votre dossier, il n'y a pas de hand-off en cours de mission, et la communication est directe. La limite : si j'ai un empêchement majeur, la mission est suspendue. Je suis transparent là-dessus dès le cadrage. C'est pourquoi je travaille sur un périmètre défini avec des jalons clairs — en cas d'interruption, le travail réalisé est documenté et transférable.",
  },
  {
    q: "Vous êtes basé à Melun. Vous travaillez en présentiel ou à distance ?",
    a: "Principalement à distance, avec des déplacements ponctuels sur site si nécessaire (notamment pour les sessions de cadrage Discovery et les ateliers change management dans le cadre du Déploiement). Je travaille avec des ETI en Île-de-France et en Rhône-Alpes prioritairement, mais sans restriction géographique stricte.",
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
      "Cabinet de conseil en transformation IA et change management B2B pour ETI 50-500 personnes. Discovery, POC, Déploiement.",
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
      { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    ],
    knowsLanguage: ["fr", "en"],
    sameAs: [
      "https://www.linkedin.com/company/amplixy",
      "https://www.societe.com/societe/amplixy-999167760.html",
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIREN",
      value: "999167760",
    },
    taxID: "FR77999167760",
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
    priceRange: "€€€",
    description:
      "Cabinet de conseil en transformation IA et change management pour ETI 50-500 personnes. Interlocuteur unique, tarifs proportionnés, livrables opérationnels.",
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
      { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Offres Conseil IA",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Discovery",
          description:
            "Audit organisationnel, identification 2-3 cas d'usage IA prioritaires, rapport priorisé. ~2 semaines.",
          price: "5000",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "POC",
          description:
            "Développement et déploiement d'un premier cas d'usage IA opérationnel. 4 à 6 semaines.",
          price: "15000",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Déploiement",
          description:
            "Accompagnement au déploiement à l'échelle, change management, indicateurs d'adoption.",
          price: "30000",
          priceCurrency: "EUR",
        },
      ],
    },
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
    jobTitle: "Consultant Conseil IA & Change Management — Fondateur Amplixy",
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
      "Ingénieur et chef de projet, basé à Melun. Parcours : Airbus, Dassault Systèmes, NAF NAF, Aix-Marseille Université. Lead Chapter au sein de l'Architecture IT de CMA-CGM (change management, animation d'équipe, dynamiques agiles) depuis octobre 2023. Fondateur d'Amplixy, cabinet de conseil en transformation IA et change management pour ETI.",
    knowsAbout: [
      "Transformation IA en organisation",
      "Change Management",
      "Gestion de projet digital",
      "Pilotage d'équipes IT pluridisciplinaires",
      "Déploiement de cas d'usage IA",
      "Architecture IT",
    ],
    url: "https://amplixy.com",
    sameAs: ["https://www.linkedin.com/in/florianbrignoli/"],
  };
}

export function schemaWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://amplixy.com/#website",
    url: "https://amplixy.com",
    name: "Amplixy — Conseil IA & Change Management pour ETI",
    description:
      "Amplixy accompagne les ETI à construire leur premier projet IA concret : cadré, livré, absorbé par les équipes.",
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
