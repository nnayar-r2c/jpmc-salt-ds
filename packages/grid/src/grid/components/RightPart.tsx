import { RefObject, WheelEventHandler } from "react";
import { useGridContext } from "../GridContext";
import cn from "classnames";
import { TableColGroup } from "./TableColGroup";
import { TableBody } from "./TableBody";
import "./RightPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridRightPart");

export interface RightPartProps<T> {
  rightRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLTableElement>;
}

export function RightPart<T>(props: RightPartProps<T>) {
  const { rightRef, onWheel } = props;
  const { model } = useGridContext();

  const isRaised = model.useIsRightRaised();
  const rightColumns = model.useRightColumns();
  const visibleRows = model.useRows();

  return (
    <div
      ref={rightRef}
      className={cn(withBaseName(), {
        [withBaseName("raised")]: isRaised,
      })}
    >
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={rightColumns} />
          <TableBody columns={rightColumns} rows={visibleRows} />
        </table>
      </div>
    </div>
  );
}
