// Seule source de vérité pour les données structurées JSON-LD et le contenu FAQ.
// Importé par layout.tsx (JSON-LD) ET page.tsx (FAQ visuel) pour garantir la cohérence
// exigée par Google Rich Results (différence → perte du rich result FAQ en SERP).

export const FAQ_ITEMS = [
  {
    q: "À qui s'adressent vos services ?",
    a: "Aux TPE et PME qui veulent prendre le virage du numérique sans se perdre dans des outils surdimensionnés. Chaque solution est pensée pour votre réalité, pas pour celle des grandes entreprises.",
  },
  {
    q: "Quels outils proposez-vous ?",
    a: "Des sites web professionnels simples et rapides à déployer (livrés en 48h, à partir de 40€/mois hébergement inclus), et Firaxy pour la fidélisation client (programme de fidélité digital pour commerçants ambulants). D'autres outils arriveront, toujours pensés pour les TPE-PME.",
  },
  {
    q: "Combien coûte un site web avec Amplixy ?",
    a: "Nos sites web démarrent à 40€/mois tout inclus (hébergement, maintenance, support, nom de domaine). Livraison en 48h. Pas de frais de mise en service cachés, pas d'engagement longue durée imposé comme chez certains concurrents WordPress.",
  },
  {
    q: "Comment vous contacter ?",
    a: "Par email à contact@amplixy.com, par téléphone au 07 78 20 90 44, ou directement en prenant rendez-vous via notre agenda en ligne sur amplixy.com.",
  },
  {
    q: "Êtes-vous liés au site amplixy.ai ?",
    a: "Non, amplixy.ai n'a aucun lien avec notre entreprise. Des démarches sont en cours pour que notre image soit clairement dissociée de ce site. Si vous rencontrez un problème avec amplixy.ai, nous vous conseillons de contacter directement Lemon Squeezy ou Vercel.",
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
      "Sites web professionnels et outils digitaux pour TPE-PME françaises. Livraison en 48h, à partir de 40€/mois.",
    email: "contact@amplixy.com",
    telephone: "+33778209044",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      "@id": "https://amplixy.com/#florian-brignoli",
    },
    address: {
      "@type": "PostalAddress",
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
    jobTitle: "Fondateur & Consultant IT",
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
      "Fondateur d'Amplixy. Ingénieur et consultant IT, ancien Airbus, Dassault Aviation, CMA CGM. Spécialisé dans l'accompagnement digital des TPE-PME.",
    knowsAbout: [
      "Développement web",
      "Next.js",
      "Nuxt.js",
      "Gestion de projet IT",
      "Accompagnement TPE-PME",
      "SEO",
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
    description: "Sites web et outils digitaux pour TPE-PME françaises.",
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
