import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToolkitProvider } from "@jpmorganchase/uitk-core";
import { StartPage } from "./pages/StartPage";
import "@jpmorganchase/uitk-theme/index.css";
import { TestInstructionsPage } from "./pages/TestInstructionsPage";
import { QuestionPage } from "./pages/QuestionPage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToolkitProvider>
        <Routes>
          <Route path={"/"} element={<StartPage />} />
          <Route
            path={"/test-instructions"}
            element={<TestInstructionsPage />}
          />
          <Route path={"/question"} element={<QuestionPage />} />
        </Routes>
      </ToolkitProvider>
    </BrowserRouter>
  );
}

export default App;
