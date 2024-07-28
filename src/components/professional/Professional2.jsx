import React from "react";
// import professional2 from "../../../src/images/professional/professional2.jpg";
import professional2 from "../../../src/images/professional/professionalCompressed/professional2-min.jpg";

const professionalLiContent = [
  {
    li: "Physical Therapy",
  },
  {
    li: "Occupational Therapy",
  },
  {
    li: "Speech Therapy",
  },
  {
    li: "ABA Therapy",
  },
];

const Professional2 = () => {
  return (
    <>
      <div className="HeroBg">
        <div className="flex flex-col lg:flex-row items-center justify-center p-5 lg:p-20">
          <div className="flex flex-col  w-full lg:w-1/2 gap-6">
            <h1 className="font-black text-4xl lg:text-6xl text-blue-700">
              How to Help the Children Who Deserve Your Assistance{" "}
            </h1>
            <p className="text-base">
              Hearts and Hands Therapy offers special needs therapy in Georgia
              and Massachusetts.
            </p>
            <div>
              <ul className="grid grid-cols-2 gap-5 w-full lg:w-[80%]">
                {professionalLiContent.map((item) => (
                  <li className="text-xl font-bold">{item.li}</li>
                ))}
              </ul>
            </div>
            <button className="w-1/2 py-3 rounded-2xl text-sm lg:text-lg bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-700">
              Join our Therapy Team
            </button>
          </div>
          <div className="flex w-full lg:w-1/2 py-5">
            <img className="rounded-3xl" src={professional2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Professional2;
