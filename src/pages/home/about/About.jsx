import React, { useRef } from "react";
import HeroAbout from "../../../components/about/HeroAbout";
import TeamElina from "../../../components/about/TeamElina";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import pic1 from "../../../images/about/team1.png";
import pic2 from "../../../images/about/team2.png";
import pic3 from "../../../images/about/team3.png";
import mem1 from "../../../images/about/mem1.png";
import mem2 from "../../../images/about/mem2.png";
import mem4 from "../../../images/about/mem4.jpg";
import mem5 from "../../../images/about/mem5.png";
import mem6 from "../../../images/about/mem7.png";
import mem7 from "../../../images/about/mem8.png";
import StoryOfElina from "../../../components/about/StoryOfElina";
import story1 from "../../../images/about/storyofelina/compressed/story (1).jpg";
import story2 from "../../../images/about/storyofelina/compressed/story (2).jpg";
import story3 from "../../../images/about/storyofelina/compressed/story (3).jpg";
import story4 from "../../../images/about/storyofelina/compressed/story (4).jpg";

const teamElinaContent = [
  {
    pic: pic1,
    h1: "Ramalakshmi Kannan",
    p: "(Founder/CEO)",
    des: "Ramalakshmi Kannan is a seasoned special educator and counselor with extensive experience in fostering inclusive environments for neurodiverse individuals. As the co-founder and CEO of Elina, she leads the organization in promoting empathy and inclusion through customized programs for homes, schools, and workplaces.",
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
    p: "(Manager -Intervention Services)",
    des: "Aparna oversees our intervention services with a keen eye for detail and a deep understanding of neurodivergent needs. Her extensive experience as a thought leader at HLC and her role in leading various relationship-building initiatives ensure a pleasant journey for parents and educators. Aparna’s approach efficiently supports each child's needs, creating a collaborative and effective program.",
  },
  {
    pic: mem2,
    h1: "Sumithra Shailesh",
    p: "(Dynamic Special Educator and Consultant)",
    des: "With nearly three decades of experience, Sumithra is a dynamic and hands-on special educator whose rich knowledge greatly enhances our team. As a consultant, she brings invaluable expertise to specific assignments, ensuring that our programs are tailored to meet the unique needs of each child. Sumithra's dedication and comprehensive understanding of special education make her an essential part of our mission to empower children and families.",
  },
  {
    pic: mem4,
    h1: "Malini.R",
    p: "(Intervention Services Navigator)",
    des: "Malini guides families through their journey with compassion and expertise. Her keen observation skills, combined with her knowledge in special education and development, ensure precise assessments and recommendations. Malini makes sure that each family has access to the resources and support they need, helping them navigate the complexities of raising a neurodivergent child.",
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
    des: "Alka drives our social media and marketing efforts, amplifying Elina's mission and message to a broader audience. Her creative strategies and dynamic approach help raise awareness about neurodivergence and effectively promote our programs and initiatives.",
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
