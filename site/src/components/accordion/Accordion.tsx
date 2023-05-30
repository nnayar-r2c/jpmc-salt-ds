import {
  Accordion,
  AccordionPanel,
  AccordionSection,
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
    <Accordion
      className={styles.accordion}
      defaultExpandedSectionIds={defaultExpandedSectionIds}
      maxExpandedItems={1}
    >
      {accordionInfo.map(({ id, summary, details }) => {
        return (
          <AccordionSection className={styles.section} key={id} id={id}>
            <AccordionHeader className={styles.summary}>
              {summary}
            </AccordionHeader>
            <AccordionPanel>{details}</AccordionPanel>
          </AccordionSection>
        );
      })}
    </Accordion>
  );
};

export default AccordionBase;
