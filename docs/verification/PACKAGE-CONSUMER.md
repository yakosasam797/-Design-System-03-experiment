# Package consumer verification — `@paryatech/ui`

**Date:** 2026-09-21  
**Package:** `@paryatech/ui@0.2.0`  
**Proof:** `pnpm pack` tarball installed into `.tmp-consumer` (Next.js 15 + React 19)

## Commands run (library)

| Step | Result |
| --- | --- |
| `pnpm lint` | Pass (oxlint; unused import fixed) |
| `pnpm typecheck` | Pass |
| `pnpm test` | Pass (20 tests) |
| `pnpm build` | Pass — ESM `dist/` + `styles.css` + `.d.ts` |
| `pnpm build-storybook` | Pass — `storybook-static/` |
| `pnpm pack` | Produced `paryatech-ui-0.2.0.tgz` |
| `pnpm generate:registry` | Wrote `registry/r/*.json` from the same `src/` files |

## Consumer (Next.js 15)

Path: `.tmp-consumer/` (gitignored)

```bash
cd .tmp-consumer
pnpm install          # resolves file:./paryatech-ui-0.2.0.tgz
pnpm exec tsc --noEmit
pnpm run build        # next build — success
```

Consumer imports proven:

```tsx
import "@paryatech/ui/styles.css";
import { Button } from "@paryatech/ui/button";
import { Sidebar, SidebarFooter } from "@paryatech/ui/sidebar";
import { TopBar } from "@paryatech/ui/top-bar";
import { CreditsMeter } from "@paryatech/ui";
```

`next build` compiled and statically generated `/` successfully. First Load JS for `/` ≈ 109 kB (includes library chunks).

## Modes working

| Mode | Status |
| --- | --- |
| Barrel `from "@paryatech/ui"` | Working |
| Subpaths `sidebar` / `top-bar` / `button` | Working in Next 15 |
| `@paryatech/ui/styles.css` | Working |
| shadcn registry JSON | Generated; same `src/` content embedded in `registry/r/*.json` |
| Storybook | Build-only docs/preview; still relative imports of production `src/` |

## Notes

- No visual redesign: component CSS and tokens unchanged.
- `TopBar` is an alias of `Topbar`.
- React / React DOM are peerDependencies and were not bundled into the library.
- Re-run: `pnpm pack` then reinstall the tarball in `.tmp-consumer`.
