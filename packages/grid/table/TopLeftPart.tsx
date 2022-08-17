import { WheelEventHandler } from "react";
import "./TopLeftPart.css";
import { TableColGroup } from "./TableColGroup";
import { HeaderRow } from "./HeaderRow";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel } from "./Table";

const withBaseName = makePrefixer("uitkGridTopLeftPart");

export interface TopLeftPartProps<T> {
  onWheel: WheelEventHandler<HTMLTableElement>;
  columns: TableColumnModel[];
}

export function TopLeftPart<T>(props: TopLeftPartProps<T>) {
  const { onWheel, columns } = props;

  return (
    <div className={withBaseName()}>
      <table onWheel={onWheel}>
        <TableColGroup columns={columns} />
        <thead>
          {/*{leftGroups && <GroupHeaderRow groups={leftGroups} />}*/}
          <HeaderRow columns={columns} />
          {/*{showToolbar ? <HeaderToolbarRow columns={leftColumns} /> : null}*/}
        </thead>
      </table>
    </div>
  );
}
