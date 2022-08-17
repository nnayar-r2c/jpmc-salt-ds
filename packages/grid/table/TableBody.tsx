import { HTMLAttributes, MouseEventHandler, useCallback } from "react";
import { TableRow } from "./TableRow";
import { TableColumnProps } from "./TableColumn";
import { TableColumnModel, TableRowModel } from "./Table";

export interface TableBodyProps {
  columns: TableColumnModel[];
  rows: TableRowModel[];
}

export function TableBody(props: TableBodyProps) {
  const { columns, rows } = props;

  return (
    <tbody>
      {rows.map((row) => {
        return (
          <TableRow
            key={row.key}
            row={row}
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            columns={columns}
            // backgroundVariant={backgroundVariant}
            // isColumnDivided={isColumnDivided}
          />
        );
      })}
    </tbody>
  );
}
