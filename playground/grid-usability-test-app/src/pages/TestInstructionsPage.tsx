import * as React from "react";
import { Button, Card, FlexLayout } from "@jpmorganchase/uitk-core";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";
import { useNavigate } from "react-router-dom";

export const TestInstructionsPage = () => {
  const navigate = useNavigate();

  const onBegin = () => {
    navigate({ pathname: "/question" });
  };

  return (
    <Page>
      <PageHeader>Test Instructions</PageHeader>
      <PageContent>
        <p>
          You are going to complete a series of interactive tasks relating to
          the updated Data Grid design. Each task will display a different
          configuration of the Data Grid with a dataset relevant to the task.
        </p>
        <p>
          When each task begins you will first be presented with the question.
          Make sure you’ve understood the question and when you’re ready click
          ‘Start’ to reveal the Data Grid.
        </p>
        <p>
          You will be timed during the task. Try to complete the task as quickly
          and carefully as possible. When you’ve successfully completed the task
          the facilitator will stop the timer and you can move on to the next
          question.
        </p>
        <p>
          If at any point you feel you have something relevant to share please
          feel free to do so at any time.
        </p>
      </PageContent>
      <FlexLayout direction={"row"} justify={"space-between"}>
        <Button variant={"cta"} onClick={onBegin}>
          Begin Usability Test
        </Button>
      </FlexLayout>
    </Page>
  );
};
