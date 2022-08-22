import { WheelEventHandler } from "react";
import "./TopLeftPart.css";
import { TableColGroup } from "./TableColGroup";
import { HeaderRow } from "./HeaderRow";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnGroupModel, TableColumnModel } from "../Table";
import { GroupHeaderRow } from "./GroupHeaderRow";
import cx from "classnames";

const withBaseName = makePrefixer("uitkTableTopLeftPart");

export interface TopLeftPartProps<T> {
  onWheel: WheelEventHandler<HTMLTableElement>;
  columns: TableColumnModel[];
  columnGroups: TableColumnGroupModel[];
  isRaised?: boolean;
}

export function TopLeftPart<T>(props: TopLeftPartProps<T>) {
  const { onWheel, columns, columnGroups, isRaised } = props;

  return (
    <div
      className={cx(withBaseName(), {
        [withBaseName("raised")]: isRaised,
      })}
    >
      <table onWheel={onWheel}>
        <TableColGroup columns={columns} />
        <thead>
          <GroupHeaderRow groups={columnGroups} />
          <HeaderRow columns={columns} />
          {/*{showToolbar ? <HeaderToolbarRow columns={leftColumns} /> : null}*/}
        </thead>
      </table>
    </div>
  );
}
