# Typography — Gate 2 proposal

**Status:** Proposal only  
**SoT:** Live Booking CDP (Gate 1) + `typography.css` / `--type-*` roles  
**I4 disposition:** Table headers remain **Public Sans 12px / 600 / letter-spacing 0.12px** (not Onest, not Mono)

---

## 1. Families and loading

| Family | Role | Loading | Fallback |
| --- | --- | --- | --- |
| **Onest** | Headings, button labels, brand | Google Fonts `@import` in `typography.css` | `sans-serif` |
| **Public Sans** | UI body, nav, table headers, chips | same | `system-ui, sans-serif` |
| **JetBrains Mono** | IDs, money, dates, counts, tab chips | same | `monospace` |

**Screens:** Shell list, Detail Overview (record title Onest), List sheet headers Public Sans, BK IDs / money Mono — see `list__upcoming__desktop`, `detail__overview__desktop`.

Numeric: use `font-variant-numeric: tabular-nums` on mono money/date cells (List Finance, Detail Finance, Pagination).

---

## 2. Type roles (evidence-derived)

| Role | Family | Size / weight / tracking (observed or token) | Booking screens |
| --- | --- | --- | --- |
| Page title | Onest | ~24 / 600 (Bookings) | List |
| Record title | Onest | Detail header “XYZ Family · Dubai” | Detail all tabs |
| Brand / modal title | Onest | Modal titles; sidebar brand | Shell, Modals |
| Section / panel title | Onest or Public Sans | Itinerary, sheet section heads | Overview, Finance |
| Body | Public Sans | Default UI copy | All |
| Body compact / search | Public Sans | ~13.5 list search | List toolbar, Detail sheet toolbars |
| Label (buttons) | Onest | 13.5 / 600 default; 12.5 / 600 `sm` | CTAs List/Detail/Modals |
| Label compact | Public Sans | Filter / chip 12.5 / 600 | Filters, StatusChip |
| Table header | Public Sans | **12 / 600 / 0.12px**, colour `--ink-2` | All DataSheets (List `sheet-bk`, itinerary, tasks, …) |
| Table cell primary | Public Sans | ~13–14 | Sheets |
| Table cell mono | JetBrains Mono | IDs, money, ranges | List, Finance, Vouchers |
| Supporting / muted | Public Sans | Secondary cell lines | List readiness subtext |
| Caption / meta | Public Sans | Smaller meta | Notes, Activity |
| Status text | Public Sans | 12.5 / 600 in chips | List, Tasks, Vouchers |
| Tab chip count | JetBrains Mono | 10.5 / 600 | List stages, Detail tabs |
| Numeric / data | JetBrains Mono | Credits, pagination | Shell credits, sheet footers |

Exact `--type-*` token names already exist in `tokens.css`; Gate 3 maps components to these roles without inventing parallel systems.

---

## 3. Component → typography mapping

| Component / region | Role | Screen evidence |
| --- | --- | --- |
| List page H1 “Bookings” | Page title (Onest) | `list__upcoming__desktop` |
| Detail record name | Record title (Onest) | `detail__overview__desktop` |
| `.sheet-bk .row-head` | Table header (Public Sans 12/600/0.12) | List |
| `.btn` / `.btn-sm` | Label button / sm (Onest) | List CTAs, modal footers |
| `.st-cap` / `.st-pick` | Status text (Public Sans 12.5/600) | List, Tasks |
| `#bkSearch` / sheet search | Body compact | List, Tasks, Docs… |
| `.mono` / BK- IDs | Mono data | List lead cell, Detail header |
| Modal `.modal-title` | Heading modal (Onest) | All modals |
| Sidebar nav labels | Body / UI (Public Sans) | Shell |
| Notes `.nd-fil` | Label compact | `notes__browse__desktop` |

---

## 4. Truncation and wrapping

| Rule | Evidence |
| --- | --- |
| `.ell` single-line ellipsis on primary/secondary sheet cells | List long next-action, Tasks titles |
| Buttons `white-space: nowrap` | All CTAs |
| Notes / modal textareas wrap | Notes compose, Contact / Request doc modals |

---

## 5. Approval asks

- [ ] Confirm three-family stack
- [ ] Confirm I4 table-header treatment (Public Sans, not Onest/Mono)
- [ ] Confirm component→role map as Gate 3 binding
