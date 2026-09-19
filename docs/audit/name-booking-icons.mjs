/**
 * Assign canonical names to extracted Booking glyph fingerprints.
 * Run after extract-booking-icons.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const extract = JSON.parse(
  fs.readFileSync(path.join(__dirname, "screenshots/icons/_extract.json"), "utf8"),
);

/** @type {{ name: string, category: string, aliases: string[], match: (blob: string, g: object) => boolean }[]} */
const RULES = [
  { name: "layoutGrid", category: "navigation", aliases: ["nav.home", "home"], match: (p) => p.includes("r:3,3,7,7,1.5") },
  { name: "inbox", category: "navigation", aliases: ["nav.inbox"], match: (p) => p.includes("M22 12h-6l-2 3h-4l-2-3H2") },
  { name: "news", category: "navigation", aliases: ["nav.news"], match: (p) => p.includes("M4 22h16a2 2 0 0 0 2-2V4") },
  { name: "tasksNav", category: "navigation", aliases: ["nav.tasks"], match: (p) => p.includes("m9 12 2 2 4-4") && p.includes("r:3,3,18,18") },
  { name: "fileText", category: "documents", aliases: ["nav.queries", "note"], match: (p) => p.includes("M15 2H8.6A1.6") || (p.includes("M15 2H6a2") && p.includes("M15 2v5h5")) },
  { name: "package", category: "navigation", aliases: ["nav.packages"], match: (p) => p.includes("M21 8a2 2 0 0 0-1-1.73l-7-4") },
  { name: "bookings", category: "navigation", aliases: ["nav.bookings"], match: (p) => p.includes("M2 3h6a4 4 0 0 1 4 4v14") },
  { name: "customers", category: "navigation", aliases: ["nav.customers"], match: (p) => p.includes("M6.2 19a6 6 0 0 1 11.6 0") },
  { name: "vendors", category: "navigation", aliases: ["nav.vendors"], match: (p) => p.includes("M3 9.5 4.5 4h15L21 9.5") },
  { name: "finances", category: "navigation", aliases: ["nav.finances"], match: (p) => p.includes("M5 21V10l7-5 7 5v11") },
  { name: "team", category: "people", aliases: ["nav.team"], match: (p) => p.includes("M16 21v-2a4 4 0 0 0-4-4H6") && p.includes("M22 21v-2") },
  { name: "zap", category: "navigation", aliases: ["nav.automations"], match: (p) => p.includes("M13 2 3 14h9l-1 8 10-12h-9z") },
  { name: "chart", category: "navigation", aliases: ["nav.reports"], match: (p) => p.includes("M3 3v18h18") && p.includes("M7 15l3-4") },
  { name: "credits", category: "finance", aliases: [], match: (p) => p.includes("M15.5 3.3a6 6 0 0 1 0 11.4") },
  { name: "collapse", category: "directional", aliases: ["chrome.collapse"], match: (p) => p.includes("m11 17-5-5 5-5") && p.includes("m18 17-5-5 5-5") },
  { name: "plus", category: "actions", aliases: ["action.plus"], match: (p) => p.includes("M12 5v14") && p.includes("M5 12h14") && !p.includes("M21 15") },
  { name: "refresh", category: "actions", aliases: ["action.refresh"], match: (p) => p.includes("M21 12a9 9 0 1 1-2.64-6.36") },
  { name: "search", category: "search", aliases: ["chrome.search"], match: (p) => p.includes("c:11,11,7.5") || p.includes("m21 21-4.3-4.3") },
  { name: "edit", category: "actions", aliases: ["action.edit"], match: (p) => p.includes("M16.5 3.5a2.12") || p.includes("M12 20h9") },
  { name: "openExternal", category: "actions", aliases: ["action.open-external"], match: (p) => p.includes("M15 3h6v6") && p.includes("M10 14 21 3") },
  { name: "more", category: "actions", aliases: ["action.more"], match: (p) => p.includes("c:5,12,1.6") && p.includes("c:12,12,1.6") },
  { name: "clear", category: "actions", aliases: [], match: (p) => p.includes("M18 6 6 18") && p.includes("M6 6l12 12") },
  { name: "export", category: "actions", aliases: [], match: (p) => p.includes("M7 10l5 5 5-5") && p.includes("M12 15V3") },
  { name: "upload", category: "actions", aliases: ["action.upload"], match: (p) => p.includes("m17 8-5-5-5 5") && p.includes("M12 3v12") },
  { name: "chevronDown", category: "directional", aliases: ["chrome.chevron"], match: (p) => p.includes("p:m6 9 6 6 6-6") && !p.includes("m11 17") },
  { name: "chevronRight", category: "directional", aliases: [], match: (p) => p.includes("m9 18 6-6-6-6") && !p.includes("m15 18") },
  { name: "chevronLeft", category: "directional", aliases: ["back"], match: (p) => p.includes("m15 18-6-6 6-6") && !p.includes("m11 17") },
  { name: "pin", category: "dates", aliases: ["data.pin"], match: (p) => p.includes("M20 10c0 6-8 12-8 12s-8-6-8-12") },
  { name: "calendar", category: "dates", aliases: ["data.calendar"], match: (p) => p.includes("M16 2v4") && (p.includes("M3 10h18") || p.includes("r:3,4,18,18")) },
  { name: "people", category: "people", aliases: ["data.users"], match: (p) => p.includes("M16 3.13a4 4 0 0 1 0 7.75") },
  { name: "settings", category: "actions", aliases: ["chrome.settings"], match: (p) => p.includes("M19.4 15a1.65") },
  { name: "help", category: "actions", aliases: ["chrome.help"], match: (p) => p.includes("M9.09 9a3") || p.includes("M9.1 9a3") },
  { name: "bell", category: "actions", aliases: ["chrome.bell"], match: (p) => p.includes("M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3") },
  { name: "phone", category: "communication", aliases: ["chrome.phone"], match: (p) => p.includes("M22 16.9") || p.includes("M22 16.92") },
  { name: "filter", category: "search", aliases: [], match: (p) => p.includes("M3 5h18") && p.includes("M7 12h10") && p.includes("M10 19h4") },
  { name: "send", category: "actions", aliases: ["action.send"], match: (p) => p.includes("m22 2-7 20-4-9-9-4Z") || p.includes("M22 2 11 13") },
  { name: "assign", category: "people", aliases: ["action.assign"], match: (p) => p.includes("M19 8v6M16 11h6") },
  { name: "plane", category: "booking", aliases: [], match: (p) => p.includes("M17.8 19.2 16 11l3.5-3.5") },
  { name: "sun", category: "services", aliases: [], match: (p) => p.includes("M12 2v2M12 20v2M4.9 4.9") },
  { name: "bookmark", category: "booking", aliases: [], match: (p) => p.includes("M19 21l-7-5-7 5V5") },
  { name: "message", category: "communication", aliases: [], match: (p) => p.includes("M21 15a2 2 0 0 1-2 2H7l-4 4V5") },
  { name: "creditCard", category: "finance", aliases: [], match: (p) => p.includes("M2 10h20") || p.includes("r:2,5,20,14") },
  { name: "eye", category: "actions", aliases: [], match: (p) => p.includes("M2 12s3.5-7 10-7 10 7 10 7") },
  { name: "check", category: "status", aliases: [], match: (p) => p.includes("m5 12 5 5L20 7") },
  { name: "clock", category: "dates", aliases: [], match: (p) => p.includes("M12 7v5l3 2") },
  { name: "info", category: "status", aliases: [], match: (p) => p.includes("c:12,12,9") && p.includes("M12 7v10") },
  { name: "ticket", category: "services", aliases: [], match: (p) => p.includes("M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v8") },
  { name: "file", category: "documents", aliases: [], match: (p) => p.includes("M14 2H6a2 2 0 0 0-2 2v16") && p.includes("M14 2v6h6") },
  { name: "clipboardCheck", category: "status", aliases: [], match: (p) => p.includes("M9 11l3 3L22 4") && p.includes("M21 12v7") },
  { name: "bus", category: "services", aliases: [], match: (p) => p.includes("M5 17H3V6a1 1 0 0 1 1-1h11") },
  { name: "layers", category: "services", aliases: [], match: (p) => p.includes("M6 3h12") && p.includes("M6 8h12") && !p.includes("M6 3h12\n") },
  { name: "camera", category: "documents", aliases: [], match: (p) => p.includes("M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9") },
  { name: "idCard", category: "documents", aliases: [], match: (p) => p.includes("r:4,3,16,18,2") && p.includes("c:12,10,2.5") },
  { name: "wallet", category: "finance", aliases: [], match: (p) => p.includes("r:2,6,20,12,2") },
  { name: "briefcase", category: "services", aliases: [], match: (p) => p.includes("M16 7V5a2 2 0 0 0-2-2h-4") },
  { name: "list", category: "data", aliases: [], match: (p) => p.includes("M8 6h13M8 12h13M8 18h13") },
  { name: "passport", category: "documents", aliases: [], match: (p) => p.includes("M4 19.5v-15A2.5") },
  { name: "user", category: "people", aliases: [], match: (p) => p.includes("c:9,7,4") && p.includes("M16 21v-2a4") && !p.includes("M22 21") },
  { name: "checkCircle", category: "status", aliases: [], match: (p) => p.includes("M22 11.08V12a10") },
  { name: "hotel", category: "services", aliases: [], match: (p) => p.includes("M3 21h18") && (p.includes("M5 21V7") || p.includes("M19 9") || p.includes("M9 8h1") || p.includes("M5 21V10") === false) && !p.includes("M5 21V10l7-5") },
  { name: "teamPartial", category: "people", aliases: [], match: (p) => p.includes("M16 21v-2a4 4 0 0 0-4-4H6") && !p.includes("M22 21") && !p.includes("M16 3.13") },
  { name: "mail", category: "communication", aliases: [], match: (p) => p.includes("M22 6l-10 7L2 6") || p.includes("M4 4h16") },
  { name: "paperclip", category: "documents", aliases: [], match: (p) => p.includes("M21.44") || p.includes("m15.5") && p.includes("paperclip") },
  { name: "minusCircle", category: "finance", aliases: [], match: (p) => p.includes("M8 12h8") && p.includes("c:12,12,10") },
  { name: "xCircle", category: "status", aliases: [], match: (p) => p.includes("c:12,12,10") && (p.includes("M15 9") || p.includes("m15 9")) },
  { name: "alertTriangle", category: "status", aliases: [], match: (p) => p.includes("M10.29 3.86") || (p.includes("M12 9v4") && p.includes("M12 17h.01")) },
  { name: "copy", category: "actions", aliases: ["data.copy"], match: (p) => p.includes("r:") && p.includes("M8") && p.includes("M4") === false && /r:\d+,\d+,\d+,\d+/.test(p) && p.includes("r:") && (p.match(/r:/g) || []).length >= 1 && p.includes("M16") },
  { name: "pinFilled", category: "booking", aliases: [], match: (_p, g) => g.fillMode === "fill" && g.paths.some((x) => /12|17|pin/i.test(x)) && !g.paths.some((x) => x.includes("c:5,12")) },
  { name: "brandMark", category: "misc", aliases: [], match: (p) => p.includes("M4 8.5C4 6.6 5.6 5 7.5 5h13.8") },
  { name: "rotateCcw", category: "actions", aliases: [], match: (p) => p.includes("M3 12a9 9 0 1 0 9-9 9.75") },
  { name: "copy", category: "actions", aliases: ["data.copy"], match: (p) => p.includes("r:9,9,13,13,2") && p.includes("M5 15H4a2") },
  { name: "checkDone", category: "status", aliases: [], match: (p) => p.includes("M20 6 9 17l-5-5") },
  { name: "userCircle", category: "people", aliases: [], match: (p) => p.includes("c:12,8,5") && p.includes("M20 21a8") },
  { name: "hotelDesk", category: "services", aliases: [], match: (p) => p.includes("M2 20V8a2 2 0 0 1 2-2h16") && p.includes("M9 12h.01") },
  { name: "paperclip", category: "documents", aliases: [], match: (p) => p.includes("m21.4 11.05-9.19") },
  { name: "bookmarkFill", category: "booking", aliases: [], match: (p) => p.includes("m19 21-7-4-7 4V5a2") },
  { name: "fileMinus", category: "documents", aliases: [], match: (p) => p.includes("M12 18v-6M9 15h6") },
  { name: "pushPin", category: "booking", aliases: ["pinFilled"], match: (p) => p.includes("M14 4v6l3 3v2h-5v5") },
  { name: "fileSimple", category: "documents", aliases: [], match: (p) => p.includes("M15 2H6a2 2 0 0 0-2 2v16") && p.includes("M14 2v4a1 1 0 0 0 1 1h4") && !p.includes("M12 18") },
  { name: "hotel", category: "services", aliases: [], match: (p) => p.includes("M3 21h18") && !p.includes("M5 21V10l7-5") && (p.includes("M5 21V7") || p.includes("M19") || p.includes("M9")) },
  { name: "unassigned", category: "people", aliases: [], match: (p) => false },
];

// Override: brandMark is component-owned — still named for inventory


function pathBlob(g) {
  return g.fillMode + "|" + g.paths.join("|");
}

const named = [];
let anon = 1;

for (const g of extract.glyphs) {
  const blob = pathBlob(g);
  const rule = RULES.find((r) => r.match(blob, g));
  let name = rule?.name;
  if (!name) {
    name = `glyph${String(anon).padStart(2, "0")}`;
    anon++;
  }
  let finalName = name;
  let i = 2;
  while (named.some((n) => n.name === finalName)) {
    finalName = `${name}${i++}`;
  }
  const screens = Object.keys(g.regions || {});
  named.push({
    name: finalName,
    hash: g.hash,
    category: rule?.category || "misc",
    aliases: rule?.aliases || [],
    fillMode: g.fillMode,
    paths: g.paths,
    count: g.count,
    dominantSize: Number(g.dominantSize) || 15,
    dominantStroke: g.dominantStroke === "null" ? null : Number(g.dominantStroke),
    regions: g.regions,
    screens,
    labels: g.labels,
    classes: g.classes,
    lines: g.lines,
    status:
      finalName === "brandMark"
        ? "component-owned"
        : name.startsWith("glyph")
          ? "approved-unnamed"
          : "approved",
    interactive: ["navigation", "actions", "search", "directional"].includes(rule?.category || ""),
    a11y: "decorative; label on control when icon-only",
    colourToken: "currentColor",
  });
}

const out = {
  totalInstances: extract.totalSvgInstances,
  uniqueGlyphs: extract.uniqueGlyphs,
  approvedNamed: named.filter((n) => !n.name.startsWith("glyph")).length,
  approvedUnnamed: named.filter((n) => n.name.startsWith("glyph")).length,
  named,
  componentOwned: [
    { name: "checkboxCheck", status: "component-owned", note: "Checkbox; 11px stroke 3.2" },
    { name: "brandMark", status: "component-owned", note: "AppShell brand; 32×32 fill" },
  ],
};

fs.writeFileSync(path.join(__dirname, "screenshots/icons/_named.json"), JSON.stringify(out, null, 2));
console.log(
  `named=${named.length} semantic=${out.approvedNamed} glyphNN=${out.approvedUnnamed}`,
);
console.log(
  "remaining:",
  named.filter((n) => n.name.startsWith("glyph")).map((n) => `${n.name}×${n.count}`).join(", "),
);
