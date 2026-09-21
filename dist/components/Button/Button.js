import { jsxs as f, jsx as r } from "react/jsx-runtime";
/* empty css           */
function _({
  variant: t = "primary",
  size: n = "md",
  leadingIcon: o,
  trailingIcon: l,
  iconOnly: s = !1,
  className: p = "",
  type: e = "button",
  children: a,
  ...i
}) {
  const b = s ? "pt-btn--icon" : "", { "aria-label": c, ...m } = i, u = c ?? (s && typeof a == "string" ? a : void 0);
  return /* @__PURE__ */ f(
    "button",
    {
      type: e,
      className: `pt-btn pt-btn--${t} pt-btn--${n} ${b} ${p}`.trim(),
      "aria-label": u,
      ...m,
      children: [
        o ? /* @__PURE__ */ r("span", { className: "pt-btn__icon", children: o }) : null,
        s ? null : a,
        l ? /* @__PURE__ */ r("span", { className: "pt-btn__icon", children: l }) : null
      ]
    }
  );
}
function d({
  children: t,
  className: n = ""
}) {
  return /* @__PURE__ */ r("div", { className: `pt-row-acts ${n}`.trim(), children: t });
}
export {
  _ as Button,
  d as RowActions
};
