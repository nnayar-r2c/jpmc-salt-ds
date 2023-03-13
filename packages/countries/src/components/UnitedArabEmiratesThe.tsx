import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type UnitedArabEmiratesTheProps = CountrySymbolProps;

export const UnitedArabEmiratesThe = forwardRef<
  SVGSVGElement,
  UnitedArabEmiratesTheProps
>(function UnitedArabEmiratesThe(props: UnitedArabEmiratesTheProps, ref) {
  return (
    <CountrySymbol
      data-testid="UnitedArabEmiratesThe"
      aria-label="united arab emirates (the)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#31373D" d="M24 72V48h48v24z" />
        <path fill="#F5F7F8" d="M24 48V24h48v24z" />
        <path fill="#005B33" d="M24 24V0h48v24z" />
        <path fill="#DD2033" d="M0 0h24v72H0z" />
      </g>
    </CountrySymbol>
  );
});