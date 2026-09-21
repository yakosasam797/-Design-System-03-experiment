import { jsxs as e, jsx as l } from "react/jsx-runtime";
/* empty css               */
function p({
  title: c,
  status: i,
  meta: a,
  owners: d,
  actions: t,
  tabs: s,
  children: _,
  className: r = ""
}) {
  return /* @__PURE__ */ e("div", { className: `pt-detail ${r}`.trim(), children: [
    /* @__PURE__ */ e("header", { className: "pt-detail__header", children: [
      /* @__PURE__ */ e("div", { className: "pt-detail__title-row", children: [
        /* @__PURE__ */ e("div", { className: "pt-detail__title-block", children: [
          /* @__PURE__ */ l("h1", { className: "pt-detail__title", children: c }),
          i ? /* @__PURE__ */ l("div", { className: "pt-detail__status", children: i }) : null
        ] }),
        /* @__PURE__ */ e("div", { className: "pt-detail__aside", children: [
          d ? /* @__PURE__ */ l("div", { className: "pt-detail__owners", children: d }) : null,
          t ? /* @__PURE__ */ l("div", { className: "pt-detail__actions", children: t }) : null
        ] })
      ] }),
      a ? /* @__PURE__ */ l("div", { className: "pt-detail__meta", children: a }) : null
    ] }),
    s ? /* @__PURE__ */ l("div", { className: "pt-detail__tabs", children: s }) : null,
    /* @__PURE__ */ l("div", { className: "pt-detail__body", children: _ })
  ] });
}
export {
  p as DetailPage
};
