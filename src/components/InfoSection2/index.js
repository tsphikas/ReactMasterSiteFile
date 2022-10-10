import React from "react";
import {
  InfoSection,
  InfoContainer,
  ColumnLeft,
  InfoSectionH1,
  InfoSectionP,
  ColumnRight,
  InfoSectionImg,
  InfoButton,
} from "./InfoSection2Elements";

const InfoSection2 = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <InfoSection>
      <InfoContainer>
        <ColumnLeft>
          <InfoSectionH1>{heading}</InfoSectionH1>
          <InfoSectionP>{paragraphOne}</InfoSectionP>
          <InfoSectionP>{paragraphTwo}</InfoSectionP>
          <InfoButton to="/homes" primary="true">
            {buttonLabel}
          </InfoButton>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <InfoSectionImg src={image} alt="home" />
        </ColumnRight>
      </InfoContainer>
    </InfoSection>
  );
};

export default InfoSection2;
