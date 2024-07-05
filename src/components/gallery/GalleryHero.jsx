import { ArrowCircleDownIcon, ArrowDownIcon } from "@heroicons/react/outline";
import React from "react";

const GalleryHero = () => {
  return (
    <>
      <div className="IsmsBg lg:h-fit">
        <div className="flex flex-col gap-10 items-center  justify-center pb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center text-blue-700 content-center md:px lg:px-48 mt-[8%] font-black">
            {/* Platform For Delivering Inclusion Services To Special Childcare
            Providers */}
            Dive into our gallery and uncover timeless moments captured in every
            frame.{" "}
          </h1>
          <p className="text-center text-2xl text-gray-800">
            Explore memorable moments captured in our gallery.
          </p>
          <div>
            <ArrowCircleDownIcon className="w-24 animate-bounce text-blue-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryHero;
