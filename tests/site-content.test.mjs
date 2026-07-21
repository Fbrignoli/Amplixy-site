import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("la page expose la promesse et les sections validées", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /Le numérique doit s’adapter/);
  assert.match(page, /id="expertises"/);
  assert.match(page, /id="realisations"/);
  assert.match(page, /id="methode"/);
  assert.match(page, /id="contact"/);
  assert.doesNotMatch(page, /On ne commence pas par l’outil à vendre/);
  assert.doesNotMatch(
    page,
    /Une structure française, un interlocuteur, des livrables/,
  );
  assert.match(page, /Ce qu’on a déjà construit/);
  assert.match(page, /Trois entreprises\. Pour chacune/);
  assert.doesNotMatch(page, /Pas de faux tableaux de bord/);
});

test("les trois réalisations sont affichées dans le hero et le portfolio", async () => {
  const page = await read("src/app/page.tsx");

  for (const project of ["Vion Couverture", "Accord’Âme", "Corsicabrignoli"]) {
    assert.match(page, new RegExp(project));
  }

  assert.match(page, /Aperçu de trois projets réalisés par Amplixy/);
});

test("Parler d’un besoin ouvre l’agenda Cal.eu", async () => {
  const [navbar, site] = await Promise.all([
    read("src/components/Navbar.tsx"),
    read("src/lib/site.ts"),
  ]);

  assert.match(site, /https:\/\/www\.cal\.eu\/florianbrignoli\/quick-chat/);
  assert.match(navbar, /Parler d’un besoin/);
  assert.match(navbar, /href=\{CALENDAR_URL\}/);
  assert.match(navbar, /target="_blank"/);
});

test("les images de réalisations sont servies localement", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /\/img\/reussites\/vioncouverture\.webp/);
  assert.match(page, /\/img\/reussites\/accordame\.webp/);
  assert.match(page, /\/img\/reussites\/corsicabrignoli\.webp/);
});
