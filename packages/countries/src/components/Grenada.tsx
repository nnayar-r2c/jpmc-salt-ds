import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type GrenadaProps = CountrySymbolProps;

const Grenada = forwardRef<SVGSVGElement, GrenadaProps>(function Grenada(
  props: GrenadaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Grenada"
      aria-label="grenada"
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
        <path fill="#A00009" d="M0 0h72v72H0z" />
        <mask id="b" x="8" y="8" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="28" fill="#DD2033" />
        </mask>
        <g mask="url(#b)">
          <path fill="#008259" d="M68.516 68.516H3.484V3.484h65.032z" />
          <path
            fill="#F1B434"
            d="M3.303 68.516 34.916 36 3.303 3.484h65.033L34.916 36l33.42 32.516H3.302Z"
          />
        </g>
        <rect x="22.6" y="23" fill="#A00009" rx="13" />
        <path
          fill="#F1B434"
          d="m35.6 23-3.577 8.09-8.423 1.077 6.213 6.077L28.183 47l7.417-5 7.417 5-1.63-8.756 6.213-6.077-8.423-1.076L35.6 23Z"
        />
        <path
          fill="#F1B434"
          fillRule="evenodd"
          d="M35.6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-15 4.02a2 2 0 1 0-2-3.465 2 2 0 0 0 2 3.464Zm32.732-.733a2 2 0 1 1-3.464-2 2 2 0 0 1 3.464 2ZM35.6 70a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm17.732-7.287a2 2 0 1 1-3.464 2 2 2 0 0 1 3.464-2ZM18.6 65.445a2 2 0 1 0 2-3.464 2 2 0 0 0-2 3.464Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default Grenada;
