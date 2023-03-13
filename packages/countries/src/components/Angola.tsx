import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AngolaProps = CountrySymbolProps;

export const Angola = forwardRef<SVGSVGElement, AngolaProps>(function Angola(
  props: AngolaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Angola"
      aria-label="angola"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#31373D" d="M0 72V36h72v36z" />
        <path fill="#DD2033" d="M0 36V0h72v36z" />
        <path
          fill="#F1B434"
          d="m29.6 24-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.091-2.083L32.69 34l-.678-3.648L34.6 27.82l-3.51-.449L29.6 24Z"
        />
        <path
          fill="#F1B434"
          d="M49.313 43.856C53.73 36.204 51.109 26.418 43.456 22a15.93 15.93 0 0 0-10.13-2.002l-.294 4.69a11.387 11.387 0 0 1 8.139 1.271c5.466 3.156 7.339 10.146 4.183 15.612-.135.233-.277.46-.425.68L34.1 36l-.5.866a4 4 0 0 0 1.464 5.464l6.02 3.476a11.423 11.423 0 0 1-11.342-.052 11.387 11.387 0 0 1-5.2-6.51l-3.9 2.656a15.931 15.931 0 0 0 6.814 7.813c5.88 3.395 13.02 2.633 18.016-1.374l9.215 5.32 2.5-4.33-8.292-4.787c.144-.224.283-.453.418-.686ZM21.616 27.83l-.032.054.016-.028.016-.027Z"
        />
      </g>
    </CountrySymbol>
  );
});