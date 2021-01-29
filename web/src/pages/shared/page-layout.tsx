import React from "react";
import { Block } from "common/components/layout/block/block";

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Block margin="auto" maxWidth="1000px" padding="1.5rem">
      {children}
    </Block>
  );
};
