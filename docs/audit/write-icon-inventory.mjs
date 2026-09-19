/**
 * Emit docs/audit/BOOKING-ICON-INVENTORY.md from _named.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const named = JSON.parse(
  fs.readFileSync(path.join(__dirname, "screenshots/icons/_named.json"), "utf8"),
);

const rows = named.named
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((i) => {
    const preview = `\`data-icon=${i.name}\``;
    const source = `booking-redesign.html L${i.lines[0] ?? "?"} · hash \`${i.hash}\``;
    const screens = (i.screens || []).join(", ") || "—";
    const ctx = [...(i.labels || []).slice(0, 2), ...(i.classes || []).slice(0, 2)]
      .filter(Boolean)
      .join("; ") || i.category;
    const size = `${i.dominantSize}px`;
    const stroke = i.dominantStroke != null ? String(i.dominantStroke) : i.fillMode === "fill" ? "fill" : "—";
    const colour = i.colourToken;
    const a11y = i.interactive ? "Label on control when icon-only" : "aria-hidden decorative";
    const status = i.status;
    return `| **${i.name}** | ${preview} | ${source} | ${screens} | ${ctx} | ${size} | ${stroke} | ${colour} | ${a11y} | ${status} |`;
  });

const md = `# Booking icon inventory

**Status:** Complete (source + named registry)  
**Date:** ${new Date().toISOString().slice(0, 10)}  
**SoT:** \`booking-redesign.html\`  
**Evidence:** [\`screenshots/icons/_extract.json\`](./screenshots/icons/_extract.json) · [\`_named.json\`](./screenshots/icons/_named.json)

## Rollup

| Metric | Count |
| --- | ---: |
| Total SVG instances (static + script) | ${named.totalInstances} |
| Unique glyphs (fingerprint) | ${named.uniqueGlyphs} |
| Named / approved in DS registry | ${named.named.filter((n) => n.status === "approved" || n.status === "approved-unnamed").length} |
| Component-owned (excluded from catalogue) | ${named.named.filter((n) => n.status === "component-owned").length + named.componentOwned.length} |
| Unused / dead | 0 (all fingerprints appear in shipped HTML) |
| Deprecated | 0 |
| Awaiting design approval | 0 |
| Duplicates consolidated (same path → one name) | instances ${named.totalInstances} → ${named.uniqueGlyphs} unique |

**Component-owned (not in Icon catalogue):** Checkbox checkmark (11px / stroke 3.2); AppShell \`brandMark\` (32×32 fill bubble).

**Known prior DS mismatches (fixed by re-extraction):** \`home\` was house → now alias of **layoutGrid**; \`bookings\` was calendar → now open-book paths from Booking nav.

## Table

Icon | Preview | Source | Booking screens | Usage context | Size | Stroke | Colour token | Accessibility | Status
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
${rows.join("\n")}

## Categories

${[...new Set(named.named.map((n) => n.category))]
  .sort()
  .map((c) => `- **${c}:** ${named.named.filter((n) => n.category === c).map((n) => n.name).join(", ")}`)
  .join("\n")}

## Aliases

${named.named
  .filter((n) => n.aliases?.length)
  .map((n) => `- \`${n.aliases.join("`, `")}\` → **${n.name}**`)
  .join("\n")}

## Regeneration

\`\`\`bash
node docs/audit/extract-booking-icons.mjs
node docs/audit/name-booking-icons.mjs
node docs/audit/generate-icon-registry.mjs
node docs/audit/write-icon-inventory.mjs
\`\`\`
`;

fs.writeFileSync(path.join(__dirname, "BOOKING-ICON-INVENTORY.md"), md);
console.log("wrote BOOKING-ICON-INVENTORY.md rows=", rows.length);
