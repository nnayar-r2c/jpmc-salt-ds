import { makePrefixer } from "@jpmorganchase/uitk-core";
import { FC, useMemo } from "react";
import "./RowHover.css";
import { useGridContext } from "../GridContext";

const withBaseName = makePrefixer("uitkGridRowHover");

export interface RowHoverProps {}

export const RowHover: FC<RowHoverProps> = (props) => {
  const { model } = useGridContext();
  const hoverOverRowTop = model.useHoverOverRowTop();
  const rowHeight = model.useRowHeight();

  const style = useMemo(() => {
    if (hoverOverRowTop === undefined || rowHeight === undefined) {
      return {};
    }
    return {
      top: hoverOverRowTop,
      height: rowHeight + 1,
    };
  }, [hoverOverRowTop, rowHeight]);

  if (hoverOverRowTop === undefined) {
    return null;
  }

  return <div className={withBaseName()} style={style}></div>;
};
