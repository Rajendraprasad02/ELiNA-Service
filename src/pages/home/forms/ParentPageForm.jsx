import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ParentFormHero from "../../../components/forms/parent/ParentFormHero";
import ParentForm from "../../../components/forms/parent/ParentForm";
import Test from "../../../components/forms/parent/Test";
const ParentPageForm = () => {
  return (
    <>
      <NavBar />
      <ParentFormHero />
      <Test />
      <ParentForm />
      <Footer />
    </>
  );
};

export default ParentPageForm;
