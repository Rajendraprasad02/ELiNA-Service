import React from "react";
import register from "../../images/school/icons/register.png";
import support from "../../images/school/icons/support.png";
import recommendation from "../../images/school/icons/recommendation.png";
import continues from "../../images/school/icons/continues.png";
import consult from "../../images/school/icons/consult.png";

const stepsContent = [
  {
    img: register,
    head: "Register",
    h1: "Fill out the registration form",
    p: "Express interest and provide basic school information",
  },
  {
    img: consult,
    head: "Consultation Meeting",
    h1: "Schedule and attend a consultation",
    p: "Discuss needs, challenges, and program options",
  },
  {
    img: recommendation,
    head: (
      <span>
        <span className="font-bold text-3xl">SAIL Program:</span>
        <br />
        "Comprehensive assessments and personalized recommendations"
      </span>
    ),
    h1: "Refer students for detailed assessments",
    p: "Receive individualized learning plans and recommendations",
  },
  {
    img: support,
    head: (
      <span>
        <span className="font-bold text-3xl">CoMPASS Program:</span>
        <br />
        "Integrated support and collaboration"
      </span>
    ),
    h1: "Engage in continuous collaboration",
    li: [
      "Central coordination by Elina",
      "Regular monitoring and adjustments",
      "Use of ISMS tool for tracking and communication",
    ],
  },
  {
    img: continues,
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
                  <h1 className="text-3xl  font-bold">
                    <div className="flex justify-center p-3">
                      <img className=" w-16" src={item.img} />
                    </div>
                    {item.head}
                  </h1>
                  <div className="">{item.main && <p>{item.main}</p>}</div>
                  <h1 className="text-2xl font-bold">{item.h1}</h1>

                  {item.li && (
                    <div className="text-left ">
                      {item.li.map((i) => (
                        <li>{i}</li>
                      ))}
                    </div>
                  )}
                </div>
                {!item.li && (
                  <div className="my-auto ">
                    <p className="text-lg">{item.p}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsSchools;
