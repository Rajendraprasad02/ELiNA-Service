import React from "react";
import InternHero from "../../../components/forms/intern/InternHero";
import InternForm from "../../../components/forms/intern/InternForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const InternPageForm = () => {
  return (
    <>
      <NavBar />
      <InternHero />
      <InternForm />
      <Footer />
    </>
  );
};

export default InternPageForm;
