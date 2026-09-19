import type { ReactNode } from "react";
import { Icon } from "../../icons";
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

const defaultIcon = <Icon name="fileText" size={16} />;

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
          <Icon name="plus" size={16} />
        </button>
      ) : null}
    </div>
  );
}

export default NotesStrip;
