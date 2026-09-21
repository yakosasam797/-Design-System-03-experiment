import { jsxs as f, jsx as o } from "react/jsx-runtime";
import { useState as x, useRef as y, useId as E, useEffect as N } from "react";
import { Icon as w } from "../../icons/Icon.js";
/* empty css                 */
function h({
  value: a,
  options: i,
  onChange: l,
  label: r = "Status",
  className: v = "",
  ...b
}) {
  const [s, n] = x(!1), d = y(null), p = E(), t = i.find((e) => e.value === a) ?? i[0], k = (t == null ? void 0 : t.tone) ?? "open";
  return N(() => {
    if (!s) return;
    const e = (c) => {
      var u;
      (u = d.current) != null && u.contains(c.target) || n(!1);
    }, m = (c) => {
      c.key === "Escape" && n(!1);
    };
    return document.addEventListener("mousedown", e), document.addEventListener("keydown", m), () => {
      document.removeEventListener("mousedown", e), document.removeEventListener("keydown", m);
    };
  }, [s]), /* @__PURE__ */ f("div", { ref: d, className: `pt-st-dd ${s ? "is-open" : ""} ${v}`.trim(), children: [
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: `pt-st-pick pt-st-pick--${k}`,
        "aria-label": r,
        "aria-haspopup": "listbox",
        "aria-expanded": s,
        "aria-controls": p,
        onClick: () => n((e) => !e),
        ...b,
        children: [
          /* @__PURE__ */ o("span", { className: "pt-st-pick__label", children: (t == null ? void 0 : t.label) ?? a }),
          /* @__PURE__ */ o(w, { name: "chevronDown", size: 12, className: "pt-st-pick__caret" })
        ]
      }
    ),
    s ? /* @__PURE__ */ o("div", { className: "pt-st-menu", role: "listbox", id: p, "aria-label": r, children: i.map((e) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        role: "option",
        className: `pt-st-opt pt-st-opt--${e.tone}`,
        "aria-selected": e.value === a,
        onClick: () => {
          l == null || l(e.value), n(!1);
        },
        children: e.label
      },
      e.value
    )) }) : null
  ] });
}
export {
  h as StatusSelect
};
