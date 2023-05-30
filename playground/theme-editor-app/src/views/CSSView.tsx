import { ReactElement } from "react";
import {
  Accordion,
  AccordionPanel,
  AccordionSection,
  AccordionHeader,
} from "@salt-ds/lab";
import { CSSByPattern } from "@salt-ds/theme-editor/src/helpers/parseToCss";

interface CSSViewProps {
  cssByPattern: CSSByPattern[];
  directoryName: string;
}

export const CSSView = (props: CSSViewProps): ReactElement => {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <span style={{ fontSize: "14px" }}>
        CSS successfully saved to {props.directoryName}
      </span>
      <div style={{ margin: "20px 0px" }}>
        <Accordion>
          {props.cssByPattern.map((element) => {
            return (
              <AccordionSection
                key={`${element.pattern}.css`}
                value={element.pattern}
              >
                <AccordionHeader>{element.pattern}.css</AccordionHeader>
                <AccordionPanel>
                  <pre>
                    <code style={{ fontSize: "12px" }}>{element.cssObj}</code>
                  </pre>
                </AccordionPanel>
              </AccordionSection>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
