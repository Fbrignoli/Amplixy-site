const BRAND_MARK_URL =
  "https://amplixy.com/img/amplixy-monogramme-transparent.png";

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
      url: BRAND_MARK_URL,
      width: 1024,
      height: 1024,
    },
    image: BRAND_MARK_URL,
    description:
      "Amplixy accompagne les PME dans leurs choix numériques, la réalisation de solutions utiles et leur évolution, en partant du travail réel.",
    email: "contact@amplixy.com",
    telephone: "+33651070231",
    foundingDate: "2026-01-01",
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
    areaServed: [{ "@type": "Country", name: "France" }],
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
  };
}

export function schemaLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://amplixy.com/#localbusiness",
    name: "Amplixy",
    url: "https://amplixy.com",
    image: BRAND_MARK_URL,
    telephone: "+33651070231",
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
    areaServed: [{ "@type": "Country", name: "France" }],
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
    jobTitle: "Fondateur d’Amplixy",
    worksFor: {
      "@type": "Organization",
      "@id": "https://amplixy.com/#organization",
    },
    description:
      "Florian Brignoli est le fondateur et dirigeant d’Amplixy. Il accompagne les entreprises dans leurs choix numériques et pilote la réalisation des solutions.",
    knowsAbout: [
      "Cadrage des besoins métier",
      "Pilotage de projets numériques",
      "Outils métier et automatisation",
      "Usages de l’IA en entreprise",
      "Sites web",
    ],
    url: "https://amplixy.com/#florian-brignoli",
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
      "Amplixy accompagne les PME dans leurs choix numériques, la réalisation de solutions utiles et leur évolution, en partant du travail réel.",
    publisher: {
      "@type": "Organization",
      "@id": "https://amplixy.com/#organization",
    },
    inLanguage: "fr-FR",
  };
}
