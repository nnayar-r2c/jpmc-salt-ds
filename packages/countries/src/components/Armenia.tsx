import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type ArmeniaProps = CountrySymbolProps;

export const Armenia = forwardRef<SVGSVGElement, ArmeniaProps>(function Armenia(
  props: ArmeniaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Armenia"
      aria-label="armenia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#FF9E42" d="M0 72V48h72v24z" />
        <path fill="#005EB8" d="M0 48V24h72v24z" />
        <path fill="#DD2033" d="M0 24V0h72v24z" />
      </g>
    </CountrySymbol>
  );
});