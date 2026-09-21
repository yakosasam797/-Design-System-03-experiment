import { jsxs as u, jsx as n } from "react/jsx-runtime";
import { useState as N, useRef as w, useId as E, useEffect as I } from "react";
/* empty css                 */
import { Icon as p } from "../../icons/Icon.js";
function z({
  label: m = "Filter",
  options: o,
  value: r,
  onChange: d,
  tip: f,
  className: b = "",
  ...h
}) {
  var s;
  const [t, l] = N(!1), i = w(null), a = E(), v = ((s = o.find((e) => e.value === r)) == null ? void 0 : s.label) ?? m;
  return I(() => {
    if (!t) return;
    const e = (x) => {
      var c;
      (c = i.current) != null && c.contains(x.target) || l(!1);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [t]), /* @__PURE__ */ u(
    "div",
    {
      ref: i,
      className: `pt-filter ${t ? "pt-filter--open" : ""} ${b}`.trim(),
      "data-tip": t ? void 0 : f,
      ...h,
      children: [
        /* @__PURE__ */ n(p, { name: "filter", size: 15 }),
        /* @__PURE__ */ u(
          "button",
          {
            type: "button",
            className: "pt-filter-btn",
            "aria-haspopup": "listbox",
            "aria-expanded": t,
            "aria-controls": a,
            onClick: () => l((e) => !e),
            children: [
              /* @__PURE__ */ n("span", { className: "pt-filter-btn__label", children: v }),
              /* @__PURE__ */ n(p, { name: "chevronDown", size: 13, className: "pt-filter-caret" })
            ]
          }
        ),
        t ? /* @__PURE__ */ n("div", { className: "pt-choice-menu", role: "listbox", id: a, children: o.map((e) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            role: "option",
            "aria-selected": e.value === r,
            className: `pt-choice-opt ${e.value === r ? "pt-choice-opt--on" : ""}`,
            onClick: () => {
              d(e.value), l(!1);
            },
            children: e.label
          },
          e.value
        )) }) : null
      ]
    }
  );
}
export {
  z as FilterSelect
};
