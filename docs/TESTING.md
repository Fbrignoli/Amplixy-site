# Vérification Amplixy-site
## Commandes du dépôt
À exécuter dans un checkout de test sans secrets de production :
```sh
npm ci
npm run lint
npm test
npm run build
npm run typecheck
npm run test:http
```

Le workflow [verify.yml](../.github/workflows/verify.yml) utilise Node 22. La suite HTTP démarre/arrête un serveur local de production ; AMPLIXY_TEST_BASE_URL peut viser une prévisualisation autorisée. Ne pas viser la production sans périmètre explicite.

## Couverture à préserver
Négociation Accept, HTML/Markdown/RSC, statuts/HEAD, cache/Vary, inventaire des routes, liens, avis, contact et confidentialité. Détails : [agent-readiness.md](agent-readiness.md). Toute route publique ajoutée exige une revue du registre.

Pour l'interface : accueil, navigation mobile/clavier, réservation, avis, consentement refus/acceptation et retour, largeurs 390/768/1280 et mouvement réduit. Une suite automatique ne remplace pas ces contrôles.

## Compte rendu
Nommer commit, environnement, commandes, résultats et limites. Les preuves historiques ne valent pas pour une nouvelle version. Un changement documentaire seul appelle vérification des liens, de la cohérence et du périmètre du diff ; ne pas annoncer la suite applicative réussie si elle n'a pas tourné.
