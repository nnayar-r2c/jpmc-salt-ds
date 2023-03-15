import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type CocosKeelingIslandsTheProps = CountrySymbolProps;

const CocosKeelingIslandsThe = forwardRef<
  SVGSVGElement,
  CocosKeelingIslandsTheProps
>(function CocosKeelingIslandsThe(props: CocosKeelingIslandsTheProps, ref) {
  return (
    <CountrySymbol
      data-testid="CocosKeelingIslandsThe"
      aria-label="cocos (keeling) islands (the)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse" mask-type="alpha">
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask="url(#a)">
        <path fill="#008259" d="M0 0h72v72H0z" />
        <circle cx="17.4" cy="22" r="9" fill="#F1B434" />
        <path fill="#936846" d="M16.4 21h2v8h-2z" />
        <path
          fill="#009B77"
          d="m17.4 15 .984 2.112 2.224-.527-.996 2.106 1.788 1.454-2.226.515.006 2.34-1.78-1.464L15.62 23l.006-2.34-2.226-.515 1.788-1.454-.996-2.106 2.223.527L17.4 15Z"
        />
        <path
          fill="#F1B434"
          d="M57.384 21.112 56.4 19l-.985 2.112-2.223-.527.996 2.106-1.788 1.454 2.226.515L54.62 27l1.78-1.464L58.18 27l-.006-2.34 2.226-.515-1.788-1.454.996-2.106-2.224.527ZM38.9 28.5a7.55 7.55 0 0 1 1.784.213A9 9 0 1 0 35.4 45a8.96 8.96 0 0 0 5.284-1.713A7.5 7.5 0 1 1 38.9 28.5Zm8.484 6.612L46.4 33l-.985 2.112-2.223-.527.996 2.106-1.788 1.454 2.226.514L44.62 41l1.78-1.464L48.18 41l-.006-2.34 2.226-.515-1.788-1.454.996-2.106-2.224.527ZM53.4 52l.984 2.112 2.224-.527-.996 2.106 1.788 1.454-2.226.514L55.18 60l-1.78-1.464L51.62 60l.006-2.34-2.226-.515 1.788-1.454-.996-2.106 2.223.527L53.4 52Zm11-20 .984 2.112 2.224-.527-.996 2.106 1.788 1.454-2.226.514L66.18 40l-1.78-1.464L62.62 40l.006-2.34-2.226-.515 1.788-1.454-.996-2.106 2.223.527L64.4 32Zm-4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CocosKeelingIslandsThe;
