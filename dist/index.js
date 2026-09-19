import { jsxs as n, jsx as e, Fragment as r } from "react/jsx-runtime";
import { useState as L, useRef as B, useId as E, useEffect as g, Fragment as ee, isValidElement as Z } from "react";
function S({
  variant: a = "primary",
  size: t = "md",
  leadingIcon: s,
  trailingIcon: i,
  className: c = "",
  type: o = "button",
  children: l,
  ...d
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: o,
      className: `pt-btn pt-btn--${a} pt-btn--${t} ${c}`.trim(),
      ...d,
      children: [
        s ? /* @__PURE__ */ e("span", { className: "pt-btn__icon", children: s }) : null,
        l,
        i ? /* @__PURE__ */ e("span", { className: "pt-btn__icon", children: i }) : null
      ]
    }
  );
}
function N({
  children: a,
  alert: t = !1,
  label: s,
  className: i = "",
  type: c = "button",
  ...o
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: c,
      className: `pt-icon-btn ${i}`.trim(),
      "aria-label": s,
      ...o,
      children: [
        a,
        t ? /* @__PURE__ */ e("span", { className: "pt-icon-btn__alert", "aria-hidden": "true" }) : null
      ]
    }
  );
}
function ae({
  href: a,
  children: t = "Skip to main content",
  className: s = "",
  ...i
}) {
  return /* @__PURE__ */ e("a", { href: a, className: `pt-skip-link ${s}`.trim(), ...i, children: t });
}
function te({
  children: a,
  tone: t = "default",
  size: s = 30,
  className: i = "",
  style: c,
  ...o
}) {
  const l = s <= 26;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `pt-avatar ${l ? "pt-avatar--sm" : ""} pt-avatar--${t} ${i}`.trim(),
      style: { width: s, height: s, ...c },
      ...o,
      children: a
    }
  );
}
function $e({
  state: a = "off",
  onCheckedChange: t,
  label: s,
  className: i = "",
  ...c
}) {
  const o = () => {
    t && t(a === "off" ? "on" : a === "on" ? "off" : "on");
  };
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      role: "checkbox",
      "aria-checked": a === "indeterminate" ? "mixed" : a === "on",
      "aria-label": s,
      className: `pt-cbx ${a !== "off" ? "pt-cbx--on" : ""} ${a === "indeterminate" ? "pt-cbx--some" : ""} ${i}`.trim(),
      onClick: o,
      ...c,
      children: a === "indeterminate" ? /* @__PURE__ */ e("span", { className: "pt-cbx__dash" }) : /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "m5 12 5 5L20 7" }) })
    }
  );
}
function Se({
  tone: a = "open",
  children: t,
  className: s = "",
  ...i
}) {
  return /* @__PURE__ */ e("span", { className: `pt-st pt-st--${a} ${s}`.trim(), ...i, children: t });
}
function Le({ tip: a, children: t, className: s = "" }) {
  return /* @__PURE__ */ e("span", { className: `pt-tip ${s}`.trim(), "data-tip": a, children: t });
}
const _ = {
  check: {
    name: "check",
    aliases: [],
    category: "Status and feedback",
    screens: ["list", "overview", "vouchers", "tasks", "travellers", "documents", "finance", "activity", "notes", "script"],
    sizes: [11],
    strokeWidth: 3.2,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "m5 12 5 5L20 7" }) })
  },
  calendar: {
    name: "calendar",
    aliases: ["data.calendar"],
    category: "Dates and locations",
    screens: ["list", "detail", "overview", "services", "tasks", "finance", "activity", "script"],
    sizes: [13],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
      /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
    ] })
  },
  more: {
    name: "more",
    aliases: ["action.more"],
    category: "Actions",
    screens: ["vouchers", "tasks", "travellers", "documents", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1.6" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.6" }),
      /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1.6" })
    ] })
  },
  openExternal: {
    name: "openExternal",
    aliases: ["action.open-external"],
    category: "Actions",
    screens: ["vouchers", "tasks", "travellers", "finance", "script"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M15 3h6v6" }),
      /* @__PURE__ */ e("path", { d: "M10 14 21 3" }),
      /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
    ] })
  },
  team: {
    name: "team",
    aliases: ["nav.team", "people", "data.users"],
    category: "People and ownership",
    screens: ["shell", "list", "overview", "services", "tasks", "documents", "script"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
      /* @__PURE__ */ e("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" })
    ] })
  },
  chevronRight: {
    name: "chevronRight",
    aliases: [],
    category: "Directional controls",
    screens: ["shell", "list", "overview", "vouchers", "tasks", "travellers", "documents", "finance", "activity", "script"],
    sizes: [13],
    strokeWidth: 2,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "m9 18 6-6-6-6" }) })
  },
  search: {
    name: "search",
    aliases: ["chrome.search"],
    category: "Search and filters",
    screens: ["shell", "list", "overview", "vouchers", "services", "tasks", "travellers", "documents", "finance", "activity", "notes"],
    sizes: [16],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7.5" }),
      /* @__PURE__ */ e("path", { d: "m21 21-4.3-4.3" })
    ] })
  },
  send: {
    name: "send",
    aliases: ["action.send"],
    category: "Actions",
    screens: ["vouchers", "services", "travellers", "documents", "communication", "script"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "m22 2-7 20-4-9-9-4Z" }),
      /* @__PURE__ */ e("path", { d: "M22 2 11 13" })
    ] })
  },
  chevronLeft: {
    name: "chevronLeft",
    aliases: ["back"],
    category: "Directional controls",
    screens: ["shell", "list", "overview", "vouchers", "tasks", "travellers", "documents", "finance", "activity"],
    sizes: [13],
    strokeWidth: 2,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "m15 18-6-6 6-6" }) })
  },
  clock: {
    name: "clock",
    aliases: [],
    category: "Dates and locations",
    screens: ["list", "activity"],
    sizes: [13],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ e("path", { d: "M12 7v5l3 2" })
    ] })
  },
  chevronDown: {
    name: "chevronDown",
    aliases: ["chrome.chevron"],
    category: "Directional controls",
    screens: ["shell", "tasks", "notes", "script"],
    sizes: [12],
    strokeWidth: 2.2,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "m6 9 6 6 6-6" }) })
  },
  filter: {
    name: "filter",
    aliases: [],
    category: "Search and filters",
    screens: ["list", "vouchers", "services", "tasks", "travellers", "documents", "finance", "activity"],
    sizes: [15],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 5h18" }),
      /* @__PURE__ */ e("path", { d: "M7 12h10" }),
      /* @__PURE__ */ e("path", { d: "M10 19h4" })
    ] })
  },
  pin: {
    name: "pin",
    aliases: ["data.pin"],
    category: "Dates and locations",
    screens: ["list", "overview", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "10", r: "3" })
    ] })
  },
  clear: {
    name: "clear",
    aliases: [],
    category: "Actions",
    screens: ["list", "vouchers", "travellers", "documents", "finance", "activity", "notes"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M18 6 6 18M6 6l12 12" }) })
  },
  info: {
    name: "info",
    aliases: [],
    category: "Status and feedback",
    screens: ["services", "tasks", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ e("path", { d: "M12 7v10" })
    ] })
  },
  ticket: {
    name: "ticket",
    aliases: [],
    category: "Services",
    screens: ["services", "tasks", "documents", "activity", "script"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2Z" }),
      /* @__PURE__ */ e("path", { d: "M8 8v8" })
    ] })
  },
  file: {
    name: "file",
    aliases: [],
    category: "Documents",
    screens: ["services", "tasks", "communication", "activity", "script"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v6h6" })
    ] })
  },
  clipboardCheck: {
    name: "clipboardCheck",
    aliases: [],
    category: "Status and feedback",
    screens: ["tasks", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M9 11l3 3L22 4" }),
      /* @__PURE__ */ e("path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })
    ] })
  },
  creditCard: {
    name: "creditCard",
    aliases: [],
    category: "Finance and payments",
    screens: ["finance", "activity", "script"],
    sizes: [15],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
      /* @__PURE__ */ e("path", { d: "M2 10h20" })
    ] })
  },
  bus: {
    name: "bus",
    aliases: [],
    category: "Services",
    screens: ["list", "vouchers", "services", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M5 17H3V6a1 1 0 0 1 1-1h11v12h-2" }),
      /* @__PURE__ */ e("path", { d: "M14 9h4l3 4v4h-2" }),
      /* @__PURE__ */ e("circle", { cx: "7.5", cy: "17.5", r: "2" }),
      /* @__PURE__ */ e("circle", { cx: "16.5", cy: "17.5", r: "2" })
    ] })
  },
  eye: {
    name: "eye",
    aliases: [],
    category: "Actions",
    screens: ["vouchers", "documents", "finance", "script"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
    ] })
  },
  plus: {
    name: "plus",
    aliases: ["action.plus"],
    category: "Actions",
    screens: ["shell", "list", "services", "tasks", "travellers", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M12 5v14" }),
      /* @__PURE__ */ e("path", { d: "M5 12h14" })
    ] })
  },
  layers: {
    name: "layers",
    aliases: [],
    category: "Services",
    screens: ["services", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M6 3h12" }),
      /* @__PURE__ */ e("path", { d: "M6 8h12" }),
      /* @__PURE__ */ e("path", { d: "m6 13 8.5 8" }),
      /* @__PURE__ */ e("path", { d: "M6 13h3" }),
      /* @__PURE__ */ e("path", { d: "M9 13c6.667 0 6.667-10 0-10" })
    ] })
  },
  camera: {
    name: "camera",
    aliases: [],
    category: "Documents",
    screens: ["list", "vouchers", "services", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" })
    ] })
  },
  export: {
    name: "export",
    aliases: [],
    category: "Actions",
    screens: ["list", "vouchers", "documents", "activity"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      /* @__PURE__ */ e("path", { d: "M7 10l5 5 5-5" }),
      /* @__PURE__ */ e("path", { d: "M12 15V3" })
    ] })
  },
  hotel: {
    name: "hotel",
    aliases: [],
    category: "Services",
    screens: ["list", "services", "tasks", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" }) })
  },
  idCard: {
    name: "idCard",
    aliases: [],
    category: "Documents",
    screens: ["vouchers", "services", "finance", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "18", rx: "2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "10", r: "2.5" }),
      /* @__PURE__ */ e("path", { d: "M8.5 17a3.5 3.5 0 0 1 7 0" })
    ] })
  },
  wallet: {
    name: "wallet",
    aliases: [],
    category: "Finance and payments",
    screens: ["finance", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.2" }),
      /* @__PURE__ */ e("path", { d: "M6 12h.01M18 12h.01" })
    ] })
  },
  briefcase: {
    name: "briefcase",
    aliases: [],
    category: "Services",
    screens: ["finance"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2" }),
      /* @__PURE__ */ e("path", { d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" })
    ] })
  },
  plane: {
    name: "plane",
    aliases: [],
    category: "Booking and travel",
    screens: ["overview"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }) })
  },
  list: {
    name: "list",
    aliases: [],
    category: "Data tables",
    screens: ["overview", "services", "activity"],
    sizes: [15],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" }) })
  },
  upload: {
    name: "upload",
    aliases: ["action.upload"],
    category: "Actions",
    screens: ["vouchers", "documents"],
    sizes: [15],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      /* @__PURE__ */ e("path", { d: "m17 8-5-5-5 5" }),
      /* @__PURE__ */ e("path", { d: "M12 3v12" })
    ] })
  },
  phone: {
    name: "phone",
    aliases: ["chrome.phone"],
    category: "Communication",
    screens: ["travellers", "script"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" }) })
  },
  passport: {
    name: "passport",
    aliases: [],
    category: "Documents",
    screens: ["documents"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }),
      /* @__PURE__ */ e("circle", { cx: "12.5", cy: "9.5", r: "2.2" }),
      /* @__PURE__ */ e("path", { d: "M9.5 15h6" })
    ] })
  },
  fileText: {
    name: "fileText",
    aliases: ["nav.queries", "note"],
    category: "Documents",
    screens: ["shell", "script"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      /* @__PURE__ */ e("path", { d: "M15 2v5h5" })
    ] })
  },
  chart: {
    name: "chart",
    aliases: ["nav.reports"],
    category: "Navigation",
    screens: ["shell", "services"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 3v18h18" }),
      /* @__PURE__ */ e("path", { d: "M7 15l3-4 3 3 4-6" })
    ] })
  },
  user: {
    name: "user",
    aliases: [],
    category: "People and ownership",
    screens: ["list"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
      /* @__PURE__ */ e("path", { d: "M17 8l5 5M22 8l-5 5" })
    ] })
  },
  checkCircle: {
    name: "checkCircle",
    aliases: [],
    category: "Status and feedback",
    screens: ["list"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      /* @__PURE__ */ e("path", { d: "m9 11 3 3L22 4" })
    ] })
  },
  sun: {
    name: "sun",
    aliases: [],
    category: "Services",
    screens: ["overview"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
      /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" })
    ] })
  },
  assign: {
    name: "assign",
    aliases: ["action.assign"],
    category: "People and ownership",
    screens: ["services", "script"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
      /* @__PURE__ */ e("path", { d: "M19 8v6M16 11h6" })
    ] })
  },
  layoutGrid: {
    name: "layoutGrid",
    aliases: ["nav.home", "home"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5" }),
      /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.5" }),
      /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5" }),
      /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5" })
    ] })
  },
  inbox: {
    name: "inbox",
    aliases: ["nav.inbox"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      /* @__PURE__ */ e("path", { d: "M5.5 6.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-5.5A2 2 0 0 0 16.8 5H7.2a2 2 0 0 0-1.7 1.5z" })
    ] })
  },
  news: {
    name: "news",
    aliases: ["nav.news"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M4 22h16a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v16a2 2 0 0 1-2 2 2 2 0 0 1-2-2V9h4" }),
      /* @__PURE__ */ e("path", { d: "M8 7h8M8 11h8M8 15h5" })
    ] })
  },
  tasksNav: {
    name: "tasksNav",
    aliases: ["nav.tasks"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
      /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
    ] })
  },
  fileText2: {
    name: "fileText2",
    aliases: ["nav.queries", "note"],
    category: "Documents",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M15 2H8.6A1.6 1.6 0 0 0 7 3.6v16.8A1.6 1.6 0 0 0 8.6 22h10.8a1.6 1.6 0 0 0 1.6-1.6V7.5Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v6h6" })
    ] })
  },
  package: {
    name: "package",
    aliases: ["nav.packages"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      /* @__PURE__ */ e("path", { d: "m3.3 7 8.7 5 8.7-5" }),
      /* @__PURE__ */ e("path", { d: "M12 22V12" })
    ] })
  },
  bookings: {
    name: "bookings",
    aliases: ["nav.bookings"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
      /* @__PURE__ */ e("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
    ] })
  },
  customers: {
    name: "customers",
    aliases: ["nav.customers"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "10", r: "3" }),
      /* @__PURE__ */ e("path", { d: "M6.2 19a6 6 0 0 1 11.6 0" })
    ] })
  },
  vendors: {
    name: "vendors",
    aliases: ["nav.vendors"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 9.5 4.5 4h15L21 9.5" }),
      /* @__PURE__ */ e("path", { d: "M4 9.5V20h16V9.5" }),
      /* @__PURE__ */ e("path", { d: "M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" })
    ] })
  },
  finances: {
    name: "finances",
    aliases: ["nav.finances"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 21h18" }),
      /* @__PURE__ */ e("path", { d: "M5 21V10l7-5 7 5v11" }),
      /* @__PURE__ */ e("path", { d: "M9 21v-6h6v6" })
    ] })
  },
  zap: {
    name: "zap",
    aliases: ["nav.automations"],
    category: "Navigation",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M13 2 3 14h9l-1 8 10-12h-9z" }) })
  },
  credits: {
    name: "credits",
    aliases: [],
    category: "Finance and payments",
    screens: ["shell"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "9", cy: "9", r: "6" }),
      /* @__PURE__ */ e("path", { d: "M15.5 3.3a6 6 0 0 1 0 11.4" })
    ] })
  },
  collapse: {
    name: "collapse",
    aliases: ["chrome.collapse"],
    category: "Directional controls",
    screens: ["shell"],
    sizes: [16],
    strokeWidth: 1.8,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "m11 17-5-5 5-5" }),
      /* @__PURE__ */ e("path", { d: "m18 17-5-5 5-5" })
    ] })
  },
  settings: {
    name: "settings",
    aliases: ["chrome.settings"],
    category: "Actions",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
      /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.31.4.55.72.66" })
    ] })
  },
  help: {
    name: "help",
    aliases: ["chrome.help"],
    category: "Actions",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("path", { d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ e("path", { d: "M12 17h.01" })
    ] })
  },
  phone2: {
    name: "phone2",
    aliases: ["chrome.phone"],
    category: "Communication",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" }) })
  },
  bell: {
    name: "bell",
    aliases: ["chrome.bell"],
    category: "Actions",
    screens: ["shell"],
    sizes: [17],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
      /* @__PURE__ */ e("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
    ] })
  },
  refresh: {
    name: "refresh",
    aliases: ["action.refresh"],
    category: "Actions",
    screens: ["list"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M21 12a9 9 0 1 1-2.64-6.36" }),
      /* @__PURE__ */ e("path", { d: "M21 3v6h-6" })
    ] })
  },
  passport2: {
    name: "passport2",
    aliases: [],
    category: "Documents",
    screens: ["list"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }) })
  },
  rotateCcw: {
    name: "rotateCcw",
    aliases: [],
    category: "Actions",
    screens: ["list"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      /* @__PURE__ */ e("path", { d: "M3 3v5h5" })
    ] })
  },
  bookmark: {
    name: "bookmark",
    aliases: [],
    category: "Booking and travel",
    screens: ["detail"],
    sizes: [12],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }) })
  },
  copy: {
    name: "copy",
    aliases: ["data.copy"],
    category: "Actions",
    screens: ["detail"],
    sizes: [12],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
      /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
    ] })
  },
  checkDone: {
    name: "checkDone",
    aliases: [],
    category: "Status and feedback",
    screens: ["detail"],
    sizes: [12],
    strokeWidth: 2.2,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M20 6 9 17l-5-5" }) })
  },
  edit: {
    name: "edit",
    aliases: ["action.edit"],
    category: "Actions",
    screens: ["detail"],
    sizes: [13],
    strokeWidth: 1.9,
    interactive: !0,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M12 20h9" }),
      /* @__PURE__ */ e("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" })
    ] })
  },
  userCircle: {
    name: "userCircle",
    aliases: [],
    category: "People and ownership",
    screens: ["overview"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "5" }),
      /* @__PURE__ */ e("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ] })
  },
  file2: {
    name: "file2",
    aliases: [],
    category: "Documents",
    screens: ["overview"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v6h6M9 15l2 2 4-4" })
    ] })
  },
  hotelDesk: {
    name: "hotelDesk",
    aliases: [],
    category: "Services",
    screens: ["vouchers"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M2 20V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12" }),
      /* @__PURE__ */ e("path", { d: "M2 20h20M6 6V4h6v2M9 12h.01M14 12h4M14 16h4" })
    ] })
  },
  message: {
    name: "message",
    aliases: [],
    category: "Communication",
    screens: ["tasks"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) })
  },
  file3: {
    name: "file3",
    aliases: [],
    category: "Documents",
    screens: ["documents"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v6h6" }),
      /* @__PURE__ */ e("circle", { cx: "12", cy: "14.5", r: "2.2" })
    ] })
  },
  hotel2: {
    name: "hotel2",
    aliases: [],
    category: "Services",
    screens: ["finance"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M3 21h18" }),
      /* @__PURE__ */ e("path", { d: "M5 21V7l7-4 7 4v14" }),
      /* @__PURE__ */ e("path", { d: "M9 21v-6h6v6" })
    ] })
  },
  alertTriangle: {
    name: "alertTriangle",
    aliases: [],
    category: "Status and feedback",
    screens: ["finance"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" }),
      /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
    ] })
  },
  paperclip: {
    name: "paperclip",
    aliases: [],
    category: "Documents",
    screens: ["communication"],
    sizes: [15],
    strokeWidth: 1.8,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "m21.4 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" }) })
  },
  bookmarkFill: {
    name: "bookmarkFill",
    aliases: [],
    category: "Booking and travel",
    screens: ["activity"],
    sizes: [15],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }) })
  },
  fileMinus: {
    name: "fileMinus",
    aliases: [],
    category: "Documents",
    screens: ["activity"],
    sizes: [14],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v4a1 1 0 0 0 1 1h4M12 18v-6M9 15h6" })
    ] })
  },
  pushPin: {
    name: "pushPin",
    aliases: ["pinFilled"],
    category: "Booking and travel",
    screens: ["script"],
    sizes: [14],
    strokeWidth: 1.7,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("path", { d: "M14 4v6l3 3v2h-5v5l-1 1-1-1v-5H4v-2l3-3V4H6V2h10v2z" }) })
  },
  fileSimple: {
    name: "fileSimple",
    aliases: [],
    category: "Documents",
    screens: ["script"],
    sizes: [12],
    strokeWidth: 1.9,
    interactive: !1,
    status: "approved",
    a11y: "decorative; label on control when icon-only",
    paths: /* @__PURE__ */ n(r, { children: [
      /* @__PURE__ */ e("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v4a1 1 0 0 0 1 1h4" })
    ] })
  }
}, se = Object.keys(_);
function Ae(a) {
  return _[a];
}
function ne(a) {
  if (a in _) return a;
  for (const t of se)
    if (_[t].aliases.includes(a)) return t;
}
const H = {
  "2xs": 11,
  xs: 13,
  sm: 14,
  md: 15,
  nav: 17,
  lg: 20
};
function b({ name: a, size: t = "md", title: s, className: i = "", style: c, ...o }) {
  const l = ne(a) ?? (a in _ ? a : void 0);
  if (!l)
    return null;
  const d = _[l], h = !s, p = typeof t == "number" ? { width: t, height: t } : {
    width: `var(--icon-size-${t}, ${H[t]}px)`,
    height: `var(--icon-size-${t}, ${H[t]}px)`
  }, v = {
    viewBox: "0 0 24 24",
    className: i,
    style: { ...p, ...c },
    "data-icon": l,
    "aria-hidden": h ? !0 : void 0,
    role: s ? "img" : void 0,
    ...o
  };
  return d.fill ? /* @__PURE__ */ n("svg", { fill: "currentColor", ...v, children: [
    s ? /* @__PURE__ */ e("title", { children: s }) : null,
    d.paths
  ] }) : /* @__PURE__ */ n(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: d.strokeWidth ?? "var(--icon-stroke-default, 1.7)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...v,
      children: [
        s ? /* @__PURE__ */ e("title", { children: s }) : null,
        d.paths
      ]
    }
  );
}
function ie({
  className: a = "",
  fullWidth: t = !1,
  placeholder: s = "Search",
  "aria-label": i = "Search",
  ...c
}) {
  return /* @__PURE__ */ n("div", { className: `pt-search ${t ? "pt-search--full" : ""} ${a}`.trim(), children: [
    /* @__PURE__ */ e(b, { name: "search", size: 16 }),
    /* @__PURE__ */ e("input", { type: "search", placeholder: s, "aria-label": i, ...c })
  ] });
}
function De({
  label: a = "Filter",
  options: t,
  value: s,
  onChange: i,
  tip: c,
  className: o = "",
  ...l
}) {
  var m;
  const [d, h] = L(!1), p = B(null), v = E(), u = ((m = t.find((y) => y.value === s)) == null ? void 0 : m.label) ?? a;
  return g(() => {
    if (!d) return;
    const y = (f) => {
      var k;
      (k = p.current) != null && k.contains(f.target) || h(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [d]), /* @__PURE__ */ n(
    "div",
    {
      ref: p,
      className: `pt-filter ${d ? "pt-filter--open" : ""} ${o}`.trim(),
      "data-tip": d ? void 0 : c,
      ...l,
      children: [
        /* @__PURE__ */ e(b, { name: "filter", size: 15 }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "pt-filter-btn",
            "aria-haspopup": "listbox",
            "aria-expanded": d,
            "aria-controls": v,
            onClick: () => h((y) => !y),
            children: [
              /* @__PURE__ */ e("span", { className: "pt-filter-btn__label", children: u }),
              /* @__PURE__ */ e(b, { name: "chevronDown", size: 13, className: "pt-filter-caret" })
            ]
          }
        ),
        d ? /* @__PURE__ */ e("div", { className: "pt-choice-menu", role: "listbox", id: v, children: t.map((y) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "option",
            "aria-selected": y.value === s,
            className: `pt-choice-opt ${y.value === s ? "pt-choice-opt--on" : ""}`,
            onClick: () => {
              i(y.value), h(!1);
            },
            children: y.label
          },
          y.value
        )) }) : null
      ]
    }
  );
}
function re({
  items: a,
  value: t,
  onValueChange: s,
  className: i = "",
  "aria-label": c = "Tabs",
  ...o
}) {
  return /* @__PURE__ */ e("div", { className: `pt-tabbar ${i}`.trim(), role: "tablist", "aria-label": c, ...o, children: a.map((l) => /* @__PURE__ */ e(
    ce,
    {
      active: l.id === t,
      count: l.count,
      onClick: () => s(l.id),
      children: l.label
    },
    l.id
  )) });
}
function ce({ active: a = !1, count: t, children: s, className: i = "", ...c }) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": a,
      className: `pt-tab ${a ? "pt-tab--active" : ""} ${i}`.trim(),
      ...c,
      children: [
        s,
        typeof t == "number" ? /* @__PURE__ */ e("span", { className: "pt-tab__chip", children: t }) : null
      ]
    }
  );
}
function Ve({
  rangeLabel: a,
  page: t,
  pageCount: s,
  onPageChange: i,
  className: c = "",
  ...o
}) {
  const l = Math.max(1, s), d = Math.min(Math.max(1, t), l), h = Array.from({ length: l }, (p, v) => v + 1);
  return /* @__PURE__ */ n("div", { className: `pt-foot ${c}`.trim(), ...o, children: [
    /* @__PURE__ */ e("span", { className: "pt-foot__range", children: a }),
    /* @__PURE__ */ n("div", { className: "pt-pager", children: [
      /* @__PURE__ */ e(
        $,
        {
          disabled: d <= 1,
          "aria-label": "Previous page",
          onClick: () => i(d - 1),
          children: /* @__PURE__ */ e(C, { direction: "prev" })
        }
      ),
      h.map((p) => /* @__PURE__ */ e(
        $,
        {
          active: p === d,
          "aria-current": p === d ? "page" : void 0,
          onClick: () => i(p),
          children: p
        },
        p
      )),
      /* @__PURE__ */ e(
        $,
        {
          disabled: d >= l,
          "aria-label": "Next page",
          onClick: () => i(d + 1),
          children: /* @__PURE__ */ e(C, { direction: "next" })
        }
      )
    ] })
  ] });
}
function C({ direction: a }) {
  return /* @__PURE__ */ e(b, { name: a === "prev" ? "chevronLeft" : "chevronRight", size: 13 });
}
function $({ active: a = !1, className: t = "", children: s, ...i }) {
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: `pt-pg ${a ? "pt-pg--active" : ""} ${t}`.trim(),
      ...i,
      children: s
    }
  );
}
function He({
  title: a,
  description: t,
  icon: s,
  action: i,
  variant: c = "illustrated",
  className: o = "",
  ...l
}) {
  return /* @__PURE__ */ n("div", { className: `pt-empty pt-empty--${c} ${o}`.trim(), ...l, children: [
    c === "illustrated" ? s ? /* @__PURE__ */ e("div", { className: "pt-empty__ic", children: s }) : /* @__PURE__ */ e("div", { className: "pt-empty__ic", "aria-hidden": "true", children: /* @__PURE__ */ e(b, { name: "pin", size: "lg" }) }) : s ? /* @__PURE__ */ e("div", { className: "pt-empty__ic", children: s }) : null,
    /* @__PURE__ */ e("h4", { children: a }),
    t ? /* @__PURE__ */ e("p", { children: t }) : null,
    i ? /* @__PURE__ */ e("div", { className: "pt-empty__action", children: i }) : null
  ] });
}
function Ce({
  value: a,
  options: t,
  onChange: s,
  label: i = "Status",
  className: c = "",
  ...o
}) {
  const [l, d] = L(!1), h = B(null), p = E(), v = t.find((m) => m.value === a) ?? t[0], u = (v == null ? void 0 : v.tone) ?? "open";
  return g(() => {
    if (!l) return;
    const m = (f) => {
      var k;
      (k = h.current) != null && k.contains(f.target) || d(!1);
    }, y = (f) => {
      f.key === "Escape" && d(!1);
    };
    return document.addEventListener("mousedown", m), document.addEventListener("keydown", y), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("keydown", y);
    };
  }, [l]), /* @__PURE__ */ n("div", { ref: h, className: `pt-st-dd ${l ? "is-open" : ""} ${c}`.trim(), children: [
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `pt-st-pick pt-st-pick--${u}`,
        "aria-label": i,
        "aria-haspopup": "listbox",
        "aria-expanded": l,
        "aria-controls": p,
        onClick: () => d((m) => !m),
        ...o,
        children: [
          /* @__PURE__ */ e("span", { className: "pt-st-pick__label", children: (v == null ? void 0 : v.label) ?? a }),
          /* @__PURE__ */ e(b, { name: "chevronDown", size: 12, className: "pt-st-pick__caret" })
        ]
      }
    ),
    l ? /* @__PURE__ */ e("div", { className: "pt-st-menu", role: "listbox", id: p, "aria-label": i, children: t.map((m) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        role: "option",
        className: `pt-st-opt pt-st-opt--${m.tone}`,
        "aria-selected": m.value === a,
        onClick: () => {
          s == null || s(m.value), d(!1);
        },
        children: m.label
      },
      m.value
    )) }) : null
  ] });
}
function Be({
  open: a,
  onClose: t,
  eyebrow: s,
  title: i,
  children: c,
  footer: o,
  size: l = "default",
  className: d = "",
  ...h
}) {
  return g(() => {
    if (!a) return;
    const p = (v) => {
      v.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [a, t]), a ? /* @__PURE__ */ e(
    "div",
    {
      className: "pt-modal-overlay",
      role: "presentation",
      onMouseDown: (p) => {
        p.target === p.currentTarget && (t == null || t());
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          className: `pt-modal pt-modal--${l} ${d}`.trim(),
          role: "dialog",
          "aria-modal": "true",
          ...h,
          children: [
            /* @__PURE__ */ n("div", { className: "pt-modal__head", children: [
              s ? /* @__PURE__ */ e("p", { className: "pt-modal__eyebrow", children: s }) : null,
              /* @__PURE__ */ e("h2", { className: "pt-modal__title", children: i })
            ] }),
            /* @__PURE__ */ e("div", { className: "pt-modal__body", children: c }),
            o ? /* @__PURE__ */ e("div", { className: "pt-modal__foot", children: o }) : null
          ]
        }
      )
    }
  ) : null;
}
function Ee(a) {
  const { label: t, hint: s, className: i = "", id: c, multiline: o, ...l } = a, d = c ?? (typeof t == "string" ? `pt-tf-${t.replace(/\s+/g, "-").toLowerCase()}` : void 0);
  return /* @__PURE__ */ n("div", { className: `pt-mf ${i}`.trim(), children: [
    /* @__PURE__ */ e("label", { className: "pt-mf__l", htmlFor: d, children: t }),
    o ? /* @__PURE__ */ e(
      "textarea",
      {
        id: d,
        className: "pt-mf__i",
        ...l
      }
    ) : /* @__PURE__ */ e("input", { id: d, className: "pt-mf__i", ...l }),
    s ? /* @__PURE__ */ e("p", { className: "pt-mf__hint", children: s }) : null
  ] });
}
function Ze({
  children: a,
  loading: t = !1,
  loadingRows: s = 4,
  columns: i = 5,
  variant: c = "default",
  className: o = "",
  ...l
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet ${c === "booking" ? "pt-sheet--booking" : ""} ${o}`.trim(), ...l, children: /* @__PURE__ */ e("div", { className: "pt-sheet__scroll", children: t ? Array.from({ length: s }, (h, p) => /* @__PURE__ */ e("div", { className: "pt-sheet__row pt-sheet__row--loading", "aria-busy": "true", children: Array.from({ length: c === "booking" ? 7 : i }, (v, u) => /* @__PURE__ */ e("div", { className: "pt-sheet__cell", children: /* @__PURE__ */ e("span", { className: "pt-sheet__skeleton" }) }, u)) }, p)) : a }) });
}
function Fe({
  children: a,
  className: t = "",
  ...s
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__row pt-sheet__head ${t}`.trim(), ...s, children: a });
}
function Te({
  children: a,
  className: t = "",
  ...s
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__row ${t}`.trim(), ...s, children: a });
}
function Ie({
  children: a,
  className: t = "",
  check: s,
  ...i
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__cell ${s ? "pt-sheet__cell--check" : ""} ${t}`.trim(), ...i, children: a });
}
function Pe({
  icon: a,
  title: t,
  subtitle: s,
  className: i = "",
  align: c = "center"
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__lead ${c === "start" ? "pt-sheet__lead--start" : ""} ${i}`.trim(), children: [
    a,
    /* @__PURE__ */ n("div", { style: { minWidth: 0 }, children: [
      /* @__PURE__ */ e("div", { className: "pt-sheet__title", children: t }),
      s == null ? null : typeof s == "string" || typeof s == "number" ? /* @__PURE__ */ e("div", { className: "pt-sheet__sub", children: s }) : s
    ] })
  ] });
}
function Re({
  children: a,
  className: t = ""
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__stack ${t}`.trim(), children: a });
}
function je({
  icon: a,
  children: t,
  muted: s,
  mono: i,
  className: c = ""
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: `pt-sheet__line ${s ? "pt-sheet__line--muted" : ""} ${i ? "pt-mono" : ""} ${c}`.trim(),
      children: [
        a,
        t
      ]
    }
  );
}
function Oe({
  amount: a,
  chip: t,
  className: s = ""
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__money ${s}`.trim(), children: [
    /* @__PURE__ */ e("span", { className: "pt-mono pt-sheet__amount", children: a }),
    t
  ] });
}
function Ke({
  children: a,
  className: t = ""
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__owner ${t}`.trim(), children: a });
}
function le({
  label: a,
  icon: t,
  href: s,
  active: i = !1,
  tip: c,
  badge: o,
  onSelect: l,
  className: d = "",
  ...h
}) {
  const p = `pt-nav-item ${i ? "pt-nav-item--active" : ""} ${d}`.trim(), v = c ?? a, u = /* @__PURE__ */ n(r, { children: [
    /* @__PURE__ */ e("span", { className: "pt-nav-item__icon", "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e("span", { className: "pt-nav-item__label", children: a }),
    o != null && o !== !1 ? /* @__PURE__ */ e("span", { className: "pt-nav-item__badge", children: o }) : null
  ] });
  return s ? /* @__PURE__ */ e(
    "a",
    {
      href: s,
      className: p,
      "data-tip": v,
      "aria-current": i ? "page" : void 0,
      onClick: l,
      ...h,
      children: u
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: p,
      "data-tip": v,
      "aria-current": i ? "page" : void 0,
      onClick: l,
      ...h,
      children: u
    }
  );
}
function oe({ label: a, children: t, className: s = "" }) {
  return /* @__PURE__ */ n("div", { className: `pt-nav-group ${s}`.trim(), children: [
    /* @__PURE__ */ e("div", { className: "pt-nav-group__label", children: a }),
    t
  ] });
}
function de({
  groups: a,
  className: t = "",
  "aria-label": s = "Primary"
}) {
  return /* @__PURE__ */ e("nav", { className: `pt-sidenav ${t}`.trim(), "aria-label": s, children: a.map((i) => /* @__PURE__ */ e(oe, { label: i.label, children: i.items.map((c) => /* @__PURE__ */ e(
    le,
    {
      label: c.label,
      icon: c.icon,
      href: c.href,
      active: c.active,
      tip: c.tip,
      badge: c.badge,
      onSelect: c.onSelect
    },
    c.id
  )) }, i.id)) });
}
const he = /* @__PURE__ */ e(b, { name: "fileText", size: 16 });
function pe({
  label: a,
  icon: t = he,
  badge: s,
  tip: i = "Notes",
  addTip: c = "Write a note",
  onOpen: o,
  onAdd: l,
  className: d = ""
}) {
  return /* @__PURE__ */ n("div", { className: `pt-notes ${d}`.trim(), children: [
    /* @__PURE__ */ n("button", { type: "button", className: "pt-notes__main", "data-tip": i, onClick: o, children: [
      t,
      /* @__PURE__ */ e("span", { className: "pt-notes__txt", children: a }),
      s != null && s !== !1 ? /* @__PURE__ */ e("span", { className: "pt-notes__badge", children: s }) : null
    ] }),
    l ? /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "pt-notes__add",
        "data-tip": c,
        "aria-label": c,
        onClick: l,
        children: /* @__PURE__ */ e(b, { name: "plus", size: 16 })
      }
    ) : null
  ] });
}
const ve = /* @__PURE__ */ e(b, { name: "credits", size: "md" });
function ue({
  remaining: a,
  total: t,
  tip: s,
  upgradeLabel: i = "Upgrade",
  onUpgrade: c,
  upgrade: o,
  className: l = ""
}) {
  const d = t > 0 ? Math.min(100, Math.round(a / t * 100)) : 0, h = s ?? `${a.toLocaleString()} of ${t.toLocaleString()} credits remaining this cycle`;
  return /* @__PURE__ */ n("div", { className: `pt-credits ${l}`.trim(), "data-tip": h, children: [
    /* @__PURE__ */ e("div", { className: "pt-credits__ic", "aria-hidden": "true", children: ve }),
    /* @__PURE__ */ n("div", { className: "pt-credits__info", children: [
      /* @__PURE__ */ n("span", { className: "pt-credits__num", children: [
        a.toLocaleString(),
        " / ",
        t.toLocaleString()
      ] }),
      /* @__PURE__ */ e("div", { className: "pt-credits__bar", "aria-hidden": "true", children: /* @__PURE__ */ e("i", { style: { width: `${d}%` } }) })
    ] }),
    o ?? /* @__PURE__ */ e(S, { variant: "primary", size: "sm", className: "pt-credits__up", onClick: c, children: i })
  ] });
}
const me = /* @__PURE__ */ n("svg", { width: "17", height: "17", viewBox: "0 0 32 32", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ e(
    "path",
    {
      d: "M4 8.5C4 6.6 5.6 5 7.5 5h13.8c4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6h-6.1l-8 6.4c-1.4 1.1-3.2.1-3.2-1.6V8.5Z",
      fill: "var(--on-brand)"
    }
  ),
  /* @__PURE__ */ e("path", { d: "M11 12.4h9.4", stroke: "var(--accent)", strokeWidth: "2.4", strokeLinecap: "round" })
] }), ye = /* @__PURE__ */ e(b, { name: "chevronDown", size: 15 });
function be({
  brandName: a = "paryatech",
  brandMark: t,
  brandAction: s,
  notes: i,
  listMode: c = !1,
  children: o,
  footer: l,
  collapsed: d = !1,
  onToggleCollapsed: h
}) {
  const p = s === void 0 ? ye : s;
  return /* @__PURE__ */ n("aside", { className: "pt-side", "aria-label": "Sidebar", children: [
    /* @__PURE__ */ n("div", { className: "pt-side__top", children: [
      /* @__PURE__ */ e("span", { className: "pt-brand-mark", children: t ?? me }),
      /* @__PURE__ */ e("span", { className: "pt-brand-name", children: a }),
      p ? /* @__PURE__ */ e("span", { className: "pt-brand-action", children: p }) : null
    ] }),
    !c && i ? /* @__PURE__ */ e("div", { className: "pt-side__notes", children: i }) : null,
    /* @__PURE__ */ e("div", { className: "pt-side__scroll", children: o }),
    /* @__PURE__ */ n("div", { className: "pt-side__foot", children: [
      l,
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "pt-side-collapse",
          "data-tip": d ? "Expand sidebar" : "Collapse sidebar",
          "aria-expanded": !d,
          "aria-label": d ? "Expand sidebar" : "Collapse sidebar",
          onClick: () => h == null ? void 0 : h(),
          children: [
            /* @__PURE__ */ e(b, { name: "collapse", size: 16 }),
            /* @__PURE__ */ e("span", { className: "pt-side-collapse__txt", children: "Collapse" })
          ]
        }
      )
    ] })
  ] });
}
function Ge({
  children: a,
  className: t = ""
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sidebar-footer ${t}`.trim(), children: a });
}
function fe({
  label: a = "Back",
  className: t = "",
  type: s = "button",
  ...i
}) {
  return /* @__PURE__ */ e(
    "button",
    {
      type: s,
      className: `pt-back-btn ${t}`.trim(),
      "aria-label": a,
      "data-tip": a,
      ...i,
      children: /* @__PURE__ */ e(b, { name: "chevronLeft", size: 16 })
    }
  );
}
function ke({ items: a, className: t = "" }) {
  return /* @__PURE__ */ e("nav", { className: `pt-crumbs ${t}`.trim(), "aria-label": "Breadcrumb", children: a.map((s, i) => {
    const c = i === a.length - 1;
    return /* @__PURE__ */ n(ee, { children: [
      i > 0 ? /* @__PURE__ */ e(b, { name: "chevronRight", size: 13, "aria-hidden": "true" }) : null,
      c ? /* @__PURE__ */ e("span", { className: "pt-crumb pt-crumb--current", children: s.label }) : s.href ? /* @__PURE__ */ e(
        "a",
        {
          className: "pt-crumb",
          href: s.href,
          onClick: (o) => {
            s.onClick && (o.preventDefault(), s.onClick(o));
          },
          children: s.label
        }
      ) : /* @__PURE__ */ e("button", { type: "button", className: "pt-crumb", onClick: s.onClick, children: s.label })
    ] }, `${i}-${String(s.label)}`);
  }) });
}
function _e({
  name: a,
  initials: t,
  tone: s = "pink",
  className: i = "",
  type: c = "button",
  ...o
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: c,
      className: `pt-acct ${i}`.trim(),
      "aria-label": `Account, ${a}`,
      "data-tip": `${a} · Account`,
      ...o,
      children: [
        /* @__PURE__ */ e(te, { tone: s, size: 26, children: t }),
        /* @__PURE__ */ e(b, { name: "chevronDown", size: 13 })
      ]
    }
  );
}
function Ne({
  onSettings: a,
  onHelp: t,
  onCallLogs: s,
  onNotifications: i,
  notificationsAlert: c = !1,
  children: o
}) {
  return /* @__PURE__ */ n("div", { className: "pt-topbar-actions", children: [
    /* @__PURE__ */ e(N, { label: "Settings", onClick: a, children: /* @__PURE__ */ e(b, { name: "settings", size: "nav" }) }),
    /* @__PURE__ */ e(N, { label: "Help and support", onClick: t, children: /* @__PURE__ */ e(b, { name: "help", size: "nav" }) }),
    /* @__PURE__ */ e(N, { label: "Call logs", onClick: s, children: /* @__PURE__ */ e(b, { name: "phone2", size: "nav" }) }),
    /* @__PURE__ */ e(
      N,
      {
        label: c ? "Notifications, unread" : "Notifications",
        alert: c,
        onClick: i,
        children: /* @__PURE__ */ e(b, { name: "bell", size: "nav" })
      }
    ),
    o
  ] });
}
function ge(a) {
  return !!a && typeof a == "object" && !Z(a) && !Array.isArray(a);
}
function we({
  showBack: a = !1,
  onBack: t,
  backLabel: s = "Back",
  leading: i,
  breadcrumbs: c,
  crumbs: o,
  search: l,
  actions: d,
  account: h,
  onSettings: p,
  onHelp: v,
  onCallLogs: u,
  onNotifications: m,
  notificationsAlert: y = !1
}) {
  const f = ge(l) ? /* @__PURE__ */ e(
    ie,
    {
      placeholder: l.placeholder ?? "Search anything",
      "aria-label": l["aria-label"] ?? "Search the workspace",
      value: l.value,
      defaultValue: l.defaultValue,
      onChange: l.onChange
    }
  ) : l, k = c ? /* @__PURE__ */ e(ke, { items: c }) : o ? /* @__PURE__ */ e("nav", { className: "pt-crumbs", "aria-label": "Breadcrumb", children: o }) : null, w = d ?? /* @__PURE__ */ e(
    Ne,
    {
      onSettings: p,
      onHelp: v,
      onCallLogs: u,
      onNotifications: m,
      notificationsAlert: y
    }
  ), M = h ? /* @__PURE__ */ e(
    _e,
    {
      name: h.name,
      initials: h.initials,
      tone: h.tone,
      onClick: h.onClick
    }
  ) : null;
  return /* @__PURE__ */ n("div", { className: "pt-topbar", children: [
    i ?? (a ? /* @__PURE__ */ e(fe, { label: s, onClick: t }) : null),
    k,
    f,
    /* @__PURE__ */ n("div", { className: "pt-topbar__actions", children: [
      w,
      M
    ] })
  ] });
}
function Me(a) {
  return Z(a) || Array.isArray(a) || typeof a == "string";
}
function ze(a) {
  return !!a && typeof a == "object" && !Me(a) && "label" in a;
}
function qe({
  variant: a,
  brandName: t = "paryatech",
  brandMark: s,
  brandAction: i,
  skipHref: c = "#main",
  skipLabel: o = "Skip to main content",
  nav: l,
  navGroups: d,
  notes: h,
  sidebarFooter: p,
  credits: v,
  leading: u,
  breadcrumbs: m,
  crumbs: y,
  onBack: f,
  backLabel: k,
  search: w,
  actions: M,
  account: F,
  onSettings: T,
  onHelp: I,
  onCallLogs: P,
  onNotifications: R,
  notificationsAlert: j = !1,
  children: O,
  listMode: K,
  defaultCollapsed: G = !1,
  collapsed: A,
  onCollapsedChange: z
}) {
  const D = a ?? (K ? "list" : "detail"), x = D === "list", [q, U] = L(G), W = A ?? q, X = (V) => {
    z == null || z(V), A === void 0 && U(V);
  }, Y = d ? /* @__PURE__ */ e(de, { groups: d }) : l, J = ze(h) ? /* @__PURE__ */ e(
    pe,
    {
      label: h.label,
      badge: h.badge,
      onOpen: h.onOpen,
      onAdd: h.onAdd,
      tip: h.tip,
      addTip: h.addTip
    }
  ) : h, Q = p ?? (v ? /* @__PURE__ */ e(ue, { ...v }) : null);
  return /* @__PURE__ */ n(
    "div",
    {
      className: `pt-frame ${W ? "pt-frame--collapsed" : ""} ${x ? "pt-frame--list" : ""}`,
      "data-shell-variant": D,
      children: [
        /* @__PURE__ */ e(ae, { href: c, children: o }),
        /* @__PURE__ */ e(
          be,
          {
            brandName: t,
            brandMark: s,
            brandAction: i,
            notes: J,
            listMode: x,
            footer: Q,
            collapsed: W,
            onToggleCollapsed: () => X(!W),
            children: Y
          }
        ),
        /* @__PURE__ */ n("main", { className: "pt-workspace", children: [
          /* @__PURE__ */ e(
            we,
            {
              showBack: !x,
              onBack: f,
              backLabel: k ?? "Back",
              leading: u,
              breadcrumbs: m,
              crumbs: y,
              search: w ?? { placeholder: "Search anything" },
              actions: M,
              account: F,
              onSettings: T,
              onHelp: I,
              onCallLogs: P,
              onNotifications: R,
              notificationsAlert: j
            }
          ),
          /* @__PURE__ */ e("div", { className: "pt-scroll", children: /* @__PURE__ */ e("div", { className: "pt-content", id: "main", children: O }) })
        ] })
      ]
    }
  );
}
function Ue({
  title: a,
  actions: t,
  tabs: s,
  tabValue: i,
  onTabChange: c,
  toolbar: o,
  children: l,
  bulk: d,
  footer: h
}) {
  return /* @__PURE__ */ n("div", { className: "pt-list", children: [
    /* @__PURE__ */ n("div", { className: "pt-list-head", children: [
      /* @__PURE__ */ e("h1", { className: "pt-title pt-list-head__title", children: a }),
      t ? /* @__PURE__ */ e("div", { className: "pt-list-head__acts", children: t }) : null
    ] }),
    s && i && c ? /* @__PURE__ */ e("div", { className: "pt-list-chrome", children: /* @__PURE__ */ e(re, { items: s, value: i, onValueChange: c, "aria-label": "List filters" }) }) : null,
    o ? /* @__PURE__ */ e("div", { className: "pt-list-toolbar", children: o }) : null,
    /* @__PURE__ */ n("div", { className: "pt-list-sheet", children: [
      l,
      d,
      h
    ] })
  ] });
}
function Xe({
  label: a,
  children: t
}) {
  return /* @__PURE__ */ n("div", { className: "pt-bulk", children: [
    /* @__PURE__ */ e("span", { className: "pt-bulk__lbl", children: a }),
    /* @__PURE__ */ e("div", { className: "pt-bulk__acts", children: t })
  ] });
}
function Ye({
  title: a,
  status: t,
  meta: s,
  owners: i,
  actions: c,
  tabs: o,
  children: l,
  className: d = ""
}) {
  return /* @__PURE__ */ n("div", { className: `pt-detail ${d}`.trim(), children: [
    /* @__PURE__ */ n("header", { className: "pt-detail__header", children: [
      /* @__PURE__ */ n("div", { className: "pt-detail__title-row", children: [
        /* @__PURE__ */ n("div", { className: "pt-detail__title-block", children: [
          /* @__PURE__ */ e("h1", { className: "pt-detail__title", children: a }),
          t ? /* @__PURE__ */ e("div", { className: "pt-detail__status", children: t }) : null
        ] }),
        /* @__PURE__ */ n("div", { className: "pt-detail__aside", children: [
          i ? /* @__PURE__ */ e("div", { className: "pt-detail__owners", children: i }) : null,
          c ? /* @__PURE__ */ e("div", { className: "pt-detail__actions", children: c }) : null
        ] })
      ] }),
      s ? /* @__PURE__ */ e("div", { className: "pt-detail__meta", children: s }) : null
    ] }),
    o ? /* @__PURE__ */ e("div", { className: "pt-detail__tabs", children: o }) : null,
    /* @__PURE__ */ e("div", { className: "pt-detail__body", children: l })
  ] });
}
function Je({ search: a, filters: t, actions: s, className: i = "" }) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet-toolbar ${i}`.trim(), children: [
    /* @__PURE__ */ n("div", { className: "pt-sheet-toolbar__leading", children: [
      a,
      t
    ] }),
    s ? /* @__PURE__ */ e("div", { className: "pt-sheet-toolbar__actions", children: s }) : null
  ] });
}
function Qe({
  open: a,
  onClose: t,
  mode: s = "browse",
  onModeChange: i,
  title: c = "Booking notes",
  search: o,
  filters: l,
  children: d,
  compose: h,
  composeFooter: p,
  className: v = ""
}) {
  return g(() => {
    if (!a) return;
    const u = (m) => {
      m.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [a, t]), a ? /* @__PURE__ */ e("div", { className: `pt-nd-overlay ${v}`.trim(), role: "presentation", children: /* @__PURE__ */ n("div", { className: "pt-nd", role: "dialog", "aria-modal": "true", "aria-label": c, children: [
    /* @__PURE__ */ n("div", { className: "pt-nd__head", children: [
      /* @__PURE__ */ e("div", { className: "pt-nd__title", children: c }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "pt-nd__mode",
          onClick: () => i == null ? void 0 : i(s === "browse" ? "compose" : "browse"),
          children: s === "browse" ? "Write a note" : "Browse notes"
        }
      ),
      /* @__PURE__ */ e("button", { type: "button", className: "pt-nd__close", "aria-label": "Close", onClick: t, children: /* @__PURE__ */ e(b, { name: "clear", size: "sm" }) })
    ] }),
    s === "browse" ? /* @__PURE__ */ n("div", { className: "pt-nd__browse", children: [
      o ? /* @__PURE__ */ e("div", { className: "pt-nd__search", children: o }) : null,
      l && l.length > 0 ? /* @__PURE__ */ e("div", { className: "pt-nd__filters", role: "tablist", "aria-label": "Note filters", children: l.map((u) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": !!u.active,
          className: `pt-nd-fil ${u.active ? "is-active" : ""}`,
          onClick: u.onSelect,
          children: u.label
        },
        u.id
      )) }) : null,
      /* @__PURE__ */ e("div", { className: "pt-nd__list", children: d })
    ] }) : /* @__PURE__ */ n("div", { className: "pt-nd__compose", children: [
      /* @__PURE__ */ e("div", { className: "pt-nd__compose-body", children: h }),
      /* @__PURE__ */ e("div", { className: "pt-nd__compose-foot", children: p ?? /* @__PURE__ */ n(r, { children: [
        /* @__PURE__ */ e(S, { variant: "ghost", size: "sm", onClick: () => i == null ? void 0 : i("browse"), children: "Cancel" }),
        /* @__PURE__ */ e(S, { variant: "primary", size: "sm", onClick: t, children: "Save note" })
      ] }) })
    ] })
  ] }) }) : null;
}
function ea({ items: a, className: t = "", ...s }) {
  return /* @__PURE__ */ e("div", { className: `pt-kpi-strip ${t}`.trim(), ...s, children: a.map((i) => {
    const o = `pt-kpi pt-kpi--${i.tone ?? "default"}`;
    return i.onClick ? /* @__PURE__ */ n("button", { type: "button", className: o, onClick: i.onClick, children: [
      i.icon ? /* @__PURE__ */ e("span", { className: "pt-kpi__ic", children: i.icon }) : null,
      /* @__PURE__ */ n("span", { className: "pt-kpi__text", children: [
        /* @__PURE__ */ e("span", { className: "pt-kpi__label", children: i.label }),
        /* @__PURE__ */ e("span", { className: "pt-kpi__value", children: i.value })
      ] })
    ] }, i.id) : /* @__PURE__ */ n("div", { className: o, children: [
      i.icon ? /* @__PURE__ */ e("span", { className: "pt-kpi__ic", children: i.icon }) : null,
      /* @__PURE__ */ n("span", { className: "pt-kpi__text", children: [
        /* @__PURE__ */ e("span", { className: "pt-kpi__label", children: i.label }),
        /* @__PURE__ */ e("span", { className: "pt-kpi__value", children: i.value })
      ] })
    ] }, i.id);
  }) });
}
export {
  _e as AccountMenu,
  qe as AppShell,
  te as Avatar,
  fe as BackButton,
  ke as Breadcrumbs,
  S as Button,
  $e as Checkbox,
  ue as CreditsMeter,
  Ze as DataSheet,
  Ie as DataSheetCell,
  Fe as DataSheetHeader,
  Te as DataSheetRow,
  Ye as DetailPage,
  He as EmptyState,
  De as FilterSelect,
  se as ICON_NAMES,
  _ as ICON_REGISTRY,
  b as Icon,
  N as IconButton,
  ea as KpiStrip,
  Pe as LeadCell,
  Xe as ListBulkBar,
  Ue as ListPage,
  Be as Modal,
  Oe as MoneyCell,
  oe as NavGroup,
  le as NavItem,
  Qe as NotesDrawer,
  pe as NotesStrip,
  Ke as OwnerCell,
  Ve as Pagination,
  ie as SearchField,
  Je as SheetToolbar,
  be as Sidebar,
  Ge as SidebarFooter,
  le as SidebarItem,
  de as SidebarNav,
  oe as SidebarSection,
  ae as SkipLink,
  Re as StackCell,
  je as StackLine,
  Se as StatusChip,
  Ce as StatusSelect,
  ce as Tab,
  re as TabBar,
  Ee as TextField,
  Le as Tooltip,
  we as Topbar,
  Ne as TopbarActions,
  Ae as getIconMeta,
  ne as resolveIconName
};
