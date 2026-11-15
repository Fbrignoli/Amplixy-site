# Conventions de code Amplixy-site
## Sources
[TypeScript](../tsconfig.json), [ESLint](../eslint.config.mjs), [package.json](../package.json), [CLAUDE.md](../CLAUDE.md).

## Règles
- Conserver TypeScript/TSX pour les composants et les modules mjs existants pour les utilitaires Node ; suivre le style du fichier modifié, sans reformatage massif.
- Favoriser les composants serveur ; ajouter une frontière client uniquement pour une interaction réelle.
- Mutualiser coordonnées, réservation et faits métier dans src/lib ; éviter les variantes divergentes entre HTML, Markdown, métadonnées et JSON-LD.
- Réutiliser les styles et composants existants, les images locales optimisées et next/image.
- Contenu public en français, relu avec la skill Stop Slop demandée par Florian, sans inventer faits ni références.
- Lire la documentation de la version Next.js installée avant d'introduire une API ou de suivre un exemple externe.

## Fin de changement
Mettre à jour les documents concernés et tests de régression. Rapporter commandes réellement exécutées, échecs et contrôles non exécutés, selon [TESTING.md](TESTING.md).
