import "./HeaderCell.css";
import { useLayoutEffect, useRef, useState } from "react";
import { makePrefixer } from "@salt-ds/core";
import { clsx } from "clsx";
import { ColumnSeparatorType } from "./Grid";
import { useSizingContext } from "./SizingContext";
import { useColumnDragContext } from "./ColumnDragContext";
import { Cursor, useFocusableContent } from "./internal";
import { HeaderCellProps } from "./GridColumn";
import { useColumnDataContext } from "./ColumnDataContext";
import { useColumnSortContext } from "./ColumnSortContext";

const withBaseName = makePrefixer("saltGridHeaderCell");

export interface HeaderCellSeparatorProps {
  separatorType: ColumnSeparatorType;
}

export function HeaderCellSeparator(props: HeaderCellSeparatorProps) {
  const className = withBaseName([props.separatorType, "Separator"].join(""));
  return <div className={className} />;
}

export function HeaderCell<T>(props: HeaderCellProps<T>) {
  const { column, children, isFocused } = props;
  const { separator } = column;
  const { onResizeHandleMouseDown } = useSizingContext();

  const { columnMove, onColumnMoveHandleMouseDown } = useColumnDragContext();
  const onMouseDown = columnMove ? onColumnMoveHandleMouseDown : undefined;

  const { ref, isFocusableContent, onFocus } =
    useFocusableContent<HTMLTableHeaderCellElement>();

  const { onColumnHeaderClickHandleSort, setSortBy } = useColumnSortContext();

  const { getColById } = useColumnDataContext();

  // pseudocode
  // pass raw-to-display-data into sorting function
  // sorting func with data here
  // implement if condition for when sorting is enabled - i.e. sort api yes or no

  // gives header id for the header that is clicked on
  const { id } = getColById(column.info.props.id)?.info.props;

  return (
    <th
      ref={ref}
      aria-colindex={column.index + 1}
      data-column-index={column.index}
      className={clsx(withBaseName(), column.info.props.headerClassName)}
      role="columnheader"
      data-testid="column-header"
      tabIndex={isFocused && !isFocusableContent ? 0 : -1}
      onFocus={onFocus}
      onClick={() => {
        // console.log("column.info.props.id", column.info.props.id); // same as id
        // console.log("col header id", id);
        setSortBy(id);
        onColumnHeaderClickHandleSort(id);
      }}
    >
      <div
        className={clsx(withBaseName("valueContainer"), {
          [withBaseName("alignRight")]: column.info.props.align === "right",
        })}
        onMouseDown={onMouseDown}
      >
        {children}
      </div>
      <HeaderCellSeparator separatorType={separator} />
      <div
        data-testid={`column-${column.index}-resize-handle`}
        className={withBaseName("resizeHandle")}
        onMouseDown={onResizeHandleMouseDown}
      />
      {isFocused && !isFocusableContent && <Cursor />}
    </th>
  );
}

export function AutoSizeHeaderCell<T>(props: HeaderCellProps<T>) {
  const { column, children, isFocused } = props;
  const { separator } = column;
  const valueContainerRef = useRef<HTMLDivElement>(null);
  const { resizeColumn } = useSizingContext();

  const { ref, isFocusableContent, onFocus } =
    useFocusableContent<HTMLTableHeaderCellElement>();

  useLayoutEffect(() => {
    const width = valueContainerRef.current
      ? valueContainerRef.current.offsetWidth
      : undefined;
    if (width != undefined && width !== column.info.width) {
      resizeColumn(column.index, width);
    }
  });

  return (
    <th
      ref={ref}
      aria-colindex={column.index + 1}
      data-column-index={column.index}
      className={withBaseName()}
      role="columnheader"
      data-testid="column-header"
      tabIndex={isFocused && !isFocusableContent ? 0 : -1}
      onFocus={onFocus}
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
      {isFocused && !isFocusableContent && <Cursor />}
    </th>
  );
}
