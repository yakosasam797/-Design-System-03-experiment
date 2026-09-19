import type { Meta, StoryObj } from "@storybook/react";
import {
  DataSheet,
  DataSheetHeader,
  DataSheetRow,
  DataSheetCell,
  LeadCell,
  StackCell,
  StackLine,
  MoneyCell,
  OwnerCell,
} from "./DataSheet";
import { StatusChip } from "../StatusChip/StatusChip";
import { Checkbox } from "../Checkbox/Checkbox";
import { Avatar } from "../Avatar/Avatar";
import { EmptyState } from "../EmptyState/EmptyState";
import { Button } from "../Button/Button";
import { Tooltip } from "../Tooltip/Tooltip";
import { Icon } from "../../icons";

const meta: Meta<typeof DataSheet> = {
  title: "Components/DataSheet",
  component: DataSheet,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof DataSheet>;

function BookingHeader() {
  return (
    <DataSheetHeader>
      <DataSheetCell check>
        <Checkbox state="off" label="Select all bookings" />
      </DataSheetCell>
      <DataSheetCell>Booking</DataSheetCell>
      <DataSheetCell>Travel</DataSheetCell>
      <DataSheetCell>Status</DataSheetCell>
      <DataSheetCell>Next action</DataSheetCell>
      <DataSheetCell>Finance</DataSheetCell>
      <DataSheetCell>Owner</DataSheetCell>
    </DataSheetHeader>
  );
}

function BookingRows() {
  return (
    <>
      <BookingHeader />
      <DataSheetRow>
        <DataSheetCell check>
          <Checkbox state="off" label="Select XYZ Family Dubai" />
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell icon={<Icon name="pin" size="md" />} title="XYZ Family · Dubai" subtitle="BK-2026-000003" />
        </DataSheetCell>
        <DataSheetCell>
          <StackCell>
            <StackLine mono icon={<Icon name="calendar" size="xs" />}>
              18–22 Aug
            </StackLine>
            <StackLine muted icon={<Icon name="people" size="xs" />}>
              8d · 3 pax
            </StackLine>
          </StackCell>
        </DataSheetCell>
        <DataSheetCell>
          <StatusChip tone="blocked">At risk</StatusChip>
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell
            align="start"
            icon={<Icon name="hotel" size="md" />}
            title={
              <Tooltip tip="Confirm hotel with ABC DMC">
                <span className="ell">Confirm hotel with ABC DMC</span>
              </Tooltip>
            }
            subtitle={
              <StackLine muted icon={<Icon name="clock" size="xs" />}>
                Today · 4 PM
              </StackLine>
            }
          />
        </DataSheetCell>
        <DataSheetCell>
          <MoneyCell amount="₹16,500" chip={<StatusChip tone="blocked">Overdue</StatusChip>} />
        </DataSheetCell>
        <DataSheetCell>
          <OwnerCell>
            <Avatar tone="pink" size={26}>
              VJ
            </Avatar>
            <span>+2</span>
          </OwnerCell>
        </DataSheetCell>
      </DataSheetRow>
      <DataSheetRow>
        <DataSheetCell check>
          <Checkbox state="off" label="Select Sharma Family Goa" />
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell icon={<Icon name="pin" size="md" />} title="Sharma Family · Goa" subtitle="BK-2026-000004" />
        </DataSheetCell>
        <DataSheetCell>
          <StackCell>
            <StackLine mono icon={<Icon name="calendar" size="xs" />}>
              18–22 Aug
            </StackLine>
            <StackLine muted icon={<Icon name="people" size="xs" />}>
              8d · 2 pax
            </StackLine>
          </StackCell>
        </DataSheetCell>
        <DataSheetCell>
          <StatusChip tone="blocked">At risk</StatusChip>
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell
            align="start"
            icon={<Icon name="pin" size={15} />}
            title="Confirm water sports add-on"
            subtitle={
              <StackLine muted icon={<Icon name="clock" size="xs" />}>
                12 Aug
              </StackLine>
            }
          />
        </DataSheetCell>
        <DataSheetCell>
          <MoneyCell amount="₹48,000" chip={<StatusChip tone="done">Settled</StatusChip>} />
        </DataSheetCell>
        <DataSheetCell>
          <OwnerCell>
            <Avatar tone="pink" size={26}>
              VJ
            </Avatar>
            <span>+1</span>
          </OwnerCell>
        </DataSheetCell>
      </DataSheetRow>
      <DataSheetRow>
        <DataSheetCell check>
          <Checkbox state="off" label="Select Patel Family Manali" />
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell icon={<Icon name="pin" size="md" />} title="Patel Family · Manali" subtitle="BK-2026-000006" />
        </DataSheetCell>
        <DataSheetCell>
          <StackCell>
            <StackLine mono icon={<Icon name="calendar" size="xs" />}>
              24–28 Aug
            </StackLine>
            <StackLine muted icon={<Icon name="people" size="xs" />}>
              14d · 5 pax
            </StackLine>
          </StackCell>
        </DataSheetCell>
        <DataSheetCell>
          <StatusChip tone="blocked">At risk</StatusChip>
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell align="start" icon={<Icon name="pin" size="md" />} title="Request missing documents" subtitle={
            <StackLine muted icon={<Icon name="clock" size="xs" />}>10 Aug</StackLine>
          } />
        </DataSheetCell>
        <DataSheetCell>
          <MoneyCell amount="₹15,000" chip={<StatusChip tone="progress">To collect</StatusChip>} />
        </DataSheetCell>
        <DataSheetCell>
          <OwnerCell>
            <IconUnassigned />
            <span>Unassigned</span>
          </OwnerCell>
        </DataSheetCell>
      </DataSheetRow>
    </>
  );
}

export const BookingList: Story = {
  name: "Booking List recipe",
  render: () => (
    <div style={{ padding: 16, ["--page-pad" as string]: "24px", background: "var(--panel-ground)" }}>
      <DataSheet variant="booking">
        <BookingRows />
      </DataSheet>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <div style={{ padding: 16, ["--page-pad" as string]: "24px" }}>
      <DataSheet variant="booking">
        <BookingRows />
      </DataSheet>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ padding: 16, ["--page-pad" as string]: "24px" }}>
      <DataSheet variant="booking" loading loadingRows={5} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <EmptyState
        title="No bookings in this view"
        description="Try another stage or clear filters."
        icon={<Icon name="pin" size="lg" />}
      />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <EmptyState
        title="Couldn’t load rows"
        description="Compose EmptyState with an action — no dedicated Error component in this pilot."
        action={
          <Button variant="brand" size="sm">
            Retry
          </Button>
        }
      />
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div style={{ padding: 16, ["--page-pad" as string]: "24px" }}>
      <DataSheet variant="booking">
        <BookingHeader />
        <DataSheetRow>
          <DataSheetCell check>
            <Checkbox state="off" label="Select" />
          </DataSheetCell>
          <DataSheetCell>
            <LeadCell
              icon={<Icon name="pin" size="md" />}
              title="Extremely long booking title that should truncate inside the lead cell when space is limited"
              subtitle="BK-LONG-CONTENT-0001"
            />
          </DataSheetCell>
          <DataSheetCell>
            <StackCell>
              <StackLine mono icon={<Icon name="calendar" size="xs" />}>
                18–22 Aug
              </StackLine>
              <StackLine muted icon={<Icon name="people" size="xs" />}>
                8d · 3 pax
              </StackLine>
            </StackCell>
          </DataSheetCell>
          <DataSheetCell>
            <StatusChip tone="blocked">At risk</StatusChip>
          </DataSheetCell>
          <DataSheetCell>
            <LeadCell
              align="start"
              icon={<Icon name="hotel" size="md" />}
              title="Confirm hotel block with ABC DMC and request rooming list before Friday afternoon cutoff"
              subtitle={
                <StackLine muted icon={<Icon name="clock" size="xs" />}>
                  Today · 4 PM
                </StackLine>
              }
            />
          </DataSheetCell>
          <DataSheetCell>
            <MoneyCell amount="₹16,500" chip={<StatusChip tone="blocked">Overdue</StatusChip>} />
          </DataSheetCell>
          <DataSheetCell>
            <OwnerCell>
              <Avatar tone="pink" size={26}>
                VJ
              </Avatar>
              <span>+2</span>
            </OwnerCell>
          </DataSheetCell>
        </DataSheetRow>
      </DataSheet>
    </div>
  ),
};

export const NarrowMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  render: () => (
    <div style={{ padding: 8, maxWidth: 375, ["--page-pad" as string]: "16px", border: "1px dashed var(--line)" }}>
      <p style={{ fontSize: 12, color: "var(--ink-2)", marginBottom: 8 }}>
        Q5=B — sheet scrolls horizontally on narrow viewports
      </p>
      <DataSheet variant="booking">
        <BookingRows />
      </DataSheet>
    </div>
  ),
};
