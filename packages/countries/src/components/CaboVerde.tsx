import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CaboVerdeProps = CountrySymbolProps;

const CaboVerde = forwardRef<SVGSVGElement, CaboVerdeProps>(function CaboVerde(
  props: CaboVerdeProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="CaboVerde"
      aria-label="cabo verde"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#F5F7F8" d="M0 54V36h72v18z" />
        <path fill="#DD2033" d="M0 48v-6h72v6z" />
        <path
          fill="#F1B434"
          d="m15.44 40.81-1.025 2.32-2.415.308 1.781 1.742-.467 2.51 2.127-1.433 2.126 1.434-.467-2.51 1.781-1.743-2.415-.309-1.025-2.32Zm2.58-6.385 1.026-2.32 1.025 2.32 2.415.309-1.781 1.742.467 2.51-2.126-1.433-2.127 1.433.467-2.51-1.78-1.742 2.414-.309Zm8.705-3.605 1.025-2.32 1.026 2.32 2.415.308-1.782 1.743.468 2.51-2.127-1.434-2.126 1.434.467-2.51-1.781-1.743 2.415-.308ZM18.02 51.833l1.026-2.32 1.025 2.32 2.415.309-1.781 1.742.467 2.51-2.126-1.433-2.127 1.434.467-2.51-1.78-1.743 2.414-.309Zm9.73 1.286-1.025 2.32-2.415.308 1.78 1.743-.466 2.51 2.126-1.434L29.877 60l-.468-2.51 1.782-1.743-2.415-.308-1.026-2.32Zm7.678-1.286 1.026-2.32 1.025 2.32 2.415.309-1.78 1.742.466 2.51-2.126-1.433-2.127 1.434.468-2.51-1.782-1.743 2.415-.309ZM40.06 40.81l-1.026 2.32-2.415.308L38.4 45.18l-.467 2.51 2.126-1.433 2.127 1.434-.467-2.51 1.78-1.743-2.414-.309-1.026-2.32Zm-4.632-6.385 1.026-2.32 1.025 2.32 2.415.309-1.78 1.742.466 2.51-2.126-1.433-2.127 1.433.468-2.51-1.782-1.742 2.415-.309Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CaboVerde;
