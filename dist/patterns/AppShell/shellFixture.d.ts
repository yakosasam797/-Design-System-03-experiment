import type { NavGroupData } from "../../components/SidebarNav/SidebarNav";
import type { AppShellAccount, AppShellBreadcrumb, AppShellCredits, AppShellNotes } from "./types";
/** Do not recreate Sidebar, Topbar or AppShell inside a product module.
 * Import the canonical components from @paryatech/design-system. */
export declare const SHELL_IMPORT_WARNING = "Do not recreate Sidebar, Topbar or AppShell inside a product module. Import the canonical components from @paryatech/design-system.";
export declare const exampleNav: NavGroupData[];
export declare const exampleAccount: AppShellAccount;
export declare const exampleNotes: AppShellNotes;
export declare const exampleCredits: AppShellCredits;
export declare const listBreadcrumbs: AppShellBreadcrumb[];
export declare const detailBreadcrumbs: AppShellBreadcrumb[];
