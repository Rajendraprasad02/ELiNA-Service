import React, { useState } from "react";
import { useSpring, animated, useScroll } from "react-spring";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const outComesContent = [
  {
    h1: 50,
    p: "Service Provider In Network",
    desc: "We enable communication ion a network of occupation therapist, speech language pathologists, art therapist, psychiatrists, psychologists",
  },
  {
    h1: 50,
    p: "Service Provider In Network",
    desc: "We enableathologists, art therapist, psychiatrists, psychologists",
  },
  {
    h1: 20,
    p: "Service Provider In Network",
    desc: "We enable communication ion a network of occupation therapist, speech language pathologists, art therapist, psychiatrists, psychologists",
  },
  {
    h1: 20,
    p: "Service Provider In Network",
    desc: "We enable communication ion a network of occupation therapist, speech language pathologists, art therapist, psychiatrists, psychologists",
  },
];

const OutComes = () => {
  const [counterOn, setCounterOn] = useState(false);

  const toggleCounter = (isVisible) => {
    setCounterOn(isVisible);
  };

  return (
    <>
      <div className="flex flex-col items-center text-center gap-6  py-20">
        <div className="text-5xl md:text-6xl font-bold text-blue-700 animationHero">
          Out Comes
        </div>
        <div className="md:text-xl text-lg px-5 lg:px-[18%] animationHero">
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
            <div className="flex flex-col flex-wrap lg:flex-row  items-center justify-center  w-full px-[3%]  py-[3%] gap-10 ">
              {outComesContent.map((item, index) => (
                <div
                  key={index}
                  className="animationHero bg-blue-600 flex flex-col justify-center items-center text-white text-center w-full md:w-1/2 lg:w-1/4 h-[300px] gap-5 p-5"
                >
                  <h1 className="text-6xl font-extrabold">
                    {counterOn && (
                      <CountUp start={0} end={item.h1} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <p className="text-xl font-bold">{item.p}</p>
                  <p className="text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
};

export default OutComes;
