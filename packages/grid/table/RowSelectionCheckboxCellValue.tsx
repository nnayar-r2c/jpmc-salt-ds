import { CheckboxIcon, makePrefixer } from "@jpmorganchase/uitk-core";
import { TableCellValueProps } from "./TableColumn";
import { useSelectionContext } from "./SelectionContext";
import { MouseEventHandler } from "react";
import "./RowSelectionCheckboxCellValue.css";

const withBaseName = makePrefixer("uitkTableRowSelectionCheckboxCellValue");

export const RowSelectionCheckboxCellValue = (props: TableCellValueProps) => {
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
};
