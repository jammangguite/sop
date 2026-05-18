# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A **design system and prototype codebase** for two related products:

1. **LES Daybook** — A financial ledger web app for the Lamka Exchange Society (LES), a member savings & lending cooperative in Lamka, Manipur. Stack: vanilla HTML/CSS/JS frontend + Google Apps Script (GAS) backend + Google Sheets as the database.
2. **dB SaaS** — A generic white-label version of the Daybook product with its own brand identity, documented in `dB App.html` (app shell) and `dB Landing.html` (marketing page).

There is **no build system, no package manager, and no test suite**. All files are static HTML/CSS/JS opened directly in a browser.

## Development

Open any `.html` file directly in a browser. No server required. To preview changes, refresh the browser.

The GAS backend (`backend.gs`) is deployed separately via Google Apps Script editor. The `GAS_URL` placeholder in `index.html` must be replaced with the deployed script URL for backend calls to work.

## Architecture

### Two distinct design tracks

| Track | Files | Brand colors | Fonts |
|---|---|---|---|
| **LES brand** | `colors_and_type.css`, `index.html` | Navy `#16213e` + Gold `#c9922a` | EB Garamond / DM Sans / IBM Plex Mono |
| **dB SaaS brand** | `dB App.html`, `dB Landing.html` | Indigo `#4f46e5` + Emerald `#10b981` | Plus Jakarta Sans / IBM Plex Mono |

The two tracks do **not** share a CSS file. `colors_and_type.css` is the canonical token file for the LES brand only — always `@import` it in any new LES-branded HTML rather than redefining tokens inline.

### `colors_and_type.css` — canonical LES design tokens

This file defines all CSS custom properties for the LES brand: primitive palette, semantic aliases (bg, fg, border, status, transaction), typography scale, spacing scale, border radii, shadows, and transitions. It also defines the named keyframe animations (`les-zoomIn`, `les-fadeUp`, `les-spin`, `les-pulse-g`, `les-pgold`). **Do not duplicate these tokens inline in other files.**

### `backend.gs` — Google Apps Script backend

Single `doPost(e)` dispatcher routing on `req.action`:
- `login` → `handleLogin`
- `saveEntry` → `handleSave` (appends to `Master_Ledger` sheet; triggers email+WhatsApp alert for amounts > ₹50,000)
- `emergencyReset` → `handleEmergencyReset` (resets a user password in `User_Auth` sheet)
- `provisionNewClient` → `createClientSheet`

Alerts are sent via `MailApp` (email to `SUPER_ADMIN_EMAIL`) and CallMeBot WhatsApp API. Both credentials are hardcoded constants at the top of the file and must be set before deployment.

### `dB App.html` — dB SaaS app shell

Single-file SPA with all CSS inline. Contains the full component library for the dB product: sidebar, topbar, cards, forms, data tables, member grid, signatory boxes, stat cards, badge/pill system, plan cards, onboarding stepper, toast notifications, and super-admin org list. Navigation between pages is done by toggling `.page.active` class in JS.

## LES Brand Conventions

### Typography & numbers
- **EB Garamond** — display/headings only
- **DM Sans** — all body copy, UI labels, buttons
- **IBM Plex Mono** — all financial amounts, receipt IDs, member IDs, dates in tables
- Indian number formatting throughout: `₹1,95,500` (not `₹195,500`). Always use `₹`, never "INR".
- Member IDs: `LES01`–`LES18` (zero-padded). Receipt IDs: `LES2026/16Mar/001EF/MC`.

### Copy & tone
- Sentence case for body copy; UPPERCASE + letter-spacing for field labels and section headers.
- Transaction direction: **Cash IN** / **Cash OUT** (caps on the direction word). Receipt **(IN)** / Payment **(OUT)**.
- No emoji in data cells or financial tables. Emoji only in navigation labels and card header icons.

### Color usage
- `--green` / `--green-l` → receipts, IN transactions, approved status
- `--red` / `--red-l` → payments, OUT transactions, errors, delete
- `--amber` / `--amber-l` → pending, draft, warning states
- `--blue` / `--blue-l` → links, receipt numbers, share pills
- `--gold` → logo mark, card header border accent, ₹ prefix in amount fields
- Never invent new brand colors; always use the defined tokens.

### Layout constants
- Sidebar: `220px` fixed width, solid `--navy` background
- Content max-width: `900px`, centered, `24px 20px 60px` padding
- Card pattern: white surface, `12px` border-radius, navy header with `2px solid --gold` bottom border

### Icons
Heroicons-compatible inline SVG strokes. `2px` stroke weight, `currentColor`, `24×24` viewBox. Sized `16×16px` in sidebar, `14×14px` in buttons, `13×13px` in small UI. No external icon font or library.

## Agent Skill

`SKILL.md` registers this repo as the `les-design` skill. When invoked, read `README.md` first, then explore other files. Output either a static HTML artifact or production-ready code depending on context.
