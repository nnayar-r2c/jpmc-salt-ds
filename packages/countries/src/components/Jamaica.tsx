import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type JamaicaProps = CountrySymbolProps;

const Jamaica = forwardRef<SVGSVGElement, JamaicaProps>(function Jamaica(
  props: JamaicaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Jamaica"
      aria-label="jamaica"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#31373D" d="M0 0h72v72H0z" />
        <path fill="#009B77" d="m0 72 35-36L0 0h72L35 36l37 36H0Z" />
        <path
          fill="#F1B434"
          d="m57.92 64.991 7.071-7.07L43.071 36l21.92-21.92-7.07-7.071L36 28.929 14.08 7.009l-7.071 7.07L28.929 36 7.009 57.92l7.07 7.071L36 43.071l21.92 21.92Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Jamaica;
