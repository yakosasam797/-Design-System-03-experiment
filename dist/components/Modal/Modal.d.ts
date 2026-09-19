import { type HTMLAttributes, type ReactNode } from "react";
import "./Modal.css";
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    open: boolean;
    onClose?: () => void;
    eyebrow?: ReactNode;
    title: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    size?: "default" | "wide";
}
export declare function Modal({ open, onClose, eyebrow, title, children, footer, size, className, ...rest }: ModalProps): import("react").JSX.Element | null;
export default Modal;
