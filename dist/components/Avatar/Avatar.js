import { jsx as n } from "react/jsx-runtime";
/* empty css           */
function v({
  children: a,
  tone: r = "default",
  size: t = 30,
  className: m = "",
  style: p,
  ...o
}) {
  const s = t <= 26;
  return /* @__PURE__ */ n(
    "span",
    {
      className: `pt-avatar ${s ? "pt-avatar--sm" : ""} pt-avatar--${r} ${m}`.trim(),
      style: { width: t, height: t, ...p },
      ...o,
      children: a
    }
  );
}
export {
  v as Avatar
};
