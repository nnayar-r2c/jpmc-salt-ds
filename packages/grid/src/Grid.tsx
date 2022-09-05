import React, {
  CSSProperties,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
  WheelEventHandler,
} from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { GridColumnInfo } from "./GridColumn";
import { GridContext } from "./GridContext";
import cx from "classnames";
import {
  CellMeasure,
  clamp,
  LeftPart,
  MiddlePart,
  PAGE_SIZE,
  RightPart,
  Scrollable,
  TopLeftPart,
  TopPart,
  TopRightPart,
  useBodyVisibleAreaTop,
  useBodyVisibleColumnRange,
  useClientMidHeight,
  useClientMidWidth,
  useColumnMove,
  useColumnRange,
  useColumnRegistry,
  useColumnResize,
  useHeadVisibleColumnRange,
  useLeftScrolledOutWidth,
  useProd,
  useRowIdxByKey,
  useRowModels,
  useRowSelection,
  useScrollToCell,
  useSum,
  useSumRangeWidth,
  useSumWidth,
  useVisibleColumnGroupRange,
  useVisibleRowRange,
} from "./internal";
import "./Grid.css";
import { SelectionContext } from "./SelectionContext";
import { SizingContext } from "./SizingContext";
import { LayoutContext } from "./LayoutContext";
import { EditorContext } from "./EditorContext"; // TODO remove
import { CursorContext } from "./CursorContext";
import { ColumnGroupProps } from "./ColumnGroup";
import { ColumnDragContext } from "./ColumnDragContext";
import { ColumnGhost } from "./internal/ColumnGhost";
import { ColumnDropTarget } from "./internal/ColumnDropTarget";

const withBaseName = makePrefixer("uitkGrid");

export type ColumnSeparatorType = "regular" | "none" | "groupEdge";
export type ColumnGroupRowSeparatorType = "first" | "regular" | "last";
export type ColumnGroupColumnSeparatorType = "regular" | "none";
export type GridRowSelectionMode = "single" | "multi" | "none";
export type GridCellSelectionMode = "range" | "none";

export type RowKeyGetter<T> = (row: T, index: number) => string;

export interface GridProps<T = any> {
  children: ReactNode; //ReactElement<GridColumnProps<T> | ColumnGroupProps>[];
  zebra?: boolean;
  hideHeader?: boolean;
  columnSeparators?: boolean;
  rowData: T[];
  rowKeyGetter?: RowKeyGetter<T>;
  defaultSelectedRowKeys?: Set<string>;
  className?: string;
  style?: CSSProperties;
  variant?: "primary" | "secondary";
  rowSelectionMode?: GridRowSelectionMode;
  onRowSelected?: (selectedRows: T[]) => void;
  columnDnD?: boolean;
  onColumnMoved?: (fromIndex: number, toIndex: number) => void;
  cellSelectionMode?: GridCellSelectionMode;
}

export interface GridRowModel<T> {
  key: string;
  index: number;
  data: T;
}

export interface GridColumnModel<T> {
  index: number;
  separator: ColumnSeparatorType;

  info: GridColumnInfo<T>;
}

export interface GridColumnGroupModel {
  index: number;
  data: ColumnGroupProps;
  childrenIds: string[];
  rowSeparator: ColumnGroupRowSeparatorType;
  columnSeparator: ColumnGroupColumnSeparatorType;
  colSpan: number;
}

function defaultRowKeyGetter<T>(row: T, index: number): string {
  return `${index}`;
}

export const Grid = function <T>(props: GridProps<T>) {
  const {
    rowData,
    zebra,
    hideHeader,
    columnSeparators,
    className,
    style,
    rowKeyGetter = defaultRowKeyGetter,
    children,
    defaultSelectedRowKeys,
    variant = "primary",
    rowSelectionMode = "multi",
    onRowSelected,
    columnDnD,
    onColumnMoved,
    cellSelectionMode = "none",
  } = props;

  // if (rowData.length > 0) {
  //   console.log(`Row 0 price: ${rowData[0].price}`);
  // }

  const rootRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [scrollSource, setScrollSource] = useState<"user" | "table">("user");
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const [hoverRowKey, setHoverRowKey] = useState<string | undefined>(undefined);

  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollBarHeight, setScrollBarHeight] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  const [rowHeight, setRowHeight] = useState<number>(0);

  const [cursorRowKey, setCursorRowKey] = useState<string | undefined>(
    undefined
  );
  const [cursorColKey, setCursorColKey] = useState<string | undefined>(
    undefined
  );

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editorText, setEditorText] = useState<string>("");

  const resizeClient = useCallback(
    (clW: number, clH: number, sbW: number, sbH: number) => {
      setClientHeight(clH);
      setClientWidth(clW);
      setScrollBarHeight(sbH);
      setScrollBarWidth(sbW);
    },
    [setClientHeight, setClientWidth, setScrollBarHeight, setScrollBarWidth]
  );
  const rowIdxByKey = useRowIdxByKey(rowKeyGetter, rowData);

  const {
    leftCols,
    midCols,
    rightCols,
    leftGroups,
    midGroups,
    rightGroups,
    contextValue,
  } = useColumnRegistry(children);

  const midColsById = useMemo(
    () =>
      new Map<string, GridColumnModel<T>>(
        midCols.map((c) => [c.info.props.id, c] as [string, GridColumnModel<T>])
      ),
    [midCols]
  );

  const leftWidth = useSumWidth(leftCols);
  const midWidth = useSumWidth(midCols);
  const rightWidth = useSumWidth(rightCols);
  const totalWidth = useSum([leftWidth, midWidth, rightWidth]);

  const hasColumnGroups =
    leftGroups.length > 0 || midGroups.length > 0 || rightGroups.length > 0;

  const headRowCount = hideHeader ? 0 : hasColumnGroups ? 2 : 1; // TODO multiple group levels
  const rowCount = rowData.length;
  // console.log(`RowCount: ${rowCount}`);
  const botRowCount = 0; // TODO
  const topHeight = useProd([rowHeight, headRowCount]);
  const midHeight = useProd([rowHeight, rowCount]);
  const botHeight = useProd([botRowCount, rowHeight]);
  const totalHeight = useSum([topHeight, midHeight, botHeight]);
  const clientMidWidth = useClientMidWidth(clientWidth, leftWidth, rightWidth);
  const midGap = Math.max(0, Math.floor(clientMidWidth - midWidth));

  const bodyVisColRng = useBodyVisibleColumnRange(
    midCols,
    scrollLeft,
    clientMidWidth
  );

  const midGrpByColId = useMemo(() => {
    const m = new Map<string, GridColumnGroupModel>();
    for (let g of midGroups) {
      for (let c of g.childrenIds) {
        m.set(c, g);
      }
    }
    return m;
  }, [midGroups]);

  const visColGrpRng = useVisibleColumnGroupRange(
    bodyVisColRng,
    midCols,
    midGrpByColId,
    leftGroups.length
  );

  const visColGrps = useMemo(() => {
    return midGroups.slice(visColGrpRng.start, visColGrpRng.end);
  }, [visColGrpRng, midGroups]);

  const headVisColRng = useHeadVisibleColumnRange(
    bodyVisColRng,
    visColGrps,
    midColsById,
    leftCols.length
  );

  const bodyScrOutColWh = useLeftScrolledOutWidth(midCols, bodyVisColRng);
  const headScrOutColWh = useLeftScrolledOutWidth(midCols, headVisColRng);

  const bodyVisAreaLeft = useSum([leftWidth, bodyScrOutColWh]);
  const headVisAreaLeft = useSum([leftWidth, headScrOutColWh]);
  const clientMidHeight = useClientMidHeight(
    clientHeight,
    topHeight,
    botHeight
  );
  const visRowRng = useVisibleRowRange(
    scrollTop,
    clientMidHeight,
    rowHeight,
    rowCount
  );

  const bodyVisAreaTop = useBodyVisibleAreaTop(rowHeight, visRowRng, topHeight);

  const bodyVisibleColumns = useColumnRange(midCols, bodyVisColRng);
  const headVisibleColumns = useColumnRange(midCols, headVisColRng);
  const bodyVisColWh = useSumRangeWidth(midCols, bodyVisColRng);

  const headVisColWh = bodyVisColWh; // TODO implement groups

  const rootStyle = useMemo(
    () =>
      ({
        ...style,
        ["--uitkGrid-totalWidth"]: `${totalWidth}px`,
        ["--uitkGrid-totalHeight"]: `${totalHeight}px`,
        ["--uitkGrid-topHeight"]: `${topHeight}px`,
        ["--uitkGrid-leftWidth"]: `${leftWidth}px`,
        ["--uitkGrid-rightWidth"]: `${rightWidth}px`,
        ["--uitkGrid-bodyVisibleColumnWidth"]: `${bodyVisColWh}px`,
        ["--uitkGrid-bodyVisibleAreaTop"]: `${bodyVisAreaTop}px`,
        ["--uitkGrid-bodyVisibleAreaLeft"]: `${bodyVisAreaLeft}px`,
        ["--uitkGrid-bottomHeight"]: `${botHeight}px`,
        ["--uitkGrid-headerVisibleColumnWidth"]: `${headVisColWh}px`,
        ["--uitkGrid-headerVisibleAreaLeft"]: `${headVisAreaLeft}px`,
        ["--uitkGrid-scrollBarHeight"]: `${scrollBarHeight}px`,
        ["--uitkGrid-scrollBarWidth"]: `${scrollBarWidth}px`,
      } as any),
    [
      style,
      totalHeight,
      totalWidth,
      topHeight,
      leftWidth,
      rightWidth,
      botHeight,
      bodyVisColWh,
      bodyVisAreaLeft,
      bodyVisAreaTop,
      headVisColWh,
      headVisAreaLeft,
      scrollBarHeight,
      scrollBarWidth,
    ]
  );

  const onWheel: WheelEventHandler<HTMLTableElement> = useCallback(
    (event) => {
      let { deltaX, deltaY, shiftKey } = event;
      if (deltaX === 0 && shiftKey) {
        deltaX = deltaY;
        deltaY = 0;
      }
      const s = scrollableRef.current;
      if (s) {
        s.scrollLeft += deltaX;
        s.scrollTop += deltaY;
      }
    },
    [scrollableRef.current]
  );

  const cols = useMemo(
    () => [...leftCols, ...midCols, ...rightCols],
    [leftCols, midCols, rightCols]
  );

  const colIdxByKey = useMemo(
    () =>
      new Map<string, number>(cols.map((c, i) => [c.info.props.id, c.index])),
    [cols]
  );

  const cursorColIdx =
    cursorColKey === undefined ? 0 : colIdxByKey.get(cursorColKey) || 0;
  const cursorRowIdx =
    cursorRowKey === undefined ? 0 : rowIdxByKey.get(cursorRowKey) || 0;

  const scroll = useCallback(
    (left?: number, top?: number, source?: "user" | "table") => {
      setScrollSource(source || "user");
      if (left !== undefined) {
        setScrollLeft(left);
      }
      if (top !== undefined) {
        setScrollTop(top);
      }
    },
    [setScrollLeft, setScrollTop, setScrollSource]
  );

  const scrollToCell = useScrollToCell(
    visRowRng,
    rowHeight,
    clientMidHeight,
    midCols,
    bodyVisColRng,
    clientMidWidth,
    scroll
  );

  const startEditMode = (text?: string) => {
    if (editMode) {
      return;
    }
    const r = rowData[cursorRowIdx];
    const c = cols[cursorColIdx];
    if (c.info.props.editable) {
      const v = c.info.props.getValue!(r);
      setEditorText(text === undefined ? v : text);
      setEditMode(true);
    }
  };

  const endEditMode = () => {
    if (!editMode) {
      return;
    }
    const c = cols[cursorColIdx];
    const handler = c.info.props.onChange;
    const rowKey = cursorRowKey;
    if (rowKey === undefined) {
      console.error(`endEditMode: cursorRowKey is undefined in edit mode`);
      return;
    }
    if (!handler) {
      console.warn(
        `onChange is not specified for editable column "${c.info.props.id}".`
      );
      return;
    }
    handler(rowKey, cursorRowIdx, editorText);
    setEditMode(false);
    if (rootRef.current) {
      rootRef.current.focus();
    }
  };

  const cancelEditMode = () => {
    if (!editMode) {
      return;
    }
    setEditMode(false);
    if (rootRef.current) {
      rootRef.current.focus();
    }
  };

  const moveCursor = useCallback(
    (rowIdx: number, colIdx: number) => {
      endEditMode();
      if (rowData.length < 1 || cols.length < 1) {
        return;
      }
      rowIdx = clamp(rowIdx, 0, rowData.length - 1);
      colIdx = clamp(colIdx, 0, cols.length - 1);
      setCursorRowKey(rowKeyGetter(rowData[rowIdx], rowIdx));
      setCursorColKey(cols[colIdx].info.props.id);
      scrollToCell(rowIdx, colIdx);
      rootRef.current?.focus();
    },
    [
      setCursorRowKey,
      setCursorColKey,
      rowData,
      rowKeyGetter,
      cols,
      rootRef.current,
      scrollToCell,
      endEditMode,
    ]
  );

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      // console.log(`onKeyDown. key: ${event.key}`);
      switch (event.key) {
        case "ArrowLeft":
          moveCursor(cursorRowIdx, cursorColIdx - 1);
          break;
        case "ArrowRight":
          moveCursor(cursorRowIdx, cursorColIdx + 1);
          break;
        case "ArrowUp":
          moveCursor(cursorRowIdx - 1, cursorColIdx);
          break;
        case "ArrowDown":
          moveCursor(cursorRowIdx + 1, cursorColIdx);
          break;
        case "PageUp":
          moveCursor(cursorRowIdx - PAGE_SIZE, cursorColIdx);
          break;
        case "PageDown":
          moveCursor(cursorRowIdx + PAGE_SIZE, cursorColIdx);
          break;
        case "Home":
          moveCursor(0, cursorColIdx);
          break;
        case "End":
          moveCursor(rowData.length - 1, cursorColIdx);
          break;
        case "F2":
          startEditMode();
          break;
        case "Tab":
          if (!event.ctrlKey && !event.metaKey && !event.altKey) {
            if (!event.shiftKey) {
              moveCursor(cursorRowIdx, cursorColIdx + 1);
            } else {
              moveCursor(cursorRowIdx, cursorColIdx - 1);
            }
            event.preventDefault();
            event.stopPropagation();
          }
          break;
        case "Enter":
          if (
            !event.ctrlKey &&
            !event.metaKey &&
            !event.altKey &&
            !event.shiftKey
          ) {
            moveCursor(cursorRowIdx + 1, cursorColIdx);
            event.preventDefault();
            event.stopPropagation();
          }
          break;
        default:
          if (
            !editMode &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.altKey &&
            /^[\w\d ]$/.test(event.key)
          ) {
            startEditMode("");
          }
      }
    },
    [cursorRowIdx, cursorColIdx, moveCursor, startEditMode]
  );

  const rows = useRowModels(rowKeyGetter, rowData, visRowRng);

  const isLeftRaised = scrollLeft > 0;
  const isRightRaised = scrollLeft + clientMidWidth < midWidth;

  const resizeColumn = useCallback(
    (colIdx: number, width: number) => {
      const col = cols[colIdx];
      col.info.onWidthChanged(width);
    },
    [cols]
  );

  const onResizeHandleMouseDown = useColumnResize(resizeColumn);

  const sizingContext: SizingContext = useMemo(
    () => ({
      resizeColumn,
      rowHeight,
      onResizeHandleMouseDown,
    }),
    [resizeColumn, rowHeight, onResizeHandleMouseDown]
  );

  const layoutContext: LayoutContext = useMemo(
    () => ({
      totalHeight,
      totalWidth,
      clientWidth,
      clientHeight,
    }),
    [totalHeight, totalWidth]
  );

  const editorContext: EditorContext = useMemo(
    () => ({
      editMode,
      editorText,
      setEditorText,
      startEditMode,
      endEditMode,
      cancelEditMode,
    }),
    [
      editMode,
      editorText,
      setEditorText,
      startEditMode,
      endEditMode,
      cancelEditMode,
    ]
  );

  const selectionContext = useRowSelection(
    rowKeyGetter,
    rowData,
    rowIdxByKey,
    defaultSelectedRowKeys,
    rowSelectionMode,
    onRowSelected
  );

  const cursorContext: CursorContext = useMemo(
    () => ({
      cursorRowKey,
      cursorColKey,
      moveCursor,
    }),
    [cursorRowKey, cursorColKey, moveCursor]
  );

  const onColumnMove = (fromIndex: number, toIndex: number) => {
    console.log(`Column moved from ${fromIndex} to ${toIndex}`);
    if (onColumnMoved && fromIndex !== toIndex) {
      onColumnMoved(fromIndex, toIndex);
    }
  };

  const { dragState, onColumnMoveHandleMouseDown, activeTarget } =
    useColumnMove(
      columnDnD,
      rootRef,
      leftCols,
      midCols,
      rightCols,
      scrollLeft,
      clientMidWidth,
      onColumnMove
    );

  const columnDragContext: ColumnDragContext = useMemo(
    () => ({
      columnDnD,
      onColumnMoveHandleMouseDown,
    }),
    [columnDnD, onColumnMoveHandleMouseDown]
  );

  // console.log(
  //   cols.map((c) => `"${c.info.props.name}": ${c.info.width}`).join("\n")
  // );

  return (
    <GridContext.Provider value={contextValue}>
      <LayoutContext.Provider value={layoutContext}>
        <SelectionContext.Provider value={selectionContext}>
          <ColumnDragContext.Provider value={columnDragContext}>
            <CursorContext.Provider value={cursorContext}>
              <SizingContext.Provider value={sizingContext}>
                <EditorContext.Provider value={editorContext}>
                  {props.children}
                  <div
                    className={cx(
                      withBaseName(),
                      {
                        [withBaseName("zebra")]: zebra,
                        [withBaseName("columnSeparators")]: columnSeparators,
                        [withBaseName("primaryBackground")]:
                          variant === "primary",
                        [withBaseName("secondaryBackground")]:
                          variant === "secondary",
                      },
                      className
                    )}
                    style={rootStyle}
                    ref={rootRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    data-name={"grid-root"}
                  >
                    <CellMeasure setRowHeight={setRowHeight} />
                    <Scrollable
                      resizeClient={resizeClient}
                      scrollLeft={scrollLeft}
                      scrollTop={scrollTop}
                      scrollSource={scrollSource}
                      scroll={scroll}
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
                      midGap={midGap}
                      zebra={zebra}
                    />
                    {!hideHeader && (
                      <TopPart
                        columns={headVisibleColumns}
                        columnGroups={visColGrps}
                        topRef={topRef}
                        onWheel={onWheel}
                        midGap={midGap}
                      />
                    )}
                    <LeftPart
                      leftRef={leftRef}
                      onWheel={onWheel}
                      columns={leftCols}
                      rows={rows}
                      isRaised={isLeftRaised}
                      hoverOverRowKey={hoverRowKey}
                      setHoverOverRowKey={setHoverRowKey}
                      zebra={zebra}
                    />
                    <RightPart
                      rightRef={rightRef}
                      onWheel={onWheel}
                      columns={rightCols}
                      rows={rows}
                      isRaised={isRightRaised}
                      hoverOverRowKey={hoverRowKey}
                      setHoverOverRowKey={setHoverRowKey}
                      zebra={zebra}
                    />
                    {!hideHeader && (
                      <TopLeftPart
                        onWheel={onWheel}
                        columns={leftCols}
                        columnGroups={leftGroups}
                        isRaised={isLeftRaised}
                      />
                    )}
                    {!hideHeader && (
                      <TopRightPart
                        onWheel={onWheel}
                        columns={rightCols}
                        columnGroups={rightGroups}
                        isRaised={isRightRaised}
                      />
                    )}
                    <ColumnGhost
                      columns={cols}
                      rows={rows}
                      dragState={dragState}
                    />
                    <ColumnDropTarget x={activeTarget?.x} />
                  </div>
                </EditorContext.Provider>
              </SizingContext.Provider>
            </CursorContext.Provider>
          </ColumnDragContext.Provider>
        </SelectionContext.Provider>
      </LayoutContext.Provider>
    </GridContext.Provider>
  );
};
