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
  /* Value for the uncontrolled version. Set to null in order to have no tabs be selected. */
  activeTabIndex?: number | null;
  /* Callback for the controlled version. */
  onActiveChange?: (index?: number) => void;
  /* Initial value for the uncontrolled version. Set to null in order to have no tabs be selected by default. */
  defaultActiveTabIndex?: number;
  /* Align the tabs to the center. Left aligned by default. */
  align?: "center";
  /* Set a tab max-width in order to enable tab truncation */
  tabMaxWidth?: number;
  /* 
  Function to generate a unique id for each tab. Necessary for overflow to work. 
  By default it uses the label, therefore the Tab label has to be unique. */
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
  const uniqueId = useId();
  const _getTabId = useCallback(
    (label: string) => {
      return `tab-${uniqueId ?? "unknown"}-${label}`;
    },
    [uniqueId]
  );
  const getTabId = getTabIdProp || _getTabId;
  const tabs = Children.toArray(children)
    .filter(isTab)
    .map((tab) => {
      const { label } = tab.props;
      const id = tab.props.id || getTabId(label);
      return { tab, id };
    });

  const [activeTabIndex, setActiveTabIndex] = useControlled({
    controlled: activeTabIndexProp,
    // we want to make it possible for no tabs to be selected
    // but it has to be set explicitly by the user by setting default or controlled value to null
    default:
      defaultActiveTabIndex === null ? undefined : defaultActiveTabIndex ?? 0,
    name: "useTabs",
    state: "activeTabIndex",
  });
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const handleOverflowMenuSelectionChange = (selectedId: string) => {
    const index = tabs.findIndex(({ id: tabId }) => {
      return tabId === selectedId;
    });
    setActiveTabIndex(index);
    onActiveChange?.(index);
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
          {tabs.map(({ tab, id }, index) => {
            const { label } = tab.props;
            const isActive = activeTabIndex === index;
            return (
              <OverflowItem
                id={id}
                priority={isActive ? 1000 : undefined}
                key={label}
              >
                <div className={withBaseName("tabWrapper")}>
                  {cloneElement<TabProps>(tab, {
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
                        focusableElements.findIndex((tabElement) => {
                          return id === tabElement.id;
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
