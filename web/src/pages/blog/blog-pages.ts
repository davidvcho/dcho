import { BlogPath } from "pages/blog/blog-paths";
import * as React from "react";
import { StartingTheSweRoute } from "pages/blog/articles/0-starting-the-swe-route";

export const blogPathToArticle: Record<BlogPath, React.ComponentType<any>> = {
  [BlogPath["0_STARTING_THE_SWE_ROUTE"]]: StartingTheSweRoute,
};
