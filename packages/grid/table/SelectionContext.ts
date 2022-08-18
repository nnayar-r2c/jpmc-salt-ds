import { createContext, useContext } from "react";

export interface SelectionContext {
  selRowKeys: Set<string>;
  selectRows: (key: string, shift: boolean, meta: boolean) => void;
}

export const SelectionContext = createContext<SelectionContext | undefined>(
  undefined
);
export const useSelectionContext = () => {
  const c = useContext(SelectionContext);
  if (!c) {
    throw new Error(`useSelectionContext invoked outside of a Table`);
  }
  return c;
};
