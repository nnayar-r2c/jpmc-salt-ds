import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MaldivesProps = CountrySymbolProps;

export const Maldives = forwardRef<SVGSVGElement, MaldivesProps>(
  function Maldives(props: MaldivesProps, ref) {
    return (
      <CountrySymbol
        data-testid="Maldives"
        aria-label="maldives"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle
            cx="36"
            cy="36"
            r="36"
            fill="#D9D9D9"
            transform="rotate(90 36 36)"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#DD2033" d="M0 0h72v72H0z" />
          <path fill="#005B33" d="M10 20h52v32H10z" />
          <path
            fill="#F5F7F8"
            d="M45 47.205a14.978 14.978 0 0 1-4.346-1.474c-6.54-3.417-8.873-10.839-5.212-16.578 1.524-2.388 3.845-4.108 6.508-5.056C36.806 23.5 31.533 25.683 28.778 30c-3.66 5.739-1.488 13.076 4.853 16.39 3.6 1.88 7.768 2.06 11.369.814Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);