import { jsxs as c, jsx as d } from "react/jsx-runtime";
import { resolveIconName as m, ICON_REGISTRY as l } from "./registry.js";
import { ICON_NAMES as C, getIconMeta as N } from "./registry.js";
const s = {
  "2xs": 11,
  xs: 13,
  sm: 14,
  md: 15,
  nav: 17,
  lg: 20
};
function g({ name: e, size: o = "md", title: r, className: h = "", style: u, ...a }) {
  const t = m(e) ?? (e in l ? e : void 0);
  if (!t)
    return null;
  const n = l[t], v = !r, f = typeof o == "number" ? { width: o, height: o } : {
    width: `var(--icon-size-${o}, ${s[o]}px)`,
    height: `var(--icon-size-${o}, ${s[o]}px)`
  }, i = {
    viewBox: "0 0 24 24",
    className: h,
    style: { ...f, ...u },
    "data-icon": t,
    "aria-hidden": v ? !0 : void 0,
    role: r ? "img" : void 0,
    ...a
  };
  return n.fill ? /* @__PURE__ */ c("svg", { fill: "currentColor", ...i, children: [
    r ? /* @__PURE__ */ d("title", { children: r }) : null,
    n.paths
  ] }) : /* @__PURE__ */ c(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: n.strokeWidth ?? "var(--icon-stroke-default, 1.7)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...i,
      children: [
        r ? /* @__PURE__ */ d("title", { children: r }) : null,
        n.paths
      ]
    }
  );
}
export {
  C as ICON_NAMES,
  l as ICON_REGISTRY,
  g as Icon,
  N as getIconMeta,
  m as resolveIconName
};
