import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PalauProps = CountrySymbolProps;

export const Palau = forwardRef<SVGSVGElement, PalauProps>(function Palau(
  props: PalauProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Palau"
      aria-label="palau"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#3CCBDA" d="M0 0h72v72H0z" />
        <circle cx="30" cy="36" r="16" fill="#FBD381" />
      </g>
    </CountrySymbol>
  );
});