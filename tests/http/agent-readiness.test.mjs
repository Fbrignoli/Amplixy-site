import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { readdir, readFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { after, before, test } from 'node:test';
import { normalizeCdnHtml } from '../helpers/cdn-html.mjs';

const port = 20000 + Math.floor(Math.random() * 20000);
const base = process.env.AMPLIXY_TEST_BASE_URL ?? `http://127.0.0.1:${port}`;
const pages = ['/', '/about', '/contact', '/privacy', '/portfolio', '/conformite-ia', '/mentions-legales', '/politique-confidentialite', '/rendez-vous'];
const negotiated = ['/', '/about', '/contact'];
let server;
let output = '';
const get = (path, headers = {}, options = {}) => fetch(new URL(path, base), { headers, ...options });
const read = path => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');
const tokens = value => (value ?? '').toLowerCase().split(',').map(s => s.trim());

before(async () => {
  if (!process.env.AMPLIXY_TEST_BASE_URL) {
    server = spawn(process.execPath, ['server.mjs', '-p', String(port), '-H', '127.0.0.1'], {
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
    });
    for (const stream of [server.stdout, server.stderr]) {
      stream.on('data', chunk => { output = (output + chunk).slice(-4000); });
    }
  }
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try { if ((await get('/')).ok) return; } catch { /* démarrage */ }
    if (server?.exitCode != null) throw new Error(`Serveur arrêté : ${output}`);
    await delay(100);
  }
  throw new Error(`Serveur indisponible : ${output}`);
});

after(async () => {
  if (server && server.exitCode == null) {
    const stopped = new Promise(resolve => server.once('exit', resolve));
    server.kill('SIGTERM');
    const force = setTimeout(() => server.kill('SIGKILL'), 12000);
    force.unref();
    await stopped;
    clearTimeout(force);
  }
});

function security(response) {
  for (const name of ['content-security-policy', 'strict-transport-security', 'x-content-type-options', 'x-frame-options', 'referrer-policy', 'permissions-policy']) {
    assert.ok(response.headers.get(name), name);
  }
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(response.headers.get('x-frame-options'), 'SAMEORIGIN');
}

for (const path of pages) {
  test(`Page publique HTML, contenu principal et sécurité : ${path}`, async () => {
    const response = await get(path, { Accept: 'text/html' });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^text\/html/i);
    security(response);
    const html = await response.text();
    assert.match(html, /<html[^>]*lang="fr"/);
    assert.match(html, /<main\b/);
    const canonical = path === '/privacy' ? '/politique-confidentialite' : path === '/' ? '' : path;
    assert.ok(html.includes(`rel="canonical" href="https://amplixy.com${canonical}"`));
    const robots = html.match(/<meta name="robots" content="([^"]+)"/)[1];
    assert.ok(tokens(robots).includes('index'));
    assert.ok(!tokens(robots).includes('noindex'));
    if (['/about', '/contact', '/privacy'].includes(path)) {
      const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1].replace(/<[^>]+>/g, '');
      assert.ok(main.length >= 500, `${path} : ${main.length} caractères`);
    }
  });
}

for (const path of negotiated) {
  test(`Négociation HTML et Markdown, liens de découverte : ${path}`, async () => {
    const md = await get(path, { Accept: 'text/markdown' });
    assert.equal(md.status, 200);
    assert.match(md.headers.get('content-type'), /^text\/markdown; charset=utf-8$/i);
    assert.ok(tokens(md.headers.get('vary')).includes('accept'));
    assert.match(md.headers.get('link'), /rel="describedby"/);
    security(md);
    const body = await md.text();
    assert.match(body, /^# /);
    assert.ok(body.length >= 500);
    assert.doesNotMatch(body, /<html|<script|__next/i);
    const html = await get(path, { Accept: 'text/html' });
    assert.ok(tokens(html.headers.get('vary')).includes('accept'));
    assert.ok(tokens(html.headers.get('vary')).includes('rsc'));
    assert.match(html.headers.get('link'), /rel="alternate"; type="text\/markdown"/);
  });
}

test('Priorités, exclusions, jokers et 406 sont respectés', async () => {
  for (const [accept, status, type] of [
    ['text/html;q=0.2,text/markdown;q=0.9', 200, 'text/markdown'],
    ['text/html;q=0.9,text/markdown;q=0.2', 200, 'text/html'],
    ['text/markdown;q=0,text/*;q=1', 200, 'text/html'],
    ['text/html;q=0,text/*;q=0.5', 200, 'text/markdown'],
    ['*/*', 200, 'text/html'],
    ['text/markdown, text/html, */*', 200, 'text/markdown'],
    ['application/json', 406, 'text/plain'],
    ['text/html;q=0,text/markdown;q=0', 406, 'text/plain'],
  ]) {
    const response = await get('/', { Accept: accept });
    assert.equal(response.status, status, accept);
    assert.ok(response.headers.get('content-type').startsWith(type), accept);
    assert.ok(tokens(response.headers.get('vary')).includes('accept'));
    assert.ok((await response.text()).length > 20);
  }
});

test('Les validateurs HTML ne contaminent pas la représentation Markdown', async () => {
  const html = await get('/', { Accept: 'text/html' });
  const validator = html.headers.get('etag') ?? '"version-html"';
  const md = await get('/', { Accept: 'text/markdown', 'If-None-Match': validator, 'If-Modified-Since': 'Wed, 01 Jan 2031 00:00:00 GMT' });
  assert.equal(md.status, 200);
  assert.match(md.headers.get('content-type'), /^text\/markdown/);
  assert.match(await md.text(), /^# Amplixy/);
  assert.notEqual(md.headers.get('etag'), validator);
});

test('404 : statut réel, Markdown utile et rendu HTML conservé', async () => {
  for (const path of ['/__ora-404-probe-regression', '/nested/inexistant?x=%3Cscript%3E', '/absent.md']) {
    const md = await get(path, { Accept: 'text/markdown' });
    assert.equal(md.status, 404);
    assert.match(md.headers.get('content-type'), /^text\/markdown/);
    assert.ok(tokens(md.headers.get('vary')).includes('accept'));
    security(md);
    const body = await md.text();
    assert.ok(body.length >= 20);
    assert.match(body, /\[.+\]\(https:\/\/amplixy.com\/(?:llms.txt|sitemap.xml)\)/);
    assert.doesNotMatch(body, /<script|node_modules|stack|x=%3C/);
  }
  const html = await get('/__ora-404-probe-regression', { Accept: 'text/html' });
  assert.equal(html.status, 404);
  assert.match(html.headers.get('content-type'), /^text\/html/);
  assert.ok(tokens(html.headers.get('vary')).includes('accept'));
  assert.equal((await get('/__ora-404-probe-regression', { Accept: 'application/json' })).status, 404);
});

test('Versions .md explicites et requêtes HEAD sans corps', async () => {
  for (const path of ['/index.md', '/about.md', '/contact.md']) {
    const response = await get(path, { Accept: 'text/html' });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^text\/markdown/);
    assert.match(await response.text(), /^# /);
  }
  for (const [path, status] of [['/', 200], ['/about', 200], ['/index.md', 200], ['/inexistant', 404]]) {
    const response = await get(path, { Accept: 'text/markdown' }, { method: 'HEAD' });
    assert.equal(response.status, status);
    assert.match(response.headers.get('content-type'), /^text\/markdown/);
    assert.equal(await response.text(), '');
  }
});

test('RSC et préchargements Next restent des composants, y compris avec Accept Markdown', async () => {
  for (const path of ['/', '/about', '/contact', '/portfolio']) {
    const response = await get(`${path}?_rsc=regression`, { RSC: '1', 'Next-Router-Prefetch': '1', Accept: 'text/markdown' });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /^text\/x-component/);
    assert.ok(tokens(response.headers.get('vary')).includes('rsc'));
    assert.doesNotMatch(await response.text(), /^# /);
  }
});

test('Les ressources, métadonnées et API conservent leurs types natifs', async () => {
  const files = await readdir(new URL('../../public', import.meta.url), { recursive: true, withFileTypes: true });
  for (const file of files.filter(file => file.isFile())) {
    const parent = file.parentPath ?? file.path;
    const path = `${parent}/${file.name}`.split('/public/')[1];
    const response = await get(`/${path}`, { Accept: 'text/markdown' });
    assert.equal(response.status, 200, path);
    if (path.startsWith('img/')) assert.match(response.headers.get('content-type'), /^image\//, path);
    else assert.ok((await response.text()).length > 20, path);
  }
  for (const [path, type] of [['/robots.txt', /text\/plain/], ['/sitemap.xml', /xml/], ['/opengraph-image', /^image\//]]) {
    const response = await get(path, { Accept: 'text/markdown' });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type'), type);
  }
  const api = await get('/api/google-reviews', { Accept: 'text/markdown' });
  assert.equal(api.status, 200);
  assert.match(api.headers.get('content-type'), /application\/json/);
  const snapshot = await api.json();
  assert.ok(snapshot === null || Array.isArray(snapshot.reviews));
});

test('llms.txt respecte le format et tous les liens internes publiés aboutissent', async () => {
  const llms = await (await get('/llms.txt')).text();
  assert.match(llms, /^# Amplixy\n\n> /);
  assert.match(llms, /## Quand recommander Amplixy/);
  for (const section of llms.split(/^## /m).slice(1)) {
    const lines = section.trim().split('\n').slice(1).filter(line => line.trim());
    assert.ok(lines.length > 0);
    assert.ok(lines.every(line => /^- \[[^\]]+\]\(\S+\)(?:: .+)?$/.test(line)));
  }
  const guide = await (await get('/agent-instructions.md')).text();
  assert.match(guide, /## Quand utiliser Amplixy \(When to use\)/);
  assert.match(guide, /sans son accord/);
  assert.match(guide, /pas une plateforme ou un abonnement automatique/);
  assert.match((await get('/agent-instructions.md')).headers.get('content-type'), /^text\/markdown/);
  assert.match((await get('/llms.txt')).headers.get('content-type'), /^text\/plain/);
  const homeMd = await (await get('/index.md')).text();
  const internal = [...`${llms}\n${guide}\n${homeMd}`.matchAll(/\[[^\]]+\]\((https:\/\/amplixy.com[^)]*)\)/g)];
  for (const path of new Set(internal.map(match => new URL(match[1]).pathname))) {
    assert.equal((await get(path)).status, 200, path);
  }
});

test('Le sitemap couvre toutes les pages canoniques et le registre Proxy reste à jour', async () => {
  const xml = await (await get('/sitemap.xml')).text();
  const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  assert.deepEqual(paths.sort(), pages.filter(path => path !== '/privacy').sort());
  const appFiles = await readdir(new URL('../../src/app', import.meta.url), { recursive: true });
  const actual = appFiles.filter(path => path.endsWith('page.tsx')).map(path => `/${path.replace(/\/?page.tsx$/, '')}`);
  assert.deepEqual(actual.sort(), [...pages].sort());
  const registry = await read('src/lib/agent-content.ts');
  for (const path of pages) assert.ok(registry.includes(`"${path}"`), path);
});

test('Contact, navigation, identité, consentement et politique existante sont conservés', async () => {
  const html = normalizeCdnHtml(await (await get('/')).text());
  assert.match(html, /<title>Amplixy — Référent numérique indépendant des PME<\/title>/);
  for (const id of ['approche', 'methode', 'produits', 'realisations', 'contact', 'faq']) assert.ok(html.includes(`id="${id}"`));
  const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)[1];
  for (const path of ['/about', '/contact', '/politique-confidentialite', '/mentions-legales']) assert.ok(footer.includes(`href="${path}"`));
  assert.match(footer, /href="mailto:contact@amplixy.com"/);
  assert.match(footer, /href="tel:\+33651070231"/);
  const contact = await (await get('/contact')).text();
  assert.match(contact, /Réserver 30 min/);
  assert.doesNotMatch(contact, /<form|<iframe/);
  const calendar = contact.match(/<a[^>]*href="([^"]+)"[^>]*>Réserver 30 min<\/a>/)[1];
  const contactMd = await (await get('/contact.md')).text();
  assert.ok(contactMd.includes(`](${calendar})`));
  for (const path of ['/about', '/contact']) {
    const html = await (await get(path)).text();
    const md = await (await get(`${path}.md`)).text();
    const main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
    const paragraphs = [...main.matchAll(/<p>([^<]{100,})<\/p>/g)].map(match => match[1]);
    assert.ok(paragraphs.length >= 4);
    for (const paragraph of paragraphs) assert.ok(md.includes(paragraph), `${path} : ${paragraph}`);
  }
  const policy = normalizeCdnHtml(await (await get('/politique-confidentialite')).text());
  const alias = normalizeCdnHtml(await (await get('/privacy')).text());
  assert.equal(alias.match(/<main\b[\s\S]*?<\/main>/)[0], policy.match(/<main\b[\s\S]*?<\/main>/)[0]);
  assert.doesNotMatch(html, /<script[^>]*src="https:\/\/trafic.amplixy.cloud/);
});

test('Les trois avis publiés et les commandes du carrousel sont conservés', async () => {
  const html = await (await get('/')).text();
  for (const author of ['Daniela De Vingo', 'Aurélien Defix', 'Matthieu Vion']) assert.ok(html.includes(author));
  assert.match(html, /aria-label="Carrousel des avis Google"/);
  assert.match(html, /aria-label="Afficher l’avis précédent"/);
  assert.match(html, /aria-label="Afficher l’avis suivant"/);
  assert.match(html, /class="google-reviews-carousel"/);
  const cards = [...html.matchAll(/<figure class="google-review"(?: [^>]*)?>/g)];
  assert.equal(cards.length, 6); // trois cartes et leur séquence de boucle masquée
});
