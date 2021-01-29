import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "pages/home/home-page";
import { AboutPage } from "pages/about/about-page";
import { ContactPage } from "pages/contact/contact-page";

export enum Pages {
  ABOUT = "/me",
  CONTACT = "/contact",
  HOME = "/",
}

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Pages.ABOUT} component={AboutPage} />
      <Route path={Pages.CONTACT} component={ContactPage} />
      {/* This is always the default page. */}
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
);
