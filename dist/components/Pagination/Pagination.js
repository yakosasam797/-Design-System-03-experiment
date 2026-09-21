import { jsxs as s, jsx as e } from "react/jsx-runtime";
/* empty css               */
import { Icon as d } from "../../icons/Icon.js";
function v({
  rangeLabel: t,
  page: i,
  pageCount: n,
  onPageChange: r,
  className: p = "",
  ...m
}) {
  const c = Math.max(1, n), a = Math.min(Math.max(1, i), c);
  return /* @__PURE__ */ s("div", { className: `pt-foot ${p}`.trim(), ...m, children: [
    /* @__PURE__ */ e("span", { className: "pt-foot__range", children: t }),
    /* @__PURE__ */ s("div", { className: "pt-pager", children: [
      /* @__PURE__ */ e(
        o,
        {
          disabled: a <= 1,
          "aria-label": "Previous page",
          onClick: () => r(a - 1),
          children: /* @__PURE__ */ e(l, { direction: "prev" })
        }
      ),
      /* @__PURE__ */ e(o, { active: !0, "aria-current": "page", children: a }),
      /* @__PURE__ */ e(
        o,
        {
          disabled: a >= c,
          "aria-label": "Next page",
          onClick: () => r(a + 1),
          children: /* @__PURE__ */ e(l, { direction: "next" })
        }
      )
    ] })
  ] });
}
function l({ direction: t }) {
  return /* @__PURE__ */ e(d, { name: t === "prev" ? "chevronLeft" : "chevronRight", size: 13 });
}
function o({ active: t = !1, className: i = "", children: n, ...r }) {
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: `pt-pg ${t ? "pt-pg--active" : ""} ${i}`.trim(),
      ...r,
      children: n
    }
  );
}
export {
  v as Pagination
};
