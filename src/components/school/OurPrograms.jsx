import React from "react";
import img from "../../images/parent/sailprocess.jpg";
import img2 from "../../images/parent/sail.jpg";
import CareGivers from "./CareGivers";
import OutComes from "./OutComes";

const schoolHeroContent = [
  {
    h1: "Sail",
    src: img,
    P: "content",
    href: "",
  },
  {
    h1: "vision",
    src: img2,
    P: "content",
    href: "",
  },
  {
    h1: "vision",
    src: img,
    P: "content",
    href: "",
  },
];
const OurPrograms = () => {
  return (
    <>
      <div className="HeroBg">
        <h1 className=" text-center  text-5xl lg:text-6xl font-black text-blue-600 animationHero p-5">
          Our Programs
        </h1>
        <div className="grid grid-flow-row lg:grid-cols-3 md:px-[20%] lg:px-[5%] md:py-[3%]">
          {schoolHeroContent.map((item, index) => (
            <div
              key={index}
              className="p-5 lg:p-10 flex flex-col justify-between animationHero"
            >
              <div className="px-4">
                <img
                  className="w-full rounded-xl h-[230px] object-cover"
                  src={item.src}
                  alt={item.h1}
                />
              </div>
              <div className="h-full ">
                <div className="p-4 flex flex-col gap-8 ">
                  <div className="">
                    <p className="text-gray-500 text-sm">14 Jun 2024</p>
                    <h1 className="font-black text-lg mt-2">{item.h1}</h1>
                    <p className="text-gray-800 font-normal mt-2">{item.des}</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pl-2 flex items-center">
                <a
                  className="cursor-pointer px-2 py-1 self-end font-black text-blue-800"
                  href={`/blog/mainblog/${index}`}
                >
                  Learn more
                </a>
                <p className="items-center"></p>
              </div>
            </div>
          ))}
        </div>
        <CareGivers />
        <OutComes />
      </div>
    </>
  );
};

export default OurPrograms;
