import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type EcuadorProps = CountrySymbolProps;

export const Ecuador = forwardRef<SVGSVGElement, EcuadorProps>(function Ecuador(
  props: EcuadorProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Ecuador"
      aria-label="ecuador"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M0 72V54h72v18z" />
        <path fill="#F1B434" d="M0 36V0h72v36z" />
        <path fill="#004692" d="M0 54V36h72v18z" />
        <path
          fill="#936846"
          fillRule="evenodd"
          d="M39.208 21.436c-1.139.676-1.767 1.702-1.986 2.363-.432 1.306-2.247 1.39-2.798.13-.785-1.791-2.244-2.587-3.951-2.845-1.763-.267-3.648.08-4.82.489l-.989-2.833c1.504-.524 3.892-.98 6.258-.623 1.704.258 3.458.957 4.803 2.39a7.746 7.746 0 0 1 1.952-1.65c1.887-1.12 4.458-1.563 7.712-.603l-.848 2.877c-2.553-.752-4.247-.34-5.333.305Z"
          clipRule="evenodd"
        />
        <path
          fill="#FBD381"
          d="m30.2 33-13-3v11.338a4 4 0 0 0 4.608 3.953L30.2 44V33Zm12 0 13-3v11.338a4 4 0 0 1-4.608 3.953L42.2 44V33Z"
        />
        <path
          fill="#004692"
          d="m33.2 31-13-3v11.338a4 4 0 0 0 4.608 3.953L33.2 42V31Zm6 0 13-3v11.338a4 4 0 0 1-4.608 3.953L39.2 42V31Z"
        />
        <path
          fill="#DD2033"
          d="m23.2 26 13 3 13-3v11.338a4 4 0 0 1-4.608 3.953L36.2 40l-8.392 1.291a4 4 0 0 1-4.608-3.953V26Z"
        />
        <path
          fill="#0091DA"
          d="M42.788 44.218C41.264 46.396 38.965 48 36.2 48s-5.063-1.603-6.588-3.782C28.082 42.033 27.2 39.121 27.2 36c0-3.121.883-6.033 2.412-8.218C31.137 25.604 33.435 24 36.2 24s5.063 1.604 6.588 3.782C44.318 29.967 45.2 32.879 45.2 36c0 3.121-.882 6.033-2.412 8.218Z"
        />
        <path
          fill="#C1C3C3"
          fillRule="evenodd"
          d="M42.788 44.218C41.264 46.396 38.965 48 36.2 48s-5.063-1.603-6.588-3.782C28.082 42.033 27.2 39.121 27.2 36c0-3.121.883-6.033 2.412-8.218C31.137 25.604 33.435 24 36.2 24s5.063 1.604 6.588 3.782C44.318 29.967 45.2 32.879 45.2 36c0 3.121-.882 6.033-2.412 8.218ZM36.2 46c3.866 0 7-4.477 7-10s-3.134-10-7-10-7 4.477-7 10 3.134 10 7 10Z"
          clipRule="evenodd"
        />
        <mask id="b" x="29" y="26" maskUnits="userSpaceOnUse" mask-type="alpha">
          <ellipse cx="36.2" cy="36" fill="#D9D9D9" rx="7" ry="10" />
        </mask>
        <g mask="url(#b)">
          <path fill="#008259" d="m33.6 37-4 6-1-6h5Zm0 0 8.8 6 2.2-6h-11Z" />
          <path fill="#F5F7F8" d="m35.6 33 5 4h-13l1.5-5 4.5 2 2-1Z" />
        </g>
      </g>
    </CountrySymbol>
  );
});