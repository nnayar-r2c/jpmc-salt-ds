import { clsx } from "clsx";
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactNode,
  Ref,
} from "react";
import { useWindow } from "@salt-ds/window";

import { ValidationStatus } from "../status-indicator";
import {
  makePrefixer,
  mergeProps,
  UseFloatingUIProps,
  useForkRef,
} from "../utils";
import { SaltProvider } from "../salt-provider";

import { useTooltip, UseTooltipProps } from "./useTooltip";
import { TooltipBase } from "./TooltipBase";

const withBaseName = makePrefixer("saltTooltip");

export interface TooltipProps
  extends Pick<UseFloatingUIProps, "open" | "onOpenChange" | "placement">,
    Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  /**
   * The children will be the Tooltip's trigger.
   */
  children: ReactNode;
  /**
   * Whether to hide the Tooltip arrow. Defaults to `false`.
   */
  hideArrow?: boolean;
  /**
   * Whether to hide the status icon within the Tooltip. Defaults to `false`.
   */
  hideIcon?: boolean;
  /**
   * Content displayed inside the Tooltip. Can be a string or a React component.
   */
  content: ReactNode;
  /**
   * A string to determine the status of the Tooltip. Defaults to `info`.
   */
  status?: ValidationStatus;
  /**
   * Delay in milliseconds before the Tooltip is shown.
   */
  enterDelay?: number;
  /**
   * Delay in milliseconds before the Tooltip is hidden.
   */
  leaveDelay?: number;
  /**
   * Option to not display the Tooltip. Can be used in conditional situations like text truncation.
   */
  disabled?: boolean;
  /**
   * Option to remove the hover listener.
   */
  disableHoverListener?: boolean;
  /**
   * Option to remove the focus listener.
   */
  disableFocusListener?: boolean;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      children,
      className,
      disabled,
      hideArrow = false,
      hideIcon = false,
      open: openProp,
      content,
      status = "info",
      placement = "right",
      enterDelay = 300,
      leaveDelay = 0,
      ...rest
    } = props;

    const { Component } = useWindow();

    const hookProps: UseTooltipProps = {
      open: openProp,
      placement,
      enterDelay,
      leaveDelay,
      ...rest,
    };

    const {
      arrowProps,
      open,
      floating,
      reference,
      getTriggerProps,
      getTooltipProps,
    } = useTooltip(hookProps);

    const triggerRef = useForkRef(
      // @ts-ignore
      isValidElement(children) ? children.ref : null,
      reference
    );

    const floatingRef = useForkRef(floating, ref) as Ref<HTMLDivElement>;

    return (
      <>
        {isValidElement(children) &&
          cloneElement(children, {
            ...mergeProps(getTriggerProps(), children.props),
            ref: triggerRef,
          })}

        {open && !disabled && (
          <Component
            className={clsx(withBaseName(), withBaseName(status), className)}
            ref={floatingRef}
            {...getTooltipProps()}
          >
            {/* The provider is needed to support the use case where an app has nested modes. The element that is portalled needs to have the same style as the current scope */}
            <SaltProvider>
              <TooltipBase
                hideIcon={hideIcon}
                status={status}
                content={content}
                hideArrow={hideArrow}
                arrowProps={arrowProps}
              />
            </SaltProvider>
          </Component>
        )}
      </>
    );
  }
);
