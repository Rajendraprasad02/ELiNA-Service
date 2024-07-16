import React from "react";
import ServiceProviderHero from "../../../components/forms/serviceProvider/ServiceProviderHero";
import ServiceProviderForm from "../../../components/forms/serviceProvider/ServiceProviderForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const ServiceProviderPageForm = () => {
  return (
    <>
      <NavBar />
      <ServiceProviderHero />
      <ServiceProviderForm />
      <Footer />
    </>
  );
};

export default ServiceProviderPageForm;
