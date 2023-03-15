import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SingaporeProps = CountrySymbolProps;

const Singapore = forwardRef<SVGSVGElement, SingaporeProps>(function Singapore(
  props: SingaporeProps,
  ref
) {
  return (
    <CountrySymbol
      data-testid="Singapore"
      aria-label="singapore"
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
          transform="rotate(-180 36 36)"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#DD2033" d="M72 0v38H0V0z" />
        <path
          fill="#F5F7F8"
          d="M72 38v34H0V38zm-48.617-8.782c1.065.851 2.23 1.49 3.44 1.922-3.198.696-6.672 0-9.429-2.203-4.856-3.88-5.648-10.964-1.768-15.82 2.92-3.655 7.653-5.008 11.887-3.8a10.991 10.991 0 0 0-6.174 3.861c-3.88 4.857-2.965 12.039 2.044 16.04Zm13.025-17.521L37.6 9l1.192 2.697 2.808.359-2.07 2.025.542 2.919-2.472-1.667L35.128 17l.543-2.919-2.071-2.025 2.808-.36Z"
        />
        <path
          fill="#F5F7F8"
          d="M28.408 17.697 29.6 15l1.192 2.697 2.808.359-2.07 2.025.542 2.919-2.472-1.667L27.128 23l.543-2.919-2.071-2.025 2.808-.36ZM45.6 15l-1.192 2.697-2.808.359 2.071 2.025L43.128 23l2.472-1.667L48.072 23l-.543-2.919 2.071-2.025-2.808-.36L45.6 15ZM31.408 26.697 32.6 24l1.192 2.697 2.808.359-2.07 2.025.542 2.919-2.472-1.667L30.128 32l.543-2.919-2.071-2.025 2.808-.36ZM42.6 24l-1.192 2.697-2.808.359 2.071 2.025L40.128 32l2.472-1.667L45.072 32l-.543-2.919 2.071-2.025-2.808-.36L42.6 24Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default Singapore;
