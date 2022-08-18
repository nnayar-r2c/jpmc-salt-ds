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
import { TopRightPart } from "./TopRightPart";
import { SelectionContext } from "./SelectionContext";

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

const useRowIdxByKey = (rowKeyGetter: (x: any) => string, rowData: any[]) =>
  useMemo(
    () => new Map<string, number>(rowData.map((r, i) => [rowKeyGetter(r), i])),
    [rowData, rowKeyGetter]
  );

type SetState<T> = (v: T | ((p: T) => T)) => void;

const useSelectRows = (
  lastSelRowKey: string | undefined,
  setSelRowKeys: SetState<Set<string>>,
  setLastSelRowKey: SetState<string | undefined>,
  rowData: any[],
  rowIdxByKey: Map<string, number>,
  rowKeyGetter: (x: any) => string
) =>
  useCallback(
    (rowKey: string, shift: boolean, meta: boolean) => {
      console.log(
        `Selecting "${rowKey}"; ${shift ? "shift;" : ""}${meta ? "meta" : ""}`
      );
      const idxFrom =
        lastSelRowKey !== undefined && shift
          ? rowIdxByKey.get(lastSelRowKey)
          : undefined;
      if (idxFrom === undefined) {
        console.log(`Selecting single item "${rowKey}"`);
        if (!meta) {
          setSelRowKeys(new Set<string>([rowKey]));
          setLastSelRowKey(rowKey);
        } else {
          setSelRowKeys((p) => {
            const n = new Set<string>(p);
            if (n.has(rowKey)) {
              n.delete(rowKey);
              setLastSelRowKey(undefined);
            } else {
              n.add(rowKey);
              setLastSelRowKey(rowKey);
            }
            return n;
          });
        }
      } else {
        console.log(`Selecting range from "${lastSelRowKey}" to "${rowKey}"`);
        setSelRowKeys((p) => {
          const s = meta ? new Set<string>(p) : new Set<string>();
          const idxs = [rowIdxByKey.get(rowKey)!, idxFrom];
          idxs.sort((a, b) => a - b);
          console.log(`Selecting indices: ${idxs}`);
          const rowKeys = [];
          for (let i = idxs[0]; i <= idxs[1]; ++i) {
            rowKeys.push(rowKeyGetter(rowData[i]));
          }
          if (p.has(rowKey)) {
            rowKeys.forEach((k) => s.delete(k));
          } else {
            rowKeys.forEach((k) => s.add(k));
          }
          return s;
        });
        setLastSelRowKey(rowKey);
      }
    },
    [
      lastSelRowKey,
      setSelRowKeys,
      setLastSelRowKey,
      rowData,
      rowIdxByKey,
      rowKeyGetter,
    ]
  );

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
    const rows: TableRowModel[] = [];
    visibleRowRange.forEach((index) => {
      const key = getKey(rowData[index]);
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

  const [leftColPs, setLeftColPs] = useState<TableColumnProps[]>([]);
  const [rightColPs, setRightColPs] = useState<TableColumnProps[]>([]);
  const [midColPs, setMidColPs] = useState<TableColumnProps[]>([]);
  const [hoverRowKey, setHoverRowKey] = useState<string | undefined>(undefined);

  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [selRowKeys, setSelRowKeys] = useState<Set<string>>(new Set());
  const [lastSelRowKey, setLastSelRowKey] = useState<string | undefined>(
    undefined
  );
  const [rowHeight, setRowHeight] = useState<number>(0);
  const rowIdxByKey = useRowIdxByKey(rowKeyGetter, rowData);

  const leftCols: TableColumnModel[] = useMemo(
    () =>
      leftColPs.map((data, index) => ({
        data,
        index,
        separator: "regular",
      })),
    [leftColPs]
  );
  const leftColCount = leftCols.length;

  const midCols: TableColumnModel[] = useMemo(
    () =>
      midColPs.map((data, i) => ({
        data,
        index: i + leftColCount,
        separator: "regular",
      })),
    [leftColCount, midColPs]
  );
  const midColCount = midCols.length;

  const rightCols: TableColumnModel[] = useMemo(
    () =>
      rightColPs.map((data, i) => ({
        data,
        index: i + leftColCount + midColCount,
        separator: "regular",
      })),
    [leftColCount, midColCount, rightColPs]
  );

  const leftWh = useSumWidth(leftCols);
  const midWidth = useSumWidth(midCols);
  const rightWh = useSumWidth(rightCols);
  const totalWh = useSum([leftWh, midWidth, rightWh]);

  const headRowCount = 1; // TODO api for column groups
  const rowCount = rowData.length;
  const botRowCount = 0; // TODO
  const topHt = useProd([rowHeight, headRowCount]);
  const midHeight = useProd([rowHeight, rowCount]);
  const botHt = useProd([botRowCount, rowHeight]);
  const totalHt = useSum([topHt, midHeight, botHt]);
  const clientMidWidth = useClientMidWidth(clientWidth, leftWh, rightWh);

  const bodyVisColRng = useBodyVisibleColumnRange(
    midCols,
    scrollLeft,
    clientMidWidth
  );
  const leftScrolledOutWidth = useLeftScrolledOutWidth(midCols, bodyVisColRng);
  const bodyVisAreaLft = useSum([leftWh, leftScrolledOutWidth]);
  const clientMidHt = useClientMidHeight(clientHeight, topHt, botHt);
  const visRowRng = useVisibleRowRange(
    scrollTop,
    clientMidHt,
    rowHeight,
    rowCount
  );
  const bodyVisAreaTop = useBodyVisibleAreaTop(rowHeight, visRowRng, topHt);
  // TODO check if this is necessary
  const bodyVisibleColumns = useBodyVisibleColumns(midCols, bodyVisColRng);
  const bodyVisColWh = useSumRangeWidth(midCols, bodyVisColRng);
  const headVisibleColumns = bodyVisibleColumns;
  const headVisColWh = bodyVisColWh; // TODO implement groups
  const headVisAreaLft = bodyVisAreaLft; // TODO

  const style = useMemo(
    () =>
      ({
        ["--uitkGrid-totalWidth"]: `${totalWh}px`,
        ["--uitkGrid-totalHeight"]: `${totalHt}px`,
        ["--uitkGrid-topHeight"]: `${topHt}px`,
        ["--uitkGrid-leftWidth"]: `${leftWh}px`,
        ["--uitkGrid-rightWidth"]: `${rightWh}px`,
        ["--uitkGrid-bodyVisibleColumnWidth"]: `${bodyVisColWh}px`,
        ["--uitkGrid-bodyVisibleAreaTop"]: `${bodyVisAreaTop}px`,
        ["--uitkGrid-bodyVisibleAreaLeft"]: `${bodyVisAreaLft}px`,
        ["--uitkGrid-bottomHeight"]: `${botHt}px`,
        ["--uitkGrid-headerVisibleColumnWidth"]: `${headVisColWh}px`,
        ["--uitkGrid-headerVisibleAreaLeft"]: `${headVisAreaLft}px`,
      } as any),
    [
      totalHt,
      totalWh,
      topHt,
      leftWh,
      rightWh,
      botHt,
      bodyVisColWh,
      bodyVisAreaLft,
      bodyVisAreaTop,
      headVisColWh,
      headVisAreaLft,
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

  // const columns = useMemo(() => {
  //   return [...leftCols, ...midCols, ...rightCols];
  // }, [leftCols, midCols, rightCols]);

  const onColumnAdded = useCallback((columnProps: TableColumnProps) => {
    console.log(`Column added: ${columnProps.name}`);
    const { pinned = null } = columnProps;
    const adder = (old: TableColumnProps[]) => [...old, columnProps];
    if (pinned === "left") {
      setLeftColPs(adder);
    } else if (pinned === "right") {
      setRightColPs(adder);
    } else {
      setMidColPs(adder);
    }
  }, []);

  const onColumnRemoved = useCallback((columnProps: TableColumnProps) => {
    console.log(`Column removed: ${columnProps.name}`);
    const { pinned } = columnProps;
    const remover = (old: TableColumnProps[]) =>
      old.filter((x) => x.name !== columnProps.name);
    if (pinned === "left") {
      setLeftColPs(remover);
    } else if (pinned === "right") {
      setRightColPs(remover);
    } else {
      setMidColPs(remover);
    }
  }, []);

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      // TODO
    },
    []
  );

  const rows = useRowModels(rowKeyGetter, rowData, visRowRng);

  const contextValue: TableContext = useMemo(
    () => ({
      onColumnAdded,
      onColumnRemoved,
    }),
    [onColumnAdded, onColumnRemoved]
  );

  const isLeftRaised = scrollLeft > 0;
  const isRightRaised = scrollLeft + clientMidWidth < midWidth;

  const selectRows = useSelectRows(
    lastSelRowKey,
    setSelRowKeys,
    setLastSelRowKey,
    rowData,
    rowIdxByKey,
    rowKeyGetter
  );

  const selCtValue: SelectionContext = useMemo(
    () => ({
      selRowKeys,
      selectRows,
    }),
    [selRowKeys, selectRows]
  );

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
      <SelectionContext.Provider value={selCtValue}>
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
            hoverOverRowKey={hoverRowKey}
            setHoverOverRowKey={setHoverRowKey}
          />
          <TopPart
            columns={headVisibleColumns}
            topRef={topRef}
            onWheel={onWheel}
          />
          <LeftPart
            leftRef={leftRef}
            onWheel={onWheel}
            columns={leftCols}
            rows={rows}
            isRaised={isLeftRaised}
            hoverOverRowKey={hoverRowKey}
            setHoverOverRowKey={setHoverRowKey}
          />
          <RightPart
            rightRef={rightRef}
            onWheel={onWheel}
            columns={rightCols}
            rows={rows}
            isRaised={isRightRaised}
            hoverOverRowKey={hoverRowKey}
            setHoverOverRowKey={setHoverRowKey}
          />
          <TopLeftPart onWheel={onWheel} columns={leftCols} />
          <TopRightPart onWheel={onWheel} columns={rightCols} />
        </div>
      </SelectionContext.Provider>
    </TableContext.Provider>
  );
};
