import type { Metadata } from "next";
import Link from "next/link";
import { TrustPage } from "@/components/TrustPage";
import { contactSections } from "@/lib/trust-pages";
import { CALENDAR_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Amplixy",
  description: "Contactez Florian Brignoli pour parler des outils et priorités numériques de votre PME : rendez-vous de 30 minutes, email ou téléphone.",
  alternates: { canonical: "https://amplixy.com/contact" },
};

export default function ContactPage() {
  return (
    <TrustPage title="Contacter Amplixy" sections={contactSections}>
      <section>
        <h2>Vos coordonnées de contact</h2>
        <p><a href={CALENDAR_URL}>Réserver 30 min</a></p>
        <p>Email : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        <p>Téléphone : <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a></p>
        <p>AMPLIXY EURL · 16 B rue de la Rochette, 77000 Melun, France · SIREN 999 167 760.</p>
        <p><Link href="/rendez-vous">Informations sur la réservation</Link></p>
        <p><Link href="/politique-confidentialite">Politique de confidentialité et droits sur vos données</Link></p>
      </section>
    </TrustPage>
  );
}
