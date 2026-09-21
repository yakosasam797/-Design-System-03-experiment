/**
 * Generates a shadcn-compatible registry that points at the same src/ files.
 * No duplicate component implementations.
 *
 * Usage: node scripts/generate-registry.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "registry");
const rDir = path.join(outDir, "r");

fs.mkdirSync(rDir, { recursive: true });

/** @type {Array<{ name: string; title: string; description: string; files: string[]; dependencies?: string[]; registryDependencies?: string[] }>} */
const items = [
  {
    name: "button",
    title: "Button",
    description: "Booking-matched Button and RowActions",
    files: ["src/components/Button/Button.tsx", "src/components/Button/Button.css"],
  },
  {
    name: "icon-button",
    title: "IconButton",
    description: "Topbar-sized icon button (36×36)",
    files: ["src/components/IconButton/IconButton.tsx", "src/components/IconButton/IconButton.css"],
  },
  {
    name: "sidebar",
    title: "Sidebar",
    description: "Booking inset Sidebar + SidebarFooter + SidebarNav",
    files: [
      "src/patterns/AppShell/Sidebar.tsx",
      "src/components/SidebarNav/SidebarNav.tsx",
      "src/components/SidebarNav/SidebarNav.css",
      "src/patterns/AppShell/AppShell.css",
    ],
    registryDependencies: ["icon"],
  },
  {
    name: "top-bar",
    title: "Top Bar",
    description: "Booking Topbar (also exported as TopBar)",
    files: [
      "src/patterns/AppShell/Topbar.tsx",
      "src/components/TopbarActions/TopbarActions.tsx",
      "src/components/TopbarActions/TopbarActions.css",
      "src/patterns/AppShell/AppShell.css",
    ],
    registryDependencies: ["button", "icon-button", "search-field"],
  },
  {
    name: "app-shell",
    title: "App Shell",
    description: "Canonical ParyatechOS AppShell composing Sidebar + Topbar",
    files: [
      "src/patterns/AppShell/AppShell.tsx",
      "src/patterns/AppShell/Sidebar.tsx",
      "src/patterns/AppShell/Topbar.tsx",
      "src/patterns/AppShell/types.ts",
      "src/patterns/AppShell/AppShell.css",
    ],
    registryDependencies: ["sidebar", "top-bar"],
  },
  {
    name: "data-sheet",
    title: "Data Sheet",
    description: "Booking density table (DataSheet + cell helpers)",
    files: ["src/components/DataSheet/DataSheet.tsx", "src/components/DataSheet/DataSheet.css"],
  },
  {
    name: "search-field",
    title: "Search Field",
    description: "Topbar / toolbar search field",
    files: ["src/components/SearchField/SearchField.tsx", "src/components/SearchField/SearchField.css"],
    registryDependencies: ["icon"],
  },
  {
    name: "icon",
    title: "Icon",
    description: "Booking icon registry and Icon component",
    files: ["src/icons/Icon.tsx", "src/icons/registry.tsx", "src/icons/index.ts"],
  },
  {
    name: "tokens",
    title: "Tokens",
    description: "Colour, typography, spacing, radius, elevation, breakpoints, focus",
    files: [
      "src/tokens/tokens.css",
      "src/tokens/typography.css",
      "src/styles/reset.css",
      "src/styles/focus.css",
    ],
    type: "registry:style",
  },
];

function readFile(rel) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    throw new Error(`Missing registry source: ${rel}`);
  }
  return fs.readFileSync(abs, "utf8");
}

const indexItems = [];

for (const item of items) {
  const type = item.type ?? "registry:ui";
  const files = item.files.map((filePath) => ({
    path: filePath,
    type: filePath.endsWith(".css") ? "registry:style" : "registry:ui",
    content: readFile(filePath),
    target: filePath.replace(/^src\//, "components/paryatech/"),
  }));

  const payload = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies ?? [],
    registryDependencies: item.registryDependencies ?? [],
    files,
  };

  fs.writeFileSync(path.join(rDir, `${item.name}.json`), JSON.stringify(payload, null, 2));
  indexItems.push({
    name: item.name,
    type,
    title: item.title,
    description: item.description,
  });
  console.log("wrote", `registry/r/${item.name}.json`);
}

const index = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "paryatech-ui",
  homepage: "https://github.com/yakosasam797/-Design-System-03-experiment",
  items: indexItems,
};

fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(index, null, 2));
fs.writeFileSync(path.join(outDir, "registry.json"), JSON.stringify(index, null, 2));
console.log("wrote registry/index.json");
