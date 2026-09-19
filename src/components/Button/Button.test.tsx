import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Button, RowActions } from "./Button";

afterEach(() => cleanup());

describe("Button table row actions", () => {
  it("renders labelled brand sm with a leading icon slot", () => {
    render(
      <Button variant="brand" size="sm" leadingIcon={<span data-testid="eye" />}>
        View
      </Button>,
    );
    const btn = screen.getByRole("button", { name: "View" });
    expect(btn).toHaveClass("pt-btn--brand", "pt-btn--sm");
    expect(btn.querySelector(".pt-btn__icon")).toBeTruthy();
    expect(screen.getByTestId("eye")).toBeInTheDocument();
  });

  it("hides children when iconOnly and exposes aria-label", () => {
    render(
      <Button variant="ghost" size="sm" iconOnly aria-label="More" leadingIcon={<span data-testid="dots" />}>
        More
      </Button>,
    );
    const btn = screen.getByRole("button", { name: "More" });
    expect(btn).toHaveClass("pt-btn--icon", "pt-btn--ghost", "pt-btn--sm");
    expect(btn).not.toHaveTextContent("More");
    expect(screen.getByTestId("dots")).toBeInTheDocument();
  });

  it("places icon-only More inside RowActions", () => {
    render(
      <RowActions>
        <Button variant="brand" size="sm">
          View
        </Button>
        <Button variant="ghost" size="sm" iconOnly aria-label="More" />
      </RowActions>,
    );
    const group = document.querySelector(".pt-row-acts");
    expect(group).toBeTruthy();
    expect(group?.querySelector(".pt-btn--icon")).toBeTruthy();
  });
});
