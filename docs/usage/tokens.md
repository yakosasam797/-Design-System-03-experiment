# Tokens

Canonical file: `src/tokens/tokens.css`.

## Install

```bash
npm install github:yakosasam797/-Design-System-03-experiment
```

```ts
import "@paryatech/design-system/tokens.css";
import "@paryatech/design-system/typography.css";
// or
import "@paryatech/design-system/styles.css";
```

## Layers

1. **Primitives** — `--pt-teal-*`, `--pt-pink-*`, `--pt-neutral-*`, status, channel blue  
2. **Semantics** — `--color-bg-*`, `--color-text-*`, `--color-action-*`, `--color-status-*`, …  
3. **Legacy aliases** — `--ground`, `--accent`, `--pink`, `--ok`, … (product continuity)

## Typography

Roles: `--type-{role}-family|size|weight|line|tracking` (+ transform where needed). Families: `--font-sans`, `--font-display`, `--font-mono`.

## Rules

- **Teal = work** · **Pink = place / person**
- Status info is **slate** (`--pt-info-*`), not channel blue
- Channel blue is email/avatar only
- Pink avatar text uses `--pink-ink` / `--color-avatar-person-text` (AA)

`--page-pad` is set on `.pt-content` (AppShell), not on `:root` (uses `cqi`).

See Storybook → Foundations / Colorography and Foundations / Typography.
