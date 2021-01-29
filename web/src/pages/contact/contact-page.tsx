import React from "react";
import { PageLayout } from "pages/shared/page-layout";
import { Heading, HeadingLevel } from "common/components/content/heading";

export const ContactPage: React.FC = () => {
  return (
    <PageLayout>
      <HeadingLevel>
        <Heading>Get in Touch</Heading>
      </HeadingLevel>
    </PageLayout>
  );
};
