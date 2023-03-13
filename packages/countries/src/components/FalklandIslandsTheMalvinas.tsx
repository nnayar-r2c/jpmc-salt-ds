import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type FalklandIslandsTheMalvinasProps = CountrySymbolProps;

export const FalklandIslandsTheMalvinas = forwardRef<
  SVGSVGElement,
  FalklandIslandsTheMalvinasProps
>(function FalklandIslandsTheMalvinas(
  props: FalklandIslandsTheMalvinasProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="FalklandIslandsTheMalvinas"
      aria-label="falkland islands (the) [malvinas]"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#FBD381" d="M61.6 53h-21v5h3v3h15v-3h3v-5Z" />
        <path
          fill="#0091DA"
          d="M40.6 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L51.1 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
        />
        <mask id="b" x="40" y="35" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path
            fill="#0091DA"
            d="M40.6 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L51.1 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
          />
        </mask>
        <g fill="#F5F7F8" mask="url(#b)">
          <path d="M51.1 48c-2.625 0-2.625 2.182-5.25 2.182S43.225 48 40.6 48v3.818c2.625 0 2.625 2.182 5.25 2.182s2.625-2.182 5.25-2.182c2.624 0 2.624 2.182 5.25 2.182 2.625 0 2.625-2.182 5.25-2.182V48c-2.625 0-2.625 2.182-5.25 2.182-2.626 0-2.626-2.182-5.25-2.182Zm0-7c-2.625 0-2.625 2.182-5.25 2.182S43.225 41 40.6 41v3.818c2.625 0 2.625 2.182 5.25 2.182s2.625-2.182 5.25-2.182c2.624 0 2.624 2.182 5.25 2.182 2.625 0 2.625-2.182 5.25-2.182V41c-2.625 0-2.625 2.182-5.25 2.182-2.626 0-2.626-2.182-5.25-2.182Z" />
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
