import { makePrefixer, useControlled, useId } from "@salt-ds/core";
import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import { useComponentCssInjection } from "@salt-ds/styles";
import { useWindow } from "@salt-ds/window";
import { Overflow, OverflowItem } from "@fluentui/react-overflow";
import { TabNext } from "./TabNext";
import { TabElement, TabProps } from "./TabsNextTypes";
import { OverflowMenu } from "./OverflowMenu";
import tabstripCss from "./TabstripNext.css";

const noop = () => undefined;

const withBaseName = makePrefixer("saltTabstripNext");

function isTab(child: ReactNode | TabElement): child is TabElement {
  return isValidElement(child) && child.type === TabNext;
}

export type TabstripNextProps = PropsWithChildren<{
  activeTabIndex?: number | null;
  onActiveChange?: (index?: number) => void;
  defaultActiveTabIndex?: number;
  align?: "center";
  /* Set a tab max-width in order to enable tab truncation */
  tabMaxWidth?: number;
  getTabId?: (label: string) => string;
}>;

export const TabstripNext = ({
  children,
  activeTabIndex: activeTabIndexProp,
  defaultActiveTabIndex,
  onActiveChange,
  align,
  tabMaxWidth,
  getTabId: getTabIdProp,
}: TabstripNextProps) => {
  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-tabstrip-next",
    css: tabstripCss,
    window: targetWindow,
  });
  const tabs = Children.toArray(children).filter(isTab);
  const uniqueId = useId();
  const _getTabId = useCallback(
    (label: string) => {
      return `tab-${uniqueId ?? "unknown"}-${label}`;
    },
    [uniqueId]
  );
  const getTabId = getTabIdProp || _getTabId;

  const [activeTabIndex, setActiveTabIndex] = useControlled({
    controlled: activeTabIndexProp,
    default: defaultActiveTabIndex,
    name: "useTabs",
    state: "activeTabIndex",
  });
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const handleOverflowMenuSelectionChange = (item: {
    label: string;
    id: string;
  }) => {
    if (item) {
      const index = tabs.findIndex((tab) => {
        const label =
          typeof tab.props.children === "string"
            ? tab.props.children
            : tab.props.label;
        return label === item.label;
      });
      setActiveTabIndex(index);
      onActiveChange?.(index);
    }
  };

  return (
    <div
      role="tablist"
      className={clsx(withBaseName(), withBaseName("horizontal"), {
        [withBaseName("centered")]: align === "center",
      })}
      ref={outerRef}
    >
      <Overflow>
        <div className={withBaseName("inner")} ref={innerRef}>
          {tabs.map((child, index) => {
            const { label } = child.props;
            const isActive = activeTabIndex === index;
            const id = getTabId(label);
            return (
              <OverflowItem
                id={id}
                priority={isActive ? 1000 : undefined}
                key={label}
              >
                <div className={withBaseName("tabWrapper")}>
                  {cloneElement<TabProps>(child, {
                    id,
                    style: {
                      maxWidth: tabMaxWidth,
                    },
                    label,
                    tabIndex: isActive ? 0 : -1,
                    selected: isActive,
                    index,
                    onClick: () => {
                      setActiveTabIndex(index);
                      onActiveChange?.(index);
                    },
                    onKeyUp: noop,
                    onKeyDown: (e) => {
                      const focusableElements = Array.from(
                        outerRef.current?.querySelectorAll<HTMLDivElement>(
                          `[data-overflow-item]:not([data-overflowing]) [role="tab"], [data-overflow-menu] button`
                        ) ?? []
                      );
                      const focusableIndex =
                        focusableElements.findIndex((tab) => {
                          return label === tab.dataset.label;
                        }) ?? focusableElements.length - 1;
                      if (
                        e.key === "ArrowRight" &&
                        focusableElements[focusableIndex + 1]
                      ) {
                        focusableElements[focusableIndex + 1]?.focus();
                      }

                      if (e.key === "ArrowLeft") {
                        focusableElements[focusableIndex - 1]?.focus();
                      }

                      if (e.key === "Enter" || e.key === " ") {
                        setActiveTabIndex(focusableIndex);
                        onActiveChange?.(focusableIndex);
                      }
                    },
                  })}
                </div>
              </OverflowItem>
            );
          })}
          <OverflowItem id="menu" priority={9999}>
            <OverflowMenu
              tabs={tabs}
              activeTabIndex={activeTabIndex}
              onSelectItem={handleOverflowMenuSelectionChange}
              getTabId={getTabId}
              returnFocusToTabs={() => {
                const focusable =
                  outerRef.current?.querySelectorAll<HTMLDivElement>(
                    `[data-overflow-item]:not([data-overflowing]) [role="tab"]`
                  ) ?? [];
                focusable[focusable.length - 1]?.focus();
              }}
            />
          </OverflowItem>
        </div>
      </Overflow>
    </div>
  );
};
