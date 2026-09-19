import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";
import { pageCountFor, rangeLabel } from "./paginationMath";

afterEach(() => cleanup());

function numberedButtons() {
  return screen.getAllByRole("button").filter((b) => /^\d+$/.test(b.textContent || ""));
}

describe("Pagination page math", () => {
  it("computes page count from total and page size", () => {
    expect(pageCountFor(3, 10)).toBe(1);
    expect(pageCountFor(25, 10)).toBe(3);
    expect(pageCountFor(0, 10)).toBe(1);
  });

  it("renders a single page for 10 items at page size 10", () => {
    expect(pageCountFor(10, 10)).toBe(1);
    expect(rangeLabel(1, 10, 10)).toBe("Showing 1–10 of 10");
    render(
      <Pagination rangeLabel={rangeLabel(1, 10, 10)} page={1} pageCount={1} onPageChange={vi.fn()} />,
    );
    expect(numberedButtons()).toHaveLength(1);
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  });

  it("keeps compact chrome when total is 11 at page size 10", () => {
    expect(pageCountFor(11, 10)).toBe(2);
    expect(rangeLabel(1, 10, 11)).toBe("Showing 1–10 of 11");
    render(
      <Pagination rangeLabel={rangeLabel(1, 10, 11)} page={1} pageCount={2} onPageChange={vi.fn()} />,
    );
    const pageBtns = numberedButtons();
    expect(pageBtns).toHaveLength(1);
    expect(pageBtns[0]).toHaveTextContent("1");
    expect(screen.getByRole("button", { name: "Next page" })).toBeEnabled();
  });
});

describe("Pagination Booking compact chrome", () => {
  it("renders one page button with both arrows disabled", async () => {
    const onPageChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Pagination rangeLabel="Showing 1–3 of 3" page={1} pageCount={1} onPageChange={onPageChange} />,
    );
    expect(screen.getByText("Showing 1–3 of 3")).toBeInTheDocument();
    const pageBtns = numberedButtons();
    expect(pageBtns).toHaveLength(1);
    expect(pageBtns[0]).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("shows the current page number, not a 1–N strip", () => {
    render(
      <Pagination
        rangeLabel={rangeLabel(2, 10, 25)}
        page={2}
        pageCount={3}
        onPageChange={vi.fn()}
      />,
    );
    const pages = numberedButtons();
    expect(pages).toHaveLength(1);
    expect(pages[0]).toHaveTextContent("2");
    expect(screen.queryByRole("button", { name: "1" })).toBeNull();
    expect(screen.queryByRole("button", { name: "3" })).toBeNull();
  });
});

describe("Pagination compact boundaries", () => {
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

  it("enables both arrows on a middle page", async () => {
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
    expect(numberedButtons()[0]).toHaveAttribute("aria-current", "page");
    await user.click(screen.getByRole("button", { name: "Next page" }));
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
    expect(numberedButtons()[0]).toHaveTextContent("3");
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "Next page" }));
    expect(onPageChange).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
