import { jsxs as s, jsx as e } from "react/jsx-runtime";
/* empty css               */
import { Icon as a } from "../../icons/Icon.js";
function u({
  title: p,
  description: l,
  icon: t,
  action: i,
  variant: m = "illustrated",
  className: r = "",
  ...d
}) {
  return /* @__PURE__ */ s("div", { className: `pt-empty pt-empty--${m} ${r}`.trim(), ...d, children: [
    m === "illustrated" ? t ? /* @__PURE__ */ e("div", { className: "pt-empty__ic", children: t }) : /* @__PURE__ */ e("div", { className: "pt-empty__ic", "aria-hidden": "true", children: /* @__PURE__ */ e(a, { name: "pin", size: "lg" }) }) : t ? /* @__PURE__ */ e("div", { className: "pt-empty__ic", children: t }) : null,
    /* @__PURE__ */ e("h4", { children: p }),
    l ? /* @__PURE__ */ e("p", { children: l }) : null,
    i ? /* @__PURE__ */ e("div", { className: "pt-empty__action", children: i }) : null
  ] });
}
export {
  u as EmptyState
};
