import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SierraLeoneProps = CountrySymbolProps;

export const SierraLeone = forwardRef<SVGSVGElement, SierraLeoneProps>(
  function SierraLeone(props: SierraLeoneProps, ref) {
    return (
      <CountrySymbol
        data-testid="SierraLeone"
        aria-label="sierra leone"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#005EB8" d="M0 72V48h72v24z" />
          <path fill="#F5F7F8" d="M0 48V24h72v24z" />
          <path fill="#009B77" d="M0 24V0h72v24z" />
        </g>
      </CountrySymbol>
    );
  }
);