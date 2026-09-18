import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IconClear, IconExport, IconPlus, IconRefresh } from "../../story-icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

/** Booking List CTAs — always use size="sm" + 14×14 leading icon when Booking does. */
export const Refresh: Story = {
  name: "Brand · Refresh (List)",
  args: {
    variant: "brand",
    size: "sm",
    children: (
      <>
        <IconRefresh />
        Refresh
      </>
    ),
  },
};

export const DirectBooking: Story = {
  name: "Primary · Direct booking (List)",
  args: {
    variant: "primary",
    size: "sm",
    children: (
      <>
        <IconPlus />
        Direct booking
      </>
    ),
  },
};

export const Upgrade: Story = {
  name: "Primary · Upgrade (sidebar)",
  args: {
    variant: "primary",
    size: "sm",
    children: "Upgrade",
  },
};

export const Export: Story = {
  name: "Brand · Export (bulk)",
  args: {
    variant: "brand",
    size: "sm",
    children: (
      <>
        <IconExport />
        Export
      </>
    ),
  },
};

export const Clear: Story = {
  name: "Ghost · Clear (bulk)",
  args: {
    variant: "ghost",
    size: "sm",
    children: (
      <>
        <IconClear />
        Clear
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "sm",
    disabled: true,
    children: (
      <>
        <IconPlus />
        Direct booking
      </>
    ),
  },
};

export const PrimaryMd: Story = {
  name: "Primary · md (non-list)",
  args: {
    variant: "primary",
    size: "md",
    children: "Primary",
  },
};

export const ListCtas: Story = {
  name: "List CTA set",
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="brand" size="sm">
        <IconRefresh />
        Refresh
      </Button>
      <Button variant="primary" size="sm">
        <IconPlus />
        Direct booking
      </Button>
      <Button variant="primary" size="sm">
        Upgrade
      </Button>
      <Button variant="brand" size="sm">
        <IconExport />
        Export
      </Button>
      <Button variant="ghost" size="sm">
        <IconClear />
        Clear
      </Button>
    </div>
  ),
};
