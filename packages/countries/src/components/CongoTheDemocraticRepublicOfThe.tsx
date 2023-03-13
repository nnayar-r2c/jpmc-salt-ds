import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CongoTheDemocraticRepublicOfTheProps = CountrySymbolProps;

export const CongoTheDemocraticRepublicOfThe = forwardRef<
  SVGSVGElement,
  CongoTheDemocraticRepublicOfTheProps
>(function CongoTheDemocraticRepublicOfThe(
  props: CongoTheDemocraticRepublicOfTheProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="CongoTheDemocraticRepublicOfThe"
      aria-label="congo (the democratic republic of the)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#0091DA" d="M0 0h72v72H0z" />
        <path
          fill="#FBD381"
          d="m5.2 57.326 17.678 17.678 52.326-52.326L57.526 5z"
        />
        <path
          fill="#DD2033"
          d="M20.062 70.974 9.455 60.367 60.367 9.456l10.607 10.606z"
        />
        <path
          fill="#FBD381"
          d="m20 10-2.98 6.742-7.02.897 5.177 5.064L13.82 30 20 25.833 26.18 30l-1.357-7.297L30 17.64l-7.02-.897L20 10Z"
        />
      </g>
    </CountrySymbol>
  );
});