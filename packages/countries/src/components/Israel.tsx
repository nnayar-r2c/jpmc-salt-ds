import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type IsraelProps = CountrySymbolProps;

const Israel = forwardRef<SVGSVGElement, IsraelProps>(function Israel(
  props: IsraelProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Israel"
      aria-label="israel"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F5F7F8" d="M-.4 72V0h72v72z" />
        <path fill="#005EB8" d="M0 64V54h72v10zm0-44V10h72v10z" />
        <path
          fill="#005EB8"
          fillRule="evenodd"
          d="m31.559 30 4.041-7 4.041 7h8.084l-4.042 7 4.041 7h-8.082L35.6 51l-4.041-7h-8.083l4.041-7-4.041-7h8.083Zm-1.155 2H26.94l1.732 3 1.732-3Zm-.577 5 2.886-5h5.774l2.887 5-2.887 5h-5.773l-2.887-5Zm-1.155 2-1.732 3h3.464l-1.732-3Zm5.196 5 1.732 3 1.732-3h-3.464Zm6.928-2h3.464l-1.732-3-1.731 3Zm1.732-7 1.733-3h-3.465l1.732 3Zm-5.196-5h-3.464l1.732-3 1.732 3Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default Israel;
