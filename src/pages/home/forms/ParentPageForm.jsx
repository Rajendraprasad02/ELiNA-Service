import React, { useEffect } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ParentFormHero from "../../../components/forms/parent/ParentFormHero";
import ParentForm from "../../../components/forms/parent/ParentForm";
import Test from "../../../components/forms/parent/Test";
const ParentPageForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ParentFormHero />
      <Test />
      <ParentForm />
    </>
  );
};

export default ParentPageForm;
