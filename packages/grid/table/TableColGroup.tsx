import { useMemo } from "react";
import { TableColumnModel } from "./Table";

export interface TableColGroupProps {
  columns: TableColumnModel[];
}

export interface TableColProps<T> {
  column: TableColumnModel;
}

export function TableColGroup(props: TableColGroupProps) {
  const { columns } = props;
  return (
    <colgroup>
      {columns.map((column) => {
        return <TableCol key={column.data.id} column={column} />;
      })}
    </colgroup>
  );
}

export function TableCol<T>(props: TableColProps<T>) {
  const { width } = props.column.data;
  const style = useMemo(() => {
    return {
      width: `${width}px`,
    };
  }, [width]);
  return <col style={style} />;
}
