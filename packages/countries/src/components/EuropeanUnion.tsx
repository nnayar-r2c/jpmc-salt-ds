import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type EuropeanUnionProps = CountrySymbolProps;

export const EuropeanUnion = forwardRef<SVGSVGElement, EuropeanUnionProps>(
  function EuropeanUnion(props: EuropeanUnionProps, ref) {
    return (
      <CountrySymbol
        data-testid="EuropeanUnion"
        aria-label="european union"
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
          <path fill="#004692" d="M0 0h72v72H0z" />
          <path
            fill="#F1B434"
            d="m35.967 8.567-1.789 4.045-4.211.538 3.106 3.039-.815 4.378 3.709-2.5 3.708 2.5-.815-4.378 3.107-3.039-4.212-.538-1.788-4.045Zm-15.18 6.287L19 18.9l-4.212.538 3.106 3.038-.814 4.378 3.708-2.5 3.708 2.5-.814-4.378 3.106-3.038-4.211-.538-1.789-4.046ZM14.5 30.033l-1.788 4.046-4.212.538 3.106 3.039-.814 4.377 3.708-2.5 3.708 2.5-.814-4.377 3.106-3.04-4.212-.537-1.788-4.046Zm6.287 15.18L19 49.258l-4.212.538 3.106 3.039-.814 4.378 3.708-2.5 3.708 2.5-.814-4.378 3.106-3.039-4.211-.538-1.789-4.045Zm15.18 6.287-1.789 4.045-4.211.539 3.106 3.038-.815 4.378 3.709-2.5 3.708 2.5-.815-4.378 3.107-3.038-4.212-.539-1.788-4.045Zm15.178-6.287-1.788 4.045-4.212.538 3.107 3.039-.815 4.378 3.709-2.5 3.708 2.5-.815-4.378 3.106-3.039-4.211-.538-1.788-4.045Zm6.288-15.18-1.788 4.046-4.212.538 3.106 3.039-.814 4.377 3.708-2.5 3.708 2.5-.814-4.377 3.106-3.04-4.212-.537-1.788-4.046Zm-6.288-15.179L49.358 18.9l-4.212.538 3.107 3.038-.815 4.378 3.709-2.5 3.708 2.5-.815-4.378 3.106-3.038-4.211-.538-1.788-4.046Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);