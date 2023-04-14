import { clsx } from "clsx";
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  useMemo,
  useRef,
} from "react";
import { makePrefixer, useId, useForkRef, capitalize } from "@salt-ds/core";
import { FormFieldContextNext } from "../form-field-context";
import { FormFieldLabel, FormFieldLabelProps } from "./FormFieldLabel";
import { FormFieldHelperText } from "./FormFieldHelperText";

import "./FormFieldNext.css";

export type FormFieldLabelPlacement = "top" | "left";

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement>,
    A11yValueProps {
  /**
   * Disabled prop
   */
  disabled?: boolean;
  /**
   * The helper text content
   */
  helperText?: string;
  /**
   * The label value for the FormField
   */
  label?: string;
  /**
   * Location the label, values: 'top' (default) or 'left'
   */
  labelPlacement?: FormFieldLabelPlacement;
  /**
   * Props to be applied to the FormFieldLabel
   */
  LabelProps?: Partial<FormFieldLabelProps>;
}

export interface A11yValueProps {
  /**
   * If `true`, the FormField will be disabled.
   */
  disabled?: boolean;
  /** Helper Text */
  helperText?: string;
  /** id of the label node */
  labelId?: string;
}
export interface useA11yValueValue {
  "aria-labelledby": A11yValueProps["labelId"];
  "aria-describedby": A11yValueProps["helperText"] | undefined;
  disabled: A11yValueProps["disabled"];
}

const useA11yValue = ({ disabled, labelId, helperText }: A11yValueProps) => {
  return useMemo(
    () => ({
      "aria-labelledby": labelId,
      "aria-describedby": helperText,
      disabled,
    }),
    [labelId, disabled, helperText]
  );
};

const withBaseName = makePrefixer("saltFormFieldNext");

export const FormField = forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      helperText,
      label,
      labelPlacement = "top",
      LabelProps = {},
      onBlur,
      onFocus,
      ...restProps
    }: FormFieldProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);

    const handleTriggerRef = useForkRef(rootRef, ref);

    const labelId = useId(LabelProps?.id);

    const a11yValue = useA11yValue({
      labelId,
      helperText,
      disabled,
    });

    return (
      <div
        ref={handleTriggerRef}
        className={clsx(
          withBaseName(),
          {
            [withBaseName("disabled")]: disabled,
            [withBaseName(`label${capitalize(labelPlacement)}`)]:
              labelPlacement,
            [withBaseName("withHelperText")]: helperText,
          },
          className
        )}
        {...restProps}
      >
        <FormFieldContextNext.Provider
          value={{
            a11yProps: a11yValue,
            ref: rootRef,
          }}
        >
          {label && <FormFieldLabel disabled={disabled} label={label} />}
          <div className={withBaseName("controls")}>{children}</div>
          {helperText && <FormFieldHelperText helperText={helperText} />}
        </FormFieldContextNext.Provider>
      </div>
    );
  }
);
