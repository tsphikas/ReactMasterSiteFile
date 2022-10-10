import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import InfoSection2 from "../components/InfoSection2";
import { InfoDataOne } from "../components/InfoSection2/InfoData";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import { SliderData } from "../components/HeroSection2/SliderData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection2 slides={SliderData} />
      <InfoSection2 {...InfoDataOne} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
