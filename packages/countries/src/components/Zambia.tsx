import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type ZambiaProps = CountrySymbolProps;

export const Zambia = forwardRef<SVGSVGElement, ZambiaProps>(function Zambia(
  props: ZambiaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Zambia"
      aria-label="zambia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#008259" d="M0 0h72v72H0z" />
        <path
          fill="#FF9E42"
          d="M60 34h12v38H60zm-16-8a8 8 0 0 1-8-8h24a8 8 0 0 1-8 8h-8Z"
        />
        <path fill="#31373D" d="M48 34h12v38H48z" />
        <path fill="#DD2033" d="M36 34h12v38H36z" />
      </g>
    </CountrySymbol>
  );
});