import React, { useEffect } from "react";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import GetStartedHero from "../../../components/forms/getStarted/GetStartedHero";
import GetStartedForm from "../../../components/forms/getStarted/GetStartedForm";

const GetStartedPageForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GetStartedHero />
      <GetStartedForm />
    </>
  );
};

export default GetStartedPageForm;
