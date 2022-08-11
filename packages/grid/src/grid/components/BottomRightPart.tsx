import { useGridContext } from "../GridContext";
import { WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import { FooterRow } from "./FooterRow";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridBottomRightPart");

export interface BottomRightPartProps<T> {
  onWheel: WheelEventHandler<HTMLTableElement>;
}

export function BottomRightPart<T>(props: BottomRightPartProps<T>) {
  const { onWheel } = props;
  const { model } = useGridContext();
  const rightColumns = model.useRightColumns();

  return (
    <div className={withBaseName()}>
      <table onWheel={onWheel}>
        <TableColGroup columns={rightColumns} />
        <tfoot>
          <FooterRow columns={rightColumns} />
        </tfoot>
      </table>
    </div>
  );
}
