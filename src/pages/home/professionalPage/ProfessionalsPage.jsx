import React, { useEffect } from "react";
import ProfessionalHero from "../../../components/professional/ProfessionalHero";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Professional2 from "../../../components/professional/Professional2";
import SpecialNeedCare from "../../../components/professional/SpecialNeedCare";
import WeHelpKids from "../../../components/professional/WeHelpKids";
import Steps from "../../../components/professional/Steps";
import JoinUs from "../../../components/professional/JoinUs";

const ProfessionalsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProfessionalHero />
      <Professional2 />
      <SpecialNeedCare />
      <WeHelpKids />
      <JoinUs />
      <Steps />
    </>
  );
};

export default ProfessionalsPage;
