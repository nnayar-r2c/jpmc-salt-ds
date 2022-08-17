import * as React from "react";
import { FC, ReactNode } from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import "./PageHeader.css";

export interface PageHeaderProps {
  children: ReactNode;
}

const withBaseName = makePrefixer("gtaPageHeader");

export const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className={withBaseName()}>
      <div className={withBaseName("text")}>{children}</div>
      <div className={withBaseName("separator")}></div>
    </div>
  );
};
