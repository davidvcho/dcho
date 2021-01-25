import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useState,
} from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { darkTheme } from "common/components/themes/dark-theme";
import { lightTheme } from "common/components/themes/light-theme";

export enum Theme {
  DARK,
  LIGHT,
}

export const THEME_MAPPING = {
  [Theme.DARK]: darkTheme,
  [Theme.LIGHT]: lightTheme,
};

type ThemeContextProps = {
  setTheme: Dispatch<Theme>;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextProps>({
  setTheme: (_) => {},
  theme: Theme.LIGHT,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const styletron = useMemo(() => new Styletron(), []);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={THEME_MAPPING[theme]}>{children}</BaseProvider>
      </StyletronProvider>
    </ThemeContext.Provider>
  );
};
