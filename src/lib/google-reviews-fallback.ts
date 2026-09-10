import type { GoogleReviewsSnapshot } from "@/lib/google-reviews-types";

// Capture manuelle ponctuelle validée par Florian le 2026-09-10.
// À retirer lorsque l'API Google Business Profile fournit durablement les avis.
export const GOOGLE_REVIEWS_FALLBACK: GoogleReviewsSnapshot = {
  fetchedAt: "2026-09-10T00:00:00.000Z",
  expiresAt: "9999-12-31T23:59:59.999Z",
  averageRating: 5,
  totalReviewCount: 3,
  reviews: [
    {
      id: "fallback-daniela-de-vingo-2026-09",
      author: "Daniela De Vingo",
      rating: 5,
      comment: "J’ai une très bonne expérience avec Amplixy, Florian est à l'écoute et réactif,  sait conseiller et respecte nos choix.  Je recommande",
      publishedAt: "2026-09-01T00:00:00.000Z",
      updatedAt: "2026-09-01T00:00:00.000Z",
      visitLabel: "Visité en septembre",
    },
    {
      id: "fallback-aurelien-defix-2026-09",
      author: "Aurélien Defix",
      rating: 5,
      comment: "Avec sa société Amplixy, Florian est un excellent partenaire dans le secteur du conseil en informatique. Florian fait preuve d'un grand sérieux, d'un fort engagement et d'une agilité d'esprit très appréciable lors des projets de transformation IT. Ses solides compétences en coordination d'architecture et en gestion d'équipe apportent une vraie valeur ajoutée aux organisations. Une collaboration fluide et fructueuse que je recommande vivement.",
      publishedAt: "2026-09-01T00:00:00.000Z",
      updatedAt: "2026-09-01T00:00:00.000Z",
      visitLabel: "Visité en septembre",
    },
    {
      id: "fallback-matthieu-vion-2026-08",
      author: "Matthieu Vion",
      rating: 5,
      comment: "Un grand merci à Florian pour la création de mon site internet ! Un travail vraiment professionnel, sérieux et soigné. Il a parfaitement compris mes attentes et a su mettre en valeur mon activité avec un site moderne, clair et professionnel.\n\nFlorian est à l’écoute, disponible et très réactif, avec de bons conseils tout au long du projet. Le résultat est vraiment à la hauteur de mes attentes.\n\nJe recommande vivement son travail à tous ceux qui cherchent quelqu’un de sérieux pour créer leur site internet. Encore merci Florian !",
      publishedAt: "2026-08-01T00:00:00.000Z",
      updatedAt: "2026-08-01T00:00:00.000Z",
      visitLabel: "Visité en août",
    },
  ],
};
