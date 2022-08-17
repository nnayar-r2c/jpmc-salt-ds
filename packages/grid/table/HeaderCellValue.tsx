import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableHeaderValueProps } from "./TableColumn";

const withBaseName = makePrefixer("uitkGridHeaderCell");

export const HeaderCellValue = function HeaderCellValue(
  props: TableHeaderValueProps
) {
  const { column } = props;
  const title = column.data.name;
  return <span className={withBaseName("text")}>{title}</span>;
};
