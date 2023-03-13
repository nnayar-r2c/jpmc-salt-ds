import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TrinidadAndTobagoProps = CountrySymbolProps;

export const TrinidadAndTobago = forwardRef<
  SVGSVGElement,
  TrinidadAndTobagoProps
>(function TrinidadAndTobago(props: TrinidadAndTobagoProps, ref) {
  return (
    <CountrySymbol
      data-testid="TrinidadAndTobago"
      aria-label="trinidad and tobago"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 0h72v72H0z" />
        <path
          fill="#F5F7F8"
          d="M-.062 21.15 21.15-.062 72.063 50.85 50.85 72.062z"
        />
        <path
          fill="#31373D"
          d="M16.908 4.18 4.18 16.908 55.092 67.82 67.82 55.092z"
        />
      </g>
    </CountrySymbol>
  );
});