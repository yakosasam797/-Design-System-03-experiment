import { jsxs as e, jsx as a } from "react/jsx-runtime";
import { Icon as l } from "../../icons/Icon.js";
const m = /* @__PURE__ */ e("svg", { width: "17", height: "17", viewBox: "0 0 32 32", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ a(
    "path",
    {
      d: "M4 8.5C4 6.6 5.6 5 7.5 5h13.8c4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6h-6.1l-8 6.4c-1.4 1.1-3.2.1-3.2-1.6V8.5Z",
      fill: "var(--on-brand)"
    }
  ),
  /* @__PURE__ */ a("path", { d: "M11 12.4h9.4", stroke: "var(--accent)", strokeWidth: "2.4", strokeLinecap: "round" })
] }), b = /* @__PURE__ */ a(l, { name: "chevronDown", size: 15 });
function v({
  brandName: s = "paryatech",
  brandMark: i,
  brandAction: d,
  notes: n,
  listMode: p = !1,
  children: o,
  footer: h,
  collapsed: r = !1,
  onToggleCollapsed: t
}) {
  const c = d === void 0 ? b : d;
  return /* @__PURE__ */ e("aside", { className: "pt-side", "aria-label": "Sidebar", children: [
    /* @__PURE__ */ e("div", { className: "pt-side__top", children: [
      /* @__PURE__ */ a("span", { className: "pt-brand-mark", children: i ?? m }),
      /* @__PURE__ */ a("span", { className: "pt-brand-name", children: s }),
      c ? /* @__PURE__ */ a("span", { className: "pt-brand-action", children: c }) : null
    ] }),
    !p && n ? /* @__PURE__ */ a("div", { className: "pt-side__notes", children: n }) : null,
    /* @__PURE__ */ a("div", { className: "pt-side__scroll", children: o }),
    /* @__PURE__ */ e("div", { className: "pt-side__foot", children: [
      h,
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "pt-side-collapse",
          "data-tip": r ? "Expand sidebar" : "Collapse sidebar",
          "aria-expanded": !r,
          "aria-label": r ? "Expand sidebar" : "Collapse sidebar",
          onClick: () => t == null ? void 0 : t(),
          children: [
            /* @__PURE__ */ a(l, { name: "collapse", size: 16 }),
            /* @__PURE__ */ a("span", { className: "pt-side-collapse__txt", children: "Collapse" })
          ]
        }
      )
    ] })
  ] });
}
function N({
  children: s,
  className: i = ""
}) {
  return /* @__PURE__ */ a("div", { className: `pt-sidebar-footer ${i}`.trim(), children: s });
}
export {
  v as Sidebar,
  N as SidebarFooter
};
