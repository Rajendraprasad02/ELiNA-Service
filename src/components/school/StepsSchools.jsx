import React from "react";

const stepsContent = [
  {
    head: "Register",
    h1: "Fill out the registration form",
    p: "Express interest and provide basic school information",
  },
  {
    head: "Consultation Meeting",
    h1: "Schedule and attend a consultation",
    p: "Discuss needs, challenges, and program options",
  },
  {
    head: <span className="font-bold">SAIL Program:</span>,
    main: "Comprehensive assessments and personalized recommendations",
    h1: "Refer students for detailed assessments",
    p: "Receive individualized learning plans and recommendations",
  },
  {
    head: <span className="font-bold">CoMPASS Program:</span>,
    main: "Integrated support and collaboration",
    h1: "Engage in continuous collaboration",
    li: [
      "Central coordination by Elina",
      "Regular monitoring and adjustments",
      "Use of ISMS tool for tracking and communication",
    ],
  },
  {
    head: "Continuous Support",
    h1: " Maintain communication with Elina",
    p: "Ensure ongoing student development and support",
  },
];

const StepsSchools = () => {
  return (
    <>
      <div className="HeroBg2">
        <div className="flex flex-col items-center justify-center pt-[10%] pb-[5%] px-[5%] lg:px-[8%]">
          <h1 className="text-center text-5xl lg:text-7xl font-bold text-blue-600">
            Getting Started is Simple
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex lg:flex-row flex-col w-[90%] gap-5 flex-wrap  justify-center text-center ">
            {stepsContent?.map((item, index) => (
              <div className="lg:w-[32%] w-full flex flex-col gap-5 bg-blue-600 bg-opacity-10 rounded-3xl p-10">
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl font-bold">
                    {index + 1 + ". "}
                    {item.head}
                  </h1>
                  <div className="">{item.main && <p>{item.main}</p>}</div>
                  <h1 className="text-2xl font-bold">{item.h1}</h1>

                  {item.li && (
                    <div className="">
                      {item.li.map((i) => (
                        <li>{i}</li>
                      ))}
                    </div>
                  )}
                </div>
                <div className="my-auto">
                  <p className="text-lg">{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsSchools;
