import { AutoSizeHeaderCell, HeaderCellProps } from "./HeaderCell";
import { makePrefixer, RadioIcon } from "@jpmorganchase/uitk-core";
import "./RowSelectionRadioHeaderCell.css";

const withBaseName = makePrefixer("uitkGridRowSelectionRadioHeaderCell");

export function RowSelectionRadioHeaderCell<T>(props: HeaderCellProps<T>) {
  return (
    <AutoSizeHeaderCell {...props}>
      <div className={withBaseName("content")}>
        <RadioIcon />
      </div>
    </AutoSizeHeaderCell>
  );
}
