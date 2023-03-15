import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NewZealandProps = CountrySymbolProps;

const NewZealand = forwardRef<SVGSVGElement, NewZealandProps>(
  function NewZealand(props: NewZealandProps, ref) {
    return (
      <CountrySymbol
        data-testid="NewZealand"
        aria-label="new zealand"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#004692" d="M0 0h72v72H0z" />
          <path
            fill="#DD2033"
            d="m53 14-1.49 3.371-3.51.449 2.589 2.532-.68 3.648L53 21.917 56.09 24l-.679-3.648L58 17.82l-3.51-.449L53 14Zm-9.49 15.371L45 26l1.49 3.371 3.51.449-2.589 2.532.68 3.648L45 33.917 41.91 36l.679-3.648L40 29.82l3.51-.449Zm7.403 16.349L53 41l2.087 4.72 4.913.627-3.624 3.545.95 5.108L53 52.083 48.674 55l.95-5.108L46 46.347l4.913-.628Zm9.597-18.349L62 24l1.49 3.371 3.51.449-2.589 2.532.68 3.648L62 31.917 58.91 34l.679-3.648L57 27.82l3.51-.449Z"
          />
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
        </g>
      </CountrySymbol>
    );
  }
);

export default NewZealand;
