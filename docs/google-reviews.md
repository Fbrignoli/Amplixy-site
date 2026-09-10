# Avis Google — connexion et exploitation

## État au 2026-09-10

Le module et le connecteur sont implémentés. Dans l’attente d’une réponse exploitable de l’API Business Profile, un **fallback ponctuel et temporaire** reprend les trois avis publics capturés manuellement le 2026-09-10, avec la note `5,0` et le total `3 avis`. Cette exception a été explicitement validée par Florian. Dès que `/api/google-reviews` renvoie un snapshot valide et non expiré, celui-ci remplace le fallback ; en cas d’indisponibilité ou d’expiration, le fallback réapparaît.

Le fallback se trouve dans `src/lib/google-reviews-fallback.ts`. Il ne déclenche aucune collecte : aucun scraper, widget, tâche planifiée ou job récurrent n’est ajouté. Les libellés de visite sont ceux observés lors de la capture (« Visité en septembre » et « Visité en août »), sans conversion en dates relatives. Retrait prévu : supprimer le fichier et rétablir un état initial vide dans `GoogleReviews` lorsque l’API est durablement opérationnelle.

Les avis sont présentés dans un carrousel horizontal continu, dans le même sens et avec le même rythme visuel que le bandeau d’outils qui le suit. Les cartes conservent leur contenu intégral et une hauteur stable. Le mouvement se met en pause au survol, au toucher et tant que le carrousel possède le focus. Les boutons précédent/suivant et les flèches du clavier permettent une navigation manuelle. Avec `prefers-reduced-motion: reduce`, les trois cartes sont affichées sans animation et sans duplication visible.

La demande d’accès a été envoyée à Google le 2026-09-08 pour le projet Cloud `amplixy`. L’API Business Information est activée, mais son quota observé est de 0 requête par minute : l’approbation reste en attente. Google annonce environ 7 à 10 jours ouvrés de traitement. Le compte gestionnaire a été identifié et la référence du dossier est conservée dans la note interne Amplixy. Après approbation, reprendre les étapes OAuth, découverte de la fiche et configuration runtime ci-dessous. Aucun scraper n’est déployé.

- Fiche fournie par Florian : https://g.page/r/CTDq7gUOttFsEAE/review
- Consultation sans ouvrir le formulaire de rédaction : https://www.google.com/maps?cid=7841248597574085168
- La fiche a été vérifiée dans Google Maps : nom Amplixy et site amplixy.com.
- Libellé : « Avis publiés sur Google ». Aucun badge de vérification n’est affiché.
- Présentation : la séparation avec les cas concrets utilise leur bordure existante ; le module n’ajoute pas de deuxième ligne au-dessus.

## Source et cycle

Google Business Profile API v4, avec une autorisation OAuth du gestionnaire de la fiche. L’API Places n’est pas utilisée pour figer les avis dans le build : ses règles restreignent le stockage du contenu.

`src/instrumentation.ts` initialise la synchronisation à chaque démarrage du serveur Node, donc à chaque déploiement. Cela se produit **au démarrage du conteneur**, pas dans l’image Docker : aucun secret ni avis n’est embarqué dans le build. Le site et ses pages restent statiques.

Le cache ne contient que trois avis, la moyenne globale et le nombre total fournis par Google. Il est en mémoire du processus, expire après 24 heures et est effacé par minuterie même sans visiteurs. Une visite ultérieure renouvelle les données après expiration. Aucun archivage Git, fichier, stockage navigateur ou cache HTTP n’est utilisé. Chaque instance de serveur possède son cache.

Le navigateur interroge uniquement `/api/google-reviews`, qui ne renvoie ni jeton ni métadonnée privée. Aucun script, widget ou avatar Google n’est chargé. Un clic sur le lien ouvre Google Maps.

Trois derniers avis par **date de modification**, sans tri selon la note. Texte original conservé, noms et dates attribués, note globale issue de Google (pas une moyenne des trois avis). Pas de `aggregateRating` ajouté au balisage de l’entreprise.

## Connexion requise

1. Utiliser un projet Google Cloud approuvé pour les API Business Profile. Google impose une demande d’accès si le projet n’est pas déjà approuvé ; cette approbation n’est pas automatique.
2. Activer les API nécessaires : My Business API v4 et My Business Business Information API. Account Management API permet de découvrir les comptes si leurs identifiants ne sont pas connus.
3. Créer ou réutiliser un client OAuth et faire autoriser le compte propriétaire/gestionnaire avec le scope `https://www.googleapis.com/auth/business.manage`, en accès hors ligne. Google ne fournit pas de scope de lecture seule pour cet endpoint ; **le connecteur n’effectue que des lectures**. L’autorisation du compte doit être consentie par son propriétaire.
4. Obtenir le nom interne `accounts/<id>/locations/<id>` en listant les comptes et leurs établissements. Il est distinct du CID public et ne doit pas être déduit du lien g.page.
5. Renseigner dans **Coolify → Amplixy-Prod → Environment Variables**, uniquement au runtime (`is_runtime=true`, `is_buildtime=false`) :
   - `GOOGLE_BUSINESS_CLIENT_ID`
   - `GOOGLE_BUSINESS_CLIENT_SECRET`
   - `GOOGLE_BUSINESS_REFRESH_TOKEN`
   - `GOOGLE_BUSINESS_LOCATION`
6. Redéployer. Les logs doivent afficher `[google-reviews] synchronized at server startup`. Vérifier `/api/google-reviews` puis le module public et comparer note, nombre d’avis et contenu avec Google.

Ne pas coller les secrets dans une conversation, le dépôt ou le vault. Un projet OAuth externe en mode test peut limiter la durée du refresh token ; vérifier son mode de publication avant exploitation durable.

## Échecs et reprise

- Configuration absente/incomplète : aucun appel externe, fallback ponctuel et lien vers Google, log explicite au démarrage.
- Chaque appel Google possède un délai limite de huit secondes. Les demandes simultanées partagent la même synchronisation.
- Erreur réseau, refus Google ou réponse invalide : aucun avis périmé affiché, retour au lien Google ; nouvelle tentative au plus tôt cinq minutes après. Seul un code d’erreur nettoyé est journalisé.
- Le nom de la fiche doit être Amplixy et son site amplixy.com/www.amplixy.com. Une autre fiche est refusée pour éviter la publication d’avis d’un tiers.
- Révocation : retirer les variables OAuth et redémarrer le conteneur, puis révoquer l’accès dans Google. Aucun historique local à purger.
- Demande de retrait : désactiver temporairement l’affichage en retirant la configuration et redémarrant ; traiter la demande avec l’auteur et la source avant réactivation. Les obligations d’information et d’opposition sont décrites dans la politique de confidentialité.

## Validation

Tests avec données **synthétiques uniquement** : absence d’accès, réponses invalides, avis de faible note conservés, moyenne globale, requêtes simultanées, expiration, erreurs nettoyées, refus d’une autre entreprise, nouveau chargement après redémarrage.

La validation sur de vrais avis reste à effectuer après connexion du compte. Une simple réponse `null` de l’API prouve le mode de repli, pas une synchronisation réussie.

## Sources officielles

- [API de lecture des avis](https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews/list)
- [Prérequis et demande d’accès](https://developers.google.com/my-business/content/prereqs)
- [OAuth Business Profile](https://developers.google.com/my-business/content/implement-oauth)
- [Règles Business Profile — cache limité à 30 jours maximum](https://developers.google.com/my-business/content/policies)
- [Règles Places — attribution et avis non vérifiés par Google](https://developers.google.com/maps/documentation/places/web-service/policies)
- [CNIL — réutilisation de données publiées sur Internet](https://www.cnil.fr/fr/recommandations-reutilisateurs-donnees-internet)
