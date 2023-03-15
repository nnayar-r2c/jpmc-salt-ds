import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type IraqProps = CountrySymbolProps;

const Iraq = forwardRef<SVGSVGElement, IraqProps>(function Iraq(
  props: IraqProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Iraq"
      aria-label="iraq"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#31373D" d="M0 72V48h72v24z" />
        <path fill="#F5F7F8" d="M0 48V24h72v24z" />
        <path fill="#DD2033" d="M0 24V0h72v24z" />
        <path
          fill="#008259"
          d="m30 32-6 2.001L29.423 34C31.947 34 34 36.093 34 38.667V44H14v-4h16.077v-1.333a.661.661 0 0 0-.654-.667H18v-6l12-4v4Zm10 8V28h-4v16h8v-4h-4Zm16-12v12h2v4H46v-8h4v4h2V28h4Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Iraq;
