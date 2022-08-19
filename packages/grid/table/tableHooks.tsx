import { Children, isValidElement, useCallback, useMemo, useRef } from "react";
import {
  Size,
  TableColumnGroupModel,
  TableColumnModel,
  TableRowModel,
} from "./Table";
import { ColumnGroupProps } from "./ColumnGroup";
import { Rng } from "./Rng";
import { TableColumnProps } from "./TableColumn";

const sizeEquals = (a: Size, b: Size) => {
  return a.height === b.height && a.width === b.width;
};

const sumWidth = (columns: TableColumnModel[]) =>
  columns.reduce((p, x) => p + x.data.width, 0);

export const useSumWidth = (columns: TableColumnModel[]) =>
  useMemo(() => sumWidth(columns), [columns]);

export const useSum = (source: number[]) =>
  useMemo(() => source.reduce((p, x) => p + x, 0), source);

const sumRangeWidth = (columns: TableColumnModel[], range: Rng) => {
  let w = 0;
  range.forEach((i) => {
    w += columns[i].data.width;
  });
  return w;
};

export const useSumRangeWidth = (columns: TableColumnModel[], range: Rng) =>
  useMemo(() => sumRangeWidth(columns, range), [columns, range]);

export const useProd = (source: number[]) =>
  useMemo(() => source.reduce((p, x) => p * x, 1), source);

// TODO rewrite this!!!
export const useBodyVisibleColumnRange = (
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

export const useClientMidWidth = (
  clientWidth: number,
  leftWidth: number,
  rightWidth: number
) =>
  useMemo(
    () => clientWidth - leftWidth - rightWidth,
    [clientWidth, leftWidth, rightWidth]
  );

export const useClientMidHeight = (
  clientHeight: number,
  topHeight: number,
  botHeight: number
) =>
  useMemo(
    () => clientHeight - topHeight - botHeight,
    [clientHeight, topHeight, botHeight]
  );

export const useBodyVisibleAreaTop = (
  rowHeight: number,
  visibleRowRange: Rng,
  topHeight: number
) =>
  useMemo(
    () => topHeight + visibleRowRange.start * rowHeight,
    [rowHeight, visibleRowRange, topHeight]
  );

export const useVisibleRowRange = (
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

export const useColumnRange = (
  columns: TableColumnModel[],
  range: Rng
): TableColumnModel[] =>
  useMemo(() => columns.slice(range.start, range.end), [columns, range]);

export const useLeftScrolledOutWidth = (
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

export const useRowIdxByKey = (
  rowKeyGetter: (x: any) => string,
  rowData: any[]
) =>
  useMemo(
    () => new Map<string, number>(rowData.map((r, i) => [rowKeyGetter(r), i])),
    [rowData, rowKeyGetter]
  );

export type SetState<T> = (v: T | ((p: T) => T)) => void;

export const useSelectRows = (
  lastSelRowKey: string | undefined,
  setSelRowKeys: SetState<Set<string>>,
  setLastSelRowKey: SetState<string | undefined>,
  rowData: any[],
  rowIdxByKey: Map<string, number>,
  rowKeyGetter: (x: any) => string
) =>
  useCallback(
    (rowIdx: number, shift: boolean, meta: boolean) => {
      const rowKey = rowKeyGetter(rowData[rowIdx]);
      console.log(
        `Selecting row #${rowIdx} ("${rowKey}"); ${shift ? "shift;" : ""}${
          meta ? "meta" : ""
        }`
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

export const useRowModels = (
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

export const useColumnGroups = (
  grpPs: ColumnGroupProps[],
  startIdx: number
): TableColumnGroupModel[] =>
  useMemo(
    () =>
      grpPs.map((data, i) => {
        const childrenIds = Children.toArray(data.children)
          .map((child) => {
            if (!isValidElement(child)) {
              return undefined;
            }
            return child.props.id;
          })
          .filter((x) => x !== undefined) as string[];
        const colSpan = childrenIds.length;

        return {
          data,
          index: i + startIdx,
          childrenIds,
          colSpan,
          columnSeparator: "regular",
          rowSeparator: "regular",
        };
      }),
    [grpPs, startIdx]
  );
export const PAGE_SIZE = 10;
const scrollBarSize = 15; // TODO
export const useVisibleColumnGroupRange = (
  bodyVisColRng: Rng,
  midCols: TableColumnModel[],
  midGrpByColId: Map<string, TableColumnGroupModel>,
  leftGrpCount: number
): Rng => {
  const prevRef = useRef<Rng>(Rng.empty);
  const range = useMemo(() => {
    if (bodyVisColRng.length === 0) {
      return Rng.empty;
    }
    const firstVisibleCol = midCols[bodyVisColRng.start];
    const lastVisibleCol = midCols[bodyVisColRng.end - 1];
    const firstVisibleGroup = midGrpByColId.get(firstVisibleCol.data.id);
    const lastVisibleGroup = midGrpByColId.get(lastVisibleCol.data.id);
    if (!firstVisibleGroup || !lastVisibleGroup) {
      return Rng.empty;
    }
    return new Rng(
      firstVisibleGroup.index - leftGrpCount,
      lastVisibleGroup.index + 1 - leftGrpCount
    );
  }, [bodyVisColRng, midCols, midGrpByColId, leftGrpCount]);
  if (!Rng.equals(prevRef.current, range)) {
    prevRef.current = range;
  }
  return prevRef.current;
};

function last<T>(source: T[]): T {
  return source[source.length - 1];
}

export const useHeadVisibleColumnRange = (
  visColGrps: TableColumnGroupModel[],
  midColsById: Map<string, TableColumnModel>,
  leftColCount: number
) => {
  const prevRef = useRef<Rng>(Rng.empty);
  const range = useMemo(() => {
    if (visColGrps.length === 0) {
      return Rng.empty;
    }
    const firstVisibleGroup = visColGrps[0];
    const lastVisibleGroup = last(visColGrps);
    const firstColId = firstVisibleGroup.childrenIds[0];
    const lastColId = last(lastVisibleGroup.childrenIds);
    const firstColIdx = midColsById.get(firstColId)?.index;
    const lastColIdx = midColsById.get(lastColId)?.index;
    if (firstColIdx === undefined || lastColIdx === undefined) {
      return Rng.empty;
    }
    return new Rng(firstColIdx - leftColCount, lastColIdx + 1 - leftColCount);
  }, [visColGrps, midColsById, leftColCount]);
  if (!Rng.equals(range, prevRef.current)) {
    prevRef.current = range;
  }
  return prevRef.current;
};

export const useCols = (
  colPs: TableColumnProps[],
  startIdx: number,
  groups: TableColumnGroupModel[]
): TableColumnModel[] =>
  useMemo(() => {
    const edgeColIds = new Set<string>();
    groups.forEach((g) => {
      edgeColIds.add(last(g.childrenIds));
    });
    const cs: TableColumnModel[] = colPs.map((data, i) => ({
      data,
      index: i + startIdx,
      separator: edgeColIds.has(data.id) ? "groupEdge" : "regular",
    }));
    return cs;
  }, [colPs, startIdx, groups]);

export const clamp = (x: number, min: number, max: number) => {
  if (x < min) {
    return min;
  }
  if (x > max) {
    return max;
  }
  return x;
};

export const useScrollToCell = (
  visRowRng: Rng,
  setScrollTop: SetState<number>,
  rowHeight: number,
  clientMidHt: number,
  midCols: TableColumnModel[],
  bodyVisColRng: Rng,
  setScrollLeft: SetState<number>,
  clientMidWidth: number
) =>
  useCallback(
    (rowIdx: number, colIdx: number) => {
      if (rowIdx <= visRowRng.start) {
        setScrollTop(rowHeight * rowIdx);
      } else if (rowIdx >= visRowRng.end - 1) {
        setScrollTop(
          rowHeight * rowIdx - clientMidHt + rowHeight + scrollBarSize
        );
      }
      const isMidCol =
        midCols.length > 0 &&
        colIdx >= midCols[0].index &&
        colIdx <= last(midCols).index;
      if (isMidCol) {
        const midColIdx = colIdx - midCols[0].index;
        if (midColIdx <= bodyVisColRng.start) {
          let w = 0;
          for (let i = 0; i < midColIdx; ++i) {
            w += midCols[i].data.width;
          }
          setScrollLeft(w);
        } else if (midColIdx >= bodyVisColRng.end - 1) {
          let w = 0;
          for (let i = 0; i <= midColIdx; ++i) {
            w += midCols[i].data.width;
          }
          setScrollLeft(w - clientMidWidth + scrollBarSize);
        }
      }
    },
    [
      visRowRng,
      setScrollTop,
      rowHeight,
      clientMidHt,
      midCols,
      bodyVisColRng,
      setScrollLeft,
      clientMidWidth,
    ]
  );
