import React from "react";
import { Heading, HeadingLevel } from "common/components/content/heading";
import { ParagraphMedium } from "common/components/content/typography";
import { Block } from "common/components/layout/block/block";
import { Photographer } from "pages/about/photographer";
import { PageLayout } from "pages/shared/page-layout";
import { Programmer } from "pages/about/programmer";

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <HeadingLevel>
        <Heading>About Me</Heading>
        <ParagraphMedium>
          Hi, I'm David Cho — a New Yorker passionate about programming,
          photography, and powerlifting.
          <Block marginTop="24px">
            <img
              alt="It's me, David Cho"
              height={236.86}
              width={200}
              src="/images/pages/about/me.jpg"
            />
          </Block>
        </ParagraphMedium>

        <HeadingLevel>
          <Heading>The Programmer 💻</Heading>
          <ParagraphMedium>
            I'm a full-stack software developer dedicated to building technology
            to change the world. Ever since I taught myself how to code in high
            school, I've always been fascinated by how software improves lives
            and pushes the boundaries to{" "}
            <strong>make the impossible possible</strong>.
          </ParagraphMedium>
          <Programmer />
        </HeadingLevel>

        <HeadingLevel>
          <Heading>The Photographer 📸</Heading>
          <ParagraphMedium>
            There’s something magical about getting the perfect shot in
            photography. It’s a field so technical, yet so imaginative — it has
            me chasing light, perspective, and shadow to achieve perfection.
          </ParagraphMedium>
          <Photographer />
        </HeadingLevel>

        <HeadingLevel>
          <Heading>The Powerlifter 🏋️</Heading>
          <ParagraphMedium>
            On most days you can find me in the gym picking up heavy things and
            putting them down. I started powerlifting after dabbling in high
            school wrestling, then training in my friend's backyard gym. Learned
            the importance of form on day 1 and fast forward 5 years, my top
            lifts (in pounds) to date have been:
            <ul>
              <li>Squat: 405</li>
              <li>Bench: 265</li>
              <li>Deadlift: 415</li>
            </ul>
          </ParagraphMedium>
        </HeadingLevel>
      </HeadingLevel>
    </PageLayout>
  );
};
