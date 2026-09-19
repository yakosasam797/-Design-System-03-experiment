# Icon parity report

**Date:** 2026-09-19  
**SoT:** Booking `booking-redesign.html` (read-only) @ `localhost:8443`  
**DS:** `@paryatech/design-system` `src/icons/`

## Rollup

| Metric | Count |
| --- | ---: |
| SVG instances in Booking HTML (+ script) | 446 |
| Unique fingerprints | 77 |
| Named / approved in `ICON_REGISTRY` | 76 |
| Component-owned (excluded from general catalogue use) | 2–3 (Checkbox check stroke; AppShell brandMark; check also listed for reference) |
| Unused / dead glyphs | 0 |
| Deprecated | 0 |
| Awaiting design approval | 0 |
| Prior wrong DS paths fixed | 2 (`home`→layoutGrid, `bookings`→open book) |

## Implementation

| Deliverable | Status |
| --- | --- |
| Static extract + fingerprint (`docs/audit/extract-booking-icons.mjs`) | Done |
| Named inventory (`BOOKING-ICON-INVENTORY.md`) | Done |
| Rendered confirmation + crops (`screenshots/icons/`) | Done |
| Registry + `Icon` (sizes / strokes / aliases) | Done |
| Tokens `--icon-size-*` / `--icon-stroke-*` | Done |
| Storybook filterable Catalogue + size×stroke matrix | Done |
| Component wiring (SearchField, FilterSelect, Pagination, EmptyState, NotesStrip, CreditsMeter, AppShell collapse) | Done |
| Contextual stories use `<Icon name>` (Button, IconButton, AppShell, ListPage, DetailPage, DataSheet, Tooltip) | Done |
| `story-icons.tsx` | Deprecated thin wrappers over `Icon` |

## Sample contextual spot-check

Compared Booking placement vs DS stories / components for:

| Context | Booking glyph | DS `Icon` name | Size | Stroke | Notes |
| --- | --- | --- | --- | --- | --- |
| Sidebar Bookings | open book | `bookings` | 17 nav | 1.9 | Was wrongly calendar |
| Sidebar Home | layout grid | `layoutGrid` (`nav.home`) | 17 | 1.7 | Was wrongly house |
| List pin / calendar / people | pin, calendar, team | `pin`, `calendar`, `people`→`team` | 15 / 13 / 13 | registry | List recipes |
| CTA plus / refresh | plus, refresh | `plus`, `refresh` | 14 sm | 1.9 | Button leadingIcon |
| Topbar settings / help / bell | settings, help, bell | same | 17 nav | 1.7 | IconButton |
| Pager chevrons | chevron L/R | `chevronLeft` / `chevronRight` | 13 | 2 | Pagination |
| Search field | search | `search` | 16 | 1.9 | SearchField |
| Filter caret | chevronDown | `chevronDown` | 13 | registry | FilterSelect |
| Empty state pin | pin 20 | `pin` lg | 20 | registry | EmptyState |
| Notes strip + add | fileText, plus | same | 16 | registry | NotesStrip |
| Credits meter | credits | `credits` | 15 | 1.8 | CreditsMeter |
| Sidebar collapse | collapse | `collapse` | 16 | 1.8 | AppShell |

**Remaining visual diffs (acceptable):**

- Brand mark stays inline in AppShell (32×32 fill bubble — not Lucide 24 viewBox).
- Checkbox check stays inline (stroke 3.2 / 11px) — component-owned.
- Parent colour / gap / hover are owned by Button / IconButton / nav CSS, not by `Icon`.

## Done criteria

Every **actually used** Booking glyph is in the registry + Storybook catalogue, **or** explicitly marked component-owned / unused / deprecated / awaiting approval in [`BOOKING-ICON-INVENTORY.md`](./BOOKING-ICON-INVENTORY.md).

**Result:** Met.
