type size = "small" | "medium" | "large";

type Breakpoints = Record<size, number>;

const breakpoints: Breakpoints = {
  small: 450,
  medium: 800,
  large: 1200,
};

export const responsiveTheme = Object.keys(breakpoints).reduce(
  (acc: any, key: any) => {
    acc.mediaQuery[key] = `@media screen and (min-width: ${
      breakpoints[key as size]
    }px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {},
  }
);
