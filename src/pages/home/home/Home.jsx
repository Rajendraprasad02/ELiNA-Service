import React from "react";
import NavBar from "../../../components/NavBar";
import Hero from "../../../components/home/Hero";
import WhatWeDo from "../../../components/home/WhatWeDo";
import OurVision from "../../../components/home/OurVision";
import Video from "../../../components/home/Video";
import Footer from "../../../components/Footer";

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
  return (
    <>
      <NavBar />
      <Hero HeroContent={HeroContent} />
      <WhatWeDo />
      <OurVision />
      <Video />
      <Footer />
    </>
  );
};

export default Home;
