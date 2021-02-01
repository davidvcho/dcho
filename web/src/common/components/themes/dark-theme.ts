import { createTheme, darkThemePrimitives } from "baseui";
import { responsiveTheme } from "common/components/themes/common-theme";

const primitives = {
  ...darkThemePrimitives,
};

const overrides = {
  ...responsiveTheme,
};

export const darkTheme = createTheme(primitives, overrides);
