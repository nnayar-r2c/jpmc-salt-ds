import "./GroupHeaderRow.css";
import { GroupHeaderCell } from "../GroupHeaderCell";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { TableColumnGroupModel } from "../Table";
import { FakeGroupCell } from "./FakeGroupCell";

const withBaseName = makePrefixer("uitkTableGroupHeaderRow");

export interface GroupHeaderRowProps<T> {
  groups: TableColumnGroupModel[];
  gap?: number;
}

export function GroupHeaderRow<T>(props: GroupHeaderRowProps<T>) {
  const { groups, gap } = props;

  if (groups.length === 0) {
    return null;
  }
  return (
    <tr className={withBaseName()}>
      {groups.map((group) => {
        const Cell = group.data.headerComponent || GroupHeaderCell;
        return <Cell key={group.data.id} group={group} />;
      })}
      {gap !== undefined && gap > 0 ? <FakeGroupCell /> : null}
    </tr>
  );
}
