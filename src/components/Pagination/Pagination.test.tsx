import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";
import { pageCountFor, rangeLabel } from "./paginationMath";

afterEach(() => cleanup());

describe("Pagination page math", () => {
  it("computes page count from total and page size", () => {
    expect(pageCountFor(3, 10)).toBe(1);
    expect(pageCountFor(25, 10)).toBe(3);
    expect(pageCountFor(0, 10)).toBe(1);
  });

  it("renders a single page for 10 items at page size 10", () => {
    expect(pageCountFor(10, 10)).toBe(1);
    expect(rangeLabel(1, 10, 10)).toBe("Showing 1–10 of 10");
    const onPageChange = vi.fn();
    render(
      <Pagination rangeLabel={rangeLabel(1, 10, 10)} page={1} pageCount={1} onPageChange={onPageChange} />,
    );
    const pageBtns = screen.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    expect(pageBtns).toHaveLength(1);
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  });

  it("renders two page numbers only when total is 11 at page size 10", () => {
    expect(pageCountFor(11, 10)).toBe(2);
    expect(rangeLabel(1, 10, 11)).toBe("Showing 1–10 of 11");
    render(
      <Pagination rangeLabel={rangeLabel(1, 10, 11)} page={1} pageCount={2} onPageChange={vi.fn()} />,
    );
    const pageBtns = screen.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    expect(pageBtns).toHaveLength(2);
    expect(screen.getByRole("button", { name: "Next page" })).toBeEnabled();
  });
});

describe("Pagination Booking single-page", () => {
  it("renders one page button with both arrows disabled", async () => {
    const onPageChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Pagination rangeLabel="Showing 1–3 of 3" page={1} pageCount={1} onPageChange={onPageChange} />,
    );
    expect(screen.getByText("Showing 1–3 of 3")).toBeInTheDocument();
    const pageBtns = screen.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    expect(pageBtns).toHaveLength(1);
    expect(pageBtns[0]).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).not.toHaveBeenCalled();
  });
});

describe("Pagination multi-page boundaries", () => {
  it("disables prev on first page and calls next with page+1", async () => {
    const onPageChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Pagination
        rangeLabel={rangeLabel(1, 10, 25)}
        page={1}
        pageCount={3}
        onPageChange={onPageChange}
      />,
    );
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("marks middle page active and navigates via page number", async () => {
    const onPageChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Pagination
        rangeLabel={rangeLabel(2, 10, 25)}
        page={2}
        pageCount={3}
        onPageChange={onPageChange}
      />,
    );
    const pages = screen.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
    expect(pages[1]).toHaveAttribute("aria-current", "page");
    await user.click(pages[2]);
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("disables next on last page", async () => {
    const onPageChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Pagination
        rangeLabel={rangeLabel(3, 10, 25)}
        page={3}
        pageCount={3}
        onPageChange={onPageChange}
      />,
    );
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
