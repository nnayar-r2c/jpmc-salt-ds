import { RowSelCheckHeaderCell } from "./RowSelCheckHeaderCell";
import { RowSelectionCheckboxCellValue } from "./RowSelectionCheckboxCellValue";
import { TableColumn, TableColumnProps } from "./TableColumn";

export type RowSelectionColumnProps = Omit<TableColumnProps, "width" | "name">;

export const RowSelectionColumn = (props: RowSelectionColumnProps) => {
  return (
    <TableColumn
      {...props}
      defaultWidth={100}
      headerComponent={RowSelCheckHeaderCell}
      cellValueComponent={RowSelectionCheckboxCellValue}
    />
  );
};
