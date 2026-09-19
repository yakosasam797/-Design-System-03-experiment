# Pattern inventory — Gate 2 proposal

**Status:** Proposal only  
**Rule:** Patterns compose exported components; Storybook must use package exports (Gate 3+), not mocks.

Each pattern: purpose · regions/slots · when to use · Booking screens · notes.

---

## AppShell
- **Purpose:** Product chrome: sidebar + topbar + main.
- **Slots / data:** `brandName`, `navGroups` or `nav`, `notes`, `sidebarFooter`, `leading`, `crumbs`, `search`, `actions`, `children`; `listMode`, collapsed.
- **Screens:** All — `shell__list__desktop`, `shell__collapsed__desktop`, detail shells.
- **Do not:** Hardcode Booking nav routes in the package.

## ListPage
- **Purpose:** Title + primary acts + stage TabBar + toolbar (search/filters) + DataSheet + bulk + footer.
- **Screens:** List Upcoming/Travelling/Completed/Cancelled; search/empty/bulk states.
- **Exists:** extend for toolbar Button size 36.

## DetailPage / RecordShell (NEW)
- **Purpose:** Record header (title, status, meta, owner/team, primary Edit) + section TabBar + panel body.
- **Slots:** `title`, `status`, `meta`, `owners`, `actions`, `tabs`, `children`.
- **Screens:** All detail tabs — `detail__overview__desktop` … `detail__activity__desktop`.
- **Booking-specific content** (destination, BK id) via props — structure is shared.

## SheetToolbar
- **Purpose:** Search + FilterSelect(s) + primary CTA above a sheet.
- **Screens:** Tasks, Travellers, Documents, Finance, Vouchers, Activity (and List toolbar analogue).
- **I2:** CTA often height 36.

## DataSheet recipes
- **Purpose:** Document cell compositions (lead/stack/money/owner/status/actions) without domain column IDs in core API.
- **Screens:** Every sheet listed in Gate 1.
- **Recipes (Storybook later):** list density; dual stacked sheets (Tasks open/completed); finance dual sheets stay Booking-specific wrappers.

## ListBulkBar
- **Purpose:** Selection count + bulk acts.
- **Screens:** `list__bulk-selected__desktop`.

## ModalForm
- **Purpose:** Modal + eyebrow + title + field stack + Cancel/Primary.
- **Screens:** All 22 modals.
- **Composes:** Modal + TextField/SelectField/Button.

## NotesDrawer (NEW)
- **Purpose:** Anchored overlay: browse (search, pill filters, list) / compose (textarea, related-to, pin, save).
- **Screens:** `notes__browse__desktop`, `notes__compose__desktop`.
- **I3:** pill filter chips.

## KpiStrip
- **Purpose:** Horizontal metric tiles; optional jump handlers.
- **Screens:** Overview trip summary; Tasks readiness KPIs; Finance summary strip.
- **If tiles become domain-specific cards** → Booking-specific (see boundary).

---

## Pattern vs one-off

| Candidate | Verdict |
| --- | --- |
| Generic “Card” | **Do not** add — borders alone ≠ pattern |
| Communication split pane | **Booking-specific** (820 breakpoint) |
| Service/vendor card | **Booking-specific** |
| Trip identity bar | Prefer **DetailPage header slots** (shared) with Booking props |

---

## Approval asks

- [ ] DetailPage / RecordShell as shared pattern
- [ ] NotesDrawer + SheetToolbar + ModalForm as shared
- [ ] KpiStrip shared with data props
- [ ] No generic Card
