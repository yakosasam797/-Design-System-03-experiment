# Gate 1 report — Booking module inventory

**Status:** COMPLETE — stop for design approval  
**Date:** 2026-09-19  
**Evidence re-run:** 2026-09-19T07:00:15Z (49 PNGs + `_computed-metrics.json` overwritten from live Booking)  
**Write target:** `@paryatech/design-system` (`Design-System-03-experiment`) — `docs/audit/` only  
**Booking source:** read-only `booking-redesign.html` @ `http://localhost:8443/`  
**Scope lock:** No Booking code changes · no tokens/components implemented · no publish

---

## 1. Screens and “routes” discovered

There are **no product URL routes**. Static re-scan of `booking-redesign.html` confirmed:

| Surface | Count / IDs |
| --- | --- |
| App shell | 1 (expanded / collapsed; narrow compresses chrome) |
| Views | 2 — `view-list`, `view-detail` |
| List stage tabs | 4 — upcoming, travelling, completed, cancelled |
| Detail tabs / panels | 9 — overview, services, fulfilment, travellers, documents, finance, vouchers, communication, activity |
| Notes drawer | `ndOverlay` — browse / compose |
| Modals | **22** — directBooking … newMessage |
| Data sheets | sheet-bk, sheet-it, sheet-vo, sheet-tsk, sheet-trv, sheet-doc, sheet-pay, sheet-ven, sheet-act |
| Helpers | `window.showView`, `window.openModal`, `window.activateTab` |

Full open methods: [`BOOKING-MODULE-SCREEN-INVENTORY.md`](./BOOKING-MODULE-SCREEN-INVENTORY.md).  
Capture script: [`capture-gate1.mjs`](./capture-gate1.mjs).

---

## 2. States successfully rendered vs blocked

### Captured (49 PNGs)

- Shell expanded + collapsed (desktop); list narrow 390  
- List: four stages, owner filter open, search, empty `#bkEmpty`, bulk selected  
- Detail: all nine tabs (desktop); overview + communication narrow; communication @ **820**  
- Tasks: status menu open; filter menu open  
- Notes: browse + compose  
- **All 22 modals** on desktop  

### Blocked / not implemented

| State | Status |
| --- | --- |
| Loading / skeleton | Not implemented |
| Network / form error pages | Not implemented |
| Disabled filters | Not implemented |
| Row **More** menu contents | Blocked — `.more-btn` only |
| Sidebar destinations ≠ Bookings | Blocked — chrome only |
| CSS `.empty` card as live empty | Unused (live: `#bkEmpty`, `.nd-empty`) |

### Partial

- Notes search empty (`.nd-empty`) — source-verified; same drawer chrome  

Matrix: [`BOOKING-STATE-MATRIX.md`](./BOOKING-STATE-MATRIX.md).

---

## 3. Components and patterns found

See [`BOOKING-COMPONENT-INVENTORY.md`](./BOOKING-COMPONENT-INVENTORY.md).

| Classification | Examples |
| --- | --- |
| Foundation token | Colour vars, Onest / Public Sans / JetBrains Mono, radii 8/10/999, heights 30/32/36/38 |
| Reusable primitive | Button, StatusChip, Checkbox, Avatar, tab chip |
| Reusable component | SearchField, FilterSelect, TabBar, StatusSelect (needed), Tooltip, Pagination, NotesStrip, CreditsMeter, SidebarNav, Modal (needed), EmptyState, TextField (needed) |
| Reusable pattern | AppShell, ListPage, DataSheet, SheetToolbar, Modal form, NotesDrawer (needed), DetailPage (needed), KpiStrip (needed) |
| Booking-specific | Service cards, finance dual sheets, vouchers, communication split, activity, domain modals |
| Inconsistency | I1–I11 below |
| Deprecated candidate | Unused `.empty` card styles |

---

## 4. Inconsistencies requiring approval

Details: [`BOOKING-INCONSISTENCIES.md`](./BOOKING-INCONSISTENCIES.md).  
CDP: [`screenshots/_computed-metrics.json`](./screenshots/_computed-metrics.json).

| ID | Live measurement (re-run) |
| --- | --- |
| I1 | `.st-cap` / `.st-pick` **h=32**, 12.5px Public Sans, radius **8** (vs pilot 28/12) |
| I2 | Upload voucher CTA **h=36**, radius **10**; `btn-sm` **h=32**, radius **8**; filter wrap **h=36** |
| I3 | `.nd-fil` **h=30**, radius **999** (pill) |
| I4 | Sheet header “Booking”: Public Sans **12px / 600 / 0.12px**, colour `#3E4550` |
| I5 | `--surface-2` ≡ `--info-bg` = `#F1F4F7` |
| I6 | `--ink-4` = `#8A909A` |
| I7 | Status vocabulary differs by table; tones shared |
| I8 | Hardcoded status hover hexes in CSS |
| I9 | `#bkEmpty` (illustrated) vs `.nd-empty` vs unused `.empty` |
| I10 | `.more-btn` without menu |
| I11 | Communication `@media max-width: 820px` |

---

## 5. Screens/states that could not be inspected

Loading, error, disabled-control UIs; More-menu panel; non-Bookings sidebar destinations; exhaustive per-icon hover gallery.

---

## 6. Exact files proposed for Gate 2 (proposal only — do not create yet)

| Proposed path | Purpose |
| --- | --- |
| `docs/foundations/COLOR.md` | After I5 / I6 / I8 |
| `docs/foundations/TYPOGRAPHY.md` | After I4 |
| `docs/foundations/SIZE-RADIUS.md` | After I1–I3 |
| `docs/foundations/BREAKPOINTS.md` | After I11 |
| `docs/icons/ICON-ARCHITECTURE.md` | Icon catalogue / API |
| `docs/components/COMPONENT-INVENTORY.md` | Promote Gate 1 classifications |
| `docs/patterns/PATTERN-INVENTORY.md` | AppShell, ListPage, DetailPage, Modal, NotesDrawer, SheetToolbar, KpiStrip |

---

## 7. Deliverables

| File | Status |
| --- | --- |
| [`BOOKING-MODULE-SCREEN-INVENTORY.md`](./BOOKING-MODULE-SCREEN-INVENTORY.md) | Re-verified |
| [`BOOKING-COMPONENT-INVENTORY.md`](./BOOKING-COMPONENT-INVENTORY.md) | Re-verified |
| [`BOOKING-STATE-MATRIX.md`](./BOOKING-STATE-MATRIX.md) | Screenshot-backed |
| [`BOOKING-INCONSISTENCIES.md`](./BOOKING-INCONSISTENCIES.md) | CDP-backed |
| [`screenshots/`](./screenshots/) | **49 PNGs** + metrics |
| [`GATE-1-REPORT.md`](./GATE-1-REPORT.md) | This file |

---

## 8. Stop the line

**Gate 1 re-run is done.** Await design approval on I1–I11 before Gate 2. Do not implement foundations, icons, or components in this pass.
