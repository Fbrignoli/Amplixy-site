export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-mist/80 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-white text-lg">Amplixy</p>
          <p className="mt-2 max-w-md text-xs text-mist/60 leading-relaxed">
            On rend votre entreprise évidente à choisir.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-glow md:text-right">
          <a href="mailto:contact@amplixy.com" className="hover:text-white transition-colors">contact@amplixy.com</a>
          <a href="tel:+33778209044" className="hover:text-white transition-colors">07 78 20 90 44</a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-mist/50">
        © Amplixy {new Date().getFullYear()}
      </p>
    </footer>
  );
};

