import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GuernseyProps = CountrySymbolProps;

export const Guernsey = forwardRef<SVGSVGElement, GuernseyProps>(
  function Guernsey(props: GuernseyProps, ref) {
    return (
      <CountrySymbol
        data-testid="Guernsey"
        aria-label="guernsey"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#F5F7F8" d="M0 0h72v72H0z" />
          <path fill="#DD2033" d="M24 72h24V48h24V24H48V0H24v24H0v24h24v24Z" />
          <path
            fill="#F1B434"
            d="M41 11H31v20H11v10h20v20h10V41h20V31H41V11Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);