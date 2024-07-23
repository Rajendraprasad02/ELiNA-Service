import React from "react";

const stepsContent = [
  {
    h1: "Fill Out the Intake Form",
    p: "Download, complete, and send in your intake forms by email or mail.",
  },
  {
    h1: "We Prepare Your Therapy Team",
    p: "The Hearts and Hands team plans for your child to begin therapy, verifies insurance benefits, gathers your therapy team, and schedules appointments.",
  },
  {
    h1: "Find the Support Your Child Deserves",
    p: " Watch your child grow and gain greater independence in a welcoming community.",
  },
];

const Steps = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col items-center justify-center py-[10%] px-[8%]">
          <h1 className="text-center text-7xl font-bold text-blue-600">
            Getting Started is Simple
          </h1>
          <div className="flex items-center py-[6%]">
            <div className="flex gap-28  justify-end text-center py-10">
              {stepsContent.map((item, index) => (
                <div className="w-1/2 flex flex-col gap-5 bg-blue-300 rounded-3xl p-10">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-black">{index + 1}</h1>
                    <h1 className="text-2xl font-bold">{item.h1}</h1>
                  </div>

                  <div className="my-auto">
                    <p className="text-lg">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
