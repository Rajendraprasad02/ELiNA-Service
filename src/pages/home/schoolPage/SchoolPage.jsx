import React, { useEffect } from "react";
import SchoolHero from "../../../components/school/SchoolHero";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import OurPrograms from "../../../components/school/OurPrograms";
import LeadYourTeacher from "../../../components/school/LeadYourTeacher";
import SchoolActualHero from "../../../components/school/SchoolActualHero";
import StepsSchools from "../../../components/school/StepsSchools";
import According from "../../../components/school/According";
const SchoolPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SchoolActualHero />
      <SchoolHero />
      <LeadYourTeacher />
      <According />
      <OurPrograms />
      <StepsSchools />
    </>
  );
};

export default SchoolPage;
