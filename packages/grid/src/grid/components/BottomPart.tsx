import "./BottomPart.css";
import { TableColGroup } from "./TableColGroup";
import { FooterRow } from "./FooterRow";
import { RefObject, WheelEventHandler } from "react";
import { useGridContext } from "../GridContext";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridBottomPart");

export interface BottomPartProps<T> {
  bottomRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLTableElement>;
}

export function BottomPart<T>(props: BottomPartProps<T>) {
  const { bottomRef, onWheel } = props;
  const { model } = useGridContext();

  const bodyVisibleColumns = model.useBodyVisibleColumns();

  return (
    <div className={withBaseName()} ref={bottomRef}>
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={bodyVisibleColumns} />
          <tfoot>
            <FooterRow columns={bodyVisibleColumns} />
          </tfoot>
        </table>
      </div>
    </div>
  );
}
