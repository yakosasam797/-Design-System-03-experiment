import { jsx as n, jsxs as l } from "react/jsx-runtime";
/* empty css              */
function f({
  children: e,
  loading: t = !1,
  loadingRows: s = 4,
  columns: a = 5,
  variant: r = "default",
  className: i = "",
  ...c
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet ${r === "booking" ? "pt-sheet--booking" : ""} ${i}`.trim(), ...c, children: /* @__PURE__ */ n("div", { className: "pt-sheet__scroll", children: t ? Array.from({ length: s }, (m, h) => /* @__PURE__ */ n("div", { className: "pt-sheet__row pt-sheet__row--loading", "aria-busy": "true", children: Array.from({ length: r === "booking" ? 7 : a }, (d, _) => /* @__PURE__ */ n("div", { className: "pt-sheet__cell", children: /* @__PURE__ */ n("span", { className: "pt-sheet__skeleton" }) }, _)) }, h)) : e }) });
}
function v({
  children: e,
  className: t = "",
  ...s
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__row pt-sheet__head ${t}`.trim(), ...s, children: e });
}
function N({
  children: e,
  className: t = "",
  ...s
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__row ${t}`.trim(), ...s, children: e });
}
function $({
  children: e,
  className: t = "",
  check: s,
  ...a
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__cell ${s ? "pt-sheet__cell--check" : ""} ${t}`.trim(), ...a, children: e });
}
function k({
  icon: e,
  title: t,
  subtitle: s,
  className: a = "",
  align: r = "center"
}) {
  return /* @__PURE__ */ l("div", { className: `pt-sheet__lead ${r === "start" ? "pt-sheet__lead--start" : ""} ${a}`.trim(), children: [
    e,
    /* @__PURE__ */ l("div", { style: { minWidth: 0 }, children: [
      /* @__PURE__ */ n("div", { className: "pt-sheet__title", children: t }),
      s == null ? null : typeof s == "string" || typeof s == "number" ? /* @__PURE__ */ n("div", { className: "pt-sheet__sub", children: s }) : s
    ] })
  ] });
}
function y({
  children: e,
  className: t = ""
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__stack ${t}`.trim(), children: e });
}
function g({
  icon: e,
  children: t,
  muted: s,
  mono: a,
  className: r = ""
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: `pt-sheet__line ${s ? "pt-sheet__line--muted" : ""} ${a ? "pt-mono" : ""} ${r}`.trim(),
      children: [
        e,
        t
      ]
    }
  );
}
function w({
  amount: e,
  chip: t,
  className: s = ""
}) {
  return /* @__PURE__ */ l("div", { className: `pt-sheet__money ${s}`.trim(), children: [
    /* @__PURE__ */ n("span", { className: "pt-mono pt-sheet__amount", children: e }),
    t
  ] });
}
function C({
  children: e,
  className: t = ""
}) {
  return /* @__PURE__ */ n("div", { className: `pt-sheet__owner ${t}`.trim(), children: e });
}
export {
  f as DataSheet,
  $ as DataSheetCell,
  v as DataSheetHeader,
  N as DataSheetRow,
  k as LeadCell,
  w as MoneyCell,
  C as OwnerCell,
  y as StackCell,
  g as StackLine
};
