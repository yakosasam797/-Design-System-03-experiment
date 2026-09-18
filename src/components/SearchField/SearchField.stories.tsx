import type { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "./SearchField";

const meta: Meta<typeof SearchField> = { title: "Components/SearchField", component: SearchField };
export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: { placeholder: "Search anything" },
};

export const ListToolbar: Story = {
  name: "List toolbar (full width)",
  args: {
    fullWidth: true,
    placeholder: "Search booking, customer, or destination",
    "aria-label": "Search bookings",
  },
};

export const FocusWithin: Story = {
  name: "Focus-within outline",
  render: () => (
    <div>
      <p style={{ fontSize: 12, color: "var(--ink-2)", marginBottom: 8 }}>
        Tab into the field — wrap shows 2px --focus outline (not the input).
      </p>
      <SearchField fullWidth placeholder="Search booking, customer, or destination" autoFocus />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};
