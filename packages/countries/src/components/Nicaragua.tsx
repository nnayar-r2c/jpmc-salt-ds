import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NicaraguaProps = CountrySymbolProps;

const Nicaragua = forwardRef<SVGSVGElement, NicaraguaProps>(function Nicaragua(
  props: NicaraguaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Nicaragua"
      aria-label="nicaragua"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#005EB8" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M0 52V20h72v32z" />
        <path
          fill="#F1B434"
          fillRule="evenodd"
          d="M36 45a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 4c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
          clipRule="evenodd"
        />
        <mask id="b" x="29" y="30" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path fill="#D9D9D9" d="m35.7 30 6.495 11.25h-12.99L35.7 30Z" />
        </mask>
        <g mask="url(#b)">
          <path fill="#86C5FA" d="M29.2 30h14v7h-14z" />
          <path fill="#005EB8" d="M29.2 39h14v8h-14z" />
          <path fill="#009B77" d="M29.2 37h14v2h-14z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default Nicaragua;
