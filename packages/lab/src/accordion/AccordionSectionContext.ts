import { createContext } from "@salt-ds/core";
import { SyntheticEvent, useContext } from "react";

export interface AccordionSectionContext {
  value: string;
  expanded: boolean;
  toggle: (event: SyntheticEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

export const AccordionSectionContext = createContext<AccordionSectionContext>(
  "AccordionSectionContext",
  {
    value: "",
    expanded: false,
    toggle: () => {},
    disabled: false,
  }
);

export function useAccordionSection() {
  return useContext(AccordionSectionContext);
}
