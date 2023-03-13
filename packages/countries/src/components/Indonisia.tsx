import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type IndonisiaProps = CountrySymbolProps;

export const Indonisia = forwardRef<SVGSVGElement, IndonisiaProps>(
  function Indonisia(props: IndonisiaProps, ref) {
    return (
      <CountrySymbol
        data-testid="Indonisia"
        aria-label="indonisia"
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
            transform="rotate(180 36 36)"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#DD2033" d="M72 0v36H0V0z" />
          <path fill="#F5F7F8" d="M72 36v36H0V36z" />
        </g>
      </CountrySymbol>
    );
  }
);