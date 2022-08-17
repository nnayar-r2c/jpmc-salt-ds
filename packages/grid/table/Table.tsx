import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkTable");

export interface TableContext {
  onColumnAdded: (columnProps: TableColumnProps) => void;
  onColumnRemoved: (columnProps: TableColumnProps) => void;
}

export const TableContext = createContext<TableContext | undefined>(undefined);

export const useTableContext = () => {
  const c = useContext(TableContext);
  if (!c) {
    throw new Error(`useTableContext invoked outside of a Table`);
  }
  return c;
};

export interface TableProps {
  children: ReactNode;
}

export interface TableColumnProps {
  name: string;
  width?: number;
  defaultWidth?: number;
  onWidthChanged?: (width: number) => void;
}

export const TableColumn = (props: TableColumnProps) => {
  const table = useTableContext();
  useEffect(() => {
    table.onColumnAdded(props);
    return () => {
      table.onColumnRemoved(props);
    };
  });
  return null;
};

export const Table = (props: TableProps) => {
  const [columns, setColumns] = useState<TableColumnProps[]>([]);

  const onColumnAdded = useCallback((columnProps: TableColumnProps) => {
    console.log(`Column added: ${columnProps.name}`);
    setColumns((old) => [...old, columnProps]);
  }, []);

  const onColumnRemoved = useCallback((columnProps: TableColumnProps) => {
    console.log(`Column removed: ${columnProps.name}`);
    setColumns((old) => old.filter((x) => x.name !== columnProps.name));
  }, []);

  const contextValue: TableContext = useMemo(
    () => ({
      onColumnAdded,
      onColumnRemoved,
    }),
    [onColumnAdded, onColumnRemoved]
  );

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
      <div className={withBaseName()}>
        {columns.map((column) => {
          return <div className={withBaseName("column")}>Column</div>;
        })}
      </div>
    </TableContext.Provider>
  );
};
