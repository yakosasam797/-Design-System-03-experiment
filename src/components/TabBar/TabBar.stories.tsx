import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TabBar } from "./TabBar";

const meta: Meta<typeof TabBar> = { title: "Components/TabBar", component: TabBar };
export default meta;

export const BookingStages: StoryObj = {
  name: "Booking stages (List)",
  render: () => {
    const [v, setV] = useState("upcoming");
    return (
      <TabBar
        value={v}
        onValueChange={setV}
        aria-label="Booking stage"
        items={[
          { id: "upcoming", label: "Upcoming", count: 3 },
          { id: "travelling", label: "Travelling", count: 1 },
          { id: "completed", label: "Completed", count: 2 },
          { id: "cancelled", label: "Cancelled", count: 1 },
        ]}
      />
    );
  },
};

export const Default: StoryObj = {
  render: () => {
    const [v, setV] = useState("upcoming");
    return (
      <TabBar
        value={v}
        onValueChange={setV}
        items={[
          { id: "upcoming", label: "Upcoming", count: 3 },
          { id: "travelling", label: "Travelling", count: 1 },
          { id: "completed", label: "Completed", count: 2 },
        ]}
      />
    );
  },
};
