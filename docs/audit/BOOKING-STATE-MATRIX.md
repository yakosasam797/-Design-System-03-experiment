# Booking module — state matrix

**Gate:** 1  
**Evidence:** rendered UI + [`screenshots/`](./screenshots/) + `_computed-metrics.json` (re-run 2026-09-19T07:00:15Z)  
**Columns:** Route/screen · State · Screenshot · Components visible · Foundation values · Reusable pattern · Booking-specific content · Inconsistencies · Audit status

Audit status: `Captured` | `Blocked` | `Not implemented` | `Partial`

---

## Shell

| Route/screen | State | Screenshot | Components visible | Foundation values | Reusable pattern | Booking-specific content | Inconsistencies | Audit status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| App shell | Expanded + list | [shell__list__desktop.png](./screenshots/shell__list__desktop.png) | SidebarNav, NotesStrip (hidden in list-mode), SearchField, CreditsMeter, Avatar/account, crumbs | Onest/Public Sans; 8–10px radii; pink nav active | AppShell | Ops nav labels | Non-Bookings nav dead | Captured |
| App shell | Collapsed | [shell__collapsed__desktop.png](./screenshots/shell__collapsed__desktop.png) | Icon rail, tooltips | Frame 66px rail | AppShell collapsed | — | — | Captured |
| App shell | Narrow 390 | [shell__list__narrow.png](./screenshots/shell__list__narrow.png) | Same, compressed | — | AppShell | Horizontal scroll likely | Q5=B scroll | Captured |

---

## List

| Route/screen | State | Screenshot | Components visible | Foundation values | Reusable pattern | Booking-specific content | Inconsistencies | Audit status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| List | Upcoming | [list__upcoming__desktop.png](./screenshots/list__upcoming__desktop.png) | TabBar, Button, DataSheet, StatusChip, Avatar, SearchField, FilterSelect | st-cap 32/12.5/8; btn-sm 32/8 | ListPage | Readiness + finance vocab | Status size vs old pilot 28px | Captured |
| List | Travelling | [list__travelling__desktop.png](./screenshots/list__travelling__desktop.png) | Same | Same | ListPage | Stage filter | — | Captured |
| List | Completed | [list__completed__desktop.png](./screenshots/list__completed__desktop.png) | Same | Same | ListPage | — | — | Captured |
| List | Cancelled | [list__cancelled__desktop.png](./screenshots/list__cancelled__desktop.png) | Same | Same | ListPage | — | — | Captured |
| List | Owner filter open | [list__owner-filter-open__desktop.png](./screenshots/list__owner-filter-open__desktop.png) | FilterSelect menu | Menu item radius 8; min-h 32 | List toolbar | Owner scope | — | Captured |
| List | Search results | [list__search-results__desktop.png](./screenshots/list__search-results__desktop.png) | SearchField + sheet | — | ListPage | Client filter | — | Captured |
| List | Empty results | [list__empty-results__desktop.png](./screenshots/list__empty-results__desktop.png) | `#bkEmpty` text | ink-2 13.5px | EmptyState (simple) | “No bookings in this view” | `.empty` card unused | Captured |
| List | Bulk selected | [list__bulk-selected__desktop.png](./screenshots/list__bulk-selected__desktop.png) | Checkbox, ListBulkBar | — | sheet-with-bulk | Booking selection | — | Captured |
| List | More menu open | — | `.more-btn` only | — | — | — | No menu | **Blocked** |
| List | Loading skeleton | — | — | — | — | — | — | **Not implemented** |
| List | Error page | — | — | — | — | — | — | **Not implemented** |
| List | Disabled filter | — | — | — | — | — | Always enabled | **Not implemented** |

---

## Detail tabs

| Route/screen | State | Screenshot | Components visible | Foundation values | Reusable pattern | Booking-specific content | Inconsistencies | Audit status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Detail / Overview | Default | [detail__overview__desktop.png](./screenshots/detail__overview__desktop.png) | Record header, TabBar, KPI, sheet-it, StatusChip | Dual type; pink accents | DetailPage (proposed) | Trip summary | — | Captured |
| Detail / Vendors | Default | [detail__services__desktop.png](./screenshots/detail__services__desktop.png) | Service cards, filters, buttons, st-cap | — | SheetToolbar + cards | Vendor fields | — | Captured |
| Detail / Tasks | Default | [detail__tasks__desktop.png](./screenshots/detail__tasks__desktop.png) | sheet-tsk ×2, st-pick, filters | st-pick 32/8 | SheetToolbar | Task statuses | Vocab ≠ list readiness | Captured |
| Detail / Tasks | Status menu open | [tasks__status-menu-open__desktop.png](./screenshots/tasks__status-menu-open__desktop.png) | StatusSelect | Hover hex hard-coded | — | Open/Progress/Blocked/Done | Hex hovers | Captured |
| Detail / Tasks | Filter open | [tasks__filter-open__desktop.png](./screenshots/tasks__filter-open__desktop.png) | FilterSelect | — | — | — | — | Captured |
| Detail / Travellers | Default | [detail__travellers__desktop.png](./screenshots/detail__travellers__desktop.png) | sheet-trv | Toolbar CTA h=36 inline | SheetToolbar | Traveller rows | 36 vs btn-sm 32 | Captured |
| Detail / Documents | Default | [detail__documents__desktop.png](./screenshots/detail__documents__desktop.png) | sheet-doc | Inline h=36 CTAs | SheetToolbar | Doc statuses | Same height drift | Captured |
| Detail / Finance | Default | [detail__finance__desktop.png](./screenshots/detail__finance__desktop.png) | KPI, sheet-pay, sheet-ven | — | Dual sheet | Payment vocab | Finance ≠ readiness labels | Captured |
| Detail / Vouchers | Default | [detail__vouchers__desktop.png](./screenshots/detail__vouchers__desktop.png) | sheet-vo | Upload btn **h=36**, radius 10 | SheetToolbar | Voucher pipeline | Height + radius vs btn-sm | Captured |
| Detail / Communication | Default 1440 | [detail__communication__desktop.png](./screenshots/detail__communication__desktop.png) | Thread list, composer, btn-xs | — | Comm split | Unread threads | — | Captured |
| Detail / Communication | 820 breakpoint | [detail__communication__820.png](./screenshots/detail__communication__820.png) | Same, stacked/compressed | `@media max-width:820px` | Comm split | — | — | Captured |
| Detail / Communication | Narrow 390 | [detail__communication__narrow.png](./screenshots/detail__communication__narrow.png) | Same | — | — | — | — | Captured |
| Detail / Activity | Default | [detail__activity__desktop.png](./screenshots/detail__activity__desktop.png) | sheet-act | — | Sheet | Activity rows | — | Captured |
| Detail | Overview narrow | [detail__overview__narrow.png](./screenshots/detail__overview__narrow.png) | Header + tabs | — | DetailPage | — | Tab overflow | Captured |

---

## Notes drawer

| Route/screen | State | Screenshot | Components visible | Foundation values | Reusable pattern | Booking-specific content | Inconsistencies | Audit status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Notes | Browse | [notes__browse__desktop.png](./screenshots/notes__browse__desktop.png) | NotesDrawer, `.nd-fil` | **nd-fil radius 999**, h=30 | NotesDrawer | Pinned notes | Pill vs CTA 8px | Captured |
| Notes | Compose | [notes__compose__desktop.png](./screenshots/notes__compose__desktop.png) | Compose form | Mode btn radius 8 | NotesDrawer | — | Filter chips still pill | Captured |
| Notes | Search empty | — | `.nd-empty` | — | EmptyState | “No notes match.” | Renderable; not separately shot | Partial |

---

## Modals

All 22 captured at desktop. Pattern: Modal + form fields + Cancel/Primary.

| Route/screen | State | Screenshot | Components visible | Foundation values | Reusable pattern | Booking-specific content | Inconsistencies | Audit status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Modal | Direct booking | [modal__directBooking__desktop.png](./screenshots/modal__directBooking__desktop.png) | Modal, fields, Button | Overlay rgba; radius 10 modal | Modal form | Create booking | — | Captured |
| Modal | Edit booking | [modal__editBooking__desktop.png](./screenshots/modal__editBooking__desktop.png) | Same | — | Modal form | Owner/team | — | Captured |
| Modal | Manage margin | [modal__manageMargin__desktop.png](./screenshots/modal__manageMargin__desktop.png) | Radios, selects | — | Modal form | Markup | — | Captured |
| Modal | Price amendment | [modal__priceAmend__desktop.png](./screenshots/modal__priceAmend__desktop.png) | Same | — | Modal form | Finance | — | Captured |
| Modal | Catalog | [modal__catalog__desktop.png](./screenshots/modal__catalog__desktop.png) | Wide modal, list | — | Modal form | Dubai catalog | — | Captured |
| Modal | Add service | [modal__addService__desktop.png](./screenshots/modal__addService__desktop.png) | Same | — | Modal form | Service kinds | — | Captured |
| Modal | Edit price | [modal__editPrice__desktop.png](./screenshots/modal__editPrice__desktop.png) | Same | Mono amounts | Modal form | — | — | Captured |
| Modal | Edit cost | [modal__editCost__desktop.png](./screenshots/modal__editCost__desktop.png) | Same | — | Modal form | Cost reasons | — | Captured |
| Modal | Assign vendor | [modal__assignVendor__desktop.png](./screenshots/modal__assignVendor__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | Contact vendor | [modal__contact__desktop.png](./screenshots/modal__contact__desktop.png) | Textarea | — | Modal form | — | — | Captured |
| Modal | Watchers | [modal__watchers__desktop.png](./screenshots/modal__watchers__desktop.png) | Tags | info tags use surface-2 | Modal form | — | surface-2 = info-bg | Captured |
| Modal | Add traveller | [modal__addTraveller__desktop.png](./screenshots/modal__addTraveller__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | Add task | [modal__addTask__desktop.png](./screenshots/modal__addTask__desktop.png) | Same | — | Modal form | Priority P0–P3 | — | Captured |
| Modal | Record payment | [modal__recordPayment__desktop.png](./screenshots/modal__recordPayment__desktop.png) | Same | Mono | Modal form | Customer pay | — | Captured |
| Modal | Add instalment | [modal__addInstalment__desktop.png](./screenshots/modal__addInstalment__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | Edit instalment | [modal__editInstalment__desktop.png](./screenshots/modal__editInstalment__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | Supplier pay | [modal__supplierPay__desktop.png](./screenshots/modal__supplierPay__desktop.png) | Same | — | Modal form | Supplier | — | Captured |
| Modal | Voucher file | [modal__voucherFile__desktop.png](./screenshots/modal__voucherFile__desktop.png) | Readouts | — | Modal form | File meta | — | Captured |
| Modal | Upload voucher | [modal__uploadVoucher__desktop.png](./screenshots/modal__uploadVoucher__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | Request doc | [modal__requestDoc__desktop.png](./screenshots/modal__requestDoc__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | Attach file | [modal__attachFile__desktop.png](./screenshots/modal__attachFile__desktop.png) | Same | — | Modal form | — | — | Captured |
| Modal | New message | [modal__newMessage__desktop.png](./screenshots/modal__newMessage__desktop.png) | Same | — | Modal form | — | — | Captured |

---

## Computed foundation spot-checks (Gate 1 re-run 2026-09-19T07:00:15Z)

From live render (`screenshots/_computed-metrics.json` + CDP):

| Control | Measured / declared |
| --- | --- |
| `.btn-sm` | height **32px**, radius **8px**, font 12.5px Onest 600 |
| `.st-cap` / `.st-pick` | height **32px**, radius **8px**, font 12.5px Public Sans 600 |
| `.sheet-bk .row-head` (“Booking”) | Public Sans **12px / 600 / letter-spacing 0.12px**, colour `rgb(62, 69, 80)` |
| List filter wrap | height **36px**, radius **10px** |
| Voucher Upload CTA | height **36px**, radius **10px**, Onest 13.5px |
| `.nd-fil` | height **30px**, radius **999px** |
| Tab `.chip` | JetBrains Mono **10.5px / 600**, radius 6px, height 18 |
| `--ink-4` | `#8A909A` |
| `--surface-2` / `--info-bg` | both `#F1F4F7` |

---

## Totals

| Audit status | Count (rows above) |
| --- | --- |
| Captured | 49 screenshot-backed states |
| Blocked | More menu |
| Not implemented | Loading, errors, disabled filters |
| Partial | Notes search empty (mechanism verified in source) |
