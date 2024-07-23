import React from "react";
import SchoolHero from "../../../components/school/SchoolHero";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import OurPrograms from "../../../components/school/OurPrograms";
import LeadYourTeacher from "../../../components/school/LeadYourTeacher";
import OutComes from "../../../components/school/OutComes";
const SchoolPage = () => {
  return (
    <>
      <NavBar />
      <SchoolHero />
      <LeadYourTeacher />
      <OurPrograms />
      <OutComes />
      <Footer />
    </>
  );
};

export default SchoolPage;
