import React from "react";
import sail from "../../images/sail.jpg";
import compass from "../../images/compass2.jpeg";
const ProgramContent = [
  {
    h1: "SAIL",
    p: "Our SAIL program starts off with a thorough assessment to understand the strengths, challenges, and growth areas of each child. This is followed up with personalised recommendations and referrals to suitable resources and programs. The program focuses on enhancing the independence and learning abilities of the child, providing comprehensive support for them to thrive and reach their full potential.",
    src: sail,
  },
  {
    h1: "COMPASS",
    p: "This is an ongoing assessment program which involves continuous monitoring and evaluation of a child's progress. Over the course of this program, we refine intervention plans for the child based on domain-specific assessments and track their development over time. This enables us to address any challenges and make changes to plans such that the child is better benefitted.",
    src: compass,
  },
];

const Programs = () => {
  return (
    <>
      <div className="HeroBg md:px-36 md:py-28">
        <p className="p-5 text-wrap md:px-0 md:pb-6 lg:px-14 lg:pb-10 text-[1rem] md:text-lg font-medium md:font-bold md:text-gray-800">
          Our carefully curated personalized intervention plans and expert
          guidance help parents like you make informed decisions, keeping your
          child's unique needs in mind. To ensure comprehensive support, we take
          insights from therapists, doctors, and educators. Rest assured, we are
          committed to enabling your child to thrive in any environment and live
          up to their potential. There are endless possibilities and a brighter
          future awaiting your child!"
        </p>

        <div className="grid grid-cols-1 gap-16 p-5 md:grid-cols-1 md:gap-2 lg:px-32 lg:gap-20 justify-center sm:grid-cols-2 lg:grid-cols-2">
          {ProgramContent.map((item) => (
            <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white">
              <h1 className="text-3xl text-gray-800 font-black lg:text-3xl p-10">
                {item.h1}
              </h1>
              <img
                className="rounded-2xl w-[300px] h-[200px] object-cover"
                src={item.src}
              ></img>
              <p className="p-10 lg:text-lg text-gray-600">{item.p}</p>
              <button className="flex items-center bg-pink-500 border-pink-500 hover:text-pink-600 p-2 lg:gap-1 rounded-lg mt-auto mb-4 lg:p-1 lg:px-2">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
