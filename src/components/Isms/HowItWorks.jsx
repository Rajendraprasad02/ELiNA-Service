import React from "react";

const HowItWorks = ({ HowItWorksContent }) => {
  return (
    <>
      <p className="animationHero  flex justify-center mt-28  text-5xl lg:text-6xl font-black text-indigo-600">
        How It Works?
      </p>
      {HowItWorksContent.map((item) => (
        <div
          className={` my-20 lg:my-0 lg:h-screen flex flex-col lg:flex-row ${
            item.ImgDirection === "left" ? "" : "lg:flex-row-reverse"
          } justify-center items-center ${
            item.ImgDirection === "left" ? "HowItWorksPink" : "HowItWorksBlue"
          }`}
        >
          <div className="lg:w-1/2">
            <img
              className={`${
                item.ImgDirection === "left" ? "leftToRight" : "rightToLeft"
              } object-cover  w-[350px] h-[250px] md:w-[573px] md:h-[326px] lg:mx-auto`} //
              src={item.video}
            />
          </div>
          <div
            className={`${
              item.ImgDirection === "left" ? "rightToLeft" : "leftToRight"
            } pl-[10%] w-full lg:w-1/2 lg:mx-auto`} //
          >
            <h1 className="font-black text-xl md:text-3xl lg:text-4xl py-6">
              {item.h1}
            </h1>
            <ol className="list-decimal lg:pl-4">
              {item.li.map((items) => (
                <li className="font-medium text-base md:text-lg lg:text-xl">
                  {items}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default HowItWorks;
