import { Column, Row } from "../model";
import { CSSProperties, FC, HTMLAttributes } from "react";
import cn from "classnames";
import "./BaseCell.css";
import { Cursor } from "./Cursor";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { useGridContext } from "../GridContext";

const withBaseName = makePrefixer("uitkGridBaseCell");

export interface BaseCellProps<T = any>
  extends HTMLAttributes<HTMLTableDataCellElement> {
  row: Row<T>;
  column: Column<T>;
  isHoverOverRow?: boolean;
  isSelectedRow?: boolean;
  isSelected?: boolean;
  isFocused?: boolean;
  isColumnDivided?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function getCellId(row: Row, column: Column) {
  return `R${row.key}C${column.key}`;
}

export const BaseCell: FC<BaseCellProps> = function BaseCell(props) {
  const {
    row,
    column,
    isHoverOverRow,
    isSelectedRow,
    isSelected,
    isFocused,
    isColumnDivided,
    className,
    style,
    children,
    ...restProps
  } = props;

  const index = row.useIndex();
  const isEditable = column.useIsEditable();
  const { model } = useGridContext();
  const isAllEditable = model.useIsAllEditable();

  return (
    <td
      {...restProps}
      id={getCellId(row, column)}
      data-row-index={index}
      data-column-index={column.index}
      aria-colindex={column.index}
      role="gridcell"
      className={cn(
        withBaseName(),
        {
          // [withBaseName("selectedCell")]: isSelected,
          [withBaseName("editable")]: !isAllEditable && isEditable,
          [withBaseName("allEditable")]: isAllEditable && column.index !== 0,
        },
        className
      )}
      style={style}
    >
      {isFocused ? <Cursor /> : null}
      {isColumnDivided ? (
        <div className={withBaseName("columnDivider")} />
      ) : null}
      <div className={withBaseName("valueContainer")}>{children}</div>
    </td>
  );
};
