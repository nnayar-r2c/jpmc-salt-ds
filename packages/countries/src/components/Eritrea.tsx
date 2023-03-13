import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type EritreaProps = CountrySymbolProps;

export const Eritrea = forwardRef<SVGSVGElement, EritreaProps>(function Eritrea(
  props: EritreaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Eritrea"
      aria-label="eritrea"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#009B77" d="M0 0h72v36H0z" />
        <path fill="#0091DA" d="M0 72V36h72v36z" />
        <path fill="#DD2033" d="M72 36 0 0v72l72-36Z" />
        <path
          fill="#FBD381"
          d="M24 50c7.732 0 14-6.268 14-14a13.96 13.96 0 0 0-4.1-9.9l-2.83 2.83A9.969 9.969 0 0 1 34 36c0 4.838-3.436 8.873-8 9.8V30h-4v15.8c-4.564-.927-8-4.962-8-9.8a9.969 9.969 0 0 1 2.929-7.071L14.1 26.101A13.956 13.956 0 0 0 10 36c0 7.732 6.268 14 14 14Zm0-28h.03-.06.03Z"
        />
      </g>
    </CountrySymbol>
  );
});