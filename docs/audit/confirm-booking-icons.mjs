/**
 * Confirm icons in rendered Booking UI + crop key contexts.
 * BOOKING_URL default http://localhost:8443/
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "screenshots", "icons");
const BOOKING = process.env.BOOKING_URL || "http://localhost:8443/";
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BOOKING, { waitUntil: "networkidle" });
await page.waitForTimeout(400);

const report = { capturedAt: new Date().toISOString(), contexts: {} };

async function shot(sel, name) {
  const loc = page.locator(sel).first();
  if ((await loc.count()) === 0) {
    report.contexts[name] = { missing: true };
    return;
  }
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  await loc.screenshot({ path: path.join(OUT, `${name}.png`) }).catch(async () => {
    await page.screenshot({ path: path.join(OUT, `${name}.png`), clip: await loc.boundingBox() });
  });
  const svgs = await loc.locator("svg").count();
  report.contexts[name] = { svgs, ok: true };
  console.log("shot", name, "svgs=", svgs);
}

await shot(".side", "ctx__sidebar");
await shot(".topbar", "ctx__topbar");
await shot("#view-list .list-head-acts", "ctx__list-ctas");
await shot("#view-list .toolbar", "ctx__list-toolbar");
await shot("#view-list .sheet .row:not(.head):not(.row-fill)", "ctx__list-row");
await shot("#view-list .foot", "ctx__list-pager");

await page.locator("[data-open-booking]").first().click();
await page.waitForTimeout(300);
await page.evaluate(() => {
  document.getElementById("view-list")?.classList.remove("show");
  document.getElementById("view-detail")?.classList.add("show");
});
await shot(".record", "ctx__detail-header");
await shot("#panel-overview .kpi-strip", "ctx__overview-kpi");

await page.evaluate(() => {
  if (typeof window.activateTab === "function") window.activateTab("fulfilment");
});
await page.waitForTimeout(200);
await shot("#panel-fulfilment .toolbar, #panel-fulfilment .sheet-tsk", "ctx__tasks");

await page.evaluate(() => {
  document.querySelector(".notes-main")?.click();
});
await page.waitForTimeout(300);
await shot("#ndOverlay .nd, .nd-panel, #ndOverlay", "ctx__notes-drawer");

// Count visible SVGs in list vs detail
report.visibleSvgCounts = await page.evaluate(() => {
  const count = (root) =>
    [...(root?.querySelectorAll("svg") || [])].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }).length;
  return {
    document: count(document.body),
  };
});

fs.writeFileSync(path.join(OUT, "_render-confirm.json"), JSON.stringify(report, null, 2));
console.log("wrote _render-confirm.json");
await browser.close();
