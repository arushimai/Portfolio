# Portfolio Redesign — Sharp Editorial + Feature Story
**Date:** 2026-06-25  
**Owner:** João (for Arushi Maisuria's portfolio)  
**Status:** Approved for implementation

---

## Overview

Redesign Arushi Maisuria's portfolio (v3 → v4) from a warm editorial base to a **sharp editorial magazine** aesthetic. The camera-based interactive landing stays intact. The portfolio that emerges from it becomes authoritative and visually unexpected — NYT Mag / Monocle aesthetic with one major layout break per section.

**Core insight:** The current design plays it safe — warm cream + coral reads as a stock template. The redesign keeps the warmth but replaces visual interest that came from color variety with visual interest that comes from **scale, type as design, and one dramatic dark section**.

---

## Design Foundation

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Section splash | Newsreader (Google Fonts) | Italic 400–600 | Very large: 120–200px for section anchors |
| Headings | Newsreader | 600 | Company names, school names |
| Body | DM Sans | 300–500 | All body text, captions |
| Labels / caps | DM Sans | 600 | 10px, letter-spacing 0.3em, uppercase |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
```

**Type scale:**
- Display: 120–200px (section anchors only)
- H1 (hero name): ~90px, Newsreader italic
- H2 (company/school names): 32px, DM Sans 600
- Body: 13–14px, DM Sans 300, line-height 1.7
- Labels: 10px, DM Sans 600, letter-spacing 0.3em, uppercase

### Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#FAF8F5` | Main background (warm off-white) |
| `--ink` | `#111111` | Near-black text |
| `--accent` | `oklch(52% 0.22 28)` | Terracotta — single accent, rules/labels |
| `--ink-mid` | `#6B6560` | Secondary text |
| `--surface-dark` | `#161310` | Experience section background |
| `--bg2` | `#F2EDE6` | Alternate section background |
| `--sage` | `oklch(66% 0.1 152)` | Education section only |

**Rule**: No multi-color variety. All visual interest comes from scale and layout contrast, not color. The accent is used only for: rule lines, category labels, and a few key dividers.

### Effects

- **Grain texture**: SVG noise filter at 3–5% opacity on all section backgrounds. Creates analog photography cohesion with the landing.
- **Hard offset shadows**: Used only on the polaroid photo. 8px/8px black, no blur — single neo-brutalist hardware reference.
- **Rule lines**: 1–2px solid `var(--accent)` or `var(--ink)` as structural editorial dividers. Not decorative.
- **Border radius**: 0px everywhere in the portfolio. Camera hardware (landing) keeps rounded corners.

---

## Camera Landing (minor evolution only)

The camera landing is preserved 1:1 with three small additions:

1. **Grain texture** on the radial gradient background (`filter: url(#grain)` at 4%)
2. **Landing label update**: `"ARUSHI MAISURIA — PORTFOLIO 2026"` in spaced caps with a thin rule before it
3. **LCD hud-shoot text**: Change from `"Tap to capture"` → `"→ CLICK TO OPEN"` (more editorial)

Transition animation (`#lcd-portal` expanding) stays identical.

---

## Hero Section

**Replaces**: coral left / white right 50/50 split layout  
**Background**: `#FAF8F5`, full-width, single canvas

### Layout

```
[Eyebrow label: "PORTFOLIO · 2026"]

ARUSHI              [Polaroid photo]
MAISURIA            [hard offset shadow]
──────────────
  amaisuria@...
  732-484-7611       Marketing & Communications ·
  New Jersey         Digital Strategy · Data Analytics
                     Broadcast Journalism

                     [short bio paragraph]
```

### Specs

- **Name**: Newsreader italic, `clamp(70px, 8vw, 110px)`, two lines, left column (~55% width)
- **Watermark**: Giant `AM` at 400px, Newsreader italic, `#111` at 3% opacity, absolutely positioned behind
- **Terracotta rule**: 2px `var(--accent)` rule below the name, 60px wide, left-aligned
- **Contact list**: small dots replaced with `─` thin dashes. 12px DM Sans 300
- **Right column**: polaroid container with `box-shadow: 8px 8px 0 #111111` (hard offset, no blur)
- **Scroll reveal**: name/left col animates `scale(0.96) → scale(1.0)` (not translateY). Right col fades in 200ms later.

---

## Experience Section

**The main layout break.** Background switches to `var(--surface-dark)` = `#161310`. All text white.

### Layout

Newspaper double-spread. Two equal columns separated by a 1px rule.

```
EXPERIENCE  ─────────────────────────────  ISSUE NO. 01
────────────────────────────────────────────────────────

01          ORANGETHEORY FITNESS   │  FORBES                 02
            MARKETING DIRECTOR     │  DIGITAL PRODUCTION INTERN
            ─────────────────────  │  ─────────────────────────
            Sept 2025 – Present    │  May – Aug 2024
            State College, PA      │  Jersey City, NJ
                                   │
            Designed weekly...     │  Produced written, video...
            Sourced and secured... │  Increased social media...
            Developed consumer...  │  Developed newsletter...
            Tracked campaign...    │  Supported development...
```

### Specs

- **Issue numbers** (`01`, `02`): Newsreader italic, **160px**, `oklch(100% 0 0 / 0.06)` — ghost-large, acts as visual anchor
- **Company name**: DM Sans 600, 28px, white, all-caps letter-spacing 0.05em
- **Role**: DM Sans 600, 10px, `var(--accent)` color (terracotta visible on dark), letter-spacing 0.3em, uppercase, with 1px rule underneath
- **Meta (dates/location)**: 11px DM Sans 300, `oklch(100% 0 0 / 0.45)`
- **Bullets**: 13px DM Sans 300, `oklch(100% 0 0 / 0.75)`, line-height 1.7, `text-align: justify` on desktop (≥768px), left-aligned on mobile
- **No bullet icons** — pure text columns, like a publication's body copy
- **Column divider**: 1px `oklch(100% 0 0 / 0.12)` vertical rule
- **Section label**: `EXPERIENCE` in 10px spaced caps top-left; `ISSUE NO. 01` top-right (editorial newspaper masthead reference)

**Scroll reveal**: Left column fades in first, right column 100ms later. Issue numbers scale in `0.94 → 1.0`.

If a 3rd+ experience entry exists, it straddles both columns below with a full-width divider above it.

---

## Skills Section

**Replaces**: 3-column chip grid  
**Background**: `#FAF8F5` (returns to warm white after dark Experience section — deliberate contrast rhythm)

### Layout

```
WHAT I KNOW
────────────────────────────────────────────────────────

"Strategy, data, and storytelling —
 across every channel that matters."

MARKETING & STRATEGY         PLATFORMS & TOOLS       TECHNICAL
──────────────────           ─────────────────       ─────────
Google Analytics · GA4       Figma · Canva            Python
Email Marketing              Adobe Creative Suite     SQL · Excel
Campaign Planning            Instagram · TikTok       Data Viz
Influencer Partnerships      MailChimp · HubSpot      Google Suite
```

### Specs

- **Pull quote**: Newsreader italic, 28–32px, `var(--ink)`, max-width 520px, no quotation marks visible
- **Category titles**: 10px DM Sans 600, letter-spacing 0.3em, uppercase, `var(--accent)`, with 1px rule below
- **Skill items**: 13px DM Sans 400, `var(--ink-mid)`, middle-dot `·` as separator within a category
- **Layout**: CSS grid, 3 columns on desktop, 1 on mobile
- **No chips, no borders, no background cards** — pure typographic layout

---

## Education Section

**Background**: Sage-toned `oklch(94% 0.025 152)` strip — warm green, signals section change

### Layout

```
EDUCATION

PENNSYLVANIA                 B.S. Communications
STATE                        Advertising & PR Track
UNIVERSITY                   Class of 2027
──────────────               ─────────────────────
                             Dean's List
                             Relevant coursework...

CERTIFICATIONS
─────────────────────────────────────────────────────
Google Analytics · HubSpot Inbound · Adobe Analytics · [more]
```

### Specs

- **School name**: Newsreader italic, `clamp(36px, 4vw, 56px)`, 3 lines stacked, left column
- **Left border accent**: 3px `var(--accent)` left border on school name column
- **Degree/details**: DM Sans 300, 14px, right column
- **Certs**: single-line horizontal list, middle-dot separated, 12px DM Sans 400, italic for cert names
- **No cert cards, no icons** — plain text list

---

## Organizations Section

**Replaces**: staggered white cards with top-border color accents  
**Background**: `#FAF8F5`

### Layout

Three orgs side-by-side in equal columns. Each column:

```
ORG NAME IN ALL CAPS
ROLE  ─────────────
Bullet text line one
Bullet text line two
Bullet text three
```

### Specs

- **Org name**: DM Sans 600, 16px, letter-spacing 0.08em, uppercase
- **Role**: 10px DM Sans 600, spaced caps, `var(--accent)`, with thin 1px rule to the right filling the remaining width
- **Bullets**: 12px DM Sans 300, `var(--ink-mid)`, line-height 1.65
- **Column separator**: 1px `oklch(0% 0 0 / 0.08)` vertical rules between columns
- **No card backgrounds, no shadows, no border-top accents**
- **Stagger removed** — all three at same vertical level

---

## Footer

- Background: `var(--ink)` `#111111`
- Brand name: Newsreader italic, 24px, `var(--accent)` color
- Links: 10px DM Sans 600, spaced caps, `oklch(50% 0.01 50)` muted, hover → `var(--accent)`
- Layout: unchanged (flex space-between)

---

## Scroll Reveal System

Replace `.rv/.rl/.rr` classes with updated animation spec:

| Element type | Animation | Duration | Delay |
|---|---|---|---|
| Section splash numbers (big Newsreader) | `scale(0.96) opacity(0) → scale(1) opacity(1)` | 0.8s | 0s |
| Section titles | `translateY(24px) opacity(0) → 0 opacity(1)` | 0.6s | 0.1s |
| Body paragraphs | `translateY(16px) opacity(0) → 0 opacity(1)` | 0.6s | 40ms stagger per block |
| Experience left column | fade in | 0.7s | 0s |
| Experience right column | fade in | 0.7s | 0.1s |
| Pull quote (skills) | `scale(0.98) → 1` + fade | 0.8s | 0s |

All transitions: `cubic-bezier(0.22, 0.61, 0.36, 1)` — matches existing camera animation easing.

---

## Responsive Breakpoints

| Breakpoint | Key changes |
|---|---|
| `≤900px` | Hero: name stacks to single column, polaroid below. Experience: two columns → single column, remove vertical rule. Skills: 3-col → 1-col. Orgs: 3-col → 1-col. |
| `≤600px` | Hero name: 52px. Section splash numbers: 80px max. Container padding: 20px. |

---

## Implementation Notes

- `globals.css` gets the full redesign. `Portfolio.tsx` structure changes (section contents rewritten). `Landing.tsx` — 3 small edits only.
- Add Newsreader to Google Fonts import in `index.html`.
- Grain texture: inline SVG `<filter>` with `feTurbulence` + `feColorMatrix`, applied via CSS `filter: url(#grain)`.
- Hard offset shadow on polaroid: CSS `box-shadow: 8px 8px 0 #111111` — no `border-radius`.
- Issue number watermarks: `position: absolute`, `z-index: 0`, `pointer-events: none`, `user-select: none`.
