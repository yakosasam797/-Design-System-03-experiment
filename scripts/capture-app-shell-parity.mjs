import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "../docs/verification/screenshots");
mkdirSync(outDir, { recursive: true });

const MEASURE = `(() => {
  const side = document.querySelector(".side, .pt-side");
  const topbar = document.querySelector(".topbar, .pt-topbar");
  const frame = document.querySelector(".frame, .pt-frame");
  const search = document.querySelector(".topbar .search, .pt-topbar .pt-search");
  const back = document.querySelector(".back-btn, .pt-back-btn");
  const acct = document.querySelector(".acct, .pt-acct");
  const brand = document.querySelector(".brand-name, .pt-brand-name");
  const navActive = document.querySelector(".nav-item.active, .pt-nav-item--active, .pt-nav-item[aria-current='page']");
  const role = document.querySelector(".vc-role-switch, [aria-label='Workspace role']");
  const cs = (el) => (el ? getComputedStyle(el) : null);
  const rect = (el) => (el ? el.getBoundingClientRect() : null);
  const r = (el) => {
    const b = rect(el);
    return b ? { w: Math.round(b.width), h: Math.round(b.height), x: Math.round(b.x), y: Math.round(b.y) } : null;
  };
  return {
    viewport: { w: window.innerWidth, h: window.innerHeight },
    framePad: cs(frame)?.padding,
    frameGap: cs(frame)?.columnGap || cs(frame)?.gap,
    frameBg: cs(frame)?.backgroundColor,
    side: r(side),
    sideRadius: cs(side)?.borderRadius,
    sideBg: cs(side)?.backgroundColor,
    sideBorder: cs(side)?.border,
    topbar: r(topbar),
    topbarBg: cs(topbar)?.backgroundColor,
    topbarBorder: cs(topbar)?.borderBottom,
    topbarPad: cs(topbar)?.padding,
    search: r(search),
    searchMax: cs(search)?.maxWidth,
    searchFlex: cs(search)?.flex,
    backDisplay: back ? cs(back).display : "missing",
    back: r(back),
    acct: r(acct),
    acctRadius: cs(acct)?.borderRadius,
    brand: brand?.textContent?.trim() || null,
    activeBg: cs(navActive)?.backgroundColor,
    roleSwitcher: !!role,
  };
})()`;

const targets = [
  { id: "booking-list", url: "http://localhost:5173/", wait: "css=.frame" },
  { id: "story-list", url: "http://localhost:6006/iframe.html?id=patterns-appshell--booking-list-shell&viewMode=story", wait: "css=.pt-frame" },
  { id: "vendor-list", url: "http://localhost:5180/vendors", wait: "css=.pt-frame" },
  { id: "story-detail", url: "http://localhost:6006/iframe.html?id=patterns-appshell--booking-detail-shell&viewMode=story", wait: "css=.pt-frame" },
  { id: "story-collapsed", url: "http://localhost:6006/iframe.html?id=patterns-appshell--collapsed-sidebar&viewMode=story", wait: "css=.pt-frame" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const results = {};

for (const t of targets) {
  await page.goto(t.url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector(t.wait.replace("css=", ""), { timeout: 20000 });
  await page.waitForTimeout(400);
  results[t.id] = await page.evaluate(MEASURE);
  await page.screenshot({ path: join(outDir, `${t.id}.png`), fullPage: false });
}

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForSelector(".frame");
await page.evaluate(() => {
  const open = document.querySelector("[data-open], .row, .sheet-bk .row");
  const btn = document.querySelector(".sheet-bk button, [data-view='detail']");
  if (typeof window.showView === "function") window.showView("detail");
});
await page.waitForTimeout(500);
results["booking-detail"] = await page.evaluate(MEASURE);
await page.screenshot({ path: join(outDir, "booking-detail.png") });

await page.goto("http://localhost:5180/vendors", { waitUntil: "networkidle" });
await page.waitForSelector(".pt-frame");
const vendorLink = page.locator("a, button").filter({ hasText: /Open|View|Lake|Kerala|Hotel/i }).first();
if (await vendorLink.count()) {
  await vendorLink.click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(600);
}
results["vendor-detail"] = await page.evaluate(MEASURE);
await page.screenshot({ path: join(outDir, "vendor-detail.png") });

writeFileSync(join(outDir, "_metrics.json"), JSON.stringify(results, null, 2));
await browser.close();
console.log(JSON.stringify(results, null, 2));
