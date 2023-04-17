// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type MapSolidIconProps = IconProps;

export const MapSolidIcon = forwardRef<SVGSVGElement, MapSolidIconProps>(
  function MapSolidIcon(props: MapSolidIconProps, ref) {
    return (
      <Icon
        data-testid="MapSolidIcon"
        aria-label="map solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="m3 10-3 2V2l3-2 3 2 3-2 3 2v10l-3-2-3 2-3-2Zm3.5-7.131v7.596l2-1.334V1.535l-2 1.334Zm-4 6.262V1.535l-1.5 1v7.597l1.5-1Z"
          clipRule="evenodd"
        />
      </Icon>
    );
  }
);