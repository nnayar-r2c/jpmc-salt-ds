import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AlgeriaProps = CountrySymbolProps;

const Algeria = forwardRef<SVGSVGElement, AlgeriaProps>(function Algeria(
  props: AlgeriaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Algeria"
      aria-label="algeria"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="rotate(-90 36 36)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#005B33" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M36 0h36v72H36z" />
        <path
          fill="#DD2033"
          d="M41 20c4.73 0 8.98 2.052 11.91 5.315C49.365 19.717 43.117 16 36 16c-11.046 0-20 8.954-20 20s8.954 20 20 20c7.117 0 13.365-3.717 16.91-9.315A15.96 15.96 0 0 1 41 52c-8.837 0-16-7.163-16-16s7.163-16 16-16Z"
        />
        <path
          fill="#DD2033"
          d="m39.704 35.34-2.926-7.562 7.563 2.926 6.157-4.762-.088 7.966 6.732 4.62-8.048 1.566-1.567 8.048-4.619-6.732-7.966.088 4.762-6.157Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Algeria;
