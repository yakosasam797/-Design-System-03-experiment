import type { Meta, StoryObj } from "@storybook/react";
import { KpiStrip } from "./KpiStrip";
import { Icon } from "../../icons";

const meta: Meta<typeof KpiStrip> = {
  title: "Components/KpiStrip",
  component: KpiStrip,
};
export default meta;
type Story = StoryObj<typeof KpiStrip>;

export const Overview: Story = {
  args: {
    items: [
      {
        id: "pax",
        label: "Travellers",
        value: "3",
        tone: "person",
        icon: <Icon name="people" />,
        onClick: () => undefined,
      },
      {
        id: "nights",
        label: "Nights",
        value: "4",
        tone: "work",
        icon: <Icon name="calendar" />,
      },
      {
        id: "due",
        label: "Balance due",
        value: "₹16,500",
        tone: "danger",
        icon: <Icon name="bell" />,
      },
      {
        id: "ok",
        label: "Settled",
        value: "₹48,000",
        tone: "ok",
        icon: <Icon name="refresh" />,
      },
    ],
  },
};
