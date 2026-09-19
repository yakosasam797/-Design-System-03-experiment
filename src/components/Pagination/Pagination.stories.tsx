import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { pageCountFor, rangeLabel } from "./paginationMath";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Booking list / every Booking sheet footer:
 * 3 items on one page → Prev disabled, single "1" active, Next disabled.
 */
export const BookingSinglePage: Story = {
  name: "BookingSinglePage",
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

/** Faithful 10-row list recipe (Vendor CRM reference). Not a demo of two pages. */
export const TenItemsSinglePage: Story = {
  name: "TenItemsSinglePage",
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

/** Capability only — do not use this total in a 10-row product recipe. */
export const TwoPages: Story = {
  name: "TwoPages",
  args: {
    rangeLabel: rangeLabel(1, 10, 11),
    page: 1,
    pageCount: pageCountFor(11, 10),
    onPageChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 1–10 of 11")).toBeInTheDocument();
    const pageBtns = canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    await expect(pageBtns).toHaveLength(2);
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeEnabled();
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(args.onPageChange).toHaveBeenCalledWith(2);
  },
};

const PAGE_SIZE = 10;
const TOTAL_MULTI = 25;
const MULTI_COUNT = pageCountFor(TOTAL_MULTI, PAGE_SIZE); // 3

export const FirstPage: Story = {
  name: "FirstPage",
  args: {
    rangeLabel: rangeLabel(1, PAGE_SIZE, TOTAL_MULTI),
    page: 1,
    pageCount: MULTI_COUNT,
    onPageChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 1–10 of 25")).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Previous page" })).toBeDisabled();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeEnabled();
    const pages = canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    await expect(pages).toHaveLength(3);
    await expect(pages[0]).toHaveAttribute("aria-current", "page");
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(args.onPageChange).toHaveBeenCalledWith(2);
  },
};

export const MiddlePage: Story = {
  name: "MiddlePage",
  args: {
    rangeLabel: rangeLabel(2, PAGE_SIZE, TOTAL_MULTI),
    page: 2,
    pageCount: MULTI_COUNT,
    onPageChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 11–20 of 25")).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Previous page" })).toBeEnabled();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeEnabled();
    const pages = canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    await expect(pages[1]).toHaveAttribute("aria-current", "page");
    await userEvent.click(canvas.getByRole("button", { name: "Previous page" }));
    await expect(args.onPageChange).toHaveBeenCalledWith(1);
    await userEvent.click(pages[2]);
    await expect(args.onPageChange).toHaveBeenCalledWith(3);
  },
};

export const LastPage: Story = {
  name: "LastPage",
  args: {
    rangeLabel: rangeLabel(3, PAGE_SIZE, TOTAL_MULTI),
    page: 3,
    pageCount: MULTI_COUNT,
    onPageChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 21–25 of 25")).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Previous page" })).toBeEnabled();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeDisabled();
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(args.onPageChange).not.toHaveBeenCalled();
  },
};

/** Interactive multi-page with valid totals — not a Booking screen recipe. */
export const MultiplePages: Story = {
  name: "MultiplePages",
  render: function Render() {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        rangeLabel={rangeLabel(page, PAGE_SIZE, TOTAL_MULTI)}
        page={page}
        pageCount={MULTI_COUNT}
        onPageChange={setPage}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Showing 1–10 of 25")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(canvas.getByText("Showing 11–20 of 25")).toBeInTheDocument();
    const pages = canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    await expect(pages[1]).toHaveAttribute("aria-current", "page");
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(canvas.getByText("Showing 21–25 of 25")).toBeInTheDocument();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeDisabled();
  },
};

export const DisabledBoundaries: Story = {
  name: "DisabledBoundaries",
  args: {
    rangeLabel: "Showing 1–5 of 5",
    page: 1,
    pageCount: 1,
    onPageChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", { name: "Previous page" })).toBeDisabled();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeDisabled();
  },
};

export const NarrowViewport: Story = {
  name: "NarrowViewport",
  parameters: { viewport: { defaultViewport: "mobile1" } },
  args: {
    rangeLabel: "Showing 1–3 of 3",
    page: 1,
    pageCount: 1,
    onPageChange: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 390, margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};
