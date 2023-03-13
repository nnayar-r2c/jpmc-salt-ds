import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type IndiaProps = CountrySymbolProps;

export const India = forwardRef<SVGSVGElement, IndiaProps>(function India(
  props: IndiaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="India"
      aria-label="india"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#009B77" d="M0 72V52h72v20z" />
        <path fill="#F5F7F8" d="M0 52V20h72v32z" />
        <path fill="#FF9E42" d="M0 20V0h72v20z" />
        <path
          fill="#004692"
          fillRule="evenodd"
          d="M49 36c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13Zm-10.526 8.656A9.006 9.006 0 0 1 36 45c-.858 0-1.688-.12-2.474-.344L36 41.88l2.474 2.775Zm.362-.112a9.018 9.018 0 0 0 4.268-3.017l-3.816-.768-.452 3.785Zm4.362-3.14A8.96 8.96 0 0 0 45 36a8.96 8.96 0 0 0-1.802-5.404l-1.875 3.586L45 36l-3.678 1.819 1.876 3.585Zm-.094-10.93a9.018 9.018 0 0 0-4.268-3.018l.452 3.785 3.816-.768Zm-4.63-3.13L36 30.12l-2.474-2.775A9.005 9.005 0 0 1 36 27c.858 0 1.688.12 2.474.344Zm-5.31.112a9.017 9.017 0 0 0-4.268 3.017l3.816.768.452-3.785Zm-4.362 3.14A8.96 8.96 0 0 0 27 36a8.96 8.96 0 0 0 1.802 5.404l1.875-3.586L27 36l3.678-1.819-1.876-3.585Zm.094 10.93a9.018 9.018 0 0 0 4.268 3.018l-.452-3.785-3.816.768Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});
