"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CALENDAR_URL, NAV_LINKS } from "@/lib/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="site-shell site-nav" aria-label="Navigation principale">
        <Link className="site-brand" href="/" aria-label="Amplixy, accueil">
          AMPLIXY<span>.</span>
        </Link>

        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="button nav-cta"
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Parler d’un besoin <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu" id="mobile-navigation">
          <div className="mobile-menu-head">
            <Link className="site-brand" href="/" onClick={() => setIsOpen(false)}>
              AMPLIXY<span>.</span>
            </Link>
            <button
              className="menu-button menu-button-close"
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setIsOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="mobile-menu-links">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="button button-signal"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Parler d’un besoin <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
