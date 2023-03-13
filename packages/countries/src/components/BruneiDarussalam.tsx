import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BruneiDarussalamProps = CountrySymbolProps;

export const BruneiDarussalam = forwardRef<
  SVGSVGElement,
  BruneiDarussalamProps
>(function BruneiDarussalam(props: BruneiDarussalamProps, ref) {
  return (
    <CountrySymbol
      data-testid="BruneiDarussalam"
      aria-label="brunei darussalam"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F1B434" d="M0 0h72v72H0z" />
        <path
          fill="#31373D"
          d="m-1.984 23.272 12.728-12.728 50.912 50.912-12.728 12.728z"
        />
        <path
          fill="#F5F7F8"
          d="M10.744 10.544 23.472-2.184l50.912 50.912-12.728 12.728z"
        />
        <path
          fill="#DD2033"
          fillRule="evenodd"
          d="M36.6 18.662c1.699-1.951 5.414-4.662 10 1.374-.435.575-.863 1.07-1.284 1.49A16.315 16.315 0 0 1 52 34.745C52 43.722 44.837 51 36 51s-16-7.278-16-16.256a16.32 16.32 0 0 1 6.236-12.879 13.65 13.65 0 0 1-1.636-1.83c4.586-6.035 8.301-3.324 10-1.373V8h2v10.662Zm1 3.652v21.27c6.314-.8 11.2-6.272 11.2-12.904 0-3.512-1.37-6.7-3.598-9.04-3.169 3.092-5.877 2.082-7.602.674Zm-11.168-.273c2.982 2.597 5.523 1.616 7.168.273v21.143c-5.922-1.142-10.4-6.428-10.4-12.777 0-3.316 1.222-6.342 3.232-8.639Z"
          clipRule="evenodd"
        />
        <path fill="#DD2033" d="M50 55v-2H22v2h-2v6h10v-2h12v2h10v-6h-2Z" />
      </g>
    </CountrySymbol>
  );
});
