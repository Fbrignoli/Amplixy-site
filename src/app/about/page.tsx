import type { Metadata } from "next";
import Link from "next/link";
import { TrustPage } from "@/components/TrustPage";
import { aboutSections } from "@/lib/trust-pages";

export const metadata: Metadata = {
  title: "À propos d’Amplixy — Référent numérique indépendant des PME",
  description: "L’entreprise, son fondateur Florian Brignoli et sa démarche : comprendre le travail réel, réaliser et transmettre des solutions utiles aux PME.",
  alternates: { canonical: "https://amplixy.com/about" },
};

export default function AboutPage() {
  return (
    <TrustPage title="À propos d’Amplixy" sections={aboutSections}>
      <section>
        <h2>Pour poursuivre</h2>
        <p><Link href="/portfolio">Voir les réalisations</Link></p>
        <p><Link href="/contact">Contacter Amplixy</Link></p>
        <p><Link href="/mentions-legales">Vérifier les mentions légales</Link></p>
      </section>
    </TrustPage>
  );
}
