import {
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  WheelEventHandler,
} from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnProps } from "./TableColumn";
import { TableContext } from "./TableContext";
import { Rng } from "../src/grid";
import cx from "classnames";
import { CellMeasure } from "./CellMeasure";
import { Scrollable } from "./Scrollable";
import "./Table.css";
import { MiddlePart } from "./MiddlePart";
import { TopPart } from "./TopPart";
import { LeftPart } from "./LeftPart";
import { TopLeftPart } from "./TopLeftPart";
import { RightPart } from "./RightPart";

const withBaseName = makePrefixer("uitkGrid");

export type ColumnSeparatorType = "regular" | "none" | "groupEdge";

export interface TableProps {
  children: ReactNode;
  isZebra?: boolean;
  rowData: any[];
  rowKeyGetter: (row: any) => string;
  className?: string;
}

export interface Size {
  height: number;
  width: number;
}

const sizeEquals = (a: Size, b: Size) => {
  return a.height === b.height && a.width === b.width;
};

const sumWidth = (columns: TableColumnModel[]) =>
  columns.reduce((p, x) => p + x.data.width, 0);

const useSumWidth = (columns: TableColumnModel[]) =>
  useMemo(() => sumWidth(columns), [columns]);

const useSum = (source: number[]) =>
  useMemo(() => source.reduce((p, x) => p + x, 0), source);

const sumRangeWidth = (columns: TableColumnModel[], range: Rng) => {
  if (columns.length < range.end) {
    console.log(`Invalid call to sumRangeWidth`);
    return 0;
  }
  let w = 0;
  range.forEach((i) => {
    w += columns[i].data.width;
  });
  return w;
};

const useSumRangeWidth = (columns: TableColumnModel[], range: Rng) =>
  useMemo(() => sumRangeWidth(columns, range), [columns, range]);

const useProd = (source: number[]) =>
  useMemo(() => source.reduce((p, x) => p * x, 1), source);

// TODO rewrite this!!!
const useBodyVisibleColumnRange = (
  midColumns: TableColumnModel[],
  scrollLeft: number,
  clientMidWidth: number
): Rng => {
  const prevRef = useRef<Rng>(Rng.empty);
  const range = useMemo(() => {
    if (clientMidWidth === 0 || midColumns.length === 0) {
      return Rng.empty;
    }
    let width = scrollLeft;
    let start = 0;
    for (let i = 0; i < midColumns.length; ++i) {
      const colWidth = midColumns[i].data.width;
      if (width > colWidth) {
        width -= colWidth;
      } else {
        start = i;
        width += clientMidWidth;
        break;
      }
    }
    let end = start + 1;
    for (let i = start; i < midColumns.length; ++i) {
      const colWidth = midColumns[i].data.width;
      width -= colWidth;
      end = i + 1;
      if (width <= 0) {
        break;
      }
    }
    if (end > midColumns.length) {
      end = midColumns.length;
    }
    return new Rng(start, end);
  }, [midColumns, scrollLeft, clientMidWidth]);

  if (!Rng.equals(prevRef.current, range)) {
    console.log(`visibleColumnRange: ${range.toString()}`);
    prevRef.current = range;
  }
  return range;
};

const useClientMidWidth = (
  clientWidth: number,
  leftWidth: number,
  rightWidth: number
) =>
  useMemo(
    () => clientWidth - leftWidth - rightWidth,
    [clientWidth, leftWidth, rightWidth]
  );

const useClientMidHeight = (
  clientHeight: number,
  topHeight: number,
  botHeight: number
) =>
  useMemo(
    () => clientHeight - topHeight - botHeight,
    [clientHeight, topHeight, botHeight]
  );

const useBodyVisibleAreaTop = (
  rowHeight: number,
  visibleRowRange: Rng,
  topHeight: number
) =>
  useMemo(
    () => topHeight + visibleRowRange.start * rowHeight,
    [rowHeight, visibleRowRange, topHeight]
  );

const useVisibleRowRange = (
  scrollTop: number,
  clientMidHeight: number,
  rowHeight: number,
  rowCount: number
) => {
  const prevRef = useRef<Rng>(Rng.empty);
  const range = useMemo(() => {
    if (rowHeight < 1) {
      return Rng.empty;
    }
    const start = Math.floor(scrollTop / rowHeight);
    let end = Math.max(
      start,
      Math.ceil((scrollTop + clientMidHeight) / rowHeight)
    );
    if (end > rowCount) {
      end = rowCount;
    }
    return new Rng(start, end);
  }, [scrollTop, clientMidHeight, rowHeight, rowCount]);
  if (!Rng.equals(prevRef.current, range)) {
    prevRef.current = range;
  }
  return prevRef.current;
};

const useBodyVisibleColumns = (
  midColumns: TableColumnModel[],
  bodyVisibleColumnRange: Rng
): TableColumnModel[] =>
  useMemo(
    () =>
      midColumns.slice(
        bodyVisibleColumnRange.start,
        bodyVisibleColumnRange.end
      ),
    [midColumns, bodyVisibleColumnRange]
  );

const useLeftScrolledOutWidth = (
  midColumns: TableColumnModel[],
  bodyVisibleColumnRange: Rng
) =>
  useMemo(() => {
    let w = 0;
    for (let i = 0; i < bodyVisibleColumnRange.start; ++i) {
      w += midColumns[i].data.width;
    }
    return w;
  }, [midColumns, bodyVisibleColumnRange]);

export interface TableRowModel {
  key: string;
  index: number;
  data: any;
}

export interface TableColumnModel {
  index: number;
  separator: ColumnSeparatorType;
  data: TableColumnProps;
}

const useRowModels = (
  getKey: (rowData: any) => string,
  rowData: any[],
  visibleRowRange: Rng
) =>
  useMemo(() => {
    // console.log(
    //   `building row models. rowData.length: ${
    //     rowData.length
    //   }, range: ${visibleRowRange.toString()}`
    // );
    const rows: TableRowModel[] = [];
    // for (
    //   let index = visibleRowRange.start;
    //   index < visibleRowRange.end;
    //   ++index
    // ) {
    //   console.log(`index: ${index}`);
    //   console.log(`rowData: ${JSON.stringify(rowData[index])}`);
    //   const key = getKey(rowData[index]);
    //   console.log(`key: ${key}`);
    //   rows.push({ data: rowData[index], key, index });
    // }
    visibleRowRange.forEach((index) => {
      // console.log(`index: ${index}`);
      // console.log(`rowData: ${JSON.stringify(rowData[index])}`);
      const key = getKey(rowData[index]);
      // console.log(`key: ${key}`);
      rows.push({ data: rowData[index], key, index });
    });
    return rows;
  }, [getKey, rowData, visibleRowRange]);

export const Table = (props: TableProps) => {
  const { rowData, isZebra, className, rowKeyGetter } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [scrollLeft, setScrollLeft] = useState<number>(0); // TODO
  const [scrollTop, setScrollTop] = useState<number>(0);

  const [leftColumnProps, setLeftColumnProps] = useState<TableColumnProps[]>(
    []
  );
  const [rightColumnProps, setRightColumnProps] = useState<TableColumnProps[]>(
    []
  );
  const [midColumnProps, setMidColumnProps] = useState<TableColumnProps[]>([]);

  const leftColumns: TableColumnModel[] = useMemo(
    () =>
      leftColumnProps.map((data, index) => ({
        data,
        index,
        separator: "regular",
      })),
    [leftColumnProps]
  );
  const leftColumnCount = leftColumns.length;

  const midColumns: TableColumnModel[] = useMemo(
    () =>
      midColumnProps.map((data, i) => ({
        data,
        index: i + leftColumnCount,
        separator: "regular",
      })),
    [leftColumnCount, midColumnProps]
  );
  const midColumnCount = midColumns.length;

  const rightColumns: TableColumnModel[] = useMemo(
    () =>
      rightColumnProps.map((data, i) => ({
        data,
        index: i + leftColumnCount + midColumnCount,
        separator: "regular",
      })),
    [leftColumnCount, midColumnCount, rightColumnProps]
  );

  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const leftWidth = useSumWidth(leftColumns);
  const midWidth = useSumWidth(midColumns);
  const rightWidth = useSumWidth(rightColumns);
  const totalWidth = useSum([leftWidth, midWidth, rightWidth]);
  const [rowHeight, setRowHeight] = useState<number>(0);
  const headRowCount = 1; // TODO api for column groups
  const rowCount = rowData.length;
  const botRowCount = 0; // TODO
  const topHeight = useProd([rowHeight, headRowCount]);
  const midHeight = useProd([rowHeight, rowCount]);
  const botHeight = useProd([botRowCount, rowHeight]);
  const totalHeight = useSum([topHeight, midHeight, botHeight]);
  const clientMidWidth = useClientMidWidth(clientWidth, leftWidth, rightWidth);

  const bodyVisibleColumnRange = useBodyVisibleColumnRange(
    midColumns,
    scrollLeft,
    clientMidWidth
  );
  const leftScrolledOutWidth = useLeftScrolledOutWidth(
    midColumns,
    bodyVisibleColumnRange
  );
  // console.log(
  //   `leftWidth: ${leftWidth}; leftScrolledOutWidth: ${leftScrolledOutWidth}`
  // );
  const bodyVisibleAreaLeft = useSum([leftWidth, leftScrolledOutWidth]);
  const clientMidHeight = useClientMidHeight(
    clientHeight,
    topHeight,
    botHeight
  );
  const visibleRowRange = useVisibleRowRange(
    scrollTop,
    clientMidHeight,
    rowHeight,
    rowCount
  );
  const bodyVisibleAreaTop = useBodyVisibleAreaTop(
    rowHeight,
    visibleRowRange,
    topHeight
  );
  // TODO check if this is necessary
  const bodyVisibleColumns = useBodyVisibleColumns(
    midColumns,
    bodyVisibleColumnRange
  );
  const bodyVisibleColumnWidth = useSumRangeWidth(
    midColumns,
    bodyVisibleColumnRange
  );
  const headVisibleColumns = bodyVisibleColumns;
  const headVisibleColumnWidth = bodyVisibleColumnWidth; // TODO implement groups
  const headVisibleAreaLeft = bodyVisibleAreaLeft; // TODO

  const style = useMemo(
    () =>
      ({
        ["--uitkGrid-totalWidth"]: `${totalWidth}px`,
        ["--uitkGrid-totalHeight"]: `${totalHeight}px`,
        ["--uitkGrid-topHeight"]: `${topHeight}px`,
        ["--uitkGrid-leftWidth"]: `${leftWidth}px`,
        ["--uitkGrid-rightWidth"]: `${rightWidth}px`,
        ["--uitkGrid-bodyVisibleColumnWidth"]: `${bodyVisibleColumnWidth}px`,
        ["--uitkGrid-bodyVisibleAreaTop"]: `${bodyVisibleAreaTop}px`,
        ["--uitkGrid-bodyVisibleAreaLeft"]: `${bodyVisibleAreaLeft}px`,
        ["--uitkGrid-bottomHeight"]: `${botHeight}px`,
        ["--uitkGrid-headerVisibleColumnWidth"]: `${headVisibleColumnWidth}px`,
        ["--uitkGrid-headerVisibleAreaLeft"]: `${headVisibleAreaLeft}px`,
      } as any),
    [
      totalHeight,
      totalWidth,
      topHeight,
      leftWidth,
      rightWidth,
      botHeight,
      bodyVisibleColumnWidth,
      bodyVisibleAreaLeft,
      bodyVisibleAreaTop,
      headVisibleColumnWidth,
      headVisibleAreaLeft,
    ]
  );

  useEffect(() => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      if (rect.height !== clientHeight) {
        setClientHeight(rect.height);
      }
      if (rect.width !== clientWidth) {
        setClientWidth(rect.width);
      }
    }
  });

  const onWheel: WheelEventHandler<HTMLTableElement> = useCallback(
    ({ deltaX, deltaY }) => {
      const s = scrollableRef.current;
      if (s) {
        s.scrollLeft += deltaX;
        s.scrollTop += deltaY;
      }
    },
    [scrollableRef.current]
  );

  const columns = useMemo(() => {
    return [...leftColumns, ...midColumns, ...rightColumns];
  }, [leftColumns, midColumns, rightColumns]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<Set<string>>(
    new Set()
  );

  const onColumnAdded = useCallback((columnProps: TableColumnProps) => {
    console.log(`Column added: ${columnProps.name}`);
    const { pinned = null } = columnProps;
    const adder = (old: TableColumnProps[]) => [...old, columnProps];
    if (pinned === "left") {
      setLeftColumnProps(adder);
    } else if (pinned === "right") {
      setRightColumnProps(adder);
    } else {
      setMidColumnProps(adder);
    }
  }, []);

  const onColumnRemoved = useCallback((columnProps: TableColumnProps) => {
    console.log(`Column removed: ${columnProps.name}`);
    const { pinned } = columnProps;
    const remover = (old: TableColumnProps[]) =>
      old.filter((x) => x.name !== columnProps.name);
    if (pinned === "left") {
      setLeftColumnProps(remover);
    } else if (pinned === "right") {
      setRightColumnProps(remover);
    } else {
      setMidColumnProps(remover);
    }
  }, []);

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      // TODO
    },
    []
  );

  const rows = useRowModels(rowKeyGetter, rowData, visibleRowRange);

  const contextValue: TableContext = useMemo(
    () => ({
      onColumnAdded,
      onColumnRemoved,
    }),
    [onColumnAdded, onColumnRemoved]
  );

  const isLeftRaised = scrollLeft > 0;
  const isRightRaised = scrollLeft + clientMidWidth < midWidth;

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
      <div
        className={cx(withBaseName(), {
          [withBaseName("zebra")]: isZebra,
          className,
        })}
        style={style}
        ref={rootRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        data-name={"grid-root"}
      >
        <CellMeasure setRowHeight={setRowHeight} />
        <Scrollable
          scrollLeft={scrollLeft}
          scrollTop={scrollTop}
          setScrollLeft={setScrollLeft}
          setScrollTop={setScrollTop}
          scrollerRef={scrollableRef}
          topRef={topRef}
          rightRef={rightRef}
          bottomRef={bottomRef}
          leftRef={leftRef}
          middleRef={middleRef}
        />
        <MiddlePart
          middleRef={middleRef}
          onWheel={onWheel}
          columns={bodyVisibleColumns}
          rows={rows}
        />
        <TopPart
          columns={headVisibleColumns}
          topRef={topRef}
          onWheel={onWheel}
        />
        <LeftPart
          leftRef={leftRef}
          onWheel={onWheel}
          columns={leftColumns}
          rows={rows}
          isRaised={isLeftRaised}
        />
        <RightPart
          rightRef={rightRef}
          onWheel={onWheel}
          columns={rightColumns}
          rows={rows}
          isRaised={isRightRaised}
        />
        <TopLeftPart onWheel={onWheel} columns={leftColumns} />
      </div>
    </TableContext.Provider>
  );
};
