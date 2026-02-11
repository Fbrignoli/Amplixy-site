import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-ink/10 bg-cream py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-charcoal sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-ink text-lg">Amplixy</p>
          <p className="mt-2 max-w-md text-xs text-slate leading-relaxed">
            Toute entreprise mérite d&apos;être vue.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-accent md:text-right">
          <a href="mailto:contact@amplixy.com" className="hover:text-ink transition-colors">contact@amplixy.com</a>
          <a href="tel:+33778209044" className="hover:text-ink transition-colors">07 78 20 90 44</a>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate">
        <p>© Amplixy {new Date().getFullYear()}</p>
        <span className="hidden sm:inline">·</span>
        <Link href="/mentions-legales" className="hover:text-ink transition-colors underline underline-offset-2">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
};
