import { ComponentPropsWithoutRef, forwardRef, SyntheticEvent } from "react";
import { makePrefixer, useControlled } from "@salt-ds/core";
import { clsx } from "clsx";
import { AccordionSectionContext } from "./AccordionSectionContext";
export interface AccordionSectionProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Accordion value.
   */
  value: string;
  /**
   * Whether the accordion is expanded.
   */
  expanded?: boolean;
  /**
   * Whether the accordion is expanded by default.
   */
  defaultExpanded?: boolean;
  /**
   * Callback fired when the accordion is toggled.
   * @param event
   */
  onToggle?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  /**
   * Whether the accordion is disabled.
   */
  disabled?: boolean;
}

const withBaseName = makePrefixer("saltAccordionSection");

export const AccordionSection = forwardRef<
  HTMLDivElement,
  AccordionSectionProps
>(function AccordionSection(props, ref) {
  const {
    className,
    defaultExpanded,
    expanded: expandedProp,
    disabled,
    onToggle,
    value,
    ...rest
  } = props;

  const [expanded, setExpanded] = useControlled({
    controlled: expandedProp,
    default: Boolean(defaultExpanded),
    name: "AccordionSection",
    state: "expanded",
  });

  const toggle = (event: SyntheticEvent<HTMLButtonElement>) => {
    setExpanded((prev) => !prev);
    onToggle?.(event);
  };

  return (
    <AccordionSectionContext.Provider
      value={{ value, toggle, expanded, disabled: Boolean(disabled) }}
    >
      <div ref={ref} className={clsx(withBaseName(), className)} {...rest} />
    </AccordionSectionContext.Provider>
  );
});
