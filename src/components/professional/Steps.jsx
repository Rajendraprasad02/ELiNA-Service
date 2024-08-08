import React from "react";

const stepsContent = [
  {
    h1: "Fill out the registration form",
    p: "Express interest and provide professional details Consultation Meeting",
  },
  {
    h1: "Schedule and attend a consultation",
    p: "Discuss potential roles, contributions, and areas of expertise Choose Collaboration Path",
  },
  {
    h1: "Participate in orientation and training sessions",
    p: "Understand Elina's approach and tools, including the ISMS Engage in Collaboration",
  },
  {
    h1: "Start collaborating on specific assignments",
    p: "Coordinated efforts with other professionals Regular updates and meetings Utilize ISMS Tool",
  },
  {
    h1: "Use the ISMS tool for seamless communication and tracking",
    p: "Ensure consistent and aligned support across all professionals Continuous Professional Development",
  },
  {
    h1: " Access resources and training for ongoing development",
    p: "Stay updated with best practices and new strategies",
  },
];

const Steps = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col items-center justify-center py-[5%]  px-[5%] lg:px-[8%]">
          <h1 className="text-center text-5xl lg:text-7xl font-bold text-blue-600">
            Getting Started is Simple
          </h1>
          <div className="flex items-center ">
            <div className="flex lg:flex-row flex-col w-full gap-5 flex-wrap  justify-center text-center py-10">
              {stepsContent.map((item, index) => (
                <div className="lg:w-[32%] w-full flex flex-col gap-5 bg-blue-600 bg-opacity-10 rounded-3xl p-10">
                  
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
