import { clsx } from "clsx";
import {
  AriaAttributes,
  ChangeEvent,
  ElementType,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { makePrefixer, useControlled, useForkRef } from "@salt-ds/core";
import { useFormFieldProps } from "../form-field-context";
import { useCursorOnFocus } from "./useCursorOnFocus";

import "./InputNext.css";

const withBaseName = makePrefixer("saltInputNext");

// TODO: Double confirm whether this should be extending DivElement given root is `<div>`.
// And forwarded ref is not assigned to the root like other components.
export interface InputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  /**
   * Determines the position of the text cursor on focus of the input.
   *
   * start = place cursor at the beginning<br>
   * end = place cursor at the end<br>
   * \# = index to place the cursor<br>
   */
  cursorPositionOnFocus?: "start" | "end" | number;
  /**
   * The value of the `input` element, required for an uncontrolled component.
   */
  defaultValue?: HTMLInputElement["defaultValue"];
  /**
   * If `true`, the component is disabled.
   */
  disabled?: HTMLInputElement["disabled"];
  /**
   * Determines what gets highlighted on focus of the input.
   *
   * If `true` all text will be highlighted.
   * If an array text between those indices will be highlighted
   * e.g. [0,1] will highlight the first character.
   */
  highlightOnFocus?: boolean | number[];
  /**
   * The HTML element to render the Input, e.g. 'input', a custom React component.
   */
  inputComponent?: ElementType;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  /**
   * Callbacks for events.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  onMouseUp?: MouseEventHandler<HTMLInputElement>;
  onMouseMove?: MouseEventHandler<HTMLInputElement>;
  onMouseDown?: MouseEventHandler<HTMLInputElement>;
  /**
   * If `true`, the component is read only.
   */
  readOnly?: boolean;
  type?: HTMLInputElement["type"];
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: HTMLInputElement["value"];
  /**
   * Styling variant
   *
   * Defaults to "primary"
   */
  variant?: "primary" | "secondary" | "tertiary";
}

function mergeA11yProps(
  a11yProps: Partial<ReturnType<typeof useFormFieldProps>["a11yProps"]> = {},
  inputProps: InputProps["inputProps"] = {},
  misplacedAriaProps: AriaAttributes
) {
  const ariaLabelledBy = clsx(
    a11yProps["aria-labelledby"],
    inputProps["aria-labelledby"]
  );

  return {
    ...misplacedAriaProps,
    ...a11yProps,
    ...inputProps,
    // TODO: look at this - The weird filtering is due to TokenizedInputBase
    "aria-labelledby": ariaLabelledBy
      ? Array.from(new Set(ariaLabelledBy.split(" "))).join(" ")
      : null,
  };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    "aria-activedescendant": ariaActiveDescendant,
    "aria-expanded": ariaExpanded,
    "aria-owns": ariaOwns,
    className: classNameProp,
    cursorPositionOnFocus,
    disabled,
    highlightOnFocus,
    id,
    inputComponent: InputComponent = "input",
    inputProps: inputPropsProp,
    role,
    style,
    value: valueProp,
    // If we leave both value and defaultValue undefined, we will get a React warning on first edit
    // (uncontrolled to controlled warning) from the React input
    defaultValue: defaultValueProp = valueProp === undefined ? "" : undefined,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseUp,
    onMouseMove,
    onMouseDown,
    readOnly: readOnlyProp,
    type = "text",
    variant = "primary",
    ...other
  },
  ref
) {
  const { a11yProps: { disabled: a11yDisabled, ...restA11y } = {} } =
    useFormFieldProps();

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const handleRef = useForkRef(inputRef, ref);
  const cursorOnFocusHelpers = useCursorOnFocus(inputRef, {
    cursorPositionOnFocus,
    highlightOnFocus,
  });

  const misplacedAriaProps = {
    "aria-activedescendant": ariaActiveDescendant,
    "aria-expanded": ariaExpanded,
    "aria-owns": ariaOwns,
    role,
  };
  const inputProps = mergeA11yProps(
    restA11y,
    inputPropsProp,
    misplacedAriaProps
  );

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValueProp,
    name: "Input",
    state: "value",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    onChange?.(event, value);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setFocused(false);
  };

  const handleMouseMove = (event: MouseEvent<HTMLInputElement>) => {
    cursorOnFocusHelpers.handleMouseMove(event);

    onMouseMove?.(event);
  };

  const handleMouseUp = (event: MouseEvent<HTMLInputElement>) => {
    cursorOnFocusHelpers.handleMouseUp();

    onMouseUp?.(event);
  };

  const handleMouseDown = (event: MouseEvent<HTMLInputElement>) => {
    cursorOnFocusHelpers.handleMouseDown();

    onMouseDown?.(event);
  };

  return (
    <div
      className={clsx(
        withBaseName(),
        {
          [withBaseName("focused")]: focused,
          [withBaseName(variant)]: variant,
        },
        classNameProp
      )}
      style={style}
      {...other}
    >
      <InputComponent
        type={type}
        id={id}
        {...inputProps}
        className={clsx(withBaseName("input"), inputProps?.className)}
        ref={handleRef}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onFocus={handleFocus}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
});