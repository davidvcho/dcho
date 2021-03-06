import React from "react";
import { Logo } from "pages/home/logo";
import { Link } from "common/components/base/navigation/link/link";
import { CenteredBlock } from "common/components/layout/block/centered-block";
import styles from "pages/home/home-page.module.scss";
import { Pages } from "pages/router";

export const HomePage: React.FC = () => {
  return (
    <CenteredBlock marginTop="15vh">
      <Link href={Pages.ABOUT}>
        <Logo className={styles.logo} color="black" />
      </Link>
    </CenteredBlock>
  );
};
