import React from "react";

const HowItWorks = ({ HowItWorksContent }) => {
  return (
    <>
      <p className="animationHero flex justify-center mt-28 text-5xl lg:text-6xl font-black text-indigo-600">
        How It Works?
      </p>
      {HowItWorksContent.map((item, index) => (
        <div
          key={index}
          className={`lg:p-20 my-20 flex flex-col lg:flex-row ${
            item.ImgDirection === "left" ? "" : "lg:flex-row-reverse"
          } ${
            item.ImgDirection === "left" ? "HowItWorksPink" : "HowItWorksBlue"
          } items-center lg:items-start justify-center lg:justify-start`}
        >
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              className="object-cover w-[400px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[600px] lg:h-[400px] lg:p-5"
              src={item.video}
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 px-5 md:px-[15%] lg:px-5 flex flex-col justify-center lg:justify-start items-start ">
            <h1 className="font-bold text-xl md:text-3xl lg:text-4xl p-4 md:p-0 lg:py-4">
              {item.h1}
            </h1>
            <a className="list-decimal pl-4">
              {item.li.map((listItem, liIndex) => (
                <li
                  key={liIndex}
                  className="font-normal text-base md:text-lg lg:text-xl py-2"
                >
                  {listItem}
                </li>
              ))}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default HowItWorks;
