import { AutoSizeHeaderCell, HeaderCellProps } from "./HeaderCell";
import { useSelectionContext } from "./SelectionContext";
import { MouseEventHandler } from "react";
import { CheckboxIcon, makePrefixer } from "@jpmorganchase/uitk-core";
import "./RowSelCheckHeaderCell.css";

const withBaseName = makePrefixer("uitkTableRowSelCheckHeaderCell");

export const RowSelCheckHeaderCell = (props: HeaderCellProps) => {
  const { selectAll, unselectAll, isAllSelected, isAnySelected } =
    useSelectionContext();

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
};
