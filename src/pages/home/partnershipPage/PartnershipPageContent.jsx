import React from "react";
import PartnershipHero from "../../../components/partnership/PartnershipHero";
import PartnershipContent from "../../../components/partnership/PartnershipContent";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import PartnershipCarousel from "../../../components/partnership/PartnershipCarousel";

const PartnershipPageContent = () => {
  return (
    <>
      <NavBar />
      <PartnershipHero />
      <PartnershipContent />
      <PartnershipCarousel />
      <Footer />
    </>
  );
};

export default PartnershipPageContent;
