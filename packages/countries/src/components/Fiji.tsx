import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type FijiProps = CountrySymbolProps;

export const Fiji = forwardRef<SVGSVGElement, FijiProps>(function Fiji(
  props: FijiProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Fiji"
      aria-label="fiji"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#86C5FA" d="M0 0h72v72H0z" />
        <path
          fill="#F5F7F8"
          d="M40.8 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L51.3 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
        />
        <mask id="b" x="40" y="35" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path
            fill="#F5F7F8"
            d="M40.8 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L51.3 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
          />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#DD2033"
            d="M40.8 35h21v6h-9v6h9v3h-9v8h-3v-8h-9v-3h9v-6h-9v-6Z"
          />
        </g>
        <mask id="c" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path fill="#002F6C" d="M0 36C0 16.118 16.118 0 36 0v36H0Z" />
        </mask>
        <g mask="url(#c)">
          <path fill="#004692" d="M0 0h36v36H0z" />
          <path
            fill="#F5F7F8"
            d="m12.522 3.134-2.121 2.121 29.526 29.526 2.121-2.121L12.522 3.134ZM6.865 8.79 3.33 12.327l29.526 29.526 3.535-3.535L6.866 8.79Z"
          />
          <path
            fill="#DD2033"
            d="m6.865 8.79 3.536-3.535 29.526 29.526-3.535 3.536L6.864 8.79Z"
          />
          <path fill="#F5F7F8" d="M36 12v5H17v19h-5V12h24Z" />
          <path fill="#F5F7F8" d="M36-2v5H5v33H0V-2h36Z" />
          <path
            fill="#DD2033"
            fillRule="evenodd"
            d="M3 36h9V12h24V3H3v33Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});