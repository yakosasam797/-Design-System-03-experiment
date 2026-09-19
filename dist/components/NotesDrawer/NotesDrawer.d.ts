import { type ReactNode } from "react";
import "./NotesDrawer.css";
export interface NotesFilterChip {
    id: string;
    label: string;
    active?: boolean;
    onSelect?: () => void;
}
export interface NotesDrawerProps {
    open: boolean;
    onClose?: () => void;
    mode?: "browse" | "compose";
    onModeChange?: (mode: "browse" | "compose") => void;
    title?: string;
    /** Browse: search field */
    search?: ReactNode;
    filters?: NotesFilterChip[];
    /** Browse: note list */
    children?: ReactNode;
    /** Compose body (textarea etc.) */
    compose?: ReactNode;
    composeFooter?: ReactNode;
    className?: string;
}
export declare function NotesDrawer({ open, onClose, mode, onModeChange, title, search, filters, children, compose, composeFooter, className, }: NotesDrawerProps): import("react").JSX.Element | null;
export default NotesDrawer;
