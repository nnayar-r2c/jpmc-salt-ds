import { FC } from "react";
import cn from "classnames";
import "./BaseCell.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableCellProps } from "./TableColumn";
import { TableColumnModel } from "./Table";
import { Cursor } from "./internal";

const withBaseName = makePrefixer("uitkTableBaseCell");

export function getCellId(rowKey: string, column: TableColumnModel) {
  return `R${rowKey}C${column.info.props.id}`;
}

export const BaseCell: FC<TableCellProps> = function BaseCell(props) {
  const { column, className, row, style, isFocused, children } = props;
  return (
    <td
      id={getCellId(row.key, column)}
      data-row-index={row.index}
      data-column-index={column.index}
      aria-colindex={column.index}
      role="gridcell"
      className={cn(withBaseName(), className)}
      style={style}
    >
      {isFocused ? <Cursor /> : null}
      {/*{isColumnDivided ? (*/}
      {/*  <div className={withBaseName("columnDivider")} />*/}
      {/*) : null}*/}
      <div className={withBaseName("valueContainer")}>{children}</div>
    </td>
  );
};
