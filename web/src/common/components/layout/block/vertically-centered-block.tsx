import React from "react";
import {Block} from "common/components/layout/block/block";

export const VerticallyCenteredBlock: React.FC = ({children}) => {
  return <Block display="flex" justifyContent="center" alignContent="center"><div>{children}</div></Block>;
};
