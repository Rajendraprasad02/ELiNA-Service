import React, { useRef } from "react";
import HeroAbout from "../../../components/about/HeroAbout";
import TeamElina from "../../../components/about/TeamElina";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import pic2 from "../../../images/about/team2.png";
import pic3 from "../../../images/about/team3.png";
import mem1 from "../../../images/about/mem1.png";
import mem2 from "../../../images/about/mem2.png";
import mem4 from "../../../images/about/mem4.jpg";
import mem5 from "../../../images/about/mem5.png";
import mem6 from "../../../images/about/mem7.jpg";
import mem7 from "../../../images/about/mem8.png";
import StoryOfElina from "../../../components/about/StoryOfElina";
import story1 from "../../../images/about/storyofelina/compressed/story (1).jpg";
import story2 from "../../../images/about/storyofelina/compressed/story (2).jpg";
import story3 from "../../../images/about/storyofelina/compressed/story (3).jpg";
import story4 from "../../../images/about/storyofelina/compressed/story (4).jpg";

const teamElinaContent = [
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
    p: "(Manager -Intervention Services)",
    des: "Aparna, with her extensive experience at HLC, expertly oversees our intervention services. Her deep understanding of neurodivergent needs and relationship-building skills ensure a smooth and collaborative experience for parents and educators, supporting each child's unique needs effectively.",
  },
  {
    pic: mem2,
    h1: "Sumithra Shailesh",
    p: "(Dynamic Special Educator and Consultant)",
    des: "With nearly three decades of experience, Sumithra is a dynamic special educator whose expertise significantly enriches our team. As a consultant, she tailors programs to each child's unique needs, making her an essential contributor to our mission of empowering children and families.",
  },
  {
    pic: mem4,
    h1: "Malini.R",
    p: "(Intervention Services Navigator)",
    des: "Malini provides compassionate guidance to families with her expertise in special education and development. Her keen observation ensures accurate assessments and recommendations, while her support helps families navigate the complexities of raising a neurodivergent child.",
  },
  {
    pic: mem5,
    h1: "Sowmya Raghupathy",
    p: "( Experienced Special Educator and Consultant)",
    des: "Sowmya Raghupathy brings over a decade of experience as a special educator, having worked with various organizations.",
  },
  {
    pic: mem6,
    h1: "Alka Dalmia",
    p: "(Social Media and Marketing Lead)",
    des: "Alka spearheads our social media and marketing, using creative strategies to amplify Elina's mission. Her dynamic approach raises awareness about neurodivergence and promotes our programs effectively.",
  },
  {
    pic: mem7,
    h1: "Narmatha Vinodh",
    p: "(Digital Transformation Lead)",
    des: "Narmatha leads our digital transformation initiatives, ensuring that our technology solutions are cutting-edge and user-friendly. With expertise in physiotherapy and a keen interest in digital systems, Narmatha enhances our ability to provide seamless and accessible support to families and professionals alike.",
  },
];

const storyOfElina = [
  {
    src: story4,
    p: "Elina emerged from a decade of extensive knowledge gathering and real-life experiences within HLC, inspired by the visionary leadership of Mr. Naveen Mahesh and Ms. Padma Naveen, and driven by Ramalakshmi's passion. Officially established as a separate organization in 2020, Elina is dedicated to supporting neurodivergent children—those with autism, ADHD, and learning disabilities—and their families.",
  },
  {
    src: story3,
    p: "Ramalakshmi identified two critical gaps in the intervention system: the lack of communication between professionals and the lack of clarity among parents. To bridge these gaps, she founded an advisory and referral center, which quickly became a beacon of hope for families navigating the challenges of raising neurodivergent children. The center's impact grew as it conducted assessments and training programs, providing educators and parents with strategies to create inclusive environments.",
    ImgDirection: "left",
  },
  {
    src: story2,
    p: "The COVID-19 pandemic highlighted the power of technology to overcome physical barriers. Elina leveraged this potential, unveiling groundbreaking programs like SAIL and CoMPASS, designed to offer comprehensive support through technology-driven assessments and personalized intervention plans. Collaborations with schools, therapy centers, and pediatric units, alongside the development of a custom-designed Intervention Services Management System (ISMS), led to the creation of a web portal and boosted their social media presence.",
  },
  {
    src: story1,
    p: "Achieving legal status as Vimarshi Solutions Private Limited solidified Elina's commitment to fostering a more inclusive society. Today, Elina continues to empower neurodivergent children and their families, ensuring every child can reach their full potential in a world where neurodivergence is celebrated.",
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
