import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BahamasTheProps = CountrySymbolProps;

export const BahamasThe = forwardRef<SVGSVGElement, BahamasTheProps>(
  function BahamasThe(props: BahamasTheProps, ref) {
    return (
      <CountrySymbol
        data-testid="BahamasThe"
        aria-label="bahamas (the)"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#3CCBDA" d="M0 72V0h72v72z" />
          <path fill="#FBD381" d="M0 48V24h72v24z" />
          <path fill="#31373D" d="M48 36 0 0v72l48-36Z" />
        </g>
      </CountrySymbol>
    );
  }
);