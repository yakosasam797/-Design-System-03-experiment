import { jsxs as t, jsx as s } from "react/jsx-runtime";
/* empty css                 */
function n({ search: r, filters: l, actions: e, className: o = "" }) {
  return /* @__PURE__ */ t("div", { className: `pt-sheet-toolbar ${o}`.trim(), children: [
    /* @__PURE__ */ t("div", { className: "pt-sheet-toolbar__leading", children: [
      r,
      l
    ] }),
    e ? /* @__PURE__ */ s("div", { className: "pt-sheet-toolbar__actions", children: e }) : null
  ] });
}
export {
  n as SheetToolbar
};
