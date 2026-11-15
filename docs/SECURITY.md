# Sécurité Amplixy-site
Référence de développement, pas attestation d'audit.

## Frontières à conserver
- Identifiants OAuth Google seulement au runtime serveur ; jamais dans NEXT_PUBLIC, arguments de build, dépôt ou logs. Voir [google-reviews.md](google-reviews.md) et [service](../src/lib/google-reviews.server.mjs).
- Ne pas contourner la validation du profil Google ni ajouter un scraper.
- Analytics Umami après consentement explicite ; préserver le refus et la modification du choix.
- Préserver la séparation HTML/Markdown/RSC, Vary et les règles de cache décrites dans [agent-readiness.md](agent-readiness.md).
- Contrôler les entrées et sorties d'une nouvelle API ; ne pas exposer données ou configuration privée.

## Livraison et incidents
[Le workflow](../.github/workflows/deploy.yml) déclenche un déploiement depuis main. Travailler sur branche et PR ; aucun merge/déploiement implicite. En cas de secret divulgué, ne pas recopier sa valeur dans un ticket : documenter le type et la surface touchée, puis faire autoriser la remédiation requise. Vérifier dépendances et comportement avec [TESTING.md](TESTING.md).

## Limites
Les permissions réelles Coolify/Google, la configuration runtime et les garanties de sauvegarde des services externes n'ont pas été auditées ici. Aucune conformité réglementaire globale n'est revendiquée.
