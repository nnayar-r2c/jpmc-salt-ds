import { makePrefixer, RadioIcon } from "@jpmorganchase/uitk-core";
import { GridCellValueProps } from "./GridColumn";
import { useRowSelectionContext } from "./RowSelectionContext";
import { MouseEventHandler } from "react";
import "./RowSelectionRadioCellValue.css";

const withBaseName = makePrefixer("uitkGridRowSelectionCheckboxCellValue");

export function RowSelectionRadioCellValue<T>(props: GridCellValueProps<T>) {
  const { row } = props;
  const { selRowKeys, selectRows } = useRowSelectionContext();

  const isSelected = selRowKeys.has(row.key);
  const onMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    selectRows(row.index, false, false);
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className={withBaseName()} onMouseDown={onMouseDown}>
      <RadioIcon checked={isSelected} />
    </div>
  );
}
