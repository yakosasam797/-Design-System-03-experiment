import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../../icons";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
};
export default meta;

export const OnIconButton: StoryObj = {
  render: () => (
    <div style={{ padding: 48 }}>
      <Tooltip tip="Settings">
        <IconButton label="Settings">
          <Icon name="settings" size="nav" />
        </IconButton>
      </Tooltip>
      <p style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 12 }}>Hover the icon button</p>
    </div>
  ),
};

export const OnTruncatedCell: StoryObj = {
  render: () => (
    <div style={{ padding: 48, maxWidth: 220 }}>
      <Tooltip tip="Confirm hotel with ABC DMC">
        <span
          className="ell"
          style={{
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontWeight: 600,
            fontSize: 13.5,
          }}
        >
          Confirm hotel with ABC DMC
        </span>
      </Tooltip>
      <p style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 12 }}>Hover truncated text</p>
    </div>
  ),
};
