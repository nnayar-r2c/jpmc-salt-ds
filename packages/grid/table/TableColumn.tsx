import {
  ComponentType,
  CSSProperties,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useTableContext } from "./TableContext";
import { TableColumnModel, TableRowModel } from "./Table";
import { CheckboxIcon, useId } from "../../core";
import { AutoSizeHeaderCell, HeaderCellProps } from "./HeaderCell";
import { RowSelectionCheckboxCellValue } from "./RowSelectionCheckboxCellValue";

export type TableColumnPin = "left" | "right" | null;

export interface TableCellProps {
  row: TableRowModel;
  column: TableColumnModel;
  className?: string;
  style?: CSSProperties;
  isFocused?: boolean;
}

export interface TableCellValueProps {
  row: TableRowModel;
  column: TableColumnModel;
  value?: ReactNode;
}

export interface TableHeaderValueProps {
  column: TableColumnModel;
}

export interface TableColumnProps {
  id: string;
  index: number;
  name: string;
  width: number;
  onWidthChanged?: (width: number) => void;
  pinned?: TableColumnPin;
  cellComponent?: ComponentType<TableCellProps>;
  cellValueComponent?: ComponentType<TableCellValueProps>;
  getValue?: (rowData: any) => ReactNode;
  headerClassName?: string;
  headerComponent?: ComponentType<HeaderCellProps>;
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

const CheckboxHeaderCell = (props: HeaderCellProps) => {
  return (
    <AutoSizeHeaderCell {...props}>
      <CheckboxIcon checked={true} />
    </AutoSizeHeaderCell>
  );
};

export const RowSelectionColumn = (props: TableColumnProps) => {
  const [width, setWidth] = useState<number>(100);
  const onWidthChanged = (width: number) => setWidth(width);
  return (
    <TableColumn
      {...props}
      width={width}
      onWidthChanged={onWidthChanged}
      headerComponent={CheckboxHeaderCell}
      cellValueComponent={RowSelectionCheckboxCellValue}
    />
  );
};
