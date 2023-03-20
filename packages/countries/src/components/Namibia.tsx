// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type NamibiaProps = CountrySymbolProps;

const Namibia = forwardRef<SVGSVGElement, NamibiaProps>(function Namibia(
  props: NamibiaProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Namibia"
      aria-label="Namibia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="NA__a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#NA__a)">
        <path fill="#005EB8" d="M0 0h72v72H0z" />
        <path fill="#009B77" d="M72 72H0L72 0v72Z" />
        <path
          fill="#F5F7F8"
          d="M2.2 54.326 20.585 72.71l52.326-52.326L54.526 2z"
        />
        <path
          fill="#DD2033"
          d="M17.062 67.974 6.455 57.367 57.367 6.456l10.607 10.606z"
        />
        <path
          fill="#FBD381"
          d="m25.4 21-3.269 1.616 1.74 3.328-3.549-.713-.45 3.769-2.472-2.772L14.928 29l-.45-3.77-3.55.714 1.74-3.328L9.4 21l3.269-1.616-1.741-3.328 3.55.713.45-3.769 2.472 2.772L19.872 13l.45 3.77 3.55-.714-1.74 3.328L25.4 21Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Namibia;
