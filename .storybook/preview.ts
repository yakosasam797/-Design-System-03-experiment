import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";
import "../src/tokens/typography.css";
import "../src/styles/reset.css";
import "../src/styles/focus.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { matchers: { color: /(background|color)$/i } },
    backgrounds: {
      default: "panel",
      values: [
        { name: "panel", value: "var(--panel-ground, #F4F6F8)" },
        { name: "surface", value: "#FFFFFF" },
      ],
    },
  },
};

export default preview;
