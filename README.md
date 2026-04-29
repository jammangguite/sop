# LES Design System
**Lamka Exchange Society — Daybook & Financial Management App**

## Overview
The Lamka Exchange Society (LES) is a member savings & lending cooperative based in Lamka (Churachandpur), Manipur, India. Their primary product is a web-based **Daybook** — a financial ledger app for recording member contributions, entrance fees, loan transactions, and generating financial reports (R&P, P&L, Balance Sheet).

### Sources
- **Primary source**: Full HTML+CSS+JS source of the LES Daybook app (provided inline)
- Backend: Google Apps Script (GAS) connected to Google Sheets
- Fonts: Google Fonts (EB Garamond, DM Sans, IBM Plex Mono)

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Formal-institutional** with warmth. The app serves a small community cooperative — language is precise and professional but never cold.
- **Sentence case** for body copy; **UPPERCASE with letter-spacing** for labels, section headers, and category tags.
- **First-person plural** ("Save to Sheets", "Add New Member") — action-oriented, imperative UI copy.
- No marketing fluff. Every label earns its place.
- **No emoji in data** — emoji are used sparingly as semantic icons in UI chrome (📒 Daybook, 📊 Dashboard, ✍️ Signatories) but never in financial data cells.
- **Indian number formatting** throughout: ₹1,95,500 (not ₹195,500). Rupee symbol (₹) used, never "INR".
- **Monospace for all numbers** — IBM Plex Mono used for amounts, receipt numbers, dates in tables, transaction IDs.
- Receipt numbers follow the format: `LES2026/16Mar/001EF/MC` — year, date, sequence, category code.
- Member IDs follow `LES01`–`LES18` convention (zero-padded two digits).

### Casing conventions
| Context | Casing |
|---|---|
| Navigation labels | Title Case |
| Form field labels | UPPERCASE (10px, tracked) |
| Button text | Title Case |
| Category tags | Title Case |
| Financial table headers | UPPERCASE (tracked) |
| Member names | Title Case (as written) |

### Example copy patterns
- "Save to Sheets" (not "Submit" or "Save Entry")
- "Category / Ledger" (slash-separated paired concepts)
- "Cash IN" / "Cash OUT" (caps on direction words)
- "For the Month of" (not just "Month")
- "Receipt (IN)" / "Payment (OUT)" — always clarify direction
- "Pending Approvals" with ⏳, "Signed" with ✅

---

## VISUAL FOUNDATIONS

### Color System
Two-tier: **Base palette** (named semantic colors) + **light variants** for backgrounds.

| Token | Hex | Usage |
|---|---|---|
| `--navy` / `--ink` | `#16213e` | Primary: sidebar bg, card headers, headings, primary button |
| `--gold` | `#c9922a` | Accent: logo mark, card header border, amount prefix ₹, member IDs |
| `--gold-l` | `#f5e6cc` | Gold background tint |
| `--ink2` | `#3a4a6b` | Secondary text |
| `--ink3` | `#7c8db0` | Tertiary/muted text, labels |
| `--rule` | `#d1d9e8` | Primary border |
| `--rule2` | `#eaeff8` | Subtle dividers, alternate row bg |
| `--paper` | `#f7f8fc` | App background — slightly blue-tinted off-white |
| `--white` | `#ffffff` | Card surfaces |
| `--green` | `#1a5c38` | Receipt/IN transactions, positive states, approved status |
| `--green-l` | `#d4eddf` | Green bg tint |
| `--red` | `#8b1a1a` | Payment/OUT, errors, delete |
| `--red-l` | `#fde8e8` | Red bg tint |
| `--blue` | `#1a3a8b` | Links, receipt numbers, share pills |
| `--blue-l` | `#e0e8fb` | Blue bg tint |
| `--amber` | `#7a4a0a` | Warning/draft/pending states |
| `--amber-l` | `#fef3d8` | Amber bg tint |

### Typography
Three-font system with deliberate role separation:

| Font | Role | Weights |
|---|---|---|
| **EB Garamond** | Display/headings, brand serif | 400, 500, 600, 700 (+ italic 400) |
| **DM Sans** | Body, UI, buttons, labels | 300, 400, 500, 600 (+ italic 400) |
| **IBM Plex Mono** | Numbers, codes, dates, IDs | 400, 500 |

**Type scale:**
- `22px` EB Garamond 600 — Page titles (dashboard)
- `18px` EB Garamond 600 — Topbar titles
- `16px` EB Garamond 600 — Modal titles, report headings
- `14px` EB Garamond 600 — Card titles
- `13px` DM Sans 400/500 — Body text, form inputs, buttons
- `12px` DM Sans / IBM Plex Mono — Secondary info, table cells
- `11px` DM Sans 500 / IBM Plex Mono — Small labels, stat labels
- `10px` DM Sans 600, tracked, UPPERCASE — Field labels, section headers
- `9px` DM Sans 600, tracked, UPPERCASE — Sidebar section labels, role badges

### Backgrounds
- App background: `--paper` (#f7f8fc) — slightly blue-tinted, not pure white
- Subtle radial gradient overlays on the body: `rgba(26,58,139,.04)` navy glow top-left + `rgba(201,146,42,.03)` gold glow bottom-right — very faint, atmospheric
- Cards: pure white on paper bg
- Sidebar: solid `--navy` (#16213e)
- Card headers: `--navy` with `2px solid --gold` bottom border

### Cards
- `border-radius: 12px` outer card; `8px` inner elements (form fields, badges, sig boxes)
- `border: 1px solid var(--rule)` + `box-shadow: 0 2px 8px rgba(22,33,62,.07)` — subtle lift
- Elevated (hover/modal): `box-shadow: 0 4px 20px rgba(22,33,62,.12)`
- Card header: navy background, gold bottom border, EB Garamond title in white
- Card body: `18px 17px` padding

### Spacing
- Base unit: `4px`
- Common gaps: `4px`, `8px`, `10px`, `12px`, `13px`, `14px`, `20px`, `24px`
- Page inner: `24px 20px 60px`, max-width `900px`, centered
- Sidebar: `220px` fixed width
- Grid gutters: `10px`–`13px`

### Borders & Radii
- `7px` — form inputs, small buttons
- `8px` — inner cards, sig boxes, badges
- `10px` — stat cards, member cards
- `12px` — main cards
- `14px` — modals
- `20px` — pill/chip elements
- `50%` — dot indicators (connection status)
- Dashed borders: `1.5px dashed var(--rule)` for pending/empty states (sig boxes)
- Input focus: `border-color: --navy` + `box-shadow: 0 0 0 3px rgba(22,33,62,.07)` focus ring

### Shadows
- `--sh`: `0 2px 8px rgba(22,33,62,.07)` — default card
- `--sh2`: `0 4px 20px rgba(22,33,62,.12)` — hover/elevated
- Buttons: `0 2px 8px rgba(22,33,62,.22)` — primary button only
- Modals: `0 20px 60px rgba(22,33,62,.25)`
- Toast: `0 8px 32px rgba(0,0,0,.2)`

### Animations
- `zoomIn`: `scale(0.92) → scale(1)`, `0.22s ease` — modals appearing
- `fadeUp`: `translateY(10px) → 0`, opacity 0→1 — page entry
- `spin`: continuous rotation — button loading spinner
- `pulse-g`: opacity 1→0.4→1, `2.5s` — green connection dot
- `pgold`: box-shadow pulse, `2s` — pending signatory boxes
- Toast: `cubic-bezier(.34,1.56,.64,1)` — spring-like entry (slight overshoot)
- Button hover: `translateY(-1px)` — primary save button lifts

### Hover States
- Sidebar items: `background: rgba(255,255,255,.07)`, color white
- Active sidebar item: `background: rgba(201,146,42,.18)`, color `--gold`
- Member cards: `border-color: --navy`, `box-shadow: --sh2`, `translateY(-2px)`
- Primary button: `background: #0e1a2e` (darker navy), `translateY(-1px)`
- Nav tabs/filter pills: `border-color: --navy`, `color: --navy`

### Iconography
See `assets/` and ICONOGRAPHY section in README below.

### Transparency & Blur
- Modal overlay: `backdrop-filter: blur(3px)` + `rgba(22,33,62,.45)`
- Dialog overlay: `backdrop-filter: blur(4px)` + `rgba(22,33,62,.5)`
- Topbar: solid white, no blur
- Entry toolbar: `rgba(255,255,255,.8)` — slight transparency

---

## ICONOGRAPHY

LES uses **inline SVG stroke icons** throughout — no icon font, no external icon library. Icons are Heroicons-style: 2px stroke weight, rounded linecaps, minimal fill, 24×24 viewBox. Color is `currentColor` (inherits from parent).

Icon sizes:
- Sidebar: `16×16px`, `opacity: 0.7` (1.0 when active)
- Card headers: `13px` emoji as semantic icon (📒, ✍️, 💰, 📊, etc.)
- Buttons: `14×14px`
- Small UI elements: `13×13px`

**Emoji as icons**: Used in navigation labels and card headers for quick recognition. NOT used in data/table cells. Examples: 📒 Daybook, 📊 Dashboard, 👥 Members, 📈 Reports, ✅ Approved, ⏳ Pending, 📱 WhatsApp notify.

**SVG icon set used**: Hand-rolled Heroicons-compatible strokes. Available in `assets/icons.svg`.

---

## FILE INDEX

| Path | Description |
|---|---|
| `README.md` | This file — full design system documentation |
| `SKILL.md` | Agent skill descriptor |
| `colors_and_type.css` | All CSS custom properties: colors, type, spacing, shadows |
| `assets/logo.svg` | LES logomark (layers icon in gold) |
| `assets/icons.svg` | SVG sprite of all UI icons |
| `preview/` | Design system preview cards (registered in DS tab) |
| `ui_kits/les-daybook/` | Full UI kit for the LES Daybook web app |
| `ui_kits/les-daybook/index.html` | Interactive prototype — main entry point |

---

## Products

### LES Daybook (Web App)
Single-page financial management application. Pages:
1. **Daybook** — New/Edit entry form with signatory workflow
2. **Dashboard** — Stats overview + recent transactions
3. **Member Contributions** — Member grid + individual ledger detail
4. **Reports** — R&P, P&L, Balance Sheet, Daybook view

Stack: Vanilla HTML/CSS/JS, Google Apps Script backend, Google Sheets as database.
