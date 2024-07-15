import React from "react";
import ParentForm from "../../../components/forms/parent/ParentForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ParentFormHero from "../../../components/forms/parent/ParentFormHero";

const ParentPageForm = () => {
  return (
    <>
      <NavBar />
      <ParentFormHero />
      <ParentForm />
      <Footer />
    </>
  );
};

export default ParentPageForm;
