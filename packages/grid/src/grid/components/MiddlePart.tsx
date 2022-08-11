import { useGridContext } from "../GridContext";
import { RefObject, WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import { TableBody } from "./TableBody";
import "./MiddlePart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridMiddlePart");

export interface MiddlePartProps<T> {
  middleRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLTableElement>;
}

export function MiddlePart<T>(props: MiddlePartProps<T>) {
  const { middleRef, onWheel } = props;
  const { model } = useGridContext();
  const visibleColumns = model.useBodyVisibleColumns();
  const visibleRows = model.useRows();

  return (
    <div ref={middleRef} className={withBaseName()}>
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={visibleColumns} />
          <TableBody columns={visibleColumns} rows={visibleRows} />
        </table>
      </div>
    </div>
  );
}
