// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PolandProps = CountrySymbolProps;

const Poland = forwardRef<SVGSVGElement, PolandProps>(function Poland(
  props: PolandProps,
  ref
) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="Poland"
      aria-label="Poland"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-PL-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-PL-a)`}>
        <path fill="#DD2033" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M0 0h72v36H0z" />
      </g>
    </CountrySymbol>
  );
});

export default Poland;
