import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BeninProps = CountrySymbolProps;

export const Benin = forwardRef<SVGSVGElement, BeninProps>(function Benin(
  props: BeninProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Benin"
      aria-label="benin"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M-.4 72V36h72v36z" />
        <path fill="#FBD381" d="M-.4 36V0h72v36z" />
        <path fill="#009B77" d="M0 0h24v72H0z" />
      </g>
    </CountrySymbol>
  );
});
