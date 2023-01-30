import React, { createContext, useContext } from "react";
import { GridColumnProps } from ".";

export interface ColumnSortContext<T> {
  // getColById: (id: string) => GridColumnModel<T> | undefined;
  sortBy: any;
  setSortBy: (c: any) => void;
  sortOrder: "default" | "asc" | "desc";
  setSortOrder: (o: "default" | "asc" | "desc") => void;
  onColumnHeaderClickHandleSort: (columnIndex: number) => void;
}

export const ColumnSortContext = createContext<
  ColumnSortContext<any> | undefined
>(undefined);

export const useColumnSortContext = () => {
  const c = useContext(ColumnSortContext);
  if (!c) {
    throw new Error(`useColumnSortContext invoked outside of a Grid`);
  }
  return c;
};
