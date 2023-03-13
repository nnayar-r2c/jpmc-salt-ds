import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MozambiqueProps = CountrySymbolProps;

export const Mozambique = forwardRef<SVGSVGElement, MozambiqueProps>(
  function Mozambique(props: MozambiqueProps, ref) {
    return (
      <CountrySymbol
        data-testid="Mozambique"
        aria-label="mozambique"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#F5F7F8" d="M0 52V20h72v32z" />
          <path fill="#31373D" d="M.2 46V26h72v20z" />
          <path fill="#009B77" d="M0 20V0h72v20z" />
          <path fill="#FBD381" d="M0 72V52h72v20z" />
          <path fill="#DD2033" d="M48 36 0 0v72l48-36Z" />
          <path
            fill="#FBD381"
            d="m18.6 26-2.683 6.068-6.317.807 4.66 4.558L13.037 44l5.562-3.75L24.162 44l-1.222-6.567 4.66-4.558-6.317-.807L18.6 26Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);