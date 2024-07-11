import { ArrowDownIcon } from "@heroicons/react/outline";
import React from "react";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const HeroAbout = () => {
  return (
    <>
      <BreadCrumbs />
      {/* IsmsBg */}
      <div className=" HeroBg2  md:h-fit">
        <div className="flex flex-col gap-20 items-center  justify-center pb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center text-blue-600 content-center md:px lg:px-48 mt-[8%] font-black">
            {/* Platform For Delivering Inclusion Services To Special Childcare
            Providers */}
            Meet the People Behind ELiNA Services{" "}
          </h1>
          <p className="text-center text-base md:text-2xl text-gray-800 w-[80%]">
            Meet ELiNA Services' dedicated team, comprised of talented
            individuals who are driven by their deep expertise, commitment to
            innovation, and unwavering passion for consistently delivering
            exceptional results to our valued clients.{" "}
          </p>
          <div>
            <ArrowDownIcon className="w-10 text-blue-600" />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default HeroAbout;
