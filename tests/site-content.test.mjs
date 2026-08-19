import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const relativeLuminance = (hex) => {
  const channels = hex
    .slice(1)
    .match(/../g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4,
    );

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrastRatio = (foreground, background) => {
  const values = [
    relativeLuminance(foreground),
    relativeLuminance(background),
  ].sort((a, b) => b - a);

  return (values[0] + 0.05) / (values[1] + 0.05);
};

test("la page vend une seule promesse centrée sur l’outil adapté au métier", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /On construit l’outil qui manque/);
  assert.match(page, /On construit la réponse autour de ça/);
  assert.match(page, /On part de ce qui coince dans votre activité/);
  assert.doesNotMatch(page, /\bJe\b|\bJ’ai\b|\bje\b/);
  assert.doesNotMatch(page, /Trois formes de travail/);
  assert.doesNotMatch(page, /id="offre"/);
});

test("le principe de conception est expliqué sans simuler un faux logiciel", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /Votre <em>métier<\/em> d’abord,/);
  assert.match(page, /la technique ensuite/);
  assert.doesNotMatch(page, /Le besoin choisit la forme|Jamais l’inverse/);
  assert.doesNotMatch(page, /avant la technique/);
  assert.match(page, /Votre réalité/);
  assert.match(page, /La réponse utile/);
  assert.doesNotMatch(page, /Prêt à travailler/);
});

test("la méthode inclut la formation et l’autonomie", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /D’un problème à un outil vraiment utilisé/);
  assert.match(page, /On forme les personnes qui l’utiliseront/);
});

test("le récit explique l’approche avant de montrer les sites", async () => {
  const page = await read("src/app/page.tsx");

  const approach = page.indexOf('id="approche"');
  const method = page.indexOf('id="methode"');
  const proof = page.indexOf('id="realisations"');
  const contact = page.indexOf('id="contact"');

  assert.ok(approach > 0 && method > 0 && proof > 0 && contact > 0);
  assert.ok(approach < method);
  assert.ok(method < proof);
  assert.ok(proof < contact);
});

test("la démonstration présente trois cas d’usage dont deux confidentiels", async () => {
  const [page, portfolio, projects] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/portfolio/page.tsx"),
    read("src/lib/projects.ts"),
  ]);

  assert.match(page, /Communication/);
  assert.match(page, /Gestion de projet/);
  assert.match(page, /IA en entreprise/);
  assert.match(page, /100 projets/);
  assert.match(page, /Jira adapté/);
  assert.match(page, /Après le POC/);
  assert.doesNotMatch(page, /Client confidentiel|3 projets publics/);
  assert.match(page, /href="https:\/\/vioncouverture\.fr"/);
  assert.match(page, /Voir Vion Couverture/);
  assert.match(page, /href="\/portfolio"/);
  assert.match(page, /D’autres réalisations/);
  assert.match(portfolio, /projects\.map/);

  for (const project of ["Vion Couverture", "Accord’Âme", "Corsicabrignoli"]) {
    assert.match(projects, new RegExp(project));
  }
});

test("les trois cas ont le même poids sur une seule rangée", async () => {
  const [page, css] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/globals.css"),
  ]);

  assert.match(page, /className="case-grid"/);
  assert.equal((page.match(/className="use-case"/g) ?? []).length, 3);
  assert.match(css, /\.case-grid\s*\{[\s\S]*display:\s*grid/);
  assert.match(css, /grid-template-columns:\s*repeat\(3,/);
});

test("chaque appel à l’action passe par l’information de réservation", async () => {
  const [page, navbar, thumbBar, site, booking] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/components/Navbar.tsx"),
    read("src/components/ThumbBar.tsx"),
    read("src/lib/site.ts"),
    read("src/app/rendez-vous/page.tsx"),
  ]);

  assert.match(site, /NEXT_PUBLIC_CALENDAR_PROVIDER_NAME/);
  assert.match(site, /NEXT_PUBLIC_CALENDAR_URL/);
  assert.match(site, /https:\/\/www\.cal\.eu\/florianbrignoli\/quick-chat/);
  assert.match(site, /BOOKING_URL = "\/rendez-vous"/);

  for (const source of [page, navbar, thumbBar]) {
    assert.match(source, /href=\{BOOKING_URL\}/);
    assert.match(source, /Parler de votre besoin/);
  }

  assert.match(booking, /href=\{CALENDAR_URL\}/);
  assert.match(booking, /CALENDAR_PROVIDER_NAME/);
  assert.match(booking, /nom, email,\s+date et heure, fuseau horaire/);
  assert.match(booking, /notes libres et éventuels invités/);
  assert.match(booking, /politique de confidentialité d’Amplixy/);
});

test("une action reste atteignable en permanence sur mobile", async () => {
  const [page, css] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/globals.css"),
  ]);

  assert.match(page, /<ThumbBar \/>/);
  assert.match(css, /\.thumb-bar\s*\{/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
});

test("le menu mobile utilise un vrai dialogue modal", async () => {
  const [navbar, css] = await Promise.all([
    read("src/components/Navbar.tsx"),
    read("src/app/globals.css"),
  ]);

  assert.match(navbar, /<dialog/);
  assert.match(navbar, /dialog\.showModal\(\)/);
  assert.match(navbar, /closeButtonRef\.current\?\.focus\(\)/);
  assert.match(navbar, /event\.key === "Escape"/);
  assert.match(navbar, /openerRef\.current\?\.focus\(\)/);
  assert.match(css, /\.menu-dialog::backdrop/);
  assert.match(css, /height:\s*100dvh/);
});

test("l’identité applique la palette Carmin canonique du brandbook", async () => {
  const [layout, css, tailwind] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/app/globals.css"),
    read("tailwind.config.ts"),
  ]);

  assert.match(layout, /import \{ Geist \}/);
  assert.doesNotMatch(layout, /import \{ Fraunces/);
  assert.doesNotMatch(layout, /import \{ Inter/);
  assert.match(css, /--paper:\s*#fafafa/);
  assert.match(css, /--ink:\s*#0e141c/);
  assert.match(css, /--stone:\s*#e9ebef/);
  assert.match(css, /--muted:\s*#49505a/);
  assert.match(css, /--accent:\s*#a52a48/);
  assert.match(css, /--accent-deep:\s*#701b32/);
  assert.match(css, /--accent-light:\s*#c06a7f/);
  assert.doesNotMatch(`${css}\n${tailwind}`, /orange|0\.7 0\.2 43/i);
  assert.match(css, /\.site-brand\s*\{[\s\S]*font-size:\s*1\.35rem/);
  assert.match(css, /\.site-brand span\s*\{[\s\S]*color:\s*var\(--accent\)/);
  assert.match(css, /\.button-primary\s*\{[\s\S]*background:\s*var\(--accent\)[\s\S]*color:\s*#ffffff/);
  assert.match(css, /\.principle-step > span\s*\{[\s\S]*color:\s*var\(--accent-light\)[\s\S]*font-size:\s*0\.875rem[\s\S]*font-weight:\s*720/);
  assert.match(css, /\.compliance-checks li > span\s*\{[\s\S]*color:\s*var\(--accent-light\)[\s\S]*font-size:\s*0\.875rem[\s\S]*font-weight:\s*720/);
  const accentLightTextSelectors = [...css.matchAll(
    /([^{}]+)\{[^{}]*color:\s*var\(--accent-light\)[^{}]*\}/g,
  )].map((match) => match[1].trim()).sort();
  assert.deepEqual(accentLightTextSelectors, [
    ".compliance-checks li > span",
    ".principle-board blockquote em",
    ".principle-step > span",
  ]);
  assert.match(css, /\.case-link-primary\s*\{[\s\S]*color:\s*var\(--accent-deep\)/);
  assert.doesNotMatch(css, /background-clip:\s*text/);
});

test("les paires de couleurs éditoriales respectent WCAG AA", () => {
  const pairs = [
    ["#FFFFFF", "#A52A48", 4.5],
    ["#FAFAFA", "#701B32", 4.5],
    ["#FAFAFA", "#49505A", 4.5],
    ["#0E141C", "#C7CCD2", 4.5],
    ["#0E141C", "#C06A7F", 4.5],
  ];

  for (const [foreground, background, minimum] of pairs) {
    assert.ok(
      contrastRatio(foreground, background) >= minimum,
      `${foreground} sur ${background} doit atteindre ${minimum}:1`,
    );
  }
});

test("l’icône utilise le monogramme transparent officiel", async () => {
  const [layout, icon] = await Promise.all([
    read("src/app/layout.tsx"),
    read("public/img/amplixy-monogramme-transparent.svg"),
  ]);

  assert.match(layout, /amplixy-monogramme-transparent\.svg/);
  assert.match(layout, /amplixy-monogramme-transparent-180\.png/);
  assert.match(icon, /color="#0E141C"/);
  assert.match(icon, /fill="#A52A48"/);
  assert.match(icon, /Carmin signal/);
  assert.doesNotMatch(icon, /<rect[^>]+(?:fill="#FFFFFF"|stroke=)/);
});

test("l’image sociale et les données structurées utilisent la nouvelle marque", async () => {
  const [openGraph, schema] = await Promise.all([
    read("src/app/opengraph-image.tsx"),
    read("src/lib/schema.ts"),
  ]);

  for (const color of ["#FAFAFA", "#0E141C", "#A52A48", "#701B32", "#49505A"]) {
    assert.match(openGraph, new RegExp(color));
  }

  assert.match(openGraph, /Votre métier d’abord,/);
  assert.match(openGraph, /la technique ensuite/);
  assert.doesNotMatch(openGraph, /Le numérique doit s’adapter|Pas l’inverse|avant la technique/);
  assert.doesNotMatch(openGraph, /#2454e8|#d65c15/i);
  assert.match(schema, /amplixy-monogramme-transparent\.png/);
  assert.doesNotMatch(schema, /icon-wm\.png/);
});

test("les mentions légales suivent le même système visuel", async () => {
  const legal = await read("src/app/mentions-legales/page.tsx");

  assert.match(legal, /className="legal-page"/);
  assert.match(legal, /className="legal-content"/);
  assert.match(legal, /<Navbar \/>/);
  assert.match(legal, /<Footer \/>/);
  assert.doesNotMatch(legal, /slate|blue-dark|charcoal|rounded-2xl/);
});

test("les mentions légales identifient complètement la société et l’hébergeur", async () => {
  const legal = await read("src/app/mentions-legales/page.tsx");

  assert.match(legal, /RCS Melun 999 167 760/);
  assert.match(legal, /1er janvier 2026/);
  assert.match(legal, /\+370 645 03378/);
  assert.match(legal, /HOSTINGER INTERNATIONAL LIMITED/);
  assert.match(legal, /compliance@hostinger\.com/);
  assert.match(legal, /HOSTINGER operations, UAB/);
  assert.match(legal, /19 août 2026/);
  assert.match(legal, /règles de compétence prévues par les textes/);
  assert.match(legal, /destinées exclusivement\s+à des clients agissant à des fins professionnelles/);
  assert.doesNotMatch(legal, /tribunaux français seront seuls compétents/);
  assert.doesNotMatch(legal, /décline toute\s+responsabilité/);
});

test("la politique de confidentialité couvre les traitements et tous les droits RGPD", async () => {
  const privacy = await read("src/app/politique-confidentialite/page.tsx");

  for (const expected of [
    "Responsable du traitement",
    "Demandes par email ou téléphone",
    "Prise de rendez-vous",
    "Mesure d’audience",
    "HOSTINGER INTERNATIONAL LIMITED",
    "Cal.com, Inc. / Cal.eu",
    "Transferts hors Espace économique européen",
    "l’accès à vos données",
    "leur rectification ou leur effacement",
    "limitation du traitement",
    "vous opposer",
    "portabilité",
    "Commission nationale de l’informatique et des libertés",
  ]) {
    assert.match(privacy, new RegExp(expected));
  }

  assert.match(privacy, /au plus tard dans un\s+mois/);
  assert.match(privacy, /vingt-cinq mois/);
  assert.match(privacy, /trois\s+ans après le dernier échange actif/);
  assert.match(privacy, /jusqu’à\s+cinq ans à titre de preuve/);
  assert.match(privacy, /douze mois après sa date/);
  assert.match(privacy, /au maximum sept jours/);
  assert.match(privacy, /jusqu’à trente jours/);
});

test("Umami reste bloqué avant consentement et le choix est réversible", async () => {
  const [layout, consent, footer] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/components/AnalyticsConsent.tsx"),
    read("src/components/Footer.tsx"),
  ]);

  assert.doesNotMatch(layout, /trafic\.amplixy\.cloud\/script\.js/);
  assert.match(layout, /<AnalyticsConsent \/>/);
  assert.match(consent, /choice === "accepted"/);
  assert.match(consent, /trafic\.amplixy\.cloud\/script\.js/);
  assert.match(consent, /umami\.disabled/);
  assert.match(consent, /data-do-not-track="true"/);
  assert.match(consent, /data-exclude-search="true"/);
  assert.match(consent, /data-exclude-hash="true"/);
  assert.match(consent, /Refuser/);
  assert.match(consent, /Accepter/);
  assert.match(consent, /setDetailsOpen\(true\)/);
  assert.match(consent, /setSettingsOpen\(false\)/);
  assert.match(consent, /!detailsOpen/);
  assert.match(footer, /<AnalyticsSettingsButton \/>/);
  assert.match(footer, /Politique de confidentialité/);
});

test("les animations respectent la réduction du mouvement", async () => {
  const [css, layout] = await Promise.all([
    read("src/app/globals.css"),
    read("src/app/layout.tsx"),
  ]);

  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /animation-duration:\s*0\.01ms/);
  assert.match(layout, /data-scroll-behavior="smooth"/);
});

test("la capture Vion peut être préchargée si elle devient LCP", async () => {
  const portfolio = await read("src/app/portfolio/page.tsx");

  assert.match(portfolio, /src=\{project\.image\}[\s\S]*priority=\{index === 0\}/);
});

test("le bandeau d’outils défile et respecte la réduction du mouvement", async () => {
  const [marquee, css] = await Promise.all([
    read("src/components/ToolMarquee.tsx"),
    read("src/app/globals.css"),
  ]);

  for (const tool of ["Jira", "Confluence", "Claude", "ChatGPT", "Mistral", "n8n"]) {
    assert.match(marquee, new RegExp(tool));
  }

  assert.match(css, /@keyframes tools-scroll/);
  assert.match(css, /animation-play-state:\s*paused/);
  assert.match(css, /\.tools-set\[aria-hidden="true"\]/);
});

test("la section produits distingue Firaxy du prochain produit", async () => {
  const [page, site, css] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/lib/site.ts"),
    read("src/app/globals.css"),
  ]);

  assert.match(page, /id="produits"/);
  assert.match(page, /Les produits Amplixy/);
  assert.match(page, /href="https:\/\/firaxy\.com"/);
  assert.match(page, /Produit 01/);
  assert.match(page, /Bientôt disponible/);
  assert.match(page, /Il sera présenté ici dès que son usage/);
  assert.match(site, /href: "\/#produits"/);
  assert.match(css, /\.product-grid\s*\{[\s\S]*display:\s*grid/);
  assert.match(css, /grid-template-columns:\s*minmax\(0, 1\.4fr\)/);
  assert.doesNotMatch(page, /roadmap|en pause/i);
  assert.ok(page.indexOf('id="produits"') > page.indexOf('id="conformite"'));
});

test("les liens évitent les flèches diagonales et Firaxy garde une flèche horizontale", async () => {
  const sources = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/portfolio/page.tsx"),
    read("src/app/conformite-ia/page.tsx"),
    read("src/components/Navbar.tsx"),
    read("src/components/ThumbBar.tsx"),
  ]);
  const page = sources[0];

  assert.doesNotMatch(sources.join("\n"), /↗/);
  assert.match(
    page,
    /Découvrir Firaxy\s*<span aria-hidden="true">→<\/span>/,
  );
});

test("la souveraineté et la conformité sont cadrées sans garantie absolue", async () => {
  const [page, guide] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/app/conformite-ia/page.tsx"),
  ]);

  assert.match(page, /Vous gardez la main sur vos outils et vos données/);
  assert.match(page, /RGPD/);
  assert.match(page, /AI Act/);
  assert.match(page, /className="compliance-visual"/);
  assert.match(page, /href="\/conformite-ia"/);
  assert.match(guide, /Le RGPD/);
  assert.match(guide, /L’AI Act/);
  assert.match(guide, /Le DPO/);
  assert.match(guide, /un dirigeant qui\s+decide|un dirigeant qui\s+\n?\s*décide/);
  assert.match(guide, /conflit d’intérêts/);
  assert.match(guide, /designation-dpo/);
  assert.match(guide, /data-protection-officer_fr/);
  assert.match(guide, /contrôle humain/i);
  assert.match(guide, /ne remplace pas\s+un audit juridique/);
  assert.match(guide, /className="guide-map"/);
  assert.doesNotMatch(`${page}\n${guide}`, /full compliance/i);
});

test("aucun témoignage ni chiffre marketing inventé", async () => {
  const page = await read("src/app/page.tsx");

  assert.doesNotMatch(page, /nos experts|notre équipe/i);
  assert.doesNotMatch(page, /ils nous font confiance/i);
  assert.doesNotMatch(page, /\d+\s*(clients|ans d’expérience)/i);
  assert.match(page, /environ 100 projets/);
});
