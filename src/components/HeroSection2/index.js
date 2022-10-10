import react from "react";
import style from "styled-components";

import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  HeroH1,
} from "./HeroSection2Elements";

export const HeroSection2 = ({ slides }) => {
  return (
    <HeroSection2>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            <HeroSlider>
              <HeroImage />
              <HeroContent>
                <HeroH1></HeroH1>
              </HeroContent>
            </HeroSlider>
          </HeroSlide>
        ))}
      </HeroWrapper>
    </HeroSection2>
  );
};

export default HeroSection2;
