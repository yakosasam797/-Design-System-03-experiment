import { jsx as l, jsxs as t } from "react/jsx-runtime";
import { Fragment as s } from "react";
/* empty css                */
import { Icon as u } from "../../icons/Icon.js";
function i({ items: c, className: e = "" }) {
  return /* @__PURE__ */ l("nav", { className: `pt-crumbs ${e}`.trim(), "aria-label": "Breadcrumb", children: c.map((r, a) => {
    const o = a === c.length - 1;
    return /* @__PURE__ */ t(s, { children: [
      a > 0 ? /* @__PURE__ */ l(u, { name: "chevronRight", size: 13, "aria-hidden": "true" }) : null,
      o ? /* @__PURE__ */ l("span", { className: "pt-crumb pt-crumb--current", children: r.label }) : r.href ? /* @__PURE__ */ l(
        "a",
        {
          className: "pt-crumb",
          href: r.href,
          onClick: (n) => {
            r.onClick && (n.preventDefault(), r.onClick(n));
          },
          children: r.label
        }
      ) : /* @__PURE__ */ l("button", { type: "button", className: "pt-crumb", onClick: r.onClick, children: r.label })
    ] }, `${a}-${String(r.label)}`);
  }) });
}
export {
  i as Breadcrumbs
};
