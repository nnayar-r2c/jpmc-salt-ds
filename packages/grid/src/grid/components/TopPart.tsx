import { useGridContext } from "../GridContext";
import { RefObject, WheelEventHandler } from "react";
import { TableColGroup } from "./TableColGroup";
import { GroupHeaderRow } from "./GroupHeaderRow";
import { HeaderRow } from "./HeaderRow";
import { HeaderToolbarRow } from "./HeaderToolbarRow";
import "./TopPart.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridTopPart");

export interface TopPartProps<T> {
  topRef: RefObject<HTMLDivElement>;
  onWheel: WheelEventHandler<HTMLDivElement>;
}

export function TopPart<T>(props: TopPartProps<T>) {
  const { topRef, onWheel } = props;
  const { model } = useGridContext();
  const visibleColumns = model.useHeaderVisibleColumns();
  const visibleColumnGroups = model.useVisibleColumnGroups();
  const showToolbar = model.useShowToolbar();

  return (
    <div className={withBaseName()} ref={topRef}>
      <div className={withBaseName("space")}>
        <table onWheel={onWheel}>
          <TableColGroup columns={visibleColumns} />
          <thead>
            {visibleColumnGroups && (
              <GroupHeaderRow groups={visibleColumnGroups} />
            )}
            <HeaderRow columns={visibleColumns} />
            {showToolbar ? <HeaderToolbarRow columns={visibleColumns} /> : null}
          </thead>
        </table>
      </div>
    </div>
  );
}
