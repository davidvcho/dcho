import React from "react";
import { Block, Props } from "common/components/layout/block/block";

export const VerticallyCenteredBlock: React.FC<Props> = React.forwardRef(
  (props, ref) => {
    return (
      <Block {...props} display="flex" alignContent="center" ref={ref}>
        <div>{props.children}</div>
      </Block>
    );
  }
);
