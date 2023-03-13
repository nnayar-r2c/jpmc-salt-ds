import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SouthSudanProps = CountrySymbolProps;

export const SouthSudan = forwardRef<SVGSVGElement, SouthSudanProps>(
  function SouthSudan(props: SouthSudanProps, ref) {
    return (
      <CountrySymbol
        data-testid="SouthSudan"
        aria-label="south sudan"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#F5F7F8" d="M0 52V20h72v32z" />
          <path fill="#DD2033" d="M.2 46V26h72v20z" />
          <path fill="#31373D" d="M0 20V0h72v20z" />
          <path fill="#009B77" d="M0 72V52h72v20z" />
          <path fill="#004692" d="M48 36 0 0v72l48-36Z" />
          <path
            fill="#FBD381"
            d="m12.236 28.636 2.394 6.188-3.896 5.038 6.517-.072 3.78 5.507 1.281-6.585 6.585-1.281-5.507-3.78.072-6.517-5.038 3.896-6.188-2.394Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);
