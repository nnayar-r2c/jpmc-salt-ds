import { memo, MouseEventHandler, useCallback } from "react";
import { HeaderValueProps } from "../../model";
import "./RowSelectionCheckboxColumn.css";
import { useGridContext } from "../../GridContext";
import {
  CheckboxCheckedIcon,
  CheckboxIcon,
  makePrefixer,
} from "@jpmorganchase/uitk-core";

const withBaseName = makePrefixer("uitkGridRowSelectionCheckboxHeaderValue");

export const RowSelectionCheckboxHeaderValue = memo(
  function RowSelectionCheckboxHeaderValue<T>(props: HeaderValueProps<T>) {
    const { model } = useGridContext();
    const isAllSelected = model.rowSelection.useIsAllSelected();
    const isSomeSelected = model.rowSelection.useIsSomeSelected();

    const onMouseDown: MouseEventHandler = useCallback(
      (event) => {
        // console.log(`Sending selectAll ${!isAllSelected}`);
        model.rowSelection.selectAll(!isAllSelected);
        event.preventDefault();
        event.stopPropagation();
      },
      [isAllSelected]
    );

    return (
      <div className={withBaseName()} onMouseDown={onMouseDown}>
        <CheckboxIcon
          checked={isAllSelected}
          indeterminate={isSomeSelected}
          className={withBaseName("icon")}
        />
      </div>
    );
  }
);
