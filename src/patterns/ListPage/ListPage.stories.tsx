import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ListPage, ListBulkBar } from "./ListPage";
import { AppShell } from "../AppShell/AppShell";
import { Button } from "../../components/Button/Button";
import { SearchField } from "../../components/SearchField/SearchField";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { Pagination } from "../../components/Pagination/Pagination";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { NavItem } from "../../components/SidebarNav/SidebarNav";
import { CreditsMeter } from "../../components/CreditsMeter/CreditsMeter";
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
import { IconButton } from "../../components/IconButton/IconButton";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import {
  IconCalendar,
  IconClear,
  IconClock,
  IconExport,
  IconHotel,
  IconPeople,
  IconPin,
  IconPlus,
  IconRefresh,
  IconSettings,
  IconBell,
  IconHelp,
  IconUnassigned,
} from "../../story-icons";

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
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function NavFixture() {
  return (
    <nav aria-label="Primary" className="pt-sidenav">
      <NavItem label="Bookings" tip="Bookings" active icon={bookIcon()} />
      <NavItem
        label="Quotes"
        tip="Quotes"
        icon={
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 2H8.6A1.6 1.6 0 0 0 7 3.6v16.8A1.6 1.6 0 0 0 8.6 22h10.8a1.6 1.6 0 0 0 1.6-1.6V7.5Z" />
            <path d="M14 2v6h6" />
          </svg>
        }
      />
      <NavItem
        label="Vendors"
        tip="Vendors"
        icon={
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9.5 4.5 4h15L21 9.5" />
            <path d="M4 9.5V20h16V9.5" />
            <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
          </svg>
        }
      />
    </nav>
  );
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
          <LeadCell icon={<IconPin />} title={title} subtitle="BK-2026-000003" />
        </DataSheetCell>
        <DataSheetCell>
          <StackCell>
            <StackLine mono icon={<IconCalendar />}>
              18–22 Aug
            </StackLine>
            <StackLine muted icon={<IconPeople />}>
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
            icon={<IconHotel />}
            title={
              <Tooltip tip="Confirm hotel with ABC DMC">
                <span className="ell">Confirm hotel with ABC DMC</span>
              </Tooltip>
            }
            subtitle={
              <StackLine muted icon={<IconClock />}>
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
          <LeadCell icon={<IconPin />} title="Sharma Family · Goa" subtitle="BK-2026-000004" />
        </DataSheetCell>
        <DataSheetCell>
          <StackCell>
            <StackLine mono icon={<IconCalendar />}>
              18–22 Aug
            </StackLine>
            <StackLine muted icon={<IconPeople />}>
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
            icon={<IconPin />}
            title="Confirm water sports add-on"
            subtitle={
              <StackLine muted icon={<IconClock />}>
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
          <LeadCell icon={<IconPin />} title="Patel Family · Manali" subtitle="BK-2026-000006" />
        </DataSheetCell>
        <DataSheetCell>
          <StackCell>
            <StackLine mono icon={<IconCalendar />}>
              24–28 Aug
            </StackLine>
            <StackLine muted icon={<IconPeople />}>
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
            icon={<IconPin />}
            title="Request missing documents"
            subtitle={
              <StackLine muted icon={<IconClock />}>
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
            <IconUnassigned />
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
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(mode === "data");

  const toolbar = (
    <>
      <SearchField
        fullWidth
        placeholder="Search booking, customer, or destination"
        aria-label="Search bookings"
        disabled={mode === "disabled"}
      />
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
    </>
  );

  const actions = (
    <>
      <Button variant="brand" size="sm" disabled={mode === "disabled"}>
        <IconRefresh />
        Refresh
      </Button>
      <Button variant="primary" size="sm" disabled={mode === "disabled"}>
        <IconPlus />
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
            <IconRefresh />
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
      listMode
      skipHref="#main"
      crumbs={
        <>
          <span>Operations</span>
          <span>/</span>
          <strong>Bookings</strong>
        </>
      }
      search={<SearchField placeholder="Search anything" style={{ flex: "0 1 280px", maxWidth: 380 }} />}
      actions={
        <>
          <IconButton label="Settings">
            <IconSettings />
          </IconButton>
          <IconButton label="Help">
            <IconHelp />
          </IconButton>
          <IconButton label="Notifications" alert>
            <IconBell />
          </IconButton>
        </>
      }
      nav={<NavFixture />}
      sidebarFooter={<CreditsMeter remaining={720} total={1000} />}
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
                <IconExport />
                Export
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setSelected(false)}>
                <IconClear />
                Clear
              </Button>
            </ListBulkBar>
          ) : null
        }
        footer={
          mode === "data" || mode === "long" || mode === "disabled" ? (
            <Pagination
              rangeLabel="Showing 1–3 of 3"
              page={page}
              pageCount={3}
              onPageChange={setPage}
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
