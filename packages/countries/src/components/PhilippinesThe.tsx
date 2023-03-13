import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type PhilippinesTheProps = CountrySymbolProps;

export const PhilippinesThe = forwardRef<SVGSVGElement, PhilippinesTheProps>(
  function PhilippinesThe(props: PhilippinesTheProps, ref) {
    return (
      <CountrySymbol
        data-testid="PhilippinesThe"
        aria-label="philippines (the)"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#DD2033" d="M0 72V36h72v36z" />
          <path fill="#004692" d="M0 36V0h72v36z" />
          <path fill="#F5F7F8" d="M48 36 0 0v72l48-36Z" />
          <path
            fill="#F1B434"
            d="m27.2 36-4.903 2.425 2.61 4.992-5.324-1.071L18.91 48l-3.71-4.158L11.492 48l-.674-5.654-5.325 1.07 2.611-4.992L3.2 36l4.903-2.425-2.61-4.991 5.323 1.07.675-5.654 3.709 4.159L18.909 24l.674 5.654 5.325-1.07-2.611 4.992L27.2 36Z"
          />
          <circle cx="35.8" cy="36" r="4" fill="#F1B434" />
        </g>
      </CountrySymbol>
    );
  }
);