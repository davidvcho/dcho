import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {HomePage} from "pages/home/home-page";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
);
