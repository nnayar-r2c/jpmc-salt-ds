import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SpainProps = CountrySymbolProps;

export const Spain = forwardRef<SVGSVGElement, SpainProps>(function Spain(
  props: SpainProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Spain"
      aria-label="spain"
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
          transform="rotate(180 36 36)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#A00009" d="M0 0h72v72H0z" />
        <path fill="#F1B434" d="M72 18v36H0V18z" />
        <path
          fill="#E26E00"
          fillRule="evenodd"
          d="M22.6 19.667h2V21h2v2h-2v1.869a4 4 0 0 1 4.667 6.446V33H17.933v-1.685a4 4 0 0 1 4.667-6.446V23h-2v-2h2v-1.333Zm1 6.02-.018-.02h.037l-.019.02ZM23.582 31l.018-.02.019.02h-.037Z"
          clipRule="evenodd"
        />
        <path
          fill="#F5F7F8"
          d="M14.6 33h18v9.822a9.7 9.7 0 0 1-6.065 8.992 7.834 7.834 0 0 1-5.87 0 9.699 9.699 0 0 1-6.065-8.992V33Z"
        />
        <mask id="b" x="14" y="33" maskUnits="userSpaceOnUse" mask-type="alpha">
          <path
            fill="#F5F7F8"
            d="M14.6 33h18v9.822a9.7 9.7 0 0 1-6.065 8.992 7.834 7.834 0 0 1-5.87 0 9.699 9.699 0 0 1-6.065-8.992V33Z"
          />
        </mask>
        <g mask="url(#b)">
          <path fill="#DD2033" d="M14.6 33h9v10h-9z" />
          <path fill="#E26E00" d="M14.6 43h9v10h-9z" />
          <path fill="#DD2033" d="M23.6 43h9v10h-9z" />
        </g>
        <path fill="#F5F7F8" d="M34.6 33h3v19h-3V33Zm-25 0h3v19h-3V33Z" />
      </g>
    </CountrySymbol>
  );
});