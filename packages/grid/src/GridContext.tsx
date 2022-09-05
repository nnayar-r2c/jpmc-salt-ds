import { GridColumnInfo } from "./GridColumn";
import { createContext, useContext } from "react";
import { ColumnGroupProps } from "./ColumnGroup";

export interface GridContext<T> {
  onColumnAdded: (columnInfo: GridColumnInfo<T>) => void;
  onColumnRemoved: (columnInfo: GridColumnInfo<T>) => void;
  onColumnGroupAdded: (colGroupProps: ColumnGroupProps) => void;
  onColumnGroupRemoved: (colGroupProps: ColumnGroupProps) => void;
}

export const GridContext = createContext<GridContext<any> | undefined>(
  undefined
);

export const useGridContext = () => {
  const c = useContext(GridContext);
  if (!c) {
    throw new Error(`useGridContext invoked outside of a Grid`);
  }
  return c;
};
