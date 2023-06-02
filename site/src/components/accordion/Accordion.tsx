import {
  AccordionGroup,
  AccordionPanel,
  Accordion,
  AccordionHeader,
} from "@salt-ds/lab";

import styles from "./Accordion.module.css";

export type AccordionInfoType = {
  id: string;
  summary: JSX.Element | string;
  details: JSX.Element;
};

export interface AccordionBaseProps {
  accordionInfo: AccordionInfoType[];
  defaultExpandedSectionIds?: string[];
}

const AccordionBase = ({
  accordionInfo,
  defaultExpandedSectionIds,
}: AccordionBaseProps): JSX.Element => {
  return (
    <AccordionGroup className={styles.accordion}>
      {accordionInfo.map(({ id, summary, details }) => {
        return (
          <Accordion
            className={styles.section}
            key={id}
            id={id}
            value={id}
            defaultExpanded={defaultExpandedSectionIds?.includes(id)}
          >
            <AccordionHeader className={styles.summary}>
              {summary}
            </AccordionHeader>
            <AccordionPanel>{details}</AccordionPanel>
          </Accordion>
        );
      })}
    </AccordionGroup>
  );
};

export default AccordionBase;
