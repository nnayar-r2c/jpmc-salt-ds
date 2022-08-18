import { FC, MouseEventHandler } from "react";
import "./TableRow.css";
import { BaseCell } from "./BaseCell";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import cn from "classnames";
import { TableCellValueProps } from "./TableColumn";
import { TableColumnModel, TableRowModel } from "./Table";

const withBaseName = makePrefixer("uitkTableTableRow");

export interface TableRowProps {
  row: TableRowModel;
  isSelected?: boolean;
  isHoverOver?: boolean;
  isZebra?: boolean;
  columns: TableColumnModel[];
  onMouseEnter?: MouseEventHandler<HTMLTableRowElement>;
  onMouseLeave?: MouseEventHandler<HTMLTableRowElement>;
}

const DefaultCellValue: FC<TableCellValueProps> = (props) => {
  const { value } = props;
  return <div>{value}</div>;
};

export const TableRow = function TableRow(props: TableRowProps) {
  const {
    row,
    isSelected,
    isZebra,
    isHoverOver,
    columns,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <tr
      className={cn(withBaseName(), {
        [withBaseName("zebra")]: isZebra,
        [withBaseName("hover")]: isHoverOver,
        [withBaseName("selected")]: isSelected,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-row-index={row.index}
      data-row-key={row.key}
      role="row"
    >
      {columns.map((column, i) => {
        const Cell = column.data.cellComponent || BaseCell;
        const CellValue = column.data.cellValueComponent || DefaultCellValue;
        const value = column.data.getValue
          ? column.data.getValue(row.data)
          : null;
        return (
          <Cell key={column.data.id} row={row} column={column}>
            <CellValue column={column} row={row} value={value} />
          </Cell>
        );
      })}
    </tr>
  );
};
