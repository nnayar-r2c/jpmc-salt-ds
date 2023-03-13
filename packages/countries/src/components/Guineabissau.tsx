import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GuineabissauProps = CountrySymbolProps;

export const Guineabissau = forwardRef<SVGSVGElement, GuineabissauProps>(
  function Guineabissau(props: GuineabissauProps, ref) {
    return (
      <CountrySymbol
        data-testid="Guineabissau"
        aria-label="guinea-bissau"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#009B77" d="M0 72V36h72v36z" />
          <path fill="#F1B434" d="M0 36V0h72v36z" />
          <path fill="#DD2033" d="M0 0h32v72H0z" />
          <path
            fill="#31373D"
            d="m17 25-3.279 7.416L6 33.403l5.695 5.57L10.201 47 17 42.417 23.799 47l-1.494-8.026L28 33.404l-7.721-.988L17 25Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);
