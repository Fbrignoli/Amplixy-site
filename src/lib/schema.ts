// Seule source de vérité pour les données structurées JSON-LD et le contenu FAQ.
// Importé par layout.tsx (JSON-LD globaux) ET page.tsx (FAQ visuel).
// Cible : PME 10-50 personnes. Positionnement : outils IA simples pour soulager les tâches répétitives.

export const FAQ_ITEMS = [
  {
    q: "L'IA, c'est pour les grandes entreprises. Est-ce vraiment utile pour une PME de 10 à 50 personnes ?",
    a: "Oui, quand le sujet est bien choisi. Dans une PME de 10 à 50 personnes, les sujets qui prennent du temps sont souvent très concrets : demandes clients dispersées, devis longs à préparer, relances suivies de façon irrégulière, comptes-rendus difficiles à exploiter. Le diagnostic sert à repérer le premier cas utile et à vérifier qu'il peut être traité avec vos outils actuels.",
  },
  {
    q: "On utilise déjà ChatGPT dans l'équipe. Pourquoi faire appel à Amplixy ?",
    a: "ChatGPT aide déjà beaucoup pour rédiger ou reformuler. Amplixy intervient quand vous voulez intégrer l'IA dans un vrai flux de travail : suivre une demande, préparer un devis, relancer un prospect, produire un compte-rendu ou retrouver une information interne. L'enjeu est de rendre l'usage simple, cadré et régulier pour l'équipe.",
  },
  {
    q: "Nos données clients sont sensibles. Comment gérez-vous la confidentialité ?",
    a: "La confidentialité est cadrée dès le départ. On identifie les données autorisées, les données à exclure, les outils acceptables et les validations nécessaires. Les réponses clients, devis et documents sensibles restent soumis à une validation humaine. Lorsque c'est pertinent, on privilégie des solutions hébergées en Europe et on documente les flux.",
  },
  {
    q: "Comment garantir l'adoption par les équipes ?",
    a: "L'adoption vient surtout du choix du bon cas d'usage. On travaille avec les personnes concernées, sur leurs exemples, dans leurs outils. La formation est courte et pratique. Après la mise en place, on observe l'usage réel et on ajuste ce qui ne tourne pas encore bien.",
  },
  {
    q: "Combien de temps faut-il consacrer au projet ?",
    a: "Le format est court. Le Diagnostic IA Express prend une demi-journée à une journée avec le dirigeant et deux ou trois personnes terrain. La mise en place d'un outil IA métier prend généralement deux à quatre semaines sur un cas ciblé. L'objectif est de traiter un sujet précis, puis de vérifier son usage.",
  },
  {
    q: "Combien de temps peut-on réellement gagner avec un outil IA dans une PME ?",
    a: "Les gains s'estiment pendant le diagnostic et se vérifient après déploiement. Ils dépendent du cas choisi, du nombre de personnes concernées, du volume de demandes et de l'adoption par l'équipe. Le diagnostic produit une hypothèse de gain réaliste, puis la mission permet de la confronter à l'usage.",
  },
  {
    q: "Amplixy, c'est un consultant solo. Est-ce un risque pour notre projet ?",
    a: "C'est un point à poser clairement. Le déroulé est documenté à chaque étape. En cas d'empêchement, la mission peut être décalée — c'est intégré dès le départ.",
  },
  {
    q: "Vous êtes basé à Melun (77). Travaillez-vous aussi avec des PME hors Île-de-France ?",
    a: "La grande majorité du travail se fait à distance, ce qui permet d'intervenir sans contrainte géographique. Des déplacements ponctuels sur site sont possibles pour les sessions de diagnostic initial et les ateliers de formation au démarrage. Amplixy accompagne des PME en Île-de-France (Paris, Seine-et-Marne, Essonne, Val-de-Marne, Hauts-de-Seine) et dans d'autres régions pour les missions entièrement à distance.",
  },
  {
    q: "Êtes-vous liés au site amplixy.ai ?",
    a: "amplixy.ai est un site indépendant, sans aucun lien avec Amplixy. Notre entreprise est Amplixy (amplixy.com), EURL française domiciliée à Melun, SIREN 999 167 760. Si vous avez un doute, les mentions légales font foi.",
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
      "Amplixy est un cabinet conseil IA basé à Melun. Il accompagne les PME de 10 à 50 personnes dans le cadrage, la mise en place et l'adoption d'outils IA orientés opérations : suivi des demandes clients, préparation de devis, relances commerciales, comptes-rendus et documentation interne.",
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
      "Florian Brignoli dirige Amplixy, cabinet conseil IA pour PME. Son expertise couvre le cadrage opérationnel, la mise en place d'outils IA, le pilotage IT et l'adoption par les équipes. Il intervient aussi comme Lead Chapter au sein de l'Architecture IT de CMA-CGM depuis octobre 2023.",
    knowsAbout: [
      "Outils IA pour PME",
      "Automatisation des tâches répétitives",
      "Déploiement d'outils IA en PME",
      "Change management et adoption IA",
      "Gestion de projet IT",
      "Qualification et suivi des demandes clients",
      "Préparation automatisée de devis",
      "Suivi des relances commerciales",
      "Comptes-rendus de réunion automatisés",
      "Base documentaire interrogeable par IA",
      "Consultant IA PME Île-de-France",
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
      "Amplixy accompagne les PME de 10 à 50 personnes dans le cadrage, la mise en place et l'adoption d'outils IA orientés opérations.",
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
