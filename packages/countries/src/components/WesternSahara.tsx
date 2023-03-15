import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type WesternSaharaProps = CountrySymbolProps;

const WesternSahara = forwardRef<SVGSVGElement, WesternSaharaProps>(
  function WesternSahara(props: WesternSaharaProps, ref) {
    return (
      <CountrySymbol
        data-testid="WesternSahara"
        aria-label="western sahara"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#005B33" d="M0 72V50h72v22z" />
          <path fill="#F5F7F8" d="M0 50V22h72v28z" />
          <path fill="#31373D" d="M0 22V0h72v22z" />
          <path
            fill="#DD2033"
            d="M0 9v54h2l12-9 24-18-24-18L2 9H0Zm46 27c0-3.728 2.55-6.86 6-7.748a8 8 0 1 0 0 15.496c-3.45-.888-6-4.02-6-7.748Zm10.212-1.955L58 30l1.788 4.045 4.212.539-3.106 3.038.814 4.378L58 39.5 54.292 42l.814-4.378L52 34.584l4.212-.539Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);

export default WesternSahara;
