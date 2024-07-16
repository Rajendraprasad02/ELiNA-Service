import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import GetStartedForm from "../../../components/forms/getStarted/GetStartedForm";
import FormGetStart from "../../../components/forms/getStarted/FormGetStart";
import Test from "../../../components/forms/getStarted/Test";
const GetStarted = () => {
  return (
    <>
      <NavBar />
      <GetStartedForm />
      <Test />
      <FormGetStart />
      <Footer />
    </>
  );
};

export default GetStarted;
