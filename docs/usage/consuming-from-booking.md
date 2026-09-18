# Optional: consuming from a product HTML shell

This package is standalone. A product may inject tokens into an HTML document without importing React components.

## Pattern

1. Install from GitHub (not a local `file:` path for shared use):

```bash
npm install github:yakosasam797/-Design-System-03-experiment
```

2. Import CSS as raw text (Vite example) and inject into the document `<style>`:

```ts
import tokensCss from "@paryatech/design-system/tokens.css?raw";
```

3. Prefer package CSS variables over duplicated `:root` blocks in the product HTML.

No sibling checkout of this design-system folder is required once the package is installed from GitHub.
