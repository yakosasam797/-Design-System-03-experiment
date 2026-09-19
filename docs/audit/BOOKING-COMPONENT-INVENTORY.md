# Booking module — component inventory

**Gate:** 1 (classification only — no implementation)  
**Source:** rendered Booking UI + `booking-redesign.html` (Gate 1 re-run verified 2026-09-19)  
**Existing DS exports:** [`src/index.ts`](../../src/index.ts) (`@paryatech/design-system`)

Classification legend:

| Tag | Meaning |
| --- | --- |
| foundation token | Colour / type / space / radius / elevation |
| reusable primitive | Atomic control (button, chip, checkbox…) |
| reusable component | Composed control with API |
| reusable pattern | Multi-region layout recipe |
| Booking-specific composition | Domain layout that should stay in Booking or a Booking package |
| one-off | Prototype-only; do not promote without redesign |
| inconsistency needing approval | Values conflict; see `BOOKING-INCONSISTENCIES.md` |
| deprecated | Prefer not to carry forward |

---

## 1. Foundations (observed in Booking)

| Item | Observed values | Classification | Proposed vs existing DS |
| --- | --- | --- | --- |
| Colour tokens | `--ink`, `--ink-2/3/4`, `--surface`, `--surface-2/3`, `--line`, status `--ok/warn/bad/info*`, `--pink*`, `--accent*` | foundation token | Partial in `tokens/tokens.css`; **`--surface-2` ≡ `--info-bg`** needs approval |
| Type stack | Onest (titles/CTAs), Public Sans (UI/body), JetBrains Mono (IDs, money, pagination) | foundation token | Exists in typography; table-header treatment inconsistent |
| Radii | 8px (sm CTA / chips), 10px (default btn / search), 999px (notes filters, badges) | foundation token | Soft-rect recipe exists; pill filters are inconsistency |
| Control heights | 38 default btn · 32 `btn-sm` / status · 36 search/filter/toolbar · 30 notes filter | foundation token | Size scale not fully formalised |
| Elevation | `--blockShadow` on sheets/blocks | foundation token | Confirm token name in Gate 2 |
| Focus | Pink outline on filter/status | foundation token | DS has 2px focus-visible (Q6=B) |

---

## 2. Reusable primitives

| Booking selector / UI | Role | Classification | Existing DS export | Gap |
| --- | --- | --- | --- | --- |
| `.btn` + variants (`primary`, `brand`, `ghost`, `secondary`, `subtle`) + `btn-sm` / `btn-xs` / `btn-icon` | Button | reusable primitive | `Button`, `IconButton` | Map `brand` vs `secondary`; xs size |
| `.st-cap` | Read-only status chip | reusable primitive | `StatusChip` | Height now **32 / 12.5 / radius 8** (was pilot 28/12) |
| `.st-pick` + `.st-dd` + `.st-menu` + `.st-opt` | Editable status select | reusable component | — | **New** StatusSelect / StatusMenu |
| `.cbx` | Custom checkbox | reusable primitive | `Checkbox` | Indeterminate `.some` / dash |
| `.avatar` (+ `.pink`) | Initials avatar | reusable primitive | `Avatar` | Tone mapping |
| `.chip` on tabs | Count badge | reusable primitive | TabBar chip | Neutral chips (Q1=A) |
| `.tag` / `.t-info` | Soft tag | reusable primitive | — or StatusChip lite | Decide Gate 2 |
| `.search` + input | Search field | reusable component | `SearchField` | — |
| `.filter-wrap` + custom menu | Filter select | reusable component | `FilterSelect` | Open/menu styles |
| `[data-tip]` CSS tooltips | Tooltip | reusable component | `Tooltip` | — |
| `.pg` pagination buttons | Page control | reusable primitive | `Pagination` | Teal current page |
| `.icon-btn` / `.back-btn` | Icon button | reusable primitive | `IconButton` | — |
| `.mf` / `.mf-i` / `.mf-l` | Modal form field | reusable primitive | — | TextField / SelectField |
| `.nd-fil` | Notes filter chip | inconsistency needing approval | — | Still **pill 999px** vs CTA 8px |

---

## 3. Reusable components

| Booking UI | Classification | Existing DS | Notes |
| --- | --- | --- | --- |
| Tab bar (list stage + detail tabs + overflow More) | reusable component | `TabBar`, `Tab` | Detail overflow menu is part of TabBar |
| Modal overlay + head/body/foot | reusable component | — | **New** Modal / Dialog |
| Notes strip (`.notes` / `.notes-main` / `.notes-add`) | reusable component | `NotesStrip` | List-mode hides strip |
| Credits meter | reusable component | `CreditsMeter` | — |
| Sidebar nav groups / items | reusable component | `SidebarNav`, `NavGroup`, `NavItem` | Non-Bookings items non-functional |
| Empty: `#bkEmpty`, `.nd-empty` | reusable component | `EmptyState` | `.empty` card unused in live tabs |
| KPI strip (`.kpi-strip` / `.kpi`) | reusable component | — | **New** or pattern |
| Bulk selection bar | reusable pattern piece | `ListBulkBar` | — |

---

## 4. Data sheet system (tables)

Present sheet classes: `sheet-bk`, `sheet-it`, `sheet-vo`, `sheet-tsk` (×2), `sheet-trv`, `sheet-doc`, `sheet-pay`, `sheet-ven`, `sheet-act`.

| Piece | Classification | Existing DS | Notes |
| --- | --- | --- | --- |
| `.sheet` + `.row-head` + `.row` | reusable pattern | `DataSheet*` | Column sets differ by domain |
| `.cell-lead` / stack lines | reusable component | `LeadCell`, `StackCell`, `StackLine` | — |
| Money / mono cells | reusable component | `MoneyCell` | JetBrains Mono |
| Owner cell (avatar + +N) | reusable component | `OwnerCell` | — |
| `.row-acts` Open + More | reusable pattern | — | More menu **not implemented** |
| Truncation `.ell` | foundation / primitive | — | Long cells on List + Tasks |

---

## 5. Reusable patterns

| Pattern | Surfaces | Classification | Existing DS |
| --- | --- | --- | --- |
| App shell (sidebar + topbar + main) | All | reusable pattern | `AppShell` |
| List page (title acts + stage tabs + toolbar + sheet + bulk) | List | reusable pattern | `ListPage` |
| Detail record header + tabbed panels | Detail | reusable pattern | — **New** DetailPage / RecordShell |
| Sheet + toolbar (search + filters + primary CTA) | Most tabs | reusable pattern | recipe `list-toolbar` / `sheet-with-bulk` |
| Modal form (eyebrow + title + fields + Cancel/Primary) | All 22 modals | reusable pattern | — with Modal |
| Notes drawer (browse / compose / filters) | Detail | reusable pattern | — **New** NotesDrawer |
| Communication split (list + thread + composer) | Communication | Booking-specific composition | Breakpoint 820px |
| Service card with vendor fields | Vendors | Booking-specific composition | — |

---

## 6. Booking-specific compositions

| Composition | Why Booking-specific |
| --- | --- |
| Booking list readiness + finance dual status | Domain vocab (At risk / Overdue / Settled…) |
| Service / vendor card grid | Travel ops domain |
| Finance dual sheets (customer vs supplier) | Domain |
| Voucher pipeline statuses | Domain |
| Communication threads + draft helpers | Domain |
| Activity feed sheet | Domain |
| Direct booking / margin / catalog modals | Domain flows |

These may later live in a `@paryatech/booking-ui` layer that consumes DS primitives — **not** in core DS without design approval.

---

## 7. One-offs / prototype debris

| Item | Classification | Recommendation |
| --- | --- | --- |
| Inline `style="height:36px"` on many tab CTAs | one-off / inconsistency | Formalise toolbar button size |
| Hardcoded status hover hex (`#E6EAEF`, `#F6E8C8`, …) | one-off / inconsistency | Tokenise or derive |
| `.more-btn` without menu | one-off | Implement or remove before Gate 4 |
| Unused `.empty` card styles | deprecated candidate | Prefer `EmptyState` / `#bkEmpty` pattern |
| Hash boot without `hashchange` | one-off | Product routing later |

---

## 8. Status vocabulary (by surface)

| Surface | Labels seen | Tone classes |
| --- | --- | --- |
| List readiness | At risk, Needs attention, Ready | `st-blocked`, `st-progress`, `st-done` |
| List finance | Overdue, Due, Settled | same four tones |
| Tasks | Open / In progress / Blocked / Done (via `.st-pick`) | `st-open`, `st-progress`, `st-blocked`, `st-done` |
| Vouchers | Blocked, Awaiting, Sent | blocked / progress / done |
| Services | Confirmation pending, Confirmed, … | progress / done / blocked |
| Overview trip | Upcoming (`st-open`) | info |

**Inconsistency:** same tone classes carry different product vocabularies — map in Booking, keep four tones in DS (aligns with review-queue Q2=A).

---

## 9. Proposed Gate 2 inventory (proposal only)

Do **not** implement until design approval. Likely files:

- Foundations: expand `tokens/tokens.css`, `tokens/typography.css`, radius/size scales
- Icons: shared SVG catalogue / `Icon` architecture
- Components: Modal, StatusSelect, TextField, SelectField, KpiStrip, NotesDrawer
- Patterns: DetailPage / RecordShell, SheetToolbar, CommunicationSplit (or Booking package)
- Docs: component inventory + pattern inventory mirroring this audit
