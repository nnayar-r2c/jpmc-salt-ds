import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type JerseyProps = CountrySymbolProps;

export const Jersey = forwardRef<SVGSVGElement, JerseyProps>(function Jersey(
  props: JerseyProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Jersey"
      aria-label="jersey"
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
          d="m57.496 65.416 8.485-8.486-21.213-21.213 20.93-20.93-8.485-8.485-20.93 20.93L15.069 6.019l-8.485 8.485 21.213 21.213L6.302 57.213l8.485 8.485 21.496-21.495 21.213 21.213Z"
        />
        <path
          fill="#F1B434"
          d="M26 11h20v7.941a14.857 14.857 0 0 1-9.34 13.795L36 33l-.66-.264A14.857 14.857 0 0 1 26 18.94V11Z"
        />
      </g>
    </CountrySymbol>
  );
});