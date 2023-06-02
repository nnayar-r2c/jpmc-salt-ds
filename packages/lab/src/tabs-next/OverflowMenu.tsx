import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
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
import { Button, makePrefixer, SaltProvider, Tooltip } from "@salt-ds/core";
import { OverflowMenuIcon } from "@salt-ds/icons";
import { useComponentCssInjection } from "@salt-ds/styles";
import { useWindow } from "@salt-ds/window";

import { useOverflowContext, useOverflowMenu } from "@fluentui/react-overflow";
import { ListItem } from "../list";
import listCss from "../list/List.css";
import { isDesktop } from "../window";
import { TabElement } from "./TabsNextTypes";

const withBaseName = makePrefixer("saltTabstripNext");

type OverflowMenuProps = {
  tabs: Array<{ tab: TabElement; id: string }>;
  activeTabIndex?: number | null;
  onSelectItem: (selectedId: string) => void;
  returnFocusToTabs: () => void;
};

export function OverflowMenu(props: OverflowMenuProps) {
  const { isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return <OverflowMenuImpl {...props} />;
}

function OverflowMenuImpl({
  tabs,
  onSelectItem,
  returnFocusToTabs,
}: OverflowMenuProps) {
  const [returnedFocusAfterSelection, setReturnedFocusAfterSelection] =
    useState(true);
  const { ref, overflowCount } = useOverflowMenu<HTMLDivElement>();
  const itemVisibility = useOverflowContext(
    (context) => context.itemVisibility
  );

  const tabList = tabs.filter(({ id }) => !itemVisibility[id]);

  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-tabstrip-list",
    css: listCss,
    window: targetWindow,
  });

  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(0);

  useEffect(() => {
    if (open) return;
    setHighlightedIndex(0);
  }, [open]);

  const [maxPopupHeight, setMaxPopupHeight] = useState<number | undefined>();

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
    onNavigate: setHighlightedIndex,
    virtual: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNavigation, dismiss, click, role]
  );

  function select() {
    if (typeof highlightedIndex !== "number") return;
    const selectedItem = tabList[highlightedIndex];
    if (!selectedItem) return;
    setReturnedFocusAfterSelection(false);
    setOpen(false);
    onSelectItem(tabList[highlightedIndex].id);
  }

  return (
    <div className={clsx(withBaseName("overflowMenu"))} ref={ref}>
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
                  },
                })}
                className={clsx(withBaseName("overflowMenu-popup"), "saltList")}
              >
                {tabList.map(({ tab, id }, index) => {
                  const { label } = tab.props;
                  if (!label) {
                    throw new Error("Tab needs a label");
                  }
                  return (
                    <ListItem
                      key={label}
                      ref={(node) => {
                        listRef.current[index] = node;
                      }}
                      role="option"
                      className={clsx(`saltListItem`, {
                        saltHighlighted: highlightedIndex === index,
                      })}
                      label={label}
                      tabIndex={-1}
                      {...getItemProps({
                        onClick: select,
                      })}
                      id={`${id}-option`}
                    >
                      {label}
                    </ListItem>
                  );
                })}
              </div>
            </SaltProvider>
          </FloatingFocusManager>
        </FloatingPortal>
      ) : null}

      <Tooltip content="Overflow Menu">
        <Button
          tabIndex={-1}
          ref={refs.setReference}
          aria-autocomplete="none"
          {...getReferenceProps({
            onKeyDown: (e) => {
              if (e.key === "ArrowLeft") {
                returnFocusToTabs();
              }
            },
            onFocus: (e) => {
              if (!returnedFocusAfterSelection) {
                e.preventDefault();
                setReturnedFocusAfterSelection(true);
                returnFocusToTabs();
              }
            },
          })}
          aria-label={`Tabs overflow menu ${overflowCount} item${
            overflowCount === 1 ? "" : "s"
          }`}
          variant="secondary"
        >
          <OverflowMenuIcon style={{ margin: 0 }} />
        </Button>
      </Tooltip>
    </div>
  );
}
