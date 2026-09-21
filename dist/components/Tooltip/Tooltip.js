import { jsx as o } from "react/jsx-runtime";
/* empty css            */
function m({ tip: t, children: p, className: i = "" }) {
  return /* @__PURE__ */ o("span", { className: `pt-tip ${i}`.trim(), "data-tip": t, children: p });
}
export {
  m as Tooltip
};
