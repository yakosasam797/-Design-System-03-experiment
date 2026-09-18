# Visual parity failure report

**Date:** 2026-09-18 (updated with AppShell / sidebar audit)  
**Status:** List pilot **PASSED** · Shared **AppShell / Sidebar fidelity PASSED** (implemented + CDP re-audit 2026-09-18)  
**Booking (source of truth):** http://localhost:8450/ (full module shell, not List-only)  
**Storybook:** http://localhost:6006/ → Patterns / AppShell  
**Publish:** still gated on product decision to publish package (parity no longer blocking shell)  

Screenshots: [`docs/parity/screenshots/`](docs/parity/screenshots/)

---

## Re-audit summary (List pilot — after approved corrections)

| Check | Booking CDP | Storybook CDP (after fix) | Result |
| --- | --- | --- | --- |
| `body` font | Public Sans 14 / lh 21 | Public Sans 14 / lh 21 | **Pass** |
| `box-sizing` | border-box | border-box (`reset.css` in preview) | **Pass** |
| Refresh CTA | 32×90, Onest 12.5/600, svg 14 | 32×90, Onest 12.5/600, svg 14 | **Pass** |
| Direct booking | 32×131, svg 14 | 32×131, svg 14 | **Pass** |
| Upgrade | 32×75, no icon | 32×75, no icon | **Pass** |
| SearchField wrap | 36h, r10, pad 0 12, gap 9 | 36h, r10, pad 0 12, gap 9, Public Sans 13.5 | **Pass** |
| Tab count chip | 18×18 Mono | 18×18 Mono | **Pass** |
| StatusChip | Public Sans 12, h28 | Public Sans 12, h28 | **Pass** |
| Owner avatar | pink 26×26 | pink 26×26 | **Pass** |
| Sheet row (desktop density) | 68h, pad 12×16 | 68h, pad 12×16 | **Pass** |
| EmptyState | pad 56/24, r14, ic 44 | pad 56/24, r14, ic 44 | **Pass** |
| List title | Bookings · Onest 24 | Bookings · Onest 24 | **Pass** |

### Corrections applied (design-system only — List pilot)

1. Storybook foundation (fonts + `reset.css`)
2. Button stories = Booking List CTAs with icons
3. SearchField / FilterSelect
4. DataSheet booking recipe
5. ListPage fixtures
6. Checkbox border 1px
7. Colour system (separate plan) — primitives/semantics

### Remaining known deltas

| Item | Notes | Severity |
| --- | --- | --- |
| **AppShell / Sidebar** | Generic fixture nav; missing Booking chrome (groups, notes, credits, tooltips, brand caret) | **Critical** — see below |
| Bulk bar in Default story | Demo always shows selection | Low |
| Shell vs Storybook chrome | Compare iframe only | N/A |

---

## Original audit (pre-fix) — retained for history

### Executive summary (pre-fix)

Storybook did **not** match the rendered Booking List. The largest defects were:

1. **Typography pipeline broken in Storybook** — canvas `body` as Times New Roman / 16px (fonts scoped to unused `.pt-root`).
2. **`box-sizing` missing** — `reset.css` not in preview → SearchField 38 vs 36.
3. **Button stories text-only** — widths 70 / 64 vs Booking 90 / 131.
4. **ListPage / DataSheet approximate** — wrong columns, serif cells, row height.
5. **Tooltip / SkipLink / AppShell** missing or incomplete stories.

### Root causes (systemic) — fixed

| Root cause | Evidence | Resolution |
| --- | --- | --- |
| `.pt-root` body font never applied | CDP Times New Roman | Apply Public Sans to `html, body` |
| Preview omitted `reset.css` | Search 38px | Import `reset.css` in preview |
| Button stories text-only | Width mismatch | Rebuild stories with Booking SVGs |
| Sheet recipe generic | Row ~73, wrong cols | `variant="booking"` + cell helpers |

### Booking List — real button inventory

| Instance | Classes | Icon | Size |
| --- | --- | --- | --- |
| Upgrade (sidebar) | `btn btn-primary btn-sm` | none | 32× ~75, r8 |
| Refresh (header) | `btn btn-brand btn-sm` | 14×14 leading | 32×90, r8 |
| Direct booking (header) | `btn btn-primary btn-sm` | 14×14 leading | 32×131, r8 |
| Export / Clear (bulk) | `btn-brand/ghost btn-sm` | 14×14 leading | sm |
| Topbar icon buttons | `icon-btn` | 17×17 | 36×36, r10 |
| Pager | `.pg` | chevron / number | 30×30, r8 |

**Not on Booking List:** loading spinners on buttons; row `more-btn`.

---

## Master mismatch table (post-fix)

| Component | Booking source | Current Storybook | Mismatch | Required correction | Severity |
| --- | --- | --- | --- | --- | --- |
| **Typography (global)** | Public Sans 14 | Public Sans 14 | — | Done | ~~Critical~~ **Resolved** |
| **box-sizing** | border-box | border-box | — | Done | ~~Critical~~ **Resolved** |
| **Button** | icon CTAs sm | icon CTAs sm; widths match | — | Done | ~~Critical~~ **Resolved** |
| **SearchField** | 36h Public Sans | 36h Public Sans | — | Done | ~~High~~ **Resolved** |
| **FilterSelect** | Onest 12.5; All bookings | Matches | — | Done | ~~High~~ **Resolved** |
| **TabBar** | stages + chip 18 | Booking stages + chip 18 | — | Done | ~~Medium~~ **Resolved** |
| **StatusChip** | Public Sans 12 | Public Sans 12 | — | Done | ~~High~~ **Resolved** |
| **Checkbox** | 18×18 ~1px border | 18×18 1px | — | Done | ~~Low~~ **Resolved** |
| **Avatar** | pink 26 owner | pink 26 + OwnerStack | — | Done | ~~Medium~~ **Resolved** |
| **Tooltip** | data-tip dark r8 | Stories on IconButton + truncated cell | — | Done | ~~High~~ **Resolved** |
| **DataSheet** | --bk-cols; row 68 | variant booking; row 68 | — | Done | ~~Critical~~ **Resolved** |
| **Pagination** | Mono 12; 30×30 | Matches + disabled prev story | — | Done | **OK** |
| **EmptyState** | pad 56/24 r14 | Matches | — | Done | ~~Medium~~ **Resolved** |
| **SkipLink** | skip to main | FocusVisible story | — | Done | ~~Medium~~ **Resolved** |
| **ListPage** | Bookings composition | Mirrors Booking fixtures | — | Done | ~~Critical~~ **Resolved** |
| **AppShell / Sidebar** | Full Booking shell (see § AppShell) | Shell chrome partial; nav is generic 3-item fixture | Structure incomplete vs Booking | Build shared Sidebar + data/slots API; Storybook matrix below | **Critical** |

---

## Situational checks (post-fix)

| Situation | Result |
| --- | --- |
| Page header | **Pass** — Bookings + icon Refresh / Direct booking |
| Search + filters | **Pass** |
| Table header / rows | **Pass** — Booking columns + cell recipes |
| Row actions | **N/A** — none on List |
| Empty | **Pass** |
| Loading | Composition OK (skeleton rows) |
| Long content | Story present; truncation via `.ell` / lead title |
| Narrow viewport | NarrowMobile story present (Q5=B horizontal scroll) |

---

## Screenshot index

| File | Content |
| --- | --- |
| `docs/parity/screenshots/reaudit-listpage-default.png` | ListPage Default after fix |
| `docs/parity/screenshots/reaudit-button-list-ctas.png` | Button List CTA set with icons |
| `docs/parity/screenshots/reaudit-listpage-empty.png` | ListPage Empty |
| `docs/parity/screenshots/booking-list-8450.png` | Booking List (source) |
| Pre-fix captures | `storybook-button-brand.png`, `storybook-searchfield.png`, `storybook-listpage-default.png` |

---

## Sign-off

Visual parity (List page pilot components): **PASSED**.  
Visual parity (**shared AppShell / Sidebar**): **FAILED** — documented below; **awaiting approval before implementation**.  
Package publish / push: **not performed**.

---

# AppShell & shared sidebar fidelity audit

**Status:** Implemented after approval (2026-09-18)
**Source of truth:** Rendered Booking sidebar + `booking-redesign.html` (entire module)
**Method:** Source CSS/HTML inventory + CDP on live List (`frame.list-mode`) @ 8450  
**Constraint:** Visual match to Booking; **navigation content must be data/slot-driven** (not hardcoded Booking items)

---

## Booking sidebar — measured source of truth (CDP)

| Property | Booking value |
| --- | --- |
| Expanded column width | **250px** (`.frame` `grid-template-columns: 250px minmax(0,1fr)`) |
| Collapsed column width | **66px** (`.frame.collapsed`) |
| Frame chrome | padding **10px**, gap **10px**, `--ground` bg, transition **220ms** cubic-bezier(.4,0,.2,1) |
| Sidebar surface | `--side` `#FCFBFA`, border `1px solid --line`, radius **16px**, `--panelShadow` |
| Brand mark | **28×28**, radius 8, `--accent` fill, SVG 17×17 |
| Brand name | Onest **17 / 700**, letter-spacing **-0.03em**, `--ink` |
| Brand caret | 15×15, `--ink-2`, `margin-left: auto` (app-selector affordance) |
| Notes strip | height **38**, radius **10**, border `--line`, surface fill; **hidden in `list-mode`** |
| Notes badge | Mono 11/600, min-w 20, h 18, pink-soft / pink-ink / pink-line |
| Side scroll | `flex:1; overflow-y:auto; padding: 6px 10px 12px` |
| Nav groups | Uppercase **11 / 700**, ls **0.1em**, `--ink-2`, margin **16px 0 6px**, pad **0 10px** |
| Nav item | height **35**, pad **0 11**, gap **11**, radius **8**, font **13.5 / 500**, `--ink-2` |
| Nav icon | **17×17**, stroke ~1.7 (active Bookings uses 1.9) |
| Active item | bg `--pink-soft`, text `--pink-ink` **600**, icon `--pink` |
| Hover | bg `--side-hover`, text/icon `--ink` |
| Focus | `2px solid --focus` outline, offset 2 (shared) |
| Pressed | No distinct pressed style beyond active/hover |
| Footer | pad **12**, top border `--line` |
| Credits row | icon 30×30 soft box; Mono `720 / 1,000`; pink progress bar; Upgrade `btn-primary btn-sm` |
| Collapse control | h **34**, pad 0 11, radius 8, border `--line`, label **12.5 / 600**; icon 16×16 dual-chevron |
| Collapsed tooltips | `data-tip` shown **only when `.collapsed`**, anchored **right** of item (`left: calc(100% + 12px)`) |
| Responsive ≤1000px | Sidebar **`display:none`**; frame single column; workspace full-bleed |
| Groups / items (Booking fixture) | 4 groups · 13 items (Workspace / Sales / CRM / Operations) |

### Booking nav inventory (fixture only — for Storybook recipes, not hardcoded in DS API)

| Group | Items |
| --- | --- |
| Workspace | Home, All inbox, News, All tasks |
| Sales | Queries, Packages, **Bookings** (active) |
| CRM | Customers, Vendors |
| Operations | All finances, Team, Automations, Reports |

Plus: Notes strip (detail views), credits + Upgrade, Collapse.

---

## Current Storybook / DS AppShell — appearance

| Area | Current DS |
| --- | --- |
| Widths / frame / side surface | **Match** (250 / 66 / side tokens / radius 16 / panelShadow) |
| Brand mark + name | Present; **no brand caret / app-selector** |
| Notes strip | Slot exists; hidden in `listMode` — **no Notes UI recipe** (badge, add button, pink icon) |
| Navigation | **Generic 3 text buttons** (Bookings / Quotes / Vendors) — wrong height (36), wrong active (surface/ink), **no icons, no groups, no data-tip** |
| Credits / usage meter | **Missing** |
| Collapse | Present; collapsed hides name + collapse text; **incomplete** collapsed rules (no nav-label hide via shared NavItem, no right-side tooltips, foot padding not reduced to 8px) |
| Topbar relationship | Slots OK (leading / crumbs / search / actions) — stories underspecified vs Booking topbar |
| ≤1000px hide sidebar | **Match** |
| Keyboard | Collapse has `aria-expanded`; nav items in Booking are mostly `div`s with sporadic `tabindex` — DS must improve with real buttons/links |
| Long labels | **Not demonstrated** |
| Notification counts in nav | **Not present** (Booking uses notes badge + topbar alert dot, not nav item counts) |

---

## Mismatch table — AppShell / Sidebar

| Component | Booking source | Current Storybook / DS | Mismatch | Required correction | Severity |
| --- | --- | --- | --- | --- | --- |
| **Frame widths** | 250 / 66 | 250 / 66 | — | Keep | **OK** |
| **Side surface** | side / line / r16 / panelShadow | Same | — | Keep | **OK** |
| **Brand + app selector** | mark + name + caret | mark + name only | Missing caret / selector affordance | Add optional `brandAction` / caret slot | **High** |
| **Notes strip** | 38h soft-rect, pink icon, badge, add | Slot only; no visual recipe | Incomplete product chrome | Optional `notes` slot docs + NotesStrip recipe (not Booking-hardcoded copy) | **High** |
| **Nav groups** | `.side-group` uppercase | None | Missing | `SidebarNav` + `NavGroup` primitives | **Critical** |
| **Nav items** | 35h, 17 icon, gap 11, pad 0 11 | Ad-hoc 36h text buttons | Wrong metrics + no icons | Shared `NavItem` matching Booking CSS | **Critical** |
| **Active / hover / focus** | pink-soft active; side-hover; 2px focus | Wrong active colours in story | Fail | Encode states on `NavItem` | **Critical** |
| **Collapsed mode** | Hide labels/groups/notes text/badge/upgrade text; center icons; right tooltips; foot pad 8 | Partial hide only | Incomplete | Full collapsed CSS parity + tip placement | **Critical** |
| **Credits / footer** | credit meter + Upgrade | Upgrade only | Missing credits block | Slot `sidebarFooter` composition recipe (credits optional) | **High** |
| **Collapse control** | 34h bordered | Match-ish | Minor collapsed padding | Align collapsed foot/collapse | **Medium** |
| **Tooltips collapsed** | data-tip right-only when collapsed | None on nav | Missing | Use Tooltip / data-tip pattern on NavItem | **High** |
| **Scrolling** | side-scroll overflow-y | Present | OK | Keep; story with many groups | **OK** |
| **Long labels** | ellipsis expected via flex | Not shown | Unverified | Long-label story | **Medium** |
| **Keyboard** | mixed div/button | Collapse only | Weak | NavItem as `<a>`/`<button>`; focus-visible | **High** |
| **≤1000px** | side hidden | Match | — | Keep; Narrow viewport story | **OK** |
| **Topbar ↔ content** | inset workspace + topbar slots | Slots exist | Story underuses Booking topbar | Application-shell example story | **Medium** |
| **API hardcoding** | Booking labels in HTML | Story hardcodes 3 labels | Must not ship Booking nav inside package | **Data/slots only** — modules pass items | **Critical** |

---

## Required shared API (proposed — not implemented)

Visual chrome from Booking; **content from consumer**:

```ts
// Conceptual — approval required before coding
type NavItemData = {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
  active?: boolean;
  tip?: string;           // collapsed tooltip
  badge?: ReactNode;      // optional count
  onSelect?: () => void;
};

type NavGroupData = {
  id: string;
  label: string;          // e.g. "Sales"
  items: NavItemData[];
};

AppShell props (extend):
  brandName, brandMark, brandAction?   // caret / app switcher
  notes?: ReactNode                    // module supplies Notes strip or null
  nav?: ReactNode | NavGroupData[]     // prefer structured data OR slot
  sidebarFooter?: ReactNode            // credits + Upgrade composition
  listMode?: boolean                   // hides notes (Booking behaviour)
  collapsed / defaultCollapsed / onCollapsedChange
  // topbar slots unchanged: leading, crumbs, search, actions
```

**Must support:** expanded · collapsed icon-rail · active · hover · keyboard focus · module-specific nav via data/slots · desktop + ≤1000px hide.

**Must not:** hardcode Booking route list inside the package.

---

## When / why each configuration is used

| Configuration | When | Why |
| --- | --- | --- |
| **Expanded sidebar** | Default desktop | Full labels + groups for wayfinding across modules |
| **Collapsed icon-rail** | User toggles Collapse; dense desktop | Preserve canvas width; tips replace labels |
| **Active item** | Current module/route | Pink-soft selection = person/place accent language |
| **Hover / focus** | Pointer / keyboard | Discoverability + a11y (`--focus` ring) |
| **Long labels** | Real module names | Truncation must not break 35px row or collapsed tip |
| **Multiple groups** | Multi-product IA (Workspace / Sales / …) | Matches Booking information architecture |
| **Notification / count** | Notes badge, optional item badge | Attention without using status-danger for nav |
| **Notes strip** | Detail / booking context (not list-mode) | Booking-specific chrome via **slot** — other modules may omit or replace |
| **Credits + Upgrade** | Commercial / plan footers | Slot composition — modules may swap footer |
| **Application-shell example** | Storybook / docs | Shows sidebar + topbar + content relationship |
| **Narrow viewport (≤1000px)** | Tablet/phone | Booking hides sidebar entirely; content full-bleed — document until a mobile nav pattern exists |

---

## Required Storybook stories (after approval)

| Story | Purpose |
| --- | --- |
| Expanded | Default Booking-metric sidebar with **example** (non-hardcoded) multi-group data |
| Collapsed | Icon-rail + right tooltips |
| Active item | One item `active` / `aria-current` |
| Hover / focus | Interactive or documented focus-visible |
| Long labels | Truncation + tip |
| Multiple navigation groups | ≥2 groups |
| With notification count | Notes badge and/or item badge |
| Application-shell example | Full frame: sidebar + topbar + page content |
| Narrow viewport | ≤1000px — sidebar hidden |

Docs must state **why/when** each config (table above).

---

## Proposed correction order — **done**

1. ~~Extract shared `NavItem` / `NavGroup` / `SidebarNav` CSS from Booking~~  
2. ~~Complete collapsed behaviour + collapsed tooltips~~  
3. ~~Extend AppShell slots (`brandAction`, `navGroups`, footer recipes)~~  
4. ~~Notes strip + credits as optional slot recipes~~  
5. ~~Storybook matrix + usage notes in stories~~  
6. Re-audit CDP vs Booking (this pass)

**API:** modules pass `navGroups` (or `nav` slot). Package does not ship Booking routes as defaults.
