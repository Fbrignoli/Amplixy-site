// Cloudflare obfusque les adresses du HTML public ; le navigateur les décode.
// Normaliser cette seule transformation pour comparer le contenu éditorial.
function decodeEmail(hex) {
  if (!/^(?:[a-f\d]{2}){2,}$/i.test(hex)) return null;
  const bytes = Buffer.from(hex, 'hex');
  return Buffer.from(bytes.subarray(1).map(byte => byte ^ bytes[0])).toString('utf8');
}

export function normalizeCdnHtml(html) {
  return html
    .replace(/<span\b[^>]*data-cfemail="([a-f\d]+)"[^>]*>[\s\S]*?<\/span>/gi,
      (original, hex) => decodeEmail(hex) ?? original)
    .replace(/href="\/cdn-cgi\/l\/email-protection#([a-f\d]+)"/gi,
      (original, hex) => {
        const email = decodeEmail(hex);
        return email && /^[^<>"\s@]+@[^<>"\s@]+$/.test(email) ? `href="mailto:${email}"` : original;
      });
}
