import React, { useState } from "react";
import { useSpring, animated, useScroll } from "react-spring";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const outComesContent = [
  {
    h1: 125,
    p: "Families empowered",
    desc: "Families with personalized guidance and resources",
  },
  {
    h1: 500,
    p: "Lives touched",
    desc: "Parents and children through workshops, consultations, and online resources",
  },
  {
    h1: 36,
    p: "Milestone achieved",
    desc: "Increase in children’s developmental milestones after 6 months",
  },
];

const OutComes = () => {
  const [counterOn, setCounterOn] = useState(false);

  const toggleCounter = (isVisible) => {
    setCounterOn(isVisible);
  };

  return (
    <>
      <div className="outComesBg ">
        <div className="flex flex-col items-center text-center gap-6  py-20 bg-black-bg ">
          <div className="text-5xl md:text-6xl font-bold text-white rounded-full p-4 bg-white bg-opacity-10 animationHero ">
            Out Comes
          </div>
          <div className="md:text-xl text-lg px-5 lg:px-[18%] text-white animationHero">
            Our programs utilize Interventions that are grounded in scientific
            research and are proven to help children and adolescents with mental
            health.
          </div>

          <div className="">
            <ScrollTrigger
              onEnter={() => toggleCounter(true)}
              onExit={() => {
                toggleCounter(false);
              }}
            >
              <div className="flex flex-col flex-wrap lg:flex-row  items-center justify-center  w-full px-[3%]  py-[3%] gap-10 lg:gap-20 ">
                {outComesContent.map((item, index) => (
                  <div
                    key={index}
                    className=" flex flex-col items-center text-white text-center w-full md:w-1/2 lg:w-1/4 h-fit gap-5 lg:gap-10 p-5"
                  >
                    <p className="text-xl font-bold bg-blue-600 bg-opacity-50 px-2 py-2 rounded-full">
                      {item.p}
                    </p>
                    <h1 className="text-6xl lg:text-8xl font-extrabold">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={item.h1}
                          duration={2}
                          delay={0}
                        />
                      )}
                      +
                    </h1>
                    <p className="text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutComes;
