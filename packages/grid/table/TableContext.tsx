import { TableColumnProps } from "./TableColumn";
import { createContext, useContext } from "react";

export interface TableContext {
  onColumnAdded: (columnProps: TableColumnProps) => void;
  onColumnRemoved: (columnProps: TableColumnProps) => void;
}

export const TableContext = createContext<TableContext | undefined>(undefined);
export const useTableContext = () => {
  const c = useContext(TableContext);
  if (!c) {
    throw new Error(`useTableContext invoked outside of a Table`);
  }
  return c;
};
