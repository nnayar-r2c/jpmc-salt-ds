import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
} from "react";
import "./CellEditor.css";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import { useEditorContext } from "./EditorContext";

const withBaseName = makePrefixer("uitkGridCellEditor");

export interface CellEditorProps {}

export const CellEditor: FC<CellEditorProps> = (props) => {
  const { editorText, setEditorText, endEditMode, cancelEditMode } =
    useEditorContext();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditorText(e.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      endEditMode();
      event.preventDefault();
      event.stopPropagation();
    }
    if (event.key === "Escape") {
      cancelEditMode();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    console.log(`input onBlur`);
    // debugger;
  };

  return (
    <td
      // data-row-index={row.index}
      // data-column-index={column.index}
      // aria-colindex={column.index}
      className={withBaseName()}
    >
      <div className={withBaseName("inputContainer")}>
        <input
          autoFocus={true}
          value={editorText}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </div>
    </td>
  );
};
