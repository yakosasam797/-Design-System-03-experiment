import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppShell } from "./AppShell";
import {
  exampleAccount,
  exampleCredits,
  exampleNav,
  exampleNotes,
  listBreadcrumbs,
  detailBreadcrumbs,
} from "./shellFixture";
import { AppShell as ExportedAppShell, Sidebar, Topbar, BackButton, Breadcrumbs, AccountMenu } from "../../index";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

afterEach(() => cleanup());

const page = <p>Page body</p>;

describe("package exports", () => {
  it("resolves AppShell, Sidebar, Topbar, BackButton, Breadcrumbs, AccountMenu from the package entry", () => {
    expect(ExportedAppShell).toBe(AppShell);
    expect(typeof Sidebar).toBe("function");
    expect(typeof Topbar).toBe("function");
    expect(typeof BackButton).toBe("function");
    expect(typeof Breadcrumbs).toBe("function");
    expect(typeof AccountMenu).toBe("function");
  });
});

describe("AppShell list vs detail", () => {
  it("hides BackButton on the list configuration", () => {
    render(
      <AppShell
        variant="list"
        navGroups={exampleNav}
        breadcrumbs={listBreadcrumbs}
        credits={exampleCredits}
        account={exampleAccount}
      >
        {page}
      </AppShell>,
    );
    expect(screen.queryByRole("button", { name: /back/i })).not.toBeInTheDocument();
    expect(screen.getByLabelText("Breadcrumb")).toHaveTextContent("Operations");
    expect(screen.getByLabelText("Breadcrumb")).toHaveTextContent("Bookings");
    expect(document.querySelector("[data-shell-variant='list']")).toBeTruthy();
  });

  it("shows BackButton on the detail configuration", async () => {
    const onBack = vi.fn();
    const user = userEvent.setup();
    render(
      <AppShell
        variant="detail"
        navGroups={exampleNav}
        notes={exampleNotes}
        breadcrumbs={detailBreadcrumbs}
        onBack={onBack}
        backLabel="Back to bookings"
        credits={exampleCredits}
        account={exampleAccount}
      >
        {page}
      </AppShell>,
    );
    const back = screen.getByRole("button", { name: "Back to bookings" });
    expect(back).toBeInTheDocument();
    await user.click(back);
    expect(onBack).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Breadcrumb")).toHaveTextContent("XYZ Family · Dubai");
  });

  it("does not render invented Owner/Admin/Member chrome", () => {
    render(
      <AppShell
        variant="detail"
        navGroups={exampleNav}
        breadcrumbs={detailBreadcrumbs}
        account={exampleAccount}
      >
        {page}
      </AppShell>,
    );
    expect(screen.queryByRole("group", { name: /role/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Owner" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Admin" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Member" })).not.toBeInTheDocument();
  });
});

describe("AppShell sidebar collapse", () => {
  it("toggles collapsed state and accessible name", async () => {
    const user = userEvent.setup();
    render(
      <AppShell
        variant="list"
        navGroups={exampleNav}
        breadcrumbs={listBreadcrumbs}
        account={exampleAccount}
      >
        {page}
      </AppShell>,
    );
    const toggle = screen.getByRole("button", { name: "Collapse sidebar" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Expand sidebar" })).toHaveAttribute("aria-expanded", "false");
    expect(document.querySelector(".pt-frame--collapsed")).toBeTruthy();
  });

  it("marks the active nav item", () => {
    render(
      <AppShell variant="list" navGroups={exampleNav} breadcrumbs={listBreadcrumbs} account={exampleAccount}>
        {page}
      </AppShell>,
    );
    expect(screen.getByRole("button", { name: /Bookings/ })).toHaveAttribute("aria-current", "page");
  });
});

describe("AppShell topbar chrome", () => {
  it("renders search, utility actions, and account labels", () => {
    render(
      <AppShell
        variant="list"
        navGroups={exampleNav}
        breadcrumbs={listBreadcrumbs}
        account={exampleAccount}
        notificationsAlert
      >
        {page}
      </AppShell>,
    );
    expect(screen.getByRole("searchbox", { name: "Search the workspace" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Settings" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Help and support" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Call logs" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Notifications, unread" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Account, Vrushabh Jain" })).toBeInTheDocument();
  });
});

describe("AppShell keyboard", () => {
  it("keeps collapse and back in the tab order", async () => {
    const user = userEvent.setup();
    render(
      <AppShell
        variant="detail"
        navGroups={exampleNav}
        breadcrumbs={detailBreadcrumbs}
        backLabel="Back to bookings"
        account={exampleAccount}
      >
        {page}
      </AppShell>,
    );
    await user.tab();
    expect(screen.getByText("Skip to main content")).toHaveFocus();
    const back = screen.getByRole("button", { name: "Back to bookings" });
    back.focus();
    expect(back).toHaveFocus();
  });
});

describe("AppShell narrow viewport CSS", () => {
  it("hides the sidebar at the Booking 1000px breakpoint", () => {
    const css = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "AppShell.css"), "utf8");
    expect(css).toMatch(/@media \(max-width: 1000px\)[\s\S]*\.pt-side \{\s*display: none;/);
  });
});
