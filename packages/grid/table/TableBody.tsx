import { MouseEventHandler } from "react";
import { TableRow } from "./TableRow";
import { TableColumnModel, TableRowModel } from "./Table";
import { getRowKeyAttribute } from "./utils";
import { useSelectionContext } from "./SelectionContext";

export interface TableBodyProps {
  columns: TableColumnModel[];
  rows: TableRowModel[];
  hoverRowKey?: string;
  setHoverRowKey: (key: string | undefined) => void;
}

export function TableBody(props: TableBodyProps) {
  const { columns, rows, hoverRowKey, setHoverRowKey } = props;

  const { selRowKeys, selectRows } = useSelectionContext();

  const onRowMouseEnter: MouseEventHandler<HTMLTableRowElement> = (event) => {
    const target = event.target as HTMLElement;
    const rowKey = getRowKeyAttribute(target);
    setHoverRowKey(rowKey);
  };

  const onMouseLeave: MouseEventHandler<HTMLTableSectionElement> = (event) => {
    setHoverRowKey(undefined);
  };

  const onMouseDown: MouseEventHandler<HTMLTableSectionElement> = (event) => {
    const target = event.target as HTMLElement;
    const rowKey = getRowKeyAttribute(target);
    selectRows(rowKey, event.shiftKey, event.metaKey);
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <tbody onMouseLeave={onMouseLeave} onMouseDown={onMouseDown}>
      {rows.map((row) => {
        const isSelected = selRowKeys.has(row.key);

        return (
          <TableRow
            key={row.key}
            row={row}
            onMouseEnter={onRowMouseEnter}
            // onMouseLeave={onMouseLeave}
            columns={columns}
            isHoverOver={row.key === hoverRowKey}
            isSelected={isSelected}
            // backgroundVariant={backgroundVariant}
            // isColumnDivided={isColumnDivided}
          />
        );
      })}
    </tbody>
  );
}
