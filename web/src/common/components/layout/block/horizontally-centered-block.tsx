import React from "react";
import {Block} from "common/components/layout/block/block";

export const HorizontallyCenteredBlock: React.FC = ({children}) => {
  return <Block margin="auto"><div>{children}</div></Block>;
};
