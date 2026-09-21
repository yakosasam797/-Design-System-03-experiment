import { jsxs as c, jsx as t } from "react/jsx-runtime";
/* empty css              */
function d(a) {
  const { label: e, hint: l, className: m = "", id: r, multiline: n, ...s } = a, i = r ?? (typeof e == "string" ? `pt-tf-${e.replace(/\s+/g, "-").toLowerCase()}` : void 0);
  return /* @__PURE__ */ c("div", { className: `pt-mf ${m}`.trim(), children: [
    /* @__PURE__ */ t("label", { className: "pt-mf__l", htmlFor: i, children: e }),
    n ? /* @__PURE__ */ t(
      "textarea",
      {
        id: i,
        className: "pt-mf__i",
        ...s
      }
    ) : /* @__PURE__ */ t("input", { id: i, className: "pt-mf__i", ...s }),
    l ? /* @__PURE__ */ t("p", { className: "pt-mf__hint", children: l }) : null
  ] });
}
export {
  d as TextField
};
