import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ElinaBlog from "../../../components/blog/ElinaBlog";
import pic1 from "../../../images/card6.jpg";
import BlogHero from "../../../components/blog/BlogHero";

const BlogContent = [
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
  {
    h1: "The Power Of Play",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Play is a child's special moment. Play is a precious gift to children allowing them to cultivate skills needed for their bright future. For children, play is essential for their growth, learning, development, and general well-being. They use play as a basic and natural method to freely express themselves, learn new abilities, and make sense of the environment. To them play is more than simply a pastime.",
  },
  {
    h1: "The Crucial Role of Parental Engagement in Early Years: Nurturing Neurodivergent Potential",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "In the fascinating journey of parenthood, there is a remarkable phase that lays the foundation for a child's future: the early years. These formative years are akin to the first strokes on a canvas, shaping the intricate patterns of a child's life. Parental engagement during this period is not just beneficial but pivotal, especially when considering the context of neurodivergence. Neurodivergence, with its array of unique patterns and potentials, adds an extra layer of significance to the role of parents in a child's early development. Let's delve into the reasons why parental engagement is critical in these early years and explore the connection between nurturing developmental milestones and paving the path for future success.",
  },
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
  {
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic1,
    title: "WHAT ARE DEVELOPMENTAL MILESTONES, AND WHY ARE THEY IMPORTANT?",
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the",
  },
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
