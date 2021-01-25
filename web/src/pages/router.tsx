import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "pages/home/home-page";
import { AboutPage } from "pages/about/about-page";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/me" component={AboutPage} />
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
);
