/**
 * Capture Booking pagination footers + computed styles vs Storybook.
 * Run: node docs/audit/capture-pagination.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "screenshots", "pagination");
const BOOKING = process.env.BOOKING_URL || "http://localhost:8443/";
const STORYBOOK = process.env.STORYBOOK_URL || "http://localhost:6006/";

fs.mkdirSync(OUT, { recursive: true });

const DETAIL_TABS = [
  "overview",
  "services",
  "fulfilment",
  "travellers",
  "documents",
  "finance",
  "vouchers",
  "activity",
];

async function measureVisibleFoots(page, rootSel) {
  return page.evaluate((root) => {
    const scope = root ? document.querySelector(root) : document;
    if (!scope) return [];
    const foots = [...scope.querySelectorAll(".foot, .pt-foot")].filter((el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.display !== "none" && s.visibility !== "hidden";
    });
    const cs = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      const b = el.getBoundingClientRect();
      return {
        text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80),
        disabled: !!el.disabled,
        ariaCurrent: el.getAttribute("aria-current"),
        ariaLabel: el.getAttribute("aria-label"),
        className: String(el.className || ""),
        w: Math.round(b.width * 10) / 10,
        h: Math.round(b.height * 10) / 10,
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        backgroundColor: s.backgroundColor,
        borderTopColor: s.borderTopColor,
        borderColor: s.borderColor,
        borderRadius: s.borderRadius,
        padding: s.padding,
        gap: s.gap,
        display: s.display,
        alignItems: s.alignItems,
        justifyContent: s.justifyContent,
        opacity: s.opacity,
        cursor: s.cursor,
        outline: s.outline,
        fontVariantNumeric: s.fontVariantNumeric,
      };
    };
    return foots.map((foot, i) => {
      const range = foot.querySelector(".range, .pt-foot__range");
      const pager = foot.querySelector(".pager, .pt-pager");
      const buttons = [...(pager?.querySelectorAll("button") || [])];
      return {
        index: i,
        foot: cs(foot),
        range: cs(range),
        rangeText: range?.textContent?.trim() || null,
        pager: cs(pager),
        buttonCount: buttons.length,
        buttons: buttons.map(cs),
        pageNumberButtons: buttons
          .filter((b) => !b.getAttribute("aria-label"))
          .map((b) => (b.textContent || "").trim()),
      };
    });
  }, rootSel);
}

async function shotVisibleFoots(page, rootSel, namePrefix) {
  const n = await page.evaluate((root) => {
    const scope = document.querySelector(root) || document;
    return [...scope.querySelectorAll(".foot, .pt-foot")].filter((el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.display !== "none";
    }).length;
  }, rootSel);
  for (let i = 0; i < n; i++) {
    const handle = await page.evaluateHandle(
      ({ root, idx }) => {
        const scope = document.querySelector(root) || document;
        return [...scope.querySelectorAll(".foot, .pt-foot")].filter((el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && s.display !== "none";
        })[idx];
      },
      { root: rootSel, idx: i },
    );
    const el = handle.asElement();
    if (!el) continue;
    await el.scrollIntoViewIfNeeded();
    const file = path.join(OUT, `${namePrefix}${n > 1 ? `-${i + 1}` : ""}.png`);
    await el.screenshot({ path: file });
    console.log("shot", path.basename(file));
  }
}

async function showList(page) {
  await page.evaluate(() => {
    document.getElementById("view-list")?.classList.add("show");
    document.getElementById("view-detail")?.classList.remove("show");
  });
}

async function showDetail(page) {
  await page.evaluate(() => {
    document.getElementById("view-list")?.classList.remove("show");
    document.getElementById("view-detail")?.classList.add("show");
  });
}

async function activateTab(page, id) {
  await page.evaluate((tab) => {
    if (typeof window.activateTab === "function") window.activateTab(tab);
    else {
      document.querySelectorAll(".tab[data-tab]").forEach((x) => {
        const on = x.dataset.tab === tab;
        x.classList.toggle("active", on);
        x.setAttribute("aria-selected", on ? "true" : "false");
      });
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("show"));
      document.getElementById("panel-" + tab)?.classList.add("show");
    }
  }, id);
  await page.waitForTimeout(150);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const report = { capturedAt: new Date().toISOString(), booking: {}, storybook: {} };

await page.goto(BOOKING, { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await showList(page);

await shotVisibleFoots(page, "#view-list", "booking__list__foot");
report.booking.list = await measureVisibleFoots(page, "#view-list");

await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(200);
await shotVisibleFoots(page, "#view-list", "booking__list__foot__narrow");
report.booking.listNarrow = await measureVisibleFoots(page, "#view-list");
await page.setViewportSize({ width: 1440, height: 900 });

// Hover / focus on list pager
const active = page.locator("#view-list .foot .pg.active").first();
await active.scrollIntoViewIfNeeded();
await active.hover();
report.booking.activeHover = await page.evaluate(() => {
  const el = document.querySelector("#view-list .foot .pg.active");
  const s = getComputedStyle(el);
  return { backgroundColor: s.backgroundColor, color: s.color, borderTopColor: s.borderTopColor };
});
await active.focus();
report.booking.activeFocusVisible = await page.evaluate(() => {
  const el = document.querySelector("#view-list .foot .pg.active");
  el.focus();
  const s = getComputedStyle(el);
  return { outline: s.outline, outlineOffset: s.outlineOffset, outlineColor: s.outlineColor };
});
await page.locator('#view-list .foot .pg[aria-label="Previous page"]').first().hover();
report.booking.disabledPrevHover = await page.evaluate(() => {
  const el = document.querySelector('#view-list .foot .pg[aria-label="Previous page"]');
  const s = getComputedStyle(el);
  return {
    backgroundColor: s.backgroundColor,
    color: s.color,
    cursor: s.cursor,
    borderTopColor: s.borderTopColor,
    opacity: s.opacity,
  };
});

// Detail via real open
await page.locator("[data-open-booking]").first().click();
await page.waitForTimeout(300);
await showDetail(page);

for (const tab of DETAIL_TABS) {
  await activateTab(page, tab);
  const key = tab === "fulfilment" ? "tasks" : tab;
  await shotVisibleFoots(page, "#view-detail", `booking__${key}__foot`);
  report.booking[key] = await measureVisibleFoots(page, "#view-detail");
}

// Storybook stories
const storyIds = [
  "components-pagination--booking-single-page",
  "components-pagination--ten-items-single-page",
  "components-pagination-test-states--two-pages",
  "components-pagination-test-states--first-page",
  "components-pagination-test-states--middle-page",
  "components-pagination-test-states--last-page",
  "components-pagination-test-states--multiple-pages",
  "components-pagination-test-states--disabled-boundaries",
  "components-pagination-test-states--narrow-viewport",
];

for (const id of storyIds) {
  try {
    await page.goto(`${STORYBOOK}iframe.html?id=${id}&viewMode=story`, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });
    try {
      await page.waitForSelector(".pt-foot", { timeout: 12000 });
    } catch {
      report.storybook[id] = { missing: true };
      continue;
    }
    await page.waitForTimeout(400);
    await shotVisibleFoots(page, "body", `storybook__${id}`);
    report.storybook[id] = await measureVisibleFoots(page, null);
  } catch (e) {
    report.storybook[id] = { error: String(e.message || e) };
  }
}

fs.writeFileSync(path.join(OUT, "_metrics.json"), JSON.stringify(report, null, 2));
console.log("wrote", path.join(OUT, "_metrics.json"));
await browser.close();
