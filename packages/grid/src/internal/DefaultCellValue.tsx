import { ReactNode } from "react";
import { GridCellValueProps } from "../GridColumn";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import cn from "classnames";
import "./DefaultCellValue.css";

const withBaseName = makePrefixer("uitkGridDefaultCellValue");

export function DefaultCellValue<T>(props: GridCellValueProps<T>) {
  const { value } = props;
  return (
    <div
      className={cn(withBaseName(), {
        [withBaseName("alignRight")]: props.column.info.props.align === "right",
      })}
    >
      {value as ReactNode}
    </div>
  );
}
