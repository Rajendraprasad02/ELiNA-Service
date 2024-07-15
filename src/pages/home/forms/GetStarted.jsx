import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import GetStartedForm from "../../../components/forms/getStarted/GetStartedForm";
import FormGetStart from "../../../components/forms/getStarted/FormGetStart";
import Test from "../../../components/forms/Text";
const GetStarted = () => {
  return (
    <>
      <NavBar />
      {/* <Test /> */}
      <GetStartedForm />
      <FormGetStart />
      <Footer />
    </>
  );
};

export default GetStarted;
