# Booking module — inconsistencies needing design approval

**Gate:** 1  
**Rule:** Re-measured from live Booking (Gate 1 re-run CDP `2026-09-19T07:00:15Z` — see `screenshots/_computed-metrics.json`). Do **not** formalise as tokens until design signs off.  
**Supporting only (never override render):** prior pilot docs (`VISUAL-PARITY-FAILURE-REPORT.md`, `COLOR-SYSTEM-PLAN.md`, `docs/decisions/review-queue.md`).

Each item: observed → conflict → decision needed → Gate 2 implication.

---

## I1 — Status chip size vs older pilot

| | |
| --- | --- |
| **Observed** | `.st-cap` / `.st-pick`: **height 32px**, **font 12.5px**, **border-radius 8px** (matched to `.btn-sm`) |
| **Conflict** | Pilot notes recorded **28px / 12px** chips |
| **Decision** | Keep 32/12.5/8 (align with soft-rect CTAs) **or** revert to 28/12? |
| **Gate 2** | StatusChip API size tokens |

---

## I2 — Toolbar / voucher CTA height drift

| | |
| --- | --- |
| **Observed** | Many tab primary actions use inline `style="height:36px"` (Upload voucher, Add task, Add traveller, Request documents, Record payment, …). Measured Upload voucher **36px** tall, **radius 10px**, Onest 13.5px. |
| **Conflict** | `.btn-sm` is **32px / 8px / 12.5px**; default `.btn` is **38px / 10px**. |
| **Decision** | Introduce formal **toolbar size (36)** · use default 38 · or force all sheet CTAs to `btn-sm` 32? |
| **Gate 2** | Button size scale: `sm` / `md` / `toolbar` / `lg` |

---

## I3 — Notes filter chips still fully pill

| | |
| --- | --- |
| **Observed** | `.nd-fil`: **border-radius 999px**, height 30px (computed confirmed) |
| **Conflict** | Product direction: soft-rect CTAs at **8px**; list/status chips already moved to 8px |
| **Decision** | Soft-rect 8px for notes filters **or** keep pills as a distinct “filter chip” family? |
| **Gate 2** | Chip radius token split (status vs filter vs badge) |

---

## I4 — Dual / triple type stack on tables

| | |
| --- | --- |
| **Observed** | Onest on buttons/titles; Public Sans on UI + **table headers** — CDP on `.sheet-bk .row-head` “Booking”: **12px / 600 / letter-spacing 0.12px**, colour `#3E4550`; JetBrains Mono on IDs, money, pagination, tab chips |
| **Conflict** | Pilot flagged wrong header treatment (headers reading as UI, not data) |
| **Decision** | Headers stay Public Sans · switch to Onest · or Mono for data headers? |
| **Gate 2** | Typography roles: `title` / `ui` / `data` / `tableHeader` |

---

## I5 — `--surface-2` overloaded as info status background

| | |
| --- | --- |
| **Observed** | `--surface-2: #F1F4F7` and `--info-bg: #F1F4F7` (identical). `.st-open` and `.t-info` use info tokens; block heads also use `--surface-2`. |
| **Conflict** | Neutral surface elevation vs semantic “info” status share one swatch |
| **Decision** | Split tokens (surface vs status-info) even if hex matches today · or document intentional alias? |
| **Gate 2** | Colour system roles |

---

## I6 — `--ink-4` contrast for body-like use

| | |
| --- | --- |
| **Observed** | `--ink-4: #8A909A` with source comment “disabled / decorative only”. Used for separators and muted chrome. |
| **Conflict** | Fails AA as body text if misused |
| **Decision** | Enforce decorative-only in docs · introduce `--ink-muted` that passes AA for secondary copy? |
| **Gate 2** | Text colour ramp + contrast table |

---

## I7 — Status vocabulary differs by table

| Surface | Example labels | Shared tones |
| --- | --- | --- |
| List readiness | At risk, Needs attention, Ready | blocked / progress / done |
| List / Finance chips | Overdue, Due, Settled | same |
| Tasks (`.st-pick`) | Open, In progress, Blocked, Done | open / progress / blocked / done |
| Vouchers | Blocked, Awaiting, Sent | blocked / progress / done |
| Services | Confirmation pending, Confirmed, … | same tones |

| | |
| --- | --- |
| **Decision** | DS owns **four tones only**; Booking maps labels (aligns with review-queue **Q2=A**) · or separate semantic enums per domain in DS? |
| **Gate 2** | StatusChip tones + Booking mapping tables |

---

## I8 — Hardcoded status menu hover hexes

| | |
| --- | --- |
| **Observed** | `.st-pick.st-open:hover` / `.st-opt.*:hover` use `#E6EAEF`, `#F6E8C8`, `#F6E2E5`, `#DCEFDF` |
| **Conflict** | Not expressed as tokens; will drift from `--*-bg` bases |
| **Decision** | Derive hover from status bg (filter/brightness) · or add `--*-bg-hover` tokens? |
| **Gate 2** | Status colour steps |

---

## I9 — Empty-state implementations diverge

| | |
| --- | --- |
| **Observed** | Live empties: `#bkEmpty` (list — icon + title + body: “No bookings in this view”) and `.nd-empty` (notes). CSS `.empty` card exists but **no tab uses it**. |
| **Conflict** | Multiple patterns for one concept; DS `EmptyState` (Q4=A) expects one family |
| **Decision** | Standardise on illustrated EmptyState · keep lightweight text empties for notes/filters? |
| **Gate 2** | EmptyState variants |

---

## I10 — Row More control without menu

| | |
| --- | --- |
| **Observed** | `.more-btn` on list/task/finance rows; **no menu markup or handler** |
| **Conflict** | Affordance implies actions that cannot be audited |
| **Decision** | Spec menu contents · or remove control until ready |
| **Gate 2 / 4** | ActionMenu pattern; do not invent in Gate 1 |

---

## I11 — Communication-only 820px breakpoint

| | |
| --- | --- |
| **Observed** | Communication layout has `@media (max-width: 820px)`; other tabs rely on generic narrow rules |
| **Conflict** | Breakpoint not shared system-wide |
| **Decision** | Promote 820 as layout token · or keep Communication-specific? |
| **Gate 2** | Layout / breakpoint tokens |

---

## Approval checklist (design)

- [ ] I1 Status chip 32 vs 28  
- [ ] I2 Toolbar height 36 vs 32/38  
- [ ] I3 Notes filter pill vs soft-rect  
- [ ] I4 Table header type role  
- [ ] I5 surface-2 / info-bg alias  
- [ ] I6 ink-4 usage rules  
- [ ] I7 Status vocab ownership  
- [ ] I8 Status hover tokens  
- [ ] I9 Empty-state family  
- [ ] I10 More menu scope  
- [ ] I11 820 breakpoint  

**Stop:** Gate 2 (foundations / icons / component APIs) starts only after these are approved or explicitly deferred.
