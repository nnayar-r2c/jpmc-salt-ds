import {
  Children,
  isValidElement,
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
import { Rng } from "./Rng";
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
import {
  useBodyVisibleAreaTop,
  useBodyVisibleColumnRange,
  useBodyVisibleColumns,
  useClientMidHeight,
  useClientMidWidth,
  useLeftScrolledOutWidth,
  useProd,
  useRowIdxByKey,
  useSelectRows,
  useSum,
  useSumRangeWidth,
  useSumWidth,
  useVisibleRowRange,
} from "./tableHooks";
import { ColumnGroupProps } from "./ColumnGroup";

const withBaseName = makePrefixer("uitkGrid");

export type ColumnSeparatorType = "regular" | "none" | "groupEdge";
export type ColumnGroupRowSeparatorType = "first" | "regular" | "last";
export type ColumnGroupColumnSeparatorType = "regular" | "none";

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

export interface TableColumnGroupModel {
  index: number;
  data: ColumnGroupProps;
  childrenIds: string[];
  rowSeparator: ColumnGroupRowSeparatorType;
  columnSeparator: ColumnGroupColumnSeparatorType;
  colSpan: number;
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

  const [leftGrpPs, setLeftGrpPs] = useState<ColumnGroupProps[]>([]);
  const [rightGrpPs, setRightGrpPs] = useState<ColumnGroupProps[]>([]);
  const [midGrpPs, setMidGrpPs] = useState<ColumnGroupProps[]>([]);

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

  const onColumnAdded = useCallback((columnProps: TableColumnProps) => {
    const { pinned = null } = columnProps;
    console.log(
      `Column added: "${columnProps.name}"${pinned ? ` pinned ${pinned}` : ""}`
    );
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
    console.log(`Column removed: "${columnProps.name}"`);
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

  const onColumnGroupAdded = useCallback((colGroupProps: ColumnGroupProps) => {
    let childrenIds = Children.toArray(colGroupProps.children)
      .map((child) => {
        if (!isValidElement(child)) {
          return undefined;
        }
        return child.props.id;
      })
      .filter((x) => x !== undefined);
    const { pinned = null } = colGroupProps;

    const adder = (old: ColumnGroupProps[]) => [...old, colGroupProps];
    if (pinned === "left") {
      setLeftGrpPs(adder);
    } else if (pinned === "right") {
      setRightGrpPs(adder);
    } else {
      setMidGrpPs(adder);
    }

    console.log(
      `Group added: "${colGroupProps.name}": [${childrenIds
        .map((x) => `"${x}"`)
        .join(", ")}].`
    );
  }, []);

  const onColumnGroupRemoved = useCallback(
    (colGroupProps: ColumnGroupProps) => {
      console.log(`Group removed: "${colGroupProps.name}"`);
      const { pinned } = colGroupProps;
      const remover = (old: ColumnGroupProps[]) =>
        old.filter((x) => x.name !== colGroupProps.name);
      if (pinned === "left") {
        setLeftGrpPs(remover);
      } else if (pinned === "right") {
        setRightGrpPs(remover);
      } else {
        setMidGrpPs(remover);
      }
    },
    []
  );

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
      onColumnGroupAdded,
      onColumnGroupRemoved,
    }),
    [onColumnAdded, onColumnRemoved, onColumnGroupAdded, onColumnGroupRemoved]
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
