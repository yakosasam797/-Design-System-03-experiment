import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ParyatechDesignSystem",
      formats: ["es"],
      fileName: () => "index.js",
      cssFileName: "design-system",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: "design-system.[ext]",
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
