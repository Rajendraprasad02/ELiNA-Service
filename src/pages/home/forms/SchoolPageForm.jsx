import React, { useEffect } from "react";
import SchoolForm from "../../../components/forms/school/SchoolForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import SchoolFormHero from "../../../components/forms/school/SchoolFormHero";

const SchoolPageForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SchoolFormHero />
      <SchoolForm />
    </>
  );
};

export default SchoolPageForm;
