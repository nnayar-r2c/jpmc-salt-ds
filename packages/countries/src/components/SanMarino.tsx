import { forwardRef } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type SanMarinoProps = CountrySymbolProps;

export const SanMarino = forwardRef<SVGSVGElement, SanMarinoProps>(
  function SanMarino(props: SanMarinoProps, ref) {
    return (
      <CountrySymbol
        data-testid="SanMarino"
        aria-label="san marino"
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
            transform="rotate(180 36 36)"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#F5F7F8" d="M72 0v36H0V0z" />
          <path fill="#86C5FA" d="M72 36v36H0V36z" />
          <path
            fill="#009B77"
            d="M20.737 28.403C18.634 31.27 17.4 34.765 17.4 38.536c0 8.642 6.484 15.833 15.044 17.347a3 3 0 0 0-.518 4.657l4.06-4.06 4.061 4.06a3 3 0 0 0-.602-4.708c8.421-1.62 14.765-8.748 14.765-17.296 0-3.771-1.235-7.266-3.338-10.133l-4.02 3.299a12.168 12.168 0 0 1 2.1 6.834c0 6.96-5.886 12.6-13.147 12.6-7.26 0-13.146-5.64-13.146-12.6 0-2.519.77-4.865 2.1-6.834l-4.022-3.299Z"
          />
          <mask id="b" fill="#fff">
            <path d="M23.4 26.177a4 4 0 0 1 4-4h17a4 4 0 0 1 4 4v7.964c0 6.109-3.74 11.595-9.426 13.829L35.9 49.177l-3.074-1.207A14.857 14.857 0 0 1 23.4 34.14v-7.963Z" />
          </mask>
          <path
            fill="#86C5FA"
            stroke="#F1B434"
            strokeWidth="6"
            d="M23.4 26.177a4 4 0 0 1 4-4h17a4 4 0 0 1 4 4v7.964c0 6.109-3.74 11.595-9.426 13.829L35.9 49.177l-3.074-1.207A14.857 14.857 0 0 1 23.4 34.14v-7.963Z"
            mask="url(#b)"
          />
          <path
            fill="#008259"
            d="M31.4 46.177c.946 0 1.815-.329 2.5-.878a3.983 3.983 0 0 0 2.5.878 3.98 3.98 0 0 0 2-.535 4 4 0 1 0 0-6.93 3.98 3.98 0 0 0-2-.535c-.946 0-1.815.328-2.5.877a4 4 0 1 0-2.5 7.123Z"
          />
          <path
            fill="#F1B434"
            fillRule="evenodd"
            d="M44.4 25.177h-17a1 1 0 0 0-1 1v7.964c0 4.875 2.985 9.254 7.523 11.036l1.977.777 1.977-.777A11.857 11.857 0 0 0 45.4 34.141v-7.964a1 1 0 0 0-1-1Zm-8.5 24 3.074-1.207A14.857 14.857 0 0 0 48.4 34.14v-7.963a4 4 0 0 0-4-4h-17a4 4 0 0 0-4 4v7.964c0 6.109 3.74 11.595 9.426 13.829l3.074 1.207Z"
            clipRule="evenodd"
          />
          <path
            fill="#F5F7F8"
            d="M22.4 53.177h28v2h2v6h-10v-2h-12v2h-10v-6h2v-2Z"
          />
          <path
            fill="#F1B434"
            fillRule="evenodd"
            d="M36.4 7.177h-2v1.428h-2v2h2v1.723a5.143 5.143 0 0 0-6.286 8.11v2.167h14.572V20.44a5.143 5.143 0 0 0-6.286-8.11v-1.724h2v-2h-2V7.177Zm-1 12.83-.024.027h.048l-.024-.027Zm-3.848-.83h-.01a2.571 2.571 0 1 1 2.572-2.572v2.572h-2.562Zm10.276-2.572a2.571 2.571 0 0 1-2.57 2.572h-2.573v-2.572a2.571 2.571 0 1 1 5.142 0Z"
            clipRule="evenodd"
          />
        </g>
      </CountrySymbol>
    );
  }
);