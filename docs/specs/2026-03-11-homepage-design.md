# Green Built — Homepage Design Spec

**Date:** 2026-03-11
**Status:** Approved
**Project:** `greenbuilt-website`

---

## Overview

The Green Built homepage targets two audiences — homeowners and contractors — and drives both toward the project intake form (`/start`) as the primary conversion goal. The design is clean, light, and earthy, reflecting the eco-conscious brand identity.

---

## Brand & Color System

| Token | Value | Usage |
|---|---|---|
| `--green` | `#6DC033` | Primary CTAs, headings, accents |
| `--blue` | `#4A7DB5` | Secondary CTAs, tagline, nav links |
| `--green-dark` | `#2D5A1B` | Contractor callout background |
| `--bg` | `#F8FAF6` | Page background (very slightly green-tinted white) |
| `--ink` | `#1A1A1A` | Body text |
| `--muted` | `#6B7280` | Secondary/descriptive text |
| `--white` | `#FFFFFF` | Nav, cards, overlays |

**Typography:**
- Headlines: `Space Grotesk`, weight 700–800
- Body: `Inter`, weight 400–500
- Tagline: `Space Grotesk`, 1.4rem, weight 500, letter-spacing 0.04em

**Logo files:**
- Nav: `../Branding/189654 GBC Logo-02.png` (horizontal)
- Hero: `../Branding/189654 GBC Logo-01.png` (stacked)
- Both used at natural colors — no invert filter needed on light backgrounds

---

## Page Structure

### 1. Navigation

- White background bar, full width, sticky
- Left: Logo-02 (horizontal), height ~48px
- Center/Right: Nav links — Geothermal | Traditional | Drilling | Design Services | Contractors
- Far right: two CTAs — `Start a Project` (green solid button) | `Work With Us` (blue outline button)
- Mobile: hamburger menu, full-screen overlay

---

### 2. Hero

**Layout:** Full-viewport height, content centered vertically and horizontally

**Background:**
- Photo carousel cycling through 8 job site images (`../Site Images/`)
- Photos at 55% opacity
- White radial gradient overlay: full white at center (~40% radius), fully transparent at edges
- Page background `#F8FAF6` bleeds to edges so carousel transitions feel natural

**Carousel behavior:**
- Auto-advances every 5 seconds
- Crossfade transition, 0.8s duration
- No visible controls (dots/arrows) — purely ambient

**Content (top to bottom, centered):**
1. Logo-01 (stacked), natural colors, height ~180px (clamp: 120px–180px responsive)
2. Tagline: "Your Green Comfort Solution" — `Space Grotesk`, 1.4rem, weight 500, color `#4A7DB5`, letter-spacing 0.04em, margin-top 24px
3. CTA row (margin-top 32px):
   - `Get a Quote` → `/start` — green solid button (`#6DC033`), white text
   - `Work With Us` → `/contractors` — blue outline button (`#4A7DB5`)
   - Gap: 16px, stacked on mobile

---

### 3. The Problem

**Purpose:** Address the cost objection upfront. Position geothermal as the smart long-term choice.

**Layout:** Centered text block, max-width 680px, background `#F8FAF6`, generous vertical padding (80px)

**Content:**
- Eyebrow label (Space Mono, uppercase, muted): "THE SMARTER CHOICE"
- Headline: "Traditional HVAC is cheap to install. Expensive to own."
- Body (2–3 sentences): Traditional systems cost less upfront but run on electricity or gas at full cost forever. Geothermal flips the equation — higher install, dramatically lower operating costs, and a system that lasts 25+ years. The math favors geothermal.
- No CTA needed — leads naturally into the stat section below

---

### 4. Why Geothermal

**Layout:** 3-column stat row, white background, padding 80px vertical

**Stats (sourced from INFO docs + IRS):**
| Stat | Label |
|---|---|
| 2–3× more efficient | than traditional systems |
| $370–$500+ saved | average annual energy savings |
| 30% federal tax credit | on qualifying installations |

**Design:** Each stat has a large number/value in `#6DC033`, label in muted text below. Clean, no icons needed. Dividers between columns on desktop.

---

### 5. For Contractors

**Layout:** Full-width callout band

**Design:**
- Background: `#2D5A1B` (dark green)
- White text
- Headline: "We work with HVAC contractors across the Intermountain West."
- Subtext: "Referral partnerships and subcontract opportunities available."
- CTA: `See Contractor Opportunities` → `/contractors` (white outline button)

---

### 6. Explore Our Services

**Layout:** Alternating image/text rows. Full width, `#F8FAF6` background, 80px padding between rows.

**Pattern:**
- Row 1 (odd): Text left, image right
- Row 2 (even): Image left, text right
- Alternating continues for all 4 rows

**Per row:**
- Image: real job site photo from `../Site Images/`, rounded corners (8px), ~45% width on desktop
- Heading: service name, `Space Grotesk` 700, color `#6DC033`
- Description: 1–2 sentence teaser pulled from INFO docs
- CTA button: `Learn More` → subpage slug

**Services in order:**
1. Geothermal HVAC → `/geothermal`
2. Traditional HVAC → `/traditional`
3. Drilling → `/drilling`
4. Design Services → `/design-services`

**Photo assignment (to be confirmed once photos are reviewed):**
- Use the 8 available site images from `../Site Images/` — assign best-fitting photo to each service

---

### 7. Start Your Project CTA

**Layout:** Full-width band, centered content, white background, 80px padding

**Content:**
- Headline: "Ready to get started?"
- Subtext: "Tell us about your project. We'll reach out within 1 business day."
- Single CTA: `Start a Project` → `/start` — large green button

---

### 8. Footer

**Layout:** Dark background (`#1A1A1A`), white text, 3-column grid

**Columns:**
1. Logo-02 (inverted/white via `filter: brightness(0) invert(1)`) + tagline + brief service area text
2. Quick links: Geothermal | Traditional | Drilling | Design Services | Contractors | Start a Project
3. Contact info placeholder (phone, email, service area: UT, ID, NV, CO, WY)

**Bottom bar:** Copyright line, minimal

---

## Assets

**Source files** (outside project, must be copied into project before build):
| Asset | Source Path |
|---|---|
| Logo (stacked) | `../Branding/189654 GBC Logo-01.png` |
| Logo (horizontal) | `../Branding/189654 GBC Logo-02.png` |
| Site photos (8) | `../Site Images/P_202*.jpg` |

**In-project paths** (copy assets here, rename for clarity):
```
greenbuilt-website/
└── assets/
    ├── images/
    │   ├── logo-stacked.png       ← GBC Logo-01.png
    │   ├── logo-horizontal.png    ← GBC Logo-02.png
    │   ├── hero-01.jpg            ← P_20231213_103539.jpg
    │   ├── hero-02.jpg            ← P_20231213_103830.jpg
    │   ├── hero-03.jpg            ← P_20240208_152339.jpg
    │   ├── hero-04.jpg            ← P_20240424_153121.jpg
    │   ├── hero-05.jpg            ← P_20250527_125723.jpg
    │   ├── hero-06.jpg            ← P_20250529_124205.jpg
    │   ├── hero-07.jpg            ← P_20250529_143750.jpg
    │   └── hero-08.jpg            ← P_20250814_124945.jpg
    └── fonts/                     ← (Google Fonts via CDN, no local files needed)
```

All `<img src="">` and `background-image` references in HTML/CSS must use paths relative to the HTML file (e.g., `../assets/images/logo-stacked.png` from a subpage folder, `assets/images/logo-stacked.png` from root).

**Logo usage rules:**
- Nav + hero + anywhere on light backgrounds: natural colors, no filter
- Footer (dark background): `filter: brightness(0) invert(1)` to render white

---

## Service Card Copy

Content for the "Explore Our Services" alternating rows. No INFO doc exists for Geothermal or Drilling — copy provided here directly.

**Geothermal HVAC** → `/geothermal`
> "The earth beneath your home stays a constant 50–55°F year-round. Geothermal systems tap into that free energy to heat and cool your home at 2–3× the efficiency of traditional HVAC — with no combustion, no gas bill, and a lifespan that outlasts every other system on the market."

**Traditional HVAC** → `/traditional`
> "Sometimes geothermal isn't the right fit — and that's okay. We install and service high-efficiency traditional HVAC systems too. We'll give you an honest comparison and recommend what actually makes sense for your home, budget, and timeline."

**Drilling** → `/drilling`
> "Most geothermal companies sub out their drilling. We don't. Our in-house drilling crew handles every borehole and ground loop installation — which means better coordination, tighter quality control, and lower cost passed on to you."

**Design Services** → `/design-services`
> "The right system starts with the right design. We perform full Manual J load calculations, system sizing, and site assessments before any equipment is specified — ensuring your system performs exactly as designed for decades."

**Photo assignment for service rows:**
- Geothermal: `hero-05.jpg`
- Traditional: `hero-01.jpg`
- Drilling: `hero-03.jpg`
- Design Services: `hero-07.jpg`
(Remaining 4 photos reserved for hero carousel)

---

## Technical Notes

- Static HTML/CSS/JS — no build tools
- Each page in its own folder for clean Vercel URLs
- Shared `styles.css` and `nav.js` across all pages
- Carousel implemented in vanilla JS — no library needed
- **Formspree endpoint: BLOCKER** — need client email before `/start` form can go live. All `Get a Quote` / `Start a Project` CTAs link to `/start` which contains the form. Site can be built and deployed without this, but the form will not function until the endpoint is configured. Track in `tasks.md`.
- Deployed to Vercel from main branch

**Google Fonts import (add to `<head>` of every page):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@500;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**Mobile — alternating rows:**
On mobile (< 768px), all rows stack vertically: image on top, text below. The desktop left/right alternation collapses to a single column stack for all 4 rows.

---

## Out of Scope (Homepage)

- Blog / CMS
- User accounts
- Online scheduling
- Payment processing
- Financing section (placeholder reserved, content TBD from client)
