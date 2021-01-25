import React from "react";
import {Block, Props} from "common/components/layout/block/block";

export const HorizontallyCenteredBlock: React.FC<Props> = React.forwardRef((props, ref) => {
  return <Block {...props} display="flex" justifyContent="center" ref={ref}><div>{props.children}</div></Block>;
});
