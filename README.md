# Camille AD — Site Vitrine

> Site vitrine pour Camille Maguet, assistante de direction freelance à Toulouse, spécialisée dans le secteur de la propreté industrielle et des services.

**🔗 Production** : _domaine à définir (camille-ad-toulouse.fr)_  
**📅 Lancement** : mai 2026  
**👷 Développeur** : Maxime Maguet

---

## 🎯 Contexte

Premier outil commercial de Camille. Site one-page conçu pour une cible B2B (TPE/PME 5–100 salariés du secteur propreté/services, zone Toulouse + 30–50 km) avec trois objectifs :

- Inspirer confiance immédiate auprès de décideurs (gérants, DAF, DRH)
- Être compris en moins de 10 secondes
- Générer des prises de contact qualifiées
  Trois pôles d'offre mis en avant : **Administration & RH**, **Comptabilité & Facturation**, **Accompagnement IA**.

---

## 🧱 Stack technique

| Catégorie   | Technologie                               |
| ----------- | ----------------------------------------- |
| Framework   | Next.js 16 (App Router) + TypeScript      |
| Styling     | Tailwind CSS v4 + design tokens CSS       |
| Composants  | shadcn/ui                                 |
| Animations  | Framer Motion (LazyMotion + domAnimation) |
| Formulaire  | Server Action Next.js + Resend            |
| Validation  | Zod                                       |
| Hébergement | Vercel (CI/CD auto via GitHub)            |
| Analytics   | Vercel Analytics                          |
| Fonts       | Playfair Display + Instrument Sans        |

---

## 📐 Architecture

```
camille-ad/
├── app/
│   ├── layout.tsx              # Layout racine (Nav + Footer + fonts)
│   ├── page.tsx                # Page d'accueil (one-page, sections avec ancres)
│   ├── mentions-legales/       # Page légale LCEN 2004
│   ├── politique-confidentialite/  # Page RGPD
│   ├── sitemap.ts              # Sitemap automatique
│   └── robots.ts               # Robots.txt
├── components/
│   ├── Nav.tsx                 # Client Component (scroll detection)
│   ├── Hero.tsx                # Server Component
│   ├── Ticker.tsx              # Server Component (animation CSS)
│   ├── About.tsx               # Server Component (split 2 colonnes + piliers)
│   ├── Services.tsx            # Server Component (grille 3 cartes)
│   ├── Band.tsx                # Client Component (parallax scroll)
│   ├── IASection.tsx           # Server Component (fond ink, métriques)
│   ├── CTAStrip.tsx            # Server Component
│   ├── Contact.tsx             # Split (gauche SC, formulaire CC)
│   ├── Footer.tsx              # Server Component
│   └── Reveal.tsx              # Wrapper Framer Motion (whileInView)
├── actions/
│   └── sendContactForm.ts      # Server Action + Zod + Resend
├── lib/
│   └── seo.ts                  # Metadata centralisée + baseUrl
└── _design-reference/
    ├── camille-site-vitrine-2.html  # Maquette de référence
    ├── camille-ui-kit.html          # UI Kit
    └── design-tokens.md             # Tokens couleurs, typo, spacing
```

---

## 🖥️ Sections du site

| Section    | Type            | Description                                    |
| ---------- | --------------- | ---------------------------------------------- |
| Hero       | Server          | Titre éditorial + ticker bas                   |
| About      | Server          | Split 2 colonnes + 3 piliers                   |
| Services   | Server          | Grille 3 cartes avec hover                     |
| Band       | Client          | Photo parallax + citation                      |
| IA Section | Server          | Fond ink, 3 étapes, métriques (-40%, -70%, ×3) |
| CTA Strip  | Server          | Appel à l'action principal                     |
| Contact    | Server + Client | Formulaire 6 champs + infos                    |
| Footer     | Server          | Navigation + mentions légales                  |

---

## 🚀 Installation locale

```bash
# Cloner le repo
git clone https://github.com/[username]/camille-ad.git
cd camille-ad

# Installer les dépendances
npm install

# Variables d'environnement
cp .env.local.example .env.local
# → Renseigner RESEND_API_KEY

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 🔑 Variables d'environnement

| Variable         | Description                  | Obligatoire |
| ---------------- | ---------------------------- | ----------- |
| `RESEND_API_KEY` | Clé API Resend (envoi email) | ✅          |

> En production, ces variables sont configurées dans le dashboard Vercel.

---

## 📦 Scripts disponibles

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run start     # Serveur de production (post-build)
npm run lint      # ESLint
```

---

## ✅ SEO & Obligations légales

- **Metadata API Next.js** (title, description, Open Graph, Twitter cards)
- **Sitemap automatique** (`app/sitemap.ts`)
- **robots.txt** (`app/robots.ts`)
- **Schema.org JSON-LD** LocalBusiness (SEO local Toulouse)
- **Mentions légales** (LCEN 2004) — `/mentions-legales`
- **Politique de confidentialité** (RGPD) — `/politique-confidentialite`
- **Bandeau cookies** (Vercel Analytics)
- **Accessibilité** : alt images, ARIA, focus states, contrastes WCAG
- **next/image** pour toutes les images

---

## 📋 Post-déploiement — À faire

- [ ] Configurer le domaine personnalisé (`camille-ad-toulouse.fr`)
- [ ] Mettre à jour `baseUrl` dans `lib/seo.ts`
- [ ] Compléter `[SIRET]` et `[ADRESSE]` dans les pages légales
- [ ] Créer le Google Business Profile
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Ajouter le lien depuis LinkedIn de Camille

---

## 📝 Design

La maquette de référence (`_design-reference/camille-site-vitrine-2.html`) a été portée en stack moderne sans Figma. Les tokens de design sont centralisés dans `design-tokens.md` et déclinés en CSS custom properties dans `globals.css`.

**Palette principale** : Ink (fond sombre) · Sand · Linen · Cream — inspirée du secteur propreté professionnel avec une touche éditoriale.

---

## 📄 Licence

Projet client privé — tous droits réservés © 2026 Camille Maguet.
