# Colour system — Gate 2 proposal

**Status:** Proposal only — do not implement until Gate 2 approval  
**SoT:** Live Booking (Gate 1 CDP) + existing `src/tokens/tokens.css`  
**I\* disposition:** I5 intentional alias (same hex, distinct roles); I6 `--ink-4` decorative/disabled only; I8 add status hover tokens; I7 four tones only in DS

Teal = **work**. Pink = **place / person**. Status ≠ brand. Info = **slate** (not channel blue).

---

## 1. Primitive palettes

Only steps observed in Booking (no manufactured 50–900 ramps). Values from `tokens.css` primitives.

| Palette | Steps (hex) | Observed Booking usage |
| --- | --- | --- |
| Neutral | 0 `#fff` … 950 `#16181d` (see tokens) | Page/shell/list/detail surfaces, borders, text |
| Teal (brand work) | 50–200, 500 `#0F6E63`, 600, 700 | Primary CTAs, brand mark, pagination current — List, Detail, Modals |
| Pink (person/place) | 50–200, 500 `#A5537E`, 700 | Nav active, tabs active, notes, selection — Shell, Detail tabs, Notes |
| Success | 50–200, 600 `#15803d` | Settled / Ready / Done chips — List finance, Tasks, Vouchers |
| Warning | 50–200, 600 `#b45309` | Due / In progress / Awaiting — List, Tasks, Vouchers |
| Danger | 50–200, 600 `#be3b48` | At risk / Overdue / Blocked — List readiness/finance, Tasks |
| Information (slate) | 50 `#F1F4F7`, 100–200, 700 `#3d4654` | Open / Upcoming / neutral info — Overview status, `.t-info` tags |
| Channel blue | 50, 200, 600 | Email channel / blue avatar only — Communication (limited) |

**Evidence:** Shell list (`shell__list__desktop`), List stages, Detail Overview/Tasks/Finance/Vouchers, Notes browse, Modals.

---

## 2. Semantic tokens

| Semantic | Token (proposed / existing) | Primitive | When to use | When not | Contrast / notes | Observed? | Booking screens |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Page background | `--color-bg-page` / `--ground` | neutral-10 | App canvas outside cards | Card fills | OK for bg | Observed | All |
| Default surface | `--color-bg-surface` / `--surface` | neutral-0 | Sheets, modals, blocks | Page wash | — | Observed | List sheet, Detail panels, Modals |
| Subtle surface | `--color-bg-subtle` / `--surface-2` | neutral-50 `#F1F4F7` | Block heads, zebra, chrome | Status “info” meaning alone | Same hex as info-bg (**I5**) | Observed | Sheet heads, KPI, Overview |
| Raised surface | `--color-bg-raised` / `--side` | neutral-25 | Sidebar | Main canvas | — | Observed | Shell sidebar |
| Overlay | modal dim + `--overlayShadow` | rgba / shadow | Modal/notes overlays | Inline menus only | — | Observed | All 22 modals, Notes drawer |
| Text primary | `--color-text-primary` / `--ink` | neutral-950 | Body titles | Muted meta | AA | Observed | All |
| Text secondary | `--ink-2` | neutral-700 | Table headers, secondary | Decorative | AA | Observed | List sheet headers (**I4**) |
| Text muted | `--ink-3` | neutral-600 | Supporting | Disabled | Check AA | Observed | Cell secondary lines |
| Text disabled / decorative | `--ink-4` | neutral-500 `#8A909A` | Separators, disabled chrome only | Body copy (**I6**) | Fails AA as body | Observed | Pagination disabled, chrome |
| Border default / subtle / strong | `--line` / `--line-2` / `--line-hover` | 200/100/300 | Controls, sheets | Status borders | — | Observed | All |
| Action primary | `--accent` teal | teal-500 | Work CTAs | Person/nav active | AA on white | Observed | Direct booking, Edit, modal primary |
| Action secondary (person) | `--pink` | pink-500 | Person emphasis, notes | Work primary CTA | — | Observed | Nav active, Notes |
| Hover / pressed / selected | `*-hover`, `*-pressed`, `--pink-soft` | teal/pink steps | Interactive | Static text | — | Observed | Buttons, nav, bulk bar |
| Focus | `--focus` pink; `--focus-work` teal; soft rings | pink/teal | Focus-visible | Hover substitute | Dual context D5 | Observed | Search, notes, filters |
| Status success/warn/danger/info | `--ok*` / `--warn*` / `--bad*` / `--info*` | status primitives | Chips, tags | Brand fills | Pair text+bg | Observed | List, Tasks, Vouchers, Finance |
| Status hover bg | `--*-bg-hover` (I8) | success/warn/danger/info-100 | StatusSelect menus | Invent new hex | Formalise existing `#DCEFDF` etc. | Observed (hardcoded today) | Tasks status menu |

**I5:** Keep `--surface-2` and `--info-bg` as **aliases to the same primitive** but document separate *roles* (elevation vs status-info). Do not merge names in APIs.

---

## 3. Component aliases

Use only when semantics cannot express the need:

| Alias | Maps to | Booking screens |
| --- | --- | --- |
| Checkbox border | `--color-control-checkbox-border` | List/Detail sheets |
| Avatar person / work / warn / channel | avatar-* tokens | List owner, Detail team, Comm |
| Channel email colours | blue primitives | Communication |
| Scrollbar chrome | neutral-350 | Long sheets |

---

## 4. Approval asks (colour)

- [ ] Accept primitive set (no full 50–900 invention)
- [ ] Accept I5 dual-role same-hex alias
- [ ] Accept I6 decorative-only for `--ink-4`
- [ ] Accept I8 status hover tokens derived from `*-100`
- [ ] Accept I7: DS ships four tones; Booking maps labels
