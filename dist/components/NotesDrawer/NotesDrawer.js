import { jsx as e, jsxs as l, Fragment as u } from "react/jsx-runtime";
import { useEffect as N } from "react";
import { Button as m } from "../Button/Button.js";
import { Icon as w } from "../../icons/Icon.js";
/* empty css                */
function x({
  open: a,
  onClose: i,
  mode: s = "browse",
  onModeChange: r,
  title: n = "Booking notes",
  search: d,
  filters: c,
  children: o,
  compose: p,
  composeFooter: _,
  className: v = ""
}) {
  return N(() => {
    if (!a) return;
    const t = (b) => {
      b.key === "Escape" && (i == null || i());
    };
    return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
  }, [a, i]), a ? /* @__PURE__ */ e("div", { className: `pt-nd-overlay ${v}`.trim(), role: "presentation", children: /* @__PURE__ */ l("div", { className: "pt-nd", role: "dialog", "aria-modal": "true", "aria-label": n, children: [
    /* @__PURE__ */ l("div", { className: "pt-nd__head", children: [
      /* @__PURE__ */ e("div", { className: "pt-nd__title", children: n }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "pt-nd__mode",
          onClick: () => r == null ? void 0 : r(s === "browse" ? "compose" : "browse"),
          children: s === "browse" ? "Write a note" : "Browse notes"
        }
      ),
      /* @__PURE__ */ e("button", { type: "button", className: "pt-nd__close", "aria-label": "Close", onClick: i, children: /* @__PURE__ */ e(w, { name: "clear", size: "sm" }) })
    ] }),
    s === "browse" ? /* @__PURE__ */ l("div", { className: "pt-nd__browse", children: [
      d ? /* @__PURE__ */ e("div", { className: "pt-nd__search", children: d }) : null,
      c && c.length > 0 ? /* @__PURE__ */ e("div", { className: "pt-nd__filters", role: "tablist", "aria-label": "Note filters", children: c.map((t) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": !!t.active,
          className: `pt-nd-fil ${t.active ? "is-active" : ""}`,
          onClick: t.onSelect,
          children: t.label
        },
        t.id
      )) }) : null,
      /* @__PURE__ */ e("div", { className: "pt-nd__list", children: o })
    ] }) : /* @__PURE__ */ l("div", { className: "pt-nd__compose", children: [
      /* @__PURE__ */ e("div", { className: "pt-nd__compose-body", children: p }),
      /* @__PURE__ */ e("div", { className: "pt-nd__compose-foot", children: _ ?? /* @__PURE__ */ l(u, { children: [
        /* @__PURE__ */ e(m, { variant: "ghost", size: "sm", onClick: () => r == null ? void 0 : r("browse"), children: "Cancel" }),
        /* @__PURE__ */ e(m, { variant: "primary", size: "sm", onClick: i, children: "Save note" })
      ] }) })
    ] })
  ] }) }) : null;
}
export {
  x as NotesDrawer
};
