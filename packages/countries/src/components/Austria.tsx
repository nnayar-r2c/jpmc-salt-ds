import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AustriaProps = CountrySymbolProps;

export const Austria = forwardRef<SVGSVGElement, AustriaProps>(function Austria(
  props: AustriaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Austria"
      aria-label="austria"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36.257" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 72V0h72v72z" />
        <path fill="#F5F7F8" d="M0 48V24h72v24z" />
      </g>
    </CountrySymbol>
  );
});
