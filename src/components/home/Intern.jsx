import React from "react";
import Quote from "./Quote";
import Carousel from "../Isms/Carousel";
// import Lottie from "lottie-react";
import internAnimation from "../../images/compressed/hero/intern.jpg";
const CarouselContent = [
  {
    icon: "",
    h1: "Elina's journey has been a guiding and helpful experience throughout theassessment process of my child. It helped me understand the strengths and lacking areas of development of my child. Systematic and simple assessment activities were given to my child to assess the child's level of development in every areas of development. We had done SAIL's assessment activities in our home without much difficulty. Interactions with the Elina team was always been seemless.",
    p: "- Sugitha Vidyasagar, mother of Vidyuth",
  },
  {
    icon: "",
    h1: "Hi all, I just wanted to share my experience with Elina and how it helped me to figure out which method of learning helps my son to move forward. Their assessment pattern was very elaborate which covers all the skills which I've never experienced anywhere. As per their advice I've changed his mode of learning and I feel it's helping him a lot.The SAIL program and it's detailed report was very helpful. Thank you so much to the team for their constant support throughout the program and guiding me in the proper streamline.",
    p: "Priyadarshini, Mother of Pranav Sathya.",
  },
  {
    icon: "",
    h1: "App is very good. It is definitely a useful and quick learning guide for kids which we can use at any point in time when we don't have study books. Anywhere we can operate and kids will enjoy the learning.",
    p: "Parent of a 6 year old Kid with Autism.",
  },
];
const Intern = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col md:flex-row items-center lg:gap-10 py-[10%] md:px-[10%] lg:px-[10%] md:py-[5%] lg:py-[8%]">
          <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-5 px-[]">
            <h1 className="text-5xl text-blue-700 md:text-left text-center font-semibold">
              Join Us As An <span className="font-black">INTERN </span>
              Now!
            </h1>
            <p className="md:text-justify text-center font-semibold">
              Prometeo Talent excels in connecting companies with exceptional
              tech and engineering professionals. Our HR and recruitment
              services include targeted recruiting, efficient staffing, and
              flexible outsourcing solutions. Partner with us to enhance your
              global workforce and drive business success.
            </p>
            <a
              className="flex lg:justify-start justify-center"
              href="/#/intern-form"
            >
              <button className="w-[80%] md:w-1/2 lg:text-xl bg-blue-700 text-white border-blue-700 hover:text-blue-700 hover:border-blue-700 hover:bg-transparent px-3 py-2 rounded-full">
                Join Now!
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-0">
            <img className="rounded-2xl" src={internAnimation} />
            {/* <Lottie animationData={internAnimation}></Lottie> */}
          </div>
        </div>
        <Carousel CarouselContent={CarouselContent} />
        <Quote />
      </div>
    </>
  );
};

export default Intern;
