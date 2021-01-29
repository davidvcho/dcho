import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BlogPage } from "pages/blog/blog-page";
import { blogPathToArticle } from "pages/blog/blog-pages";
import { blogRootPath } from "pages/blog/blog-paths";

export const BlogRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {Object.entries(blogPathToArticle).map(([path, page]) => (
        <Route
          key={path}
          exact
          path={`${blogRootPath}/${path}`}
          component={page}
        />
      ))}

      {/* This is always the default page. */}
      <Route component={BlogPage} />
    </Switch>
  </BrowserRouter>
);
