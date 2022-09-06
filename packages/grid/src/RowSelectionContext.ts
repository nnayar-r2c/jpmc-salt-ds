import { createContext, useContext } from "react";

export interface RowSelectionContext {
  selRowKeys: Set<string>;
  isAnySelected: boolean;
  isAllSelected: boolean;
  selectRows: (rowIdx: number, shift: boolean, meta: boolean) => void;
  selectAll: () => void;
  unselectAll: () => void;
}

export const RowSelectionContext = createContext<
  RowSelectionContext | undefined
>(undefined);

export const useRowSelectionContext = () => {
  const c = useContext(RowSelectionContext);
  if (!c) {
    throw new Error(`useRowSelectionContext invoked outside of a Grid`);
  }
  return c;
};
