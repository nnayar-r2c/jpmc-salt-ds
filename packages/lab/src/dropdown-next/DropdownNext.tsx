import { useForkRef, useIdMemo as useId } from "@salt-ds/core";
import {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useCallback,
  useRef,
} from "react";

import {
  CollectionItem,
  CollectionProvider,
  itemToString as defaultItemToString,
  SelectionProps,
  SelectionStrategy,
  SingleSelectionStrategy,
  useCollectionItems,
} from "../common-hooks";
import { List } from "../list/List";
import { ListProps } from "../list/listTypes";
import { DropdownBase, MaybeChildProps } from "./DropdownBase";
import { DropdownButton } from "./DropdownButton";
import { DropdownBaseProps } from "./dropdownTypes";
import { useDropdownNext } from "./useDropdownNext";
import { forwardCallbackProps } from "../utils";

export interface DropdownProps<
  Item = string,
  Selection extends SelectionStrategy = "default"
> extends DropdownBaseProps,
    Pick<
      ListProps<Item, Selection>,
      "ListItem" | "itemToString" | "source" | "width"
    >,
    SelectionProps<Item, Selection> {
  ListProps?: Omit<
    ListProps<Item, Selection>,
    "ListItem" | "itemToString" | "source"
  >;
}

export const Dropdown = forwardRef(function Dropdown<
  Item = string,
  Selection extends SelectionStrategy = "default"
>(
  {
    "aria-label": ariaLabel,
    children,
    defaultIsOpen,
    defaultSelected,
    id: idProp,
    isOpen: isOpenProp,
    itemToString = defaultItemToString,
    onOpenChange,
    onSelectionChange,
    selected: selectedProp,
    selectionStrategy,
    source,
    triggerComponent,
    ListItem,
    ListProps,
    width = "100%",
    variant = "primary",
    ...props
  }: DropdownProps<Item, Selection>,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const id = useId(idProp);
  const rootRef = useRef<HTMLDivElement>(null);
  const forkedRef = useForkRef<HTMLDivElement>(rootRef, forwardedRef);

  const collectionHook = useCollectionItems<Item>({
    id,
    source,
    children,
    options: {
      itemToString,
    },
  });

  const {
    highlightedIndex,
    triggerLabel,
    listHandlers,
    listControlProps,
    selected,
    ...dropdownListHook
  } = useDropdownNext<Item, Selection>({
    collectionHook,
    defaultHighlightedIndex: ListProps?.defaultHighlightedIndex,
    defaultIsOpen,
    defaultSelected: collectionHook.itemToCollectionItem<
      Selection,
      typeof defaultSelected
    >(defaultSelected),
    highlightedIndex: ListProps?.highlightedIndex,
    isOpen: isOpenProp,
    itemToString,
    label: "Dropdown",
    onHighlight: ListProps?.onHighlight,
    onOpenChange,
    onSelectionChange,
    selected: collectionHook.itemToCollectionItem<
      Selection,
      typeof selectedProp
    >(selectedProp),
    selectionStrategy,
  });

  const collectionItemsToItem = useCallback(
    (
      itemOrItems?: CollectionItem<Item> | null | CollectionItem<Item>[]
    ):
      | undefined
      | (Selection extends SingleSelectionStrategy ? Item | null : Item[]) => {
      type returnType = Selection extends SingleSelectionStrategy
        ? Item | null
        : Item[];
      if (Array.isArray(itemOrItems)) {
        return itemOrItems.map((i) => i.value) as returnType;
      } else if (itemOrItems) {
        return itemOrItems.value as returnType;
      }
    },
    []
  );

  const getTriggerComponent = () => {
    const ariaProps = {
      "aria-activedescendant": dropdownListHook.isOpen
        ? listControlProps?.["aria-activedescendant"]
        : undefined,
      "aria-label": ariaLabel,
    };
    if (triggerComponent) {
      const ownProps = triggerComponent.props as MaybeChildProps;
      return cloneElement(
        triggerComponent,
        forwardCallbackProps(ownProps, {
          ...listControlProps,
          ...ariaProps,
        })
      );
    } else {
      return (
        <DropdownButton
          label={triggerLabel}
          {...listControlProps}
          {...ariaProps}
        />
      );
    }
  };

  return (
    <CollectionProvider<Item> collectionHook={collectionHook}>
      <DropdownBase
        {...props}
        id={id}
        isOpen={dropdownListHook.isOpen}
        onOpenChange={dropdownListHook.onOpenChange}
        ref={forkedRef}
        width={width}
        variant={variant}
      >
        {getTriggerComponent()}
        <List<Item, Selection>
          ListItem={ListItem}
          itemToString={itemToString}
          {...ListProps}
          highlightedIndex={highlightedIndex}
          listHandlers={listHandlers}
          onSelectionChange={onSelectionChange}
          selected={collectionItemsToItem(selected)}
          selectionStrategy={selectionStrategy}
          data-testid="dropdown-list"
        />
      </DropdownBase>
    </CollectionProvider>
  );
}) as <Item, Selection extends SelectionStrategy = "default">(
  props: DropdownProps<Item, Selection> & {
    ref?: ForwardedRef<HTMLDivElement>;
  }
) => ReactElement<DropdownProps<Item, Selection>>;