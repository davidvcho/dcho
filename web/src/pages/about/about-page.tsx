import React from "react";
import { Header } from "pages/shared/header";
import { Heading, HeadingLevel } from "common/components/content/heading";
import { ParagraphMedium } from "common/components/content/typography";

export const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeadingLevel>
        <Heading>About Me</Heading>
        <ParagraphMedium>
          Hi, I'm David Cho — a New Yorker passionate about programming,
          photography, and powerlifting.
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
        </HeadingLevel>

        <HeadingLevel>
          <Heading>The Photographer 📸</Heading>
          <ParagraphMedium>
            There’s something magical about getting the perfect shot in
            photography. It’s a field so technical, yet so imaginative — it has
            me chasing light, perspective, and shadow to achieve perfection.
          </ParagraphMedium>
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
    </>
  );
};
