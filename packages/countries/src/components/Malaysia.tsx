import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type MalaysiaProps = CountrySymbolProps;

const Malaysia = forwardRef<SVGSVGElement, MalaysiaProps>(function Malaysia(
  props: MalaysiaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Malaysia"
      aria-label="malaysia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#F5F7F8" d="M0 0h72v72H0z" />
        <path
          fill="#DD2033"
          d="M0 0v9h72V0H0Zm0 18v9h72v-9H0Zm0 27v-9h72v9H0Zm0 9v9h72v-9H0Z"
        />
        <path fill="#004692" d="M0 36V0h36v36z" />
        <path
          fill="#FBD381"
          d="M20.6 15a6.97 6.97 0 0 1 3.832 1.141 9 9 0 1 0 0 11.718A7 7 0 1 1 20.6 15Z"
        />
        <path
          fill="#FBD381"
          d="M30.077 19.167 28.6 16l-1.477 3.167-3.335-.79 1.494 3.159-2.682 2.181 3.34.772L25.93 28l2.67-2.196L31.27 28l-.009-3.51 3.34-.773-2.683-2.181 1.494-3.159-3.335.79Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Malaysia;
