# Paryatech colour system plan

**Status:** **Approved & implemented** (2026-09-18)  
**Source of truth:** Booking module + this plan  
**Tokens:** `src/tokens/tokens.css` (primitives → semantics → legacy aliases)  
**Storybook:** Foundations / Colorography  

### Locked decisions (implemented)

| # | Decision | Locked |
| --- | --- | --- |
| D1 | Channel blue formalized (`--pt-blue-*`) | A |
| D2 | One white primitive; multiple semantic aliases | A |
| D3 | Info shares neutral soft steps; distinct semantic names | A |
| D4 | Avatar person text → pink.700 | A |
| D5 | Dual focus: person + work soft glows | A |
| D6 | Quote card flattened to surface (no specialty gradient) | B |
| D7 | Teal soft canonical `#E7F2F0` | Yes |
| D8 | Drop `#FEF3C7`; use warn-bg | Yes |
| D9 | Status 4.51 ratios kept; monitor in QA | Deferred |
| D10 | New semantic names + legacy `--accent` / `--pink` aliases | Yes |

---

## 1. Executive verdict

Booking already has a **working semantic token set**, but it is **not** a complete colour system:

- Many **hardcoded hex values** sit outside tokens (blue channel, status hover, chrome, conversation mock avatars, quote card gradient).
- **Two brand hues** are intentional: **teal = work**, **pink = place / person** — a formal system must encode that, not collapse to one primary.
- **Information** status is **slate/neutral**, not blue. Blue in the UI is mostly **channel / avatar decoration**, not the info status tone.
- Several near-duplicates and one **accessibility risk** (pink-on-pink-avatar; `ink-4` as text).

**Do not invent 50–900 ramps.** Propose only colours Booking already uses, plus a short list of **inferred** shades that already appear hardcoded or are needed for a11y / states — each marked for design approval.

---

## 2. Existing colour inventory

### 2.1 Tokenised colours (canonical `:root` via package)

| Value | Current token(s) | Where used (Booking module) | Intended meaning | Contrast (sample) | Verdict |
| --- | --- | --- | --- | --- | --- |
| `#E4E0DB` | `--ground` | `.frame` app chrome | Page / app background | ink/ground **13.52** | **Approved** |
| `#FCFBFA` | `--side` | Sidebar, sheet header | Warm raised chrome | — | **Approved** |
| `#F3F0ED` | `--side-hover` | Sidebar item hover | Warm hover | — | **Approved** |
| `#FFFFFF` | `--panel`, `--panel-ground`, `--surface` | Workspace, cards, controls | Surface / canvas | ink/surface **17.76** | **Approved** (three names for same value — see duplicates) |
| `#F1F4F7` | `--surface-2`, `--info-bg` | Subtle fills, open status bg, tab chips | Subtle surface **and** info status bg | — | **Approved** but **overloaded** (see inconsistencies) |
| `#F6F8FA` | `--surface-3` | Ghost/subtle hover, menus | Subtle raised / control hover | — | **Approved** |
| `#16181D` | `--ink` | Titles, primary copy | Primary text | **17.76** on white | **Approved** |
| `#3E4550` | `--ink-2` | Supporting copy, icons muted | Secondary text | **9.67** | **Approved** |
| `#545C67` | `--ink-3` | Placeholders, tertiary labels | Muted text | **6.77** | **Approved** |
| `#8A909A` | `--ink-4` | Disabled pager, decorative | Disabled / decorative text | **3.21** on white — **fails AA as body text** | **Approved for disabled/chrome only** |
| `#E4E7EC` | `--line`, `--info-line` | Default borders; info chip border | Default border **and** info border | — | **Approved** but **overloaded** |
| `#EEF0F3` | `--line-2` | Row dividers | Subtle border | — | **Approved** |
| `#D7DBE1` | `--line-hover` | Ghost/filter hover border | Stronger / hover border | — | **Approved** |
| `#C6CAD1` | `--checkbox-line` | Unchecked checkbox | Component control border | — | **Component alias** (keep) |
| `#0F6E63` | `--accent` | Primary buttons, brand mark stroke, work accents | Primary action (work) | white/accent **6.12** | **Approved** |
| `#0B544B` | `--accent-ink` | Primary hover; brand secondary CTA text | Primary hover / accent text | **8.81** on white | **Approved** |
| `#094840` | `--accent-pressed` | Primary pressed | Primary pressed | — | **Approved** |
| `#E7F2F0` | `--accent-soft` | Soft teal fills | Accent subtle bg | accent on soft **5.35** | **Approved** |
| `#DBEBE8` | `--accent-soft-pressed` | Brand button active | Accent soft pressed | — | **Approved** |
| `#A5537E` | `--pink`, `--focus` | Secondary buttons, tabs, selection, focus ring | Place/person + focus | white/pink **5.07**; pink on white **5.07** | **Approved** (focus = pink by design) |
| `#853F64` | `--pink-ink` | Active nav, bulk label, selected options | Pink ink / selected text | on pink-soft **6.44** | **Approved** |
| `#FBEEF4` | `--pink-soft` | Selected nav, bulk bar, active pager, choice.on | Selected / soft pink surface | — | **Approved** |
| `#EFCFDF` | `--pink-line` | Pink borders (account, pager active) | Pink border | — | **Approved** |
| `#F8DEE8` | `--pink-avatar` | `.avatar.pink`, conversation lead | Person avatar fill | pink on avatar **4.01** — **fails AA normal text** | **Approved fill; text contrast issue** |
| `#15803D` | `--ok` | Done/success chips, mint avatar text | Success text | on ok-bg **4.51** (AA borderline) | **Approved** |
| `#E9F6EE` | `--ok-bg` | Done chip bg, mint avatar | Success bg | — | **Approved** |
| `#CDE9D6` | `--ok-line` | Done chip border | Success border | — | **Approved** |
| `#B45309` | `--warn` | Progress chips, amber avatar, money-warn | Warning text | on warn-bg **4.51** | **Approved** |
| `#FBF2E0` | `--warn-bg` | Progress chip, amber avatar | Warning bg | — | **Approved** |
| `#F0DCB4` | `--warn-line` | Progress chip border | Warning border | — | **Approved** |
| `#BE3B48` | `--bad` | Blocked/danger chips | Danger text | on bad-bg **4.72** | **Approved** |
| `#FBEDEE` | `--bad-bg` | Blocked chip bg | Danger bg | — | **Approved** |
| `#F1D2D6` | `--bad-line` | Blocked chip border | Danger border | — | **Approved** |
| `#3D4654` | `--info` | Open status chips | Information text (neutral slate) | on info-bg **8.64** | **Approved** |
| `#20242B` | `--tooltip-ink` | Tooltip, tip chrome | Inverse / tooltip surface | white on tip **15.57** | **Approved** |
| Shadows | `--blockShadow`, `--panelShadow`, `--menuShadow`, `--tooltipShadow` | Shells, menus, tips | Elevation (alpha black-blue) | N/A | **Approved** (keep as effect tokens, not palette steps) |

### 2.2 Hardcoded colours (outside tokens) — full Booking module

| Value | Where used | Intended meaning | Contrast | Verdict |
| --- | --- | --- | --- | --- |
| `#FFF` / `#FFFFFF` | Buttons on-accent, checkbox check, tooltip text, brand SVG fill | On-primary / inverse text | Pass on accent/pink | **Approved** — should be semantic `color.text.on-brand` (or similar) |
| `#F1D6E3` | `::selection` | Selection highlight | Decorative | **Accidental-as-token** — align to pink-soft family |
| `#CFD3D9` | Scrollbar thumb | Chrome only | **1.5** vs white (decorative OK) | **Component chrome** — optional token |
| `#1D4ED8` | `.avatar.blue`, `.chan-em`, conversation mock `cv4` | Email / “blue person” accent | on `#E8F0FB` **5.84** | **Inconsistent** — not in status system; ad-hoc Information-blue |
| `#E8F0FB` | Blue avatar / email channel bg | Soft blue fill | — | **Accidental palette** (channel) |
| `#CFE0F7` | Blue avatar / email border | Soft blue border | — | **Accidental palette** |
| `#DBEAFE` | Conversation mock Desert Wheels bg | Soft blue (Tailwind-like) | — | **Duplicate / inconsistent** vs `#E8F0FB` |
| `#B45309` | Hardcoded in `.avatar.amber`, svc assignee (also `--warn`) | Warning ink | Same as warn | **Duplicated literal** |
| `#FBF2E0` | Hardcoded amber avatar / assignee (also `--warn-bg`) | Warning soft | — | **Duplicated literal** |
| `#FEF3C7` | Conversation mock ABC DMC bg | Amber soft (different from warn-bg) | — | **Inconsistent** warn soft |
| `#E3F1EF` | Conversation mock Priya bg | Soft teal | — | **Near-duplicate** of `--accent-soft` `#E7F2F0` |
| `#0B544B` | Conversation mock Priya fg (also `--accent-ink`) | Teal ink | — | **Duplicated literal** |
| `#F8DEE8` / `#A5537E` | Conversation mock Amit (also pink tokens) | Person avatar | Same a11y issue | Tokenised in CSS; **duplicated in JS data** |
| `#E7F2EF` | `.avstack .avatar` ring | Teal-tinted stack border | — | **Near-duplicate** of `--accent-soft` `#E7F2F0` (**1 digit off**) |
| `#E3EEEC` | Quote / promo card border | Soft teal border | — | **Accidental** — no token |
| `#F6FBFA`, `#FBFDFC` | Quote card gradient stops | Mint wash → white | Decorative | **Accidental** specialty |
| `#D8DDE3` | Small mono badge border | Neutral border | — | **Near** `--line-hover` / checkbox-line — **inconsistent** |
| `#E8ECF0` | `.btn-subtle:hover` | Stronger neutral hover | — | **Inferred needed** — between surface-2 and line |
| `#E6EAEF` | Status open option hover | Info hover bg | — | **Inferred needed** (status) |
| `#F6E8C8` | Status progress option hover | Warn hover bg | — | **Inferred needed** |
| `#F6E2E5` | Status blocked option hover | Danger hover bg | — | **Inferred needed** |
| `#DCEFDF` | Status done option hover | Success hover bg | — | **Inferred needed** |
| `rgba(165,83,126,.12)` | Composer / notes focus glow | Pink focus halo | — | **Inferred** focus ring soft |
| `rgba(15,110,99,.12)` | Modal field focus glow | Teal focus halo | — | **Inferred** focus ring soft (work contexts) |
| `rgba(255,255,255,.82)` | Outgoing message meta | On-pink muted text | — | **Inferred** `text.on-brand-muted` |
| `rgba(20,26,33,.08/.22)`, `rgba(23,43,77,.08)` | Modal/sticky-bulk shadows | Elevation | — | Align into shadow tokens |

---

## 3. Duplicate and inconsistent colours

| Issue | Evidence | Recommendation |
| --- | --- | --- |
| Three tokens → one white | `--panel` / `--panel-ground` / `--surface` = `#FFFFFF` | Keep one primitive `neutral.0` / `white`; map three semantics if roles differ (canvas vs control fill) |
| `--surface-2` == `--info-bg` | Same `#F1F4F7` | Split semantically: subtle surface vs status-info bg (may still share primitive) |
| `--line` == `--info-line` | Same `#E4E7EC` | Same — shared primitive, distinct semantic names |
| `--pink` == `--focus` | Same `#A5537E` | Keep intentional; document “focus uses person brand” |
| Accent-soft family drift | `#E7F2F0` token vs `#E7F2EF` avstack vs `#E3F1EF` / `#E3EEEC` promo | **Normalize** to one soft-teal primitive after approval |
| Warn soft drift | `--warn-bg` `#FBF2E0` vs mock `#FEF3C7` | Pick one warn-soft; retire the other |
| Blue family unmanaged | `#1D4ED8` + three soft blues | Either formalize **channel.blue** primitives or replace channel chips with pink/neutral |
| Status hover not tokenised | Four hardcoded hover bgs | Add as status `*-bg-hover` (inferred, already in UI) |
| Amber avatar literals | Hex instead of `var(--warn-*)` | Wire to tokens (implementation later) |

---

## 4. Proposed primitive palette

**Principle:** Only steps Booking actually uses. No fake 50–900 scale.

### Brand — Teal (work)

| Step | Value | Role |
| --- | --- | --- |
| `teal.700` | `#094840` | Pressed |
| `teal.600` | `#0B544B` | Hover / ink on soft |
| `teal.500` | `#0F6E63` | Default brand / primary |
| `teal.100` | `#DBEBE8` | Soft pressed |
| `teal.50` | `#E7F2F0` | Soft fill (**canonical**; retire `#E7F2EF`) |

**Inferred (approval required):**

| Step | Proposed | Why |
| --- | --- | --- |
| `teal.200` | ≈ `#E3EEEC` (from quote card) **or** drop specialty | Only if promo card stays |

### Brand — Pink (place / person)

| Step | Value | Role |
| --- | --- | --- |
| `pink.700` | `#853F64` | Ink / selected text |
| `pink.500` | `#A5537E` | Default pink / focus |
| `pink.100` | `#F8DEE8` | Avatar fill |
| `pink.50` | `#FBEEF4` | Soft selected |
| `pink.200` | `#EFCFDF` | Border |
| `pink.80` | `#F1D6E3` | Selection highlight (from `::selection`) |

### Neutral

| Step | Value | Role |
| --- | --- | --- |
| `neutral.950` | `#16181D` | Primary ink |
| `neutral.900` | `#20242B` | Tooltip / inverse |
| `neutral.700` | `#3E4550` | Secondary ink |
| `neutral.600` | `#545C67` | Muted ink |
| `neutral.500` | `#8A909A` | Disabled / chrome text |
| `neutral.400` | `#C6CAD1` | Checkbox line |
| `neutral.350` | `#CFD3D9` | Scrollbar (optional) |
| `neutral.300` | `#D7DBE1` | Strong / hover border |
| `neutral.250` | `#D8DDE3` | **Merge with 300 after approval** |
| `neutral.200` | `#E4E7EC` | Default border |
| `neutral.100` | `#EEF0F3` | Subtle border / divider |
| `neutral.75` | `#E8ECF0` | Subtle button hover (**from UI**) |
| `neutral.50` | `#F1F4F7` | Subtle surface |
| `neutral.40` | `#F6F8FA` | Control hover surface |
| `neutral.25` | `#FCFBFA` | Warm side |
| `neutral.20` | `#F3F0ED` | Side hover |
| `neutral.10` | `#E4E0DB` | App ground |
| `neutral.0` | `#FFFFFF` | White |

### Success

| Step | Value |
| --- | --- |
| `success.600` | `#15803D` |
| `success.100` | `#DCEFDF` ← **inferred from status hover** |
| `success.50` | `#E9F6EE` |
| `success.200` | `#CDE9D6` |

### Warning

| Step | Value |
| --- | --- |
| `warning.600` | `#B45309` |
| `warning.100` | `#F6E8C8` ← **inferred from status hover** |
| `warning.50` | `#FBF2E0` |
| `warning.200` | `#F0DCB4` |
| ~~`#FEF3C7`~~ | **Reject or approve as warning.75** — inconsistent |

### Danger

| Step | Value |
| --- | --- |
| `danger.600` | `#BE3B48` |
| `danger.100` | `#F6E2E5` ← **inferred from status hover** |
| `danger.50` | `#FBEDEE` |
| `danger.200` | `#F1D2D6` |

### Information

| Step | Value | Note |
| --- | --- | --- |
| `info.700` | `#3D4654` | Booking “open” status — **slate, not blue** |
| `info.100` | `#E6EAEF` ← **inferred hover** |
| `info.50` | `#F1F4F7` | Shared with neutral.50 today |
| `info.200` | `#E4E7EC` | Shared with neutral.200 today |

### Channel blue (optional primitive — decision required)

Only if Email / blue avatars remain distinct from status-info:

| Step | Value |
| --- | --- |
| `blue.600` | `#1D4ED8` |
| `blue.50` | `#E8F0FB` (**prefer over** `#DBEAFE`) |
| `blue.200` | `#CFE0F7` |

If rejected: recolour channel chips to pink/neutral.

---

## 5. Proposed semantic tokens

Light theme only (Booking is light). Names are proposed; final CSS names TBD after approval.

| Semantic need | Proposed token | Maps from |
| --- | --- | --- |
| Page background | `color.bg.page` | `neutral.10` (`--ground`) |
| Surface | `color.bg.surface` | `neutral.0` |
| Raised surface | `color.bg.raised` | `neutral.25` (`--side`) |
| Subtle surface | `color.bg.subtle` | `neutral.50` |
| Control hover surface | `color.bg.muted` | `neutral.40` / `neutral.75` for stronger |
| Primary text | `color.text.primary` | `neutral.950` |
| Secondary text | `color.text.secondary` | `neutral.700` |
| Muted text | `color.text.muted` | `neutral.600` |
| Disabled text | `color.text.disabled` | `neutral.500` |
| Inverse text | `color.text.inverse` | `neutral.0` |
| On-brand muted | `color.text.on-brand-muted` | white @ 82% (**inferred**) |
| Default border | `color.border.default` | `neutral.200` |
| Subtle border | `color.border.subtle` | `neutral.100` |
| Strong border | `color.border.strong` | `neutral.300` |
| Primary action | `color.action.primary` | `teal.500` |
| Primary hover | `color.action.primary.hover` | `teal.600` |
| Primary pressed | `color.action.primary.pressed` | `teal.700` |
| Primary soft | `color.action.primary.soft` | `teal.50` |
| Secondary action | `color.action.secondary` | `pink.500` |
| Secondary hover | `color.action.secondary.hover` | `pink.700` |
| Secondary soft / selected | `color.action.secondary.soft` | `pink.50` |
| Brand soft border | `color.border.brand` | `pink.200` / `teal` as needed |
| Focus | `color.focus` | `pink.500` |
| Focus soft (glow) | `color.focus.soft` | pink/teal @ 12% (**inferred**) |
| Selected | `color.bg.selected` | `pink.50` |
| Selected text | `color.text.selected` | `pink.700` |
| Disabled control | opacity **0.5** on actions (Booking pattern) + `text.disabled` for pager | Document — not a fill today |
| Status success bg/text/border | `color.status.success.*` | success primitives |
| Status warning * | `color.status.warning.*` | warning primitives |
| Status danger * | `color.status.danger.*` | danger primitives |
| Status info * | `color.status.info.*` | info primitives |
| Status * hover bg | `color.status.*.bg.hover` | inferred 100 steps |
| Tooltip bg | `color.bg.tooltip` | `neutral.900` |

### Component-specific aliases (only where genuine)

| Alias | Why |
| --- | --- |
| `color.control.checkbox.border` | `--checkbox-line` — slightly stronger than default border |
| `color.chrome.scrollbar` | Optional; decorative |
| `color.channel.email.*` | Only if blue channel stays |
| `color.avatar.person` / `work` / `warn` | Convenience mapping to pink/teal/warn soft stacks |

---

## 6. Primitive → semantic mapping (light)

```
neutral.10  → bg.page
neutral.0   → bg.surface, text.inverse
neutral.25  → bg.raised
neutral.20  → bg.raised.hover (side-hover)
neutral.50  → bg.subtle, status.info.bg
neutral.40  → bg.muted (surface-3)
neutral.75  → bg.muted.strong (btn-subtle hover)
neutral.950 → text.primary
neutral.700 → text.secondary
neutral.600 → text.muted
neutral.500 → text.disabled
neutral.200 → border.default, status.info.border
neutral.100 → border.subtle
neutral.300 → border.strong
neutral.400 → control.checkbox.border
neutral.900 → bg.tooltip

teal.500 → action.primary
teal.600 → action.primary.hover
teal.700 → action.primary.pressed
teal.50  → action.primary.soft
teal.100 → action.primary.soft.pressed

pink.500 → action.secondary, focus
pink.700 → action.secondary.hover, text.selected
pink.50  → bg.selected, action.secondary.soft
pink.200 → border.brand (person)
pink.100 → avatar.person.bg
pink.80  → selection.highlight

success/warning/danger/info → status.* (+ *.bg.hover from 100)
```

---

## 7. Light-theme usage (Booking patterns)

| Region | Colours |
| --- | --- |
| App shell | `bg.page` ground; sidebar `bg.raised`; workspace `bg.surface` |
| Work CTAs | Teal primary / brand outline (`action.primary*`) |
| Person / place CTAs | Pink secondary; tabs; nav selected; bulk; pager active |
| Sheets | Header `bg.raised`; rows on `bg.page`/`surface`; dividers `border.subtle` |
| Status chips | Four tones only (`open→info`, `progress→warning`, `blocked→danger`, `done→success`) |
| Communications | Outgoing msg = pink; email channel = **blue (unresolved)** |
| Focus | Outline `focus` (pink); work fields may use teal glow (modal) |

---

## 8. Interaction states

| State | Pattern in Booking | Token expectation |
| --- | --- | --- |
| Default | Solid fills / borders as above | Semantic defaults |
| Hover | Darken brand (`*-ink`); neutral `surface-3` / `#E8ECF0`; status option `*-100` | Explicit hover tokens |
| Pressed | `accent-pressed` / soft-pressed | Explicit pressed tokens |
| Selected | `pink-soft` + `pink-ink` | `bg.selected` / `text.selected` |
| Focus | 2px `pink` outline; some inputs 3px rgba glow | `focus` + `focus.soft` (teal or pink by context) |
| Disabled | Buttons `opacity: .5`; pager uses `ink-4` + `line-2` | Prefer semantic disabled text/border; opacity OK for filled buttons |
| Loading | No dedicated colour (skeleton uses surface-2/3 shimmer) | Keep neutral |

---

## 9. Status-colour rules

| Booking class | Semantic | Text | Background | Border | Hover bg |
| --- | --- | --- | --- | --- | --- |
| `st-open` | Information | `info.700` | `info.50` | `info.200` | `info.100` |
| `st-progress` | Warning | `warning.600` | `warning.50` | `warning.200` | `warning.100` |
| `st-blocked` | Danger | `danger.600` | `danger.50` | `danger.200` | `danger.100` |
| `st-done` | Success | `success.600` | `success.50` | `success.200` | `success.100` |

**Rules:**

1. Status uses **pill** chrome; never soft-rect CTA radius for status meaning.
2. Do **not** use teal or pink as status tones (reserved for work / person).
3. Do **not** use channel blue as `st-open` / info status.
4. Chip text must meet **≥ 4.5:1** on its soft bg (warn/ok currently ~4.51 — monitor; darken text if failing in real rendering).

---

## 10. Accessibility and contrast findings

| Pair | Ratio | AA normal text (4.5) | Notes |
| --- | --- | --- | --- |
| ink / surface | 17.76 | Pass | |
| ink-2 / surface | 9.67 | Pass | |
| ink-3 / surface | 6.77 | Pass | |
| ink-4 / surface | 3.21 | **Fail** | Disabled / decorative only |
| white / accent | 6.12 | Pass | Primary button |
| white / pink | 5.07 | Pass | Secondary button |
| pink / pink-avatar | 4.01 | **Fail** | Avatar initials — **needs approval to darken text or deepen fill** |
| ok / ok-bg | 4.51 | Pass (borderline) | Prefer slight text darken if QA fails |
| warn / warn-bg | 4.51 | Pass (borderline) | Same |
| bad / bad-bg | 4.72 | Pass | |
| info / info-bg | 8.64 | Pass | |
| Focus ring | pink on white | OK as 2px UI | Dual focus glow (pink vs teal) needs a rule |

**Inferred a11y fix (approval required):** e.g. avatar person text → `pink.700` `#853F64` on `pink.100` (estimated stronger contrast) instead of `pink.500`.

---

## 11. Do and don’t

**Do**

- Use **teal** for work actions and brand mark.
- Use **pink** for person/place, selection, tabs, bulk, focus outline.
- Use the **four status stacks** for chips / status menus only.
- Prefer tokens over raw hex in CSS and in JS mock data.
- Keep soft-rect CTAs and pill statuses visually distinct via radius + colour role.

**Don’t**

- Don’t invent full 50–900 ramps without Booking evidence.
- Don’t use blue as the Information status colour unless product explicitly redefines `st-open`.
- Don’t use pink/teal as success/warning/danger.
- Don’t use `ink-4` for essential reading text.
- Don’t add new one-off soft fills (`#E3F1EF`, `#FEF3C7`, `#DBEAFE`) — extend primitives instead.
- Don’t ship dark theme in this pass (Booking is light-only).

---

## 12. Proposed Storybook Colorography structure

```
Foundations / Colorography
  ├─ Overview (teal=work, pink=person, status rules)
  ├─ Primitives
  │    ├─ Teal
  │    ├─ Pink
  │    ├─ Neutral
  │    ├─ Success / Warning / Danger / Information
  │    └─ Channel blue (if approved)
  ├─ Semantic — Backgrounds
  ├─ Semantic — Text
  ├─ Semantic — Borders
  ├─ Semantic — Actions & states
  ├─ Semantic — Status
  ├─ Contrast checklist (pass/fail table)
  └─ Do / Don’t
```

Each primitive swatch: value, CSS variable, usage note, contrast vs white / vs paired soft bg.

---

## 13. Unresolved design decisions

| # | Decision | Options | Recommendation |
| --- | --- | --- | --- |
| D1 | Keep **channel blue** as a primitive? | A) Formalize blue.50/200/600 B) Recolor email/avatars to pink/neutral | Prefer **A** if Email must read as “mail blue”; else **B** |
| D2 | Collapse `--panel` / `--panel-ground` / `--surface`? | A) One primitive, multiple semantics B) Keep three CSS vars pointing same | **A** |
| D3 | Info status sharing neutral.50/200? | A) Shared primitives B) Slightly distinct info.50 | **A** OK if documented |
| D4 | Avatar pink contrast fail | A) Darken fg to pink.700 B) Darken bg C) Accept as large UI | Prefer **A** |
| D5 | Dual focus glow (pink notes vs teal modal) | A) Context tokens `focus.person` / `focus.work` B) One focus colour only | Prefer **A** (matches Booking) |
| D6 | Quote gradient `#F6FBFA`→`#FBFDFC` | A) Specialty illustration tokens B) Flatten to surface | Prefer **B** unless marketing card stays |
| D7 | Normalize teal soft drift (`#E7F2F0` vs `#E7F2EF` vs `#E3F1EF`) | Pick `#E7F2F0` as canonical | **Yes** |
| D8 | Warn soft `#FEF3C7` vs `#FBF2E0` | Keep warn-bg only | **Yes** — drop `#FEF3C7` |
| D9 | Status text borderline 4.51 | Darken success/warn text one step | **Approval** if QA requires |
| D10 | Naming style in CSS | Keep `--accent/--pink` vs migrate to `--color-action-primary` | Migrate with aliases for Booking continuity |

---

## 14. Implementation status

**Done**

1. Locked D1–D10 as above.
2. Rewrote `tokens.css` (primitives + semantics + legacy aliases).
3. Replaced Booking hardcoded hex (CSS + conversation mock data); flattened quote gradient.
4. Storybook Colorography under Foundations.
5. Avatar person text contrast fix (`pink-ink`).

**Follow-ups**

- Re-measure status chip contrast in QA if borderline 4.51 fails devices.
- Optionally migrate Booking CSS from legacy `--accent` names to `--color-action-*` in a later pass.
