export const CALENDAR_PROVIDER_NAME =
  process.env.NEXT_PUBLIC_CALENDAR_PROVIDER_NAME?.trim() || "Cal.eu";
export const CALENDAR_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL?.trim() ||
  "https://www.cal.eu/florianbrignoli/quick-chat";
export const BOOKING_URL = "/rendez-vous";

export const CONTACT_EMAIL = "contact@amplixy.com";
export const CONTACT_PHONE = "06 51 07 02 31";
export const CONTACT_PHONE_HREF = "tel:+33651070231";

export const NAV_LINKS = [
  { href: "/#approche", label: "L’approche" },
  { href: "/#methode", label: "La méthode" },
  { href: "/#produits", label: "Produits" },
  { href: "/portfolio", label: "Portfolio" },
] as const;
