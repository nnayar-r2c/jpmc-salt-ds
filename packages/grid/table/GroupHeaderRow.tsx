import "./GroupHeaderRow.css";
import { GroupHeaderCell } from "./GroupHeaderCell";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnGroupModel } from "./Table";

const withBaseName = makePrefixer("uitkGridGroupHeaderRow");

export interface GroupHeaderRowProps<T> {
  groups: TableColumnGroupModel[];
}

export function GroupHeaderRow<T>(props: GroupHeaderRowProps<T>) {
  const { groups } = props;

  return (
    <tr className={withBaseName()}>
      {groups.map((group) => {
        const Cell = group.data.headerComponent || GroupHeaderCell;
        return <Cell key={group.data.id} group={group} />;
      })}
    </tr>
  );
}
