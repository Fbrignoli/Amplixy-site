---
target: refonte homepage Amplixy
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-08-17T10-16-11Z
slug: src-app-page-tsx
---
Method: dual-agent (A: amplixy_design_review · B: amplixy_detector)

## Design Health Score

| # | Heuristique | Score | Point clé |
|---|---|---:|---|
| 1 | Visibilité du statut | 3/4 | États interactifs présents, destinations externes peu explicites. |
| 2 | Correspondance au monde réel | 3/4 | Douleurs concrètes, mais l’outil reste abstrait sans cas métier. |
| 3 | Contrôle et liberté | 2/4 | Le menu mobile annoncé modal ne couvre pas réellement la page. |
| 4 | Cohérence et standards | 3/4 | Cohérence locale, mais mêmes lignes pour des destinations différentes. |
| 5 | Prévention des erreurs | 3/4 | Peu d’actions risquées, superposition mobile ambiguë. |
| 6 | Reconnaissance plutôt que rappel | 3/4 | CTA visibles, offre centrale expliquée trop tard. |
| 7 | Flexibilité et efficacité | 3/4 | Rendez-vous, téléphone et ancrages disponibles. |
| 8 | Esthétique et minimalisme | 2/4 | La preuve web surdimensionnée écrase le vrai positionnement. |
| 9 | Récupération d’erreurs | 2/4 | Pas d’état propre aux destinations externes. |
| 10 | Aide et documentation | 2/4 | Contact humain clair, peu de réponses sur le périmètre et les cas outils. |
| **Total** | | **26/40** | **Acceptable — refonte stratégique nécessaire** |

## Anti-Patterns Verdict

**LLM assessment :** apparence IA moyenne à forte (6/10). Fraunces + Inter, hero serif éditorial, kicker uppercase, bleu saturé, boutons pilules, grandes cartes arrondies, processus numéroté sur bande noire et CTA final en aplat forment une grammaire de landing 2026 très reconnaissable. Les vraies captures et le ton direct évitent néanmoins le template totalement générique.

**Deterministic scan :** 0 finding sur `src/app/page.tsx`, les composants de la homepage et le dossier `src`. Aucun faux positif. Le détecteur ne couvre pas le défaut de positionnement ni le problème de contexte d’empilement mobile.

**Visual evidence :** tests navigateur à 1280 px et 390 px sans débordement horizontal. Aucune overlay utilisateur : l’API d’évaluation était en lecture seule et l’injection a été refusée. Un warning Next signale l’image LCP `vioncouverture.webp` sans priorité.

## Overall Impression

La page est propre et crédible localement, mais elle raconte la mauvaise histoire. Son pic mémorable est « trois sites livrés », alors que la promesse à ancrer est « Amplixy construit l’outil qui manque à mon activité ».

## What’s Working

1. Le hero part de douleurs quotidiennes plutôt que de technologies.
2. Le portrait, le téléphone et la responsabilité personnelle rassurent.
3. La base accessibilité est sérieuse : titres, skip-link, focus, zones tactiles, reduced motion et contrastes AA.

## Priority Issues

### [P1] Amplixy est perçu comme une agence web

Sur mobile, le hero occupe environ 782 px puis la preuve web 1 863 px. « Ce que je construis » ne commence qu’à 2 709 px, après 53 % du document. Les trois seules preuves sont des sites, le CTA secondaire du hero les met en avant et la méthode conclut par « mise en ligne ».

**Fix :** faire de l’outil adapté au business la proposition centrale. Sites, applications et automatisations deviennent des formes possibles d’une seule offre. Les sites restent des preuves secondaires.

**Suggested command :** `/impeccable shape`, puis `/impeccable polish`.

### [P1] Le menu mobile n’est pas réellement modal

Après défilement à 500 × 844 px, `.menu-sheet` est calculée à 500 × 64 px malgré `position: fixed; inset: 0`. Le contenu déborde et la thumb-bar reste au-dessus. Le `backdrop-filter` du header crée le mauvais contexte de positionnement.

**Fix :** sortir le panneau du contexte du header ou supprimer ce contexte, garantir la couverture du viewport et masquer la thumb-bar quand le menu est ouvert.

**Suggested command :** `/impeccable harden`.

### [P2] Les preuves montrent un livrable, pas l’effet métier

Les cartes prouvent que des sites existent, pas qu’Amplixy sait observer un processus et construire un outil opérationnel.

**Fix :** introduire des situations métier et un schéma de transformation avant le portfolio.

**Suggested command :** `/impeccable clarify`.

### [P2] L’identité n’est pas propriétaire

Sans le logo, la combinaison serif éditoriale, bleu, pilules et cartes pourrait appartenir à de nombreux studios.

**Fix :** revenir au système prévu dans la fiche projet — Geist, encre, pierre, orange sécurité — et employer un langage de plan de fabrication et de flux métier.

**Suggested command :** `/impeccable bolder`.

### [P2] Le récit se fragmente vers Firaxy et florianbrignoli.fr

Des lignes de même apparence ouvrent des sites différents sans préparer le visiteur.

**Fix :** ne pas organiser l’offre en trois destinations ; garder un récit unique sur Amplixy et réserver les liens externes aux preuves secondaires clairement signalées.

**Suggested command :** `/impeccable distill`.

## Persona Red Flags

**Jordan (première visite) :** classe Amplixy comme prestataire de sites parce que le premier élément concret et la plus grande section de preuve sont exclusivement web.

**Riley (test méthodique) :** relève la contradiction entre promesse large et preuves web, le vocabulaire « mise en ligne », les destinations externes hétérogènes et le faux modal mobile.

**Casey (mobile distrait) :** doit parcourir 2 709 px avant de comprendre l’offre et rencontre une superposition menu/portfolio/thumb-bar au milieu de la page.

## Minor Observations

- Le portrait de 44 px est trop petit sur desktop pour incarner réellement la marque.
- Les grandes zones blanches renforcent le registre studio éditorial.
- La numérotation de la méthode est légitime car elle décrit une vraie séquence.
- Ajouter la priorité de chargement à la première image si elle reste LCP.

## Questions to Consider

- Si le visiteur ne retient qu’une phrase, doit-il dire « Amplixy fait de beaux sites » ou « Amplixy construit l’outil qui manque à mon activité » ?
- Pourquoi les preuves racontent-elles trois fois le web alors que la solution peut prendre toute forme utile ?
- Quelle preuve montrerait qu’Amplixy comprend un métier avant d’écrire du code ?
