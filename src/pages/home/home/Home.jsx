import React, { useEffect } from "react";
import NavBar from "../../../components/NavBar";
import Hero from "../../../components/home/Hero";
import WhatWeDo from "../../../components/home/WhatWeDo";
import OurVision from "../../../components/home/OurVision";
import Video from "../../../components/home/Video";
import Footer from "../../../components/Footer";
import Intern from "../../../components/home/Intern";
import OutComes from "../../../components/home/OutComes";

const HeroContent = [
  {
    HeroButtonText: "ADHD",
  },
  {
    HeroButtonText: "Autism",
  },
  {
    HeroButtonText: "Dyslexia",
  },
  {
    HeroButtonText: "Dyspraxia",
  },
  {
    HeroButtonText: "Dyscalculia",
  },
  {
    HeroButtonText: "Learning Disability",
  },
  {
    HeroButtonText: "Intellectual Disability",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero HeroContent={HeroContent} />
      <WhatWeDo />
      <OurVision />

      <Video />
      <OutComes />
      <Intern />
    </>
  );
};

export default Home;
