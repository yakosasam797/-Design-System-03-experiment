import type { ReactNode } from "react";
import "./NotesStrip.css";
export interface NotesStripProps {
    label: string;
    icon?: ReactNode;
    badge?: ReactNode;
    tip?: string;
    addTip?: string;
    onOpen?: () => void;
    onAdd?: () => void;
    className?: string;
}
export declare function NotesStrip({ label, icon, badge, tip, addTip, onOpen, onAdd, className, }: NotesStripProps): import("react").JSX.Element;
export default NotesStrip;
