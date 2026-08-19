import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import {
  schemaLocalBusiness,
  schemaOrganization,
  schemaPerson,
  schemaWebSite,
} from "@/lib/schema";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amplixy.com"),
  title: "Amplixy — Solutions numériques sur mesure",
  description:
    "Amplixy construit l’outil numérique adapté à votre activité : outil métier, automatisation ou site, conçu autour de votre façon de travailler.",
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
    icon: [
      {
        url: "/img/amplixy-monogramme-transparent.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/img/amplixy-monogramme-transparent-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "L’outil qui manque à votre activité",
    description:
      "Outil métier, automatisation ou site : Amplixy construit la solution autour de votre façon de travailler.",
    url: "https://amplixy.com",
    siteName: "Amplixy",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@florianbrignoli",
    title: "Amplixy — L’outil adapté à votre activité",
    description:
      "Des solutions numériques sur mesure, conçues autour du travail réel.",
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
            __html: JSON.stringify(schemaOrganization()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaLocalBusiness()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite()) }}
        />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
