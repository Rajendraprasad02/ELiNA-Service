import { ArrowCircleDownIcon, ArrowDownIcon } from "@heroicons/react/outline";
import React from "react";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const GalleryHero = () => {
  const contentScroll = () => {
    document
      .getElementById("galleryScroll")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <BreadCrumbs />
      {/* IsmsBg */}
      <div className=" HeroBg2 p-10 pt-20 md:p-0 md:h-fit">
        <div className="flex flex-col gap-20 md:gap-10 items-center  justify-center pb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center text-blue-700 content-center md:px lg:px-48 mt-[8%] font-black">
            {/* Platform For Delivering Inclusion Services To Special Childcare
            Providers */}
            Dive into our gallery and uncover timeless moments captured in every
            frame.{" "}
          </h1>
          <p className="text-center text-2xl text-gray-800">
            Explore memorable moments captured in our gallery.
          </p>
          <div onClick={contentScroll} className="cursor-pointer">
            <ArrowDownIcon className="w-16 pb-16 md:pb-0  text-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryHero;
