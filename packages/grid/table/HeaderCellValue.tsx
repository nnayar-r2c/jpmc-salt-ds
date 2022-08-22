import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableHeaderValueProps } from "./TableColumn";

const withBaseName = makePrefixer("uitkTableHeaderCell");

export const HeaderCellValue = function HeaderCellValue(
  props: TableHeaderValueProps
) {
  const { column } = props;
  const title = column.info.props.name;
  return <span className={withBaseName("text")}>{title}</span>;
};
