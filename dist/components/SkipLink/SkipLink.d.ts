import type { AnchorHTMLAttributes } from "react";
import "./SkipLink.css";
export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children?: string;
}
export declare function SkipLink({ href, children, className, ...rest }: SkipLinkProps): import("react").JSX.Element;
export default SkipLink;
