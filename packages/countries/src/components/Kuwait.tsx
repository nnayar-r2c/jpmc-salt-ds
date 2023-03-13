import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KuwaitProps = CountrySymbolProps;

export const Kuwait = forwardRef<SVGSVGElement, KuwaitProps>(function Kuwait(
  props: KuwaitProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Kuwait"
      aria-label="kuwait"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 72V48h72v24z" />
        <path fill="#F5F7F8" d="M0 48V24h72v24z" />
        <path fill="#009B77" d="M0 24V0h72v24z" />
        <path fill="#31373D" d="M0 0v72l32.1-24.075v-23.85L0 0Z" />
      </g>
    </CountrySymbol>
  );
});
