import { clsx } from "clsx";
import { AriaAttributes, ComponentType, ForwardedRef, forwardRef } from "react";
import { Button, ButtonProps, makePrefixer } from "@salt-ds/core";
import { ChevronDownIcon, IconProps, DEFAULT_ICON_SIZE } from "@salt-ds/icons";

import "./DropdownButtonNext.css";

export interface DropdownButtonProps extends ButtonProps {
  /**
   * Replace the default Icon component
   */
  IconComponent?: ComponentType<any>;
  /**
   * Whether the dropdown button should hide role='option' via 'aria-hidden'
   */
  ariaHideOptionRole?: boolean;
  /**
   * Sets the size of the down arrow icon. If this is not specified, a default size based on density is used.
   */
  iconSize?: IconProps["size"];
  /**
   * Is the dropdown list open
   */
  isOpen?: boolean;
  /**
   * Label for the dropdown button
   */
  label?: string;
  /**
   * Id for the label. This is needed for ARIA attributes.
   */
  labelId?: string;
  /**
   * When the dropdown is collapsed this value is set as aria-posinset on the span containing the selected value
   * **/
  posInSet?: number;
  /**
   * When the dropdown is collapsed this value is set as aria-setsize on the span containing the selected value
   * **/
  setSize?: number;
  /**
   *
   * **/
  labelAriaAttributes?: Pick<
    AriaAttributes,
    "aria-posinset" | "aria-setsize" | "aria-selected"
  >;
  variant?: "primary" | "secondary";
}

const withBaseName = makePrefixer("saltDropdownButtonNext");

export const DropdownButton = forwardRef(function DropdownButton(
  {
    IconComponent = ChevronDownIcon,
    ariaHideOptionRole,
    className,
    disabled,
    iconSize = DEFAULT_ICON_SIZE,
    isOpen,
    label,
    labelId,
    posInSet,
    setSize,
    labelAriaAttributes,
    variant = "primary",
    ...rest
  }: DropdownButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  // FIXME: use polymorphic button
  // We don't want the 'button' tag to be shown in the DOM to trigger some accessibility testing
  // tool's false alarm on role of 'listbox'
  return (
    <Button
      className={clsx(
        withBaseName(),
        {
          [withBaseName("primary")]: variant === "primary",
          [withBaseName("secondary")]: variant === "secondary",
        },
        className
      )}
      data-testid="dropdown-button"
      disabled={disabled}
      {...rest}
      ref={ref}
    >
      <div className={withBaseName("content")}>
        <span
          // 'hidden' so that screen reader won't be confused the additional 'option' which is just a label
          aria-hidden={ariaHideOptionRole ? "true" : undefined}
          {...labelAriaAttributes}
          className={withBaseName("buttonLabel")}
          id={labelId}
          // 'option' role here is to suppress accessibility testing tool warning about 'listbox' missing children role.
          role="option"
        >
          {label}
        </span>
        <IconComponent
          className={withBaseName("icon")}
          size={iconSize}
          aria-label={null}
          aria-hidden="true"
        />
      </div>
    </Button>
  );
});