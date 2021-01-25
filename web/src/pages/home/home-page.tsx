import React from "react";
import {Logo} from "pages/home/logo";
import {Link} from "common/components/base/navigation/link/link";
import {CenteredBlock} from "common/components/layout/block/centered-block";

export const HomePage: React.FC = () => {
  return (
    <CenteredBlock>
      <Link href={"https://www.google.com"}>
        <Logo className="" color="black" />
      </Link>
    </CenteredBlock>
  );
};
