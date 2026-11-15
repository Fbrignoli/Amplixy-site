# Système d'interface Amplixy
Inventaire du 15 novembre 2026 ; aucune nouvelle direction graphique.

## Références
La charte corporate du vault indiquée dans [CLAUDE.md](../CLAUDE.md) reste l'autorité. L'implémentation est dans [globals.css](../src/app/globals.css), [Tailwind](../tailwind.config.ts) et [composants](../src/components/).

## Primitives et usages
Palette Carmin, Papier, Encre, Pierre ; valeurs Tailwind observées : paper #fafafa, ink #0e141c, accent #a52a48, accent-deep #701b32, stone #e9ebef. Typographie Geist via next/font. Réutiliser les tokens et styles existants plutôt que créer une seconde palette.

Le site est mobile-first. Contrôler 390, 768 et 1280 px, focus clavier, zones sûres, cibles tactiles et mouvement réduit. Les produits tels que Firaxy gardent leur identité ; la palette corporate ne les remplace pas.

Le guide actuel conserve l'accent Carmin du hero sur « contrôle », les outils en liste statique et les avis sans cartes dupliquées. Les modifications futures doivent préciser leur motivation et leurs captures de vérification.

## Entretien
Documenter les primitives changées, composants concernés et états testés. Lire [PRD.md](PRD.md) avant une modification de promesse ou de hiérarchie commerciale. Cette fiche ne certifie pas une conformité visuelle ou d'accessibilité exhaustive.
