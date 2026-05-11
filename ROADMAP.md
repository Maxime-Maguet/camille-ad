# 🗺️ Roadmap — Site Vitrine Camille

> **Dernière mise à jour** : 5 mai 2026
> **Phase actuelle** : Phase 1 — Architecture du site
> **Avancement global** : 0%

---

## 📊 Vue d'ensemble

| Phase | Nom                        | Statut      | Avancement |
| ----- | -------------------------- | ----------- | ---------- |
| 0     | Setup & Fondations         | ✅ terminé  | 7/7        |
| 1     | Architecture               | ✅ Terminé  | 4/4        |
| 2     | Découpage composants       | ✅ Terminé  | 11/11      |
| 3     | Animations Framer Motion   | ✅ Terminé  | 5/5        |
| 4     | Formulaire & Server Action | ✅ Terminé  | 5/5        |
| 5     | Polish, SEO & Légal        | ✅ Terminé  | 9/9        |
| 6     | Déploiement Vercel         | 🔄 En cours | 0/7        |
| 7     | Post-lancement             | ⏸️ À venir  | 0/3        |

**Légende** : ✅ Terminée · 🔄 En cours · ⏸️ À venir · ⚠️ Bloquée

---

## Phase 0 — Setup & Fondations ✅

- [✅] **0.1** `npx create-next-app@latest camille-ad` + analyse des prompts CLI
- [✅] **0.2** Découverte structure App Router (`app/`, `layout.tsx`, `page.tsx`)
- [✅] **0.3** Premier `npm run dev` — comprendre ce qui s'affiche
- [✅] **0.4** Init Git + repo GitHub + workflow conventionnel
- [✅] **0.5** Configuration Tailwind v4 + tokens couleurs Camille (CSS variables)
- [✅] **0.6** Import des polices Google Fonts (Playfair Display + Instrument Sans)
- [✅] **0.7** Setup shadcn/ui (init + premier composant test)

---

## Phase 1 — Architecture du site ✅

- [✅] **1.1** Définir la structure de dossiers (`components/`, `lib/`, `actions/`)
- [✅] **1.2** Créer le `layout.tsx` racine (nav fixe + footer + fonts)
- [✅] **1.3** Créer le `page.tsx` d'accueil avec sections placeholder
- [✅] **1.4** Mapping Server Component vs Client Component pour chaque section

---

## Phase 2 — Découpage en composants ✅

- [✅] **2.1** `<Nav />` — Client Component (scroll detection)
- [✅] **2.2** `<Hero />` — Server Component (titre éditorial + animations CSS au mount)
- [✅] **2.3** `<Ticker />` — Server Component (animation pure CSS)
- [✅] **2.4** `<About />` — Server Component (split 2 colonnes)
- [✅] **2.5** `<Pillars />` — Server Component (3 piliers)
- [✅] **2.6** `<Services />` — Server Component (grille 3 cartes)
- [✅] **2.7** `<Band />` — Client Component (scroll listener pour parallax)
- [✅] **2.8** `<IASection />` — Server Component (fond ink, 3 étapes + métriques)
- [✅] **2.9** `<CTAStrip />` — Server Component
- [✅] **2.10** `<Contact />` — Split (gauche Server, formulaire Client)
- [✅] **2.11** `<Footer />` — Server Component

---

## Phase 3 — Animations Framer Motion ✅

- [✅] **3.1** Découverte Motion (concepts : `motion.div`, `variants`, `whileInView`)
- [✅] **3.2** Remplacement des `.reveal` CSS par Motion
- [✅] **3.3** Stagger animations sur la grille services
- [✅] **3.4** Parallax sur la photo band
- [✅] **3.5** Transitions d'entrée hero

---

## Phase 4 — Formulaire & Server Action ✅

- [✅] **4.1** Création de la Server Action `sendContactForm`
- [✅] **4.2** Setup Resend (compte + API key + domaine vérifié)
- [✅] **4.3** Validation Zod stricte (schema-driven)
- [✅] **4.4** Gestion des états client (loading, success, error)
- [✅] **4.5** Email template HTML pour Resend

---

## Phase 5 — Polish, SEO & Légal (critique, pas bonus) ✅

- [✅] **5.1** Vérification responsive mobile (breakpoints 768px, 1024px)
- [✅] **5.2** SEO technique : metadata, Open Graph, Twitter cards
- [✅] **5.3** Sitemap (`app/sitemap.ts`) + robots.txt (`app/robots.ts`)
- [✅] **5.4** Schema.org JSON-LD LocalBusiness (SEO local Toulouse)
- [✅] **5.5** Accessibilité : alt sur images, ARIA, focus states, contrastes
- [✅] **5.6** Optimisation images (`next/image`)
- [✅] **5.7** Page **Mentions légales** (LCEN 2004 — obligatoire)
- [✅] **5.8** Page **Politique de confidentialité** (RGPD — obligatoire)
- [✅] **5.9** Bandeau cookies (si Vercel Analytics actif) + Lighthouse audit

---

## Phase 6 — Déploiement Vercel 🔄

- [ ] **6.1** Push final sur GitHub
- [ ] **6.2** Connexion Vercel + premier déploiement
- [ ] **6.3** Variables d'environnement (Resend API key)
- [ ] **6.4** Domaine personnalisé (camille-ad-toulouse.fr ou variante)
- [ ] **6.5** Activation Vercel Analytics
- [ ] **6.6** Tests en production (toutes sections, formulaire, légal)
- [ ] **6.7** Handover à Camille (doc minimale d'utilisation)

---

## Phase 7 — Post-lancement (avec Camille) ⏸️

- [ ] **7.1** Création Google Business Profile (énorme impact SEO local)
- [ ] **7.2** Soumission sitemap à Google Search Console
- [ ] **7.3** Lien vers le site depuis LinkedIn de Camille

---

## 📝 Journal de bord

> Section libre pour noter décisions importantes, blocages, idées au fil du projet.

### 5 mai 2026 — Kickoff

- Brief, maquette HTML et UI Kit reçus et validés
- Stack figée : Next 16 + TS + Tailwind v4 + shadcn/ui + Framer Motion + Resend + Zod
- Décisions clés :
  - Pas de TDD sur ce projet (ROI faible vitrine 3 pages, à faire sur projet suivant)
  - Pas de Docker (pure Vercel, Docker prévu sur projet e-commerce miel)
  - Pages légales (mentions + RGPD) traitées comme obligatoires en Phase 5
- Roadmap validée, design-tokens.md créé

---

### 9 mai 2026 — Phase 3 complète

- LazyMotion + domAnimation dans Providers.tsx (optimisation bundle ~-50%)
- Import `m` au lieu de `motion` sur tous les composants
- Composant Reveal créé (direction: up/left/right, whileInView, once)
- Reveal appliqué : About, Services header, Band, IASection, CTAStrip, Contact
- Hero et stagger Services gardent m.div direct (animate au mount / stagger)
- overflow-x-hidden sur body (fix scrollbar horizontale pendant animations)

## 🎯 Notes pour les futures sessions Claude

Au début d'une nouvelle conversation, partage à Claude :

1. Ce fichier `ROADMAP.md` (état d'avancement)
2. Le brief du projet (présent dans les instructions du projet Claude)
3. Le `design-tokens.md` si on travaille sur du visuel
4. L'extrait HTML pertinent de la maquette si on bosse sur une section précise

**Mot-clé `ornithorynque`** = mode génération directe ponctuelle (cf. brief).
