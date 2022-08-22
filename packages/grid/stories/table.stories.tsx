import { Story } from "@storybook/react";
import "./data-grid.stories.css";
import { Table } from "../table";
import { RowSelectionColumn, TableColumn } from "../table";
import { randomAmount } from "./grid/utils";
import { ColumnGroup } from "../table";
import "./table.stories.css";

export default {
  title: "Grid/New Api Experiment",
  component: Table,
  argTypes: {},
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
    <Table
      rowData={dummyInvestors}
      rowKeyGetter={rowKeyGetter}
      className={"table"}
    >
      <ColumnGroup id={"groupOne"} name={"Group One"} pinned={"left"}>
        <RowSelectionColumn id={"rowSelection"} />
        <TableColumn
          name={"Name"}
          id={"name"}
          defaultWidth={200}
          getValue={(x) => x.name}
        />
      </ColumnGroup>
      <ColumnGroup id={"groupTwo"} name={"Group Two"}>
        <TableColumn
          name={"Location"}
          id={"location"}
          defaultWidth={150}
          getValue={(x) => x.location}
        />
        <TableColumn
          name={"Cohort"}
          id={"cohort"}
          defaultWidth={200}
          getValue={(x) => x.cohort}
        />
      </ColumnGroup>
      <ColumnGroup id={"groupThree"} name={"Group Three"}>
        <TableColumn
          name={"Amount"}
          id={"amount"}
          defaultWidth={200}
          getValue={(x) => x.amount.toFixed(4)}
        />
      </ColumnGroup>
      <ColumnGroup id={"groupFour"} name={"Group Four"}>
        <TableColumn
          name={"Strategy"}
          id={"strategy"}
          getValue={(x) => x.strategy.join(", ")}
        />
      </ColumnGroup>
    </Table>
  );
};

export const TableExample = TableStoryTemplate.bind({});

TableExample.args = {};
