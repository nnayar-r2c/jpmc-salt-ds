import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BangladeshProps = CountrySymbolProps;

export const Bangladesh = forwardRef<SVGSVGElement, BangladeshProps>(
  function Bangladesh(props: BangladeshProps, ref) {
    return (
      <CountrySymbol
        data-testid="Bangladesh"
        aria-label="bangladesh"
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
            transform="rotate(-90 36 36)"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#005B33" d="M72 72H0V0h72z" />
          <circle cx="30" cy="36" r="16" fill="#DD2033" />
        </g>
      </CountrySymbol>
    );
  }
);