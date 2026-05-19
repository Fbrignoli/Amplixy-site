import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import {
  schemaOrganization,
  schemaLocalBusiness,
  schemaPerson,
  schemaWebSite,
} from "@/lib/schema";

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


export const metadata: Metadata = {
  metadataBase: new URL("https://amplixy.com"),
  title: "Conseil IA opérationnel pour PME — Amplixy",
  description:
    "Amplixy accompagne les PME dans le cadrage, la mise en place et l'adoption d'outils IA utiles aux opérations : suivi client, devis, relances, comptes-rendus, documentation interne.",
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
    title: "Conseil IA opérationnel pour PME | Amplixy",
    description:
      "Cadrage, mise en place et adoption d'outils IA pour PME structurées : suivi client, devis, relances, comptes-rendus, documentation interne.",
    url: "https://amplixy.com",
    siteName: "Amplixy",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@florianbrignoli",
    title: "Conseil IA opérationnel pour PME | Amplixy",
    description:
      "Amplixy accompagne les PME dans le cadrage et l'adoption d'outils IA orientés opérations.",
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
        {/* JSON-LD globaux (toutes pages) — source : src/lib/schema.ts */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite()) }} />
        {/* FAQPage injecté depuis page.tsx uniquement */}
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} font-sans antialiased bg-paper text-ink selection:bg-accent/20 selection:text-ink`}
      >
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
