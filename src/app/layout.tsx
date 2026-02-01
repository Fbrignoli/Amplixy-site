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
  title: "Amplixy | On rend votre entreprise évidente à choisir",
  description: "Partenaire de visibilité long terme pour les entreprises. Nous rendons votre expertise visible, crédible et cohérente en ligne : contenus de fond, supports visuels et sites orientés conversion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${lato.variable} ${caveat.variable} font-sans antialiased bg-paper text-ink selection:bg-accent/20 selection:text-ink`}
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

