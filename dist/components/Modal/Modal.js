import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useEffect as o } from "react";
/* empty css          */
function h({
  open: r,
  onClose: t,
  eyebrow: d,
  title: m,
  children: c,
  footer: i,
  size: n = "default",
  className: u = "",
  ...s
}) {
  return o(() => {
    if (!r) return;
    const a = (p) => {
      p.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [r, t]), r ? /* @__PURE__ */ e(
    "div",
    {
      className: "pt-modal-overlay",
      role: "presentation",
      onMouseDown: (a) => {
        a.target === a.currentTarget && (t == null || t());
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          className: `pt-modal pt-modal--${n} ${u}`.trim(),
          role: "dialog",
          "aria-modal": "true",
          ...s,
          children: [
            /* @__PURE__ */ l("div", { className: "pt-modal__head", children: [
              d ? /* @__PURE__ */ e("p", { className: "pt-modal__eyebrow", children: d }) : null,
              /* @__PURE__ */ e("h2", { className: "pt-modal__title", children: m })
            ] }),
            /* @__PURE__ */ e("div", { className: "pt-modal__body", children: c }),
            i ? /* @__PURE__ */ e("div", { className: "pt-modal__foot", children: i }) : null
          ]
        }
      )
    }
  ) : null;
}
export {
  h as Modal
};
