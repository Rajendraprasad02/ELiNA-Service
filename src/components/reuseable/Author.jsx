import { UserCircleIcon } from "@heroicons/react/outline";
import React from "react";

const Author = () => {
  return (
    <>
      <div className=" group absolute inline-block left-[60%] top-[30%] md:left-[80%] md:top-[30%] lg:left-[80%] lg:top-[40%]">
        <p className="font-black text-2xl">
          <div popovertarget="popup" className="">
            <UserCircleIcon className="w-10 animate-pulse" />
          </div>
          <p className="text-xl invisible items-center group-hover:visible opacity-0 group-hover:opacity-100 transition absolute bottom-full left-5  transform -translate-x-1/2 mt-2 whitespace-nowrap bg-black text-white p-3 rounded-md">
            Author name
          </p>
        </p>
      </div>
    </>
  );
};

export default Author;
