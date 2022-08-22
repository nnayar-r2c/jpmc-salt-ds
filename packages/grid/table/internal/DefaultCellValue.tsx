import { FC } from "react";
import { TableCellValueProps } from "../TableColumn";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import cn from "classnames";
import "./DefaultCellValue.css";

const withBaseName = makePrefixer("uitkTableDefaultCellValue");

export const DefaultCellValue: FC<TableCellValueProps> = (props) => {
  const { value } = props;
  return (
    <div
      className={cn(withBaseName(), {
        [withBaseName("alignRight")]: props.column.info.props.align === "right",
      })}
    >
      {value}
    </div>
  );
};
