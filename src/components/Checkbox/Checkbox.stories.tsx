import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = { title: "Components/Checkbox", component: Checkbox };
export default meta;

export const States: StoryObj = {
  render: () => {
    const [a, setA] = useState<"off" | "on" | "indeterminate">("off");
    const [b, setB] = useState<"off" | "on" | "indeterminate">("on");
    const [c, setC] = useState<"off" | "on" | "indeterminate">("indeterminate");
    return (
      <div style={{ display: "flex", gap: 16 }}>
        <Checkbox state={a} onCheckedChange={setA} label="Off" />
        <Checkbox state={b} onCheckedChange={setB} label="On" />
        <Checkbox state={c} onCheckedChange={setC} label="Some" />
      </div>
    );
  },
};
