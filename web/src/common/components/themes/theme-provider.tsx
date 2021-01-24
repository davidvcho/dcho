import React, {createContext, Dispatch, useMemo, useState} from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import {lightTheme} from "common/components/themes/light-theme";
import {darkTheme} from "common/components/themes/dark-theme";

enum Theme {
  DARK,
  LIGHT,
}

const THEME_MAPPING= {
  [Theme.DARK]: darkTheme,
  [Theme.LIGHT]: lightTheme,
}

type ThemeContextProps = {
  setTheme: Dispatch<Theme>;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps>({
  setTheme: _ => {},
  theme: Theme.LIGHT,
});

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const styletron = useMemo(() => new Styletron(), []);
  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={THEME_MAPPING[theme]}>{children}</BaseProvider>
      </StyletronProvider>
    </ThemeContext.Provider>
  );
};
