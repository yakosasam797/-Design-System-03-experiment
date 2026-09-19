import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ListPage, ListBulkBar } from "./ListPage";
import { AppShell } from "../AppShell/AppShell";
import { Button } from "../../components/Button/Button";
import { SearchField } from "../../components/SearchField/SearchField";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { Pagination } from "../../components/Pagination/Pagination";
import { EmptyState } from "../../components/EmptyState/EmptyState";
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
} from "../../components/DataSheet/DataSheet";
import { StatusChip } from "../../components/StatusChip/StatusChip";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Avatar } from "../../components/Avatar/Avatar";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { SheetToolbar } from "../../components/SheetToolbar/SheetToolbar";
import { Icon } from "../../icons";

const stageTabs = [
  { id: "upcoming", label: "Upcoming", count: 3 },
  { id: "travelling", label: "Travelling", count: 1 },
  { id: "completed", label: "Completed", count: 2 },
  { id: "cancelled", label: "Cancelled", count: 1 },
];

const meta: Meta<typeof ListPage> = {
  title: "Patterns/ListPage",
  component: ListPage,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof ListPage>;

function bookIcon() {
  return <Icon name="bookings" size="nav" />;
}

function BookingSheetBody({ long }: { long?: boolean }) {
  const title = long
    ? "Extremely long sample title that should truncate inside the lead cell when space is limited"
    : "XYZ Family · Dubai";
  return (
    <DataSheet variant="booking">
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
      <DataSheetRow>
        <DataSheetCell check>
          <Checkbox state="off" label="Select row" />
        </DataSheetCell>
        <DataSheetCell>
          <LeadCell icon={<Icon name="pin" size="md" />} title={title} subtitle="BK-2026-000003" />
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
          <Checkbox state="off" label="Select Sharma" />
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
            icon={<Icon name="pin" size="md" />}
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
          <Checkbox state="off" label="Select Patel" />
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
          <LeadCell
            align="start"
            icon={<Icon name="pin" size="md" />}
            title="Request missing documents"
            subtitle={
              <StackLine muted icon={<Icon name="clock" size="xs" />}>
                10 Aug
              </StackLine>
            }
          />
        </DataSheetCell>
        <DataSheetCell>
          <MoneyCell amount="₹15,000" chip={<StatusChip tone="progress">To collect</StatusChip>} />
        </DataSheetCell>
        <DataSheetCell>
          <OwnerCell>
            <Icon name="user" size="md" />
            <span>Unassigned</span>
          </OwnerCell>
        </DataSheetCell>
      </DataSheetRow>
    </DataSheet>
  );
}

function DemoList({
  mode = "data",
}: {
  mode?: "data" | "loading" | "empty" | "error" | "disabled" | "long";
}) {
  const [tab, setTab] = useState("upcoming");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(mode === "data");

  const toolbar = (
    <SheetToolbar
      search={
        <SearchField
          fullWidth
          placeholder="Search booking, customer, or destination"
          aria-label="Search bookings"
          disabled={mode === "disabled"}
        />
      }
      filters={
        <FilterSelect
          tip="Filter by owner"
          options={[
            { value: "all", label: "All bookings" },
            { value: "mine", label: "Mine" },
            { value: "unassigned", label: "Unassigned" },
          ]}
          value={filter}
          onChange={setFilter}
        />
      }
    />
  );

  const actions = (
    <>
      <Button variant="brand" size="toolbar" disabled={mode === "disabled"} leadingIcon={<Icon name="refresh" />}>
        Refresh
      </Button>
      <Button variant="primary" size="toolbar" disabled={mode === "disabled"} leadingIcon={<Icon name="plus" />}>
        Direct booking
      </Button>
    </>
  );

  let body;
  if (mode === "loading") {
    body = <DataSheet variant="booking" loading columns={7} />;
  } else if (mode === "empty") {
    body = (
      <EmptyState title="No bookings in this view" description="Try another stage or clear filters." />
    );
  } else if (mode === "error") {
    body = (
      <EmptyState
        title="Couldn’t load this list"
        description="Composition recipe — reuse EmptyState + Button."
        action={
          <Button variant="brand" size="sm">
            <Icon name="refresh" size="sm" />
            Retry
          </Button>
        }
      />
    );
  } else {
    body = <BookingSheetBody long={mode === "long"} />;
  }

  return (
    <AppShell
      variant="list"
      skipHref="#main"
      navGroups={[
        {
          id: "sales",
          label: "Sales",
          items: [
            { id: "bookings", label: "Bookings", tip: "Bookings", active: true, icon: bookIcon() },
            { id: "quotes", label: "Quotes", tip: "Quotes", icon: <Icon name="fileText2" size="nav" /> },
            { id: "vendors", label: "Vendors", tip: "Vendors", icon: <Icon name="vendors" size="nav" /> },
          ],
        },
      ]}
      breadcrumbs={[
        { label: "Operations", href: "#" },
        { label: "Bookings" },
      ]}
      credits={{ remaining: 720, total: 1000 }}
      account={{ name: "Vrushabh Jain", initials: "VJ", tone: "pink" }}
      notificationsAlert
    >
      <ListPage
        title="Bookings"
        actions={actions}
        tabs={stageTabs}
        tabValue={tab}
        onTabChange={setTab}
        toolbar={toolbar}
        bulk={
          selected && mode === "data" ? (
            <ListBulkBar label="2 bookings selected">
              <Button variant="brand" size="sm">
                <Icon name="export" size="sm" />
                Export
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setSelected(false)}>
                <Icon name="clear" size="sm" />
                Clear
              </Button>
            </ListBulkBar>
          ) : null
        }
        footer={
          mode === "data" || mode === "long" || mode === "disabled" ? (
            <Pagination
              rangeLabel="Showing 1–3 of 3"
              page={1}
              pageCount={1}
              onPageChange={() => {}}
            />
          ) : null
        }
      >
        {body}
      </ListPage>
    </AppShell>
  );
}

export const Default: Story = { render: () => <DemoList /> };
export const Loading: Story = { render: () => <DemoList mode="loading" /> };
export const Empty: Story = { render: () => <DemoList mode="empty" /> };
export const Error: Story = { render: () => <DemoList mode="error" /> };
export const Disabled: Story = { render: () => <DemoList mode="disabled" /> };
export const LongContent: Story = { render: () => <DemoList mode="long" /> };
export const NarrowMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  render: () => (
    <div style={{ maxWidth: 390, margin: "0 auto", height: "100vh", overflow: "auto" }}>
      <DemoList />
    </div>
  ),
};
