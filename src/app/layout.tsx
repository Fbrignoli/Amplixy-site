import type { Metadata } from "next";
import { Montserrat, Lato, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amplixy.com"),
  title: "Amplixy — Sites web & outils digitaux pour TPE-PME (dès 40€/mois)",
  description:
    "Sites web professionnels livrés en 48h, à partir de 40€/mois (hébergement inclus). Fidélisation client avec Firaxy. Outils simples pensés pour les TPE-PME françaises.",
  keywords: [
    "site web TPE",
    "site web PME",
    "création site internet artisan",
    "outils digitaux petite entreprise",
    "fidélisation client commerçant",
    "Amplixy",
    "Melun",
    "Île-de-France",
  ],
  authors: [{ name: "Florian Brignoli", url: "https://amplixy.com" }],
  creator: "Florian Brignoli",
  publisher: "Amplixy",
  alternates: {
    canonical: "https://amplixy.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/icon-wm.png",
    apple: "/img/icon-wm.png",
  },
  openGraph: {
    title: "Amplixy — Sites web & outils digitaux pour TPE-PME (dès 40€/mois)",
    description:
      "Sites web professionnels livrés en 48h, à partir de 40€/mois (hébergement inclus). Fidélisation client avec Firaxy. Outils simples pensés pour les TPE-PME françaises.",
    url: "https://amplixy.com",
    siteName: "Amplixy",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@amplixy",
    creator: "@florianbrignoli",
    title: "Amplixy — Sites web & outils digitaux pour TPE-PME",
    description:
      "Sites web livrés en 48h à partir de 40€/mois. Fidélisation client avec Firaxy. Outils simples pour TPE-PME.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://amplixy.com/#website",
              url: "https://amplixy.com",
              name: "Amplixy",
              description:
                "Sites web et outils digitaux pour TPE-PME françaises.",
              publisher: {
                "@type": "Organization",
                "@id": "https://amplixy.com/#organization",
              },
              inLanguage: "fr-FR",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "À qui s'adressent vos services ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aux TPE et PME qui veulent prendre le virage du numérique sans se perdre dans des outils surdimensionnés. Chaque solution est pensée pour votre réalité, pas pour celle des grandes entreprises.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels outils proposez-vous ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Des sites web professionnels simples et rapides à déployer (livrés en 48h, à partir de 40€/mois hébergement inclus), et Firaxy pour la fidélisation client (programme de fidélité digital pour commerçants ambulants). D'autres outils arriveront, toujours pensés pour les TPE-PME.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Combien coûte un site web avec Amplixy ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nos sites web démarrent à 40€/mois tout inclus (hébergement, maintenance, support, nom de domaine). Livraison en 48h. Pas de frais de mise en service cachés, pas d'engagement longue durée imposé comme chez certains concurrents WordPress.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment vous contacter ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Par email à contact@amplixy.com, par téléphone au 07 78 20 90 44, ou directement en prenant rendez-vous via notre agenda en ligne sur amplixy.com.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Êtes-vous liés au site amplixy.ai ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non, amplixy.ai n'a aucun lien avec notre entreprise. Des démarches sont en cours pour que notre image soit clairement dissociée de ce site. Si vous rencontrez un problème avec amplixy.ai, nous vous conseillons de contacter directement Lemon Squeezy ou Vercel.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} ${caveat.variable} font-sans antialiased bg-paper text-ink selection:bg-accent/20 selection:text-ink`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[10001] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <Script
          src="https://trafic.amplixy.cloud/script.js"
          data-website-id="0cbbe7f2-9749-460d-a88a-e665d0ee2904"
          strategy="afterInteractive"
          defer
        />
        <GrainOverlay>{children}</GrainOverlay>
      </body>
    </html>
  );
}

