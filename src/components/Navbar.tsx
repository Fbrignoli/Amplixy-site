"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BOOKING_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  NAV_LINKS,
} from "@/lib/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleClosed = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    openerRef.current?.focus();
  }, []);

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <nav className="site-shell site-nav" aria-label="Navigation principale">
        <Link className="site-brand" href="/" aria-label="Amplixy, accueil">
          Amplixy<span>.</span>
        </Link>

        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="button button-primary nav-cta"
            href={BOOKING_URL}
          >
            Parler de votre besoin
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          ref={openerRef}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      <dialog
        className="menu-dialog"
        id="mobile-navigation"
        ref={dialogRef}
        aria-label="Menu"
        onClose={handleClosed}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="menu-sheet">
          <div className="menu-sheet-head">
            <Link className="site-brand" href="/" onClick={close}>
              Amplixy<span>.</span>
            </Link>
            <button
              className="menu-button"
              type="button"
              ref={closeButtonRef}
              aria-label="Fermer le menu"
              onClick={close}
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <div className="menu-sheet-links">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.href} onClick={close}>
                {link.label}
              </Link>
            ))}
          </div>

          <a
            className="button button-primary menu-sheet-cta"
            href={BOOKING_URL}
            onClick={close}
          >
            Parler de votre besoin
          </a>

          <p className="menu-sheet-contact">
            Ou directement au{" "}
            <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          </p>
        </div>
      </dialog>
    </header>
  );
};
