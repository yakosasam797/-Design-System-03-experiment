import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { StatusSelect } from "./StatusSelect";
import type { StatusSelectOption } from "./StatusSelect";

const TASK_OPTIONS: StatusSelectOption[] = [
  { value: "Open", label: "Open", tone: "open" },
  { value: "In progress", label: "In progress", tone: "progress" },
  { value: "Blocked", label: "Blocked", tone: "blocked" },
  { value: "Done", label: "Done", tone: "done" },
];

const meta: Meta<typeof StatusSelect> = {
  title: "Components/StatusSelect",
  component: StatusSelect,
};
export default meta;
type Story = StoryObj<typeof StatusSelect>;

export const TasksMenu: Story = {
  name: "Tasks · editable status",
  render: function Render() {
    const [value, setValue] = useState("In progress");
    return <StatusSelect value={value} options={TASK_OPTIONS} onChange={setValue} label="Task status" />;
  },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {TASK_OPTIONS.map((o) => (
        <StatusSelect key={o.value} value={o.value} options={TASK_OPTIONS} />
      ))}
    </div>
  ),
};
