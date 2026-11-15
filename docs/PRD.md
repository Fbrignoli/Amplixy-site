# Produit : site Amplixy
État documentaire établi le 15 novembre 2026 depuis le dépôt, sans audit du service en ligne.

## Public et objectif
Site français d'un référent numérique indépendant pour les PME. Aider un prospect à comprendre l'accompagnement, consulter des réalisations réelles et réserver un échange. Le dossier de référence appartient au client ; ce n'est pas une plateforme propriétaire à vendre.

## Périmètre
Diagnostic et dossier de référence, mise en œuvre, puis accompagnement selon périmètre et cadence convenus. Sites, outils métier, automatisation et IA sont des moyens possibles, pas des offres commerciales indépendantes. Le site présente notamment accueil, approche, portfolio, contact, réservation et pages de confiance.

## Contraintes et acceptation
- Préserver l'offre et la marque canoniques mentionnées dans [CLAUDE.md](../CLAUDE.md). Leur source vault reste à consulter avant une décision d'offre ou de marque ; ce résumé ne la remplace pas.
- Réutiliser CALENDAR_URL pour les appels à réservation ; pas d'intégration ou préchargement du calendrier.
- Ne pas inventer résultats, références clients ou témoignages.
- Garder les variantes HTML/Markdown, les URL canoniques, le consentement analytics et l'accessibilité.
- Vérifier les parcours et contrôles de [TESTING.md](TESTING.md).

## Sources et entretien
[Guide de dépôt](../CLAUDE.md), [constantes](../src/lib/site.ts), [parcours agents](agent-readiness.md). Actualiser ce document avec toute évolution validée de cible, promesse ou parcours ; distinguer décision et implémentation. Aucune nouvelle fonctionnalité n'est autorisée par cet inventaire.
