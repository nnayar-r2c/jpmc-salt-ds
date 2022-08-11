import "./Grid.css";
import {
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  WheelEventHandler,
} from "react";
import { CellMeasure } from "./CellMeasure";
import { Scrollable } from "./Scrollable";
import { MiddlePart } from "./MiddlePart";
import { TopPart } from "./TopPart";
import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";
import { TopLeftPart } from "./TopLeftPart";
import { TopRightPart } from "./TopRightPart";
import { useGridContext } from "../GridContext";
import { ColumnDropTarget } from "./ColumnDropTarget";
import { MovingColumn } from "./MovingColumn";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import cx from "classnames";

const withBaseName = makePrefixer("uitkGrid");

export interface GridBaseProps<T> {
  className?: string;
}

export function GridBase<T>(props: GridBaseProps<T>) {
  const { className } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { model } = useGridContext();
  const isFramed = model.useIsFramed();
  const backgroundVariant = model.useBackgroundVariant();

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      model.onKeyDown(event);
    },
    []
  );

  useEffect(() => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      model.resize({ width: rect.width, height: rect.height });
    }
  }, [rootRef.current]);

  // All parts should scroll together. This handler is passed to every part of
  // the table responsive to scrolling.
  const onWheel: WheelEventHandler<HTMLTableElement> = useCallback((event) => {
    const scrollerDiv = scrollableRef.current;
    if (!scrollerDiv) {
      return;
    }
    scrollerDiv.scrollLeft += event.deltaX;
    scrollerDiv.scrollTop += event.deltaY;
  }, []);

  const totalWidth = model.useTotalWidth();
  const totalHeight = model.useTotalHeight();
  const topHeight = model.useTopHeight();
  const leftWidth = model.useLeftWidth();
  const bodyVisibleAreaLeft = model.useBodyVisibleAreaLeft();
  const bodyVisibleAreaTop = model.useBodyVisibleAreaTop();
  const bodyVisibleColumnWidth = model.useBodyVisibleColumnWidth();
  const bottomHeight = model.useBottomHeight();
  const rightWidth = model.useRightWidth();
  const headerVisibleColumnWidth = model.useHeaderVisibleColumnWidth();
  const headerVisibleAreaLeft = model.useHeaderVisibleAreaLeft();

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
        ["--uitkGrid-bottomHeight"]: `${bottomHeight}px`,

        ["--uitkGrid-headerVisibleColumnWidth"]: `${headerVisibleColumnWidth}px`,
        ["--uitkGrid-headerVisibleAreaLeft"]: `${headerVisibleAreaLeft}px`,
      } as any),
    [
      totalHeight,
      totalWidth,
      topHeight,
      leftWidth,
      rightWidth,

      bottomHeight,
      bodyVisibleColumnWidth,
      bodyVisibleAreaLeft,
      bodyVisibleAreaTop,

      headerVisibleColumnWidth,
      headerVisibleAreaLeft,
    ]
  );

  return (
    <div
      className={cx(
        withBaseName(),
        {
          [withBaseName("framed")]: isFramed,
          [withBaseName("primaryBackground")]: backgroundVariant === "primary",
          [withBaseName("secondaryBackground")]:
            backgroundVariant === "secondary",
        },
        className
      )}
      style={style}
      ref={rootRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      data-name="grid-root"
    >
      <CellMeasure />
      <Scrollable
        scrollerRef={scrollableRef}
        topRef={topRef}
        rightRef={rightRef}
        bottomRef={bottomRef}
        leftRef={leftRef}
        middleRef={middleRef}
      />
      <MiddlePart middleRef={middleRef} onWheel={onWheel} />
      <TopPart topRef={topRef} onWheel={onWheel} />
      {/*<BottomPart bottomRef={bottomRef} onWheel={onWheel} />*/}
      <LeftPart leftRef={leftRef} onWheel={onWheel} />
      <RightPart rightRef={rightRef} onWheel={onWheel} />
      <TopLeftPart onWheel={onWheel} />
      <TopRightPart onWheel={onWheel} />
      {/*<BottomLeftPart onWheel={onWheel} />*/}
      {/*<BottomRightPart onWheel={onWheel} />*/}
      <ColumnDropTarget />
      <MovingColumn />
      {/*<RowHover />*/}
    </div>
  );
}
