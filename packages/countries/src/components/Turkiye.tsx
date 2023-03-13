import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TurkiyeProps = CountrySymbolProps;

export const Turkiye = forwardRef<SVGSVGElement, TurkiyeProps>(function Turkiye(
  props: TurkiyeProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Turkiye"
      aria-label="türkiye"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 72V0h72v72z" />
        <path
          fill="#F5F7F8"
          d="m45.894 27.67-1.021 6.556-5.893 2.415 5.68 3.197.52 6.659 4.402-5.062 6.343 2.183-2.88-6.027 3.321-5.609-6.31.855-4.162-5.166Z"
        />
        <path
          fill="#F5F7F8"
          d="M40.349 25.587a12.386 12.386 0 0 0-6.815-2.03c-6.873 0-12.444 5.572-12.444 12.445s5.571 12.444 12.444 12.444c2.513 0 4.852-.745 6.808-2.026A15.964 15.964 0 0 1 28.2 52c-8.836 0-16-7.163-16-16s7.164-16 16-16c4.86 0 9.214 2.167 12.149 5.587Z"
        />
      </g>
    </CountrySymbol>
  );
});