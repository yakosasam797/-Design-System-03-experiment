import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterSelect } from "./FilterSelect";

const meta: Meta<typeof FilterSelect> = { title: "Components/FilterSelect", component: FilterSelect };
export default meta;

const options = [
  { value: "all", label: "All bookings" },
  { value: "mine", label: "Mine" },
  { value: "unassigned", label: "Unassigned" },
];

export const Default: StoryObj = {
  render: () => {
    const [v, setV] = useState("all");
    return <FilterSelect tip="Filter by owner" value={v} onChange={setV} options={options} />;
  },
};

export const SelectedMine: StoryObj = {
  render: () => {
    const [v, setV] = useState("mine");
    return <FilterSelect tip="Filter by owner" value={v} onChange={setV} options={options} />;
  },
};

export const OpenMenu: StoryObj = {
  name: "Open / selected state",
  render: () => {
    const [v, setV] = useState("all");
    return (
      <div style={{ minHeight: 200 }}>
        <p style={{ fontSize: 12, color: "var(--ink-2)", marginBottom: 8 }}>
          Click to open — selected option uses pink-soft.
        </p>
        <FilterSelect tip="Filter by owner" value={v} onChange={setV} options={options} />
      </div>
    );
  },
};
