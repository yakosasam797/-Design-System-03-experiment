import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { useState as I, isValidElement as J } from "react";
import { SkipLink as K } from "../../components/SkipLink/SkipLink.js";
import { SidebarNav as Q } from "../../components/SidebarNav/SidebarNav.js";
import { NotesStrip as R } from "../../components/NotesStrip/NotesStrip.js";
import { CreditsMeter as W } from "../../components/CreditsMeter/CreditsMeter.js";
import { Sidebar as X } from "./Sidebar.js";
import { Topbar as Y } from "./Topbar.js";
/* empty css             */
function Z(t) {
  return J(t) || Array.isArray(t) || typeof t == "string";
}
function _(t) {
  return !!t && typeof t == "object" && !Z(t) && "label" in t;
}
function nt({
  variant: t,
  brandName: m = "paryatech",
  brandMark: f,
  brandAction: b,
  skipHref: h = "#main",
  skipLabel: N = "Skip to main content",
  nav: k,
  navGroups: n,
  notes: i,
  sidebarFooter: S,
  credits: s,
  leading: y,
  breadcrumbs: A,
  crumbs: g,
  onBack: u,
  backLabel: L,
  search: T,
  actions: j,
  account: v,
  onSettings: w,
  onHelp: x,
  onCallLogs: B,
  onNotifications: E,
  notificationsAlert: M = !1,
  children: O,
  listMode: V,
  defaultCollapsed: $ = !1,
  collapsed: l,
  onCollapsedChange: o
}) {
  const c = t ?? (V ? "list" : "detail"), e = c === "list", [U, q] = I($), a = l ?? U, z = (d) => {
    o == null || o(d), l === void 0 && q(d);
  }, D = n ? /* @__PURE__ */ r(Q, { groups: n }) : k, F = _(i) ? /* @__PURE__ */ r(
    R,
    {
      label: i.label,
      badge: i.badge,
      onOpen: i.onOpen,
      onAdd: i.onAdd,
      tip: i.tip,
      addTip: i.addTip
    }
  ) : i, H = S ?? (s ? /* @__PURE__ */ r(W, { ...s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: `pt-frame ${a ? "pt-frame--collapsed" : ""} ${e ? "pt-frame--list" : ""}`,
      "data-shell-variant": c,
      children: [
        /* @__PURE__ */ r(K, { href: h, children: N }),
        /* @__PURE__ */ r(
          X,
          {
            brandName: m,
            brandMark: f,
            brandAction: b,
            notes: F,
            listMode: e,
            footer: H,
            collapsed: a,
            onToggleCollapsed: () => z(!a),
            children: D
          }
        ),
        /* @__PURE__ */ p("main", { className: "pt-workspace", children: [
          /* @__PURE__ */ r(
            Y,
            {
              showBack: !e,
              onBack: u,
              backLabel: L ?? "Back",
              leading: y,
              breadcrumbs: A,
              crumbs: g,
              search: T ?? { placeholder: "Search anything" },
              actions: j,
              account: v,
              onSettings: w,
              onHelp: x,
              onCallLogs: B,
              onNotifications: E,
              notificationsAlert: M
            }
          ),
          /* @__PURE__ */ r("div", { className: "pt-scroll", children: /* @__PURE__ */ r("div", { className: "pt-content", id: "main", children: O }) })
        ] })
      ]
    }
  );
}
export {
  nt as AppShell
};
