import { RefObject, WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import "./TopPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel } from "./Table";
import { HeaderRow } from "./HeaderRow";

const withBaseName = makePrefixer("uitkGridTopPart");

export interface TopPartProps<T> {
  topRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLDivElement>;
  columns: TableColumnModel[];
}

export function TopPart<T>(props: TopPartProps<T>) {
  const { topRef, onWheel, columns } = props;

  return (
    <div className={withBaseName()} ref={topRef}>
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={columns} />
          <thead>
            {/*{visibleColumnGroups && (*/}
            {/*  <GroupHeaderRow groups={visibleColumnGroups} />*/}
            {/*)}*/}
            <HeaderRow columns={columns} />
          </thead>
        </table>
      </div>
    </div>
  );
}
