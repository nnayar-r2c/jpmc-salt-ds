import cn from "classnames";
import { TableColGroup } from "./TableColGroup";
import { TableBody } from "./TableBody";
import { RefObject, WheelEventHandler } from "react";
import "./LeftPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel, TableRowModel } from "./Table";

const withBaseName = makePrefixer("uitkGridLeftPart");

export interface LeftPartProps {
  leftRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLTableElement>;
  isRaised?: boolean;
  columns: TableColumnModel[];
  rows: TableRowModel[];
  hoverOverRowKey?: string;
  setHoverOverRowKey: (key: string | undefined) => void;
}

export function LeftPart(props: LeftPartProps) {
  const {
    leftRef,
    onWheel,
    isRaised,
    columns,
    rows,
    hoverOverRowKey,
    setHoverOverRowKey,
  } = props;

  return (
    <div
      ref={leftRef}
      className={cn(withBaseName(), {
        [withBaseName("raised")]: isRaised,
      })}
    >
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={columns} />
          <TableBody
            columns={columns}
            rows={rows}
            hoverRowKey={hoverOverRowKey}
            setHoverRowKey={setHoverOverRowKey}
          />
        </table>
      </div>
    </div>
  );
}
