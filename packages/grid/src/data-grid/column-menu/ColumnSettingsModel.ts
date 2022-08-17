import { BehaviorSubject } from "rxjs";
import { ColumnPinType, createHandler, createHook } from "../../grid";

export class ColumnSettingsModel {
  public readonly pinned$: BehaviorSubject<ColumnPinType | null>;
  public readonly usePinned: () => ColumnPinType | null;
  public readonly setPinned: (pinType: ColumnPinType | null) => void;

  public constructor() {
    this.pinned$ = new BehaviorSubject<ColumnPinType | null>(null);
    this.usePinned = createHook(this.pinned$);
    this.setPinned = createHandler(this.pinned$);
  }
}
