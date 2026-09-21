import { jsxs as m, jsx as n, Fragment as u } from "react/jsx-runtime";
/* empty css               */
function h({
  label: t,
  icon: l,
  href: i,
  active: e = !1,
  tip: a,
  badge: r,
  onSelect: c,
  className: v = "",
  ...s
}) {
  const p = `pt-nav-item ${e ? "pt-nav-item--active" : ""} ${v}`.trim(), d = a ?? t, o = /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ n("span", { className: "pt-nav-item__icon", "aria-hidden": "true", children: l }),
    /* @__PURE__ */ n("span", { className: "pt-nav-item__label", children: t }),
    r != null && r !== !1 ? /* @__PURE__ */ n("span", { className: "pt-nav-item__badge", children: r }) : null
  ] });
  return i ? /* @__PURE__ */ n(
    "a",
    {
      href: i,
      className: p,
      "data-tip": d,
      "aria-current": e ? "page" : void 0,
      onClick: c,
      ...s,
      children: o
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: p,
      "data-tip": d,
      "aria-current": e ? "page" : void 0,
      onClick: c,
      ...s,
      children: o
    }
  );
}
function b({ label: t, children: l, className: i = "" }) {
  return /* @__PURE__ */ m("div", { className: `pt-nav-group ${i}`.trim(), children: [
    /* @__PURE__ */ n("div", { className: "pt-nav-group__label", children: t }),
    l
  ] });
}
function _({
  groups: t,
  className: l = "",
  "aria-label": i = "Primary"
}) {
  return /* @__PURE__ */ n("nav", { className: `pt-sidenav ${l}`.trim(), "aria-label": i, children: t.map((e) => /* @__PURE__ */ n(b, { label: e.label, children: e.items.map((a) => /* @__PURE__ */ n(
    h,
    {
      label: a.label,
      icon: a.icon,
      href: a.href,
      active: a.active,
      tip: a.tip,
      badge: a.badge,
      onSelect: a.onSelect
    },
    a.id
  )) }, e.id)) });
}
export {
  b as NavGroup,
  h as NavItem,
  _ as SidebarNav
};
