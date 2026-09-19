/**
 * Generate src/icons/registry.generated.ts from Booking HTML + _named.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const BOOKING_HTML =
  process.env.BOOKING_HTML ||
  path.resolve(__dirname, "../../../direction 03 experiment/booking-redesign.html");
const named = JSON.parse(
  fs.readFileSync(path.join(__dirname, "screenshots/icons/_named.json"), "utf8"),
);
const html = fs.readFileSync(BOOKING_HTML, "utf8");

function fingerprintSvg(svgInner) {
  const parts = [];
  const pathRe = /<(path|circle|rect|line|polyline|polygon)\b([^>]*)\/?>/gi;
  let m;
  while ((m = pathRe.exec(svgInner))) {
    const tag = m[1].toLowerCase();
    const attrs = m[2];
    const get = (name) => {
      const r = new RegExp(`${name}="([^"]*)"`, "i");
      const a = attrs.match(r);
      return a ? a[1].replace(/\s+/g, " ").trim() : "";
    };
    if (tag === "path") parts.push(`p:${get("d")}`);
    else if (tag === "circle") parts.push(`c:${get("cx")},${get("cy")},${get("r")}`);
    else if (tag === "rect")
      parts.push(`r:${get("x")},${get("y")},${get("width")},${get("height")},${get("rx")}`);
    else if (tag === "line") parts.push(`l:${get("x1")},${get("y1")},${get("x2")},${get("y2")}`);
    else if (tag === "polyline" || tag === "polygon") parts.push(`${tag[0]}:${get("points")}`);
  }
  const fillMode =
    /fill="currentColor"/i.test(svgInner) && !/fill="none"/i.test(svgInner) ? "fill" : "stroke";
  const key = fillMode + "|" + parts.join("|");
  const hash = crypto.createHash("sha1").update(key).digest("hex").slice(0, 10);
  return { hash, fillMode, parts, inner: svgInner };
}

/** Convert SVG child markup to JSX string */
function toJsxChildren(inner) {
  return inner
    .replace(/\s+/g, " ")
    .trim()
    .replace(/<path\b([^>]*)\/?>/gi, (_, a) => {
      const d = (a.match(/d="([^"]*)"/i) || [])[1];
      return d ? `<path d="${d}" />` : "";
    })
    .replace(/<circle\b([^>]*)\/?>/gi, (_, a) => {
      const cx = (a.match(/cx="([^"]*)"/i) || [])[1];
      const cy = (a.match(/cy="([^"]*)"/i) || [])[1];
      const r = (a.match(/r="([^"]*)"/i) || [])[1];
      return `<circle cx="${cx}" cy="${cy}" r="${r}" />`;
    })
    .replace(/<rect\b([^>]*)\/?>/gi, (_, a) => {
      const x = (a.match(/x="([^"]*)"/i) || [])[1] || "0";
      const y = (a.match(/y="([^"]*)"/i) || [])[1] || "0";
      const w = (a.match(/width="([^"]*)"/i) || [])[1];
      const h = (a.match(/height="([^"]*)"/i) || [])[1];
      const rx = (a.match(/rx="([^"]*)"/i) || [])[1];
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ""} />`;
    })
    .replace(/<line\b([^>]*)\/?>/gi, (_, a) => {
      const x1 = (a.match(/x1="([^"]*)"/i) || [])[1];
      const y1 = (a.match(/y1="([^"]*)"/i) || [])[1];
      const x2 = (a.match(/x2="([^"]*)"/i) || [])[1];
      const y2 = (a.match(/y2="([^"]*)"/i) || [])[1];
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
    });
}

const svgByHash = new Map();
const svgRe = /<svg\b([^>]*)>([\s\S]*?)<\/svg>/gi;
let match;
while ((match = svgRe.exec(html))) {
  const attrs = match[1];
  const inner = match[2];
  const fp = fingerprintSvg(inner);
  if (svgByHash.has(fp.hash)) continue;
  const sw = (attrs.match(/stroke-width="([^"]*)"/i) || [])[1];
  svgByHash.set(fp.hash, {
    fillMode: fp.fillMode,
    strokeWidth: sw ? Number(sw) : fp.fillMode === "fill" ? undefined : 1.7,
    jsx: toJsxChildren(inner),
  });
}

const CATEGORY_MAP = {
  navigation: "Navigation",
  actions: "Actions",
  search: "Search and filters",
  data: "Data tables",
  dates: "Dates and locations",
  booking: "Booking and travel",
  services: "Services",
  people: "People and ownership",
  documents: "Documents",
  finance: "Finance and payments",
  communication: "Communication",
  status: "Status and feedback",
  directional: "Directional controls",
  misc: "Misc",
};

let entries = "";
for (const icon of named.named) {
  const svg = svgByHash.get(icon.hash);
  if (!svg) {
    console.warn("missing svg for", icon.name, icon.hash);
    continue;
  }
  if (icon.status === "component-owned") {
    console.log("skip component-owned", icon.name);
    continue;
  }
  const stroke =
    icon.fillMode === "fill"
      ? ""
      : `strokeWidth: ${icon.dominantStroke ?? svg.strokeWidth ?? 1.7},`;
  const fill = icon.fillMode === "fill" ? "fill: true," : "";
  const aliases = JSON.stringify(icon.aliases);
  const screens = JSON.stringify(icon.screens);
  const cat = CATEGORY_MAP[icon.category] || "Misc";
  entries += `
  ${icon.name}: {
    name: "${icon.name}",
    aliases: ${aliases} as const,
    category: "${cat}",
    screens: ${screens} as const,
    sizes: [${icon.dominantSize}] as const,
    ${stroke}
    ${fill}
    interactive: ${icon.interactive},
    status: "${icon.status === "approved-unnamed" ? "approved" : icon.status}",
    a11y: "${icon.a11y}",
    paths: (
      <>
        ${svg.jsx}
      </>
    ),
  },`;
}

const file = `/* Auto-generated from Booking HTML — do not hand-edit path data.
 * Regenerated by docs/audit/generate-icon-registry.mjs
 */
import type { ReactNode } from "react";

export type IconCategory =
  | "Navigation"
  | "Actions"
  | "Search and filters"
  | "Data tables"
  | "Dates and locations"
  | "Booking and travel"
  | "Services"
  | "People and ownership"
  | "Documents"
  | "Finance and payments"
  | "Communication"
  | "Status and feedback"
  | "Directional controls"
  | "Misc";

export interface IconMeta {
  name: string;
  aliases: readonly string[];
  category: IconCategory;
  screens: readonly string[];
  sizes: readonly number[];
  strokeWidth?: number;
  fill?: boolean;
  interactive: boolean;
  status: "approved" | "deprecated" | "component-owned" | "awaiting-approval";
  a11y: string;
  paths: ReactNode;
}

export const ICON_REGISTRY = {${entries}
} satisfies Record<string, IconMeta>;

export type IconName = keyof typeof ICON_REGISTRY;
export const ICON_NAMES = Object.keys(ICON_REGISTRY) as IconName[];

export function getIconMeta(name: IconName): IconMeta {
  return ICON_REGISTRY[name];
}

export function resolveIconName(nameOrAlias: string): IconName | undefined {
  if (nameOrAlias in ICON_REGISTRY) return nameOrAlias as IconName;
  for (const key of ICON_NAMES) {
    const meta = ICON_REGISTRY[key];
    if ((meta.aliases as readonly string[]).includes(nameOrAlias)) return key;
  }
  return undefined;
}
`;

const outPath = path.join(ROOT, "src/icons/registry.tsx");
fs.writeFileSync(outPath, file);
console.log("wrote", outPath, "icons=", named.named.length);
