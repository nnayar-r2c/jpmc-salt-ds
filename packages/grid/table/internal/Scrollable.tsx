import { RefObject, UIEventHandler, useEffect } from "react";
import "./Scrollable.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkTableScrollable");

export interface ScrollableProps<T> {
  scrollLeft: number;
  scrollTop: number;
  scrollSource: "user" | "table";
  scroll: (left?: number, top?: number, source?: "user" | "table") => void;

  scrollerRef: RefObject<HTMLDivElement>;
  middleRef: RefObject<HTMLDivElement>;
  topRef: RefObject<HTMLDivElement>;
  leftRef: RefObject<HTMLDivElement>;
  rightRef: RefObject<HTMLDivElement>;
  bottomRef: RefObject<HTMLDivElement>;
}

export function Scrollable<T>(props: ScrollableProps<T>) {
  const { scrollerRef, middleRef, topRef, leftRef, rightRef, bottomRef } =
    props;

  const onScroll: UIEventHandler<HTMLDivElement> = (event) => {
    if (!scrollerRef.current) {
      return;
    }
    const { scrollLeft, scrollTop } = scrollerRef.current;

    const top = topRef.current;
    const bottom = bottomRef.current;
    if (top) {
      top.scrollLeft = scrollLeft;
    }
    if (bottom) {
      bottom.scrollLeft = scrollLeft;
    }
    const left = leftRef.current;
    if (left) {
      left.scrollTop = scrollTop;
    }
    const right = rightRef.current;
    if (right) {
      right.scrollTop = scrollTop;
    }
    const middle = middleRef.current;
    if (middle) {
      middle.scrollTop = scrollTop;
      middle.scrollLeft = scrollLeft;
    }
    // console.log(`Scrollable.onScroll setting scroll top to ${scrollTop}`);
    props.scroll(scrollLeft, scrollTop, "user");
  };

  useEffect(() => {
    if (!scrollerRef.current) {
      return;
    }
    const { scrollLeft, scrollTop, scrollSource } = props;
    if (scrollSource === "table") {
      if (scrollLeft !== scrollerRef.current.scrollLeft) {
        scrollerRef.current.scrollLeft = scrollLeft;
      }
      if (scrollTop !== scrollerRef.current.scrollTop) {
        console.log(`Scrollable.useEffect scrolling to ${scrollTop}`);
        scrollerRef.current.scrollTop = scrollTop;
      }
    }
  }, [
    props.scrollLeft,
    props.scrollTop,
    props.scrollSource,
    scrollerRef.current,
  ]);

  return (
    <div ref={scrollerRef} className={withBaseName()} onScroll={onScroll}>
      <div className={withBaseName("space")} />
    </div>
  );
}
