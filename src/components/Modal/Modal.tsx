import { useEffect, type HTMLAttributes, type ReactNode } from "react";
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

export function Modal({
  open,
  onClose,
  eyebrow,
  title,
  children,
  footer,
  size = "default",
  className = "",
  ...rest
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="pt-modal-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={`pt-modal pt-modal--${size} ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        <div className="pt-modal__head">
          {eyebrow ? <p className="pt-modal__eyebrow">{eyebrow}</p> : null}
          <h2 className="pt-modal__title">{title}</h2>
        </div>
        <div className="pt-modal__body">{children}</div>
        {footer ? <div className="pt-modal__foot">{footer}</div> : null}
      </div>
    </div>
  );
}

export default Modal;
