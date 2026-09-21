import { jsx as o } from "react/jsx-runtime";
/* empty css               */
import { Icon as i } from "../../icons/Icon.js";
function p({
  label: t = "Back",
  className: r = "",
  type: n = "button",
  ...a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: n,
      className: `pt-back-btn ${r}`.trim(),
      "aria-label": t,
      "data-tip": t,
      ...a,
      children: /* @__PURE__ */ o(i, { name: "chevronLeft", size: 16 })
    }
  );
}
export {
  p as BackButton
};
