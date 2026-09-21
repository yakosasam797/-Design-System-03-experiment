import { jsx as r } from "react/jsx-runtime";
/* empty css             */
function d({
  state: o = "off",
  onCheckedChange: i,
  label: e,
  className: n = "",
  ...t
}) {
  const c = () => {
    i && i(o === "off" ? "on" : o === "on" ? "off" : "on");
  };
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      role: "checkbox",
      "aria-checked": o === "indeterminate" ? "mixed" : o === "on",
      "aria-label": e,
      className: `pt-cbx ${o !== "off" ? "pt-cbx--on" : ""} ${o === "indeterminate" ? "pt-cbx--some" : ""} ${n}`.trim(),
      onClick: c,
      ...t,
      children: o === "indeterminate" ? /* @__PURE__ */ r("span", { className: "pt-cbx__dash" }) : /* @__PURE__ */ r("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ r("path", { d: "m5 12 5 5L20 7" }) })
    }
  );
}
export {
  d as Checkbox
};
