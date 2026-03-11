# greenbuilt-website — Project Plan

_Last updated: 2026-03-11_

## Overview
A static HTML/CSS/JS marketing website for Green Built, a geothermal and traditional HVAC company serving the Intermountain West. The site targets homeowners and contractors, educating both audiences and driving them toward a central project intake form as the primary conversion goal. Deployed on Vercel, forms via Formspree.

## Tech Stack
- **Frontend**: Static HTML, CSS, vanilla JS — no build tools
- **Hosting**: Vercel (auto-deploy from main)
- **Forms**: Formspree (free tier)
- **Branding**: Green Built logo in `../Branding/`, site images in `../Site Images/`
- **Content source**: HVAC service docs in `../Docs/INFO/` (11 .docx files)

## Site Structure

| Page | File | Audience |
|---|---|---|
| Homepage | `index.html` | Both |
| Geothermal HVAC | `geothermal/index.html` | Homeowners |
| Traditional HVAC | `traditional/index.html` | Homeowners |
| Drilling | `drilling/index.html` | Both |
| Design Services | `design-services/index.html` | Both |
| Work With Us | `contractors/index.html` | Contractors |
| Contractor Preferences | `contractors/preferences/index.html` | Contractors |
| Project Intake | `start/index.html` | Both |

## Architecture
- Each page in its own folder for clean Vercel URLs (`/geothermal`, `/start`, etc.)
- Shared `styles.css` and `nav.js` across all pages
- No CMS — all content is baked into HTML
- Formspree endpoint handles both forms (project intake + contractor preferences)

## Phases

### Phase 1 — Foundation
- [ ] Set up folder structure and shared assets (CSS, nav, footer)
- [ ] Establish design system (typography, colors, components)
- [ ] Build homepage (`index.html`)
- [ ] Build project intake form (`/start`)

### Phase 2 — Service Pages
- [ ] Geothermal HVAC page
- [ ] Traditional HVAC page (with comparison table)
- [ ] Drilling page
- [ ] Design Services page

### Phase 3 — Contractor Section
- [ ] Work With Us page (`/contractors`)
- [ ] Contractor Preferences form (`/contractors/preferences`)

### Phase 4 — Polish & Launch
- [ ] Mobile responsiveness audit
- [ ] Copy review using INFO docs
- [ ] Vercel deployment + domain setup
- [ ] Formspree form endpoints wired up

## Key Decisions
| Date | Decision | Reason |
|------|----------|--------|
| 2026-03-10 | Design approved | See `../2026-03-10-green-built-website-design.md` |
| 2026-03-10 | Dual nav CTAs (`Start a Project` + `Work With Us`) | Solves two-audience problem without separate landing pages |
| 2026-03-10 | Traditional HVAC page is non-dismissive | Green Built installs both; honest comparison builds trust |
| 2026-03-10 | Contractor section is prominent | Differentiator — competitors ignore this audience |
| 2026-03-11 | Project scaffolded | Initial setup |

## Content Sources
- `../Docs/INFO/` — 11 HVAC topic docs for copy (Heat Pump, Geothermal, Mini Split, Duct Design, etc.)
- `../Branding/` — Logo files (189654 GBC Logo-01.png, -02.png)
- `../Site Images/` — 8 job site photos for hero/gallery use
- `../2026-03-10-green-built-website-design.md` — Full page-by-page design spec (approved)
