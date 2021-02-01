import { createTheme, lightThemePrimitives } from "baseui";
import { responsiveTheme } from "common/components/themes/common-theme";

const primitives = {
  ...lightThemePrimitives,
};

const overrides = {
  ...responsiveTheme,
};

export const lightTheme = createTheme(primitives, overrides);
