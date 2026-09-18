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

const defaultIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M15 2v5h5" />
  </svg>
);

export function NotesStrip({
  label,
  icon = defaultIcon,
  badge,
  tip = "Notes",
  addTip = "Write a note",
  onOpen,
  onAdd,
  className = "",
}: NotesStripProps) {
  return (
    <div className={`pt-notes ${className}`.trim()}>
      <button type="button" className="pt-notes__main" data-tip={tip} onClick={onOpen}>
        {icon}
        <span className="pt-notes__txt">{label}</span>
        {badge != null && badge !== false ? <span className="pt-notes__badge">{badge}</span> : null}
      </button>
      {onAdd ? (
        <button
          type="button"
          className="pt-notes__add"
          data-tip={addTip}
          aria-label={addTip}
          onClick={onAdd}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}

export default NotesStrip;
