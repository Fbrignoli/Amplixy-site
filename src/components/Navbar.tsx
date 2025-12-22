"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#approche", label: "Notre Mission" },
  { href: "#services", label: "Nos Solutions" },
  { href: "#realisations", label: "Réussites" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => setIsOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className="fixed inset-x-0 top-4 z-40 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-full border border-white/10 bg-midnight/80 px-6 py-3 shadow-2xl backdrop-blur-xl"
        aria-label="Navigation principale"
      >
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            className="font-display text-sm uppercase tracking-[0.3em] text-white"
          >
            Amplixy
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-sm font-semibold text-mist hover:text-white transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-glow hover:text-glow"
              href="#contact"
            >
              Audit gratuit
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5 text-white" />
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
            className="fixed inset-0 z-50 flex flex-col bg-midnight px-8 py-12 text-lg font-semibold text-white backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-sm uppercase tracking-[0.3em]">Amplixy</p>
              <button
                className="rounded-full border border-white/30 p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-display hover:text-glow transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 rounded-full border border-white/30 px-4 py-4 text-center text-lg font-semibold bg-white/5"
                onClick={closeMenu}
              >
                Audit gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

