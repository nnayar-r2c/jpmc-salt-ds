import React, { createContext, useContext } from "react";
import { GridColumnProps } from "./GridColumn";

type SortOrder = "default" | "asc" | "desc";

export interface ColumnSortContext {
  sortBy: GridColumnProps<string> | undefined;
  setSortBy: (c: React.SetStateAction<GridColumnProps<string>>) => void;
  sortOrder: SortOrder;
  setSortOrder: (o: SortOrder) => void;
  onColumnHeaderClickHandleSort: (colHeaderId: any) => void;
}

export const ColumnSortContext = createContext<ColumnSortContext | undefined>(
  undefined
);

export const useColumnSortContext = () => {
  const c = useContext(ColumnSortContext);
  if (!c) {
    throw new Error(`useColumnSortContext invoked outside of a Grid`);
  }
  return c;
};

// next step: add if else for isSortable ? sortedRowData : rowData
// add arrow icons to header
