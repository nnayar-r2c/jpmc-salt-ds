import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BrazilProps = CountrySymbolProps;

const Brazil = forwardRef<SVGSVGElement, BrazilProps>(function Brazil(
  props: BrazilProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Brazil"
      aria-label="brazil"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#008259" d="M0 0h72v72H0z" />
        <path fill="#F1B434" d="m36 14 30 22-30 22L6 36l30-22Z" />
        <path
          fill="#004692"
          d="M36.5 50C43.956 50 50 43.732 50 36s-6.044-14-13.5-14S23 28.268 23 36s6.044 14 13.5 14Z"
        />
        <path
          fill="#F5F7F8"
          d="M23.202 33.576A24.584 24.584 0 0 1 28.5 33c7.935 0 15.102 3.798 19.803 9.8a14.292 14.292 0 0 0 1.655-5.686C44.448 31.48 36.868 28 28.5 28c-1.078 0-2.144.058-3.193.17a14.214 14.214 0 0 0-2.105 5.406Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Brazil;
