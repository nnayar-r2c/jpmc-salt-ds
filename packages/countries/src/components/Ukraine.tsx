// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type UkraineProps = CountrySymbolProps;

const Ukraine = forwardRef<SVGSVGElement, UkraineProps>(function Ukraine(
  props: UkraineProps,
  ref
) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="Ukraine"
      aria-label="Ukraine"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-UA-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-UA-a)`}>
        <path fill="#005EB8" d="M72 0v36H0V0z" />
        <path fill="#F1B434" d="M72 36v36H0V36z" />
      </g>
    </CountrySymbol>
  );
});

export default Ukraine;
