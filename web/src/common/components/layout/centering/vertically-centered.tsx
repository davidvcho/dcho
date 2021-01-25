import React from "react";

type Props = {
  columnGap?: string;
}

export const VerticallyCentered: React.FC<Props> = ({children, columnGap}) => {
  return <div style={{display: "flex", alignItems: "center", columnGap}} >{children}</div>;
}
