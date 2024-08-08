import React from "react";
import sail from "../../images/sail.jpg";
import compass from "../../images/compass2.jpeg";
const ProgramContent = [
  {
    h1: "SAIL",
    p1: (
      <span>
        <span className="text-pink-600 font-black text-lg">S</span>etting up{" "}
        <span className="text-pink-600 font-black text-lg">A</span>ccess for{" "}
        <span className="text-pink-600 font-black text-lg">I</span>ndependent{" "}
        <span className="text-pink-600 font-black text-lg">L</span>earning
      </span>
    ),
    p: (
      <span>
        The SAIL Program is a short-term process lasting about two weeks that{" "}
        <br />
        involves:
      </span>
    ),
    li: [
      <span>
        <span className="font-bold text-pink-600">
          Comprehensive Assessments:{" "}
        </span>
        Understand your child’s unique strengths and challenges through thorough
        evaluations.
      </span>,
      <span>
        <span className="font-bold text-pink-600">
          Personalized Recommendations:{" "}
        </span>
        Receive expert guidance on managing behaviors, enhancing learning, and
        fostering social skills.
      </span>,
    ],
    src: sail,
  },
  {
    h1: "COMPASS",
    p1: (
      <span>
        <span className="text-lg font-black text-pink-600">CO</span>ntinuous{" "}
        <span className="text-lg font-black text-pink-600">M</span>apping of{" "}
        <span className="text-lg font-black text-pink-600">P</span>rogress{" "}
        <span className="text-lg font-black text-pink-600">A</span>bilities{" "}
        <span className="text-lg font-black text-pink-600">S</span>trengths and{" "}
        <span className="text-lg font-black text-pink-600">S</span>kills
      </span>
    ),
    p: "The CoMPASS Program is a longer-term initiative that spans six months, focusing on:",
    li: [
      <span>
        <span className="font-bold text-pink-600">Collaborative Support: </span>
        Bringing together a team of professionals, including educators,
        therapists, and doctors, to create a personalized support plan for your
        child.
      </span>,
      <span>
        <span className="font-bold text-pink-600">Continuous Monitoring: </span>
        Regularly assessing and adjusting interventions to ensure ongoing
        progress and development.
      </span>,
      <span>
        <span className="font-bold text-pink-600">Empowering Parents: </span>
        Providing you with the knowledge and tools to support your child's
        growth, helping them thrive both at home and beyond.
      </span>,
    ],
    src: compass,
  },
];

const Programs = () => {
  return (
    <>
      <div className="HeroBg md:px-36 py-28 ">
        <h1 className="flex justify-center items-center text-5xl font-black  text-pink-600">
          Welcome to Elina
        </h1>
        <p className="md:p-5 py-10 px-2 text-wrap text-center md:px-0 md:pb-6 lg:px-14 lg:pb-10 text-[1rem] md:text-lg font-medium md:font-bold md:text-gray-800 animationHero">
          At Elina, we understand that parenting a child with special needs can
          be a challenging yet rewarding journey. Our mission is to stand by you
          every step of the way, providing the support and guidance you need to
          help your child thrive. We offer a range of personalized programs and
          resources designed to empower you and your family.
        </p>

        <div className="grid grid-cols-1 gap-16 p-5 md:grid-cols-1 md:gap-2 lg:px-32 lg:gap-20 justify-center sm:grid-cols-2 lg:grid-cols-2">
          {ProgramContent.map((item) => (
            <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white ">
              <h1 className="text-3xl text-gray-800 font-black lg:text-3xl lg:px-10 lg:pt-10">
                {item.h1}
              </h1>
              <p className="text-center px-20 pb-10 font-bold">{item.p1}</p>
              <img
                className="rounded-2xl w-[300px] h-[200px] object-cover"
                src={item.src}
              ></img>
              <p className="p-10 lg:text-lg text-gray-800 font-semibold">
                {item.p}
              </p>
              {item.li.map((i) => (
                <div className=" ">
                  <li className="px-10 pb-5 lg:text-lg text-gray-600">{i}</li>
                </div>
              ))}
              {/* <button className="flex items-center bg-pink-500 border-pink-500 hover:text-pink-600 p-2 lg:gap-1 rounded-lg mt-auto mb-4 lg:p-1 lg:px-2">
                Read more
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
