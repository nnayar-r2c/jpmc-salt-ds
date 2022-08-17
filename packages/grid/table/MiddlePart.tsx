import { RefObject, WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import { TableBody } from "./TableBody";
import "./MiddlePart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel, TableRowModel } from "./Table";

const withBaseName = makePrefixer("uitkGridMiddlePart");

export interface MiddlePartProps<T> {
  middleRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLTableElement>;
  columns: TableColumnModel[];
  rows: TableRowModel[];
}

export function MiddlePart<T>(props: MiddlePartProps<T>) {
  const { middleRef, onWheel, columns, rows } = props;
  // const visibleColumns = model.useBodyVisibleColumns();
  // const visibleRows = model.useRows();

  return (
    <div ref={middleRef} className={withBaseName()}>
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={columns} />
          <TableBody columns={columns} rows={rows} />
        </table>
      </div>
    </div>
  );
}
