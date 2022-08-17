import { RefObject, WheelEventHandler } from "react";
import cn from "classnames";
import { TableColGroup } from "./TableColGroup";
import { TableBody } from "./TableBody";
import "./RightPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel, TableRowModel } from "./Table";

const withBaseName = makePrefixer("uitkGridRightPart");

export interface RightPartProps<T> {
  rightRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLTableElement>;
  isRaised?: boolean;
  columns: TableColumnModel[];
  rows: TableRowModel[];
}

export function RightPart<T>(props: RightPartProps<T>) {
  const { rightRef, onWheel, columns, isRaised, rows } = props;

  return (
    <div
      ref={rightRef}
      className={cn(withBaseName(), {
        [withBaseName("raised")]: isRaised,
      })}
    >
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={columns} />
          <TableBody columns={columns} rows={rows} />
        </table>
      </div>
    </div>
  );
}
