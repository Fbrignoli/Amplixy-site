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
  title: "Amplixy | On aide les TPE-PME à prendre le virage du numérique",
  description:
    "Des outils digitaux simples et accessibles pour les TPE-PME. Sites web professionnels, fidélisation clients — pensés pour votre réalité, pas pour les grandes entreprises.",
  icons: {
    icon: "/img/icon wm.png",
    apple: "/img/icon wm.png",
  },
  openGraph: {
    title: "Amplixy | On aide les TPE-PME à prendre le virage du numérique",
    description:
      "Des outils digitaux simples et accessibles pour les TPE-PME. Sites web professionnels, fidélisation clients — pensés pour votre réalité, pas pour les grandes entreprises.",
    url: "https://amplixy.com",
    siteName: "Amplixy",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplixy | On aide les TPE-PME à prendre le virage du numérique",
    description:
      "Des outils digitaux simples et accessibles pour les TPE-PME. Sites web professionnels, fidélisation clients — pensés pour votre réalité, pas pour les grandes entreprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amplixy",
              url: "https://amplixy.com",
              logo: "https://amplixy.com/img/icon wm.png",
              description:
                "Des outils digitaux simples et accessibles pour les TPE-PME.",
              email: "contact@amplixy.com",
              telephone: "+33778209044",
              founder: {
                "@type": "Person",
                name: "Florian Brignoli",
              },
              sameAs: [],
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
                    text: "Webaxy pour des sites web professionnels simples et rapides à déployer, et Firaxy pour la fidélisation client (programme de fidélité digital pour commerçants). D'autres outils arriveront, toujours pensés pour les TPE-PME.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment vous contacter ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Par email à contact@amplixy.com, par téléphone au 07 78 20 90 44, ou directement en prenant rendez-vous via notre agenda en ligne.",
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
        <a href="#main-content" hidden aria-hidden="true">
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

