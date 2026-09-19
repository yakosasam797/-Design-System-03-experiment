import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DetailPage } from "./DetailPage";
import { AppShell } from "../AppShell/AppShell";
import { TabBar } from "../../components/TabBar/TabBar";
import { StatusChip } from "../../components/StatusChip/StatusChip";
import { Button } from "../../components/Button/Button";
import { Avatar } from "../../components/Avatar/Avatar";
import { KpiStrip } from "../../components/KpiStrip/KpiStrip";
import { SheetToolbar } from "../../components/SheetToolbar/SheetToolbar";
import { SearchField } from "../../components/SearchField/SearchField";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { Icon } from "../../icons";
import { NotesDrawer } from "../../components/NotesDrawer/NotesDrawer";
import { TextField } from "../../components/TextField/TextField";
import { IconButton } from "../../components/IconButton/IconButton";
import { NotesStrip } from "../../components/NotesStrip/NotesStrip";
import { CreditsMeter } from "../../components/CreditsMeter/CreditsMeter";
import { NavItem } from "../../components/SidebarNav/SidebarNav";

const detailTabs = [
  { id: "overview", label: "Overview" },
  { id: "services", label: "Services" },
  { id: "tasks", label: "Tasks" },
  { id: "travellers", label: "Travellers" },
  { id: "documents", label: "Documents" },
  { id: "finance", label: "Finance" },
];

const meta: Meta<typeof DetailPage> = {
  title: "Patterns/DetailPage",
  component: DetailPage,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof DetailPage>;

function bookIcon() {
  return <Icon name="bookings" size="nav" />;
}

function DetailRecipe() {
  const [tab, setTab] = useState("overview");
  const [notesOpen, setNotesOpen] = useState(false);
  const [notesMode, setNotesMode] = useState<"browse" | "compose">("browse");
  const [filter, setFilter] = useState("all");
  const [noteFilter, setNoteFilter] = useState("all");

  return (
    <>
      <AppShell
        crumbs={
          <>
            <span>Operations</span>
            <span>/</span>
            <span>Bookings</span>
            <span>/</span>
            <strong>XYZ Family · Dubai</strong>
          </>
        }
        search={<SearchField placeholder="Search anything" style={{ flex: "0 1 280px", maxWidth: 380 }} />}
        actions={
          <>
            <IconButton label="Settings">
              <Icon name="settings" />
            </IconButton>
            <IconButton label="Help">
              <Icon name="help" />
            </IconButton>
            <IconButton label="Notifications" alert>
              <Icon name="bell" />
            </IconButton>
          </>
        }
        notes={<NotesStrip label="Booking notes" badge={3} onOpen={() => setNotesOpen(true)} />}
        nav={
          <nav aria-label="Primary" className="pt-sidenav">
            <NavItem label="Bookings" tip="Bookings" active icon={bookIcon()} />
          </nav>
        }
        sidebarFooter={<CreditsMeter remaining={720} total={1000} />}
      >
        <DetailPage
          title="XYZ Family · Dubai"
          status={<StatusChip tone="blocked">At risk</StatusChip>}
          meta={
            <>
              <span>BK-2026-000003</span>
              <span>·</span>
              <span>18–22 Aug 2026</span>
              <span>·</span>
              <span>3 travellers</span>
            </>
          }
          owners={
            <>
              <Avatar tone="pink" size={28}>
                VJ
              </Avatar>
              <span>Vikram +2</span>
            </>
          }
          actions={
            <Button variant="primary" size="toolbar" leadingIcon={<Icon name="edit" />}>
              Edit booking
            </Button>
          }
          tabs={
            <TabBar items={detailTabs} value={tab} onValueChange={setTab} aria-label="Detail sections" />
          }
        >
          {tab === "overview" ? (
            <KpiStrip
              items={[
                {
                  id: "pax",
                  label: "Travellers",
                  value: "3",
                  tone: "person",
                  icon: <Icon name="people" />,
                },
                {
                  id: "nights",
                  label: "Nights",
                  value: "4",
                  tone: "work",
                  icon: <Icon name="calendar" />,
                },
                {
                  id: "balance",
                  label: "Balance due",
                  value: "₹16,500",
                  tone: "danger",
                  icon: <Icon name="bell" />,
                },
                {
                  id: "ready",
                  label: "Readiness",
                  value: "62%",
                  tone: "warn",
                  icon: <Icon name="refresh" />,
                },
              ]}
            />
          ) : (
            <>
              <SheetToolbar
                search={<SearchField placeholder="Search rows" aria-label="Search sheet" />}
                filters={
                  <FilterSelect
                    tip="Filter"
                    options={[
                      { value: "all", label: "All" },
                      { value: "open", label: "Open" },
                    ]}
                    value={filter}
                    onChange={setFilter}
                  />
                }
                actions={
                  <Button variant="primary" size="toolbar" leadingIcon={<Icon name="plus" />}>
                    Add row
                  </Button>
                }
              />
              <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 14 }}>
                Sheet panel placeholder for <strong>{tab}</strong> — compose with DataSheet in product code.
              </p>
            </>
          )}
        </DetailPage>
      </AppShell>

      <NotesDrawer
        open={notesOpen}
        onClose={() => setNotesOpen(false)}
        mode={notesMode}
        onModeChange={setNotesMode}
        search={<SearchField placeholder="Search notes" aria-label="Search notes" />}
        filters={[
          { id: "all", label: "All", active: noteFilter === "all", onSelect: () => setNoteFilter("all") },
          {
            id: "pinned",
            label: "Pinned",
            active: noteFilter === "pinned",
            onSelect: () => setNoteFilter("pinned"),
          },
          {
            id: "mine",
            label: "Mine",
            active: noteFilter === "mine",
            onSelect: () => setNoteFilter("mine"),
          },
        ]}
        compose={<TextField multiline label="Note" placeholder="Write a note…" rows={6} />}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
          <article
            style={{
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: 12,
              background: "var(--surface-2)",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Hotel confirmation pending</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)" }}>Pinned · Vikram · Yesterday</div>
          </article>
          <article
            style={{
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: 12,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Customer prefers sea view</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)" }}>Ananya · 2 days ago</div>
          </article>
        </div>
      </NotesDrawer>
    </>
  );
}

export const Overview: Story = { render: () => <DetailRecipe /> };

export const Narrow: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  render: () => (
    <div style={{ maxWidth: 390, margin: "0 auto", height: "100vh", overflow: "auto" }}>
      <DetailRecipe />
    </div>
  ),
};
