import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NorfolkIslandProps = CountrySymbolProps;

export const NorfolkIsland = forwardRef<SVGSVGElement, NorfolkIslandProps>(
  function NorfolkIsland(props: NorfolkIslandProps, ref) {
    return (
      <CountrySymbol
        data-testid="NorfolkIsland"
        aria-label="norfolk island"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#008259" d="M0 0h72v72H0z" />
          <path fill="#F5F7F8" d="M54 72H18V0h36z" />
          <path
            fill="#008259"
            d="M48 46.875 36 16 24 46.875h9V55h6v-8.125h9Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);