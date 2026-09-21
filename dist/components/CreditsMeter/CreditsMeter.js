import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { Button as p } from "../Button/Button.js";
/* empty css                 */
import { Icon as l } from "../../icons/Icon.js";
const h = /* @__PURE__ */ t(l, { name: "credits", size: "md" });
function v({
  remaining: e,
  total: i,
  tip: c,
  upgradeLabel: s = "Upgrade",
  onUpgrade: d,
  upgrade: a,
  className: n = ""
}) {
  const o = i > 0 ? Math.min(100, Math.round(e / i * 100)) : 0, m = c ?? `${e.toLocaleString()} of ${i.toLocaleString()} credits remaining this cycle`;
  return /* @__PURE__ */ r("div", { className: `pt-credits ${n}`.trim(), "data-tip": m, children: [
    /* @__PURE__ */ t("div", { className: "pt-credits__ic", "aria-hidden": "true", children: h }),
    /* @__PURE__ */ r("div", { className: "pt-credits__info", children: [
      /* @__PURE__ */ r("span", { className: "pt-credits__num", children: [
        e.toLocaleString(),
        " / ",
        i.toLocaleString()
      ] }),
      /* @__PURE__ */ t("div", { className: "pt-credits__bar", "aria-hidden": "true", children: /* @__PURE__ */ t("i", { style: { width: `${o}%` } }) })
    ] }),
    a ?? /* @__PURE__ */ t(p, { variant: "primary", size: "sm", className: "pt-credits__up", onClick: d, children: s })
  ] });
}
export {
  v as CreditsMeter
};
