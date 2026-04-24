"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#probleme", label: "Le Problème" },
  { href: "#outils", label: "Nos Outils" },
  { href: "#reussites", label: "Nos Réussites" },
  { href: "#confiance", label: "Confiance" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const overlayVariants = {
  closed: {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 80% 0%, 60% 0%, 40% 0%, 20% 0%, 0 0%)",
  },
  open: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 80% 100%, 60% 100%, 40% 100%, 20% 100%, 0 100%)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
              src="/img/logo-wm.png"
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
              aria-label="Prendre rendez-vous — Navigation"
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
            className="fixed inset-0 z-[10000] bg-blue-dark md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Content */}
            <div className="flex flex-col h-full px-8 pt-6 pb-12">
              {/* Header */}
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Image
                  src="/img/logo-dm.png"
                  alt="Amplixy"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </motion.div>

              {/* Links */}
              <div className="flex flex-col justify-center flex-1 gap-8 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      delay: 0.35 + i * 0.08,
                      duration: 0.5,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-display font-bold text-white hover:text-glow transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.35 + navLinks.length * 0.08,
                    duration: 0.5,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <button
                    data-cal-namespace="diagnostique"
                    data-cal-link="florianbrignoli/meetup"
                    data-cal-origin="https://cal.eu"
                    data-cal-config='{"theme":"light"}'
                    aria-label="Prendre rendez-vous — Menu mobile"
                    className="mt-4 rounded-full bg-glow px-6 py-4 text-center text-lg font-semibold text-midnight w-full"
                    onClick={closeMenu}
                  >
                    Prendre RDV
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
