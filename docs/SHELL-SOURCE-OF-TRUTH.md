# Shell source of truth — Direction 03 only

**Sole approved shell:** Booking Direction 03 (the Booking module chrome mirrored by this package).

There is **no** alternate shell direction in `@paryatech/ui`. Do not invent, restore, or “improve” shell chrome from older explorations, screenshots of other products, or Storybook interaction demos.

## What the shell is

| Piece | Direction 03 recipe |
| --- | --- |
| Frame | Inset Sidebar + workspace on `--ground`; 12px pad/gap @ desktop |
| Sidebar | ~250px expanded / ~66px collapsed; raised `--side`; 16px radius; brand + caret; nav groups; credits + Upgrade + Collapse |
| Nav (ops) | All finances, Team, Automations, **Reports** — not long demo labels |
| Topbar | Back (detail only) + breadcrumbs + capped search + **TopbarActions** (settings, help, call logs, bell) + account |
| Notes | Hidden on list; visible on detail |

## Forbidden in shell chrome

- Role / persona switchers in the Topbar (any Owner · Admin · Member style control)
- Dark sticky full-height sidebar rails
- Local `Sidebar` / `Topbar` / `AppShell` / `HeaderShell` / `RoleSwitcher` in product apps
- Copying Storybook **test** stories (e.g. long-label truncation demos) into product nav

## Where to look

1. Storybook **Patterns/AppShell → BookingListShell** and **BookingDetailShell**
2. Package exports: `AppShell`, `Sidebar`, `Topbar` / `TopBar` from `@paryatech/ui`
3. This package’s `src/patterns/AppShell` + `shellFixture.ts` (`exampleNav`)

Historical incident write-ups that described older explorations were removed so agents cannot treat them as design options.
