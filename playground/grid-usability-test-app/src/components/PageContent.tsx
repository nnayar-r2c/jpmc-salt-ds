import * as React from "react";
import { FC, ReactNode } from "react";
import { makePrefixer } from "@jpmorganchase/uitk-core";
import "./PageContent.css";

const withBaseName = makePrefixer("gtaPageContent");

export interface PageContentProps {
  children: ReactNode;
}

export const PageContent: FC<PageContentProps> = ({ children }) => {
  return <div className={withBaseName()}>{children}</div>;
};
