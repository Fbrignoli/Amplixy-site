import { createServer } from 'node:http';
import { parseArgs } from 'node:util';
import next from 'next';
import { varyAccept } from './src/lib/negotiation.mjs';

const { values } = parseArgs({ options: {
  port: { type: 'string', short: 'p', default: process.env.PORT || '3000' },
  hostname: { type: 'string', short: 'H', default: process.env.HOSTNAME || '0.0.0.0' },
} });
const port = Number(values.port);
const hostname = values.hostname;
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();
await app.prepare();

const server = createServer((req, res) => {
  const writeHead = res.writeHead;
  res.writeHead = function (...args) {
    // Next 16.3 remplace Vary lors du rendu HTML. Ajouter Accept au dernier
    // moment, seulement pour les pages signalées par notre Proxy, en gardant
    // ses sélecteurs RSC et ceux de la compression.
    if (String(res.getHeader('link')).includes('</llms.txt>; rel="describedby"')) {
      const index = typeof args[1] === 'object' ? 1 : 2;
      const headers = args[index];
      if (Array.isArray(headers)) {
        const copy = [...headers];
        const varyIndex = copy.findIndex((name, i) => i % 2 === 0 && name.toLowerCase() === 'vary');
        if (varyIndex >= 0) copy[varyIndex + 1] = varyAccept(copy[varyIndex + 1]);
        else copy.push('Vary', varyAccept(res.getHeader('vary')));
        args[index] = copy;
      } else if (headers) {
        const key = Object.keys(headers).find(key => key.toLowerCase() === 'vary') ?? 'Vary';
        args[index] = { ...headers, [key]: varyAccept(headers[key] ?? res.getHeader('vary')) };
      } else res.setHeader('Vary', varyAccept(res.getHeader('vary')));
    }
    return writeHead.apply(this, args);
  };
  handle(req, res).catch(() => {
    if (!res.headersSent) { res.statusCode = 500; res.end('Erreur interne'); }
    else res.destroy();
  });
});

server.listen(port, hostname, () => console.info(`Amplixy : http://${hostname}:${port}`));

let closing = false;
function close() {
  if (closing) return;
  closing = true;
  server.close(async () => { await app.close(); process.exit(0); });
  setTimeout(() => server.closeAllConnections(), 5000).unref();
  setTimeout(() => process.exit(1), 10000).unref();
}
process.on('SIGTERM', close);
process.on('SIGINT', close);
