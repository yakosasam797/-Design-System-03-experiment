import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/SizeRadius",
};
export default meta;

export const ControlHeights: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, fontFamily: "var(--font-sans)" }}>
      {[
        ["sm", "var(--size-control-sm)"],
        ["toolbar", "var(--size-control-toolbar)"],
        ["md", "var(--size-control-md)"],
      ].map(([name, token]) => (
        <div key={name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <code style={{ width: 80 }}>{name}</code>
          <div
            style={{
              height: token,
              width: 120,
              background: "var(--accent-soft)",
              border: "1px solid var(--accent)",
              borderRadius: "var(--radius-sm)",
            }}
          />
          <span style={{ color: "var(--ink-2)", fontSize: 13 }}>{token}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        {[
          ["sm 8", "var(--radius-sm)"],
          ["md 10", "var(--radius-md)"],
          ["pill", "var(--radius-pill)"],
        ].map(([label, r]) => (
          <div
            key={label}
            style={{
              width: 64,
              height: 32,
              borderRadius: r,
              border: "1px solid var(--line)",
              background: "var(--pink-soft)",
              display: "grid",
              placeItems: "center",
              fontSize: 11,
            }}
          >
            {label}
          </div>
        ))}
      </div>
      <p style={{ color: "var(--ink-3)", fontSize: 12.5 }}>
        Breakpoints: --bp-shell 1000px · --bp-communication 820px
      </p>
    </div>
  ),
};
