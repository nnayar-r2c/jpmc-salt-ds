import { WheelEventHandler } from "react";
import { useGridContext } from "../GridContext";
import "./TopLeftPart.css";
import { TableColGroup } from "./TableColGroup";
import { GroupHeaderRow } from "./GroupHeaderRow";
import { HeaderRow } from "./HeaderRow";
import { HeaderToolbarRow } from "./HeaderToolbarRow";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridTopLeftPart");

export interface TopLeftPartProps<T> {
  onWheel: WheelEventHandler<HTMLTableElement>;
}

export function TopLeftPart<T>(props: TopLeftPartProps<T>) {
  const { onWheel } = props;
  const { model } = useGridContext();

  const showToolbar = model.useShowToolbar();
  const leftColumns = model.useLeftColumns();
  const leftGroups = model.useLeftColumnGroups();

  return (
    <div className={withBaseName()}>
      <table onWheel={onWheel}>
        <TableColGroup columns={leftColumns} />
        <thead>
          {leftGroups && <GroupHeaderRow groups={leftGroups} />}
          <HeaderRow columns={leftColumns} />
          {showToolbar ? <HeaderToolbarRow columns={leftColumns} /> : null}
        </thead>
      </table>
    </div>
  );
}
