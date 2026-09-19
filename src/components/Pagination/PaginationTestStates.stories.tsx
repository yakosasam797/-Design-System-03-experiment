import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { pageCountFor, rangeLabel } from "./paginationMath";

/**
 * Capability / interaction examples only.
 * Product Booking screens must use Components/Pagination → Booking canonical.
 * Do not copy these into a module because the dataset has more than one page.
 * Compact chrome still applies: one current-page number, never a 1–N strip.
 */
const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination/Test states",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Test states for arrows, range math, and compact current-page display. Not the Booking product preset. Implementers must use the documented module story under Components/Pagination (Booking canonical), not a visually similar example from this folder.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

const PAGE_SIZE = 10;
const TOTAL_MULTI = 25;
const MULTI_COUNT = pageCountFor(TOTAL_MULTI, PAGE_SIZE); // 3

function numberedButtons(canvas: ReturnType<typeof within>) {
  return canvas.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
}

/** Two logical pages — still one numbered control (the current page). */
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
    const pageBtns = numberedButtons(canvas);
    await expect(pageBtns).toHaveLength(1);
    await expect(pageBtns[0]).toHaveTextContent("1");
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeEnabled();
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(args.onPageChange).toHaveBeenCalledWith(2);
  },
};

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
    const pages = numberedButtons(canvas);
    await expect(pages).toHaveLength(1);
    await expect(pages[0]).toHaveTextContent("1");
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
    const pages = numberedButtons(canvas);
    await expect(pages).toHaveLength(1);
    await expect(pages[0]).toHaveTextContent("2");
    await expect(pages[0]).toHaveAttribute("aria-current", "page");
    await userEvent.click(canvas.getByRole("button", { name: "Previous page" }));
    await expect(args.onPageChange).toHaveBeenCalledWith(1);
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
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
    const pages = numberedButtons(canvas);
    await expect(pages).toHaveLength(1);
    await expect(pages[0]).toHaveTextContent("3");
    await expect(canvas.getByRole("button", { name: "Previous page" })).toBeEnabled();
    await expect(canvas.getByRole("button", { name: "Next page" })).toBeDisabled();
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(args.onPageChange).not.toHaveBeenCalled();
  },
};

/** Interactive compact pager — still one number, which changes with the page. */
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
    const pages = numberedButtons(canvas);
    await expect(pages).toHaveLength(1);
    await expect(pages[0]).toHaveTextContent("2");
    await expect(pages[0]).toHaveAttribute("aria-current", "page");
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await expect(canvas.getByText("Showing 21–25 of 25")).toBeInTheDocument();
    await expect(numberedButtons(canvas)[0]).toHaveTextContent("3");
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
