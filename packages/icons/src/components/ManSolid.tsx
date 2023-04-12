// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type ManSolidIconProps = IconProps;

export const ManSolidIcon = forwardRef<SVGSVGElement, ManSolidIconProps>(
  function ManSolidIcon(props: ManSolidIconProps, ref) {
    return (
      <Icon
        data-testid="ManSolidIcon"
        aria-label="man solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4 4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V8h-.75v4h-2.5V8H4V4.5Z" />
      </Icon>
    );
  }
);
