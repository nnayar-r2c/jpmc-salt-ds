import { useTableContext } from "./TableContext";
import {
  Children,
  cloneElement,
  ComponentType,
  isValidElement,
  ReactNode,
  useEffect,
} from "react";
import { TableColumnPin } from "./TableColumn";
import { TableColumnGroupModel } from "./Table";

export interface ColumnGroupCellProps {
  group: TableColumnGroupModel;
}

export interface ColumnGroupProps {
  children: ReactNode;
  name: string;
  id: string;
  pinned?: TableColumnPin;
  headerComponent?: ComponentType<ColumnGroupCellProps>;
  headerValueComponent?: ComponentType<ColumnGroupCellProps>;
}

export const ColumnGroup = (props: ColumnGroupProps) => {
  const pinned = props.pinned || null;
  const table = useTableContext();
  useEffect(() => {
    table.onColumnGroupAdded(props);
    return () => {
      table.onColumnGroupRemoved(props);
    };
  });
  const childrenWithPinnedOverridden = Children.map(props.children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { pinned });
    }
    return child;
  });
  return <>{childrenWithPinnedOverridden}</>;
};
