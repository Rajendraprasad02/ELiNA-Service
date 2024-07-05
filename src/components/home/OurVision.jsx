import React from "react";
import vision from "../../images/RealVision.jpg";
import mission from "../../images/OurMission.png";

const OurVisionContent = [
  {
    h1: "Our Vision",
    p: "To co-create a more empathetic and inclusive society while embracing neurodiversity.",
    photo: vision,
    leftImg: false,
  },
  {
    h1: "Our Mission",
    p: "To empower parents of children with neurodiverse needs, build a community of professionals to empower parents, and to provide structured holistic support to schools for becoming more inclusive.",
    photo: mission,
    leftImg: true,
  },
];

const OurVision = () => {
  const { innerWidth } = window;
  return (
    <>
      <div className="flex justify-center md:HeroBg">
        <h1 className="text-center text-5xl lg:text-6xl font-black text-indigo-600 animationHero p-5">
          Together For A Purpose
        </h1>
      </div>
      {OurVisionContent.map((item) => (
        <div className="">
          {item.leftImg && innerWidth > 430 ? (
            <div class=" flex flex-col items-center justify-between md:flex-row md:p-10 lg:w-[100%] lg:h-[30%] HeroBg2 ">
              <div className="md:w-[50%] animationHero flex justify-center">
                <img
                  class="object-cover w-[400px] rounded-3xl h-96 md:h-auto md:w-48  lg:h-[350px] lg:w-[600px]"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div class="animationHero flex flex-col justify-around p-4 leading-normal md:w-[50%] lg:pr-[15%]">
                <h1 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.h1}
                </h1>
                <p class="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
                  {item.p}
                </p>
                {/* <button className="">Learn more</button> */}
              </div>
            </div>
          ) : (
            <div class=" flex flex-col items-center justify-around md:flex-row md:p-10 lg:w-[100%] lg:h-[30%] HeroBg">
              <div class="animationHero flex flex-col justify-between p-4 leading-normal md:w-[50%] lg:pl-[15%]">
                <h1 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.h1}
                </h1>
                <p class="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
                  {item.p}
                </p>
                {/* <button className="">Learn more</button> */}
              </div>
              <div className="md:w-[50%] animationHero flex justify-center">
                <img
                  class="object-cover w-[400px] rounded-2xl h-96 md:h-auto md:w-48  lg:h-[350px] lg:w-[600px]"
                  src={item.photo}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default OurVision;
