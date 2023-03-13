import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GambiaTheProps = CountrySymbolProps;

export const GambiaThe = forwardRef<SVGSVGElement, GambiaTheProps>(
  function GambiaThe(props: GambiaTheProps, ref) {
    return (
      <CountrySymbol
        data-testid="GambiaThe"
        aria-label="gambia (the)"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#F5F7F8" d="M0 0h72v72H0z" />
          <path fill="#005EB8" d="M0 46V26h72v20z" />
          <path fill="#DD2033" d="M0 20V0h72v20z" />
          <path fill="#009B77" d="M0 72V52h72v20z" />
        </g>
      </CountrySymbol>
    );
  }
);