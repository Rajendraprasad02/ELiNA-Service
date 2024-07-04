import React from "react";
import IsmsHeroPage from "../../../components/Isms/IsmsHeroPage";
import Hero from "../../../components/home/Hero";
import NavBar from "../../../components/NavBar";
import WhoCanUse from "../../../components/Isms/WhoCanUse";
import Carousel from "../../../components/Isms/Carousel";
import HowItWorks from "../../../components/Isms/HowItWorks";
import WhatsNext from "../../../components/Isms/WhatsNext";
import Footer from "../../../components/Footer";

const Imis = () => {
  return (
    <>
      <NavBar />
      <IsmsHeroPage />
      <WhoCanUse />
      <Carousel />
      <HowItWorks />
      <WhatsNext />
      <Footer />
    </>
  );
};

export default Imis;
