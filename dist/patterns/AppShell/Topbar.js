import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { isValidElement as B } from "react";
import { BackButton as g } from "../../components/BackButton/BackButton.js";
import { Breadcrumbs as y } from "../../components/Breadcrumbs/Breadcrumbs.js";
import { AccountMenu as A } from "../../components/AccountMenu/AccountMenu.js";
import { TopbarActions as S } from "../../components/TopbarActions/TopbarActions.js";
import { SearchField as j } from "../../components/SearchField/SearchField.js";
function x(e) {
  return !!e && typeof e == "object" && !B(e) && !Array.isArray(e);
}
function M({
  showBack: e = !1,
  onBack: t,
  backLabel: m = "Back",
  leading: c,
  breadcrumbs: l,
  crumbs: i,
  search: o,
  actions: s,
  account: r,
  onSettings: p,
  onHelp: d,
  onCallLogs: f,
  onNotifications: u,
  notificationsAlert: b = !1
}) {
  const h = x(o) ? /* @__PURE__ */ a(
    j,
    {
      placeholder: o.placeholder ?? "Search anything",
      "aria-label": o["aria-label"] ?? "Search the workspace",
      value: o.value,
      defaultValue: o.defaultValue,
      onChange: o.onChange
    }
  ) : o, C = l ? /* @__PURE__ */ a(y, { items: l }) : i ? /* @__PURE__ */ a("nav", { className: "pt-crumbs", "aria-label": "Breadcrumb", children: i }) : null, k = s ?? /* @__PURE__ */ a(
    S,
    {
      onSettings: p,
      onHelp: d,
      onCallLogs: f,
      onNotifications: u,
      notificationsAlert: b
    }
  ), N = r ? /* @__PURE__ */ a(
    A,
    {
      name: r.name,
      initials: r.initials,
      tone: r.tone,
      onClick: r.onClick
    }
  ) : null;
  return /* @__PURE__ */ n("div", { className: "pt-topbar", children: [
    c ?? (e ? /* @__PURE__ */ a(g, { label: m, onClick: t }) : null),
    C,
    h,
    /* @__PURE__ */ n("div", { className: "pt-topbar__actions", children: [
      k,
      N
    ] })
  ] });
}
export {
  M as Topbar
};
