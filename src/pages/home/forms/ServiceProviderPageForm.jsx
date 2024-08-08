import React, { useEffect } from "react";
import ServiceProviderHero from "../../../components/forms/serviceProvider/ServiceProviderHero";
import ServiceProviderForm from "../../../components/forms/serviceProvider/ServiceProviderForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const ServiceProviderPageForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ServiceProviderHero />
      <ServiceProviderForm />
    </>
  );
};

export default ServiceProviderPageForm;
