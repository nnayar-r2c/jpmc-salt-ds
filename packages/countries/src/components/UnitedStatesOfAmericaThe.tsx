import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type UnitedStatesOfAmericaTheProps = CountrySymbolProps;

const UnitedStatesOfAmericaThe = forwardRef<
  SVGSVGElement,
  UnitedStatesOfAmericaTheProps
>(function UnitedStatesOfAmericaThe(props: UnitedStatesOfAmericaTheProps, ref) {
  return (
    <CountrySymbol
      data-testid="UnitedStatesOfAmericaThe"
      aria-label="united states of america (the)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F5F7F8" d="M0 63V0h72v63z" />
        <path
          fill="#DD2033"
          d="M36 18V9h36v9zm0 18v-9h36v9zM0 54v-9h72v9zm0 18v-9h72v9z"
        />
        <path fill="#004692" d="M0 36V0h36v36z" />
        <path
          fill="#F5F7F8"
          d="m28.4 22-1.788 4.045-4.212.539 3.106 3.038L24.692 34l3.708-2.5 3.708 2.5-.814-4.378 3.106-3.038-4.212-.539L28.4 22Zm0-24-1.788 4.045-4.212.539 3.106 3.038L24.692 10 28.4 7.5l3.708 2.5-.814-4.378L34.4 2.584l-4.212-.539L28.4-2Zm-8 12-1.788 4.045-4.212.539 3.106 3.038L16.692 22l3.708-2.5 3.708 2.5-.814-4.378 3.106-3.038-4.212-.539L20.4 10Zm-9 12-1.79 4.045-4.211.539 3.106 3.038L7.692 34l3.708-2.5 3.708 2.5-.815-4.378 3.107-3.038-4.212-.539L11.4 22Zm0-24L9.61 2.045l-4.21.539 3.106 3.038L7.692 10 11.4 7.5l3.708 2.5-.815-4.378L17.4 2.584l-4.212-.539L11.4-2Zm-8 12-1.79 4.045-4.211.539 3.106 3.038L-.308 22 3.4 19.5 7.108 22l-.814-4.378L9.4 14.584l-4.212-.539L3.4 10Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default UnitedStatesOfAmericaThe;
