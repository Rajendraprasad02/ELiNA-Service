import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

const ElinaBlog = ({ BlogContent }) => {
  return (
    <>
      <div className="grid  grid-cols-1 gap-16 p-5 md:grid-cols-1 md:gap-2 lg:px-10 lg:gap-5 items-center justify-center sm:grid-cols-2 lg:grid-cols-3">
        {BlogContent.map((item) => (
          <div className="flex flex-col items-center drop-shadow-xl rounded-3xl bg-white lg:w-[80%] lg:h-auto mx-auto">
            <h1 className="text-xl text-gray-800 text-center font-black lg:text-xl p-10">
              {item.h1}
            </h1>
            <img
              className="w-[60%] h-auto mt-auto lg:w-fit  lg:h-fit rounded-3xl"
              src={item.blogImg}
            ></img>
            <p className="p-10 lg:text-base  text-gray-600">
              {item.des.slice(0, 200) + "..."}
            </p>
            <button className="flex  items-center bg-pink-500 hover:text-pink-600 border-pink-500 p-2 lg:gap-1 rounded-xl mt-auto mb-4 lg:p-2 lg:px-3 lg:mb-6">
              Read more
              <ArrowRightIcon className="w-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ElinaBlog;
