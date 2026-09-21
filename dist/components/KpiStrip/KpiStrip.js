import { jsx as a, jsxs as n } from "react/jsx-runtime";
/* empty css             */
function o({ items: p, className: c = "", ...i }) {
  return /* @__PURE__ */ a("div", { className: `pt-kpi-strip ${c}`.trim(), ...i, children: p.map((l) => {
    const s = `pt-kpi pt-kpi--${l.tone ?? "default"}`;
    return l.onClick ? /* @__PURE__ */ n("button", { type: "button", className: s, onClick: l.onClick, children: [
      l.icon ? /* @__PURE__ */ a("span", { className: "pt-kpi__ic", children: l.icon }) : null,
      /* @__PURE__ */ n("span", { className: "pt-kpi__text", children: [
        /* @__PURE__ */ a("span", { className: "pt-kpi__label", children: l.label }),
        /* @__PURE__ */ a("span", { className: "pt-kpi__value", children: l.value })
      ] })
    ] }, l.id) : /* @__PURE__ */ n("div", { className: s, children: [
      l.icon ? /* @__PURE__ */ a("span", { className: "pt-kpi__ic", children: l.icon }) : null,
      /* @__PURE__ */ n("span", { className: "pt-kpi__text", children: [
        /* @__PURE__ */ a("span", { className: "pt-kpi__label", children: l.label }),
        /* @__PURE__ */ a("span", { className: "pt-kpi__value", children: l.value })
      ] })
    ] }, l.id);
  }) });
}
export {
  o as KpiStrip
};
