import React, { useEffect } from "react";
import InternHero from "../../../components/forms/intern/InternHero";
import InternForm from "../../../components/forms/intern/InternForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const InternPageForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InternHero />
      <InternForm />
    </>
  );
};

export default InternPageForm;
