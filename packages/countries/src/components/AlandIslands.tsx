import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AlandIslandsProps = CountrySymbolProps;

const AlandIslands = forwardRef<SVGSVGElement, AlandIslandsProps>(
  function AlandIslands(props: AlandIslandsProps, ref) {
    return (
      <CountrySymbol
        data-testid="AlandIslands"
        aria-label="åland islands"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#005EB8" d="M0 0h72v72H0z" />
          <path
            fill="#FBD381"
            d="M20.4 72h-6V47.7H.4v-6h20V72Zm-6-41.7H.4v-6h14V0h6v30.3h-6Zm17.4-6V0h6v24.3h34.6v6H31.8v-6Zm6 17.4h34.6v6H37.8V72h-6V41.7h6Z"
          />
          <path fill="#DD2033" d="M20 72h12V42h40V30H32V0H20v30H0v12h20v30Z" />
        </g>
      </CountrySymbol>
    );
  }
);

export default AlandIslands;
