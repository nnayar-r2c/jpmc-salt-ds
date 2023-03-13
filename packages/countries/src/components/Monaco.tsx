import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MonacoProps = CountrySymbolProps;

export const Monaco = forwardRef<SVGSVGElement, MonacoProps>(function Monaco(
  props: MonacoProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Monaco"
      aria-label="monaco"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 0v36h72V0z" />
        <path fill="#F5F7F8" d="M0 36v36h72V36z" />
      </g>
    </CountrySymbol>
  );
});