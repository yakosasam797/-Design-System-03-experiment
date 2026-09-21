import { jsxs as i, jsx as l } from "react/jsx-runtime";
import { TabBar as p } from "../../components/TabBar/TabBar.js";
/* empty css             */
function v({
  title: e,
  actions: s,
  tabs: t,
  tabValue: a,
  onTabChange: r,
  toolbar: c,
  children: d,
  bulk: n,
  footer: m
}) {
  return /* @__PURE__ */ i("div", { className: "pt-list", children: [
    /* @__PURE__ */ i("div", { className: "pt-list-head", children: [
      /* @__PURE__ */ l("h1", { className: "pt-title pt-list-head__title", children: e }),
      s ? /* @__PURE__ */ l("div", { className: "pt-list-head__acts", children: s }) : null
    ] }),
    t && a && r ? /* @__PURE__ */ l("div", { className: "pt-list-chrome", children: /* @__PURE__ */ l(p, { items: t, value: a, onValueChange: r, "aria-label": "List filters" }) }) : null,
    c ? /* @__PURE__ */ l("div", { className: "pt-list-toolbar", children: c }) : null,
    /* @__PURE__ */ i("div", { className: "pt-list-sheet", children: [
      d,
      n,
      m
    ] })
  ] });
}
function o({
  label: e,
  children: s
}) {
  return /* @__PURE__ */ i("div", { className: "pt-bulk", children: [
    /* @__PURE__ */ l("span", { className: "pt-bulk__lbl", children: e }),
    /* @__PURE__ */ l("div", { className: "pt-bulk__acts", children: s })
  ] });
}
export {
  o as ListBulkBar,
  v as ListPage
};
