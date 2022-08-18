import { RefObject, WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import "./TopPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnGroupModel, TableColumnModel } from "./Table";
import { HeaderRow } from "./HeaderRow";
import { GroupHeaderRow } from "./GroupHeaderRow";

const withBaseName = makePrefixer("uitkTableTopPart");

export interface TopPartProps<T> {
  topRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLDivElement>;
  columns: TableColumnModel[];
  columnGroups: TableColumnGroupModel[];
}

export function TopPart<T>(props: TopPartProps<T>) {
  const { topRef, onWheel, columns, columnGroups } = props;

  return (
    <div className={withBaseName()} ref={topRef}>
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={columns} />
          <thead>
            <GroupHeaderRow groups={columnGroups} />
            <HeaderRow columns={columns} />
          </thead>
        </table>
      </div>
    </div>
  );
}
