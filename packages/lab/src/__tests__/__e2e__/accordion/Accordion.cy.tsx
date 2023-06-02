import {
  AccordionGroup,
  AccordionPanel,
  AccordionGroupProps,
  Accordion,
  AccordionHeader,
} from "@salt-ds/lab";
import { useReducer, useState } from "react";

const AccordionExample = (props: AccordionGroupProps) => {
  return (
    <AccordionGroup {...props}>
      <Accordion id="section-0" key="AccordionSection0">
        <AccordionHeader>AccordionSummary0</AccordionHeader>
        <AccordionPanel>AccordionDetails0</AccordionPanel>
      </Accordion>
      <Accordion id="section-1" key="AccordionSection1">
        <AccordionHeader>AccordionSummary1</AccordionHeader>
        <AccordionPanel>AccordionDetails1</AccordionPanel>
      </Accordion>
      <Accordion id="section-2" key="AccordionSection2">
        <AccordionHeader>AccordionSummary2</AccordionHeader>
        <AccordionPanel>AccordionDetails2</AccordionPanel>
      </Accordion>
    </AccordionGroup>
  );
};

const ControlledAccordionExample = (props: AccordionGroupProps) => {
  const { expandedSectionIds, onChange, ...rest } = props;
  const [expanded, setExpanded] = useState(expandedSectionIds);

  const handleChange = (ids: string[] | null) => {
    setExpanded(ids ?? []);
    onChange?.(ids);
  };

  return (
    <AccordionGroup
      expandedSectionIds={expanded}
      onChange={handleChange}
      {...rest}
    >
      <Accordion id="section-0" key="AccordionSection0">
        <AccordionHeader>AccordionSummary0</AccordionHeader>
        <AccordionPanel>AccordionDetails0</AccordionPanel>
      </Accordion>
      <Accordion id="section-1" key="AccordionSection1">
        <AccordionHeader>AccordionSummary1</AccordionHeader>
        <AccordionPanel>AccordionDetails1</AccordionPanel>
      </Accordion>
      <Accordion id="section-2" key="AccordionSection2">
        <AccordionHeader>AccordionSummary2</AccordionHeader>
        <AccordionPanel>AccordionDetails2</AccordionPanel>
      </Accordion>
    </AccordionGroup>
  );
};

const expectExpandedSections = (expected: number[]) => {
  const s = new Set(expected);
  for (let i of Array(3).keys()) {
    cy.findByRole("button", { name: `AccordionSummary${i}` }).should(
      "have.attr",
      "aria-expanded",
      s.has(i) ? "true" : "false"
    );
  }
};

const expectOnChangeLastCalled = (expected: number[]) => {
  cy.get("@changeSpy").should(
    "have.been.calledWith",
    expected.map((index) => `section-${index}`)
  );
};

describe("GIVEN an AccordionGroup", () => {
  describe("WHEN it is used in uncontrolled mode", () => {
    describe("WHEN user expands up to maxExpandedItems sections", () => {
      it("THEN sections should expand", () => {
        const changeSpy = cy.stub().as("changeSpy");
        cy.mount(
          <AccordionExample onChange={changeSpy} maxExpandedItems={2} />
        );
        cy.findByRole("button", { name: "AccordionSummary0" }).realClick();
        cy.findByRole("button", { name: "AccordionSummary1" }).realClick();

        cy.get("@changeSpy").should("have.been.calledTwice");

        expectExpandedSections([0, 1]);

        expectOnChangeLastCalled([0, 1]);
      });

      describe("AND WHEN user keeps opening more sections", () => {
        it("THEN panels should begin collapsing starting from the ones opened first", () => {
          const changeSpy = cy.stub().as("changeSpy");
          cy.mount(
            <AccordionExample onChange={changeSpy} maxExpandedItems={2} />
          );
          cy.findByRole("button", { name: "AccordionSummary0" }).realClick();
          cy.findByRole("button", { name: "AccordionSummary1" }).realClick();
          cy.findByRole("button", { name: "AccordionSummary2" }).realClick();

          expectExpandedSections([1, 2]);
          expectOnChangeLastCalled([1, 2]);
        });
      });

      describe("AND WHEN user changes maxExpandedItems to a lower number", () => {
        function DynamicMaxExpandedItemsExample(props: AccordionGroupProps) {
          const [isToggled, toggle] = useReducer((state) => {
            return !state;
          }, false);
          return (
            <>
              <button onClick={toggle}>Toggle Max Expanded Items</button>
              <AccordionGroup {...props} maxExpandedItems={isToggled ? 1 : 2}>
                <Accordion id="section-0" key="AccordionSection0">
                  <AccordionHeader>AccordionSummary0</AccordionHeader>
                  <AccordionPanel>AccordionDetails0</AccordionPanel>
                </Accordion>
                <Accordion id="section-1" key="AccordionSection1">
                  <AccordionHeader>AccordionSummary1</AccordionHeader>
                  <AccordionPanel>AccordionDetails1</AccordionPanel>
                </Accordion>
                <Accordion id="section-2" key="AccordionSection2">
                  <AccordionHeader>AccordionSummary2</AccordionHeader>
                  <AccordionPanel>AccordionDetails2</AccordionPanel>
                </Accordion>
              </AccordionGroup>
            </>
          );
        }
        it("THEN oldest panels should close", () => {
          const changeSpy = cy.stub().as("changeSpy");
          cy.mount(<DynamicMaxExpandedItemsExample onChange={changeSpy} />);
          cy.findByRole("button", { name: "AccordionSummary0" }).realClick();
          cy.findByRole("button", { name: "AccordionSummary1" }).realClick();

          cy.findByRole("button", {
            name: "Toggle Max Expanded Items",
          }).realClick();

          expectExpandedSections([1]);
          expectOnChangeLastCalled([1]);
        });
      });
    });
  });

  describe("WHEN it is used in controlled mode", () => {
    it("THEN sections with specified IDs should be expanded", () => {
      const changeSpy = cy.stub().as("changeSpy");
      cy.mount(
        <ControlledAccordionExample
          expandedSectionIds={["section-0", "section-2"]}
          onChange={changeSpy}
        />
      );
      expectExpandedSections([0, 2]);
      cy.get("@changeSpy").should("not.have.been.called");
    });

    describe("THEN user expands sections", () => {
      it("THEN onChange event should be raised but expanded actions remain the same", () => {
        const changeSpy = cy.stub().as("changeSpy");
        cy.mount(
          <AccordionExample
            expandedSectionIds={["section-0", "section-2"]}
            onChange={changeSpy}
          />
        );
        cy.findByRole("button", { name: "AccordionSummary1" }).realClick();
        cy.get("@changeSpy").should("have.been.calledOnce");
        expectExpandedSections([0, 2]);
      });

      describe("AND WHEN expandedSectionIds prop changes", () => {
        it("THEN expanded sections should change", () => {
          cy.mount(
            <ControlledAccordionExample
              expandedSectionIds={["section-0", "section-2"]}
            />
          );
          cy.findByRole("button", { name: "AccordionSummary1" }).realClick();

          expectExpandedSections([0, 1, 2]);
        });
      });
    });
  });

  describe("WHEN expanded prop is set directly on accordion sections", () => {
    it("THEN sections with expanded property set to true should be expanded", () => {
      cy.mount(
        <AccordionGroup>
          <Accordion id="section-0" key="AccordionSection0">
            <AccordionHeader>AccordionSummary0</AccordionHeader>
            <AccordionPanel>AccordionDetails0</AccordionPanel>
          </Accordion>
          <Accordion id="section-1" key="AccordionSection1" expanded>
            <AccordionHeader>AccordionSummary1</AccordionHeader>
            <AccordionPanel>AccordionDetails1</AccordionPanel>
          </Accordion>
          <Accordion id="section-2" key="AccordionSection2">
            <AccordionHeader>AccordionSummary2</AccordionHeader>
            <AccordionPanel>AccordionDetails2</AccordionPanel>
          </Accordion>
        </AccordionGroup>
      );
      expectExpandedSections([1]);
    });

    // TODO Should this work?
    it.skip("THEN expanded property set on sections should have priority over accordion's properties", () => {
      cy.mount(
        <AccordionGroup expandedSectionIds={["section-0", "section-1"]}>
          <Accordion id="section-0" key="AccordionSection0">
            <AccordionHeader>AccordionSummary0</AccordionHeader>
            <AccordionPanel>AccordionDetails0</AccordionPanel>
          </Accordion>
          <Accordion id="section-1" key="AccordionSection1">
            <AccordionHeader>AccordionSummary1</AccordionHeader>
            <AccordionPanel>AccordionDetails1</AccordionPanel>
          </Accordion>
          <Accordion id="section-2" key="AccordionSection2" expanded>
            <AccordionHeader>AccordionSummary2</AccordionHeader>
            <AccordionPanel>AccordionDetails2</AccordionPanel>
          </Accordion>
        </AccordionGroup>
      );

      expectExpandedSections([2]);
    });
  });
});
