import { createContext, useContext } from "react";
import { CellRange } from "./internal";

export interface CellSelectionContext {
  selectedCellRange: CellRange | undefined;
}

export const CellSelectionContext = createContext<
  CellSelectionContext | undefined
>(undefined);

export const useCellSelectionContext = () => {
  const c = useContext(CellSelectionContext);
  if (!c) {
    throw new Error(`useCellSelectionContext invoked outside of a Grid`);
  }
  return c;
};
