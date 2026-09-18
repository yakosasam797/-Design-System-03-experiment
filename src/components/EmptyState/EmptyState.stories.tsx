import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "../Button/Button";

const meta: Meta<typeof EmptyState> = { title: "Components/EmptyState", component: EmptyState };
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: { title: "No bookings in this view", description: "Try another stage or clear filters." },
};
export const WithAction: Story = {
  args: {
    title: "Couldn’t load",
    description: "Check your connection and try again.",
    action: <Button variant="brand" size="sm">Retry</Button>,
  },
};
