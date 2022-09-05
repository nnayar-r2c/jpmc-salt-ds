import { createContext, useContext } from "react";

export interface SelectionContext {
  selRowKeys: Set<string>;
  isAnySelected: boolean;
  isAllSelected: boolean;
  selectRows: (rowIdx: number, shift: boolean, meta: boolean) => void;
  selectAll: () => void;
  unselectAll: () => void;
}

export const SelectionContext = createContext<SelectionContext | undefined>(
  undefined
);

export const useSelectionContext = () => {
  const c = useContext(SelectionContext);
  if (!c) {
    throw new Error(`useSelectionContext invoked outside of a Grid`);
  }
  return c;
};
