import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { IconBack, IconBell, IconHelp, IconSettings } from "../../story-icons";

const meta: Meta<typeof IconButton> = { title: "Components/IconButton", component: IconButton };
export default meta;

export const Settings: StoryObj = {
  args: {
    label: "Settings",
    children: <IconSettings />,
  },
};

export const Help: StoryObj = {
  args: {
    label: "Help",
    children: <IconHelp />,
  },
};

export const Notifications: StoryObj = {
  args: {
    label: "Notifications",
    alert: true,
    children: <IconBell />,
  },
};

export const Back: StoryObj = {
  args: {
    label: "Back",
    children: <IconBack />,
  },
};

export const TopbarSet: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <IconButton label="Settings">
        <IconSettings />
      </IconButton>
      <IconButton label="Help">
        <IconHelp />
      </IconButton>
      <IconButton label="Notifications" alert>
        <IconBell />
      </IconButton>
    </div>
  ),
};
