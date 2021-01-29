import { BlogPath } from "pages/blog/blog-paths";
import * as React from "react";
import { StartingTheSweRoute } from "pages/blog/articles/0-starting-the-swe-route";
import { LifeOfASwe } from "pages/blog/articles/0-life-of-a-swe";

export const blogPathToArticle: Record<BlogPath, React.ComponentType<any>> = {
  [BlogPath["0_LIFE_OF_A_SWE"]]: LifeOfASwe,
  [BlogPath["0_STARTING_THE_SWE_ROUTE"]]: StartingTheSweRoute,
};
