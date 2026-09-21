import { jsxs as c, jsx as n } from "react/jsx-runtime";
import { IconButton as e } from "../IconButton/IconButton.js";
/* empty css                  */
import { Icon as i } from "../../icons/Icon.js";
function h({
  onSettings: o,
  onHelp: a,
  onCallLogs: t,
  onNotifications: r,
  notificationsAlert: l = !1,
  children: s
}) {
  return /* @__PURE__ */ c("div", { className: "pt-topbar-actions", children: [
    /* @__PURE__ */ n(e, { label: "Settings", onClick: o, children: /* @__PURE__ */ n(i, { name: "settings", size: "nav" }) }),
    /* @__PURE__ */ n(e, { label: "Help and support", onClick: a, children: /* @__PURE__ */ n(i, { name: "help", size: "nav" }) }),
    /* @__PURE__ */ n(e, { label: "Call logs", onClick: t, children: /* @__PURE__ */ n(i, { name: "phone2", size: "nav" }) }),
    /* @__PURE__ */ n(
      e,
      {
        label: l ? "Notifications, unread" : "Notifications",
        alert: l,
        onClick: r,
        children: /* @__PURE__ */ n(i, { name: "bell", size: "nav" })
      }
    ),
    s
  ] });
}
export {
  h as TopbarActions
};
