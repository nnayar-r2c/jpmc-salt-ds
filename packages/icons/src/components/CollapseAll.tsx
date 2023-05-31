// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type CollapseAllIconProps = IconProps;

export const CollapseAllIcon = forwardRef<SVGSVGElement, CollapseAllIconProps>(
  function CollapseAllIcon(props: CollapseAllIconProps, ref) {
    return (
      <Icon
        data-testid="CollapseAllIcon"
        aria-label="collapse all"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="m6 6.5-4 4 1 1 3-3 3 3 1-1-4-4Zm0-1-4-4 1-1 3 3 3-3 1 1-4 4Z" />
      </Icon>
    );
  }
);
