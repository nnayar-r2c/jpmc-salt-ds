import { WheelEventHandler } from "react";
import { useGridContext } from "../GridContext";
import { TableColGroup } from "./TableColGroup";
import { HeaderRow } from "./HeaderRow";
import { HeaderToolbarRow } from "./HeaderToolbarRow";
import "./TopRightPart.css";
import { GroupHeaderRow } from "./GroupHeaderRow";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridTopRightPart");

export interface TopRightPartProps<T> {
  onWheel: WheelEventHandler<HTMLTableElement>;
}

export function TopRightPart<T>(props: TopRightPartProps<T>) {
  const { onWheel } = props;
  const { model } = useGridContext();

  const showToolbar = model.useShowToolbar();
  const rightColumnGroups = model.useRightColumnGroups();

  const rightColumns = model.useRightColumns();

  return (
    <div className={withBaseName()}>
      <table className={withBaseName("table")} onWheel={onWheel}>
        <TableColGroup columns={rightColumns} />
        <thead>
          {rightColumnGroups ? (
            <GroupHeaderRow groups={rightColumnGroups} />
          ) : null}
          <HeaderRow columns={rightColumns} />
          {showToolbar ? <HeaderToolbarRow columns={rightColumns} /> : null}
        </thead>
      </table>
    </div>
  );
}
