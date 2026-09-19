import type { ButtonHTMLAttributes } from "react";
import { type AvatarTone } from "../Avatar/Avatar";
import "./AccountMenu.css";
export interface AccountMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    initials: string;
    tone?: AvatarTone;
}
export declare function AccountMenu({ name, initials, tone, className, type, ...rest }: AccountMenuProps): import("react").JSX.Element;
export default AccountMenu;
