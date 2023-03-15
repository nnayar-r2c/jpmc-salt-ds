import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SurinameProps = CountrySymbolProps;

const Suriname = forwardRef<SVGSVGElement, SurinameProps>(function Suriname(
  props: SurinameProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Suriname"
      aria-label="suriname"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#005B33" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M0 56V16h72v40z" />
        <path fill="#A00009" d="M0 50V22h72v28z" />
        <path
          fill="#FBD381"
          d="m36 24-3.577 8.09L24 33.168l6.213 6.077L28.583 48 36 43l7.416 5-1.629-8.756L48 33.167l-8.423-1.076L36 24Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Suriname;
