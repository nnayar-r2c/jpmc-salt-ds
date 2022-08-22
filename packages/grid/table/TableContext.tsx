import { TableColumnInfo } from "./TableColumn";
import { createContext, useContext } from "react";
import { ColumnGroupProps } from "./ColumnGroup";

export interface TableContext {
  onColumnAdded: (columnInfo: TableColumnInfo) => void;
  onColumnRemoved: (columnInfo: TableColumnInfo) => void;
  onColumnGroupAdded: (colGroupProps: ColumnGroupProps) => void;
  onColumnGroupRemoved: (colGroupProps: ColumnGroupProps) => void;
}

export const TableContext = createContext<TableContext | undefined>(undefined);
export const useTableContext = () => {
  const c = useContext(TableContext);
  if (!c) {
    throw new Error(`useTableContext invoked outside of a Table`);
  }
  return c;
};
