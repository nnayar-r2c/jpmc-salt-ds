import { makePrefixer } from "@salt-ds/core";
import { ReactElement } from "react";
import { escapeRegExp } from "../utils";

import "./Highlighter.css";

const withBaseName = makePrefixer("saltHighlighter");

export interface HighlighterProps {
  matchPattern?: RegExp | string;
  text?: string;
}

export const Highlighter = ({
  matchPattern,
  text = "",
}: HighlighterProps): ReactElement<HighlighterProps> => {
  const matchRegex =
    typeof matchPattern === "string"
      ? new RegExp(`(${escapeRegExp(matchPattern)})`, "gi")
      : matchPattern;

  if (matchRegex === undefined) {
    return <>{text}</>;
  }
  return (
    <>
      {text.split(matchRegex).map((part, index) =>
        part.match(matchRegex) ? (
          <strong
            className={withBaseName("highlight")}
            key={`${index}-${part}`}
          >
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
};
