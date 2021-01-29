import React from "react";
import { PageLayout } from "pages/shared/page-layout";
import { Heading, HeadingLevel } from "common/components/content/heading";
import { ParagraphMedium } from "common/components/content/typography";

export const StartingTheSweRoute: React.FC = () => {
  return (
    <PageLayout>
      <HeadingLevel>
        <Heading>Starting the Software Engineer Route</Heading>
        <ParagraphMedium>
          Maybe you're a high school or college student figuring out what to
          study or a working professional looking for a career change.
          Regardless of where you came from, you've landed on software engineer
          or software developer or developer or programming (or a myriad of
          other titles that all boil down to the same career). Before diving too
          deep into the pool, it's worth figuring out whether this is the right
          path for you.
        </ParagraphMedium>
      </HeadingLevel>
    </PageLayout>
  );
};
