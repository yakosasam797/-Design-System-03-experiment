import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const DirectBooking: Story = {
  name: "Direct booking form",
  render: function Render() {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button variant="primary" size="sm" onClick={() => setOpen(true)}>
          Open modal
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          eyebrow="Bookings"
          title="Direct booking"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Create booking
              </Button>
            </>
          }
        >
          <TextField label="Booking name" placeholder="e.g. Sharma Family · Dubai" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <TextField label="Travel start" placeholder="18 Aug 2026" />
            <TextField label="Travel end" placeholder="22 Aug 2026" />
          </div>
        </Modal>
      </>
    );
  },
};

export const WideCatalog: Story = {
  name: "Wide · catalog shell",
  render: function Render() {
    const [open, setOpen] = useState(true);
    return (
      <Modal
        open={open}
        size="wide"
        onClose={() => setOpen(false)}
        eyebrow="Services & Vendors"
        title="Add from catalog"
        footer={
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <TextField label="Search Dubai catalog" type="search" placeholder="Hotels, transfers…" />
        <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 13.5 }}>Catalog list is Booking-specific content.</p>
      </Modal>
    );
  },
};
