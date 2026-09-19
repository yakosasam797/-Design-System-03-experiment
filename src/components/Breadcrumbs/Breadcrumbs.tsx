import { Fragment, type MouseEvent, type ReactNode } from "react";
import { Icon } from "../../icons";
import "./Breadcrumbs.css";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`pt-crumbs ${className}`.trim()} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <Fragment key={`${index}-${String(item.label)}`}>
            {index > 0 ? (
              <Icon name="chevronRight" size={13} aria-hidden="true" />
            ) : null}
            {last ? (
              <span className="pt-crumb pt-crumb--current">{item.label}</span>
            ) : item.href ? (
              <a
                className="pt-crumb"
                href={item.href}
                onClick={(event) => {
                  if (item.onClick) {
                    event.preventDefault();
                    item.onClick(event);
                  }
                }}
              >
                {item.label}
              </a>
            ) : (
              <button type="button" className="pt-crumb" onClick={item.onClick}>
                {item.label}
              </button>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
