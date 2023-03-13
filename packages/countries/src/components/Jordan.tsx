import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type JordanProps = CountrySymbolProps;

export const Jordan = forwardRef<SVGSVGElement, JordanProps>(function Jordan(
  props: JordanProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Jordan"
      aria-label="jordan"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#008259" d="M0 72V48h72v24z" />
        <path fill="#F5F7F8" d="M0 48V24h72v24z" />
        <path fill="#31373D" d="M0 24V0h72v24z" />
        <path fill="#DD2033" d="M48 36 0 0v72l48-36Z" />
        <path
          fill="#F5F7F8"
          d="m19 25 2.707 5.807 6.114-1.45-2.738 5.792 4.917 4-6.122 1.414.017 6.437L19 42.973 14.104 47l.018-6.437L8 39.148l4.917-3.999-2.738-5.791 6.114 1.449L19 25Z"
        />
      </g>
    </CountrySymbol>
  );
});