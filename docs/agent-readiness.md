# Consultation du site par les agents

## Comportement

L’accueil, `/about` et `/contact` proposent HTML ou Markdown à la même URL selon `Accept`. La négociation respecte les priorités `q`, les exclusions, les jokers et l’ordre client à qualité égale. Une demande refusant les deux représentations reçoit `406`. Sans préférence, le site reste en HTML.

Les versions explicites `/index.md`, `/about.md` et `/contact.md` servent toujours du Markdown UTF-8. Les réponses négociées annoncent `Vary: Accept`, conservent les autres sélecteurs et exposent `Link: rel="alternate"` et `rel="describedby"`. Les réponses Markdown ne sont pas mises en cache. Un validateur HTML ne peut pas produire de `304` pour la variante Markdown.

Un chemin absent demandé avec `Accept: text/markdown` retourne une véritable `404` avec une explication et des liens vers `llms.txt` et le sitemap. Les requêtes HEAD ont les mêmes statut et type, sans corps. Les API, images, métadonnées et requêtes RSC restent gérées par Next.js. Les anciennes pages conservent leur rendu HTML. Le test d’inventaire impose de revoir le registre de routes lors d’un ajout de page.

`/privacy` réutilise la politique existante et garde `/politique-confidentialite` comme URL canonique. Les nouvelles pages About et Contact reprennent les informations de l’entreprise et les styles existants. Le sitemap référence les pages canoniques. Le pied de page ajoute les deux liens ; réservation et consentement restent inchangés.

`public/llms.txt` suit le format de listes de fichiers de la proposition llms.txt v2. `public/agent-instructions.md` détaille les besoins adaptés, la prise de contact et les limites de l’offre. Les textes About et Contact sont partagés entre HTML et Markdown. Les coordonnées et l’agenda proviennent des constantes existantes.

## Particularités Next.js 16.3

Cette version remplace `Vary` pendant le rendu des pages HTML. `server.mjs` démarre Next via son API officielle de serveur personnalisé et complète cet en-tête juste avant son émission, sur les pages signalées par notre Proxy. Les sélecteurs RSC et de compression restent présents. Le Dockerfile embarque ce point d’entrée et son utilitaire ; `npm start` conserve les options `-p` et `-H` attendues par l’image.

`skipProxyUrlNormalize` conserve les marqueurs RSC visibles dans Proxy. Les navigations et préchargements sont ainsi exclus de la négociation. La suite HTTP vérifie aussi ces réponses, même avec `Accept: text/markdown`.

## Vérification

```sh
npm ci
npm run lint
npm test
npm run build
npm run typecheck
npm run test:http
```

Le dernier contrôle démarre puis arrête un serveur local de production. Pour viser une prévisualisation déjà lancée, définir `AMPLIXY_TEST_BASE_URL`. Les contrôles de fichiers et d’inventaire utilisent également le checkout local. La suite couvre toutes les pages publiques, tous les fichiers de `public/`, les métadonnées, les liens internes du guide et de llms.txt, les statuts, types, en-têtes, le contact, la confidentialité, les avis existants et les variantes de cache.

Avant publication publique, vérifier visuellement l’accueil, les pages ajoutées, la navigation, le carrousel et le contact. Après déploiement autorisé, vérifier les deux variantes avec `curl -sS -L -i -H 'Accept: text/markdown' https://amplixy.com/` et `Accept: text/html`, puis relancer Is Agentic. Ne pas assimiler une absence de contrôle à une réussite.

## Base de livraison et limites

La production du 28 octobre 2026 contient cinq commits d’avis absents de `origin/main` (base GitHub `a724a055`). Ils ont été récupérés intégralement depuis la copie source de production, jusqu’au commit `72909b18e72da527b476cf7e268b8da0a13e7b18`, puis conservés dans l’ascendance de cette branche. Ils précèdent le correctif agent ; aucun contenu d’avis n’a été réécrit. Leur absence de GitHub rendait un rebuild direct régressif.

Le titre d’accueil exprime déjà le positionnement canonique : « Amplixy — Référent numérique indépendant des PME ». Le correctif ajoute des pages d’identité et leurs liens internes sans changer cette promesse. Une place dans les résultats de recherche reste à constater après réindexation. L’inspection d’URL et la demande d’indexation nécessitent l’accès Search Console ; les mentions externes relèvent d’un travail éditorial distinct.

## Références

- [Négociation Markdown pour Next.js](https://acceptmarkdown.com/recipes/nextjs)
- [Format llms.txt](https://llmstxt.org/)
- Documentation de la version installée : `node_modules/next/dist/docs/01-app/02-guides/custom-server.md` et références Proxy/NextResponse.
