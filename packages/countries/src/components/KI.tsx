// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type KIProps = CountrySymbolProps;

const KI = forwardRef<SVGSVGElement, KIProps>(function KI(props: KIProps, ref) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="KI"
      aria-label="Kiribati"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-KI-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-KI-a)`}>
        <path fill="#DD2033" d="M0 0h72v43H0z" />
        <path
          fill="#F1B434"
          fillRule="evenodd"
          d="M36.18 11.107c-1.022.843-1.486 1.953-1.6 2.64-.226 1.356-2.007 1.719-2.745.558-1.05-1.65-2.615-2.212-4.341-2.205-1.783.007-3.593.64-4.688 1.223l-1.412-2.646C22.8 9.927 25.09 9.11 27.482 9.1c1.723-.007 3.564.414 5.113 1.623a7.746 7.746 0 0 1 1.675-1.93c1.693-1.396 4.166-2.228 7.528-1.78l-.396 2.974c-2.638-.352-4.248.317-5.222 1.12Z"
          clipRule="evenodd"
        />
        <path
          fill="#F1B434"
          d="m55.6 37-8.172 4.041 4.352 8.32-8.874-1.785L41.78 57l-6.18-6.93L29.42 57l-1.125-9.424-8.875 1.785 4.352-8.32L15.6 37l8.173-4.041-4.353-8.32 8.874 1.785L29.42 17l6.181 6.93 6.18-6.93 1.125 9.424 8.874-1.785-4.352 8.32L55.6 37Z"
        />
        <path fill="#004692" d="M-.4 43h72v29h-72z" />
        <path
          fill="#F5F7F8"
          d="M73.882 38.003c-1.504.036-2.276.744-3.048 1.453-.792.726-1.584 1.453-3.168 1.453-1.583 0-2.375-.727-3.166-1.454-.792-.728-1.584-1.455-3.167-1.455-1.584 0-2.375.727-3.167 1.455-.791.727-1.583 1.454-3.166 1.454-1.584 0-2.375-.727-3.167-1.454C51.042 38.727 50.25 38 48.667 38c-1.584 0-2.375.727-3.167 1.455-.792.727-1.583 1.454-3.167 1.454-1.583 0-2.375-.727-3.167-1.454C38.375 38.727 37.583 38 36 38s-2.375.727-3.166 1.455c-.792.727-1.583 1.454-3.167 1.454-1.583 0-2.374-.727-3.166-1.454C25.71 38.727 24.917 38 23.334 38c-1.584 0-2.376.727-3.167 1.455-.792.727-1.584 1.454-3.167 1.454-1.584 0-2.376-.727-3.167-1.454C13.04 38.727 12.249 38 10.666 38c-1.583 0-2.375.727-3.166 1.455-.792.727-1.584 1.454-3.167 1.454-1.583 0-2.375-.727-3.168-1.453-.772-.709-1.543-1.417-3.047-1.453a38.93 38.93 0 0 0-.061 5.09c1.544.017 2.327.735 3.109 1.453C1.958 45.273 2.75 46 4.333 46c1.584 0 2.375-.727 3.167-1.455.791-.727 1.583-1.454 3.166-1.454s2.375.727 3.167 1.454C14.625 45.273 15.416 46 17 46c1.583 0 2.375-.727 3.167-1.455.791-.727 1.583-1.454 3.167-1.454 1.583 0 2.375.727 3.166 1.455.792.727 1.583 1.454 3.166 1.454 1.584 0 2.375-.727 3.167-1.455.792-.727 1.583-1.454 3.167-1.454 1.583 0 2.375.727 3.166 1.454.792.728 1.584 1.455 3.167 1.455 1.584 0 2.376-.727 3.167-1.455.792-.727 1.584-1.454 3.167-1.454 1.583 0 2.375.727 3.166 1.454C52.625 45.273 53.417 46 55 46c1.583 0 2.375-.727 3.166-1.455.792-.727 1.584-1.454 3.167-1.454 1.584 0 2.375.727 3.167 1.455.791.727 1.583 1.454 3.166 1.454 1.584 0 2.376-.727 3.168-1.454.782-.718 1.565-1.436 3.11-1.453a38.85 38.85 0 0 0-.062-5.09Zm0 10c-1.504.036-2.276.744-3.048 1.453-.792.726-1.584 1.453-3.168 1.453-1.583 0-2.375-.727-3.166-1.454-.792-.728-1.584-1.455-3.167-1.455-1.584 0-2.375.727-3.167 1.455-.791.727-1.583 1.454-3.166 1.454-1.584 0-2.375-.727-3.167-1.454C51.042 48.727 50.25 48 48.667 48c-1.584 0-2.375.727-3.167 1.455-.792.727-1.583 1.454-3.167 1.454-1.583 0-2.375-.727-3.167-1.454C38.375 48.727 37.583 48 36 48s-2.375.727-3.166 1.455c-.792.727-1.583 1.454-3.167 1.454-1.583 0-2.374-.727-3.166-1.454C25.71 48.727 24.917 48 23.334 48c-1.584 0-2.376.727-3.167 1.455-.792.727-1.584 1.454-3.167 1.454-1.584 0-2.376-.727-3.167-1.454C13.04 48.727 12.249 48 10.666 48c-1.583 0-2.375.727-3.166 1.455-.792.727-1.584 1.454-3.167 1.454-1.583 0-2.375-.727-3.168-1.453-.772-.709-1.543-1.417-3.047-1.453a38.93 38.93 0 0 0-.061 5.09c1.544.017 2.327.735 3.109 1.453C1.958 55.273 2.75 56 4.333 56c1.584 0 2.375-.727 3.167-1.455.791-.727 1.583-1.454 3.166-1.454s2.375.727 3.167 1.454C14.625 55.273 15.416 56 17 56c1.583 0 2.375-.727 3.167-1.455.791-.727 1.583-1.454 3.167-1.454 1.583 0 2.375.727 3.166 1.455.792.727 1.583 1.454 3.166 1.454 1.584 0 2.375-.727 3.167-1.455.792-.727 1.583-1.454 3.167-1.454 1.583 0 2.375.727 3.166 1.454.792.728 1.584 1.455 3.167 1.455 1.584 0 2.376-.727 3.167-1.455.792-.727 1.584-1.454 3.167-1.454 1.583 0 2.375.727 3.166 1.454C52.625 55.273 53.417 56 55 56c1.583 0 2.375-.727 3.166-1.455.792-.727 1.584-1.454 3.167-1.454 1.584 0 2.375.727 3.167 1.455.791.727 1.583 1.454 3.166 1.454 1.584 0 2.376-.727 3.168-1.454.782-.718 1.565-1.436 3.11-1.453a38.85 38.85 0 0 0-.062-5.09Zm-3.048 11.453c.772-.709 1.544-1.417 3.048-1.453a38.85 38.85 0 0 1 .062 5.09c-1.545.017-2.328.735-3.11 1.453-.792.727-1.584 1.454-3.168 1.454-1.583 0-2.374-.727-3.166-1.454-.792-.728-1.584-1.455-3.167-1.455-1.583 0-2.375.727-3.167 1.455C57.375 65.273 56.583 66 55 66s-2.375-.727-3.167-1.454c-.791-.728-1.583-1.455-3.166-1.455s-2.375.727-3.167 1.454c-.79.728-1.583 1.455-3.167 1.455-1.583 0-2.375-.727-3.166-1.454-.792-.728-1.584-1.455-3.167-1.455-1.584 0-2.375.727-3.167 1.455-.791.727-1.583 1.454-3.166 1.454-1.584 0-2.375-.727-3.167-1.454-.791-.728-1.583-1.455-3.166-1.455-1.584 0-2.375.727-3.167 1.455C19.375 65.273 18.583 66 17 66c-1.584 0-2.375-.727-3.167-1.454-.792-.728-1.584-1.455-3.167-1.455-1.583 0-2.375.727-3.166 1.454C6.708 65.273 5.917 66 4.333 66c-1.583 0-2.375-.727-3.167-1.454-.782-.718-1.565-1.436-3.11-1.454a38.53 38.53 0 0 1 .062-5.089c1.504.036 2.275.744 3.047 1.453.793.726 1.585 1.453 3.168 1.453 1.583 0 2.375-.727 3.167-1.454C8.29 58.727 9.083 58 10.666 58s2.375.727 3.167 1.455c.791.727 1.583 1.454 3.167 1.454 1.583 0 2.375-.727 3.167-1.454.791-.728 1.583-1.455 3.166-1.455 1.584 0 2.376.727 3.167 1.455.792.727 1.583 1.454 3.166 1.454 1.584 0 2.375-.727 3.167-1.454.791-.728 1.583-1.455 3.166-1.455 1.584 0 2.376.727 3.167 1.455.792.727 1.584 1.454 3.167 1.454 1.584 0 2.375-.727 3.167-1.454.792-.728 1.583-1.455 3.167-1.455 1.583 0 2.374.727 3.166 1.455.792.727 1.584 1.454 3.167 1.454 1.583 0 2.374-.727 3.166-1.454.792-.728 1.584-1.455 3.167-1.455 1.583 0 2.375.727 3.167 1.455.791.727 1.583 1.454 3.166 1.454 1.584 0 2.376-.727 3.168-1.453Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default KI;
