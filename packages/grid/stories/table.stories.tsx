import { Story } from "@storybook/react";
import "./data-grid.stories.css";
import { Table } from "../table/Table";
import { RowSelectionColumn, TableColumn } from "../table/TableColumn";
import { randomAmount } from "./grid/utils";
import { TableCol } from "../table/TableColGroup";
import { ColumnGroup } from "../table/ColumnGroup";
import { RowSelectionCheckboxCellValue } from "../table/RowSelectionCheckboxCellValue";

export default {
  title: "Grid/New Api Experiment",
  component: Table,
  argTypes: {
    // showTreeLines: { control: "boolean" },
    // rowGrouping: {
    //   control: "select",
    //   options: [...rowGroupingOptions.keys()],
    // },
  },
};

interface Investor {
  name: string;
  addedInvestors: string[];
  location: string;
  strategy: string[];
  cohort: string[];
  notes: string;
  amount: number;
}

function createDummyInvestors(): Investor[] {
  const a = [
    "Apple",
    "Orange",
    "Dragonfruit",
    "Coffee",
    "Fig",
    "Grape",
    "Hazelnut",
  ];
  const b = ["Investment", "Venture Capital", "Private Wealth"];
  const c = ["", "Inc."];
  const loc = [
    "New York, NY",
    "Jersey City, NJ",
    "Boston, MA",
    "San Francisco, CA",
  ];
  const str = [
    ["FO"],
    ["PE"],
    ["VC"],
    ["FO", "PE"],
    ["FO", "PE", "VC"],
    ["VC", "PE"],
  ];
  const coh = [
    ["Potential Leads"],
    ["Top VCs"],
    ["Potential Leads", "Top VCs"],
  ];

  const investors: Investor[] = [];
  let i = 0;
  for (let x of a) {
    for (let y of b) {
      for (let z of c) {
        investors.push({
          name: [x, y, z].join(" "),
          addedInvestors: [],
          location: loc[i % loc.length],
          cohort: coh[i % coh.length],
          strategy: str[i % str.length],
          notes: "",
          amount: randomAmount(100, 300, 4),
        });
        ++i;
      }
    }
  }

  return investors;
}

const dummyInvestors = createDummyInvestors();

const rowKeyGetter = (rowData: Investor) => rowData.name;

const TableStoryTemplate: Story<{}> = (props) => {
  return (
    <Table rowData={dummyInvestors} rowKeyGetter={rowKeyGetter}>
      <ColumnGroup id={"groupOne"} name={"Group One"} pinned={"left"}>
        <RowSelectionColumn
          id={"rowSelection"}
          name={"RSC"}
          width={10}
          index={0}
        />
        <TableColumn
          name={"Name"}
          id={"name"}
          width={200}
          getValue={(x) => x.name}
          index={1}
        />
      </ColumnGroup>
      <ColumnGroup id={"groupTwo"} name={"Group Two"}>
        <TableColumn
          name={"Location"}
          id={"location"}
          width={150}
          getValue={(x) => x.location}
          index={2}
        />
        <TableColumn
          name={"Cohort"}
          id={"cohort"}
          width={200}
          getValue={(x) => x.cohort}
          index={3}
        />
      </ColumnGroup>
      <ColumnGroup id={"groupThree"} name={"Group Three"}>
        <TableColumn
          name={"Amount"}
          id={"amount"}
          width={200}
          getValue={(x) => x.amount.toFixed(4)}
          index={4}
        />
      </ColumnGroup>
      <ColumnGroup id={"groupFour"} name={"Group Four"} pinned={"right"}>
        <TableColumn
          name={"Strategy"}
          id={"strategy"}
          width={200}
          getValue={(x) => x.strategy.join(", ")}
          index={5}
        />
      </ColumnGroup>
    </Table>
  );
};

export const TableExample = TableStoryTemplate.bind({});

TableExample.args = {};
