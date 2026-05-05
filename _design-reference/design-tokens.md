# Design Tokens — Site Camille

## 🎨 Palette (CSS variables)

| Token   | Hex     | Usage                                      |
| ------- | ------- | ------------------------------------------ |
| --white | #FDFCF9 | Fond principal alterné, texte sur fond ink |
| --parch | #F5F0E8 | Fond principal beige parchemin             |
| --sand  | #EAE3D5 | Fond sections alternées, hover cartes      |
| --linen | #DDD5C4 | Bordures, séparateurs, texte décoratif     |
| --stone | #A89880 | Texte secondaire, sous-titres              |
| --bark  | #5C4F3D | Texte corps fort, listes                   |
| --ink   | #1A1410 | Titres, sections sombres, CTA principaux   |

**Règles** :

- Fonds clairs : alternance --white / --parch
- Texte : --ink (titres) / --stone (corps) / --bark (listes)
- Séparateurs : toujours --linen
- --stone jamais en fond, --ink uniquement pour sections sombres clés

## ✍️ Typographie

**Display** : Playfair Display (Google Fonts)

- Weights : 400, 700, 900
- Italic : 400, 700
- Usage : titres, accroches, italics décoratifs

**Body** : Instrument Sans (Google Fonts)

- Weights : 300, 400, 500
- Usage : corps de texte, navigation, formulaires

### Échelle typographique

| Token      | Police          | Size                       | Weight | Line-height | Letter-spacing |
| ---------- | --------------- | -------------------------- | ------ | ----------- | -------------- |
| Hero       | Playfair        | clamp(4rem, 9vw, 9.5rem)   | 900    | 0.9         | -0.03em        |
| H1 Section | Playfair        | clamp(2.4rem, 4.5vw, 4rem) | 700    | 1.05        | -0.025em       |
| H2 Carte   | Playfair        | 1.4rem                     | 700    | 1.1         | -0.015em       |
| H3 Pilier  | Playfair        | 1.2rem                     | 700    | 1.2         | —              |
| Body       | Instrument Sans | 0.95rem                    | 300    | 1.85        | —              |
| Eyebrow    | Instrument Sans | 0.62rem (UPPERCASE)        | 500    | —           | 0.22em         |
| Nav Links  | Instrument Sans | 0.73rem (UPPERCASE)        | 400    | —           | 0.13em         |
| Caption    | Instrument Sans | 0.78rem (italic)           | 300    | 1.6         | —              |

## 📏 Espacements

| Token | Usage                     |
| ----- | ------------------------- |
| 8px   | Gap minimal, icônes       |
| 16px  | Padding interne champs    |
| 24px  | Padding cartes compact    |
| 32px  | Gap interne sections      |
| 48px  | Padding cartes standard   |
| 52px  | Padding horizontal page   |
| 80px  | Gap grilles & colonnes    |
| 100px | Padding vertical sections |

## 📱 Breakpoints

| Device        | Width      | Layout       |
| ------------- | ---------- | ------------ |
| Mobile        | max 768px  | 1 colonne    |
| Tablette      | max 1024px | 1-2 colonnes |
| Desktop       | min 1025px | 2-3 colonnes |
| Container max | 1440px     | —            |

## 🎯 Boutons

- **Border-radius** : 0px (angles francs, identité du design)
- **Border width** : 1.5px solid
- **Transition** : `all .25s ease`
- **b-ink** : fond --ink, texte --white → hover : transparent + texte --ink
- **b-line** : transparent + border --linen → hover : border --bark + texte --ink
- **b-white** : fond --white sur sections sombres
- **b-ghost** : transparent + border opacity sur sections sombres

## 🎬 Animations

- **Hover** : `.25s ease`
- **Scroll reveal** : `.85s cubic-bezier(.4, 0, .2, 1)` + stagger 130ms
- **Reveal** : opacity 0→1 + translateY 28px→0
- **Ticker** : `translateX(-50%) 18s linear infinite`
- **Parallax** : `translateY(scroll × 0.3)` sur bandes photo

## 🖼️ Traitement images

- **Filtre par défaut** : `sepia(18%) contrast(1.05) saturate(.9)`
- **Filtre hover** : `sepia(5%) contrast(1.08)`
- **Transition** : `.4s ease`
- **Format** : WebP, max 800px de large, qualité 85
