import { jsxs as a, jsx as t } from "react/jsx-runtime";
/* empty css               */
import { Icon as l } from "../../icons/Icon.js";
const m = /* @__PURE__ */ t(l, { name: "fileText", size: 16 });
function d({
  label: o,
  icon: i = m,
  badge: e,
  tip: r = "Notes",
  addTip: n = "Write a note",
  onOpen: c,
  onAdd: s,
  className: p = ""
}) {
  return /* @__PURE__ */ a("div", { className: `pt-notes ${p}`.trim(), children: [
    /* @__PURE__ */ a("button", { type: "button", className: "pt-notes__main", "data-tip": r, onClick: c, children: [
      i,
      /* @__PURE__ */ t("span", { className: "pt-notes__txt", children: o }),
      e != null && e !== !1 ? /* @__PURE__ */ t("span", { className: "pt-notes__badge", children: e }) : null
    ] }),
    s ? /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: "pt-notes__add",
        "data-tip": n,
        "aria-label": n,
        onClick: s,
        children: /* @__PURE__ */ t(l, { name: "plus", size: 16 })
      }
    ) : null
  ] });
}
export {
  d as NotesStrip
};
