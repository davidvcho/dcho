import { Block as BaseBlock, BlockProps } from "baseui/block";
import React from "react";

export type Props = BlockProps;

export const Block: React.FC<Props> = React.forwardRef((props, ref) => {
  return <BaseBlock {...props} ref={ref} />;
});
