import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CuracaoProps = CountrySymbolProps;

const Curacao = forwardRef<SVGSVGElement, CuracaoProps>(function Curacao(
  props: CuracaoProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Curacao"
      aria-label="curaçao"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#FBD381" d="M.4 48v-6h72v6z" />
        <path
          fill="#F5F7F8"
          d="M17.615 13.394 20 8l2.385 5.394L28 14.11l-4.142 4.052L24.944 24 20 20.667 15.056 24l1.086-5.837L12 14.11l5.615-.717ZM34.02 23.742 37 17l2.98 6.742 7.02.897-5.177 5.064L43.18 37 37 32.833 30.82 37l1.357-7.297L27 24.64l7.02-.897Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Curacao;
