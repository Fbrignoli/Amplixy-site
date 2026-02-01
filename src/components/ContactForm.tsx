"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      website: formData.get('website'),
      social: formData.get('social'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }

      setSubmitted(true);
      e.currentTarget.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card-shell space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-ink" htmlFor="name">
          Nom & Prénom
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Julie Durant"
          className="input-paper"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-ink" htmlFor="company">
          Société
        </label>
        <input
          id="company"
          type="text"
          name="company"
          required
          placeholder="Nova Conseil"
          className="input-paper"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-ink" htmlFor="email">
          Email professionnel
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="julie@entreprise.fr"
          className="input-paper"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-ink" htmlFor="website">
            Site web <span className="text-xs text-slate font-normal">(optionnel)</span>
          </label>
          <input
            id="website"
            type="url"
            name="website"
            placeholder="https://..."
            className="input-paper"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-ink" htmlFor="social">
            Réseaux sociaux <span className="text-xs text-slate font-normal">(optionnel)</span>
          </label>
          <input
            id="social"
            type="text"
            name="social"
            placeholder="LinkedIn, Instagram..."
            className="input-paper"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-ink" htmlFor="message">
          Contexte & objectifs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre situation actuelle..."
          className="input-paper resize-none"
        ></textarea>
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || submitted}
        className={`w-full rounded-full bg-gradient-to-r from-accent to-glow px-6 py-4 font-semibold text-white shadow-paper transition-all active:scale-95 ${
          submitted ? "opacity-100" : "hover:shadow-paper-lg hover:scale-[1.02]"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? "Envoi..." : submitted ? "Merci, on vous répond sous 24h" : "Audit gratuit"}
      </button>
    </form>
  );
};
