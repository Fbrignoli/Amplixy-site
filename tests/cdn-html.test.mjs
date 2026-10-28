import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeCdnHtml } from './helpers/cdn-html.mjs';

test('les deux clés publiques Cloudflare restituent exactement le contact attendu', () => {
  const html = '<a href="/cdn-cgi/l/email-protection#ee8d81809a8f8d9aae8f839e82879697c08d8183"><span class="__cf_email__" data-cfemail="44272b2a3025273004252934282d3c3d6a272b29">[email&#160;protected]</span></a>';
  assert.equal(normalizeCdnHtml(html), '<a href="mailto:contact@amplixy.com">contact@amplixy.com</a>');
});

test('le HTML ordinaire et une adresse différente ne sont pas réécrits', () => {
  for (const html of ['<a href="mailto:contact@amplixy.com">Contact</a>', '<a href="mailto:autre@example.com">Autre</a>', '<p>Sans adresse</p>']) {
    assert.equal(normalizeCdnHtml(html), html);
  }
});

test('les séquences tronquées ne deviennent pas des contacts valides', () => {
  const html = '<a href="/cdn-cgi/l/email-protection#ee8"><span data-cfemail="4">Incomplet</span></a>';
  assert.equal(normalizeCdnHtml(html), html);
});
