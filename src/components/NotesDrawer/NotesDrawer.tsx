import { useEffect, type ReactNode } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../../icons/Icon";
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

export function NotesDrawer({
  open,
  onClose,
  mode = "browse",
  onModeChange,
  title = "Booking notes",
  search,
  filters,
  children,
  compose,
  composeFooter,
  className = "",
}: NotesDrawerProps) {
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
    <div className={`pt-nd-overlay ${className}`.trim()} role="presentation">
      <div className="pt-nd" role="dialog" aria-modal="true" aria-label={title}>
        <div className="pt-nd__head">
          <div className="pt-nd__title">{title}</div>
          <button
            type="button"
            className="pt-nd__mode"
            onClick={() => onModeChange?.(mode === "browse" ? "compose" : "browse")}
          >
            {mode === "browse" ? "Write a note" : "Browse notes"}
          </button>
          <button type="button" className="pt-nd__close" aria-label="Close" onClick={onClose}>
            <Icon name="clear" size="sm" />
          </button>
        </div>

        {mode === "browse" ? (
          <div className="pt-nd__browse">
            {search ? <div className="pt-nd__search">{search}</div> : null}
            {filters && filters.length > 0 ? (
              <div className="pt-nd__filters" role="tablist" aria-label="Note filters">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={!!f.active}
                    className={`pt-nd-fil ${f.active ? "is-active" : ""}`}
                    onClick={f.onSelect}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            ) : null}
            <div className="pt-nd__list">{children}</div>
          </div>
        ) : (
          <div className="pt-nd__compose">
            <div className="pt-nd__compose-body">{compose}</div>
            <div className="pt-nd__compose-foot">
              {composeFooter ?? (
                <>
                  <Button variant="ghost" size="sm" onClick={() => onModeChange?.("browse")}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" onClick={onClose}>
                    Save note
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesDrawer;
