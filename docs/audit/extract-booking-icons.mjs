/**
 * Extract and fingerprint all inline SVGs from Booking HTML.
 * Run: node docs/audit/extract-booking-icons.mjs
 * Writes: docs/audit/screenshots/icons/_extract.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BOOKING_HTML =
  process.env.BOOKING_HTML ||
  path.resolve(__dirname, "../../../direction 03 experiment/booking-redesign.html");
const OUT_DIR = path.join(__dirname, "screenshots", "icons");
fs.mkdirSync(OUT_DIR, { recursive: true });

const html = fs.readFileSync(BOOKING_HTML, "utf8");

function regionForIndex(idx) {
  const before = html.slice(0, idx);
  if (before.includes("<script") && !before.slice(before.lastIndexOf("<script")).includes("</script>")) {
    return "script";
  }
  const viewList = html.indexOf('id="view-list"');
  const viewDetail = html.indexOf('id="view-detail"');
  const ndOverlay = html.indexOf('id="ndOverlay"');
  if (ndOverlay > 0 && idx >= ndOverlay && (viewDetail < 0 || idx < viewDetail || idx > viewDetail)) {
    // notes drawer often after detail; check more carefully
  }
  if (viewList > 0 && idx >= viewList && (viewDetail < 0 || idx < viewDetail)) return "list";
  if (viewDetail > 0 && idx >= viewDetail) {
    if (ndOverlay > 0 && idx >= ndOverlay) return "notes";
    // panels
    const panels = [
      ["panel-overview", "overview"],
      ["panel-services", "services"],
      ["panel-fulfilment", "tasks"],
      ["panel-travellers", "travellers"],
      ["panel-documents", "documents"],
      ["panel-finance", "finance"],
      ["panel-vouchers", "vouchers"],
      ["panel-communication", "communication"],
      ["panel-activity", "activity"],
    ];
    let best = "detail";
    let bestPos = viewDetail;
    for (const [id, name] of panels) {
      const p = html.indexOf(`id="${id}"`);
      if (p > 0 && p <= idx && p >= bestPos) {
        best = name;
        bestPos = p;
      }
    }
    return best;
  }
  return "shell";
}

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
  const fillMode = /fill="currentColor"/i.test(svgInner) && !/fill="none"/i.test(svgInner)
    ? "fill"
    : "stroke";
  const key = fillMode + "|" + parts.join("|");
  const hash = crypto.createHash("sha1").update(key).digest("hex").slice(0, 10);
  return { hash, key, fillMode, parts };
}

const svgRe = /<svg\b([^>]*)>([\s\S]*?)<\/svg>/gi;
const instances = [];
let match;
while ((match = svgRe.exec(html))) {
  const attrs = match[1];
  const inner = match[2];
  const full = match[0];
  const idx = match.index;
  const getAttr = (name) => {
    const r = new RegExp(`${name}="([^"]*)"`, "i");
    const a = attrs.match(r);
    return a ? a[1] : null;
  };
  const width = getAttr("width");
  const height = getAttr("height");
  const strokeWidth = getAttr("stroke-width") || getAttr("strokeWidth");
  const viewBox = getAttr("viewBox") || getAttr("viewbox");
  const ariaHidden = getAttr("aria-hidden");
  const fp = fingerprintSvg(inner);
  const line = html.slice(0, idx).split("\n").length;
  // context snippet: class of nearest parent-ish (look back 200 chars)
  const lookback = html.slice(Math.max(0, idx - 280), idx);
  const classMatch = lookback.match(/class="([^"]{0,80})"[^>]*>\s*$/);
  const ariaLabel = lookback.match(/aria-label="([^"]*)"/);
  const tip = lookback.match(/data-tip="([^"]*)"/);
  const dataTab = lookback.match(/data-tab="([^"]*)"/);
  instances.push({
    line,
    region: regionForIndex(idx),
    width: width ? Number(width) : null,
    height: height ? Number(height) : null,
    strokeWidth: strokeWidth ? Number(strokeWidth) : null,
    viewBox,
    ariaHidden,
    fillMode: fp.fillMode,
    hash: fp.hash,
    pathCount: fp.parts.length,
    paths: fp.parts,
    nearbyClass: classMatch ? classMatch[1] : null,
    nearbyLabel: ariaLabel ? ariaLabel[1] : tip ? tip[1] : null,
    nearbyTab: dataTab ? dataTab[1] : null,
    svgPreview: full.slice(0, 200),
  });
}

// Group by hash
const byHash = new Map();
for (const inst of instances) {
  if (!byHash.has(inst.hash)) {
    byHash.set(inst.hash, {
      hash: inst.hash,
      fillMode: inst.fillMode,
      paths: inst.paths,
      count: 0,
      sizes: {},
      strokes: {},
      regions: {},
      lines: [],
      labels: new Set(),
      classes: new Set(),
    });
  }
  const g = byHash.get(inst.hash);
  g.count++;
  g.sizes[inst.width ?? "null"] = (g.sizes[inst.width ?? "null"] || 0) + 1;
  g.strokes[inst.strokeWidth ?? "null"] = (g.strokes[inst.strokeWidth ?? "null"] || 0) + 1;
  g.regions[inst.region] = (g.regions[inst.region] || 0) + 1;
  if (g.lines.length < 8) g.lines.push(inst.line);
  if (inst.nearbyLabel) g.labels.add(inst.nearbyLabel);
  if (inst.nearbyClass) g.classes.add(inst.nearbyClass.split(/\s+/)[0]);
}

const glyphs = [...byHash.values()]
  .map((g) => ({
    ...g,
    labels: [...g.labels],
    classes: [...g.classes],
    dominantSize: Object.entries(g.sizes).sort((a, b) => b[1] - a[1])[0]?.[0],
    dominantStroke: Object.entries(g.strokes).sort((a, b) => b[1] - a[1])[0]?.[0],
  }))
  .sort((a, b) => b.count - a.count);

const report = {
  capturedAt: new Date().toISOString(),
  source: BOOKING_HTML,
  totalSvgInstances: instances.length,
  uniqueGlyphs: glyphs.length,
  glyphs,
  instancesSample: instances.slice(0, 5),
};

fs.writeFileSync(path.join(OUT_DIR, "_extract.json"), JSON.stringify(report, null, 2));
console.log(`instances=${instances.length} unique=${glyphs.length}`);
console.log("wrote", path.join(OUT_DIR, "_extract.json"));
