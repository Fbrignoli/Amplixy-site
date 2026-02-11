"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#probleme", label: "Le Problème" },
  { href: "#outils", label: "Nos Outils" },
  { href: "#confiance", label: "Confiance" },
  { href: "#contact", label: "Contact" },
];

function NavbarContent({ isOpen, setIsOpen, closeMenu, scrolled }: { isOpen: boolean; setIsOpen: (v: boolean) => void; closeMenu: () => void; scrolled: boolean }) {
  return (
    <>
      <nav
        className={`fixed inset-x-0 top-4 z-[9999] mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-ink/5 bg-white/90 shadow-paper backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
        aria-label="Navigation principale"
      >
        <div className="flex items-center justify-between">
          <Link href="#home">
            <Image
              src="/img/logo wm.png"
              alt="Amplixy"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-sm font-semibold text-charcoal hover:text-accent transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <button
              data-cal-namespace="diagnostique"
              data-cal-link="florianbrignoli/meetup"
              data-cal-origin="https://cal.eu"
              data-cal-config='{"theme":"light"}'
              className="rounded-full bg-blue-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-dark/90 hover:shadow-paper-lg hover:scale-105"
            >
              Prendre RDV
            </button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5 text-ink" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[10000] flex flex-col bg-paper px-8 py-12 text-lg font-semibold text-ink md:hidden"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/img/logo wm.png"
                alt="Amplixy"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <button
                className="rounded-full border border-ink/10 bg-white p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6 text-ink" />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-display text-ink hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <button
                data-cal-namespace="diagnostique"
                data-cal-link="florianbrignoli/meetup"
                data-cal-origin="https://cal.eu"
                data-cal-config='{"theme":"light"}'
                className="mt-4 rounded-full bg-blue-dark px-4 py-4 text-center text-lg font-semibold text-white w-full"
                onClick={closeMenu}
              >
                Prendre RDV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} closeMenu={closeMenu} scrolled={scrolled} />,
    document.body
  );
};
