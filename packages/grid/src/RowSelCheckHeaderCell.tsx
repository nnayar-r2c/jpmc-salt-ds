import { AutoSizeHeaderCell, HeaderCellProps } from "./HeaderCell";
import { useRowSelectionContext } from "./RowSelectionContext";
import { MouseEventHandler } from "react";
import { CheckboxIcon, makePrefixer } from "@jpmorganchase/uitk-core";
import "./RowSelCheckHeaderCell.css";

const withBaseName = makePrefixer("uitkGridRowSelCheckHeaderCell");

export function RowSelCheckHeaderCell<T>(props: HeaderCellProps<T>) {
  const { selectAll, unselectAll, isAllSelected, isAnySelected } =
    useRowSelectionContext();

  const onMousedown: MouseEventHandler<HTMLDivElement> = (event) => {
    if (isAllSelected) {
      unselectAll();
    } else {
      selectAll();
    }
  };

  return (
    <AutoSizeHeaderCell {...props}>
      <div onMouseDown={onMousedown} className={withBaseName("content")}>
        <CheckboxIcon
          checked={isAllSelected}
          indeterminate={!isAllSelected && isAnySelected}
        />
      </div>
    </AutoSizeHeaderCell>
  );
}
