import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "pages/home/home-page";
import { AboutPage } from "pages/about/about-page";

export enum Pages {
  ABOUT = "/me",
  HOME = "/",
}

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Pages.ABOUT} component={AboutPage} />
      {/* This is always the default page. */}
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
);
