import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
};
export default meta;

type Role = {
  name: string;
  sample: string;
  style: CSSProperties;
  vars: string;
};

function RoleRow({ name, sample, style, vars }: Role) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr 220px",
        gap: 12,
        alignItems: "baseline",
        padding: "10px 0",
        borderBottom: "1px solid var(--line-2)",
      }}
    >
      <code style={{ fontSize: 11, color: "var(--ink-2)" }}>{name}</code>
      <div style={style}>{sample}</div>
      <code style={{ fontSize: 10.5, fontFamily: "JetBrains Mono, monospace", color: "var(--ink-3)" }}>{vars}</code>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2 className="pt-title" style={{ fontSize: 18, margin: "0 0 8px" }}>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export const Roles: StoryObj = {
  name: "Roles",
  render: () => (
    <div style={{ maxWidth: 960, color: "var(--ink)" }}>
      <h1 className="pt-title type-heading-page" style={{ margin: "0 0 8px" }}>
        Typography
      </h1>
      <p style={{ margin: "0 0 20px", color: "var(--ink-2)", fontSize: 14, lineHeight: 1.5 }}>
        Roles consolidated from the Booking frontend (approved mapping). Flagged near-misses stay
        separate — no auto-normalization.
      </p>

      <Section title="Headings">
        <RoleRow
          name="heading-page"
          sample="Bookings"
          style={{
            fontFamily: "var(--type-heading-page-family)",
            fontSize: "var(--type-heading-page-size)",
            fontWeight: "var(--type-heading-page-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-heading-page-tracking)",
          }}
          vars="Onest · clamp 20–24 · 700 · −0.03em"
        />
        <RoleRow
          name="heading-record"
          sample="XYZ Family · Dubai"
          style={{
            fontFamily: "var(--type-heading-record-family)",
            fontSize: "var(--type-heading-record-size)",
            fontWeight: "var(--type-heading-record-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-heading-record-tracking)",
          }}
          vars="Onest · clamp 18–22 · 700 · −0.03em"
        />
        <RoleRow
          name="heading-brand"
          sample="paryatech"
          style={{
            fontFamily: "var(--type-heading-brand-family)",
            fontSize: "var(--type-heading-brand-size)",
            fontWeight: "var(--type-heading-brand-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-heading-brand-tracking)",
          }}
          vars="Onest · 17 · 700 · −0.03em"
        />
        <RoleRow
          name="heading-section"
          sample="Trip summary"
          style={{
            fontFamily: "var(--type-heading-section-family)",
            fontSize: "var(--type-heading-section-size)",
            fontWeight: "var(--type-heading-section-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-heading-section-tracking)",
          }}
          vars="Onest · 15 · 700 · −0.02em"
        />
        <RoleRow
          name="heading-service"
          sample="Tamara Hotel · Deluxe"
          style={{
            fontFamily: "var(--type-heading-service-family)",
            fontSize: "var(--type-heading-service-size)",
            fontWeight: "var(--type-heading-service-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-heading-service-tracking)",
            lineHeight: "var(--type-heading-service-line)",
          }}
          vars="Public Sans · 15 · 700 · −0.01em"
        />
      </Section>

      <Section title="Labels">
        <RoleRow
          name="label-button"
          sample="Save changes"
          style={{
            fontFamily: "var(--type-label-button-family)",
            fontSize: "var(--type-label-button-size)",
            fontWeight: "var(--type-label-button-weight)" as CSSProperties["fontWeight"],
          }}
          vars="Onest · 13.5 · 600"
        />
        <RoleRow
          name="label-button-sm"
          sample="Refresh"
          style={{
            fontFamily: "var(--type-label-button-sm-family)",
            fontSize: "var(--type-label-button-sm-size)",
            fontWeight: "var(--type-label-button-sm-weight)" as CSSProperties["fontWeight"],
          }}
          vars="Onest · 12.5 · 600"
        />
        <RoleRow
          name="label-compact"
          sample="Collapse"
          style={{
            fontFamily: "var(--type-label-compact-family)",
            fontSize: "var(--type-label-compact-size)",
            fontWeight: "var(--type-label-compact-weight)" as CSSProperties["fontWeight"],
          }}
          vars="Public Sans · 12.5 · 600 (F1/F16)"
        />
        <RoleRow
          name="label-nav"
          sample="Bookings"
          style={{
            fontFamily: "var(--type-label-nav-family)",
            fontSize: "var(--type-label-nav-size)",
            fontWeight: "var(--type-label-nav-weight)" as CSSProperties["fontWeight"],
          }}
          vars="Public Sans · 13.5 · 500"
        />
        <RoleRow
          name="label-tab"
          sample="Upcoming"
          style={{
            fontFamily: "var(--type-label-tab-family)",
            fontSize: "var(--type-label-tab-size)",
            fontWeight: "var(--type-label-tab-weight)" as CSSProperties["fontWeight"],
          }}
          vars="Onest · 13 · 500"
        />
        <RoleRow
          name="label-status"
          sample="Blocked"
          style={{
            fontFamily: "var(--type-label-status-family)",
            fontSize: "var(--type-label-status-size)",
            fontWeight: "var(--type-label-status-weight)" as CSSProperties["fontWeight"],
            lineHeight: "var(--type-label-status-line)",
          }}
          vars="Public Sans · 12 · 600 · lh 1"
        />
        <RoleRow
          name="label-table-head"
          sample="Customer"
          style={{
            fontFamily: "var(--type-label-table-head-family)",
            fontSize: "var(--type-label-table-head-size)",
            fontWeight: "var(--type-label-table-head-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-label-table-head-tracking)",
            color: "var(--ink-2)",
          }}
          vars="Public Sans · 12 · 600 · +0.01em (F2)"
        />
        <RoleRow
          name="label-field"
          sample="SUPPLIER COST"
          style={{
            fontFamily: "var(--type-label-field-family)",
            fontSize: "var(--type-label-field-size)",
            fontWeight: "var(--type-label-field-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-label-field-tracking)",
            textTransform: "uppercase",
            color: "var(--ink-2)",
          }}
          vars="Public Sans · 11 · 700 · 0.08em"
        />
        <RoleRow
          name="label-kpi"
          sample="RECEIVABLE"
          style={{
            fontFamily: "var(--type-label-kpi-family)",
            fontSize: "var(--type-label-kpi-size)",
            fontWeight: "var(--type-label-kpi-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-label-kpi-tracking)",
            textTransform: "uppercase",
            color: "var(--ink-2)",
          }}
          vars="Public Sans · 11 · 600 · 0.08em (F9)"
        />
      </Section>

      <Section title="Body">
        <RoleRow
          name="body"
          sample="Default reading text for the workspace."
          style={{
            fontFamily: "var(--type-body-family)",
            fontSize: "var(--type-body-size)",
            fontWeight: "var(--type-body-weight)" as CSSProperties["fontWeight"],
            lineHeight: "var(--type-body-line)",
          }}
          vars="Public Sans · 14 · 400 · 1.5"
        />
        <RoleRow
          name="body-emphasis"
          sample="XYZ Family Dubai"
          style={{
            fontFamily: "var(--type-body-emphasis-family)",
            fontSize: "var(--type-body-emphasis-size)",
            fontWeight: "var(--type-body-emphasis-weight)" as CSSProperties["fontWeight"],
            lineHeight: "var(--type-body-emphasis-line)",
          }}
          vars="Public Sans · 13.5 · 600"
        />
        <RoleRow
          name="body-day"
          sample="Day 1"
          style={{
            fontFamily: "var(--type-body-day-family)",
            fontSize: "var(--type-body-day-size)",
            fontWeight: "var(--type-body-day-weight)" as CSSProperties["fontWeight"],
          }}
          vars="Onest · 13.5 · 600 (F3)"
        />
        <RoleRow
          name="body-secondary"
          sample="Dubai · 18 Aug"
          style={{
            fontFamily: "var(--type-body-secondary-family)",
            fontSize: "var(--type-body-secondary-size)",
            fontWeight: "var(--type-body-secondary-weight)" as CSSProperties["fontWeight"],
            color: "var(--ink-2)",
          }}
          vars="Public Sans · 12.5 · 400"
        />
        <RoleRow
          name="body-copy"
          sample="Try another stage or clear filters."
          style={{
            fontFamily: "var(--type-body-copy-family)",
            fontSize: "var(--type-body-copy-size)",
            fontWeight: "var(--type-body-copy-weight)" as CSSProperties["fontWeight"],
            color: "var(--ink-2)",
          }}
          vars="Public Sans · 13 · 400"
        />
      </Section>

      <Section title="Mono">
        <RoleRow
          name="mono-money"
          sample="₹1,24,500"
          style={{
            fontFamily: "var(--type-mono-money-family)",
            fontSize: "var(--type-mono-money-size)",
            fontWeight: "var(--type-mono-money-weight)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--type-mono-money-tracking)",
          }}
          vars="JetBrains Mono · 13.5 · 600"
        />
        <RoleRow
          name="mono-id"
          sample="BK-2026-000003"
          style={{
            fontFamily: "var(--type-mono-id-family)",
            fontSize: "var(--type-mono-id-size)",
            fontWeight: "var(--type-mono-id-weight)" as CSSProperties["fontWeight"],
            color: "var(--ink-2)",
          }}
          vars="JetBrains Mono · 11 · 400"
        />
        <RoleRow
          name="mono-range"
          sample="1–3 of 3"
          style={{
            fontFamily: "var(--type-mono-range-family)",
            fontSize: "var(--type-mono-range-size)",
            fontWeight: "var(--type-mono-range-weight)" as CSSProperties["fontWeight"],
            color: "var(--ink-2)",
          }}
          vars="JetBrains Mono · 12 · 400"
        />
        <RoleRow
          name="mono-count"
          sample="3"
          style={{
            fontFamily: "var(--type-mono-count-family)",
            fontSize: "var(--type-mono-count-size)",
            fontWeight: "var(--type-mono-count-weight)" as CSSProperties["fontWeight"],
          }}
          vars="JetBrains Mono · 10.5 · 600"
        />
      </Section>
    </div>
  ),
};
