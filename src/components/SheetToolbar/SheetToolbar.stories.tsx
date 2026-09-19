import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SheetToolbar } from "./SheetToolbar";
import { SearchField } from "../SearchField/SearchField";
import { FilterSelect } from "../FilterSelect/FilterSelect";
import { Button } from "../Button/Button";
import { Icon } from "../../icons";

const meta: Meta<typeof SheetToolbar> = {
  title: "Components/SheetToolbar",
  component: SheetToolbar,
};
export default meta;
type Story = StoryObj<typeof SheetToolbar>;

export const Default: Story = {
  render: function Render() {
    const [owner, setOwner] = useState("all");
    return (
      <div style={{ padding: 24, maxWidth: 960 }}>
        <SheetToolbar
          search={
            <SearchField
              fullWidth
              placeholder="Search tasks"
              aria-label="Search tasks"
              style={{ minWidth: 220, maxWidth: 360 }}
            />
          }
          filters={
            <>
              <FilterSelect
                tip="Owner"
                options={[
                  { value: "all", label: "All owners" },
                  { value: "mine", label: "Mine" },
                ]}
                value={owner}
                onChange={setOwner}
              />
            </>
          }
          actions={
            <Button variant="primary" size="toolbar" leadingIcon={<Icon name="plus" />}>
              Add task
            </Button>
          }
        />
      </div>
    );
  },
};
