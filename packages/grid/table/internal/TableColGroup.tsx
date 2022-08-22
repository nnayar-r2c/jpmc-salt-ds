import { useMemo } from "react";
import { TableColumnModel } from "../Table";

export interface TableColGroupProps {
  columns: TableColumnModel[];
  gap?: number;
}

export interface TableColProps<T> {
  width: number;
}

export function TableColGroup(props: TableColGroupProps) {
  const { columns, gap } = props;
  return (
    <colgroup>
      {columns.map((column) => {
        return (
          <TableCol key={column.info.props.id} width={column.info.width} />
        );
      })}
      {gap !== undefined && gap > 0 ? (
        <TableCol key={"__gap"} width={gap} />
      ) : null}
    </colgroup>
  );
}

export function TableCol<T>(props: TableColProps<T>) {
  const { width } = props;
  const style = useMemo(() => {
    return {
      width: `${width}px`,
    };
  }, [width]);
  return <col style={style} />;
}
