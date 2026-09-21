import type { ChangeEvent } from "react";
import type { AvatarTone } from "../../components/Avatar/Avatar";
import type { BreadcrumbItem } from "../../components/Breadcrumbs/Breadcrumbs";
import type { NotesStripProps } from "../../components/NotesStrip/NotesStrip";
import type { CreditsMeterProps } from "../../components/CreditsMeter/CreditsMeter";

export type AppShellVariant = "list" | "detail";

export interface AppShellSearch {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  "aria-label"?: string;
}

export interface AppShellAccount {
  name: string;
  initials: string;
  tone?: AvatarTone;
  onClick?: () => void;
}

export type AppShellNotes = Pick<NotesStripProps, "label" | "badge" | "onOpen" | "onAdd" | "tip" | "addTip">;

export type AppShellCredits = Pick<CreditsMeterProps, "remaining" | "total" | "onUpgrade" | "tip">;

export type AppShellBreadcrumb = BreadcrumbItem;
