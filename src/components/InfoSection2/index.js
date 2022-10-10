import React, { useRef, useState } from "react";
import useFadeInObserver from "../../hooks/useFadeInObserver";

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
  const targetRef = useRef(null);
  const isVisible = useFadeInObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    },
    targetRef
  );

  return (
    <InfoSection>
      <InfoContainer>
        <ColumnLeft ref={targetRef} style={{ opacity: !isVisible ? 0 : 1 }}>
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
