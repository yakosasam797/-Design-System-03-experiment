/**
 * Capture Booking table footer + row-acts vs Storybook recipes vs vendor CRM.
 * Run after DS build: node docs/verification/capture-table-action-pagination.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "screenshots", "table-action-pagination");
const BOOKING = process.env.BOOKING_URL || "http://localhost:5173/";
const STORYBOOK = process.env.STORYBOOK_URL || "http://localhost:6006/";
const VENDOR = process.env.VENDOR_URL || "http://localhost:5180/";

fs.mkdirSync(OUT, { recursive: true });

function measureFn() {
  const cs = (el) => {
    if (!el) return null;
    const s = getComputedStyle(el);
    const b = el.getBoundingClientRect();
    const svg = el.querySelector("svg");
    return {
      text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80),
      tag: el.tagName,
      className: String(el.className || ""),
      ariaLabel: el.getAttribute("aria-label"),
      w: Math.round(b.width * 10) / 10,
      h: Math.round(b.height * 10) / 10,
      padding: s.padding,
      gap: s.gap,
      color: s.color,
      backgroundColor: s.backgroundColor,
      border: s.border,
      borderRadius: s.borderRadius,
      fontFamily: s.fontFamily,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      lineHeight: s.lineHeight,
      icon: svg
        ? {
            w: Math.round(svg.getBoundingClientRect().width * 10) / 10,
            h: Math.round(svg.getBoundingClientRect().height * 10) / 10,
            fill: svg.getAttribute("fill"),
            stroke: svg.getAttribute("stroke"),
          }
        : null,
    };
  };
  const foots = [...document.querySelectorAll(".foot, .pt-foot")].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });
  const acts = [...document.querySelectorAll(".row-acts, .pt-row-acts")].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });
  return {
    viewport: { w: window.innerWidth, h: window.innerHeight },
    range: foots.map((f) => f.querySelector(".range, .pt-foot__range")?.textContent?.trim()),
    pagerButtons: foots.map((f) =>
      [...f.querySelectorAll("button")].map((b) => ({
        text: (b.textContent || "").trim(),
        aria: b.getAttribute("aria-label"),
        disabled: b.disabled,
        current: b.getAttribute("aria-current"),
        ...cs(b),
      })),
    ),
    rowActs: acts.slice(0, 6).map((g) => ({
      group: cs(g),
      buttons: [...g.querySelectorAll("button")].map(cs),
    })),
  };
}

async function shot(page, selector, name) {
  const loc = page.locator(selector).first();
  if (!(await loc.count())) {
    console.warn("missing", selector, "for", name);
    return false;
  }
  await loc.scrollIntoViewIfNeeded();
  await loc.screenshot({ path: path.join(OUT, `${name}.png`) });
  console.log("shot", name);
  return true;
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const report = { capturedAt: new Date().toISOString() };

await page.goto(BOOKING, { waitUntil: "networkidle" });
await page.waitForTimeout(400);
report.bookingList = await page.evaluate(measureFn);
await shot(page, "#view-list .foot, .foot", "booking-list-footer");

try {
  await page.waitForFunction(() => typeof window.showView === "function", { timeout: 8000 });
  await page.evaluate(() => {
    document.querySelector("[data-open-booking]")?.click();
    if (typeof window.activateTab === "function") window.activateTab("vouchers");
  });
  await page.waitForSelector("#panel-vouchers.show .row-acts", { timeout: 8000 });
  const rowActs = page.locator("#panel-vouchers.show .row-acts").first();
  await rowActs.evaluate((el) => el.scrollIntoView({ block: "center" }));
  await rowActs.screenshot({ path: path.join(OUT, "booking-row-acts.png") });
  console.log("shot booking-row-acts");
  report.bookingDetail = await page.evaluate(measureFn);
} catch (err) {
  console.warn("booking detail row-acts", String(err.message || err));
  report.bookingDetail = { error: String(err.message || err) };
}

for (const [id, name] of [
  ["components-pagination--ten-items-single-page", "story-pagination-10"],
  ["components-pagination--two-pages", "story-pagination-11"],
  ["components-button--table-row-actions", "story-table-row-actions"],
]) {
  try {
    await page.goto(`${STORYBOOK}iframe.html?id=${id}&viewMode=story`, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT, `${name}.png`) });
    report[name] = await page.evaluate(measureFn);
    console.log("shot", name);
  } catch (err) {
    console.warn(name, String(err.message || err));
    report[name] = { error: String(err.message || err) };
  }
}

await page.goto(`${VENDOR}vendors`, { waitUntil: "networkidle" });
await page.waitForSelector(".pt-frame", { timeout: 20000 });
await page.waitForTimeout(500);
report.vendorList = await page.evaluate(measureFn);
await shot(page, ".pt-foot", "vendor-list-footer");
await shot(page, ".pt-row-acts", "vendor-list-actions");

await page.goto(`${VENDOR}vendors/exhosp?tab=rate-cards`, { waitUntil: "domcontentloaded", timeout: 20000 });
await page.waitForSelector(".pt-row-acts, .pt-frame", { timeout: 20000 });
await page.waitForTimeout(500);
report.vendorDetail = await page.evaluate(measureFn);
await shot(page, ".pt-row-acts", "vendor-rate-card-actions");

fs.writeFileSync(path.join(OUT, "_metrics.json"), JSON.stringify(report, null, 2));
console.log("wrote", path.join(OUT, "_metrics.json"));
await browser.close();
