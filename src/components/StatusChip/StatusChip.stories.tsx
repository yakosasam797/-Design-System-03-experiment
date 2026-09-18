import type { Meta, StoryObj } from "@storybook/react";
import { StatusChip } from "./StatusChip";

const meta: Meta<typeof StatusChip> = { title: "Components/StatusChip", component: StatusChip };
export default meta;
type Story = StoryObj<typeof StatusChip>;

export const Open: Story = { args: { tone: "open", children: "Upcoming" } };
export const Progress: Story = { args: { tone: "progress", children: "On trip" } };
export const Blocked: Story = { args: { tone: "blocked", children: "At risk" } };
export const Done: Story = { args: { tone: "done", children: "Completed" } };
export const Finance: Story = {
  name: "Finance tones (List)",
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <StatusChip tone="blocked">Overdue</StatusChip>
      <StatusChip tone="done">Settled</StatusChip>
      <StatusChip tone="progress">To collect</StatusChip>
      <StatusChip tone="progress">Refund</StatusChip>
    </div>
  ),
};
export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <StatusChip tone="open">Open</StatusChip>
      <StatusChip tone="progress">Progress</StatusChip>
      <StatusChip tone="blocked">Blocked</StatusChip>
      <StatusChip tone="done">Done</StatusChip>
    </div>
  ),
};
