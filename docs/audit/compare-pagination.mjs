import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "screenshots", "pagination");
const STORYBOOK = process.env.STORYBOOK_URL || "http://localhost:6006/";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 240 } });

const id = "components-pagination--booking-single-page";
await page.goto(`${STORYBOOK}iframe.html?id=${id}&viewMode=story`, {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});
await page.waitForSelector(".pt-foot", { timeout: 15000 });
await page.waitForTimeout(500);

const footPath = path.join(OUT, "storybook__components-pagination--booking-single-page.png");
await page.locator(".pt-foot").first().screenshot({ path: footPath });

const metrics = await page.evaluate(() => {
  const foot = document.querySelector(".pt-foot");
  const range = foot.querySelector(".pt-foot__range");
  const buttons = [...foot.querySelectorAll("button")];
  const cs = (el) => {
    const s = getComputedStyle(el);
    const b = el.getBoundingClientRect();
    return {
      text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 40),
      disabled: !!el.disabled,
      ariaCurrent: el.getAttribute("aria-current"),
      ariaLabel: el.getAttribute("aria-label"),
      className: String(el.className || ""),
      w: Math.round(b.width * 10) / 10,
      h: Math.round(b.height * 10) / 10,
      fontFamily: s.fontFamily,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      color: s.color,
      backgroundColor: s.backgroundColor,
      borderColor: s.borderColor,
      borderRadius: s.borderRadius,
      padding: s.padding,
      gap: s.gap,
      cursor: s.cursor,
      opacity: s.opacity,
      fontVariantNumeric: s.fontVariantNumeric,
    };
  };
  return {
    rangeText: range?.textContent?.trim(),
    buttonCount: buttons.length,
    pageNumberButtons: buttons.filter((b) => !b.getAttribute("aria-label")).map((b) => b.textContent.trim()),
    buttons: buttons.map(cs),
    range: cs(range),
    pager: cs(foot.querySelector(".pt-pager")),
    foot: cs(foot),
  };
});
fs.writeFileSync(path.join(OUT, "_sb-booking-single.json"), JSON.stringify(metrics, null, 2));
console.log(JSON.stringify(metrics, null, 2));

const bookingB64 = fs.readFileSync(path.join(OUT, "booking__list__foot.png")).toString("base64");
const sbB64 = fs.readFileSync(footPath).toString("base64");

await page.setViewportSize({ width: 1100, height: 320 });
await page.setContent(`<!DOCTYPE html><html><body style="margin:0;font-family:system-ui;background:#f3f0ed">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px">
  <div>
    <div style="font:600 13px system-ui;margin-bottom:8px">Booking list footer (SoT)</div>
    <img src="data:image/png;base64,${bookingB64}" style="width:100%;border:1px solid #ccc;background:#fff"/>
  </div>
  <div>
    <div style="font:600 13px system-ui;margin-bottom:8px">Storybook BookingSinglePage</div>
    <img src="data:image/png;base64,${sbB64}" style="width:100%;border:1px solid #ccc;background:#fff"/>
  </div>
</div>
</body></html>`);
await page.waitForTimeout(200);
await page.screenshot({
  path: path.join(OUT, "compare__booking-vs-storybook-single-page.png"),
  fullPage: true,
});
console.log("wrote compare__booking-vs-storybook-single-page.png");
await browser.close();
