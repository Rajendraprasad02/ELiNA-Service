import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import DatePicker from "react-datepicker";

const ElinaBlog = ({ BlogContent }) => {
  return (
    <>
      <div className="grid grid-cols-3 p-10">
        {BlogContent.map((item, index) => (
          <div key={index} className="p-10 flex flex-col justify-between ">
            <div className="px-4">
              <img
                className="w-full rounded-xl h-[230px]"
                src={item.blogImg}
                alt={item.h1}
              />
            </div>
            <div className="h-full ">
              <div className="p-4 flex flex-col gap-8 ">
                <div className="">
                  <p className="text-gray-500 text-sm">14 Jun 2024</p>
                  <h1 className="font-black text-lg mt-2">{item.h1}</h1>
                  <p className="text-gray-800 font-normal mt-2">
                    {item.des.slice(0, 200) + "..."}
                  </p>
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
              <p className="items-center">
                <ArrowRightIcon className="w-4 text-blue-800" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ElinaBlog;
