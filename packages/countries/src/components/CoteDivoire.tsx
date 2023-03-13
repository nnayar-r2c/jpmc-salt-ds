import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CoteDivoireProps = CountrySymbolProps;

export const CoteDivoire = forwardRef<SVGSVGElement, CoteDivoireProps>(
  function CoteDivoire(props: CoteDivoireProps, ref) {
    return (
      <CountrySymbol
        data-testid="CoteDivoire"
        aria-label="côte d&#39;ivoire"
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
            transform="rotate(90 36 36)"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#009B77" d="M48 0h24v72H48z" />
          <path fill="#F5F7F8" d="M24 0h24v72H24z" />
          <path fill="#FF9E42" d="M0 0h24v72H0z" />
        </g>
      </CountrySymbol>
    );
  }
);