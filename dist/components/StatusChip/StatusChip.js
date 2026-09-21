import { jsx as o } from "react/jsx-runtime";
/* empty css               */
function n({
  tone: t = "open",
  children: p,
  className: r = "",
  ...s
}) {
  return /* @__PURE__ */ o("span", { className: `pt-st pt-st--${t} ${r}`.trim(), ...s, children: p });
}
export {
  n as StatusChip
};
