import { createTheme, darkThemePrimitives } from "baseui";

const primitives = {
  ...darkThemePrimitives
};

const overrides = {

};

export const darkTheme = createTheme(primitives, overrides);
