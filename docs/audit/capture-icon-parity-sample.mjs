/**
 * Spot-check Booking icon contexts for ICON-PARITY-REPORT sample set.
 * BOOKING_URL default http://localhost:8443/
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "screenshots", "icons", "parity-sample");
const BOOKING = process.env.BOOKING_URL || "http://localhost:8443/";
fs.mkdirSync(OUT, { recursive: true });

const samples = [
  { name: "nav-bookings", sel: '.nav-item[data-tip="Bookings"] svg, .side .nav-item.active svg' },
  { name: "list-ctas", sel: "#view-list .list-head-acts" },
  { name: "list-row-meta", sel: "#view-list .sheet .row:not(.head):not(.row-fill)" },
  { name: "topbar-actions", sel: ".topbar .icon-btn, .topbar .acts" },
  { name: "pager", sel: "#view-list .foot .pg, #view-list .pagination, #view-list .foot" },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const result = { capturedAt: new Date().toISOString(), booking: BOOKING, samples: {} };

try {
  await page.goto(BOOKING, { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(300);

  for (const s of samples) {
    const loc = page.locator(s.sel).first();
    const count = await loc.count();
    if (!count) {
      result.samples[s.name] = { ok: false, reason: "missing" };
      continue;
    }
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    const box = await loc.boundingBox();
    const svg = loc.locator("svg").first();
    const metrics = await svg.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        width: el.getAttribute("width"),
        height: el.getAttribute("height"),
        strokeWidth: el.getAttribute("stroke-width") || cs.strokeWidth,
        color: cs.color,
        paths: [...el.querySelectorAll("path,circle,rect")].map((n) => n.outerHTML.slice(0, 120)),
      };
    }).catch(() => null);
    await loc.screenshot({ path: path.join(OUT, `${s.name}.png`) }).catch(() => {});
    result.samples[s.name] = { ok: true, box, metrics };
    console.log("ok", s.name, metrics?.width, metrics?.strokeWidth);
  }
} catch (e) {
  result.error = String(e);
  console.error(e);
}

fs.writeFileSync(path.join(OUT, "_parity-sample.json"), JSON.stringify(result, null, 2));
console.log("wrote", path.join(OUT, "_parity-sample.json"));
await browser.close();
