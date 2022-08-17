import { ComponentType, CSSProperties, ReactNode, useEffect } from "react";
import { useTableContext } from "./TableContext";
import { TableColumnModel, TableRowModel } from "./Table";

export type TableColumnPin = "left" | "right" | null;

export interface TableCellProps {
  row: TableRowModel;
  column: TableColumnModel;
  className?: string;
  style?: CSSProperties;
}

export interface TableCellValueProps {
  row: TableRowModel;
  column: TableColumnModel;
  value?: ReactNode;
}

export interface TableHeaderCellProps {}

export interface TableHeaderValueProps {
  column: TableColumnModel;
}

export interface TableColumnProps {
  id: string;
  name: string;
  width: number;
  onWidthChanged?: (width: number) => void;
  pinned?: TableColumnPin;
  cellComponent?: ComponentType<TableCellProps>;
  cellValueComponent?: ComponentType<TableCellValueProps>;
  getValue?: (rowData: any) => ReactNode;
  headerClassName?: string;
  headerComponent?: ComponentType<TableHeaderCellProps>;
  headerValueComponent?: ComponentType<TableHeaderValueProps>;
}

export const TableColumn = (props: TableColumnProps) => {
  const table = useTableContext();
  useEffect(() => {
    table.onColumnAdded(props);
    return () => {
      table.onColumnRemoved(props);
    };
  });
  return null;
};
