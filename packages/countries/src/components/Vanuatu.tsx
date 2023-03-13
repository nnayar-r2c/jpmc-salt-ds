import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type VanuatuProps = CountrySymbolProps;

export const Vanuatu = forwardRef<SVGSVGElement, VanuatuProps>(function Vanuatu(
  props: VanuatuProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Vanuatu"
      aria-label="vanuatu"
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
          transform="matrix(1 0 0 -1 0 72)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 0v27h72V0z" />
        <path fill="#008259" d="M0 45v27h72V45z" />
        <path fill="#31373D" d="M72 27H50.8l-36-27H7.4v72h7.4l36-27H72V27Z" />
        <path fill="#F1B434" d="M72 39H48.8l-44 33V0l44 33H72v6Z" />
        <path fill="#31373D" d="M21.6 36a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        <path
          fill="#31373D"
          fillRule="evenodd"
          d="m-4.4 0 48 36-48 36V0Zm32 36c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});
