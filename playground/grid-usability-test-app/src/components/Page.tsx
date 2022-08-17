import { makePrefixer } from "@jpmorganchase/uitk-core";
import * as React from "react";
import { FC, ReactNode } from "react";
import "./Page.css";

const withBaseName = makePrefixer("gtaPage");

export interface PageProps {
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className={withBaseName()}>
      <div className={withBaseName("card")}>{children}</div>
    </div>
  );
};
