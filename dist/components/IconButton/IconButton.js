import { jsxs as i, jsx as l } from "react/jsx-runtime";
/* empty css               */
function u({
  children: t,
  alert: n = !1,
  label: a,
  className: r = "",
  type: o = "button",
  ...e
}) {
  return /* @__PURE__ */ i(
    "button",
    {
      type: o,
      className: `pt-icon-btn ${r}`.trim(),
      "aria-label": a,
      ...e,
      children: [
        t,
        n ? /* @__PURE__ */ l("span", { className: "pt-icon-btn__alert", "aria-hidden": "true" }) : null
      ]
    }
  );
}
export {
  u as IconButton
};
