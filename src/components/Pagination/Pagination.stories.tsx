import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Pagination } from "./Pagination";
import { pageCountFor, rangeLabel } from "./paginationMath";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**Booking canonical** is this file’s first story. Product Booking screens must use that preset.

Do **not** pick a Test states story because it looks closer to a multi-page dataset. \`MultiplePages\`, \`TwoPages\`, First/Middle/Last, and the other examples live under **Components/Pagination/Test states**. They exercise arrows and range math. They are not the Booking appearance.

Booking chrome is always compact: result-count on the left; Previous; **only the current page number**; Next. The number is the current page (it can be 2, 3, …). Previous is disabled on page 1; Next is disabled on the last page.
        `.trim(),
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Canonical Booking list / every Booking sheet footer.
 * Import `Pagination` from `@paryatech/design-system` with these props.
 * Do not copy Test states / MultiplePages.
 */
export const BookingSinglePage: Story = {
  name: "Booking canonical",
  parameters: {
    docs: {
      description: {
        story:
          "Booking module preset. Range + Prev + current page + Next. Use this configuration (with `rangeLabel` / `page` / `pageCount` from the screen’s real totals), not MultiplePages.",
      },
    },
  },
  args: {
    rangeLabel: "Showing 1–3 of 3",
    page: 1,
    pageCount: 1,
    onPageChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 1–3 of 3")).toBeInTheDocument();
    const prev = canvas.getByRole("button", { name: "Previous page" });
    const next = canvas.getByRole("button", { name: "Next page" });
    await expect(prev).toBeDisabled();
    await expect(next).toBeDisabled();
    const pageBtns = canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    await expect(pageBtns).toHaveLength(1);
    await expect(pageBtns[0]).toHaveAttribute("aria-current", "page");
    await expect(pageBtns[0]).toHaveTextContent("1");
    await userEvent.click(prev);
    await expect(args.onPageChange).not.toHaveBeenCalled();
  },
};

/** 10-row list at page size 10 — still the compact Booking chrome, not MultiplePages. */
export const TenItemsSinglePage: Story = {
  name: "Ten-item list preset",
  args: {
    rangeLabel: rangeLabel(1, 10, 10),
    page: 1,
    pageCount: pageCountFor(10, 10),
    onPageChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 1–10 of 10")).toBeInTheDocument();
    const pageBtns = canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    await expect(pageBtns).toHaveLength(1);
    await expect(canvas.getByRole("button", { name: "Previous page" })).toBeDisabled();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeDisabled();
  },
};
