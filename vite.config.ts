import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

/** Keep in sync with src/entries/manifest.ts */
const SUBPATHS = [
  "button",
  "icon-button",
  "sidebar",
  "top-bar",
  "app-shell",
  "data-sheet",
  "pagination",
  "search-field",
  "filter-select",
  "text-field",
  "checkbox",
  "status-chip",
  "status-select",
  "tab-bar",
  "modal",
  "tooltip",
  "avatar",
  "empty-state",
  "list-page",
  "detail-page",
  "icon",
] as const;

const entry: Record<string, string> = {
  index: resolve(__dirname, "src/index.ts"),
};

for (const name of SUBPATHS) {
  entry[`entries/${name}`] = resolve(__dirname, `src/entries/${name}.ts`);
}

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry,
      formats: ["es"],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: "styles",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: "styles.[ext]",
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
