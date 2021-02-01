import React from "react";
import { Experience, experiences } from "pages/about/experiences";
import { Heading, HeadingLevel } from "common/components/content/heading";
import {
  LabelSmall,
  ParagraphMedium,
} from "common/components/content/typography";
import { Block } from "common/components/layout/block/block";

const ExperienceInfo: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  const logo = (
    <Block
      alignItems="center"
      display="flex"
      height={["50px", "80px"]}
      minWidth={["50px", "80px"]}
      width={["50px", "80px"]}
    >
      <img
        alt={experience.organization.name}
        height="auto"
        src={experience.organization.logoImagePath}
        style={{ maxWidth: "100%" }}
      />
    </Block>
  );

  const header = (
    <div>
      <Heading margin={0}>{experience.organization.name}</Heading>
      <LabelSmall>
        {experience.timeframe.start} — {experience.timeframe.end}
      </LabelSmall>
    </div>
  );

  const responsiveHeader = (
    <>
      <Block alignItems="center" display={["flex", "none"]} gridGap="20px">
        {logo}
        {header}
      </Block>
      <Block display={["none", "block"]}>{header}</Block>
    </>
  );

  return (
    <HeadingLevel>
      <Block display="flex" gridGap="30px">
        <Block display={["none", "block"]}>{logo}</Block>
        <Block>
          {responsiveHeader}
          <ParagraphMedium>{experience.blurb}</ParagraphMedium>
        </Block>
      </Block>
    </HeadingLevel>
  );
};

export const Programmer: React.FC = () => {
  return (
    <>
      {experiences.map((experience: Experience) => (
        <ExperienceInfo experience={experience} />
      ))}
    </>
  );
};
