import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type UruguayProps = CountrySymbolProps;

export const Uruguay = forwardRef<SVGSVGElement, UruguayProps>(function Uruguay(
  props: UruguayProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Uruguay"
      aria-label="uruguay"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F5F7F8" d="M0 72V0h72v72z" />
        <path
          fill="#004692"
          d="M36 18V9h36v9H36Zm0 18v-9h36v9H36ZM0 54v-9h72v9H0Zm0 18v-9h72v9H0Z"
        />
        <path
          fill="#F1B434"
          d="m30 25-4.495 2.223 2.394 4.576-4.881-.982L22.4 36 19 32.188 15.6 36l-.618-5.183-4.88.981 2.393-4.576L8 25l4.495-2.223-2.394-4.575 4.88.981.62-5.183L19 17.812 22.4 14l.618 5.183 4.88-.981-2.393 4.576L30 25Z"
        />
      </g>
    </CountrySymbol>
  );
});