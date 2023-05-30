import { ComponentPropsWithoutRef, forwardRef } from "react";
import { makePrefixer } from "@salt-ds/core";
import { clsx } from "clsx";
export interface AccordionProps extends ComponentPropsWithoutRef<"div"> {}

const withBaseName = makePrefixer("saltAccordion");

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(props, ref) {
    const { className, ...rest } = props;

    return (
      <div className={clsx(withBaseName(), className)} ref={ref} {...rest} />
    );
  }
);
