# Component inventory — Gate 2 proposal

**Status:** Proposal only — APIs and scope; no code changes in Gate 2  
**Evidence:** Gate 1 inventories + screenshots under `docs/audit/`  
**Existing exports:** `src/index.ts`

For each item: purpose · API sketch · variants · DS status · **Booking screens** · notes / I\*.

---

## Primitives

### Button
- **Purpose:** Text + optional leading/trailing icon actions.
- **API:** `<Button variant size leadingIcon trailingIcon disabled loading?>`
- **Variants (from Booking):** `primary` (teal fill), `brand` (teal outline), `ghost`, `secondary`/`subtle` as needed — map Booking `.btn-primary` / `.btn-brand` / `.btn-ghost`.
- **Sizes:** `sm` 32 · `toolbar` 36 · `md` 38 · `xs` where Booking uses `btn-xs` (comm).
- **DS:** exists — **extend** sizes + icon slots; fix parity in Gate 3/11.
- **Screens:** List header CTAs; Detail toolbars (Tasks/Vouchers/Finance…); all Modal footers; Notes save/cancel.
- **I2:** toolbar 36 formalised.

### IconButton
- **Purpose:** Icon-only chrome/row actions.
- **API:** `<IconButton variant size label icon>`
- **Screens:** Topbar settings/help/phone/bell; back; row More; notes add; sidebar collapse.
- **I10:** More remains without menu until ActionMenu approved.

### StatusChip
- **Purpose:** Read-only status pill (soft-rect).
- **API:** `<StatusChip tone>label</StatusChip>` tones: `open|progress|blocked|done` (+ info if needed).
- **Size:** **32 / 12.5 / radius 8** (I1).
- **Screens:** List readiness + finance; Overview Upcoming; Vouchers; Services; Tasks (read-only caps).
- **I7:** Labels from consumer; tones from DS.

### StatusSelect (NEW)
- **Purpose:** Editable status (`.st-pick` + menu).
- **API:** `<StatusSelect value options onChange>` options carry tone + label.
- **Screens:** Tasks open/completed sheets — `tasks__status-menu-open__desktop`.
- **I8:** hover bg tokens.

### Checkbox
- **Purpose:** Row/header selection; indeterminate.
- **Screens:** All selectable sheets (List, Tasks, Docs, Finance…).

### Avatar
- **Purpose:** Initials circle; tones person/work/warn/channel.
- **Screens:** List owner; Detail team; Tasks assignee; topbar account.

### CountChip / Tab badge
- **Purpose:** Numeric badge on tabs (Mono 10.5, radius 6).
- **Screens:** List stages; Detail tab bar.

### Tag (soft)
- **Purpose:** `.tag.t-info` watcher/meta tags.
- **Screens:** Watchers modal; limited elsewhere.
- **Decision:** thin primitive or StatusChip lite — prefer **Tag** separate from status.

---

## Inputs

### SearchField
- **Purpose:** Single-line search.
- **Screens:** Topbar “Search anything”; List booking search; Tasks/Docs/… sheet searches.
- **Do not** fork components per placeholder.

### FilterSelect
- **Purpose:** Custom select + menu (owner scope, status filters).
- **Screens:** List owner filter; Tasks status filter; Activity module filter.

### TextField / SelectField / TextArea (NEW)
- **Purpose:** Modal form `.mf` / `.mf-i` / labels.
- **Screens:** All 22 modals; Notes compose textarea.

---

## Feedback / overlay

### Tooltip
- **Purpose:** `[data-tip]` style tips.
- **Screens:** Collapsed nav, icon chrome, More.

### EmptyState
- **Purpose:** Illustrated or compact empty.
- **Variants:** `illustrated` (list `#bkEmpty`), `compact` (notes `.nd-empty`).
- **Screens:** `list__empty-results__desktop`; notes search (Partial).
- **I9.**

### Modal / Dialog (NEW)
- **Purpose:** Overlay + head/body/foot.
- **API:** slots title, eyebrow, body, footer; sizes default/wide.
- **Screens:** All 22 modals (`modal__*__desktop`).

### ActionMenu (DEFER)
- **Purpose:** Row More menu — **blocked in Booking (I10)**. Do not invent items in Gate 2.

---

## Data

### DataSheet (+ cells)
- **Purpose:** Density table: header, rows, lead/stack/money/owner cells, truncation.
- **Screens:** List `sheet-bk`; Overview itinerary; Tasks; Travellers; Documents; Finance pay/ven; Vouchers; Activity.
- **Do not** hardcode Booking columns in the package.

### Pagination
- **Screens:** Sheet footers List/Detail sheets.

### TabBar / Tab
- **Purpose:** Stage tabs + detail sections + overflow More.
- **Screens:** List stages; Detail 9 tabs (+ overflow on narrow).

---

## Shell chrome pieces

### SidebarNav / NavGroup / NavItem
- **Screens:** All shell states; data-driven `navGroups` — no hardcoded Booking routes in package defaults.

### NotesStrip
- **Screens:** Detail (hidden in list-mode).

### CreditsMeter
- **Screens:** Shell sidebar footer.

### SkipLink
- **Screens:** A11y — AppShell.

### KpiStrip / Kpi (NEW or pattern)
- **Purpose:** Summary metric tiles (`.kpi-strip`).
- **Screens:** Overview trip summary; Tasks readiness KPIs; Finance summary.
- **Classify:** reusable **component** if API is label/value/icon/tone + optional `onClick`; content from consumer.

---

## Approval asks (components)

- [ ] Extend Button sizes (sm/toolbar/md)
- [ ] StatusChip 32/8 + four tones
- [ ] Add StatusSelect, Modal, TextField/SelectField, KpiStrip
- [ ] EmptyState variants
- [ ] Defer ActionMenu until Booking defines More menu
