import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TajikistanProps = CountrySymbolProps;

const Tajikistan = forwardRef<SVGSVGElement, TajikistanProps>(
  function Tajikistan(props: TajikistanProps, ref) {
    return (
      <CountrySymbol
        data-testid="Tajikistan"
        aria-label="tajikistan"
        viewBox="0 0 72 72"
        ref={ref}
        {...props}
      >
        <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
          <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
        </mask>
        <g mask="url(#a)">
          <path fill="#008259" d="M0 72V48h72v24z" />
          <path fill="#F5F7F8" d="M0 48V24h72v24z" />
          <path fill="#DD2033" d="M0 24V0h72v24z" />
          <path
            fill="#F1B434"
            d="M33.376 17.371 34.866 14l1.491 3.371 3.51.449-2.589 2.532.679 3.648-3.09-2.083L31.777 24l.678-3.648-2.588-2.532 3.51-.449ZM36.4 30l5.143 5.143L44.4 33l4 3-1.17 6H25.57l-1.17-6 4-3 2.857 2.143L36.4 30ZM17.532 19.904l.713 3.616-2.618 2.381 3.573.59 1.536 3.377 1.337-3.479 3.726-.066-2.649-2.599.668-3.559-3.132 1.646-3.154-1.907ZM11.91 33.371 13.4 30l1.49 3.371 3.51.449-2.589 2.532.68 3.648-3.091-2.083L10.31 40l.678-3.648L8.4 33.82l3.51-.449ZM57.4 30l-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.09-2.083L60.49 40l-.679-3.648L62.4 33.82l-3.51-.449L57.4 30Zm-8.287-8.19 3.155-1.906-.713 3.616 2.618 2.381-3.573.59-1.537 3.377-1.336-3.479-3.726-.066 2.648-2.599-.668-3.559 3.132 1.646Z"
          />
        </g>
      </CountrySymbol>
    );
  }
);

export default Tajikistan;
