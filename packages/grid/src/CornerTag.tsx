import { useWindow } from "@salt-ds/window";
import { useComponentCssInjection } from "@salt-ds/styles";

import CornerTagCss from "./CornerTag.css";

export interface CornerTagProps {
  focusOnly?: boolean; // Show when the parent is focused, hide when not
}

export function CornerTag(props: CornerTagProps) {
  const { window: targetWindow } = useWindow();
  useComponentCssInjection({
    testId: "salt-corner-tag",
    css: CornerTagCss,
    window: targetWindow,
  });

  return (
    <div
      className={
        props.focusOnly ? "saltGridCornerTag-focusOnly" : "saltGridCornerTag"
      }
    />
  );
}