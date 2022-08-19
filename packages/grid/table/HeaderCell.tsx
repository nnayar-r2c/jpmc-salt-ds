import "./HeaderCell.css";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import cn from "classnames";
import { ColumnSeparatorType, TableColumnModel } from "./Table";
import { useSizingContext } from "./SizingContext";

const withBaseName = makePrefixer("uitkTableHeaderCell");

export interface HeaderCellProps {
  column: TableColumnModel;
  children: ReactNode;
}

export interface HeaderCellSeparatorProps {
  separatorType: ColumnSeparatorType;
}

export function HeaderCellSeparator(props: HeaderCellSeparatorProps) {
  const className = withBaseName(
    props.separatorType === "regular" ? "regularSeparator" : "edgeSeparator"
  );
  return <div className={className} />;
}

export function HeaderCell(props: HeaderCellProps) {
  const { column, children } = props;
  const { separator } = column;

  // const onResizeHandleMouseDown = useColumnResize();
  // const onMoveHandleMouseDown = useColumnMove();

  return (
    <th
      data-column-index={column.index}
      className={cn(withBaseName(), column.data.headerClassName)}
      role="columnheader"
    >
      <div className={withBaseName("valueContainer")}>{children}</div>
      <HeaderCellSeparator separatorType={separator} />
      {/*<div*/}
      {/*  className={withBaseName("resizeHandle")}*/}
      {/*  onMouseDown={onResizeHandleMouseDown}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className={withBaseName("moveHandle")}*/}
      {/*  onMouseDown={onMoveHandleMouseDown}*/}
      {/*/>*/}
    </th>
  );
}

export function AutoSizeHeaderCell<T>(props: HeaderCellProps) {
  const { column, children } = props;
  const { separator } = column;
  const valueContainerRef = useRef<HTMLDivElement>(null);
  const { resizeColumn, rowHeight } = useSizingContext();

  useLayoutEffect(() => {
    const width = valueContainerRef.current
      ? valueContainerRef.current.offsetWidth
      : undefined;
    if (width != undefined && width !== column.data.width) {
      resizeColumn(column.index, width);
    }
  }, [valueContainerRef.current, column.data.width, rowHeight]);

  return (
    <th
      data-column-index={column.index}
      className={withBaseName()}
      role="columnheader"
    >
      <div className={withBaseName("autosizeContainer")}>
        <div
          ref={valueContainerRef}
          className={withBaseName("measuredContent")}
        >
          {children}
        </div>
      </div>
      <HeaderCellSeparator separatorType={separator} />
    </th>
  );
}
