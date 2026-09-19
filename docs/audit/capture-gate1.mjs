/**
 * Gate 1 screenshot + metrics capture against live Booking HTML.
 * Run: node docs/audit/capture-gate1.mjs
 * Requires: Booking at BASE_URL (default http://localhost:8443/)
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Output directory (always the design-system audit screenshots folder). */
const OUT = path.join(__dirname, "screenshots");
const BASE = process.env.BOOKING_URL || "http://localhost:8443/";
const DESKTOP = { width: 1440, height: 900 };
const NARROW = { width: 390, height: 844 };
const COMM820 = { width: 820, height: 900 };

fs.mkdirSync(OUT, { recursive: true });

const MODALS = [
  "modal-directBooking",
  "modal-editBooking",
  "modal-manageMargin",
  "modal-priceAmend",
  "modal-catalog",
  "modal-addService",
  "modal-editPrice",
  "modal-editCost",
  "modal-assignVendor",
  "modal-contact",
  "modal-watchers",
  "modal-addTraveller",
  "modal-addTask",
  "modal-recordPayment",
  "modal-addInstalment",
  "modal-editInstalment",
  "modal-supplierPay",
  "modal-voucherFile",
  "modal-uploadVoucher",
  "modal-requestDoc",
  "modal-attachFile",
  "modal-newMessage",
];

const DETAIL_TABS = [
  "overview",
  "services",
  "fulfilment",
  "travellers",
  "documents",
  "finance",
  "vouchers",
  "communication",
  "activity",
];

async function shot(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log("ok", name);
  return file;
}

async function closeModals(page) {
  await page.evaluate(() => {
    document.querySelectorAll(".modal-overlay.open, .modal-overlay[aria-hidden='false']").forEach((el) => {
      el.classList.remove("open");
      el.setAttribute("aria-hidden", "true");
    });
    const nd = document.getElementById("ndOverlay");
    if (nd) nd.classList.remove("open", "show");
  });
}

async function metrics(page) {
  return page.evaluate(() => {
    const pick = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        sel,
        h: Math.round(r.height * 10) / 10,
        w: Math.round(r.width * 10) / 10,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        letterSpacing: cs.letterSpacing,
        borderRadius: cs.borderRadius,
        backgroundColor: cs.backgroundColor,
        color: cs.color,
        borderColor: cs.borderColor,
        padding: cs.padding,
      };
    };
    const root = getComputedStyle(document.documentElement);
    const cssVar = (n) => root.getPropertyValue(n).trim();
    return {
      capturedAt: new Date().toISOString(),
      tokens: {
        surface2: cssVar("--surface-2"),
        infoBg: cssVar("--info-bg"),
        ink4: cssVar("--ink-4"),
        accent: cssVar("--accent"),
        pink: cssVar("--pink"),
      },
      controls: {
        btnSm: pick(".btn.btn-sm") || pick(".btn-sm"),
        btnPrimary: pick(".btn.btn-primary:not(.btn-sm)"),
        stCap: pick(".st-cap"),
        stPick: pick(".st-pick"),
        search: pick(".search input, #bkSearch, .search"),
        filter: pick(".filter-wrap .filter-btn, .filter-btn"),
        ndFil: pick(".nd-fil"),
        sheetHead: pick(".sheet .head, .sheet-head, .row.head .cell"),
        uploadVoucher36: pick('button[data-open-modal="modal-uploadVoucher"]'),
        tabChip: pick(".tab .chip"),
      },
    };
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: DESKTOP,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("#view-list", { timeout: 15000 });

  // —— Shell + list desktop ——
  await shot(page, "shell__list__desktop");
  await shot(page, "list__upcoming__desktop");

  for (const stage of ["travelling", "completed", "cancelled"]) {
    await page.evaluate((s) => {
      const btn = document.querySelector(`[data-list-tab="${s}"]`);
      if (btn) btn.click();
    }, stage);
    await page.waitForTimeout(200);
    await shot(page, `list__${stage}__desktop`);
  }
  await page.evaluate(() => {
    const btn = document.querySelector('[data-list-tab="upcoming"]');
    if (btn) btn.click();
  });

  // Owner filter open
  await page.evaluate(() => {
    const wrap = document.querySelector(".filter-wrap");
    const btn = wrap?.querySelector("button, .filter-btn, .choice-btn");
    if (btn) btn.click();
  });
  await page.waitForTimeout(250);
  await shot(page, "list__owner-filter-open__desktop");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);

  // Search results
  await page.fill("#bkSearch", "BK-");
  await page.waitForTimeout(250);
  await shot(page, "list__search-results__desktop");

  // Empty
  await page.fill("#bkSearch", "zzzz-no-match");
  await page.waitForTimeout(250);
  await shot(page, "list__empty-results__desktop");
  await page.fill("#bkSearch", "");

  // Bulk selected
  await page.evaluate(() => {
    const cb = document.querySelector(".bk-row .cbx, .bk-cbx, .bk-row input[type=checkbox]");
    if (cb) cb.click();
    else {
      const row = document.querySelector(".bk-row");
      const box = row?.querySelector(".cbx");
      box?.click();
    }
  });
  await page.waitForTimeout(250);
  await shot(page, "list__bulk-selected__desktop");
  // clear selection
  await page.evaluate(() => {
    document.querySelectorAll(".bk-row .cbx.on, .cbx.checked").forEach((el) => el.click());
  });

  // Collapsed shell
  await page.click("#sidebarToggle");
  await page.waitForTimeout(300);
  await shot(page, "shell__collapsed__desktop");
  await page.click("#sidebarToggle");
  await page.waitForTimeout(200);

  // —— Detail tabs ——
  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("detail");
    else document.querySelector("[data-open-booking]")?.click();
  });
  await page.waitForSelector("#view-detail.show, #view-detail.view.show, #panel-overview", {
    timeout: 10000,
  });
  await page.waitForTimeout(300);

  for (const tab of DETAIL_TABS) {
    await page.evaluate((id) => {
      if (typeof window.activateTab === "function") window.activateTab(id);
    }, tab);
    await page.waitForTimeout(250);
    const name =
      tab === "fulfilment"
        ? "detail__tasks__desktop"
        : tab === "services"
          ? "detail__services__desktop"
          : `detail__${tab}__desktop`;
    await shot(page, name);
  }

  // Tasks status menu + filter
  await page.evaluate(() => {
    if (typeof window.activateTab === "function") window.activateTab("fulfilment");
  });
  await page.waitForTimeout(200);
  await page.evaluate(() => {
    const pick = document.querySelector(".st-pick");
    if (pick) pick.click();
  });
  await page.waitForTimeout(250);
  await shot(page, "tasks__status-menu-open__desktop");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);

  await page.evaluate(() => {
    const panel = document.getElementById("panel-fulfilment");
    const filterBtn = panel?.querySelector(".filter-wrap button, .filter-btn, .choice-btn");
    if (filterBtn) filterBtn.click();
  });
  await page.waitForTimeout(250);
  await shot(page, "tasks__filter-open__desktop");
  await page.keyboard.press("Escape");

  // Notes browse + compose (detail view — not list-mode)
  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("detail");
  });
  await page.waitForTimeout(200);
  // Open notes browse — click notes strip (not notes-add)
  await page.evaluate(() => {
    const strip = document.querySelector(".notes, .notes-strip, [data-open-notes]");
    const label = document.querySelector(".notes-label, .notes-title, .side-notes");
    (strip || label)?.click();
  });
  // Fallback: force open browse
  await page.evaluate(() => {
    const overlay = document.getElementById("ndOverlay");
    if (!overlay) return;
    overlay.classList.add("open", "show");
    document.getElementById("ndBrowse")?.classList.add("show");
    document.getElementById("ndCompose")?.classList.remove("show");
  });
  await page.waitForTimeout(300);
  await shot(page, "notes__browse__desktop");

  await page.evaluate(() => {
    const overlay = document.getElementById("ndOverlay");
    overlay?.classList.add("open", "show");
    document.getElementById("ndBrowse")?.classList.remove("show");
    document.getElementById("ndCompose")?.classList.add("show");
  });
  await page.waitForTimeout(300);
  await shot(page, "notes__compose__desktop");
  await page.evaluate(() => {
    document.getElementById("ndOverlay")?.classList.remove("open", "show");
  });

  // —— All modals ——
  for (const id of MODALS) {
    await closeModals(page);
    await page.evaluate((mid) => {
      if (typeof window.openModal === "function") window.openModal(mid);
      else {
        const el = document.getElementById(mid);
        if (el) {
          el.classList.add("open");
          el.setAttribute("aria-hidden", "false");
        }
      }
    }, id);
    await page.waitForTimeout(200);
    const short = id.replace(/^modal-/, "");
    await shot(page, `modal__${short}__desktop`);
  }
  await closeModals(page);

  // —— Narrow ——
  await page.setViewportSize(NARROW);
  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("list");
  });
  await page.waitForTimeout(300);
  await shot(page, "shell__list__narrow");

  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("detail");
    if (typeof window.activateTab === "function") window.activateTab("overview");
  });
  await page.waitForTimeout(300);
  await shot(page, "detail__overview__narrow");

  await page.evaluate(() => {
    if (typeof window.activateTab === "function") window.activateTab("communication");
  });
  await page.waitForTimeout(300);
  await shot(page, "detail__communication__narrow");

  // —— 820 communication ——
  await page.setViewportSize(COMM820);
  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("detail");
    if (typeof window.activateTab === "function") window.activateTab("communication");
  });
  await page.waitForTimeout(300);
  await shot(page, "detail__communication__820");

  // —— CDP metrics (measure while each surface is visible) ——
  await page.setViewportSize(DESKTOP);
  await closeModals(page);
  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("list");
  });
  await page.waitForTimeout(200);

  const measure = async (fn) => page.evaluate(fn);

  const listPart = await measure(() => {
    const box = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        h: Math.round(r.height * 10) / 10,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        letterSpacing: cs.letterSpacing,
        borderRadius: cs.borderRadius,
        color: cs.color,
        sampleText: (el.textContent || "").trim().slice(0, 40),
      };
    };
    const root = getComputedStyle(document.documentElement);
    const cssVar = (n) => root.getPropertyValue(n).trim();
    const headCell = document.querySelector(".sheet-bk .row-head > :nth-child(2)");
    return {
      tokens: {
        surface2: cssVar("--surface-2"),
        infoBg: cssVar("--info-bg"),
        ink4: cssVar("--ink-4"),
        accent: cssVar("--accent"),
        pink: cssVar("--pink"),
      },
      btnSm: box(document.querySelector(".btn.btn-sm, .btn-primary.btn-sm")),
      stCap: box(document.querySelector(".st-cap")),
      filterWrap: box(document.querySelector(".filter-wrap")),
      listSheetHeader: box(headCell),
      tabChip: box(document.querySelector(".tab .chip")),
    };
  });

  await page.evaluate(() => {
    if (typeof window.showView === "function") window.showView("detail");
    if (typeof window.activateTab === "function") window.activateTab("fulfilment");
  });
  await page.waitForTimeout(200);
  const stPick = await measure(() => {
    const el = document.querySelector(".st-pick");
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      h: Math.round(r.height * 10) / 10,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      borderRadius: cs.borderRadius,
    };
  });

  await page.evaluate(() => {
    const overlay = document.getElementById("ndOverlay");
    overlay?.classList.add("open", "show");
    document.getElementById("ndBrowse")?.classList.add("show");
  });
  await page.waitForTimeout(150);
  const ndFil = await measure(() => {
    const el = document.querySelector(".nd-fil");
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      h: Math.round(r.height * 10) / 10,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      borderRadius: cs.borderRadius,
    };
  });
  await page.evaluate(() => {
    document.getElementById("ndOverlay")?.classList.remove("open", "show");
  });

  await page.evaluate(() => {
    if (typeof window.activateTab === "function") window.activateTab("vouchers");
  });
  await page.waitForTimeout(200);
  const uploadVoucher36 = await measure(() => {
    const el = document.querySelector('button[data-open-modal="modal-uploadVoucher"]');
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      h: Math.round(r.height * 10) / 10,
      borderRadius: cs.borderRadius,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
    };
  });

  const m = {
    capturedAt: new Date().toISOString(),
    sourceUrl: BASE,
    viewports: { desktop: "1440x900", narrow: "390x844", communication: "820x900" },
    tokens: listPart.tokens,
    controls: {
      btnSm: listPart.btnSm,
      stCap: listPart.stCap,
      stPick,
      listSheetHeader: listPart.listSheetHeader,
      filterWrap: listPart.filterWrap,
      ndFil,
      uploadVoucher36,
      tabChip: listPart.tabChip,
    },
  };

  fs.writeFileSync(path.join(OUT, "_computed-metrics.json"), JSON.stringify(m, null, 2));
  console.log("metrics written");

  const files = fs.readdirSync(OUT).filter((f) => f.endsWith(".png"));
  console.log(`TOTAL_PNGS=${files.length}`);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
