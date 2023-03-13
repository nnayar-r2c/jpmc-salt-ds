import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CyprusProps = CountrySymbolProps;

export const Cyprus = forwardRef<SVGSVGElement, CyprusProps>(function Cyprus(
  props: CyprusProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Cyprus"
      aria-label="cyprus"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path
          fill="#FF9E42"
          d="M17.218 26.48s-.824 9.58 8.641 10.394l1.728 2.08 3.786.325s2.388-5.585 6.174-5.26c0 0 .33-3.831 4.116-3.505l5.679.488s-1.234-7.827 8.726-12.76L52.447 16S38.37 24.44 29.07 21.71l-.33 3.831-3.786-.325-1.728-2.08-6.009 3.344Z"
        />
        <path
          fill="#009B77"
          d="M18.976 44.588c2.243 5.697 7.475 9.989 13.863 11.118a3 3 0 0 0-.518 4.657l4.061-4.06 4.061 4.061a3 3 0 0 0-.602-4.71c6.26-1.203 11.373-5.452 13.584-11.066l-5.167-1.2c-2.026 4.456-6.662 7.572-12.057 7.572-5.396 0-10.032-3.116-12.058-7.572l-5.167 1.2Z"
        />
      </g>
    </CountrySymbol>
  );
});
