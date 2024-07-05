import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ElinaBlog from "../../../components/blog/ElinaBlog";
import pic1 from "../../../images/Schools.jpg";
import BlogHero from "../../../components/blog/BlogHero";

const BlogContent = [
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
];

const Blog = () => {
  return (
    <>
      <NavBar />
      <BlogHero />
      <ElinaBlog BlogContent={BlogContent} />
      <Footer />
    </>
  );
};

export default Blog;
