import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { Avatar as m } from "../Avatar/Avatar.js";
/* empty css                */
import { Icon as p } from "../../icons/Icon.js";
function A({
  name: t,
  initials: r,
  tone: n = "pink",
  className: c = "",
  type: i = "button",
  ...a
}) {
  return /* @__PURE__ */ e(
    "button",
    {
      type: i,
      className: `pt-acct ${c}`.trim(),
      "aria-label": `Account, ${t}`,
      "data-tip": `${t} · Account`,
      ...a,
      children: [
        /* @__PURE__ */ o(m, { tone: n, size: 26, children: r }),
        /* @__PURE__ */ o(p, { name: "chevronDown", size: 13 })
      ]
    }
  );
}
export {
  A as AccountMenu
};
