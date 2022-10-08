import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  ImageOverlay,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg>
          <ImageOverlay />
        </ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Callis LockSmiths</HeroH1>
        <HeroH2>24/7 Emergency Locksmith Services</HeroH2>
        <HeroP>
          Based in Courch End, Callis Locksmiths have been serving the community
          for 26 years.
        </HeroP>
        <HeroP>
          From lockouts to replacing locks, we have the tools and skills to get
          the job done. Whether you need a replacement on your door after a
          burglary or just need to get into the house, Callis Locksmiths can
          always be of service.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
