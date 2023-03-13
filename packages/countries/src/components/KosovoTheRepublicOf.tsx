import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KosovoTheRepublicOfProps = CountrySymbolProps;

export const KosovoTheRepublicOf = forwardRef<
  SVGSVGElement,
  KosovoTheRepublicOfProps
>(function KosovoTheRepublicOf(props: KosovoTheRepublicOfProps, ref) {
  return (
    <CountrySymbol
      data-testid="KosovoTheRepublicOf"
      aria-label="kosovo (the republic of)"
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
          fill="#F5F7F8"
          d="m36 13-1.49 3.371-3.51.449 2.589 2.532-.68 3.648L36 20.917 39.09 23l-.679-3.648L41 16.82l-3.51-.449L36 13Zm-11 3-1.49 3.371-3.51.449 2.589 2.532-.68 3.648L25 23.917 28.09 26l-.679-3.648L30 19.82l-3.51-.449L25 16Zm-11 7-1.49 3.371L9 26.82l2.589 2.532-.68 3.648L14 30.917 17.09 33l-.679-3.648L19 26.82l-3.51-.449L14 23Zm44 0-1.49 3.371-3.51.449 2.589 2.532-.68 3.648L58 30.917 61.09 33l-.679-3.648L63 26.82l-3.51-.449L58 23Zm-11-7-1.49 3.371-3.51.449 2.589 2.532-.68 3.648L47 23.917 50.09 26l-.679-3.648L52 19.82l-3.51-.449L47 16Z"
        />
        <path
          fill="#F1B434"
          d="m31.144 59.242-.633-7.131-7.458-5.611v-3.368c8.43-2.992 8.954-9.98 8.163-13.1l3.718-1.558 9.688 7.239-.367 2.977 9.558 4.2-3.337 6.642-.489 3.97-3.1.626-.625-3.1-10.101 4.298-.55 4.466-4.467-.55Z"
        />
      </g>
    </CountrySymbol>
  );
});
