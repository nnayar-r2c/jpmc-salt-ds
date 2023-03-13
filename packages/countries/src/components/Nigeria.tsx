import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NigeriaProps = CountrySymbolProps;

export const Nigeria = forwardRef<SVGSVGElement, NigeriaProps>(function Nigeria(
  props: NigeriaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Nigeria"
      aria-label="nigeria"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="matrix(1 0 0 -1 0 72)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#005B33" d="M0 72h72V0H0z" />
        <path fill="#F5F7F8" d="M24 72h24V0H24z" />
      </g>
    </CountrySymbol>
  );
});