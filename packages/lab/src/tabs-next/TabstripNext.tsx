import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  limitShift,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";
import {
  Button,
  FlexLayout,
  makePrefixer,
  SaltProvider,
  useControlled,
  useId,
} from "@salt-ds/core";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  OverflowMenuIcon,
} from "@salt-ds/icons";
import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ListItem } from "../list";
import { Tab } from "../tabs/Tab";
import { TabActivationIndicator } from "../tabs/TabActivationIndicator";
import { TabElement, TabProps } from "../tabs/TabsTypes";
import { isDesktop } from "../window";
import "./TabstripNext.css";

const noop = () => undefined;

const withBaseName = makePrefixer("saltTabstripNext");

function isTab(child: ReactNode | TabElement): child is TabElement {
  return isValidElement(child) && child.type === Tab;
}

export type TabstripNextProps = PropsWithChildren<{
  activeTabIndex?: number;
  onActiveChange?: (index?: number) => void;
  defaultActiveTabIndex?: number;
  align?: "center";
  /* Triggered when tabs should be reordered to make the overflowed tab visible */
  onMoveTab?: (from: number, to: number) => void;
  /* Set a tab max-width in order to enable tab truncation */
  tabMaxWidth?: number;
  /* Enable to make the tabs scroll instead of showing the overflow dropdown menu */
  scrollable?: boolean;
}>;

export const TabstripNext = ({
  children,
  activeTabIndex: activeTabIndexProp,
  defaultActiveTabIndex,
  onActiveChange,
  align,
  onMoveTab,
  scrollable,
  tabMaxWidth,
}: TabstripNextProps) => {
  const [enableRightArrow, setEnableRightArrow] = useState(false);
  const [enableLeftArrow, setEnableLeftArrow] = useState(false);
  const uniqueId = useId();
  const getTabId = useCallback(
    (index: number) => {
      return `tab-${uniqueId ?? "unknown"}-${index}`;
    },
    [uniqueId]
  );

  const [activeTabIndex, setActiveTabIndex] = useControlled({
    controlled: activeTabIndexProp,
    default: defaultActiveTabIndex,
    name: "useTabs",
    state: "activeTabIndex",
  });
  const activeTabId =
    activeTabIndex !== undefined ? getTabId(activeTabIndex) : undefined;
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const firstSpy = useRef<HTMLDivElement>(null);
  const lastSpy = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [overflowTabsLength, setOverflowTabsLength] = useState(0);
  const [keyboardFocusedIndex, setKeyboardFocusedIndex] = useState(-1);

  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;
    let intersect: IntersectionObserver;
    const resize = new ResizeObserver((arg) => {
      if (arg.length < 2) return;
      const [{ contentRect: outerRect }, { contentRect: innerRect }] = arg;
      if (!outerRef.current || !innerRef.current) return;
      if (scrollable) {
        const hasOverflowingContent = innerRect.width - outerRect.width > 1;
        if (hasOverflowingContent) {
          intersect = new IntersectionObserver(([firstTab, lastTab]) => {
            if (firstTab) {
              if (firstTab.target === firstSpy.current) {
                setEnableLeftArrow(!firstTab.isIntersecting);
              } else {
                setEnableRightArrow(!firstTab.isIntersecting);
              }
            }
            if (lastTab) {
              setEnableRightArrow(!lastTab.isIntersecting);
              if (lastTab.target === lastSpy.current) {
                setEnableRightArrow(!lastTab.isIntersecting);
              } else {
                setEnableLeftArrow(!lastTab.isIntersecting);
              }
            }
          });
          if (firstSpy.current) {
            intersect.observe(firstSpy.current);
          }
          if (lastSpy.current) {
            intersect.observe(lastSpy.current);
          }
        }
      } else {
        const hasOverflowingContent = innerRect.height - outerRect.height > 0;
        setHasOverflow(hasOverflowingContent);
        const tabsTopOffset = innerRef.current.getBoundingClientRect().top;
        const overflowLength = [
          ...outerRef.current.querySelectorAll(
            `.${withBaseName("inner")} > *:not(:first-child):not(:last-child)`
          ),
        ].filter((el) => {
          return el.getBoundingClientRect().top - tabsTopOffset > 0;
        }).length;
        setOverflowTabsLength(overflowLength);
      }
    });
    resize.observe(outerRef.current);
    resize.observe(innerRef.current);

    return () => {
      if (intersect) {
        intersect.disconnect();
      }
      resize.disconnect();
    };
  }, [scrollable]);

  const tabs = Children.toArray(children);

  return (
    <FlexLayout gap={1} align="center">
      {scrollable ? (
        <Button disabled={!enableLeftArrow}>
          <ChevronLeftIcon />
        </Button>
      ) : null}
      <div
        className={clsx(withBaseName(), withBaseName("horizontal"), {
          [withBaseName("centered")]: align === "center",
          [withBaseName("scrollable")]: scrollable,
        })}
        ref={outerRef}
      >
        <div className={withBaseName("inner")} ref={innerRef}>
          <div ref={firstSpy} style={{ width: 1, height: 1 }}></div>
          {tabs.map((child, index) => {
            if (!isTab(child)) return child;
            const id = getTabId(index);
            return cloneElement<TabProps>(child, {
              // draggable: true,
              id: id,
              style: {
                maxWidth: tabMaxWidth,
              },
              tabIndex: index === activeTabIndex ? 0 : -1,
              selected: index === activeTabIndex,
              index: index,
              onClick: () => {
                setActiveTabIndex(index);
                onActiveChange?.(index);
              },
              onKeyUp: noop,
              onKeyDown: (e) => {
                let nextId;
                if (e.key === "ArrowRight") {
                  const nextIsOverflowed =
                    index + 1 >= tabs.length - overflowTabsLength;
                  if (nextIsOverflowed) {
                    outerRef?.current
                      ?.querySelector<HTMLDivElement>(
                        `.${withBaseName("overflowMenu")} .saltButton`
                      )
                      ?.focus();
                    return;
                  } else {
                    nextId = getTabId(index + 1);
                    setKeyboardFocusedIndex(index + 1);
                  }
                }
                if (e.key === "ArrowLeft") {
                  nextId = getTabId(index - 1);
                  setKeyboardFocusedIndex(index - 1);
                }
                if (nextId && innerRef.current) {
                  document.getElementById<HTMLDivElement>(nextId)?.focus();
                }
                if (e.key === "Enter" || e.key === " ") {
                  const nextIndex =
                    keyboardFocusedIndex < 0
                      ? activeTabIndex
                      : keyboardFocusedIndex;
                  setActiveTabIndex(nextIndex);
                  onActiveChange?.(nextIndex);
                }
              },
            });
          })}
          <div ref={lastSpy} style={{ width: 1, height: 1 }}></div>
        </div>

        {hasOverflow ? (
          <OverflowMenu
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            overflowTabsLength={overflowTabsLength}
            onMoveTab={onMoveTab}
            onActiveChange={onActiveChange}
            setActiveTabIndex={setActiveTabIndex}
            getTabId={getTabId}
            setKeyboardFocusedIndex={setKeyboardFocusedIndex}
          />
        ) : null}

        <TabActivationIndicator orientation="horizontal" tabId={activeTabId} />
      </div>
      {scrollable ? (
        <Button disabled={!enableRightArrow}>
          <ChevronRightIcon />
        </Button>
      ) : null}
    </FlexLayout>
  );
};

function OverflowMenu({
  tabs,
  overflowTabsLength,
  onMoveTab,
  activeTabIndex,
  onActiveChange,
  setActiveTabIndex,
  getTabId,
  setKeyboardFocusedIndex,
}: {
  tabs: TabElement[];
  overflowTabsLength: number;
  onMoveTab?: (from: number, to: number) => void;
  activeTabIndex?: number;
  onActiveChange?: (index: number) => void;
  setActiveTabIndex: (index: number) => void;
  getTabId: (index: number) => string;
  setKeyboardFocusedIndex: (index: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(0);

  useEffect(() => {
    if (open) return;
    setHighlightedIndex(0);
  }, [open]);

  const [maxPopupHeight, setMaxPopupHeight] = useState<number | undefined>();
  const indexToSelect = tabs.length - overflowTabsLength + highlightedIndex!;

  const middleware = isDesktop
    ? []
    : [
        flip({
          fallbackPlacements: ["bottom-start", "top-start"],
        }),
        shift({ limiter: limitShift() }),
        size({
          apply({ availableHeight }) {
            setMaxPopupHeight(availableHeight);
          },
        }),
      ];

  const { refs, x, y, strategy, context } = useFloating({
    open,
    middleware,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    placement: "bottom-end",
  });
  const listRef = useRef<Array<HTMLDivElement | null>>([]);
  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex: highlightedIndex,
    selectedIndex: activeTabIndex,
    onNavigate: setHighlightedIndex,
    virtual: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNavigation, dismiss, click, role]
  );

  function select() {
    const nextIndex = tabs.length - overflowTabsLength - 1;
    setActiveTabIndex(nextIndex);
    onActiveChange?.(nextIndex);
    onMoveTab?.(indexToSelect, nextIndex);
    setOpen(false);

    // we are battling the floating ui here
    setTimeout(() => {
      moveBackToTabs();
    }, 10);
  }

  function moveBackToTabs() {
    const moveToIndex = tabs.length - overflowTabsLength - 1;
    setKeyboardFocusedIndex(moveToIndex);
    document.getElementById(getTabId(moveToIndex))?.focus();
  }

  return (
    <div className={withBaseName("overflowMenu")}>
      {open ? (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <SaltProvider>
              <div
                style={{
                  top: y ?? 0,
                  left: x ?? 0,
                  position: strategy,
                  maxHeight: maxPopupHeight ?? undefined,
                }}
                ref={refs.setFloating}
                {...getFloatingProps({
                  onKeyDown(event) {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      select();
                    }

                    if (event.key === " ") {
                      event.preventDefault();
                      select();
                    }

                    if (event.key === "ArrowLeft") {
                      moveBackToTabs();
                    }
                  },
                })}
                className={clsx(withBaseName("overflowMenu-popup"), "saltList")}
              >
                {tabs
                  .slice(tabs.length - overflowTabsLength, tabs.length)
                  .map((tab, index) => {
                    if (!isTab(tab)) return tab;
                    return (
                      <ListItem
                        key={tab.props.label}
                        ref={(node) => {
                          listRef.current[index] = node;
                        }}
                        role="option"
                        selected={
                          activeTabIndex ===
                          tabs.length - overflowTabsLength + index
                        }
                        className={clsx(`saltListItem`, {
                          saltHighlighted: highlightedIndex === index,
                        })}
                        label={tab.props.label}
                        tabIndex={-1}
                        {...getItemProps({
                          onClick: select,
                        })}
                        id={`${getTabId()}${tab.props.label}-option`}
                      >
                        {tab.props.children}
                      </ListItem>
                    );
                  })}
              </div>
            </SaltProvider>
          </FloatingFocusManager>
        </FloatingPortal>
      ) : null}

      <Button
        tabIndex={-1}
        ref={refs.setReference}
        aria-autocomplete="none"
        {...getReferenceProps({
          onKeyDown: (e) => {
            if (e.key === "ArrowLeft") {
              moveBackToTabs();
            }
          },
        })}
        aria-label={`Tabs overflow menu ${overflowTabsLength} item${
          overflowTabsLength === 1 ? "" : "s"
        }`}
        variant="secondary"
      >
        <OverflowMenuIcon style={{ margin: 0 }} />
      </Button>
    </div>
  );
}

export const TabNext = Tab;
