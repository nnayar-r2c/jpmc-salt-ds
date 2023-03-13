import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GuamProps = CountrySymbolProps;

export const Guam = forwardRef<SVGSVGElement, GuamProps>(function Guam(
  props: GuamProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Guam"
      aria-label="guam"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 0h72v72H0z" />
        <path fill="#004692" d="M0 9h72v54H0z" />
        <path
          fill="#DD2033"
          fillRule="evenodd"
          d="m35.796 13.147 1.884 1.515c6.698 5.385 10.36 10.726 11.772 15.9 1.424 5.22.452 9.892-1.39 13.686-1.82 3.745-4.502 6.682-6.652 8.646a34.695 34.695 0 0 1-2.783 2.293 26.413 26.413 0 0 1-1.193.83l-.025.015-.008.005-.004.002c-.001.001-.002.002-1.597-2.539 0 0 25.5-16 0-36.5-26 21 0 36.5 0 36.5-1.536 2.577-1.538 2.576-1.54 2.575l-.003-.002-.008-.005-.025-.015a12.88 12.88 0 0 1-.335-.21 26.19 26.19 0 0 1-.883-.597 34.302 34.302 0 0 1-2.84-2.24c-2.194-1.925-4.937-4.816-6.8-8.54-1.889-3.778-2.88-8.45-1.426-13.703 1.437-5.198 5.164-10.596 11.975-16.097l1.88-1.519ZM35.8 53.5l1.594 2.541-1.554.976-1.576-.94L35.8 53.5Z"
          clipRule="evenodd"
        />
        <mask id="b" x="24" y="17" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path
            fill="#FBD381"
            d="M35.8 17c25.5 20.5 0 36.5 0 36.5S9.8 38 35.8 17Z"
          />
        </mask>
        <g mask="url(#b)">
          <path fill="#FBD381" d="M21.8 44h28v12h-28z" />
          <path fill="#0091DA" d="M21.8 38h28v6h-28z" />
          <path fill="#86C5FA" d="M21.8 17h28v21h-28z" />
          <path fill="#936846" d="M33.8 29h2v18h-2z" />
          <path
            fill="#009B77"
            d="m35.3 22 1.6 3.431 3.613-.856-1.618 3.422L41.8 30.36l-3.617.837.01 3.803-2.893-2.38L32.407 35l.01-3.803-3.617-.837 2.905-2.363-1.617-3.422 3.612.856L35.3 22Z"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});