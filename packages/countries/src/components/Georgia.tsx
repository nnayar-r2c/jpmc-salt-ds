import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GeorgiaProps = CountrySymbolProps;

export const Georgia = forwardRef<SVGSVGElement, GeorgiaProps>(function Georgia(
  props: GeorgiaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Georgia"
      aria-label="georgia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path
          fill="#DD2033"
          d="M30.4 72h12V42H72V30H42.4V0h-12v30H0v12h30.4v30Z"
        />
        <path
          fill="#DD2033"
          d="M10.4 20v-4h6v-6h4v6h6v4h-6v6h-4v-6h-6Zm36 0v-4h6v-6h4v6h6v4h-6v6h-4v-6h-6Zm-36 36v-4h6v-6h4v6h6v4h-6v6h-4v-6h-6Zm36 0v-4h6v-6h4v6h6v4h-6v6h-4v-6h-6Z"
        />
      </g>
    </CountrySymbol>
  );
});
