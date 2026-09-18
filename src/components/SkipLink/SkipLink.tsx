import type { AnchorHTMLAttributes } from "react";
import "./SkipLink.css";

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: string;
}

export function SkipLink({
  href,
  children = "Skip to main content",
  className = "",
  ...rest
}: SkipLinkProps) {
  return (
    <a href={href} className={`pt-skip-link ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}

export default SkipLink;
