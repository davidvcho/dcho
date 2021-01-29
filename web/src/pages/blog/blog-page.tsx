import React from "react";
import { PageLayout } from "pages/shared/page-layout";
import { Heading, HeadingLevel } from "common/components/content/heading";
import { ParagraphMedium } from "common/components/content/typography";
import { Link } from "common/components/base/navigation/link/link";
import { Pages } from "pages/router";

export const BlogPage: React.FC = () => {
  return (
    <PageLayout>
      <HeadingLevel>
        <Heading>About this Blog</Heading>
        <ParagraphMedium>
          Whether you are interested in becoming a software engineer or want to
          level up your skills, this is the place for you. As a professional
          developer who was fortunate enough to learn from countless mentors
          throughout my life and career, I began this blog to democratize this
          learning process and provide opportunities to all.
        </ParagraphMedium>
        <ParagraphMedium>
          If you like what you see, feel free to share with your friends, sign
          up to receive monthly article updates, or{" "}
          <Link href={Pages.CONTACT}>contact me directly</Link>.
        </ParagraphMedium>
      </HeadingLevel>
      <HeadingLevel>
        <Heading>Articles</Heading>
      </HeadingLevel>
    </PageLayout>
  );
};
