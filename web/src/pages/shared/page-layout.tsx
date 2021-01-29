import React from "react";
import { Block } from "common/components/layout/block/block";
import { Header } from "pages/shared/header";

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Block margin="auto" maxWidth="1000px" padding="1.5rem">
      <Header />
      {children}
    </Block>
  );
};
