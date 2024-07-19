import React from "react";
import SchoolHero from "../../../components/school/SchoolHero";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import OurPrograms from "../../../components/school/OurPrograms";
const SchoolPage = () => {
  return (
    <>
      <NavBar />
      <SchoolHero />
      <OurPrograms />
      <Footer />
    </>
  );
};

export default SchoolPage;
