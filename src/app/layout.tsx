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
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} ${caveat.variable} font-sans antialiased bg-paper text-ink selection:bg-accent/20 selection:text-ink`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:text-ink focus:rounded-lg focus:shadow-lg"
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

