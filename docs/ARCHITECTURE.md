# Architecture Amplixy-site
Relevé du dépôt le 15 novembre 2026.

## Composants
- Next.js App Router, React, TypeScript et Tailwind ; versions et commandes dans [package.json](../package.json).
- [src/app](../src/app/) : pages et routes serveur. Accueil majoritairement serveur ; code client réservé aux interactions.
- [src/components](../src/components/) : navigation, avis, consentement et composants partagés.
- [src/lib](../src/lib/) : constantes, faits des réalisations, schémas et contenus partagés.
- [server.mjs](../server.mjs) : serveur personnalisé ; [src/proxy.ts](../src/proxy.ts) : négociation de représentation.
- [src/instrumentation.ts](../src/instrumentation.ts) : initialisation du service d'avis.

## Flux
Les pages HTML et Markdown partagent les faits. La négociation Accept et les en-têtes/cache sont décrits dans [agent-readiness.md](agent-readiness.md). Les avis passent par une API serveur et un cache mémoire, non par des identifiants exposés au client. Les réservations redirigent vers CALENDAR_URL. Umami reste conditionné au consentement.

## Exploitation et limites
Docker/Coolify et un workflow de déploiement sur main existent. Une modification documentaire n'autorise ni fusion ni déploiement. Vérifier le commit réellement déployé avant une livraison : l'historique décrit déjà des écarts production/GitHub.
Lire [DATABASE.md](DATABASE.md), [SECURITY.md](SECURITY.md) et la documentation Next.js de la version installée avant changement technique. Ne pas déduire une compatibilité d'une autre version Next.js.
