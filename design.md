# Romestead Guide — Style Reference
> Ancient ruins, flickering firelight, survival in a fallen Rome.

**Theme:** dark

Romestead Guide presents a dark, atmospheric aesthetic inspired by the game's setting — a fallen Roman civilization where the dead walk and the gods have gone silent. The interface evokes ancient stone, parchment, and flickering torchlight. Deep charcoal backgrounds contrast with warm amber and gold accents, creating a sense of mystery and exploration. Pixel-art decorative elements nod to the game's 2D pixel style.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian Black | `#0d0d0d` | `--color-obsidian` | Primary page background — deep darkness of the fallen world |
| Stone Dark | `#1a1a1a` | `--color-stone-dark` | Card backgrounds, elevated surfaces — weathered stone |
| Stone Medium | `#2a2a2a` | `--color-stone-medium` | Borders, dividers, secondary surfaces — cracked stone edges |
| Stone Light | `#3a3a3a` | `--color-stone-light` | Hover states, subtle highlights — lighter stone |
| Ash Gray | `#8a8a8a` | `--color-ash` | Secondary text, muted content — ash and dust |
| Parchment | `#d4c5a9` | `--color-parchment` | Primary text — aged parchment scrolls |
| Parchment Light | `#e8dcc8` | `--color-parchment-light` | Headings, important text — fresh parchment |
| Ember Orange | `#e67e22` | `--color-ember` | Primary accent, CTAs, active states — glowing embers |
| Ember Dark | `#c0631a` | `--color-ember-dark` | Hover state for ember elements — dying coals |
| Gold | `#f1c40f` | `--color-gold` | Highlights, rare items, special callouts — Roman gold |
| Blood Red | `#c0392b` | `--color-blood` | Danger, combat, warnings — spilled blood |
| Forest Green | `#27ae60` | `--color-forest` | Success, nature, farming — living growth |
| Spirit Blue | `#3498db` | `--color-spirit` | Magic, gods, mystical elements — divine energy |
| Shadow Purple | `#8e44ad` | `--color-shadow` | Rare/legendary items, undead — dark magic |

## Tokens — Typography

### Cinzel — Display typeface for headings and titles. Inspired by Roman inscriptions, it evokes ancient stone carvings and imperial grandeur. · `--font-cinzel`
- **Weights:** 400, 700, 900
- **Role:** Headings, titles, navigation labels, important UI text

### Inter — Body typeface for readable content. Clean and modern, providing excellent readability for wiki content and long-form text. · `--font-inter`
- **Weights:** 400, 500, 600, 700
- **Role:** Body text, descriptions, UI labels, wiki content

### Press Start 2P — Pixel accent font for decorative elements. Nods to the game's 2D pixel art style. · `--font-pixel`
- **Weights:** 400
- **Role:** Badges, tags, decorative accents, game-related labels

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.6 | — | `--text-body-sm` |
| body | 16px | 1.7 | — | `--text-body` |
| subheading | 18px | 1.5 | — | `--text-subheading` |
| heading-sm | 20px | 1.4 | — | `--text-heading-sm` |
| heading | 24px | 1.3 | 0.02em | `--text-heading` |
| heading-lg | 32px | 1.2 | 0.03em | `--text-heading-lg` |
| display-sm | 36px | 1.1 | 0.04em | `--text-display-sm` |
| display | 48px | 1.1 | 0.05em | `--text-display` |
| display-lg | 64px | 1.05 | 0.06em | `--text-display-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 4px |
| buttons | 2px |
| badges | 2px |
| inputs | 2px |
| default | 2px |

> Note: Sharp, angular corners reinforce the stone/ancient aesthetic. Avoid rounded corners.

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.3) 0px 2px 4px` | `--shadow-subtle` |
| medium | `rgba(0, 0, 0, 0.4) 0px 4px 8px` | `--shadow-medium` |
| strong | `rgba(0, 0, 0, 0.5) 0px 8px 16px` | `--shadow-strong` |
| glow-ember | `rgba(230, 126, 34, 0.3) 0px 0px 12px` | `--shadow-glow-ember` |
| glow-gold | `rgba(241, 196, 15, 0.2) 0px 0px 12px` | `--shadow-glow-gold` |

### Layout

- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 16px
- **Max content width:** 1200px

## Components

### Primary Action Button
**Role:** Main call-to-action button.

Ember Orange (#e67e22) background, Obsidian Black (#0d0d0d) text, 2px border-radius, 12px vertical padding, 24px horizontal padding. Cinzel font at 700 weight. Subtle glow effect on hover.

### Ghost Action Button
**Role:** Secondary or outlined actions.

Transparent background, Parchment (#d4c5a9) text, 2px border-radius, 10px vertical padding, 20px horizontal padding. 1px solid Stone Medium (#2a2a2a) border. Hover: Stone Dark (#1a1a1a) background.

### Content Card
**Role:** Information display card (wiki entries, guides).

Stone Dark (#1a1a1a) background, 4px border-radius, 24px padding. 1px solid Stone Medium (#2a2a2a) border. Subtle shadow on hover.

### Featured Card
**Role:** Highlighted content, important guides.

Stone Dark (#1a1a1a) background, 4px border-radius, 24px padding. 1px solid Ember Orange (#e67e22) border. Ember glow shadow.

### Item Card
**Role:** Game item display (weapons, resources, etc.).

Stone Dark (#1a1a1a) background, 4px border-radius, 16px padding. Centered content. Gold (#f1c40f) border for rare items. Blood Red (#c0392b) border for combat items.

### Pill Badge
**Role:** Categorization tags (item type, biome, etc.).

Stone Medium (#2a2a2a) background, Parchment (#d4c5a9) text, 2px border-radius, 4px vertical padding, 12px horizontal padding. Press Start 2P font at 10px.

### Navigation Item
**Role:** Sidebar or top navigation links.

Transparent background, Ash Gray (#8a8a8a) text. Hover: Parchment (#d4c5a9) text, Stone Dark (#1a1a1a) background. Active: Ember Orange (#e67e22) text, left border accent.

### Search Input
**Role:** Wiki search functionality.

Stone Dark (#1a1a1a) background, Parchment (#d4c5a9) text, 2px border-radius, 12px padding. 1px solid Stone Medium (#2a2a2a) border. Focus: Ember Orange (#e67e22) border.

### Table
**Role:** Data display for item stats, crafting recipes.

Stone Dark (#1a1a1a) background. Header: Stone Medium (#2a2a2a) background, Parchment Light (#e8dcc8) text. Rows: alternating Stone Dark (#1a1a1a) and slightly lighter. Borders: Stone Medium (#2a2a2a).

## Do's and Don'ts

### Do
- Use Ember Orange (#e67e22) for all primary calls-to-action and important interactive elements.
- Apply warm, atmospheric shadows that evoke torchlight and depth.
- Use Cinzel for all headings to maintain the ancient Roman aesthetic.
- Use Press Start 2P sparingly for pixel-style accents (badges, tags, game labels).
- Maintain high contrast: Parchment (#d4c5a9) on Obsidian (#0d0d0d) for readability.
- Use Gold (#f1c40f) sparingly for rare/legendary highlights.
- Incorporate subtle texture overlays (stone, parchment) where appropriate.
- Use sharp 2px border-radius consistently — avoid rounded corners.

### Don't
- Avoid bright, saturated colors for large backgrounds; keep the dark, atmospheric tone.
- Do not use rounded corners (8px+); they break the ancient stone aesthetic.
- Never use pure white (#ffffff) for text; use Parchment (#d4c5a9) or Parchment Light (#e8dcc8).
- Avoid modern gradients; use solid colors or very subtle gradients only.
- Do not use light themes; the dark aesthetic is core to the brand.
- Refrain from using too many accent colors; Ember and Gold should dominate.
- Avoid thin fonts; use 500+ weight for body text readability.

## Imagery

The design system uses pixel art and ancient Roman-inspired imagery. Icons should be simple, monochromatic line icons with a slightly rough/hand-drawn quality. Decorative elements can include:
- Pixel art borders and dividers
- Roman-inspired geometric patterns (meanders, laurels)
- Subtle stone/parchment textures
- Torch/fire motifs for accent lighting
- Shield and sword silhouettes for combat sections
- Wheat and plant motifs for farming sections

Photography from the game (screenshots) can be used for hero sections and feature showcases, with a slight dark overlay to maintain atmospheric consistency.

## Layout

The page structure uses a dark, full-bleed layout with a fixed sidebar navigation for wiki content. The main content area is centered with a max-width of 1200px. 

**Homepage:** Full-width hero with game screenshot background, dark overlay, and large Cinzel heading. Feature cards below in a grid.

**Wiki Pages:** Two-column layout with sticky sidebar navigation (left) and scrollable content (right). Breadcrumb navigation at top.

**Item/Guide Pages:** Single column with table of contents sidebar. Related items grid at bottom.

Navigation is a dark top bar with the game logo, main sections, and search. Sidebar navigation uses collapsible sections for wiki categories.

## Agent Prompt Guide

Quick Color Reference:
text: #d4c5a9 (parchment)
text-secondary: #8a8a8a (ash)
background: #0d0d0d (obsidian)
surface: #1a1a1a (stone-dark)
border: #2a2a2a (stone-medium)
accent: #e67e22 (ember)
highlight: #f1c40f (gold)
danger: #c0392b (blood)
success: #27ae60 (forest)
magic: #3498db (spirit)

Example Component Prompts:
Create a Primary Action Button: #e67e22 background, #0d0d0d text, 2px radius, 12px 24px padding. Cinzel font 700 weight. Hover: #c0631a background with ember glow.

Create a wiki content card: #1a1a1a background, 4px radius, 24px padding, 1px solid #2a2a2a border. Title in Cinzel 24px #e8dcc8. Body text in Inter 16px #d4c5a9.

Create an item badge: #2a2a2a background, #d4c5a9 text, 2px radius, 4px 12px padding. Press Start 2P font at 10px. Use for item categories like "Weapon", "Resource", "Building".

Create a data table: #1a1a1a background. Header row #2a2a2a background, #e8dcc8 text, Inter 600 weight. Body rows alternating #1a1a1a/#1f1f1f. Cell padding 12px. Borders #2a2a2a.

Create a navigation sidebar: #0d0d0d background. Section headers Cinzel 14px #8a8a8a uppercase. Links Inter 14px #8a8a8a, hover #d4c5a9 with #1a1a1a background. Active: #e67e22 text with left border.


## Similar Brands

- **IGN Wiki** — Dark theme game wiki with clear content hierarchy and navigation.
- **Fextralife** — Dark, atmospheric game wiki with sidebar navigation and item databases.
- **Minecraft Wiki** — Comprehensive game wiki with item cards, crafting tables, and guides.
- **Terraria Wiki** — Pixel-art game wiki with item categories and detailed guides.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #0d0d0d;
  --color-stone-dark: #1a1a1a;
  --color-stone-medium: #2a2a2a;
  --color-stone-light: #3a3a3a;
  --color-ash: #8a8a8a;
  --color-parchment: #d4c5a9;
  --color-parchment-light: #e8dcc8;
  --color-ember: #e67e22;
  --color-ember-dark: #c0631a;
  --color-gold: #f1c40f;
  --color-blood: #c0392b;
  --color-forest: #27ae60;
  --color-spirit: #3498db;
  --color-shadow: #8e44ad;

  /* Typography — Font Families */
  --font-cinzel: 'Cinzel', 'Times New Roman', serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-pixel: 'Press Start 2P', monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.6;
  --text-body: 16px;
  --leading-body: 1.7;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --tracking-heading: 0.02em;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0.03em;
  --text-display-sm: 36px;
  --leading-display-sm: 1.1;
  --tracking-display-sm: 0.04em;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: 0.05em;
  --text-display-lg: 64px;
  --leading-display-lg: 1.05;
  --tracking-display-lg: 0.06em;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Layout */
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 16px;
  --max-content-width: 1200px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-full: 100px;

  /* Named Radii */
  --radius-cards: 4px;
  --radius-buttons: 2px;
  --radius-badges: 2px;
  --radius-inputs: 2px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.3) 0px 2px 4px;
  --shadow-medium: rgba(0, 0, 0, 0.4) 0px 4px 8px;
  --shadow-strong: rgba(0, 0, 0, 0.5) 0px 8px 16px;
  --shadow-glow-ember: rgba(230, 126, 34, 0.3) 0px 0px 12px;
  --shadow-glow-gold: rgba(241, 196, 15, 0.2) 0px 0px 12px;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #0d0d0d;
  --color-stone-dark: #1a1a1a;
  --color-stone-medium: #2a2a2a;
  --color-stone-light: #3a3a3a;
  --color-ash: #8a8a8a;
  --color-parchment: #d4c5a9;
  --color-parchment-light: #e8dcc8;
  --color-ember: #e67e22;
  --color-ember-dark: #c0631a;
  --color-gold: #f1c40f;
  --color-blood: #c0392b;
  --color-forest: #27ae60;
  --color-spirit: #3498db;
  --color-shadow: #8e44ad;

  /* Typography */
  --font-cinzel: 'Cinzel', 'Times New Roman', serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-pixel: 'Press Start 2P', monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.6;
  --text-body: 16px;
  --leading-body: 1.7;
  --text-subheading: 18px;
  --leading-subheading: 1.5;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --text-heading: 24px;
  --leading-heading: 1.3;
  --tracking-heading: 0.02em;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: 0.03em;
  --text-display-sm: 36px;
  --leading-display-sm: 1.1;
  --tracking-display-sm: 0.04em;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: 0.05em;
  --text-display-lg: 64px;
  --leading-display-lg: 1.05;
  --tracking-display-lg: 0.06em;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-full: 100px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.3) 0px 2px 4px;
  --shadow-medium: rgba(0, 0, 0, 0.4) 0px 4px 8px;
  --shadow-strong: rgba(0, 0, 0, 0.5) 0px 8px 16px;
  --shadow-glow-ember: rgba(230, 126, 34, 0.3) 0px 0px 12px;
  --shadow-glow-gold: rgba(241, 196, 15, 0.2) 0px 0px 12px;
}
```
