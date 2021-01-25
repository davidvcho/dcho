import React from "react";
import {HorizontallyCenteredBlock} from "common/components/layout/block/horizontally-centered-block";
import {VerticallyCenteredBlock} from "common/components/layout/block/vertically-centered-block";
import {Props} from "common/components/layout/block/block";

export const CenteredBlock: React.FC<Props> = React.forwardRef((props, ref) => {
  return <HorizontallyCenteredBlock {...props} ref={ref}><VerticallyCenteredBlock>{props.children}</VerticallyCenteredBlock></HorizontallyCenteredBlock>;
});
