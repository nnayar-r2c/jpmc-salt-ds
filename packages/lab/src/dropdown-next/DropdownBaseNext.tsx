import { flip, limitShift, shift, size } from "@floating-ui/react";
import {
  makePrefixer,
  useFloatingUI,
  useForkRef,
  useIdMemo as useId,
} from "@salt-ds/core";
import { clsx } from "clsx";
import { Children, cloneElement, forwardRef, useRef, useState } from "react";
import { forwardCallbackProps } from "../utils";
import { Portal } from "../portal";
import { isDesktop, useWindow } from "../window";
import { DropdownBaseNextProps } from "./dropdownTypes";
import { useDropdownBaseNext } from "./useDropdownBaseNext";

import "./DropdownNext.css";

// Any component may be passed as our trigger or popup component.
// Define the common props that we will act on, if present,
// so we can type them.
export type MaybeChildProps = {
  className?: string;
  id?: string;
  role?: string;
  width: number | string;
};

const withBaseName = makePrefixer("saltDropdownNext");

export const DropdownBaseNext = forwardRef<
  HTMLDivElement,
  DropdownBaseNextProps
>(function Dropdown(
  {
    "aria-labelledby": ariaLabelledByProp,
    children,
    className: classNameProp,
    container,
    defaultIsOpen,
    disabled,
    disablePortal,
    fullWidth,
    id: idProp,
    isOpen: isOpenProp,
    onKeyDown,
    onOpenChange,
    openOnFocus,
    placement = "bottom-start",
    popupWidth,
    width,
    variant = "primary",
    ...htmlAttributes
  },
  forwardedRef
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const className = clsx(withBaseName(), classNameProp, {
    [withBaseName("fullWidth")]: fullWidth,
    [withBaseName("disabled")]: disabled,
  });
  const [trigger, popupComponent] = Children.toArray(children) as JSX.Element[];
  const id = useId(idProp);
  const Window = useWindow();

  const { componentProps, popperRef, isOpen, triggerProps } =
    useDropdownBaseNext({
      ariaLabelledBy: ariaLabelledByProp,
      defaultIsOpen,
      disabled,
      fullWidth,
      id,
      isOpen: isOpenProp,
      onOpenChange,
      onKeyDown,
      openOnFocus,
      popupComponent,
      popupWidth,
      rootRef,
      width,
    });
  const [maxPopupHeight, setMaxPopupHeight] = useState<number | undefined>(
    undefined
  );

  const middleware = isDesktop
    ? []
    : [
        flip({
          fallbackPlacements: ["bottom-start", "top-start"],
        }),
        shift({ limiter: limitShift() }),
        size({
          apply({ availableHeight }) {
            setMaxPopupHeight(availableHeight);
          },
        }),
      ];

  const { reference, floating, x, y, strategy } = useFloatingUI({
    placement,
    middleware,
  });

  const handlePopperListAdapterRef = useForkRef<HTMLDivElement>(
    reference,
    forwardedRef
  );
  const handleRootRef = useForkRef(rootRef, handlePopperListAdapterRef);
  const handleFloatingRef = useForkRef<HTMLDivElement>(floating, popperRef);
  // TODO maybe we should pass style, with maxHeight, to the popupComponent

  const getTriggerComponent = () => {
    const {
      id: defaultId,
      role: defaultRole,
      ...restTriggerProps
    } = triggerProps;

    const {
      id = defaultId,
      role = defaultRole,
      ...ownProps
    } = trigger.props as MaybeChildProps;

    return cloneElement(
      trigger,
      forwardCallbackProps(ownProps, {
        ...restTriggerProps,
        id,
        role,
      })
    );
  };

  const getPopupComponent = () => {
    const { id: defaultId, width, ...restComponentProps } = componentProps;
    const {
      className,
      id = defaultId,
      width: ownWidth,
      ...ownProps
    } = popupComponent.props as MaybeChildProps;
    return cloneElement(popupComponent, {
      ...ownProps,
      ...restComponentProps,
      className: clsx(withBaseName("popup-component"), className),
      id,
      width: ownWidth ?? width,
    });
  };

  return (
    <div
      {...htmlAttributes}
      className={clsx({ [withBaseName(variant)]: variant }, className)}
      data-testid="dropdown"
      id={idProp}
      ref={handleRootRef}
    >
      {getTriggerComponent()}
      {isOpen && (
        <Portal disablePortal={disablePortal} container={container}>
          <Window
            className={clsx(withBaseName("popup"), classNameProp)}
            id={`${id}-popup`}
            style={{
              top: y ?? "",
              left: x ?? "",
              position: strategy,
              maxHeight: maxPopupHeight ?? undefined,
            }}
            ref={handleFloatingRef}
          >
            {getPopupComponent()}
          </Window>
        </Portal>
      )}
    </div>
  );
});
