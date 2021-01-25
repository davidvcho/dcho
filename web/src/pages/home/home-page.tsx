import React from "react";
import {Logo} from "pages/home/logo";
import {Link} from "common/components/base/navigation/link/link";

export const HomePage: React.FC = () => {
  return <div><Link href={"https://www.google.com"}><Logo color="black" /></Link></div>;
};
