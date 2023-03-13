import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AzerbaijanProps = CountrySymbolProps;

export const Azerbaijan = forwardRef<SVGSVGElement, AzerbaijanProps>(
  function Azerbaijan(props: AzerbaijanProps, ref) {
    return (
      <CountrySymbol
        data-testid="Azerbaijan"
        aria-label="azerbaijan"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#009B77" d="M0 72V54h72v18z" />
          <path fill="#DD2033" d="M0 54V18h72v36z" />
          <path
            fill="#F5F7F8"
            d="m45 27 2.215 4.751 5.003-1.186-2.24 4.739L54 38.576l-5.008 1.158.013 5.266L45 41.705 40.995 45l.014-5.266L36 38.576l4.023-3.272-2.24-4.739 5.002 1.186L45 27Z"
          />
          <path fill="#0091DA" d="M0 18V0h72v18z" />
          <path
            fill="#F5F7F8"
            d="M37.998 25.272A11.539 11.539 0 0 0 35.5 25C29.149 25 24 30.149 24 36.5S29.149 48 35.5 48c.858 0 1.694-.094 2.498-.272A13.437 13.437 0 0 1 30.5 50C23.044 50 17 43.956 17 36.5S23.044 23 30.5 23c2.774 0 5.353.837 7.498 2.272Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);