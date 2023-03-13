import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MauritiusProps = CountrySymbolProps;

export const Mauritius = forwardRef<SVGSVGElement, MauritiusProps>(
  function Mauritius(props: MauritiusProps, ref) {
    return (
      <CountrySymbol
        data-testid="Mauritius"
        aria-label="mauritius"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#009B77" d="M0 72V54h72v18z" />
          <path fill="#004692" d="M0 36V18h72v18z" />
          <path fill="#DD2033" d="M0 18V0h72v18z" />
          <path fill="#FBD381" d="M0 54V36h72v18z" />
        </g>
      </CountrySymbol>
    );
  }
);