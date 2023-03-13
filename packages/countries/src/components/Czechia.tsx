import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CzechiaProps = CountrySymbolProps;

export const Czechia = forwardRef<SVGSVGElement, CzechiaProps>(function Czechia(
  props: CzechiaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Czechia"
      aria-label="czechia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 72V36h72v36z" />
        <path fill="#F5F7F8" d="M0 36V0h72v36z" />
        <path fill="#004692" d="M48 36 0 0v72l48-36Z" />
      </g>
    </CountrySymbol>
  );
});