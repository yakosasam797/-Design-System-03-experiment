import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = { title: "Components/Avatar", component: Avatar };
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { children: "PT" } };
export const PinkOwner: Story = {
  name: "Pink · owner 26px",
  args: { tone: "pink", children: "VJ", size: 26 },
};

export const OwnerStack: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <Avatar tone="pink" size={26}>
        VJ
      </Avatar>
      <span style={{ fontSize: 11.5, color: "var(--ink-2)", fontWeight: 600 }}>+2</span>
    </div>
  ),
};
