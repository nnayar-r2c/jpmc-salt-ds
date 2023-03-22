// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CambodiaProps = CountrySymbolProps;

const Cambodia = forwardRef<SVGSVGElement, CambodiaProps>(function Cambodia(
  props: CambodiaProps,
  ref
) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="Cambodia"
      aria-label="Cambodia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-KH-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        mask-type="alpha"
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-KH-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#DD2033" d="M0 54V18h72v36z" />
        <path
          fill="#F5F7F8"
          d="M19 37v5h-2v2h-2v2h-2v2h46v-2h-2v-2h-2v-2h-2v-5h-1v-7h-6v7h-4V24H30v13h-4v-7h-6v7h-1Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Cambodia;
