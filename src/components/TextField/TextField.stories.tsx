import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Booking name",
    placeholder: "e.g. Sharma Family · Dubai",
  },
};

export const MonoAmount: Story = {
  args: {
    label: "Amount",
    className: "",
    defaultValue: "75000",
  },
  render: (args) => <TextField {...args} style={{ fontFamily: "var(--font-mono)" }} />,
};

export const Multiline: Story = {
  args: {
    label: "Message",
    multiline: true,
    rows: 4,
    defaultValue: "Hi, following up on confirmation for this booking.",
  } as Story["args"],
};
