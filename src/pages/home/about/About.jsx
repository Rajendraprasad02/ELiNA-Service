import React from "react";
import HeroAbout from "../../../components/about/HeroAbout";
import TeamElina from "../../../components/about/TeamElina";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import pic1 from "../../../images/about/team1.png";
import pic2 from "../../../images/about/team2.png";
import pic3 from "../../../images/about/team3.png";

const teamElinaContent = [
  {
    pic: pic1,
    h1: "Ramalakshmi Kannan",
    p: "(Co-founder/CEO)",
  },
  {
    pic: pic2,
    h1: "Naveen Mahesh",
    p: "(Co-founder)",
  },
  {
    pic: pic3,
    h1: "Raaji Naveen",
    p: "(Co-founder)",
  },
];

const teamElinaContent2 = [
  {
    pic: pic1,
    h1: "Ramalakshmi Kannan",
    p: "(Co-founder/CEO)",
  },
  {
    pic: pic2,
    h1: "Naveen Mahesh",
    p: "(Co-founder)",
  },
  {
    pic: pic3,
    h1: "Raaji Naveen",
    p: "(Co-founder)",
  },
];

const About = () => {
  return (
    <>
      <NavBar />
      <HeroAbout />
      <TeamElina
        teamElinaContent={teamElinaContent}
        teamElinaContent2={teamElinaContent2}
      />
      <Footer />
    </>
  );
};

export default About;
