import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type BosniaAndHerzegovinaProps = CountrySymbolProps;

export const BosniaAndHerzegovina = forwardRef<
  SVGSVGElement,
  BosniaAndHerzegovinaProps
>(function BosniaAndHerzegovina(props: BosniaAndHerzegovinaProps, ref) {
  return (
    <CountrySymbol
      data-testid="BosniaAndHerzegovina"
      aria-label="bosnia and herzegovina"
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
          transform="matrix(1 0 0 -1 0 72)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#004692" d="M-.2 0h72v72h-72z" />
        <path
          fill="#F5F7F8"
          d="M6.012 11.045 7.8 7l1.788 4.045 4.212.539-3.106 3.038.814 4.378L7.8 16.5 4.092 19l.814-4.378L1.8 11.584l4.212-.539Zm10 10L17.8 17l1.788 4.045 4.212.539-3.106 3.038.814 4.378-3.708-2.5-3.708 2.5.814-4.378-3.106-3.038 4.212-.539ZM27.8 27l-1.788 4.045-4.212.539 3.106 3.038L24.092 39l3.708-2.5 3.708 2.5-.814-4.378 3.106-3.038-4.211-.539L27.8 27Zm8.212 14.045L37.8 37l1.789 4.045 4.211.539-3.106 3.038.814 4.378-3.708-2.5-3.708 2.5.814-4.378-3.106-3.038 4.212-.539ZM47.8 47l-1.788 4.045-4.212.539 3.106 3.038L44.092 59l3.708-2.5 3.708 2.5-.814-4.378 3.106-3.038-4.211-.539L47.8 47Zm8.212 14.045L57.8 57l1.789 4.045 4.211.539-3.106 3.038.814 4.378-3.708-2.5-3.708 2.5.814-4.378-3.106-3.038 4.212-.539Z"
        />
        <path fill="#F1B434" d="M72 0v62L10 0h62Z" />
      </g>
    </CountrySymbol>
  );
});