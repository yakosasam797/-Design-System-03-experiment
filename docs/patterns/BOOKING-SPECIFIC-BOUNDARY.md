# Booking-specific boundary — Gate 2 proposal

**Status:** Proposal only  
**Rule:** Core `@paryatech/design-system` stays product-agnostic. Domain layouts that encode travel/booking vocabulary stay outside core (Booking app or future `@paryatech/booking-ui`).

---

## Classification test

Promote to **shared** only if repeated, stable structure, content-swappable, explainable without Booking domain language.

Otherwise: **Booking-specific composition** or **one-off**.

---

## Out of core (Booking-specific)

| Composition | Why | Booking screens |
| --- | --- | --- |
| List readiness + finance dual status vocab | Domain labels (At risk, Collect ₹…) | List stages |
| Service / vendor card grid | Travel ops fields, confirmation flows | `detail__services__desktop` |
| Finance dual sheets (customer vs supplier payments) | Domain payment model | `detail__finance__desktop` |
| Voucher pipeline (blocked/awaiting/sent + file meta) | Domain | `detail__vouchers__desktop` |
| Communication split (thread list + composer + drafts) | Domain messaging; 820 layout | `detail__communication__*` |
| Activity feed domain rows | Domain event copy | `detail__activity__desktop` |
| Domain modals (catalog, margin, voucher file, instalments…) | Booking flows | `modal__catalog__*`, `modal__manageMargin__*`, etc. |
| Direct booking create flow content | Domain | `modal__directBooking__*` |

These **may compose** shared Modal, DataSheet, Button, StatusChip, TextField, SheetToolbar, KpiStrip.

---

## Shared (in core) used heavily by Booking

AppShell, ListPage, DetailPage, DataSheet cells, TabBar, Button/IconButton, StatusChip/StatusSelect, SearchField, FilterSelect, EmptyState, Modal, NotesStrip, NotesDrawer, CreditsMeter, Pagination, Tooltip, KpiStrip (generic).

---

## One-offs / deferred

| Item | Disposition |
| --- | --- |
| `.more-btn` without menu (I10) | Defer ActionMenu; do not invent menu items |
| Unused `.empty` card CSS | Deprecated candidate — use EmptyState |
| Hash boot without router | Product concern, not DS |
| Inline height:36 before toolbar size token | Absorbed by Button `toolbar` size (I2) |

---

## Future package (optional)

`@paryatech/booking-ui` could host service cards, finance dual sheets, communication split, voucher recipes — depending on shared DS only.

---

## Approval asks

- [ ] Accept out-of-core list above
- [ ] Accept shared list above
- [ ] Defer ActionMenu (I10)
- [ ] Allow later booking-ui package without blocking Gate 3 core work
