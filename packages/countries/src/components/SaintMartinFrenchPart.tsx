import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SaintMartinFrenchPartProps = CountrySymbolProps;

const SaintMartinFrenchPart = forwardRef<
  SVGSVGElement,
  SaintMartinFrenchPartProps
>(function SaintMartinFrenchPart(props: SaintMartinFrenchPartProps, ref) {
  return (
    <CountrySymbol
      data-testid="SaintMartinFrenchPart"
      aria-label="saint martin (french part)"
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
          transform="matrix(0 -1 -1 0 72 72)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#004692" d="M0 72h24V0H0z" />
        <path fill="#F5F7F8" d="M24 72h24V0H24z" />
        <path fill="#DD2033" d="M48 72h24V0H48z" />
      </g>
    </CountrySymbol>
  );
});

export default SaintMartinFrenchPart;
