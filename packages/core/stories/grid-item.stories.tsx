import { GridItem, GridLayout } from "@salt-ds/core";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "./layout-stories.css";
export default {
  title: "Core/Layout/Grid Layout/Grid Item",
  component: GridItem,
  argTypes: {
    colSpan: { control: { type: "number" } },
    rowSpan: { control: { type: "number" } },
    horizontalAlignment: { control: { type: "select" } },
    verticalAlignment: { control: { type: "select" } },
  },
} as ComponentMeta<typeof GridItem>;

const renderGridContent = (
  <div>
    <p>Item</p>
  </div>
);
const GridItemStory: ComponentStory<typeof GridItem> = (args) => {
  return (
    <GridLayout
      rows={2}
      columns={{ xs: 2, md: 5 }}
      className="layout-container"
    >
      <GridItem className="layout-active-content" {...args}>
        <p>Item</p>
      </GridItem>
      {renderGridContent}
      {renderGridContent}
      {renderGridContent}
      {renderGridContent}
      <GridItem colSpan={{ xs: 2, md: 4 }}>
        <p>Item spanning 4 columns</p>
      </GridItem>
    </GridLayout>
  );
};
export const GridItemWrapper = GridItemStory.bind({});
GridItemWrapper.args = {
  colSpan: 1,
  rowSpan: 2,
};
