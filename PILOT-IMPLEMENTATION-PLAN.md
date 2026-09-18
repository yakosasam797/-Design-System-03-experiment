# Paryatech Design System — Pilot Implementation Plan

**Status:** Approved  
**Date:** 2026-09-18  
**Source of truth (audit):** Booking experiment repo `direction-03-experiment`  
**Target repo:** `-Design-System-03-experiment` (this repository)  
**Consumer:** Booking experiment (HTML/React iframe today; package consumer next)

First version of the Paryatech Design System from the approved Booking List design.

---

## 0. Context

| Asset | Location |
| --- | --- |
| Booking frontend + HTML reference | `direction-03-experiment` / `booking-redesign.html` |
| Frozen tokens (CSS `:root` + docs) | `docs/design-system/tokens.md` |
| Component inventory | `docs/design-system/components.md` |
| Page patterns | `docs/design-system/patterns.md` |
| Review queue | `docs/design-system/review-queue.md` |

Semantic rules:

- **Teal = work** (brand, primary CTAs, completion)
- **Pink = place and person** (nav, tabs, selection, account)
- **Soft rectangle radius 10px** = CTA / control language
- **Pills (999)** = status only

Visual rule: match Booking List appearance. Report diffs; do not silently redesign.

---

## 1. Token set (Booking List)

See `src/tokens/tokens.css`. Includes shells, ink, lines, teal/pink, status, `--line-hover`, `--checkbox-line`, `--accent-pressed`, `--accent-soft-pressed`, `--tooltip-ink`, radii, shadows, durations. `--page-pad` is scoped to ListPage / content shell (needs `cqi`).

---

## 2. Component set

1. Button — `primary` | `brand` | `ghost` × `sm` + default; no Upgrade alias  
2. IconButton — 36×36  
3. SearchField — 36px; focus-visible 2px `--focus` outline  
4. FilterSelect — soft-rect + choice menu  
5. Tab / TabBar — pink active underline; **neutral** count chips  
6. StatusChip — `open` | `progress` | `blocked` | `done`  
7. Checkbox — off / on / indeterminate  
8. Avatar — default + pink  
9. Tooltip  
10. DataSheet — open canvas; **horizontal scroll** on narrow  
11. Pagination — active = pink  
12. EmptyState — sole empty pattern  
13. SkipLink — part of AppShell  

**Out of pilot:** notes drawer, detail/KPI/comm, `.tag`, extra button variants, sticky bulk, card-stack, dedicated Loading/Error components (composition stories only).

---

## 3. Separation of concerns

| Layer | Lives in |
| --- | --- |
| Global design tokens | Design-system `tokens/` |
| Reusable UI | Design-system `components/` |
| Page patterns | AppShell, ListPage in `patterns/` |
| Booking-specific | Booking experiment only |
| One-offs | Booking experiment |

---

## 4. Decision log (approved)

| ID | Decision |
| --- | --- |
| Q1=A | Neutral tab chips (`surface-2` / `ink-2`) |
| Q2=A | Four StatusChip tones; Booking maps labels |
| Q4=A | One EmptyState component |
| Q5=B | Horizontal table scrolling on narrow screens |
| Q6=B | Shared accessible 2px focus-visible outline |
| Q7=B | SkipLink in AppShell |
| Q9=A | Topbar / breadcrumbs are slots |
| Q10=A | Upgrade uses Button primary sm; no alias |
| — | Pagination current = pink |
| — | Hardcoded colors promoted to tokens |
| — | Loading/error = Storybook composition only |

---

## 5. Repository structure

See implemented tree under `src/`, `.storybook/`, `docs/`.

Package: `@paryatech/design-system`  
Exports: `.`, `./tokens.css`, `./styles.css`

---

## 6. Storybook situational matrix

DataSheet and ListPage stories must demonstrate composition for:

- Loading | Empty | Error | Disabled | Long content | Narrow/mobile

---

## 7. Booking consumption

Historical pilot note: early Booking consumers used a local `file:` link. **Preferred install is GitHub** (see README). First proof was inject package `tokens.css` into iframe `srcDoc` and strip local `:root` duplicates.
