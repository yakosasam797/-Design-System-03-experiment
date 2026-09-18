import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = { title: "Components/Pagination", component: Pagination };
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination rangeLabel="Showing 1–3 of 3" page={page} pageCount={3} onPageChange={setPage} />;
  },
};

export const FirstPageDisabledPrev: StoryObj = {
  name: "First page (prev disabled)",
  render: () => <Pagination rangeLabel="Showing 1–3 of 3" page={1} pageCount={3} onPageChange={() => {}} />,
};
