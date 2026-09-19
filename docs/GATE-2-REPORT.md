# Gate 2 report — Architecture proposals

**Status:** APPROVED (2026-09-19) — Gate 3 implemented  
**Date:** 2026-09-19  
**Scope:** Proposal documentation only in `@paryatech/design-system`  
**Not done in Gate 2:** token edits, components, Storybook (see Gate 3)

Gate 1 inventory is approved. Live Booking CDP is the SoT for I1–I11 dispositions encoded below.

---

## 1. Deliverables

| File | Purpose |
| --- | --- |
| [`docs/foundations/COLOR.md`](./foundations/COLOR.md) | Primitives, semantics, aliases + screen cites |
| [`docs/foundations/TYPOGRAPHY.md`](./foundations/TYPOGRAPHY.md) | Families, roles, component map (I4) |
| [`docs/foundations/SIZE-RADIUS.md`](./foundations/SIZE-RADIUS.md) | Heights 32/36/38, radii 8/10/999 (I1–I3) |
| [`docs/foundations/BREAKPOINTS.md`](./foundations/BREAKPOINTS.md) | 1000 shell, **820** communication (I11) |
| [`docs/foundations/MOTION-ELEVATION-FOCUS.md`](./foundations/MOTION-ELEVATION-FOCUS.md) | Shadows, focus, z-index, motion |
| [`docs/icons/ICON-ARCHITECTURE.md`](./icons/ICON-ARCHITECTURE.md) | Icon layer, sizes/strokes, registry keys |
| [`docs/components/COMPONENT-INVENTORY.md`](./components/COMPONENT-INVENTORY.md) | Shared components + APIs + screens |
| [`docs/patterns/PATTERN-INVENTORY.md`](./patterns/PATTERN-INVENTORY.md) | AppShell → NotesDrawer patterns |
| [`docs/patterns/BOOKING-SPECIFIC-BOUNDARY.md`](./patterns/BOOKING-SPECIFIC-BOUNDARY.md) | Out-of-core domain compositions |

---

## 2. I1–I11 disposition (encoded in proposals)

| ID | Proposal |
| --- | --- |
| I1 | StatusChip **32 / 12.5 / 8** |
| I2 | Button size **`toolbar` = 36** |
| I3 | Notes filters stay **pill 999** (filter-chip family) |
| I4 | Table headers **Public Sans 12/600/0.12px** |
| I5 | `--surface-2` / `--info-bg` same hex, distinct roles |
| I6 | `--ink-4` decorative/disabled only |
| I7 | Four tones in DS; Booking maps labels |
| I8 | Status `*-bg-hover` tokens |
| I9 | EmptyState `illustrated` + `compact` |
| I10 | ActionMenu **deferred** |
| I11 | Breakpoint **820** named |

---

## 3. Shared vs Booking-specific (summary)

**Shared:** foundations, Icon registry, Button/IconButton, StatusChip/StatusSelect, inputs, Modal, DataSheet, TabBar, AppShell, ListPage, DetailPage, SheetToolbar, NotesDrawer, KpiStrip, EmptyState…

**Booking-specific:** service/vendor cards, finance dual sheets, voucher pipeline UI, communication split, activity domain feed, domain modal contents.

---

## 4. Proposed Gate 3 implementation order (after approval only)

1. Token updates reflecting foundations (sizes, hovers, docs)  
2. Icon registry + Icon component  
3. Button size/`toolbar` + StatusChip parity + StatusSelect  
4. Modal + TextField  
5. Storybook foundation pages  

Do **not** start Gate 3 until this report is approved.

---

## 5. Approval checklist

- [ ] Foundations (colour, type, size/radius, breakpoints, motion/focus)
- [ ] Icon architecture and catalogue approach
- [ ] Component inventory (including NEW / DEFER)
- [ ] Pattern inventory
- [ ] Booking-specific boundary
- [ ] I1–I11 disposition

---

## 6. Stop the line

**Gate 2 is done.** Await design approval before any implementation (Gate 3).
