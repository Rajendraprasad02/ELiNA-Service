import { computePosition, Tooltip } from "@floating-ui/react";
import React from "react";

const TeamElina = ({ teamElinaContent, teamElinaContent2 }) => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-center text-5xl lg:text-6xl font-black text-blue-700 my-10 lg:m-16">
          Team ELiNA
        </h1>
        <div className="flex flex-wrap justify-center w-[100%]">
          {teamElinaContent.map((item) => (
            <div className="flex flex-col  items-center relative md:w-[33.3%]">
              <img
                className="rounded-full w-[200px] h-[200px] "
                src={item.pic}
              ></img>
              <h1 className="text-center text-lg font-bold">{item.h1}</h1>
              <p className="mx-auto font-medium text-base text-gray-500">
                {item.p}
              </p>
              <div className="absolute opacity-0 ease-in-out delay-150 hover:opacity-100 duration-300">
                <p className=" w-[200px] h-[200px] ease-in-out delay-150 text-xs font-bold text-white text-center p-8 rounded-full hover:bg-black-rgba ">
                  Hai this is {item.h1}, {item.p} of ELiNA Service.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-black text-blue-700 my-10 lg:m-16">
          Member's ELiNA
        </h1>
        <div className="flex justify-center flex-wrap w-[100%]">
          {teamElinaContent2.map((item) => (
            <div className="flex flex-col items-center relative md:w-[33.3%] mb-20">
              <img
                className="flex rounded-full w-[200px] h-[200px]"
                src={item.pic}
              ></img>
              <h1 className="text-center text-lg font-bold">{item.h1}</h1>
              <p className="mx-auto px-10 font-medium text-sm text-center text-gray-500">
                {item.p}
              </p>
              <div className=" absolute opacity-0  ease-in-out delay-150 hover:opacity-100 duration-300">
                <p className=" w-[200px] h-[200px]  ease-in-out delay-150 text-xs font-bold text-white text-center flex items-center rounded-full hover:bg-black-rgba ">
                  Hai this is {item.h1}, {item.p} of ELiNA Service.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamElina;
