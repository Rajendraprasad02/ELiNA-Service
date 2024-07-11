import React from "react";
import HeroAbout from "../../../components/about/HeroAbout";
import TeamElina from "../../../components/about/TeamElina";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import pic1 from "../../../images/about/team1.png";
import pic2 from "../../../images/about/team2.png";
import pic3 from "../../../images/about/team3.png";
import mem1 from "../../../images/about/mem1.png";
import mem2 from "../../../images/about/mem2.png";
import mem3 from "../../../images/about/mem3.png";
import mem4 from "../../../images/about/mem4.png";
import mem5 from "../../../images/about/mem5.png";
import mem6 from "../../../images/about/mem6.png";
import mem7 from "../../../images/about/mem7.png";
import mem8 from "../../../images/about/mem8.png";
import StoryOfElina from "../../../components/about/StoryOfElina";
import img1 from "../../../images/gallery/office/IMG20240412111708.jpg";

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
    pic: mem1,
    h1: "Aparna RaviKannan",
    p: "(Program Manager -Intervention Services)",
  },
  {
    pic: mem2,
    h1: "Sumithra Shailesh",
    p: "(Care Navigator/Outreach and Enablement Navigator)",
  },
  {
    pic: mem3,
    h1: "Krishna Kumari",
    p: "(Program Manager- Enablement Services)",
  },
  {
    pic: mem4,
    h1: "Malini.R",
    p: "(Sail and Compass Navigator/Program Analyst)",
  },
  {
    pic: mem5,
    h1: "Sowmya Ragupathy",
    p: "(Sail and Compass Navigator)",
  },
  {
    pic: mem6,
    h1: "K.B.Sukanya",
    p: "(Program Manager- Enablement Services)",
  },
  {
    pic: mem7,
    h1: "Alka Dalmia",
    p: "(Social Media Innovator)",
  },
  {
    pic: mem8,
    h1: "Narmatha Vinodh",
    p: "(Digital Transformations Lead)",
  },
];

const storyOfElina = [
  {
    src: img1,
    p: "I'm Sadia, and I started Pick Up Limes sometime around 2014 when I was making the transition to a vegan lifestyle. I had just graduated from university, and was working as a dietitian at a local hospital in Vancouver, Canada. I started to post recipes as a hobby, and wasn't sharing what I made with anyone aside from my own family.",
  },
  {
    src: img1,
    p: "I'm Sadia, and I started Pick Up Limes sometime around 2014 when I was making the transition to a vegan lifestyle. I had just graduated from university, and was working as a dietitian at a local hospital in Vancouver, Canada. I started to post recipes as a hobby, and wasn't sharing what I made with anyone aside from my own family.",
    ImgDirection: "left",
  },
];

const About = () => {
  return (
    <>
      <NavBar />
      <HeroAbout />
      <StoryOfElina storyOfElina={storyOfElina} />
      <TeamElina
        teamElinaContent={teamElinaContent}
        teamElinaContent2={teamElinaContent2}
      />
      <Footer />
    </>
  );
};

export default About;
