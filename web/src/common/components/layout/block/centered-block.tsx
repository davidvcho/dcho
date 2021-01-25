import React from "react";
import {HorizontallyCenteredBlock} from "common/components/layout/block/horizontally-centered-block";
import {VerticallyCenteredBlock} from "common/components/layout/block/vertically-centered-block";

export const CenteredBlock: React.FC = ({children}) => {
  return <HorizontallyCenteredBlock><VerticallyCenteredBlock>{children}</VerticallyCenteredBlock></HorizontallyCenteredBlock>;
};
