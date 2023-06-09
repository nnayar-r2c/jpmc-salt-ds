import { SVGAttributes } from "react";
import { makePrefixer } from "../../utils";

const withBaseName = makePrefixer("saltSpinner");

/* SVG based on MD, do not change viewbox attribute */
export const SpinnerSVG = (props: {
  id?: string;
  rest?: Omit<SVGAttributes<SVGSVGElement>, "id">;
}) => {
  const { id: idProp, rest } = props;
  const id = idProp || "svg-spinner";

  return (
    <svg
      className={withBaseName("spinner")}
      viewBox="0 0 28 28"
      id={id}
      {...rest}
    >
      <defs>
        <linearGradient id={`${id}-1`} x1="100%" x2="0%" y1="78%" y2="78%">
          <stop className={withBaseName("gradientStop")} offset="0%" />
          <stop className={withBaseName("gradientStop")} offset="100%" />
        </linearGradient>
        <linearGradient id={`${id}-2`} x1="13%" x2="100%" y1="0%" y2="87%">
          <stop className={withBaseName("gradientStop")} offset="0%" />
          <stop
            className={withBaseName("gradientStop")}
            offset="100%"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M28 14H24C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14 H 0 C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z"
          fill={`url(#${id}-1)`}
        />
        <path
          d="M4 14 C4 19.5228 8.47715 24 14 24V28C6.26801 28 0 21.732 0 14 Z"
          fill={`url(#${id}-2)`}
        />
      </g>
    </svg>
  );
};
