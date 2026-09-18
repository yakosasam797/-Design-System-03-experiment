import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";

const meta: Meta = {
  title: "Foundations/Colorography",
  parameters: { layout: "padded" },
};
export default meta;

type Swatch = { name: string; varName: string; note?: string };

function SwatchCard({ name, varName, note }: Swatch) {
  const style = { background: `var(${varName})` } as CSSProperties;
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: 10,
        overflow: "hidden",
        background: "var(--surface)",
        minWidth: 140,
      }}
    >
      <div style={{ ...style, height: 56 }} />
      <div style={{ padding: "8px 10px", fontSize: 12 }}>
        <div style={{ fontWeight: 600, color: "var(--ink)" }}>{name}</div>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10.5, color: "var(--ink-2)" }}>{varName}</div>
        {note ? <div style={{ color: "var(--ink-3)", marginTop: 4 }}>{note}</div> : null}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 className="pt-title" style={{ fontSize: 18, margin: "0 0 12px" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{children}</div>
    </section>
  );
}

export const Overview: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 880, color: "var(--ink)" }}>
      <h1 className="pt-title" style={{ fontSize: 24, margin: "0 0 8px" }}>
        Colorography
      </h1>
      <p style={{ margin: "0 0 16px", color: "var(--ink-2)", fontSize: 14, lineHeight: 1.5 }}>
        Teal = <strong>work</strong>. Pink = <strong>place / person</strong>. Status uses success / warning / danger /
        information (slate). Channel blue is for email/avatar only — not status info.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ padding: 14, borderRadius: 10, background: "var(--accent)", color: "var(--on-brand)" }}>
          Work / primary action
        </div>
        <div style={{ padding: 14, borderRadius: 10, background: "var(--pink)", color: "var(--on-brand)" }}>
          Person / secondary action
        </div>
        <div
          style={{
            padding: 14,
            borderRadius: 999,
            background: "var(--ok-bg)",
            color: "var(--ok)",
            border: "1px solid var(--ok-line)",
            textAlign: "center",
          }}
        >
          Status success
        </div>
        <div
          style={{
            padding: 14,
            borderRadius: 999,
            background: "var(--info-bg)",
            color: "var(--info)",
            border: "1px solid var(--info-line)",
            textAlign: "center",
          }}
        >
          Status info (slate)
        </div>
      </div>
    </div>
  ),
};

export const PrimitivesTeal: StoryObj = {
  name: "Primitives · Teal",
  render: () => (
    <Section title="Teal (work)">
      {[
        { name: "teal.50", varName: "--pt-teal-50" },
        { name: "teal.100", varName: "--pt-teal-100" },
        { name: "teal.200", varName: "--pt-teal-200" },
        { name: "teal.500", varName: "--pt-teal-500", note: "Primary" },
        { name: "teal.600", varName: "--pt-teal-600", note: "Hover" },
        { name: "teal.700", varName: "--pt-teal-700", note: "Pressed" },
      ].map((s) => (
        <SwatchCard key={s.varName} {...s} />
      ))}
    </Section>
  ),
};

export const PrimitivesPink: StoryObj = {
  name: "Primitives · Pink",
  render: () => (
    <Section title="Pink (place / person)">
      {[
        { name: "pink.50", varName: "--pt-pink-50" },
        { name: "pink.80", varName: "--pt-pink-80", note: "Selection" },
        { name: "pink.100", varName: "--pt-pink-100", note: "Avatar bg" },
        { name: "pink.200", varName: "--pt-pink-200" },
        { name: "pink.500", varName: "--pt-pink-500", note: "Default + focus" },
        { name: "pink.700", varName: "--pt-pink-700", note: "Ink / avatar text" },
      ].map((s) => (
        <SwatchCard key={s.varName} {...s} />
      ))}
    </Section>
  ),
};

export const PrimitivesNeutral: StoryObj = {
  name: "Primitives · Neutral",
  render: () => (
    <Section title="Neutral">
      {[
        "--pt-neutral-0",
        "--pt-neutral-10",
        "--pt-neutral-20",
        "--pt-neutral-25",
        "--pt-neutral-40",
        "--pt-neutral-50",
        "--pt-neutral-75",
        "--pt-neutral-100",
        "--pt-neutral-200",
        "--pt-neutral-300",
        "--pt-neutral-350",
        "--pt-neutral-400",
        "--pt-neutral-500",
        "--pt-neutral-600",
        "--pt-neutral-700",
        "--pt-neutral-900",
        "--pt-neutral-950",
      ].map((v) => (
        <SwatchCard key={v} name={v.replace("--pt-", "")} varName={v} />
      ))}
    </Section>
  ),
};

export const PrimitivesStatus: StoryObj = {
  name: "Primitives · Status + Channel",
  render: () => (
    <>
      <Section title="Success">
        {["--pt-success-50", "--pt-success-100", "--pt-success-200", "--pt-success-600"].map((v) => (
          <SwatchCard key={v} name={v.replace("--pt-", "")} varName={v} />
        ))}
      </Section>
      <Section title="Warning">
        {["--pt-warning-50", "--pt-warning-100", "--pt-warning-200", "--pt-warning-600"].map((v) => (
          <SwatchCard key={v} name={v.replace("--pt-", "")} varName={v} />
        ))}
      </Section>
      <Section title="Danger">
        {["--pt-danger-50", "--pt-danger-100", "--pt-danger-200", "--pt-danger-600"].map((v) => (
          <SwatchCard key={v} name={v.replace("--pt-", "")} varName={v} />
        ))}
      </Section>
      <Section title="Information (slate)">
        {["--pt-info-50", "--pt-info-100", "--pt-info-200", "--pt-info-700"].map((v) => (
          <SwatchCard key={v} name={v.replace("--pt-", "")} varName={v} />
        ))}
      </Section>
      <Section title="Channel blue (email only)">
        {["--pt-blue-50", "--pt-blue-200", "--pt-blue-600"].map((v) => (
          <SwatchCard key={v} name={v.replace("--pt-", "")} varName={v} />
        ))}
      </Section>
    </>
  ),
};

export const SemanticBackgrounds: StoryObj = {
  name: "Semantic · Backgrounds",
  render: () => (
    <Section title="Backgrounds">
      {[
        { name: "page", varName: "--color-bg-page" },
        { name: "surface", varName: "--color-bg-surface" },
        { name: "raised", varName: "--color-bg-raised" },
        { name: "raised hover", varName: "--color-bg-raised-hover" },
        { name: "subtle", varName: "--color-bg-subtle" },
        { name: "muted", varName: "--color-bg-muted" },
        { name: "muted strong", varName: "--color-bg-muted-strong" },
        { name: "selected", varName: "--color-bg-selected" },
        { name: "tooltip", varName: "--color-bg-tooltip" },
        { name: "selection", varName: "--color-bg-selection" },
      ].map((s) => (
        <SwatchCard key={s.varName} {...s} />
      ))}
    </Section>
  ),
};

export const SemanticTextBorders: StoryObj = {
  name: "Semantic · Text & Borders",
  render: () => (
    <>
      <Section title="Text">
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
          <span style={{ color: "var(--color-text-primary)" }}>Primary — --color-text-primary</span>
          <span style={{ color: "var(--color-text-secondary)" }}>Secondary — --color-text-secondary</span>
          <span style={{ color: "var(--color-text-muted)" }}>Muted — --color-text-muted</span>
          <span style={{ color: "var(--color-text-disabled)" }}>Disabled — --color-text-disabled (not for body)</span>
          <span style={{ color: "var(--color-text-selected)" }}>Selected — --color-text-selected</span>
          <span
            style={{
              background: "var(--pink)",
              color: "var(--color-text-on-brand-muted)",
              padding: "6px 10px",
              borderRadius: 8,
              display: "inline-block",
            }}
          >
            On-brand muted
          </span>
        </div>
      </Section>
      <Section title="Borders">
        {[
          { name: "default", varName: "--color-border-default" },
          { name: "subtle", varName: "--color-border-subtle" },
          { name: "strong", varName: "--color-border-strong" },
          { name: "brand", varName: "--color-border-brand" },
        ].map((s) => (
          <div
            key={s.varName}
            style={{
              width: 140,
              height: 56,
              borderRadius: 10,
              border: `2px solid var(${s.varName})`,
              background: "var(--surface)",
              display: "grid",
              placeItems: "center",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {s.name}
          </div>
        ))}
      </Section>
    </>
  ),
};

export const SemanticActionsStatus: StoryObj = {
  name: "Semantic · Actions & Status",
  render: () => (
    <>
      <Section title="Actions">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: 32,
            padding: "0 11px",
            borderRadius: 8,
            background: "var(--color-action-primary)",
            color: "var(--on-brand)",
            fontFamily: "Onest, sans-serif",
            fontSize: 12.5,
            fontWeight: 600,
          }}
        >
          Primary
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: 32,
            padding: "0 11px",
            borderRadius: 8,
            background: "var(--color-action-secondary)",
            color: "var(--on-brand)",
            fontFamily: "Onest, sans-serif",
            fontSize: 12.5,
            fontWeight: 600,
          }}
        >
          Secondary
        </div>
        <div
          style={{
            display: "inline-flex",
            height: 32,
            padding: "0 11px",
            alignItems: "center",
            borderRadius: 8,
            background: "var(--color-bg-selected)",
            color: "var(--color-text-selected)",
            fontSize: 12.5,
            fontWeight: 600,
          }}
        >
          Selected
        </div>
      </Section>
      <Section title="Status">
        {(
          [
            ["success", "--ok", "--ok-bg", "--ok-line"],
            ["warning", "--warn", "--warn-bg", "--warn-line"],
            ["danger", "--bad", "--bad-bg", "--bad-line"],
            ["info", "--info", "--info-bg", "--info-line"],
          ] as const
        ).map(([label, text, bg, line]) => (
          <span
            key={label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 28,
              padding: "0 10px",
              borderRadius: 999,
              background: `var(${bg})`,
              color: `var(${text})`,
              border: `1px solid var(${line})`,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        ))}
      </Section>
      <Section title="Focus">
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid var(--line)",
              outline: "2px solid var(--color-focus-person)",
              outlineOffset: 2,
            }}
          >
            focus.person
          </div>
          <div
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid var(--color-focus-work)",
              boxShadow: "0 0 0 3px var(--color-focus-work-soft)",
            }}
          >
            focus.work + soft
          </div>
        </div>
      </Section>
    </>
  ),
};

export const ContrastChecklist: StoryObj = {
  name: "Contrast checklist",
  render: () => {
    const rows = [
      ["ink / surface", "17.76", "Pass"],
      ["ink-2 / surface", "9.67", "Pass"],
      ["ink-3 / surface", "6.77", "Pass"],
      ["ink-4 / surface", "3.21", "Fail as body — disabled only"],
      ["white / accent", "6.12", "Pass"],
      ["white / pink", "5.07", "Pass"],
      ["pink.700 / pink.100 (avatar)", "~5.8+", "Pass (D4 fix)"],
      ["ok / ok-bg", "4.51", "Pass borderline"],
      ["warn / warn-bg", "4.51", "Pass borderline"],
      ["bad / bad-bg", "4.72", "Pass"],
      ["info / info-bg", "8.64", "Pass"],
    ];
    return (
      <table style={{ borderCollapse: "collapse", fontSize: 13, width: "100%", maxWidth: 640 }}>
        <thead>
          <tr>
            {["Pair", "Ratio", "AA"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "8px 10px",
                  borderBottom: "1px solid var(--line)",
                  color: "var(--ink-2)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a}>
              <td style={{ padding: "8px 10px", borderBottom: "1px solid var(--line-2)" }}>{a}</td>
              <td style={{ padding: "8px 10px", borderBottom: "1px solid var(--line-2)", fontFamily: "monospace" }}>
                {b}
              </td>
              <td style={{ padding: "8px 10px", borderBottom: "1px solid var(--line-2)" }}>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export const DoAndDont: StoryObj = {
  name: "Do / Don’t",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 800 }}>
      <div style={{ padding: 16, borderRadius: 12, border: "1px solid var(--ok-line)", background: "var(--ok-bg)" }}>
        <h3 style={{ margin: "0 0 8px", color: "var(--ok)" }}>Do</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink)", fontSize: 13, lineHeight: 1.5 }}>
          <li>Teal for work actions</li>
          <li>Pink for person, selection, focus outline</li>
          <li>Four status stacks only for chips</li>
          <li>Tokens over raw hex</li>
        </ul>
      </div>
      <div style={{ padding: 16, borderRadius: 12, border: "1px solid var(--bad-line)", background: "var(--bad-bg)" }}>
        <h3 style={{ margin: "0 0 8px", color: "var(--bad)" }}>Don’t</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink)", fontSize: 13, lineHeight: 1.5 }}>
          <li>Invent unused 50–900 ramps</li>
          <li>Use blue as status “open”</li>
          <li>Use pink/teal as success/danger</li>
          <li>Use ink-4 for essential reading</li>
        </ul>
      </div>
    </div>
  ),
};
