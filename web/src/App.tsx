import { Router } from "pages/router";
import { ThemeProvider } from "common/components/themes/theme-provider";

export const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
