// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KoreaDemocraticPeoplesRepublicOfProps = CountrySymbolProps;

const KoreaDemocraticPeoplesRepublicOf = forwardRef<
  SVGSVGElement,
  KoreaDemocraticPeoplesRepublicOfProps
>(function KoreaDemocraticPeoplesRepublicOf(
  props: KoreaDemocraticPeoplesRepublicOfProps,
  ref
) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="KoreaDemocraticPeoplesRepublicOf"
      aria-label="Korea (Democratic People&#39;s Republic of)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-KP-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-KP-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M0 60V12h72v48z" />
        <path fill="#DD2033" d="M0 54V18h72v36z" />
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M23 23c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13Zm-2.98 9.742L23 26l2.98 6.742 7.02.897-5.177 5.064L29.18 46 23 41.833 16.82 46l1.357-7.297L13 33.64l7.02-.897Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default KoreaDemocraticPeoplesRepublicOf;
