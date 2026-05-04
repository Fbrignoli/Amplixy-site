// Seule source de vérité pour les données structurées JSON-LD et le contenu FAQ.
// Importé par layout.tsx (JSON-LD globaux) ET page.tsx (FAQ visuel).
// Cible : décideurs ETI 50-500 personnes (DSI, DRH, DAF). Pivot Conseil IA + Change Management.

export const FAQ_ITEMS = [
  {
    q: "Pas de cas d'usage identifié — par où commencer ?",
    a: "Discovery : 2 semaines pour identifier 2-3 cas d'usage chiffrés en heures gagnées. Pas de réflexion abstraite — on regarde vos process réels, on fait l'inventaire du shadow IT existant, et on sort un rapport priorisé avec un plan d'action. Vous repartez avec une feuille de route concrète, que vous continuiez ou non avec Amplixy.",
  },
  {
    q: "Mes équipes ne sont pas formées. C'est un frein ?",
    a: "Non — c'est précisément le problème qu'on résout. Pas de formation OPCO de 2 jours. Sessions courtes intégrées au déploiement, sur les vrais cas d'usage, avec les outils utilisés au quotidien. L'objectif n'est pas de livrer un outil technique — c'est de livrer un outil qui est réellement utilisé.",
  },
  {
    q: "Le shadow IT IA et les données sensibles, c'est mon problème ou le vôtre ?",
    a: "C'est le vôtre — c'est pourquoi la sécurité fait partie de chaque étape, pas d'un lot séparé. 11-15% de vos collaborateurs ont déjà copié-collé des données dans une IA publique. Le shadow IT est déjà installé. On le cartographie en Discovery, on documente les règles avant le POC, on gouverne au Déploiement.",
  },
  {
    q: "Mon DG veut des résultats en 3 mois. Tenable ?",
    a: "Oui si on cadre le bon périmètre. Discovery 2 sem + POC 4-6 sem = 6-8 sem total. Vous êtes dans les 3 mois. La condition : ne pas vouloir transformer toute l'organisation en même temps. La plupart des échecs IA viennent de périmètres trop larges définis trop vite.",
  },
  {
    q: "Pourquoi vous plutôt que Capgemini Invent ?",
    a: "Capgemini démarre à 200k€ avec une équipe de juniors et un partner qui n'apparaît qu'au lancement. Amplixy démarre à 5k€, c'est moi sur toute la durée, et le périmètre est calibré pour une ETI. Vous ne payez pas pour la marque ni pour les frais de structure d'un cabinet.",
  },
  {
    q: "Que se passe-t-il après la mission ? On est autonomes ?",
    a: "Oui, c'est l'objectif. Si vous avez encore besoin d'Amplixy 6 mois après la fin de la mission, on a raté quelque chose. Le Déploiement inclut la transmission aux managers — pas une dépendance. Les livrables vous appartiennent.",
  },
  {
    q: "Vous travaillez seul. C'est un risque pour nous ?",
    a: "Je ne vais pas prétendre que ça ne peut pas arriver. En cas d'indisponibilité majeure, le contrat prévoit une clause de transmission. Mais ça reste un trade-off : interlocuteur unique = pas de hand-off junior. Vous savez exactement qui travaille sur votre dossier.",
  },
  {
    q: "Vous êtes basé à Melun. Présentiel ou distance ?",
    a: "Mix selon la phase. Discovery : 1-2 jours sur site pour rencontrer les équipes. POC : majoritairement à distance avec 2-3 visites. Déploiement : selon vos managers. Frais de déplacement inclus en France métropolitaine.",
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
      "Ingénieur et chef de projet, basé à Melun. Profil change management qui pilote le déploiement IA en organisation — fait le pont entre la direction, la tech et le métier. Parcours : Airbus, NAF NAF, Aix-Marseille Université. Lead Chapter au sein de l'Architecture IT de CMA-CGM depuis octobre 2023. Fondateur d'Amplixy, conseil IA & change management pour ETI.",
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
