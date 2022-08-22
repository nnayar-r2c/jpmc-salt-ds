import {
  ComponentType,
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useTableContext } from "./TableContext";
import { TableColumnModel, TableRowModel } from "./Table";
import { HeaderCellProps } from "./HeaderCell";

export type TableColumnPin = "left" | "right" | null;

export interface TableCellProps {
  row: TableRowModel;
  column: TableColumnModel;
  className?: string;
  style?: CSSProperties;
  isFocused?: boolean;
  children?: ReactNode;
}

export interface TableCellValueProps {
  row: TableRowModel;
  column: TableColumnModel;
  value?: any;
}

export interface TableHeaderValueProps {
  column: TableColumnModel;
}

export interface TableColumnProps {
  id: string;
  name?: string;
  defaultWidth?: number;
  onWidthChanged?: (width: number) => void;
  pinned?: TableColumnPin;
  align?: "left" | "right";
  cellComponent?: ComponentType<TableCellProps>;
  cellValueComponent?: ComponentType<TableCellValueProps>;
  getValue?: (rowData: any) => any;
  headerClassName?: string;
  headerComponent?: ComponentType<HeaderCellProps>;
  headerValueComponent?: ComponentType<TableHeaderValueProps>;
}

export interface TableColumnInfo {
  width: number;
  onWidthChanged: (width: number) => void;
  props: TableColumnProps;
}

export const TableColumn = (props: TableColumnProps) => {
  const { defaultWidth } = props;
  const [width, setWidth] = useState<number>(
    defaultWidth !== undefined ? defaultWidth : 100
  );

  const onWidthChanged = (w: number) => {
    setWidth(w);
    if (props.onWidthChanged) {
      props.onWidthChanged(w);
    }
  };

  const table = useTableContext();
  const info: TableColumnInfo = {
    width,
    onWidthChanged,
    props,
  };

  useEffect(() => {
    table.onColumnAdded(info);
    return () => {
      table.onColumnRemoved(info);
    };
  });

  return null;
};
