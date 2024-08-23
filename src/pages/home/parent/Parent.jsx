import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ParetnHero from "../../../components/parent/ParetnHero";
import Programs from "../../../components/parent/Programs";
import Cards from "../../../components/parent/Cards";

const Parent = () => {
  return (
    <>
      <ParetnHero />
      <Programs />
      <Cards />
    </>
  );
};

export default Parent;
