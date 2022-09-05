import { CheckboxIcon, makePrefixer } from "@jpmorganchase/uitk-core";
import { GridCellValueProps } from "./GridColumn";
import { useSelectionContext } from "./SelectionContext";
import { MouseEventHandler } from "react";
import "./RowSelectionCheckboxCellValue.css";

const withBaseName = makePrefixer("uitkGridRowSelectionCheckboxCellValue");

export function RowSelectionCheckboxCellValue<T>(props: GridCellValueProps<T>) {
  const { row } = props;
  const { selRowKeys, selectRows } = useSelectionContext();

  const isSelected = selRowKeys.has(row.key);
  const onMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    selectRows(row.index, false, true);
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className={withBaseName()} onMouseDown={onMouseDown}>
      <CheckboxIcon checked={isSelected} className={withBaseName("icon")} />
    </div>
  );
}
