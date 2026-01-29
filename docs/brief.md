# Project Brief: Refonte Contenu Site Amplixy

## Executive Summary

**Projet :** Refonte du contenu du site web amplixy.com pour refléter le nouveau positionnement stratégique + ajout de nouvelles fonctionnalités.

**Problème adressé :** Le site actuel positionne AMPLIXY sur le marketing/visibilité, alors que l'offre réelle porte sur l'organisation digitale interne des petites entreprises.

**Cible :** Dirigeants de TPE-PME (1-50 personnes) dans les services B2B, submergés par leurs outils digitaux.

**Proposition de valeur :** AMPLIXY organise le système de travail digital pour que les dirigeants puissent se concentrer sur leur business, pas sur leurs outils.

**Périmètre du projet :**
- Refonte complète du contenu (textes, messages, ton)
- Ajout d'une section "Nos Réussites" (cas d'usage anonymisés + exemples publics)
- Ajout d'une section "Fondateur"
- Intégration d'un calendrier de réservation Cal.com (embed)

---

## Problem Statement

**État actuel du marché :**
Les dirigeants de TPE-PME accumulent les outils digitaux (Slack, Notion, Trello, Drive, Monday, emails...) sans stratégie cohérente. Chaque nouvel outil promettait de "gagner du temps", mais l'ensemble crée :

- **Surcharge cognitive** : où est l'info ? dans quel outil ?
- **Dépendance au dirigeant** : lui seul sait "comment ça marche"
- **Perte de temps quotidienne** : chercher, dupliquer, ressaisir
- **Friction d'équipe** : chacun utilise les outils différemment

**Pourquoi les solutions existantes échouent :**
- Les consultants IT vendent plus d'outils
- Les agences digitales se focalisent sur la visibilité externe
- Les formations enseignent des outils isolés, pas un système cohérent

**Urgence :** Plus une entreprise grandit avec un système désorganisé, plus la dette organisationnelle s'accumule.

---

## Proposed Solution

**Approche AMPLIXY en 4 étapes :**

1. **Audit** — Analyse de l'organisation digitale existante (outils, usages, flux d'information)
2. **Simplification** — Suppression des outils inutiles, élimination des doublons
3. **Structuration** — Mise en place d'un système cohérent avec des règles d'usage claires
4. **Accompagnement** — Formation et suivi pour que le système soit réellement adopté

**Ce qui différencie AMPLIXY :**
- Pas de vente d'outils — L'objectif est de réduire, pas d'ajouter
- Focus interne — On travaille l'efficacité, pas la visibilité
- Missions courtes et cadrées — Résultat opérationnel concret
- Adapté aux TPE-PME — Méthodes pragmatiques

**Résultat attendu :** Un système digital où chaque outil a sa place, chaque collaborateur sait comment travailler, et le dirigeant peut déléguer sereinement.

---

## Target Users

### Segment principal : Le dirigeant de TPE-PME B2B débordé

| Critère | Description |
|---------|-------------|
| **Profil** | Dirigeant, fondateur ou gérant de TPE-PME (1 à 50 personnes) |
| **Secteurs** | Services B2B |
| **Situation** | A accumulé des outils au fil des années sans vision d'ensemble |
| **Douleurs** | Passe du temps à chercher l'info, doit tout contrôler, difficile de déléguer |
| **Déclencheur** | Recrutement, croissance, burn-out, perte de temps devenue insupportable |
| **Objectif** | Retrouver du temps pour le business, pas pour la gestion des outils |

### Segment secondaire : Le responsable opérations / office manager

| Critère | Description |
|---------|-------------|
| **Profil** | Bras droit du dirigeant, en charge de l'organisation interne |
| **Situation** | Subit le système en place, voit les dysfonctionnements au quotidien |
| **Rôle** | Prescripteur interne, identifie le besoin et convainc le dirigeant |

---

## Goals & Success Metrics

**Objectifs business du site :**
- Générer des prises de RDV qualifiées via Cal.com
- Communiquer clairement le nouveau positionnement
- Établir la crédibilité via cas d'usage et exemples concrets

**Objectifs utilisateur :**
- Comprendre en moins de 10 secondes ce que fait AMPLIXY
- S'identifier à au moins un cas d'usage présenté
- Pouvoir réserver un appel sans friction

**KPIs suggérés :**

| KPI | Cible |
|-----|-------|
| Taux de rebond page d'accueil | < 50% |
| Temps moyen sur site | > 1 min 30 |
| Clics sur le calendrier Cal.com | À mesurer |
| RDV réservés / mois | À définir |
| Taux de conversion visiteur → RDV | > 2% |

---

## MVP Scope

### Core Features (Must Have)

| Élément | Description |
|---------|-------------|
| **Hero refondu** | Nouveau message clair : organisation digitale, pas marketing |
| **Section "Le Problème"** | Les douleurs des dirigeants |
| **Section "La Solution"** | Les 4 étapes (Audit → Simplification → Structuration → Accompagnement) |
| **Section "Ce que nous ne faisons pas"** | Positionnement clair (pas marketing, pas vente d'outils) |
| **Section "Nos Réussites"** | Cas anonymisés + exemples publics d'outils en prod |
| **Section "Le Fondateur"** | Présentation (parcours tech + expérience terrain + valeurs) |
| **Section "Pour qui ?"** | Cible et déclencheurs |
| **Calendrier Cal.com** | Embed inline |
| **FAQ mise à jour** | Questions adaptées au nouveau positionnement |

### Out of Scope

- Blog / articles
- Espace client
- Tarification détaillée
- Refonte graphique majeure (on garde le design existant)
- SEO technique poussé

### Critère de succès MVP

Un visiteur comprend ce que fait AMPLIXY, découvre qui est derrière, voit des preuves concrètes, et réserve un appel.

---

## Technical Considerations

**Stack existante (conservée) :**
- Framework : Next.js 15 (App Router) + React 19
- Styling : Tailwind CSS avec palette custom
- Animations : Framer Motion
- Analytics : Umami (self-hosted)
- Déploiement : Docker sur Railway

**Ajouts techniques :**

| Élément | Solution |
|---------|----------|
| Calendrier Cal.com | Embed iframe inline |
| Section "Nos Réussites" | Composant React (cards) |
| Section "Fondateur" | Composant simple (image + texte) |

---

## Constraints & Assumptions

**Contraintes :**
- Développement en interne (stack existante)
- Conserver le design actuel (couleurs, typo, style)
- Site single-page

**Hypothèses :**
- Les cas d'usage anonymisés seront rédigés à partir d'expériences réelles
- Les exemples publics existent et peuvent être montrés
- Le compte Cal.com sera configuré
- Le contenu fondateur (bio, photo) sera fourni

**Workflow contenu :**
1. V1 rédigée par Claude (fait)
2. Transmission au copywriter pour affinage

---

## Risks & Open Questions

**Risques identifiés :**

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Message pas assez clair | Visiteurs confus | Tester le hero sur 5 personnes cibles |
| Cas d'usage trop génériques | Pas d'identification | S'appuyer sur des situations réelles |
| Section fondateur trop longue | Perd l'attention | Garder court, orienté valeur client |
| Cal.com embed lent | Mauvaise UX | Tester la perf |

**Questions ouvertes :**
- URL Cal.com exacte ?
- Photo du fondateur : portrait pro ou casual ?
- Combien de cas d'usage exactement ?
- Exemples publics : captures ? liens ? vidéos ?

---

## Next Steps

1. ✅ Brief projet validé
2. ✅ V1 contenus rédigée et intégrée
3. ⏳ Transmettre au copywriter pour affinage du ton
4. ⏳ Préparer les assets : photo fondateur, captures exemples publics
5. ⏳ Créer/configurer le compte Cal.com
6. ⏳ Finaliser les contenus après retour copywriter
7. ⏳ Intégrer le vrai embed Cal.com
8. ⏳ Déployer et mesurer

---

## Éléments à compléter par le copywriter

### Section Fondateur
Les placeholders suivants doivent être remplacés :
- `[Prénom Nom]` → Nom du fondateur
- `[Parcours tech]` → Expérience technique, formations, certifications
- `[Expérience terrain]` → Années d'expérience, types d'entreprises accompagnées
- `[Valeurs]` → Ce qui anime le fondateur, sa vision

### Section "Nos Réussites"
- Ajouter les vraies captures d'écran des exemples publics
- Valider/affiner les 3 cas d'usage anonymisés

### Cal.com
- Remplacer le placeholder par le vrai code embed Cal.com

---

*Brief généré le 29/01/2026*
