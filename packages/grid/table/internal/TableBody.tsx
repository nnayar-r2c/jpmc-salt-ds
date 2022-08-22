import { MouseEventHandler } from "react";
import { TableRow } from "./TableRow";
import { TableColumnModel, TableRowModel } from "../Table";
import { getCellPosition, getRowKeyAttribute } from "./utils";
import { useSelectionContext } from "../SelectionContext";

export interface TableBodyProps {
  columns: TableColumnModel[];
  rows: TableRowModel[];
  hoverRowKey?: string;
  setHoverRowKey: (key: string | undefined) => void;
  gap?: number;
  isZebra?: boolean;
}

export function TableBody(props: TableBodyProps) {
  const { columns, rows, hoverRowKey, setHoverRowKey, gap, isZebra } = props;

  const { selRowKeys, selectRows, cursorRowKey, cursorColKey, moveCursor } =
    useSelectionContext();

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
    const [rowIdx, colIdx] = getCellPosition(target);
    selectRows(rowIdx, event.shiftKey, event.metaKey || event.ctrlKey);
    if (colIdx >= 0) {
      moveCursor(rowIdx, colIdx);
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <tbody onMouseLeave={onMouseLeave} onMouseDown={onMouseDown}>
      {rows.map((row) => {
        const isSelected = selRowKeys.has(row.key);
        const cursorKey = cursorRowKey === row.key ? cursorColKey : undefined;
        return (
          <TableRow
            key={row.key}
            row={row}
            onMouseEnter={onRowMouseEnter}
            // onMouseLeave={onMouseLeave}
            columns={columns}
            isHoverOver={row.key === hoverRowKey}
            isSelected={isSelected}
            cursorColKey={cursorKey}
            gap={gap}
            isZebra={isZebra && row.index % 2 == 0}
            // backgroundVariant={backgroundVariant}
            // isColumnDivided={isColumnDivided}
          />
        );
      })}
    </tbody>
  );
}
