import React from "react";
import SchoolForm from "../../../components/forms/school/SchoolForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import SchoolFormHero from "../../../components/forms/school/SchoolFormHero";

const SchoolPageForm = () => {
  return (
    <>
      <NavBar />
      <SchoolFormHero />
      <SchoolForm />
      <Footer />
    </>
  );
};

export default SchoolPageForm;
