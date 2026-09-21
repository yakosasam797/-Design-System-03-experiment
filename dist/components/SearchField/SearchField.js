import { jsxs as t, jsx as r } from "react/jsx-runtime";
/* empty css                */
import { Icon as l } from "../../icons/Icon.js";
function p({
  className: e = "",
  fullWidth: a = !1,
  placeholder: i = "Search",
  "aria-label": c = "Search",
  ...s
}) {
  return /* @__PURE__ */ t("div", { className: `pt-search ${a ? "pt-search--full" : ""} ${e}`.trim(), children: [
    /* @__PURE__ */ r(l, { name: "search", size: 16 }),
    /* @__PURE__ */ r("input", { type: "search", placeholder: i, "aria-label": c, ...s })
  ] });
}
export {
  p as SearchField
};
