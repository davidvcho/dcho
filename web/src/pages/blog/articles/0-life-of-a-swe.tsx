import React from "react";
import { PageLayout } from "pages/shared/page-layout";
import { Heading, HeadingLevel } from "common/components/content/heading";
import { ParagraphMedium } from "common/components/content/typography";

export const LifeOfASwe: React.FC = () => {
  return (
    <PageLayout>
      <HeadingLevel>
        <Heading>Life of a Software Engineer</Heading>
        <ParagraphMedium>
          Having been a SWE (software engineer) for the past 5 years, I thought
          I'd share what my experience has been like and what it's really like
          to be a SWE.
        </ParagraphMedium>
      </HeadingLevel>
    </PageLayout>
  );
};
