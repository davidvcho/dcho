import { Button as BaseButton, ButtonProps } from "baseui/button";
import React from "react";

export enum Kind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  MINIMAL = "minimal",
}

type Props = Pick<ButtonProps, "disabled" | "isLoading" | "onClick" | "size"> & {
  kind?: Kind;
  // force a choice of type to avoid defaulting to submit
  type: "button" | "reset" | "submit";
};

export const Button: React.FC<Props> = (props) => {
  return <BaseButton {...props} size="default" />;
};
