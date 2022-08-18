import { TableColumnProps } from "./TableColumn";
import { createContext, useContext } from "react";
import { ColumnGroupProps } from "./ColumnGroup";

export interface TableContext {
  onColumnAdded: (columnProps: TableColumnProps) => void;
  onColumnRemoved: (columnProps: TableColumnProps) => void;
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
