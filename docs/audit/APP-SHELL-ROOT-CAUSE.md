# App shell — root-cause report

**Status:** AUDIT COMPLETE — do not treat the consumer as the first fix  
**Date:** 2026-09-19  
**Canonical product surface:** Direction 03 Booking `booking-redesign.html` (rendered module)  
**Design-system package:** `@paryatech/design-system` (`Design-System-03-experiment`)  
**Generated test project:** `D:\experiment design system 03 vendor crm` (`vendor-crm`)  
**Code changes:** none in this document. Shared package first; consumer only after.

---

## Verdict

The recurring Sidebar / Topbar failure is **a combination**, not a single missing CSS rule.

| Cause | Contributes? | Weight |
| --- | --- | --- |
| Missing components | **Yes** | High — no exported `Topbar`, `BackButton`, `Breadcrumbs`, `AccountMenu`, `Sidebar` as named chrome. Agents cannot import the furniture they see in Booking. |
| Incorrect component fidelity | **Partial** | Medium — `AppShell` geometry mostly matches Booking (inset 250/66, 16px radius). Topbar **recipe** is incomplete: no owned search width, no back, no account, crumb separator not encoded. |
| Incomplete package exports | **Yes** | High — public API is one slot-heavy `AppShell` plus `SidebarNav`. Chrome pieces are not selectable. |
| Weak documentation | **Yes** | High — Storybook has no List vs Detail shell configs, no BackButton story, no “do not recreate” warning. |
| Weak agent instructions | **Yes** | High — `AGENTS.md` says import `AppShell` but does not forbid local shell chrome or invented role controls. |
| Incorrect consumer implementation | **Yes** | High — vendor CRM imports `AppShell`, then fills unbounded slots with a RoleSwitcher, a local account button, `SearchField fullWidth`, local crumb CSS, and **never** passes `leading` (BackButton). |
| Conflicting older source of truth | **Yes** | High — consumer `_design-source` still documents Direction 01: dark 268/76 sidebar + Owner/Admin/Member topbar. Agents followed that, not Direction 03 Booking. |

**The agent did not primarily rebuild a second Sidebar from scratch in the test project.** It imported `AppShell` and then **composed the wrong Topbar through open slots**, guided by stale extraction docs. Visually the Topbar is a different product. The Sidebar is the kit’s inset rail, missing Booking’s brand caret and (on list) showing the same rounded panel Booking already uses.

Do **not** “fix” the Sidebar by reverting to a dark sticky 268px rail. That language is Direction 01. Direction 03 Booking is the inset shell.

---

## Answers to the eight questions

### 1. Are Sidebar, Topbar and AppShell implemented as actual exported design-system components?

**Partially.**

| Name | Exported? | What exists |
| --- | --- | --- |
| `AppShell` | Yes | One pattern: aside + topbar + main |
| `Sidebar` | **No** | Markup is private inside `AppShell` (`aside.pt-side`) |
| `SidebarNav` / `NavGroup` / `NavItem` | Yes | Nav list only — not the rail, logo, notes, credits, collapse |
| `SidebarSection` / `SidebarItem` / `SidebarFooter` | **No** | `NavGroup` / `NavItem` cover sections/items; footer is a slot |
| `Topbar` | **No** | Markup is private (`div.pt-topbar`) |
| `BackButton` | **No** | Documented as “pass something in `leading`” |
| `Breadcrumbs` | **No** | Opaque `crumbs` ReactNode slot |
| `GlobalSearch` | **No** | Consumer passes any `SearchField` |
| `TopbarActions` | **No** | Opaque `actions` ReactNode slot |
| `AccountMenu` | **No** | Missing entirely |
| `AppSwitcher` | **No** | Booking caret is decorative; no menu. Do not add. |

### 2. Do they faithfully reproduce the Booking shell?

**Geometry: mostly yes. Chrome recipe: no.**

AppShell CSS copies Booking’s inset frame:

| Token | Booking (`booking-redesign.html`) | AppShell |
| --- | --- | --- |
| Frame padding / gap | `10px` (12px ≥1440, 14px ≥1920) | `10px` only — **wide-viewport gap missing** |
| Expanded width | `250px` | `250px` |
| Collapsed width | `66px` | `66px` |
| Side/workspace radius | `16px` | `var(--radius-lg)` = 16px |
| Side background | `var(--side)` = raised `#FCFBFA` | same |
| Topbar padding | `10px 16px` | same |
| Topbar border | `1px solid var(--line)` | same |
| Nav item height | `35px` | `35px` |
| Icon buttons | `36×36`, radius 10px | `IconButton` matches |
| Narrow ≤1000px | sidebar `display:none` | same |

HTML comment in Booking still says “SIDEBAR (dark shell)”. Computed/CSS truth is a **quiet raised rail**, not dark. `--side` is `--color-bg-raised`.

Gaps vs Booking:

- Brand caret always present in Booking; AppShell only if `brandAction` is passed. Vendor CRM omits it.
- Topbar search is `flex: 0 1 340px; max-width: 380px`. AppShell does not encode this. Vendor uses `SearchField fullWidth`.
- Back button exists in Booking DOM always; hidden on list. AppShell has no BackButton.
- Breadcrumb separator is a 13px chevron, last crumb `font-weight: 600`. Stories use `"/"`. Vendor invents `.vc-crumb`.
- Account control (26px pink avatar + caret, 36px, pink border) is **not in the kit**. Vendor invented `.vc-account` (pill + user icon).
- Booking topbar actions: Settings, Help, **Call logs**, Notifications (alert), Account. Kit stories omit Call logs and Account.
- `listMode` hides notes (matches Booking `.frame.list-mode .notes{display:none}`).

### 3. Are all Booking shell variations supported?

**No.** Booking has two views and one collapse toggle. That is the full set.

| Booking state | Evidence | Kit support today |
| --- | --- | --- |
| List shell | `showView('list')` → `list-mode`, back `display:none`, crumbs `Operations › Bookings` | `listMode` hides notes only. Back/crumbs not modelled. |
| Detail shell | `showView('detail')` → back visible, crumbs `Operations › Bookings › record` | Consumer must invent `leading` + `crumbs`. No story. |
| Nested detail | **Does not exist** in Booking (one detail view, nine tabs) | Do not add a fourth shell type. Deeper crumbs stay the same Topbar. |
| Expanded sidebar | default | Yes |
| Collapsed sidebar | `#sidebarToggle` | Yes (`defaultCollapsed` / controlled) |
| Narrow ≤1000px | sidebar hidden | Yes |
| Empty / loading | **does not change the shell** | N/A — do not invent a loading shell |
| Owner/Admin/Member | **not in Direction 03 Booking topbar** | Must not be a kit configuration |

Booking always uses **both** breadcrumbs and (on detail) back. There is no “back only” or “crumbs only on detail” state. Search, utility icons, and account are on **every** view.

### 4. Are they documented clearly enough for an agent to select the correct configuration?

**No.**

- `AppShell.stories.tsx` is a bag of Expanded / Collapsed / Active / Long labels / Narrow. Every story uses the same chrome helper with slash crumbs and no back / no account.
- There is no `BookingListShell` vs `BookingDetailShell`.
- No “when to use / when not to use”.
- No warning: do not recreate Sidebar or Topbar in the product.
- `AGENTS.md` lists `import { Button, AppShell, ListPage }` and “pass module-supplied nav”. It does not say the shell is mandatory, does not forbid `RoleSwitcher`, does not mention BackButton.
- Consumer `_design-source` still teaches the **wrong** shell (268px dark + role switcher). That documentation outcompetes Storybook.

### 5. Did the test project import the shared shell or recreate it locally?

**It imported `AppShell` from `@paryatech/design-system`, then restyled and extended the Topbar locally.**

Evidence: `src/app/shell/AppFrame.tsx` imports `AppShell`, `SidebarNav` data, `NotesStrip`, `CreditsMeter`, `SearchField`, `IconButton`.

It did **not** recreate `.side` / `.topbar` CSS clones of the rail. It **did** recreate:

- `RoleSwitcher` (`Owner / Admin / Member`) in `actions`
- `.vc-account` (wrong shape: pill + `userCircle`, not pink initials avatar)
- `.vc-crumb` / `.vc-crumb-sep` (local breadcrumb system)
- `SearchField fullWidth` in the topbar (Booking global search is capped)
- No `leading` / BackButton on detail or nested rate-card pages

Local `src/index.css` is product CSS for those invented controls. That is why a screenshot of the generated Topbar looks like a different product even though `AppShell` is imported.

### 6. Why did the agent introduce controls that were not in the approved source?

Three stacked reasons:

1. **Unbounded `actions` slot.** Anything can go in the Topbar. The kit does not own the action cluster, so agents fill it from domain assumptions (roles, permissions).
2. **Stale extraction inside the consumer.** `_design-source/.../ui_kits/paryatech-os/README.md` and `Paryatech Design System.dc.html` explicitly describe an Owner/Admin/Member switcher on the TopBar and a dark 268/76 sidebar. That is Booking **V3 Direction 01**, not Direction 03.
3. **Direction 01 backup HTML** in this Booking repo (`src/imports/Booking_V3_-_Direction_01__backup_.dc.html`) still contains `roles: ['Owner', 'Admin', 'Member']`. Agents that search “Booking” can hit the backup.

Direction 03 `booking-redesign.html` has **no** role switcher. “Owner” appears as a **data column** and record owner, not as shell chrome.

### 7. Is the current component API difficult enough that agents avoid it?

**The API is too open, not too hard.** Agents used it — then dumped invented chrome into slots because that was the path of least resistance.

Pain points that cause avoidance / misuse:

- `leading`, `crumbs`, `search`, `actions` are untyped ReactNodes. No `back`, no crumb items, no account object.
- `SearchField fullWidth` is a legal prop that **breaks** Topbar layout.
- Brand caret is optional (`brandAction`) instead of default Booking chrome.
- No `Topbar` export, so agents looking for “Topbar” in the package find nothing and write CSS.

### 8. Is the design-system package missing required slots, props or configurations?

**Yes — it is missing owned chrome, not more boolean soup.**

Missing (must add, derived from Booking only):

- `BackButton` as a real component; AppShell shows it on detail, hides it on list
- `Breadcrumbs` with chevron separator and current-page styling
- Topbar-owned `SearchField` constraint (`flex: 0 1 340px; max-width: 380px`)
- Default action cluster: Settings, Help, Call logs, Notifications
- `AccountMenu` (avatar + caret) — always present
- Default brand caret (visual only; not an AppSwitcher)
- Named configuration: `variant="list" | "detail"` (or equivalent) so agents do not invent combinations

Must **not** add:

- Role switcher
- AppSwitcher menu
- Arbitrary `showSearch` / `showProfile` / `showRole` booleans
- A “nested detail” shell type (Booking has none)

---

## Issue table

Issue | Booking source | Current design system | Test project | Root cause | Required correction | Severity
--- | --- | --- | --- | --- | --- | ---
Agents rebuild / restyle shell | Inset `.frame` + `.side` + `.topbar` is the only OS chrome | `AppShell` exists but Topbar/Sidebar are not named exports; stories look like demos | Imports `AppShell`, wraps in `AppFrame`, adds local chrome CSS | Missing named chrome + weak agent rules + slot API | Export real `Sidebar` / `Topbar` pieces composed **only** by `AppShell`; forbid local copies in `AGENTS.md` | P0
Generated Sidebar ≠ Booking | 250/66, 16px radius, raised `--side`, brand mark 28px, **always a caret**, notes (hidden on list), full nav groups, credits + collapse | Same geometry; caret optional; stories often stub nav to one item | Uses kit Sidebar; **no `brandAction`** so caret missing; nav is a shortened module set | Optional caret + incomplete default chrome; not a dark-rail bug | Bake Booking caret into shell; keep inset geometry; do not implement Direction 01 dark 268px | P0
Generated Topbar completely different | Back (detail) + chevron crumbs + capped search + 4 icon buttons + call logs + pink account | Slots only; no account; stories use slash crumbs and 280px inline search | RoleSwitcher + fullWidth search + local account + no back | Open `actions`/`search` slots + missing Account/Back/Breadcrumb components | Kit-owned Topbar recipe; modules pass data/handlers only | P0
Back-arrow missing | `.back-btn` 36×36 radius 10; `display:none` on list; both back **and** crumbs on detail | `leading` slot, unused in stories | Detail + rate-card pages never pass `leading` | Missing `BackButton` + no list/detail configuration | `variant="detail"` renders BackButton; list hides it | P0
`Owner / Admin / Member` invented | Not in Direction 03 topbar. Exists only in Direction 01 backup / extraction docs | Not a kit component (correct) | `RoleSwitcher.tsx` + `.vc-role-switch` in Topbar | Stale docs + unbounded `actions` | Do not add to kit. Remove from consumer after kit owns the action cluster | P0
Screenshot-driven rebuild | Rendered Booking is SoT | Storybook does not show canonical list/detail shells | Agent filled slots from screenshot + old README | Stories don’t look like Booking Topbar | Stories that **are** the exported shell in Booking configurations | P0
Search blows the Topbar | `.topbar .search { flex: 0 1 340px; max-width: 380px }` | No AppShell rule; `SearchField--full` is `flex: 1 1 260px; max-width: none` | `fullWidth` on global search | Constraint not owned by Topbar | `.pt-topbar .pt-search` constraint in AppShell CSS; do not use `fullWidth` in the shell | P1
Account control missing | `.acct` 36px, pink border, 26px pink avatar, 13px caret | No component | `.vc-account` pill + `userCircle` | Missing export | Add `AccountMenu`; always render in Topbar | P1
Breadcrumb styling forked | Chevron 13px, last crumb `.here` strong, `flex: 1 1 auto` | Slot with no styles beyond flex/gap; stories use `/` | `.vc-crumb` muted links + chevron-right icon (closer than stories, still local) | No `Breadcrumbs` component | Export `Breadcrumbs` / `BreadcrumbItem`; AppShell renders them | P1
Brand caret missing | Always in `.side-top` | `brandAction` optional | Omitted | Optional slot for required chrome | Default caret inside Sidebar; `brandAction` only if a real switcher is later approved | P2
Wide-viewport frame padding | 12px ≥1440, 14px ≥1920 | Always 10px | Inherits kit | Fidelity gap | Add the same media queries to `.pt-frame` | P2
Call logs omitted in stories | Always in Booking topbar | IconButton stories exist; AppShell stories skip phone | Vendor **does** include Call logs | Story incompleteness | Default TopbarActions include it | P2
Conflicting SoT in consumer | Direction 03 HTML | Package README points at Booking parity history | `_design-source` Direction 01 268px + role switcher | Two design systems in one repo | Agent rules: ignore `_design-source` Direction 01 for shell; Booking HTML + kit stories only | P0
No tests on shell | `showView` / collapse in HTML | One `Pagination.test.tsx` only | None | No regression net | Interaction + consumer import tests; local-shell detector | P1

---

## Booking shell specification (source of truth)

Measurements from `booking-redesign.html` CSS and markup. These are the values the kit must own. Modules must not override them.

### Frame

| Property | Value |
| --- | --- |
| Display | CSS grid, `250px minmax(0,1fr)` |
| Collapsed columns | `66px minmax(0,1fr)` |
| Height | `100vh` |
| Padding / gap | `10px`; `12px` ≥1440; `14px` ≥1920 |
| Background | `var(--ground)` |
| Transition | `grid-template-columns` 220ms cubic-bezier(.4,0,.2,1) |
| ≤1000px | single column, padding 0, sidebar `display:none`, workspace unrounded |

### Sidebar

| Property | Value |
| --- | --- |
| Width | Grid track 250 / 66 — not an inner width |
| Height | Stretch in frame (`min-height: 0`, column flex) |
| Position | In-flow grid cell (inset), not `position: sticky` overlay |
| Background | `var(--side)` raised, **not** dark |
| Border | `1px solid var(--line)` |
| Shadow | `var(--panelShadow)` |
| Radius | `16px` |
| Logo area | 28×28 mark, radius 8, accent fill; name Onest brand type; caret 15px |
| App selector | **Decorative caret only. No menu.** |
| Nav sections | Workspace, Sales, CRM, Operations — **data from the module** |
| Section label | `--type-label-group-*`, padding `0 10px`, margin `16px 0 6px` |
| Item height | `35px` |
| Icons | 17×17, stroke ~1.7 |
| Label type | `--type-label-nav-*`; active weight `--type-label-nav-weight-active` |
| Item padding | `0 11px`; gap 11px; radius 8px |
| Active | `--pink-soft` fill, `--pink-ink` text, `--pink` icon |
| Hover | `--side-hover` |
| Focus-visible | `outline: 2px solid var(--focus); outline-offset: 2px` |
| Count badge | Booking list nav has none on items; notes badge `2`; kit may show item badges |
| Notes | 38px, radius 10, hidden in list-mode, collapsed shows icon + tip |
| Usage | Credits `720 / 1,000` + Upgrade |
| Footer | Credits + Collapse control 34px, bordered, radius 8 |
| Collapse | Toggles frame class; icon rotates 180° when collapsed |
| Internal scroll | `.side-scroll` `overflow-y: auto` |
| Long labels | ellipsis (kit already); collapsed tip `left: calc(100% + 12px)` |
| Narrow | hidden with sidebar |

The generated “floating white rounded Sidebar” **is the approved inset language** if dimensions, radius, `--side`, and inner chrome match. Reject it only when those diverge, or when compared against Direction 01 dark rail by mistake.

### Topbar

| Property | Value |
| --- | --- |
| Height | Content-driven; padding `10px 16px`; controls 36px |
| Background | `var(--surface)` |
| Bottom border | `1px solid var(--line)` |
| Alignment | Flex, `align-items: center`, gap 10px |
| Left | Back (detail) then breadcrumbs |
| Back | 36×36, radius 10, 16px chevron-left; hidden on list |
| Breadcrumbs | Always. List: `Operations › Bookings`. Detail: `Operations › Bookings › {record}` |
| Global search | Always. `flex: 0 1 340px; max-width: 380px`; height 36; radius 10 |
| App switcher | **None** |
| Right actions | Settings, Help, Call logs, Notifications (red dot), Account |
| Role switcher | **None** |
| Account | 36px, pink line, 26px pink avatar, 13px caret |
| Icon size | 17 nav; back 16 |
| ≤900 / shell ≤900 | wrap, search `flex: 1 1 180px`, padding `8px 10px` |

### When Booking uses which Topbar pieces

| Control | List | Detail |
| --- | --- | --- |
| Back arrow | No | Yes |
| Breadcrumbs | Yes (2 levels) | Yes (3 levels) |
| Both | — | Yes |
| Neither | Never | Never |
| Search | Yes | Yes |
| Settings / Help / Call logs / Bell | Yes | Yes |
| Account | Yes | Yes |
| Role switcher | No | No |
| Notes in sidebar | Hidden | Visible |

---

## Proposed canonical API

Not a boolean kitchen sink. Two **documented configurations** plus collapse/narrow, which are the only Booking states.

```tsx
<AppShell
  variant="list" | "detail"
  brandName="paryatech"
  navGroups={moduleNav}
  notes={{ label, badge, onOpen, onAdd }}   // ignored visually when variant=list
  credits={{ remaining, total, onUpgrade }}
  breadcrumbs={[
    { label: "Operations", href: "..." },
    { label: "Bookings" },                  // current on list
    { label: "XYZ Family · Dubai" },        // current on detail
  ]}
  onBack={variant === "detail" ? goToList : undefined}
  search={{ placeholder: "Search anything", onChange }}
  account={{ name, initials, tone: "pink", onClick }}
  onSettings / onHelp / onCallLogs / onNotifications  // handlers; chrome owned by kit
>
  {page}
</AppShell>
```

Modules may supply: nav data, active item, breadcrumb labels/links, back handler, search behaviour, notification alert, account identity, page body.

Modules may **not** supply: Sidebar width, Topbar height, type, colours, radii, icon sizes, active-item paint, search flex, action-cluster layout.

Slots (`nav`, `sidebarFooter`, `actions`) remain as **escape hatches for kit development**, not as the consumer path. Storybook consumer stories must use the data API.

**AppSwitcher:** do not ship. Booking caret is visual chrome inside Sidebar.

**Role switcher:** do not ship.

---

## Proposed file changes

### Design-system package (do this first)

| File | Change |
| --- | --- |
| `src/patterns/AppShell/AppShell.tsx` | Own Sidebar + Topbar composition; `variant`; default caret; hide back on list; render Breadcrumbs / Account / default actions |
| `src/patterns/AppShell/AppShell.css` | Topbar search constraint; ≥1440/1920 frame padding; `.pt-topbar .pt-search` must beat `fullWidth` |
| `src/patterns/AppShell/Sidebar.tsx` (new) | Export rail: brand, notes slot, scroll, footer, collapse. Used **by** AppShell, not restyled by apps |
| `src/patterns/AppShell/Topbar.tsx` (new) | Export Topbar: BackButton, Breadcrumbs, search, actions, account |
| `src/components/BackButton/BackButton.tsx` (new) | Booking `.back-btn` |
| `src/components/Breadcrumbs/Breadcrumbs.tsx` (new) | Chevron separator, current item |
| `src/components/AccountMenu/AccountMenu.tsx` (new) | Booking `.acct` |
| `src/components/TopbarActions/TopbarActions.tsx` (new) | Settings, Help, Call logs, Notifications |
| `src/index.ts` | Export the above + types |
| `src/patterns/AppShell/AppShell.stories.tsx` | Replace demo bag with approved configs (list, detail+back, collapsed, counts, narrow, focus, overflow). Warning on every story |
| `src/patterns/AppShell/AppShell.test.tsx` (new) | Collapse, active route, back visibility, crumbs, keyboard, a11y names |
| `src/patterns/AppShell/AppShell.narrow.test.tsx` or viewport story | ≤1000 sidebar hidden |
| `scripts/check-local-shell.mjs` (new) | Flag consumer files named `Sidebar`/`Topbar`/`AppShell`/`HeaderShell`/`NavigationShell` when the package is installed; allow nested panel nav |
| `AGENTS.md` | Mandatory shared-shell rules + checklist (Step 6) |
| `docs/usage/getting-started.md` | Show list vs detail AppShell, not a lone Button |
| `README.md` | Shell table: what to import vs what never to recreate |
| `docs/verification/APP-SHELL-PARITY.md` | After implementation — Booking vs Storybook vs consumer |

Aliases: export `SidebarSection` = `NavGroup`, `SidebarItem` = `NavItem`, `SidebarFooter` as the footer region. Do not create a parallel nav system.

### Test project (only after package build)

| File | Change |
| --- | --- |
| `src/app/shell/AppFrame.tsx` | Keep as a **data adapter** only: navGroups, variant, breadcrumbs, onBack, account. No RoleSwitcher, no `.vc-account`, no local crumb classes |
| `src/features/vendors/ui/RoleSwitcher.tsx` | Remove from Topbar. If role is needed for **page** permissions, keep it out of the shell (page-level, not chrome) |
| `src/index.css` | Delete `.vc-role-switch*`, `.vc-account`, `.vc-crumb*` |
| Pages | List → `variant="list"`; detail + rate card → `variant="detail"` + `onBack`; crumbs as data |

Do **not** patch generated Sidebar/Topbar CSS. There is almost none; the damage is slot content.

### Explicitly out of scope

- Recolouring the Sidebar to Direction 01 dark
- Adding Owner/Admin/Member to the kit
- Building AppSwitcher
- Changing Booking HTML
- Inventing a nested-detail shell type

---

## Implementation order

1. This report (done).
2. Shared package: components, AppShell data API, CSS constraints, exports.
3. Storybook configs + warnings.
4. `AGENTS.md` + checklist.
5. Tests + local-shell detector.
6. Then rebuild vendor CRM on the new API.
7. Visual parity table `docs/verification/APP-SHELL-PARITY.md` — do not mark verified with remaining mismatches.

---

## Agent checklist (to land in AGENTS.md)

- [ ] Shared `AppShell` imported from `@paryatech/design-system`
- [ ] Shared Sidebar used (no local `Sidebar` / `NavigationShell`)
- [ ] Shared Topbar used (no local `Topbar` / `HeaderShell`)
- [ ] Correct configuration: `list` or `detail`
- [ ] No invented shell controls (no role switcher unless a future approved config exists — it does not)
- [ ] Back on detail; hidden on list; breadcrumbs always
- [ ] No local shell styling (width, height, radius, colour, search flex)
- [ ] Visual comparison vs Booking shell completed
- [ ] Import paths for `AppShell`, Sidebar pieces, Topbar pieces resolve from the package
