// Seule source de vérité pour les données structurées JSON-LD et le contenu FAQ.
// Importé par layout.tsx (JSON-LD globaux) ET page.tsx (FAQ visuel).
// Cible : PME 10-50 personnes. Positionnement : outils IA simples pour soulager les tâches répétitives.

export const FAQ_ITEMS = [
  {
    q: "Amplixy, c'est une agence ou un cabinet de conseil ?",
    a: "Amplixy est une agence avec trois métiers : conseil pour intégrer l'IA dans le quotidien, création et refonte de sites web, et conception d'outils sur-mesure pour les pros. Selon votre besoin, on mobilise un ou plusieurs de ces métiers.",
  },
  {
    q: "Le conseil IA, ça passe par Florian Brignoli ?",
    a: "Oui. Le volet conseil est porté par la marque personnelle Florian Brignoli, avec son propre site florianbrignoli.fr et sa chaîne YouTube. La facturation et le contrat passent par Amplixy.",
  },
  {
    q: "Vous accompagnez quel type d'entreprise ?",
    a: "Principalement des dirigeants de PME, des indépendants et des entrepreneurs solos en France. Sur le pilier sites web, on reste sur des projets vitrines et marques où on apporte une vraie valeur ajoutée.",
  },
  {
    q: "Vous travaillez à distance ou en présentiel ?",
    a: "La majorité du travail se fait à distance, sans contrainte géographique. Des déplacements ponctuels sont possibles pour les premiers échanges et certains ateliers. Siège social à Melun (77), interventions partout en France.",
  },
  {
    q: "Vous gardez la maintenance des sites livrés ?",
    a: "Oui, en option. Chaque site livré peut être suivi sous un contrat de maintenance léger (mises à jour techniques, ajustements de contenu, surveillance). Le client garde la propriété du code et l'hébergement reste choisi avec lui.",
  },
  {
    q: "Êtes-vous liés au site amplixy.ai ?",
    a: "Non. amplixy.ai est un site indépendant, sans aucun lien avec Amplixy. Notre entreprise est Amplixy (amplixy.com), EURL française domiciliée à Melun, SIREN 999 167 760. Si vous avez un doute, les mentions légales font foi.",
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
      "Amplixy est une agence basée à Melun qui aide les entreprises à prendre le virage du numérique. Trois métiers : conseil IA (sous la marque Florian Brignoli), création et refonte de sites web pour PME et indépendants, et conception d'outils sur-mesure pour les professionnels (Firaxy et autres produits à venir).",
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
    jobTitle: "Fondateur Amplixy — Agence numérique",
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
      "Florian Brignoli dirige Amplixy, agence qui aide les entreprises à prendre le virage du numérique. Son expérience en conseil couvre Dassault Aviation, Airbus et CMA-CGM, avec un focus actuel sur l'intégration de l'IA dans les opérations des PME et des indépendants. Il porte le pilier conseil sous sa marque personnelle florianbrignoli.fr.",
    knowsAbout: [
      "Accompagnement IA des PME",
      "Création et refonte de sites web",
      "Conception d'outils sur-mesure pour les professionnels",
      "Architecture d'entreprise et IT",
      "Change management et adoption d'outils",
      "Conseil en transformation numérique",
      "Direction de projets IT en grands groupes",
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
      "Amplixy est une agence qui aide les entreprises à prendre le virage du numérique : conseil IA, création de sites web, outils sur-mesure pour les pros.",
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
