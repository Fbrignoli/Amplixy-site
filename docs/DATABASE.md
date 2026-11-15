# Données Amplixy-site
Inventaire du 15 novembre 2026, limité au code et aux documents consultés.

## Modèle actuel
Aucune base métier persistante du site n'est décrite dans les sources consultées ; ne pas en créer par convention. Les faits publiés sont versionnés dans src/lib, les pages et public. Consulter [site.ts](../src/lib/site.ts), [business-cases.ts](../src/lib/business-cases.ts), [projects.ts](../src/lib/projects.ts) et [schema.ts](../src/lib/schema.ts).

Le service [google-reviews.server.mjs](../src/lib/google-reviews.server.mjs) conserve un snapshot en mémoire expirant après 24 heures. Il vérifie le profil Google avant utilisation. Un fallback statique historiquement approuvé existe ; lire [google-reviews.md](google-reviews.md) avant modification.

## Frontières
Les données de réservation et d'analyse appartiennent aux services externes concernés. Leurs schémas, rétentions et sauvegardes ne sont pas prouvés par ce dépôt. Ne pas importer leurs données ou secrets pour remplir cette fiche.

## Évolution
Toute nouvelle persistance doit documenter finalité, champs, propriétaire, accès, rétention, suppression, migration et retour arrière avant implémentation. Une copie de code n'est pas une sauvegarde des services externes.
