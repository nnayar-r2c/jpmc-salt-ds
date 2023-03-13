import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type ZimbabweProps = CountrySymbolProps;

export const Zimbabwe = forwardRef<SVGSVGElement, ZimbabweProps>(
  function Zimbabwe(props: ZimbabweProps, ref) {
    return (
      <CountrySymbol
        data-testid="Zimbabwe"
        aria-label="zimbabwe"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#008259" d="M0 72V0h72v72z" />
          <path fill="#F1B434" d="M0 61V11h72v50z" />
          <path fill="#DD2033" d="M0 51V21h72v30z" />
          <path fill="#31373D" d="M47.333 41H72V31H47.333L6 0v72l41.333-31Z" />
          <path fill="#F5F7F8" d="M48 36 0 0v72l48-36Z" />
          <path
            fill="#DD2033"
            d="m18 24-3.577 8.09L6 33.168l6.213 6.077L10.583 48 18 43l7.416 5-1.629-8.756L30 33.167l-8.423-1.076L18 24Z"
          />
          <path
            fill="#FBD381"
            d="M11.364 31.59 13 41l1.5 3h9l2-3-9.06-11.65a2.86 2.86 0 0 0-4.71.285L9 31l2.364.59Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);