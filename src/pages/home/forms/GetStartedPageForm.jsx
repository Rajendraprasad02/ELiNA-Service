import React from "react";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import GetStartedHero from "../../../components/forms/getStarted/GetStartedHero";
import GetStartedForm from "../../../components/forms/getStarted/GetStartedForm";

const GetStartedPageForm = () => {
  return (
    <>
      <NavBar />
      <GetStartedHero />
      <GetStartedForm />
      <Footer />
    </>
  );
};

export default GetStartedPageForm;
