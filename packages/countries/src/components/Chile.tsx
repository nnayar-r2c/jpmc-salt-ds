import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type ChileProps = CountrySymbolProps;

const Chile = forwardRef<SVGSVGElement, ChileProps>(function Chile(
  props: ChileProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Chile"
      aria-label="chile"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M-.4 72V36h72v36z" />
        <path fill="#F5F7F8" d="M-.4 36V0h72v36z" />
        <path fill="#004692" d="M0 0h36v36H0z" />
        <path
          fill="#F5F7F8"
          d="m22 14-2.385 5.394L14 20.11l4.142 4.052L17.056 30 22 26.667 26.944 30l-1.086-5.837L30 20.11l-5.615-.717L22 14Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Chile;
