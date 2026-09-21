import { jsxs as c, jsx as n } from "react/jsx-runtime";
/* empty css           */
function d({
  items: t,
  value: r,
  onValueChange: l,
  className: e = "",
  "aria-label": i = "Tabs",
  ...b
}) {
  return /* @__PURE__ */ n("div", { className: `pt-tabbar ${e}`.trim(), role: "tablist", "aria-label": i, ...b, children: t.map((a) => /* @__PURE__ */ n(
    s,
    {
      active: a.id === r,
      count: a.count,
      onClick: () => l(a.id),
      children: a.label
    },
    a.id
  )) });
}
function s({ active: t = !1, count: r, children: l, className: e = "", ...i }) {
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": t,
      className: `pt-tab ${t ? "pt-tab--active" : ""} ${e}`.trim(),
      ...i,
      children: [
        l,
        typeof r == "number" ? /* @__PURE__ */ n("span", { className: "pt-tab__chip", children: r }) : null
      ]
    }
  );
}
export {
  s as Tab,
  d as TabBar
};
