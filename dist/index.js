import { jsxs as a, jsx as e, Fragment as r } from "react/jsx-runtime";
import { useState as x, useRef as D, useId as H, useEffect as w } from "react";
function z({
  variant: s = "primary",
  size: t = "md",
  leadingIcon: i,
  trailingIcon: n,
  className: c = "",
  type: o = "button",
  children: l,
  ...d
}) {
  return /* @__PURE__ */ a(
    "button",
    {
      type: o,
      className: `pt-btn pt-btn--${s} pt-btn--${t} ${c}`.trim(),
      ...d,
      children: [
        i ? /* @__PURE__ */ e("span", { className: "pt-btn__icon", children: i }) : null,
        l,
        n ? /* @__PURE__ */ e("span", { className: "pt-btn__icon", children: n }) : null
      ]
    }
  );
}
function U({
  children: s,
  alert: t = !1,
  label: i,
  className: n = "",
  type: c = "button",
  ...o
}) {
  return /* @__PURE__ */ a(
    "button",
    {
      type: c,
      className: `pt-icon-btn ${n}`.trim(),
      "aria-label": i,
      ...o,
      children: [
        s,
        t ? /* @__PURE__ */ e("span", { className: "pt-icon-btn__alert", "aria-hidden": "true" }) : null
      ]
    }
  );
}
function C({
  href: s,
  children: t = "Skip to main content",
  className: i = "",
  ...n
}) {
  return /* @__PURE__ */ e("a", { href: s, className: `pt-skip-link ${i}`.trim(), ...n, children: t });
}
function X({
  children: s,
  tone: t = "default",
  size: i = 30,
  className: n = "",
  style: c,
  ...o
}) {
  const l = i <= 26;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `pt-avatar ${l ? "pt-avatar--sm" : ""} pt-avatar--${t} ${n}`.trim(),
      style: { width: i, height: i, ...c },
      ...o,
      children: s
    }
  );
}
function Y({
  state: s = "off",
  onCheckedChange: t,
  label: i,
  className: n = "",
  ...c
}) {
  const o = () => {
    t && t(s === "off" ? "on" : s === "on" ? "off" : "on");
  };
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      role: "checkbox",
      "aria-checked": s === "indeterminate" ? "mixed" : s === "on",
      "aria-label": i,
      className: `pt-cbx ${s !== "off" ? "pt-cbx--on" : ""} ${s === "indeterminate" ? "pt-cbx--some" : ""} ${n}`.trim(),
      onClick: o,
      ...c,
      children: s === "indeterminate" ? /* @__PURE__ */ e("span", { className: "pt-cbx__dash" }) : /* @__PURE__ */ e("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "m5 12 5 5L20 7" }) })
    }
  );
}
function J({
  tone: s = "open",
  children: t,
  className: i = "",
  ...n
}) {
  return /* @__PURE__ */ e("span", { className: `pt-st pt-st--${s} ${i}`.trim(), ...n, children: t });
}
function Q({ tip: s, children: t, className: i = "" }) {
  return /* @__PURE__ */ e("span", { className: `pt-tip ${i}`.trim(), "data-tip": s, children: t });
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
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
    paths: /* @__PURE__ */ a(r, { children: [
      /* @__PURE__ */ e("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      /* @__PURE__ */ e("path", { d: "M14 2v4a1 1 0 0 0 1 1h4" })
    ] })
  }
}, B = Object.keys(_);
function ee(s) {
  return _[s];
}
function Z(s) {
  if (s in _) return s;
  for (const t of B)
    if (_[t].aliases.includes(s)) return t;
}
const S = {
  "2xs": 11,
  xs: 13,
  sm: 14,
  md: 15,
  nav: 17,
  lg: 20
};
function f({ name: s, size: t = "md", title: i, className: n = "", style: c, ...o }) {
  const l = Z(s) ?? (s in _ ? s : void 0);
  if (!l)
    return null;
  const d = _[l], v = !i, h = typeof t == "number" ? { width: t, height: t } : {
    width: `var(--icon-size-${t}, ${S[t]}px)`,
    height: `var(--icon-size-${t}, ${S[t]}px)`
  }, p = {
    viewBox: "0 0 24 24",
    className: n,
    style: { ...h, ...c },
    "data-icon": l,
    "aria-hidden": v ? !0 : void 0,
    role: i ? "img" : void 0,
    ...o
  };
  return d.fill ? /* @__PURE__ */ a("svg", { fill: "currentColor", ...p, children: [
    i ? /* @__PURE__ */ e("title", { children: i }) : null,
    d.paths
  ] }) : /* @__PURE__ */ a(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: d.strokeWidth ?? "var(--icon-stroke-default, 1.7)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...p,
      children: [
        i ? /* @__PURE__ */ e("title", { children: i }) : null,
        d.paths
      ]
    }
  );
}
function ae({
  className: s = "",
  fullWidth: t = !1,
  placeholder: i = "Search",
  "aria-label": n = "Search",
  ...c
}) {
  return /* @__PURE__ */ a("div", { className: `pt-search ${t ? "pt-search--full" : ""} ${s}`.trim(), children: [
    /* @__PURE__ */ e(f, { name: "search", size: 16 }),
    /* @__PURE__ */ e("input", { type: "search", placeholder: i, "aria-label": n, ...c })
  ] });
}
function te({
  label: s = "Filter",
  options: t,
  value: i,
  onChange: n,
  tip: c,
  className: o = "",
  ...l
}) {
  var m;
  const [d, v] = x(!1), h = D(null), p = H(), u = ((m = t.find((y) => y.value === i)) == null ? void 0 : m.label) ?? s;
  return w(() => {
    if (!d) return;
    const y = (b) => {
      var k;
      (k = h.current) != null && k.contains(b.target) || v(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [d]), /* @__PURE__ */ a(
    "div",
    {
      ref: h,
      className: `pt-filter ${d ? "pt-filter--open" : ""} ${o}`.trim(),
      "data-tip": d ? void 0 : c,
      ...l,
      children: [
        /* @__PURE__ */ e(f, { name: "filter", size: 15 }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pt-filter-btn",
            "aria-haspopup": "listbox",
            "aria-expanded": d,
            "aria-controls": p,
            onClick: () => v((y) => !y),
            children: [
              /* @__PURE__ */ e("span", { className: "pt-filter-btn__label", children: u }),
              /* @__PURE__ */ e(f, { name: "chevronDown", size: 13, className: "pt-filter-caret" })
            ]
          }
        ),
        d ? /* @__PURE__ */ e("div", { className: "pt-choice-menu", role: "listbox", id: p, children: t.map((y) => /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "option",
            "aria-selected": y.value === i,
            className: `pt-choice-opt ${y.value === i ? "pt-choice-opt--on" : ""}`,
            onClick: () => {
              n(y.value), v(!1);
            },
            children: y.label
          },
          y.value
        )) }) : null
      ]
    }
  );
}
function T({
  items: s,
  value: t,
  onValueChange: i,
  className: n = "",
  "aria-label": c = "Tabs",
  ...o
}) {
  return /* @__PURE__ */ e("div", { className: `pt-tabbar ${n}`.trim(), role: "tablist", "aria-label": c, ...o, children: s.map((l) => /* @__PURE__ */ e(
    I,
    {
      active: l.id === t,
      count: l.count,
      onClick: () => i(l.id),
      children: l.label
    },
    l.id
  )) });
}
function I({ active: s = !1, count: t, children: i, className: n = "", ...c }) {
  return /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": s,
      className: `pt-tab ${s ? "pt-tab--active" : ""} ${n}`.trim(),
      ...c,
      children: [
        i,
        typeof t == "number" ? /* @__PURE__ */ e("span", { className: "pt-tab__chip", children: t }) : null
      ]
    }
  );
}
function se({
  rangeLabel: s,
  page: t,
  pageCount: i,
  onPageChange: n,
  className: c = "",
  ...o
}) {
  const l = Math.max(1, i), d = Math.min(Math.max(1, t), l), v = Array.from({ length: l }, (h, p) => p + 1);
  return /* @__PURE__ */ a("div", { className: `pt-foot ${c}`.trim(), ...o, children: [
    /* @__PURE__ */ e("span", { className: "pt-foot__range", children: s }),
    /* @__PURE__ */ a("div", { className: "pt-pager", children: [
      /* @__PURE__ */ e(
        M,
        {
          disabled: d <= 1,
          "aria-label": "Previous page",
          onClick: () => n(d - 1),
          children: /* @__PURE__ */ e(L, { direction: "prev" })
        }
      ),
      v.map((h) => /* @__PURE__ */ e(
        M,
        {
          active: h === d,
          "aria-current": h === d ? "page" : void 0,
          onClick: () => n(h),
          children: h
        },
        h
      )),
      /* @__PURE__ */ e(
        M,
        {
          disabled: d >= l,
          "aria-label": "Next page",
          onClick: () => n(d + 1),
          children: /* @__PURE__ */ e(L, { direction: "next" })
        }
      )
    ] })
  ] });
}
function L({ direction: s }) {
  return /* @__PURE__ */ e(f, { name: s === "prev" ? "chevronLeft" : "chevronRight", size: 13 });
}
function M({ active: s = !1, className: t = "", children: i, ...n }) {
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: `pt-pg ${s ? "pt-pg--active" : ""} ${t}`.trim(),
      ...n,
      children: i
    }
  );
}
function ie({
  title: s,
  description: t,
  icon: i,
  action: n,
  variant: c = "illustrated",
  className: o = "",
  ...l
}) {
  return /* @__PURE__ */ a("div", { className: `pt-empty pt-empty--${c} ${o}`.trim(), ...l, children: [
    c === "illustrated" ? i ? /* @__PURE__ */ e("div", { className: "pt-empty__ic", children: i }) : /* @__PURE__ */ e("div", { className: "pt-empty__ic", "aria-hidden": "true", children: /* @__PURE__ */ e(f, { name: "pin", size: "lg" }) }) : i ? /* @__PURE__ */ e("div", { className: "pt-empty__ic", children: i }) : null,
    /* @__PURE__ */ e("h4", { children: s }),
    t ? /* @__PURE__ */ e("p", { children: t }) : null,
    n ? /* @__PURE__ */ e("div", { className: "pt-empty__action", children: n }) : null
  ] });
}
function ne({
  value: s,
  options: t,
  onChange: i,
  label: n = "Status",
  className: c = "",
  ...o
}) {
  const [l, d] = x(!1), v = D(null), h = H(), p = t.find((m) => m.value === s) ?? t[0], u = (p == null ? void 0 : p.tone) ?? "open";
  return w(() => {
    if (!l) return;
    const m = (b) => {
      var k;
      (k = v.current) != null && k.contains(b.target) || d(!1);
    }, y = (b) => {
      b.key === "Escape" && d(!1);
    };
    return document.addEventListener("mousedown", m), document.addEventListener("keydown", y), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("keydown", y);
    };
  }, [l]), /* @__PURE__ */ a("div", { ref: v, className: `pt-st-dd ${l ? "is-open" : ""} ${c}`.trim(), children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: `pt-st-pick pt-st-pick--${u}`,
        "aria-label": n,
        "aria-haspopup": "listbox",
        "aria-expanded": l,
        "aria-controls": h,
        onClick: () => d((m) => !m),
        ...o,
        children: [
          /* @__PURE__ */ e("span", { className: "pt-st-pick__label", children: (p == null ? void 0 : p.label) ?? s }),
          /* @__PURE__ */ e(f, { name: "chevronDown", size: 12, className: "pt-st-pick__caret" })
        ]
      }
    ),
    l ? /* @__PURE__ */ e("div", { className: "pt-st-menu", role: "listbox", id: h, "aria-label": n, children: t.map((m) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        role: "option",
        className: `pt-st-opt pt-st-opt--${m.tone}`,
        "aria-selected": m.value === s,
        onClick: () => {
          i == null || i(m.value), d(!1);
        },
        children: m.label
      },
      m.value
    )) }) : null
  ] });
}
function re({
  open: s,
  onClose: t,
  eyebrow: i,
  title: n,
  children: c,
  footer: o,
  size: l = "default",
  className: d = "",
  ...v
}) {
  return w(() => {
    if (!s) return;
    const h = (p) => {
      p.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [s, t]), s ? /* @__PURE__ */ e(
    "div",
    {
      className: "pt-modal-overlay",
      role: "presentation",
      onMouseDown: (h) => {
        h.target === h.currentTarget && (t == null || t());
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          className: `pt-modal pt-modal--${l} ${d}`.trim(),
          role: "dialog",
          "aria-modal": "true",
          ...v,
          children: [
            /* @__PURE__ */ a("div", { className: "pt-modal__head", children: [
              i ? /* @__PURE__ */ e("p", { className: "pt-modal__eyebrow", children: i }) : null,
              /* @__PURE__ */ e("h2", { className: "pt-modal__title", children: n })
            ] }),
            /* @__PURE__ */ e("div", { className: "pt-modal__body", children: c }),
            o ? /* @__PURE__ */ e("div", { className: "pt-modal__foot", children: o }) : null
          ]
        }
      )
    }
  ) : null;
}
function ce(s) {
  const { label: t, hint: i, className: n = "", id: c, multiline: o, ...l } = s, d = c ?? (typeof t == "string" ? `pt-tf-${t.replace(/\s+/g, "-").toLowerCase()}` : void 0);
  return /* @__PURE__ */ a("div", { className: `pt-mf ${n}`.trim(), children: [
    /* @__PURE__ */ e("label", { className: "pt-mf__l", htmlFor: d, children: t }),
    o ? /* @__PURE__ */ e(
      "textarea",
      {
        id: d,
        className: "pt-mf__i",
        ...l
      }
    ) : /* @__PURE__ */ e("input", { id: d, className: "pt-mf__i", ...l }),
    i ? /* @__PURE__ */ e("p", { className: "pt-mf__hint", children: i }) : null
  ] });
}
function le({
  children: s,
  loading: t = !1,
  loadingRows: i = 4,
  columns: n = 5,
  variant: c = "default",
  className: o = "",
  ...l
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet ${c === "booking" ? "pt-sheet--booking" : ""} ${o}`.trim(), ...l, children: /* @__PURE__ */ e("div", { className: "pt-sheet__scroll", children: t ? Array.from({ length: i }, (v, h) => /* @__PURE__ */ e("div", { className: "pt-sheet__row pt-sheet__row--loading", "aria-busy": "true", children: Array.from({ length: c === "booking" ? 7 : n }, (p, u) => /* @__PURE__ */ e("div", { className: "pt-sheet__cell", children: /* @__PURE__ */ e("span", { className: "pt-sheet__skeleton" }) }, u)) }, h)) : s }) });
}
function oe({
  children: s,
  className: t = "",
  ...i
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__row pt-sheet__head ${t}`.trim(), ...i, children: s });
}
function de({
  children: s,
  className: t = "",
  ...i
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__row ${t}`.trim(), ...i, children: s });
}
function he({
  children: s,
  className: t = "",
  check: i,
  ...n
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__cell ${i ? "pt-sheet__cell--check" : ""} ${t}`.trim(), ...n, children: s });
}
function pe({
  icon: s,
  title: t,
  subtitle: i,
  className: n = "",
  align: c = "center"
}) {
  return /* @__PURE__ */ a("div", { className: `pt-sheet__lead ${c === "start" ? "pt-sheet__lead--start" : ""} ${n}`.trim(), children: [
    s,
    /* @__PURE__ */ a("div", { style: { minWidth: 0 }, children: [
      /* @__PURE__ */ e("div", { className: "pt-sheet__title", children: t }),
      i == null ? null : typeof i == "string" || typeof i == "number" ? /* @__PURE__ */ e("div", { className: "pt-sheet__sub", children: i }) : i
    ] })
  ] });
}
function ve({
  children: s,
  className: t = ""
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__stack ${t}`.trim(), children: s });
}
function ue({
  icon: s,
  children: t,
  muted: i,
  mono: n,
  className: c = ""
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: `pt-sheet__line ${i ? "pt-sheet__line--muted" : ""} ${n ? "pt-mono" : ""} ${c}`.trim(),
      children: [
        s,
        t
      ]
    }
  );
}
function me({
  amount: s,
  chip: t,
  className: i = ""
}) {
  return /* @__PURE__ */ a("div", { className: `pt-sheet__money ${i}`.trim(), children: [
    /* @__PURE__ */ e("span", { className: "pt-mono pt-sheet__amount", children: s }),
    t
  ] });
}
function ye({
  children: s,
  className: t = ""
}) {
  return /* @__PURE__ */ e("div", { className: `pt-sheet__owner ${t}`.trim(), children: s });
}
function F({
  label: s,
  icon: t,
  href: i,
  active: n = !1,
  tip: c,
  badge: o,
  onSelect: l,
  className: d = "",
  ...v
}) {
  const h = `pt-nav-item ${n ? "pt-nav-item--active" : ""} ${d}`.trim(), p = c ?? s, u = /* @__PURE__ */ a(r, { children: [
    /* @__PURE__ */ e("span", { className: "pt-nav-item__icon", "aria-hidden": "true", children: t }),
    /* @__PURE__ */ e("span", { className: "pt-nav-item__label", children: s }),
    o != null && o !== !1 ? /* @__PURE__ */ e("span", { className: "pt-nav-item__badge", children: o }) : null
  ] });
  return i ? /* @__PURE__ */ e(
    "a",
    {
      href: i,
      className: h,
      "data-tip": p,
      "aria-current": n ? "page" : void 0,
      onClick: l,
      ...v,
      children: u
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: h,
      "data-tip": p,
      "aria-current": n ? "page" : void 0,
      onClick: l,
      ...v,
      children: u
    }
  );
}
function P({ label: s, children: t, className: i = "" }) {
  return /* @__PURE__ */ a("div", { className: `pt-nav-group ${i}`.trim(), children: [
    /* @__PURE__ */ e("div", { className: "pt-nav-group__label", children: s }),
    t
  ] });
}
function R({
  groups: s,
  className: t = "",
  "aria-label": i = "Primary"
}) {
  return /* @__PURE__ */ e("nav", { className: `pt-sidenav ${t}`.trim(), "aria-label": i, children: s.map((n) => /* @__PURE__ */ e(P, { label: n.label, children: n.items.map((c) => /* @__PURE__ */ e(
    F,
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
  )) }, n.id)) });
}
function fe({
  brandName: s = "paryatech",
  brandMark: t,
  brandAction: i,
  skipHref: n = "#main",
  skipLabel: c = "Skip to main content",
  nav: o,
  navGroups: l,
  notes: d,
  sidebarFooter: v,
  leading: h,
  crumbs: p,
  search: u,
  actions: m,
  children: y,
  listMode: b = !1,
  defaultCollapsed: k = !1,
  collapsed: W,
  onCollapsedChange: g
}) {
  const [A, V] = x(k), N = W ?? A, E = ($) => {
    g == null || g($), W === void 0 && V($);
  };
  return /* @__PURE__ */ a(
    "div",
    {
      className: `pt-frame ${N ? "pt-frame--collapsed" : ""} ${b ? "pt-frame--list" : ""}`,
      children: [
        /* @__PURE__ */ e(C, { href: n, children: c }),
        /* @__PURE__ */ a("aside", { className: "pt-side", "aria-label": "Sidebar", children: [
          /* @__PURE__ */ a("div", { className: "pt-side__top", children: [
            /* @__PURE__ */ e("span", { className: "pt-brand-mark", children: t ?? /* @__PURE__ */ a("svg", { width: "17", height: "17", viewBox: "0 0 32 32", fill: "none", "aria-hidden": "true", children: [
              /* @__PURE__ */ e(
                "path",
                {
                  d: "M4 8.5C4 6.6 5.6 5 7.5 5h13.8c4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6h-6.1l-8 6.4c-1.4 1.1-3.2.1-3.2-1.6V8.5Z",
                  fill: "var(--on-brand)"
                }
              ),
              /* @__PURE__ */ e("path", { d: "M11 12.4h9.4", stroke: "var(--accent)", strokeWidth: "2.4", strokeLinecap: "round" })
            ] }) }),
            /* @__PURE__ */ e("span", { className: "pt-brand-name", children: s }),
            i ? /* @__PURE__ */ e("span", { className: "pt-brand-action", children: i }) : null
          ] }),
          !b && d ? /* @__PURE__ */ e("div", { className: "pt-side__notes", children: d }) : null,
          /* @__PURE__ */ e("div", { className: "pt-side__scroll", children: l ? /* @__PURE__ */ e(R, { groups: l }) : o }),
          /* @__PURE__ */ a("div", { className: "pt-side__foot", children: [
            v,
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pt-side-collapse",
                "data-tip": N ? "Expand sidebar" : "Collapse sidebar",
                "aria-expanded": !N,
                "aria-label": N ? "Expand sidebar" : "Collapse sidebar",
                onClick: () => E(!N),
                children: [
                  /* @__PURE__ */ e(f, { name: "collapse", size: 16 }),
                  /* @__PURE__ */ e("span", { className: "pt-side-collapse__txt", children: "Collapse" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("main", { className: "pt-workspace", children: [
          /* @__PURE__ */ a("div", { className: "pt-topbar", children: [
            h,
            p ? /* @__PURE__ */ e("nav", { className: "pt-crumbs", "aria-label": "Breadcrumb", children: p }) : null,
            u,
            /* @__PURE__ */ e("div", { className: "pt-topbar__actions", children: m })
          ] }),
          /* @__PURE__ */ e("div", { className: "pt-scroll", children: /* @__PURE__ */ e("div", { className: "pt-content", id: "main", children: y }) })
        ] })
      ]
    }
  );
}
const j = /* @__PURE__ */ e(f, { name: "fileText", size: 16 });
function be({
  label: s,
  icon: t = j,
  badge: i,
  tip: n = "Notes",
  addTip: c = "Write a note",
  onOpen: o,
  onAdd: l,
  className: d = ""
}) {
  return /* @__PURE__ */ a("div", { className: `pt-notes ${d}`.trim(), children: [
    /* @__PURE__ */ a("button", { type: "button", className: "pt-notes__main", "data-tip": n, onClick: o, children: [
      t,
      /* @__PURE__ */ e("span", { className: "pt-notes__txt", children: s }),
      i != null && i !== !1 ? /* @__PURE__ */ e("span", { className: "pt-notes__badge", children: i }) : null
    ] }),
    l ? /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "pt-notes__add",
        "data-tip": c,
        "aria-label": c,
        onClick: l,
        children: /* @__PURE__ */ e(f, { name: "plus", size: 16 })
      }
    ) : null
  ] });
}
const K = /* @__PURE__ */ e(f, { name: "credits", size: "md" });
function ke({
  remaining: s,
  total: t,
  tip: i,
  upgradeLabel: n = "Upgrade",
  onUpgrade: c,
  upgrade: o,
  className: l = ""
}) {
  const d = t > 0 ? Math.min(100, Math.round(s / t * 100)) : 0, v = i ?? `${s.toLocaleString()} of ${t.toLocaleString()} credits remaining this cycle`;
  return /* @__PURE__ */ a("div", { className: `pt-credits ${l}`.trim(), "data-tip": v, children: [
    /* @__PURE__ */ e("div", { className: "pt-credits__ic", "aria-hidden": "true", children: K }),
    /* @__PURE__ */ a("div", { className: "pt-credits__info", children: [
      /* @__PURE__ */ a("span", { className: "pt-credits__num", children: [
        s.toLocaleString(),
        " / ",
        t.toLocaleString()
      ] }),
      /* @__PURE__ */ e("div", { className: "pt-credits__bar", "aria-hidden": "true", children: /* @__PURE__ */ e("i", { style: { width: `${d}%` } }) })
    ] }),
    o ?? /* @__PURE__ */ e(z, { variant: "primary", size: "sm", className: "pt-credits__up", onClick: c, children: n })
  ] });
}
function _e({
  title: s,
  actions: t,
  tabs: i,
  tabValue: n,
  onTabChange: c,
  toolbar: o,
  children: l,
  bulk: d,
  footer: v
}) {
  return /* @__PURE__ */ a("div", { className: "pt-list", children: [
    /* @__PURE__ */ a("div", { className: "pt-list-head", children: [
      /* @__PURE__ */ e("h1", { className: "pt-title pt-list-head__title", children: s }),
      t ? /* @__PURE__ */ e("div", { className: "pt-list-head__acts", children: t }) : null
    ] }),
    i && n && c ? /* @__PURE__ */ e("div", { className: "pt-list-chrome", children: /* @__PURE__ */ e(T, { items: i, value: n, onValueChange: c, "aria-label": "List filters" }) }) : null,
    o ? /* @__PURE__ */ e("div", { className: "pt-list-toolbar", children: o }) : null,
    /* @__PURE__ */ a("div", { className: "pt-list-sheet", children: [
      l,
      d,
      v
    ] })
  ] });
}
function Ne({
  label: s,
  children: t
}) {
  return /* @__PURE__ */ a("div", { className: "pt-bulk", children: [
    /* @__PURE__ */ e("span", { className: "pt-bulk__lbl", children: s }),
    /* @__PURE__ */ e("div", { className: "pt-bulk__acts", children: t })
  ] });
}
function we({
  title: s,
  status: t,
  meta: i,
  owners: n,
  actions: c,
  tabs: o,
  children: l,
  className: d = ""
}) {
  return /* @__PURE__ */ a("div", { className: `pt-detail ${d}`.trim(), children: [
    /* @__PURE__ */ a("header", { className: "pt-detail__header", children: [
      /* @__PURE__ */ a("div", { className: "pt-detail__title-row", children: [
        /* @__PURE__ */ a("div", { className: "pt-detail__title-block", children: [
          /* @__PURE__ */ e("h1", { className: "pt-detail__title", children: s }),
          t ? /* @__PURE__ */ e("div", { className: "pt-detail__status", children: t }) : null
        ] }),
        /* @__PURE__ */ a("div", { className: "pt-detail__aside", children: [
          n ? /* @__PURE__ */ e("div", { className: "pt-detail__owners", children: n }) : null,
          c ? /* @__PURE__ */ e("div", { className: "pt-detail__actions", children: c }) : null
        ] })
      ] }),
      i ? /* @__PURE__ */ e("div", { className: "pt-detail__meta", children: i }) : null
    ] }),
    o ? /* @__PURE__ */ e("div", { className: "pt-detail__tabs", children: o }) : null,
    /* @__PURE__ */ e("div", { className: "pt-detail__body", children: l })
  ] });
}
function ge({ search: s, filters: t, actions: i, className: n = "" }) {
  return /* @__PURE__ */ a("div", { className: `pt-sheet-toolbar ${n}`.trim(), children: [
    /* @__PURE__ */ a("div", { className: "pt-sheet-toolbar__leading", children: [
      s,
      t
    ] }),
    i ? /* @__PURE__ */ e("div", { className: "pt-sheet-toolbar__actions", children: i }) : null
  ] });
}
function Me({
  open: s,
  onClose: t,
  mode: i = "browse",
  onModeChange: n,
  title: c = "Booking notes",
  search: o,
  filters: l,
  children: d,
  compose: v,
  composeFooter: h,
  className: p = ""
}) {
  return w(() => {
    if (!s) return;
    const u = (m) => {
      m.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [s, t]), s ? /* @__PURE__ */ e("div", { className: `pt-nd-overlay ${p}`.trim(), role: "presentation", children: /* @__PURE__ */ a("div", { className: "pt-nd", role: "dialog", "aria-modal": "true", "aria-label": c, children: [
    /* @__PURE__ */ a("div", { className: "pt-nd__head", children: [
      /* @__PURE__ */ e("div", { className: "pt-nd__title", children: c }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "pt-nd__mode",
          onClick: () => n == null ? void 0 : n(i === "browse" ? "compose" : "browse"),
          children: i === "browse" ? "Write a note" : "Browse notes"
        }
      ),
      /* @__PURE__ */ e("button", { type: "button", className: "pt-nd__close", "aria-label": "Close", onClick: t, children: /* @__PURE__ */ e(f, { name: "clear", size: "sm" }) })
    ] }),
    i === "browse" ? /* @__PURE__ */ a("div", { className: "pt-nd__browse", children: [
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
    ] }) : /* @__PURE__ */ a("div", { className: "pt-nd__compose", children: [
      /* @__PURE__ */ e("div", { className: "pt-nd__compose-body", children: v }),
      /* @__PURE__ */ e("div", { className: "pt-nd__compose-foot", children: h ?? /* @__PURE__ */ a(r, { children: [
        /* @__PURE__ */ e(z, { variant: "ghost", size: "sm", onClick: () => n == null ? void 0 : n("browse"), children: "Cancel" }),
        /* @__PURE__ */ e(z, { variant: "primary", size: "sm", onClick: t, children: "Save note" })
      ] }) })
    ] })
  ] }) }) : null;
}
function ze({ items: s, className: t = "", ...i }) {
  return /* @__PURE__ */ e("div", { className: `pt-kpi-strip ${t}`.trim(), ...i, children: s.map((n) => {
    const o = `pt-kpi pt-kpi--${n.tone ?? "default"}`;
    return n.onClick ? /* @__PURE__ */ a("button", { type: "button", className: o, onClick: n.onClick, children: [
      n.icon ? /* @__PURE__ */ e("span", { className: "pt-kpi__ic", children: n.icon }) : null,
      /* @__PURE__ */ a("span", { className: "pt-kpi__text", children: [
        /* @__PURE__ */ e("span", { className: "pt-kpi__label", children: n.label }),
        /* @__PURE__ */ e("span", { className: "pt-kpi__value", children: n.value })
      ] })
    ] }, n.id) : /* @__PURE__ */ a("div", { className: o, children: [
      n.icon ? /* @__PURE__ */ e("span", { className: "pt-kpi__ic", children: n.icon }) : null,
      /* @__PURE__ */ a("span", { className: "pt-kpi__text", children: [
        /* @__PURE__ */ e("span", { className: "pt-kpi__label", children: n.label }),
        /* @__PURE__ */ e("span", { className: "pt-kpi__value", children: n.value })
      ] })
    ] }, n.id);
  }) });
}
export {
  fe as AppShell,
  X as Avatar,
  z as Button,
  Y as Checkbox,
  ke as CreditsMeter,
  le as DataSheet,
  he as DataSheetCell,
  oe as DataSheetHeader,
  de as DataSheetRow,
  we as DetailPage,
  ie as EmptyState,
  te as FilterSelect,
  B as ICON_NAMES,
  _ as ICON_REGISTRY,
  f as Icon,
  U as IconButton,
  ze as KpiStrip,
  pe as LeadCell,
  Ne as ListBulkBar,
  _e as ListPage,
  re as Modal,
  me as MoneyCell,
  P as NavGroup,
  F as NavItem,
  Me as NotesDrawer,
  be as NotesStrip,
  ye as OwnerCell,
  se as Pagination,
  ae as SearchField,
  ge as SheetToolbar,
  R as SidebarNav,
  C as SkipLink,
  ve as StackCell,
  ue as StackLine,
  J as StatusChip,
  ne as StatusSelect,
  I as Tab,
  T as TabBar,
  ce as TextField,
  Q as Tooltip,
  ee as getIconMeta,
  Z as resolveIconName
};
