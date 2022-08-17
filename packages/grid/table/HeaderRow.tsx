import "./HeaderRow.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnModel } from "./Table";
import { HeaderCell } from "./HeaderCell";
import { HeaderCellValue } from "./HeaderCellValue";

const withBaseName = makePrefixer("uitkGridHeaderRow");

export interface HeaderRowProps<T> {
  columns: TableColumnModel[];
}

export function HeaderRow<T>(props: HeaderRowProps<T>) {
  const { columns } = props;
  return (
    <tr className={withBaseName()}>
      {columns.map((column) => {
        const Cell = column.data.headerComponent || HeaderCell;
        const CellValue = column.data.headerValueComponent || HeaderCellValue;
        return (
          <Cell key={column.data.id} column={column}>
            <CellValue column={column} />
          </Cell>
        );
      })}
    </tr>
  );
}
