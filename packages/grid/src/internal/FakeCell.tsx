import { GridCellProps } from "../GridColumn";
import "./FakeCell.css";

export type FakeCellProps<T> = Pick<GridCellProps<T>, "row">;

export function FakeCell<T>(props: FakeCellProps<T>) {
  const { row } = props;
  return (
    <td
      className={"uitkGridFakeCell"}
      data-row-index={row.index}
      data-column-index={-1}
    />
  );
}
