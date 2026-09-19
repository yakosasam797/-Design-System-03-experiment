import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { Icon } from "../../icons";

const meta: Meta<typeof IconButton> = { title: "Components/IconButton", component: IconButton };
export default meta;

export const Settings: StoryObj = {
  args: {
    label: "Settings",
    children: <Icon name="settings" size="nav" />,
  },
};

export const Help: StoryObj = {
  args: {
    label: "Help",
    children: <Icon name="help" size="nav" />,
  },
};

export const Notifications: StoryObj = {
  args: {
    label: "Notifications",
    alert: true,
    children: <Icon name="bell" size="nav" />,
  },
};

export const Back: StoryObj = {
  args: {
    label: "Back",
    children: <Icon name="chevronLeft" size={16} />,
  },
};

export const TopbarSet: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <IconButton label="Settings">
        <Icon name="settings" size="nav" />
      </IconButton>
      <IconButton label="Help">
        <Icon name="help" size="nav" />
      </IconButton>
      <IconButton label="Notifications" alert>
        <Icon name="bell" size="nav" />
      </IconButton>
    </div>
  ),
};
