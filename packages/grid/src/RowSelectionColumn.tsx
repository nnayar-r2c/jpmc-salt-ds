import { RowSelCheckHeaderCell } from "./RowSelCheckHeaderCell";
import { RowSelectionCheckboxCellValue } from "./RowSelectionCheckboxCellValue";
import { GridColumn, GridColumnProps } from "./GridColumn";

export type RowSelectionColumnProps<T> = Omit<
  GridColumnProps<T>,
  "width" | "name"
>;

export function RowSelectionColumn<T>(props: RowSelectionColumnProps<T>) {
  return (
    <GridColumn
      {...props}
      defaultWidth={100}
      headerComponent={RowSelCheckHeaderCell}
      cellValueComponent={RowSelectionCheckboxCellValue}
      pinned="left"
    />
  );
}
