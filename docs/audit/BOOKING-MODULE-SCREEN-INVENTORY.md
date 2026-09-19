# Booking module — screen inventory

**Gate:** 1 (inventory only)  
**Source of truth:** rendered UI at `http://localhost:8443/` from `booking-redesign.html`  
**Capture date:** 2026-09-19 (Gate 1 re-run — PNGs overwritten; metrics `2026-09-19T07:00:15Z`)  
**Viewports:** desktop 1440×900; narrow 390×844; communication breakpoint 820×900  

There are **no product routes**. One HTML shell, two views, nine detail tabs, twenty-two modals, one notes drawer. Hash boot (`#overview` … `#activity`) only applies on full page load.

Screenshots live in [`screenshots/`](./screenshots/). File names: `{surface}__{state}__{viewport}.png`.  
**Rule:** Every row marked Captured has a PNG on disk (49 total). Re-run [`capture-gate1.mjs`](./capture-gate1.mjs) if regenerating.

---

## 1. App shell (always present)

| Surface | How to open | Screenshot | Notes |
| --- | --- | --- | --- |
| Shell expanded + List | Load `/` | [shell__list__desktop.png](./screenshots/shell__list__desktop.png) | Sidebar, topbar search, account, credits, crumbs |
| Shell collapsed | `#sidebarToggle` | [shell__collapsed__desktop.png](./screenshots/shell__collapsed__desktop.png) | Icon rail; notes strip hidden labels |
| Shell + List (narrow) | `/` @ 390 | [shell__list__narrow.png](./screenshots/shell__list__narrow.png) | Horizontal chrome compression |

**Not navigable (chrome only):** sidebar items other than Bookings — no destinations.

---

## 2. List view (`#view-list`)

| Surface | How to open | Screenshot | Notes |
| --- | --- | --- | --- |
| Upcoming (default) | `data-list-tab="upcoming"` | [list__upcoming__desktop.png](./screenshots/list__upcoming__desktop.png) | Sheet `sheet-bk`; 3 rows in demo |
| Travelling | `data-list-tab="travelling"` | [list__travelling__desktop.png](./screenshots/list__travelling__desktop.png) | 1 row |
| Completed | `data-list-tab="completed"` | [list__completed__desktop.png](./screenshots/list__completed__desktop.png) | 2 rows |
| Cancelled | `data-list-tab="cancelled"` | [list__cancelled__desktop.png](./screenshots/list__cancelled__desktop.png) | 1 row |
| Owner filter open | `.filter-wrap` → custom menu | [list__owner-filter-open__desktop.png](./screenshots/list__owner-filter-open__desktop.png) | All / Mine / Unassigned |
| Search with results | `#bkSearch` = `BK-` | [list__search-results__desktop.png](./screenshots/list__search-results__desktop.png) | Filters rows client-side |
| Empty results | `#bkSearch` no match → `#bkEmpty` | [list__empty-results__desktop.png](./screenshots/list__empty-results__desktop.png) | Text empty, not `.empty` card |
| Bulk selected | `.bk-cbx` on | [list__bulk-selected__desktop.png](./screenshots/list__bulk-selected__desktop.png) | Bulk bar appears |

**Table:** `sheet-bk` — Booking · Travel · Readiness · Next action · Finance · Owner · Action. Truncated cells via `.ell` present on List.

---

## 3. Detail view (`#view-detail`)

Open via row **Open** / row click, or hash boot `#overview`…`#activity` on full reload.

| Tab | Hash / `data-tab` | How to open | Screenshot |
| --- | --- | --- | --- |
| Overview | `#overview` | Default after Open | [detail__overview__desktop.png](./screenshots/detail__overview__desktop.png) |
| Vendors (Services) | `#services` | Tab / `activateTab('services')` | [detail__services__desktop.png](./screenshots/detail__services__desktop.png) |
| Tasks | `#fulfilment` | Tab | [detail__tasks__desktop.png](./screenshots/detail__tasks__desktop.png) |
| Travellers | `#travellers` | Tab | [detail__travellers__desktop.png](./screenshots/detail__travellers__desktop.png) |
| Documents | `#documents` | Tab | [detail__documents__desktop.png](./screenshots/detail__documents__desktop.png) |
| Finance | `#finance` | Tab | [detail__finance__desktop.png](./screenshots/detail__finance__desktop.png) |
| Vouchers | `#vouchers` | Tab | [detail__vouchers__desktop.png](./screenshots/detail__vouchers__desktop.png) |
| Communication | `#communication` | Tab | [detail__communication__desktop.png](./screenshots/detail__communication__desktop.png) |
| Activity | `#activity` | Tab | [detail__activity__desktop.png](./screenshots/detail__activity__desktop.png) |
| Overview (narrow) | — | Detail @ 390 | [detail__overview__narrow.png](./screenshots/detail__overview__narrow.png) |
| Communication (narrow) | — | @ 390 | [detail__communication__narrow.png](./screenshots/detail__communication__narrow.png) |
| Communication (820) | — | `@media max-width:820px` | [detail__communication__820.png](./screenshots/detail__communication__820.png) |

### Sheets / compositions per tab

| Tab | Sheets / blocks |
| --- | --- |
| Overview | Trip summary KPIs; itinerary `sheet-it`; service summary |
| Vendors | Service cards + vendor field grids (not a classic sheet row for every line) |
| Tasks | Open `sheet-tsk` + Completed `sheet-tsk`; status `.st-dd` |
| Travellers | `sheet-trv` |
| Documents | `sheet-doc` |
| Finance | KPI strip; customer payments `sheet-pay`; supplier payments `sheet-ven` |
| Vouchers | `sheet-vo` |
| Communication | Thread list + composer (breakpoint at 820px) |
| Activity | `sheet-act` |

### Interactive states captured on Tasks

| State | How | Screenshot |
| --- | --- | --- |
| Status menu open | `.st-pick` on Tasks | [tasks__status-menu-open__desktop.png](./screenshots/tasks__status-menu-open__desktop.png) |
| Filter menu open | `.filter-wrap` on Tasks | [tasks__filter-open__desktop.png](./screenshots/tasks__filter-open__desktop.png) |

---

## 4. Notes drawer

Visible in detail mode only (hidden in `.list-mode`).

| State | How to open | Screenshot |
| --- | --- | --- |
| Browse | `.notes-main` | [notes__browse__desktop.png](./screenshots/notes__browse__desktop.png) |
| Compose | `.notes-add` | [notes__compose__desktop.png](./screenshots/notes__compose__desktop.png) |

Empty notes search uses `.nd-empty` (“No notes match.”) — renderable via notes search; not separately captured (same drawer chrome).

---

## 5. Modals (22)

All overlays use `.modal-overlay` + `.modal`. Opened via `[data-open-modal]` or forced open for audit when trigger is off-tab. Every modal was captured on desktop:

| ID | Title (UI) | Typical trigger surface | Screenshot |
| --- | --- | --- | --- |
| `modal-directBooking` | Direct booking | List toolbar | [modal__directBooking__desktop.png](./screenshots/modal__directBooking__desktop.png) |
| `modal-editBooking` | Edit booking | Detail header | [modal__editBooking__desktop.png](./screenshots/modal__editBooking__desktop.png) |
| `modal-manageMargin` | Manage margin | Vendors toolbar | [modal__manageMargin__desktop.png](./screenshots/modal__manageMargin__desktop.png) |
| `modal-priceAmend` | Create price amendment | Finance | [modal__priceAmend__desktop.png](./screenshots/modal__priceAmend__desktop.png) |
| `modal-catalog` | Add from catalog | Vendors | [modal__catalog__desktop.png](./screenshots/modal__catalog__desktop.png) |
| `modal-addService` | Add service line | Vendors | [modal__addService__desktop.png](./screenshots/modal__addService__desktop.png) |
| `modal-editPrice` | Edit selling price | Vendors | [modal__editPrice__desktop.png](./screenshots/modal__editPrice__desktop.png) |
| `modal-editCost` | Edit supplier cost | Vendors | [modal__editCost__desktop.png](./screenshots/modal__editCost__desktop.png) |
| `modal-assignVendor` | Assign vendor | Vendors | [modal__assignVendor__desktop.png](./screenshots/modal__assignVendor__desktop.png) |
| `modal-contact` | Contact vendor | Vendors | [modal__contact__desktop.png](./screenshots/modal__contact__desktop.png) |
| `modal-watchers` | Watchers | Vendors | [modal__watchers__desktop.png](./screenshots/modal__watchers__desktop.png) |
| `modal-addTraveller` | Add traveller | Travellers | [modal__addTraveller__desktop.png](./screenshots/modal__addTraveller__desktop.png) |
| `modal-addTask` | Add task | Tasks | [modal__addTask__desktop.png](./screenshots/modal__addTask__desktop.png) |
| `modal-recordPayment` | Record customer payment | Finance | [modal__recordPayment__desktop.png](./screenshots/modal__recordPayment__desktop.png) |
| `modal-addInstalment` | Add instalment | Finance | [modal__addInstalment__desktop.png](./screenshots/modal__addInstalment__desktop.png) |
| `modal-editInstalment` | Edit instalment | Finance | [modal__editInstalment__desktop.png](./screenshots/modal__editInstalment__desktop.png) |
| `modal-supplierPay` | Supplier payment | Finance | [modal__supplierPay__desktop.png](./screenshots/modal__supplierPay__desktop.png) |
| `modal-voucherFile` | Voucher file | Vouchers row | [modal__voucherFile__desktop.png](./screenshots/modal__voucherFile__desktop.png) |
| `modal-uploadVoucher` | Upload voucher | Vouchers | [modal__uploadVoucher__desktop.png](./screenshots/modal__uploadVoucher__desktop.png) |
| `modal-requestDoc` | Request documents | Documents / Comm | [modal__requestDoc__desktop.png](./screenshots/modal__requestDoc__desktop.png) |
| `modal-attachFile` | Upload file | Documents | [modal__attachFile__desktop.png](./screenshots/modal__attachFile__desktop.png) |
| `modal-newMessage` | New message | Communication | [modal__newMessage__desktop.png](./screenshots/modal__newMessage__desktop.png) |

---

## 6. Blocked / not implemented (do not invent screenshots)

| State | Status | Reason |
| --- | --- | --- |
| Loading / skeleton | **Blocked** | Not implemented in Booking |
| Network / form error pages | **Blocked** | Not implemented |
| Disabled filters | **Blocked** | Controls stay enabled |
| Table-row **More** menu contents | **Blocked** | `.more-btn` exists; no menu markup or handler |
| Sidebar destinations (non-Bookings) | **Blocked** | Chrome only |
| CSS `.empty` card empty-state | **Not used** | Styles exist; live empties are `#bkEmpty` / `.nd-empty` |

---

## 7. Capture summary

| Category | Captured PNGs |
| --- | --- |
| Shell / list / filters / empty / bulk | 10 |
| Detail tabs + narrow / 820 | 12 |
| Tasks menus | 2 |
| Notes drawer | 2 |
| Modals | 22 |
| **Total** | **49** (+ `_computed-metrics.json`) |
