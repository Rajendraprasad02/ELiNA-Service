import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import ElinaBlog from "../../../components/blog/ElinaBlog";

import BlogHero from "../../../components/blog/BlogHero";

import pic1 from "../../../images/blog/blogHero/sleep.jpg";
import pic2 from "../../../images/blog/blogHero/brain.jpg";
import pic3 from "../../../images/blog/blogHero/food.jpg";
import pic4 from "../../../images/blog/blogHero/plan.jpg";
import pic5 from "../../../images/blog/blogHero/play.jpg";
import pic6 from "../../../images/blog/blogHero/reading.jpg";
import pic7 from "../../../images/blog/blogHero/motherReading.jpg";
import pic8 from "../../../images/blog/blogHero/familyPlaying.jpg";
import pic9 from "../../../images/blog/blogHero/parenting.jpg";
// import pic9 from "../../../images/blog/blogHero/sleep.jpg"

const BlogContent = [
  {
    id: 1,
    h1: "Nurturing a Lifelong Love for Reading in Children: Embracing Neurodiversity",
    blogImg: pic7,
    des: "In a world inundated with screens and distractions, cultivating a passion for reading in children has become more important than ever. The journey towards creating avid readers begins at a young age and is intricately connected to each child's unique neurodivergence. Understanding the relationship between reading habits and neurodiversity is crucial for parents and caregivers. By acknowledging common patterns and addressing them appropriately, we can pave the way for a fulfilling reading experience that caters to every child's individuality.",
  },
  {
    id: 2,
    h1: "The Crucial Role of Parental Engagement in Early Years: Nurturing Neurodivergent Potential.",
    blogImg: pic8,
    des: "In the fascinating journey of parenthood, there is a remarkable phase that lays the foundation for a child's future: the early years. These formative years are akin to the first strokes on a canvas, shaping the intricate patterns of a child's life. Parental engagement during this period is not just beneficial but pivotal, especially when considering the context of neurodivergence. Neurodivergence, with its array of unique patterns and potentials, adds an extra layer of significance to the role of parents in a child's early development. Let's delve into the reasons why parental engagement is critical in these early years and explore the connection between nurturing developmental milestones and paving the path for future success.",
  },
  {
    id: 3,
    h1: "dst of chaos, there is also opportunity.” - Sun Tzu",
    blogImg: pic1,
    des: "A child in a store aisle, stomping their feet, face red and screaming loudly. People nearby give disapproving looks, parents feel embarrassed, and dealing with the child's frustration seems really hard. But under all these strong feelings, there's an important truth: behavior is a way of talking. This becomes even clearer when we think about neurodivergence – that's when people's brains work in different ways, like with autism or ADHD.",
  },
  {
    id: 4,
    h1: "DEVELOPMENT MILESTONES:CELEBRATION OR CHECKLIST?",
    blogImg: pic4,
    des: "Have you witnessed grandparents excitedly sharing sweet treats to celebrate their grandchild’s grand achievement—turning over for the first time? Did your heart skip a beat when your little one said their first magical words or took their first wobbly steps? These momentous landmarks are expressions of your child’s ongoing learning and development since the moment of birth. While these developmental milestones are surely moments to celebrate for reasons other than scrumptious sweets, they can also be crucial identifiers of your child’s development or, in some cases, a call for support.",
  },
  {
    id: 5,
    h1: "The Power Of Play",
    blogImg: pic5,
    des: "Play is a child's special moment. Play is a precious gift to children allowing them to cultivate skills needed for their bright future. For children, play is essential for their growth, learning, development, and general well-being. They use play as a basic and natural method to freely express themselves, learn new abilities, and make sense of the environment. To them play is more than simply a pastime.",
  },
  {
    id: 6,
    h1: "The Crucial Role of Parental Engagement in Early Years: Nurturing Neurodivergent Potential",
    blogImg: pic9,
    des: "In the fascinating journey of parenthood, there is a remarkable phase that lays the foundation for a child's future: the early years. These formative years are akin to the first strokes on a canvas, shaping the intricate patterns of a child's life. Parental engagement during this period is not just beneficial but pivotal, especially when considering the context of neurodivergence. Neurodivergence, with its array of unique patterns and potentials, adds an extra layer of significance to the role of parents in a child's early development. Let's delve into the reasons why parental engagement is critical in these early years and explore the connection between nurturing developmental milestones and paving the path for future success.",
  },
  {
    id: 7,
    h1: "Nurturing reading habits in children",
    blogImg: pic6,
    des: "In a world taken over by technologies, having a balance is crucial for a healthy life. Especially the balance between technology and reading. As times change, children’s interests change, but if they are exposed to good habits like reading, they would have a good start to a balance with technology.",
  },
  {
    id: 8,
    h1: "Gut-Brain Connection",
    blogImg: pic2,
    des: "Why is the gut known as our second brain? We have more neurotransmitters in the gut than the entire body. And even serotonin is produced in the guts. Improper care can cause an imbalance in serotonin and other neurotransmitters which in turn, significantly impacts mood, sleep and behaviours.",
  },
  {
    id: 9,
    h1: "Recognizing the power of sleep for neurodivergent children and its impact on milestone achievement",
    blogImg: pic1,
    des: "Beyond the textbooks and playground adventures, there's an untapped secret that holds the power to supercharge your child's potential. while we tirelessly champion their growth, let's not forget the unsung hero: sleep. brace yourself to uncover the awe-inspiring connection between rest and reaching milestones, ensuring unstoppable emotional well-being, robust development, and soaring academic triumph",
  },
  {
    id: 10,
    h1: "FOOD AFFECTS NEURODIVERGENCE!!",
    blogImg: pic3,
    des: "The connection between them is not one that can be easily made but it should be one that needs to be acknowledged by parents and adults. We must understand that for children with Neurodiversity children, numerous eating difficulties can exist. It is of utmost importance that children with Neurodiversity develop healthy eating habits. It is the responsibility of parents and caregivers to pay attention to dietary sensitivities, food aversions, allergies, and intolerances.",
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
