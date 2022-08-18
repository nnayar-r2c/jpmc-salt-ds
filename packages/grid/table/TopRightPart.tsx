import { WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import { HeaderRow } from "./HeaderRow";
import "./TopRightPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel } from "./Table";

const withBaseName = makePrefixer("uitkGridTopRightPart");

export interface TopRightPartProps<T> {
  onWheel: WheelEventHandler<HTMLTableElement>;
  columns: TableColumnModel[];
}

export function TopRightPart<T>(props: TopRightPartProps<T>) {
  const { onWheel, columns } = props;

  return (
    <div className={withBaseName()}>
      <table className={withBaseName("table")} onWheel={onWheel}>
        <TableColGroup columns={columns} />
        <thead>
          {/*{rightColumnGroups ? (*/}
          {/*  <GroupHeaderRow groups={rightColumnGroups} />*/}
          {/*) : null}*/}
          <HeaderRow columns={columns} />
          {/*{showToolbar ? <HeaderToolbarRow columns={rightColumns} /> : null}*/}
        </thead>
      </table>
    </div>
  );
}
