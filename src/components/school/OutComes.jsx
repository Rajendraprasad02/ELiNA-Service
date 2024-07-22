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
];

const OutComes = () => {
  const [counterOn, setCounterOn] = useState(false);

  const toggleCounter = (isVisible) => {
    setCounterOn(isVisible);
  };

  return (
    <>
      <div className="flex flex-col items-center text-center gap-6 py-[4%]">
        <div className="text-5xl font-bold text-blue-700">Out comes</div>
        <div className="text-lg px-5 lg:px-[16%]">
          Our programs utilize Interventions that are grounded in scientific
          research and are proven to help children and adolescents with mental
          health.
        </div>

        <div className="flex flex-col lg:flex-row  items-center justify-center  lg:w-full w-full px-[5%] py-[3%] gap-10 lg:gap-[3%]">
          {outComesContent.map((item, index) => (
            <div
              key={index}
              className="bg-blue-600 flex flex-col justify-center items-center text-white text-center w-full md:w-1/2 h-[300px] gap-5 p-5"
            >
              <ScrollTrigger onEnter={() => toggleCounter(true)}>
                <h1 className="text-6xl font-extrabold">
                  {counterOn && (
                    <CountUp start={0} end={item.h1} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </ScrollTrigger>
              <p className="text-xl font-bold">{item.p}</p>
              <p className="text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OutComes;
