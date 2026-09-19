/**
 * @deprecated Prefer `<Icon name="…" />` from the governed registry.
 * Thin wrappers kept so existing Storybook recipes keep compiling.
 */
import type { ReactElement } from "react";
import { Icon, type IconName } from "./icons";

function wrap(name: IconName, defaultSize: number) {
  return function StoryIcon({ size = defaultSize }: { size?: number }): ReactElement {
    return <Icon name={name} size={size} />;
  };
}

export const IconRefresh = wrap("refresh", 14);
export const IconPlus = wrap("plus", 14);
export const IconExport = wrap("export", 14);
export const IconClear = wrap("clear", 14);
export const IconSearch = wrap("search", 16);
export const IconPin = wrap("pin", 15);
export const IconCalendar = wrap("calendar", 13);
export const IconPeople = wrap("people", 13);
export const IconHotel = wrap("hotel", 15);
export const IconClock = wrap("clock", 13);
export const IconSettings = wrap("settings", 17);
export const IconHelp = wrap("help", 17);
export const IconBell = wrap("bell", 17);
export const IconBack = wrap("chevronLeft", 16);
export const IconUnassigned = wrap("user", 15);
