import type { ButtonHTMLAttributes } from "react";
import { Avatar, type AvatarTone } from "../Avatar/Avatar";
import { Icon } from "../../icons";
import "./AccountMenu.css";

export interface AccountMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  initials: string;
  tone?: AvatarTone;
}

export function AccountMenu({
  name,
  initials,
  tone = "pink",
  className = "",
  type = "button",
  ...rest
}: AccountMenuProps) {
  return (
    <button
      type={type}
      className={`pt-acct ${className}`.trim()}
      aria-label={`Account, ${name}`}
      data-tip={`${name} · Account`}
      {...rest}
    >
      <Avatar tone={tone} size={26}>
        {initials}
      </Avatar>
      <Icon name="chevronDown" size={13} />
    </button>
  );
}

export default AccountMenu;
