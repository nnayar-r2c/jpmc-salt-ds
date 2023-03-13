import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type LiechtensteinProps = CountrySymbolProps;

export const Liechtenstein = forwardRef<SVGSVGElement, LiechtensteinProps>(
  function Liechtenstein(props: LiechtensteinProps, ref) {
    return (
      <CountrySymbol
        data-testid="Liechtenstein"
        aria-label="liechtenstein"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#DD2033" d="M-.4 72V36h72v36z" />
          <path fill="#004692" d="M-.4 36V0h72v36z" />
          <path
            fill="#F1B434"
            fillRule="evenodd"
            d="M24.4 8h3v2h3v3h-3v2.803a6 6 0 0 1 7 9.67V28h-17v-2.528a6 6 0 0 1 7-9.67V13h-3v-3h3V8Zm1.5 9.031L25.872 17h.056l-.028.031ZM25.872 25l.028-.031.028.031h-.056Z"
            clipRule="evenodd"
          />
        </g>
      </CountrySymbol>
    );
  }
);