import React, { createContext, useContext } from "react";
import { GridColumnProps } from "./GridColumn";

type SortOrder = "default" | "asc" | "desc";

export interface ColumnSortContext {
  isSortable?: boolean;
  sortBy?: GridColumnProps<string>;
  setSortBy: (c: React.SetStateAction<GridColumnProps<string>>) => void;
  sortOrder: SortOrder;
  setSortOrder: (o: SortOrder) => void;
  onClickHandleSort: (colHeaderId: any) => void;
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

// check the above is done correctly
// add default sortBy as the column.info.props.id instead of undefined
// sort out Grid type error for sortBy
// tidy up HeaderCell ways to display icon
