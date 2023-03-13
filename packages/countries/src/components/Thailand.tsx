import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type ThailandProps = CountrySymbolProps;

export const Thailand = forwardRef<SVGSVGElement, ThailandProps>(
  function Thailand(props: ThailandProps, ref) {
    return (
      <CountrySymbol
        data-testid="Thailand"
        aria-label="thailand"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#A00009" d="M0 72V0h72v72z" />
          <path fill="#F5F7F8" d="M0 58V14h72v44z" />
          <path fill="#004692" d="M0 46V26h72v20z" />
        </g>
      </CountrySymbol>
    );
  }
);