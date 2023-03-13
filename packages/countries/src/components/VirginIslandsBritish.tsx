import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type VirginIslandsBritishProps = CountrySymbolProps;

export const VirginIslandsBritish = forwardRef<
  SVGSVGElement,
  VirginIslandsBritishProps
>(function VirginIslandsBritish(props: VirginIslandsBritishProps, ref) {
  return (
    <CountrySymbol
      data-testid="VirginIslandsBritish"
      aria-label="virgin islands (british)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#004692" d="M0 0h72v72H0z" />
        <mask id="b" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path fill="#002F6C" d="M0 36C0 16.118 16.118 0 36 0v36H0Z" />
        </mask>
        <g mask="url(#b)">
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
        <path fill="#FBD381" d="M61.2 53h-21v5h3v3h15v-3h3v-5Z" />
        <path
          fill="#008259"
          d="M40.2 35h21v8.743a14.857 14.857 0 0 1-9.36 13.803L50.7 58l-1.14-.454a14.857 14.857 0 0 1-9.36-13.803V35Z"
        />
        <path fill="#F5F7F8" d="M48.2 39h5v15h-5z" />
        <path
          fill="#F1B434"
          d="M43.7 40a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm14 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM43.7 45a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm15.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM43.7 50a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
      </g>
    </CountrySymbol>
  );
});
