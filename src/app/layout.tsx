import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
        className={`${montserrat.variable} ${lato.variable} font-sans antialiased bg-midnight text-mist selection:bg-accent/30 selection:text-glow`}
      >
        <Script
          src="https://trafic.amplixy.cloud/script.js"
          data-website-id="0cbbe7f2-9749-460d-a88a-e665d0ee2904"
          strategy="afterInteractive"
          defer
        />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,124,153,0.25),_transparent_55%)]"></div>
        {children}
      </body>
    </html>
  );
}

