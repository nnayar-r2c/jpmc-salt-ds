import * as React from "react";
import { Button, Card, FlexLayout } from "@jpmorganchase/uitk-core";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { Page } from "../components/Page";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate({ pathname: "/test-instructions" });
  };

  return (
    <Page>
      <PageHeader>Data Grid Usability Test</PageHeader>
      <PageContent>
        <p>Thank you for participating in this Data Grid usability test.</p>
        <p>
          The CIB Data Grid is maturing and we are in the process of refining
          its design and interactions. The aim of this session is to test the
          design with you and collect feedback to help us improve the Data Grid
          experience.
        </p>
        <p>
          The output from this session is confidential and will not be shared
          with anyone outside of this team. Please be assured that you can be
          completely honest in your responses. Everything you share with us,
          however small, is invaluable for improving the Data Grid.
        </p>
        <p>
          To ensure we capture feedback accurately we would like to record this
          session. Data collected from the recording will be anonymised and the
          recording will be deleted once analysed.
        </p>
      </PageContent>
      <FlexLayout direction={"row"} justify={"space-between"}>
        <Button variant={"cta"} onClick={onStart}>
          Continue
        </Button>
      </FlexLayout>
    </Page>
  );
};
