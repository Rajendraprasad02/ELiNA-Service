import React from "react";
import card1 from "../../images/professional/card1.png";
import card2 from "../../images/professional/card2.png";
import card3 from "../../images/professional/card3.png";
import card4 from "../../images/professional/card4.png";

const weHelpKidContent = [
  {
    h1: "Physical Therapy",
    decs: "Mobility-focused treatment to increase range of motion, enhance reflexes, and improve muscle tone and strength.",
    src: card1,
  },
  {
    h1: "Occupational Therapy",
    decs: "Play-oriented therapy to work on developmental skills and become more independent–now and as an adult.",
    src: card2,
  },
  {
    h1: "Speech Therapy",
    decs: "A whole-child method to improve communication skills through learning and practicing critical skills.",
    src: card3,
  },
  {
    h1: "ABA Therapy",
    decs: "A targeted approach to help children with Autism reach social, communication, and behavioral goals.",
    src: card4,
  },
];

const WeHelpKids = () => {
  return (
    <>
      <div className="HeroBg">
        <div className="flex flex-col items-center ">
          <h1 className="text-center text-3xl lg:text-5xl font-bold text-blue-700 w-full lg:w-1/2 p-10">
            We Help Special Kiddos Thrive and Reach Their Maximum Potential
          </h1>
          <div className="grid grid-flow-row lg:grid-cols-2 gap-16 px:[5%] lg:px-[20%]">
            {weHelpKidContent.map((item) => (
              <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white w-fit">
                <img className="w-[400px] rounded-3xl" src={item.src}></img>
                <p className=" px-10 py-5 text-2xl text-gray-800 font-black ">
                  {item.h1}
                </p>
                <p className="lg:text-base p-5 text-center  text-gray-600">
                  {item.decs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeHelpKids;
