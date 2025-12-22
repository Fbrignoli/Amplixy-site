"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <form className="card-shell space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/90" htmlFor="name">
          Nom & Prénom
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Julie Durant"
          className="w-full rounded-2xl border border-white/10 bg-midnight/50 px-4 py-3 text-sm text-white focus:border-glow focus:outline-none transition-colors"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/90" htmlFor="company">
          Société
        </label>
        <input
          id="company"
          type="text"
          name="company"
          required
          placeholder="Nova Conseil"
          className="w-full rounded-2xl border border-white/10 bg-midnight/50 px-4 py-3 text-sm text-white focus:border-glow focus:outline-none transition-colors"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/90" htmlFor="email">
          Email professionnel
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="julie@entreprise.fr"
          className="w-full rounded-2xl border border-white/10 bg-midnight/50 px-4 py-3 text-sm text-white focus:border-glow focus:outline-none transition-colors"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white/90" htmlFor="website">
            Site web <span className="text-xs text-white/40 font-normal">(optionnel)</span>
          </label>
          <input
            id="website"
            type="url"
            name="website"
            placeholder="https://..."
            className="w-full rounded-2xl border border-white/10 bg-midnight/50 px-4 py-3 text-sm text-white focus:border-glow focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white/90" htmlFor="social">
            Réseaux sociaux <span className="text-xs text-white/40 font-normal">(optionnel)</span>
          </label>
          <input
            id="social"
            type="text"
            name="social"
            placeholder="LinkedIn, Instagram..."
            className="w-full rounded-2xl border border-white/10 bg-midnight/50 px-4 py-3 text-sm text-white focus:border-glow focus:outline-none transition-colors"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white/90" htmlFor="message">
          Contexte & objectifs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre situation actuelle..."
          className="w-full rounded-2xl border border-white/10 bg-midnight/50 px-4 py-3 text-sm text-white focus:border-glow focus:outline-none transition-colors"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={loading || submitted}
        className={`w-full rounded-full bg-gradient-to-r from-accent to-glow px-6 py-4 font-semibold text-slate-900 shadow-xl transition-all active:scale-95 ${
          submitted ? "opacity-100" : "hover:opacity-90"
        }`}
      >
        {loading ? "Envoi..." : submitted ? "Merci, on vous répond sous 24h" : "Audit gratuit"}
      </button>
    </form>
  );
};

