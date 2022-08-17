import { Story } from "@storybook/react";
import "./data-grid.stories.css";
import { Table, TableColumn } from "../table/Table";

export default {
  title: "Grid/Table",
  component: Table,
  argTypes: {
    // showTreeLines: { control: "boolean" },
    // rowGrouping: {
    //   control: "select",
    //   options: [...rowGroupingOptions.keys()],
    // },
  },
};

const TableStoryTemplate: Story<{}> = (props) => {
  return (
    <Table>
      <TableColumn name={"A"} />
      <TableColumn name={"B"} />
    </Table>
  );
};

export const TableExample = TableStoryTemplate.bind({});

TableExample.args = {};
