import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "pages/home/home-page";
import { AboutPage } from "pages/about/about-page";
import { ContactPage } from "pages/contact/contact-page";
import { BlogRouter } from "pages/blog/blog-router";
import { blogRootPath } from "pages/blog/blog-paths";

export const Pages = {
  ABOUT: "/me",
  BLOG: blogRootPath,
  CONTACT: "/contact",
  HOME: "/",
};

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Pages.ABOUT} component={AboutPage} />
      <Route path={Pages.BLOG} component={BlogRouter} />
      <Route path={Pages.CONTACT} component={ContactPage} />
      {/* This is always the default page. */}
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
);
