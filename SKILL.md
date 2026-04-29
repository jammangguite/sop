---
name: les-design
description: Use this skill to generate well-branded interfaces and assets for the Lamka Exchange Society (LES) — a member savings & lending cooperative. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for the LES Daybook financial management app.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key design facts to remember:
- Three fonts: EB Garamond (display/headings), DM Sans (body/UI), IBM Plex Mono (numbers/codes/dates)
- Navy (#16213e) primary + Gold (#c9922a) accent — never invent new brand colors
- All financial amounts use IBM Plex Mono, Indian number formatting (₹1,95,500), ₹ symbol
- Member IDs: LES01–LES18 pattern; Receipt IDs: LES2026/16Mar/001EF/MC pattern
- Card pattern: white surface, 12px radius, navy header with 2px gold bottom border
- Sidebar: 220px, solid navy, gold accent on active items
- Status colors: green=approved/IN, red=error/OUT, amber=pending/draft, blue=links/receipts
- Icons: Heroicons-style inline SVG, 2px stroke, currentColor, 16–20px
- No emoji in data cells; emoji only in nav labels and card icons
