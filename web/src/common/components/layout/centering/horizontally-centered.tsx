import React from "react";
import {Props} from "common/components/layout/block/block";

export const HorizontallyCentered: React.FC<Props> = React.forwardRef((props, ref) => {
  return <div style={{display: "flex", "justifyContent": "center"}} ref={ref}>{props.children}</div>;
});
