import type { Meta, StoryObj } from "@storybook/react";
import { SkipLink } from "./SkipLink";

const meta: Meta<typeof SkipLink> = {
  title: "Components/SkipLink",
  component: SkipLink,
  parameters: { layout: "fullscreen" },
};
export default meta;

export const FocusVisible: StoryObj = {
  render: () => (
    <div style={{ padding: 24, minHeight: 200, background: "var(--panel-ground)" }}>
      <SkipLink href="#main">Skip to main content</SkipLink>
      <p style={{ fontSize: 13, color: "var(--ink-2)" }}>
        Press Tab — SkipLink becomes visible with 2px focus outline.
      </p>
      <div id="main" tabIndex={-1} style={{ marginTop: 24, padding: 16, background: "var(--surface)", borderRadius: 10 }}>
        Main content target
      </div>
    </div>
  ),
};
