import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import {
  Icon,
  ICON_NAMES,
  ICON_REGISTRY,
  type IconName,
  type IconSize,
} from "../icons";

const meta: Meta = {
  title: "Foundations/Icons",
};
export default meta;
type Story = StoryObj;

const CATEGORIES = [
  "All",
  ...Array.from(new Set(ICON_NAMES.map((n) => ICON_REGISTRY[n].category))).sort(),
] as const;

const STATUSES = ["All", "approved", "deprecated", "awaiting-approval"] as const;
const MODES = ["All", "interactive", "decorative"] as const;

export const Catalogue: Story = {
  name: "Catalogue",
  render: function Render() {
    const [q, setQ] = useState("");
    const [category, setCategory] = useState<string>("All");
    const [component, setComponent] = useState("");
    const [screen, setScreen] = useState("");
    const [mode, setMode] = useState<string>("All");
    const [status, setStatus] = useState<string>("All");

    const screens = useMemo(() => {
      const s = new Set<string>();
      ICON_NAMES.forEach((n) => ICON_REGISTRY[n].screens.forEach((x) => s.add(x)));
      return ["", ...[...s].sort()];
    }, []);

    const names = useMemo(() => {
      return ICON_NAMES.filter((n) => {
        const meta = ICON_REGISTRY[n];
        const hay = `${n} ${meta.aliases.join(" ")} ${meta.category} ${meta.screens.join(" ")}`.toLowerCase();
        if (q && !hay.includes(q.toLowerCase())) return false;
        if (category !== "All" && meta.category !== category) return false;
        if (screen && !meta.screens.includes(screen)) return false;
        if (component && !hay.includes(component.toLowerCase())) return false;
        if (mode === "interactive" && !meta.interactive) return false;
        if (mode === "decorative" && meta.interactive) return false;
        if (status !== "All" && meta.status !== status) return false;
        return true;
      });
    }, [q, category, component, screen, mode, status]);

    return (
      <div style={{ fontFamily: "var(--font-sans)", padding: 8, color: "var(--ink)" }}>
        <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-display)", fontSize: 20 }}>
          Icon catalogue ({names.length}/{ICON_NAMES.length})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name / alias…"
            aria-label="Search icons"
            style={fieldStyle}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Category"
            style={fieldStyle}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            value={component}
            onChange={(e) => setComponent(e.target.value)}
            placeholder="Component filter…"
            aria-label="Component"
            style={fieldStyle}
          />
          <select
            value={screen}
            onChange={(e) => setScreen(e.target.value)}
            aria-label="Booking screen"
            style={fieldStyle}
          >
            {screens.map((s) => (
              <option key={s || "all"} value={s}>
                {s || "All screens"}
              </option>
            ))}
          </select>
          <select value={mode} onChange={(e) => setMode(e.target.value)} aria-label="Mode" style={fieldStyle}>
            {MODES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Status"
            style={fieldStyle}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {names.map((name: IconName) => {
            const meta = ICON_REGISTRY[name];
            return (
              <div
                key={name}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  padding: 12,
                  background: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  minHeight: 160,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon name={name} size="nav" />
                  <code style={{ fontSize: 12, fontWeight: 600 }}>{name}</code>
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-2)" }}>{meta.category}</div>
                <code style={{ fontSize: 10, color: "var(--ink-2)", wordBreak: "break-all" }}>
                  {`<Icon name="${name}" />`}
                </code>
                <div style={{ fontSize: 11, color: "var(--ink-2)" }}>
                  Sizes: {meta.sizes.join(", ")}px
                  {meta.strokeWidth != null ? ` · stroke ${meta.strokeWidth}` : meta.fill ? " · fill" : ""}
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-2)" }}>
                  Booking: {meta.screens.slice(0, 4).join(", ") || "—"}
                  {meta.screens.length > 4 ? "…" : ""}
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}>{meta.a11y}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

export const SizeStrokeMatrix: Story = {
  name: "Size × stroke matrix",
  render: () => {
    const samples: IconName[] = ["plus", "search", "bookings", "pin", "chevronLeft"].filter((n) =>
      ICON_NAMES.includes(n as IconName),
    ) as IconName[];
    const sizes: IconSize[] = ["2xs", "xs", "sm", "md", "nav", "lg"];
    return (
      <div style={{ padding: 16, fontFamily: "var(--font-sans)" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={th}>Icon</th>
              {sizes.map((s) => (
                <th key={s} style={th}>
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {samples.map((name) => (
              <tr key={name}>
                <td style={td}>
                  <code>{name}</code>
                </td>
                {sizes.map((s) => (
                  <td key={s} style={{ ...td, textAlign: "center" }}>
                    <Icon name={name} size={s} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

const fieldStyle: CSSProperties = {
  height: 36,
  padding: "0 10px",
  borderRadius: 10,
  border: "1px solid var(--line)",
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  background: "var(--surface)",
};

const th: CSSProperties = {
  textAlign: "left",
  padding: 8,
  borderBottom: "1px solid var(--line)",
  fontSize: 12,
};
const td: CSSProperties = {
  padding: 8,
  borderBottom: "1px solid var(--line-2)",
  fontSize: 12,
};

// Keep legacy export name
export const Gallery = Catalogue;
