import { jsx as p } from "react/jsx-runtime";
/* empty css             */
function k({
  href: i,
  children: t = "Skip to main content",
  className: n = "",
  ...o
}) {
  return /* @__PURE__ */ p("a", { href: i, className: `pt-skip-link ${n}`.trim(), ...o, children: t });
}
export {
  k as SkipLink
};
