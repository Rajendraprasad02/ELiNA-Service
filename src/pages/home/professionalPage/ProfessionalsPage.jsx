import React from "react";
import ProfessionalHero from "../../../components/professional/ProfessionalHero";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Professional2 from "../../../components/professional/Professional2";
import SpecialNeedCare from "../../../components/professional/SpecialNeedCare";
import WeHelpKids from "../../../components/professional/WeHelpKids";
import Steps from "../../../components/professional/Steps";

const ProfessionalsPage = () => {
  return (
    <>
      <ProfessionalHero />
      <Professional2 />
      <SpecialNeedCare />
      <WeHelpKids />
      <Steps />
    </>
  );
};

export default ProfessionalsPage;
