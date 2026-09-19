import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NotesDrawer } from "./NotesDrawer";
import { Button } from "../Button/Button";
import { SearchField } from "../SearchField/SearchField";
import { TextField } from "../TextField/TextField";

const meta: Meta<typeof NotesDrawer> = {
  title: "Components/NotesDrawer",
  component: NotesDrawer,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof NotesDrawer>;

function NotesDemo({ initialMode = "browse" as "browse" | "compose" }) {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState<"browse" | "compose">(initialMode);
  const [fil, setFil] = useState("all");

  return (
    <div style={{ minHeight: "100vh", background: "var(--ground)", padding: 24 }}>
      <Button variant="brand" size="sm" onClick={() => setOpen(true)}>
        Open notes
      </Button>
      <NotesDrawer
        open={open}
        onClose={() => setOpen(false)}
        mode={mode}
        onModeChange={setMode}
        search={<SearchField placeholder="Search notes" aria-label="Search notes" />}
        filters={[
          { id: "all", label: "All", active: fil === "all", onSelect: () => setFil("all") },
          { id: "pinned", label: "Pinned", active: fil === "pinned", onSelect: () => setFil("pinned") },
          { id: "mine", label: "Mine", active: fil === "mine", onSelect: () => setFil("mine") },
        ]}
        compose={<TextField multiline label="Note" placeholder="Write a note…" rows={6} />}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>Hotel confirmation pending</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 4 }}>Pinned · Yesterday</div>
          </div>
          <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>Customer prefers sea view</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 4 }}>2 days ago</div>
          </div>
        </div>
      </NotesDrawer>
    </div>
  );
}

export const Browse: Story = { render: () => <NotesDemo /> };
export const Compose: Story = { render: () => <NotesDemo initialMode="compose" /> };
