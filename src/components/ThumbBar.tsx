"use client";

import { useEffect, useRef, useState } from "react";
import { CALENDAR_URL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

/*
  Correction du défaut le plus coûteux de la version précédente : sur mobile, la
  chrome persistante ne contenait aucune action. Pour prendre rendez-vous il
  fallait ouvrir un menu ou parcourir toute la page.

  La barre vit dans la zone du pouce. Elle reste absente tant que le CTA du hero
  est à l'écran — deux appels à l'action simultanés se dévaluent l'un l'autre —
  et apparaît dès qu'il sort du champ.

  La bascule est calculée au défilement plutôt que par IntersectionObserver :
  l'observateur ne se déclenche pas quand le document n'est pas peint, et cette
  barre est le seul chemin vers la prise de rendez-vous en cours de page. Elle ne
  doit dépendre de rien d'optionnel.
*/
export const ThumbBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /*
      Mesure synchrone plutôt que différée par requestAnimationFrame : rAF ne
      tourne pas quand le document n'est pas peint, et cette barre est le seul
      chemin vers la prise de rendez-vous en cours de page. Deux lectures de
      rectangle par événement de défilement, sans écriture de style entre les
      deux, ne coûtent rien.
    */
    const measure = () => {
      const heroCta = document.getElementById("hero-cta");
      if (!heroCta) return;

      // Le CTA du hero est sorti par le haut.
      const pastHero = heroCta.getBoundingClientRect().bottom < 0;

      // Mais la bande de clôture porte déjà le même bouton : deux appels à
      // l'action simultanés se dévaluent l'un l'autre.
      const closing = document.getElementById("contact");
      const closingOnScreen = closing
        ? closing.getBoundingClientRect().top < window.innerHeight - 80
        : false;

      setIsVisible(pastHero && !closingOnScreen);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Hors du champ, la barre ne doit pas être atteignable au clavier.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.querySelectorAll<HTMLElement>("a").forEach((el) => {
      el.tabIndex = isVisible ? 0 : -1;
    });
  }, [isVisible]);

  return (
    <div
      className="thumb-bar"
      ref={barRef}
      data-visible={isVisible}
      aria-hidden={!isVisible}
    >
      <a
        className="button button-primary"
        href={CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Parler de votre besoin
        <span aria-hidden="true">↗</span>
      </a>
      <span className="thumb-bar-note">
        30 minutes, sans engagement · ou{" "}
        <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
      </span>
    </div>
  );
};
