import React from "react";
import { ArrowCircleDownIcon, ArrowDownIcon } from "@heroicons/react/outline";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const BlogHero = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="h-fit HeroBg2 py-20 px-10 md:p-36">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black py-16 md:p-0 text-blue-700 text-center">
          Everyone has a story to tell.
        </h1>
        <div className="text-lg md:text-xl font-semibold text-center py-24 lg:p-24">
          <p>Autism Spectrum Explained: Resources and Real-Life Experiences</p>
          <p>
            "<span className="text-pink-600">Journey with Autism:</span>{" "}
            Understanding, Acceptance, and Empowerment"
          </p>
          <p>
            "<span className="text-pink-600">Insights into Autism:</span>{" "}
            Education, Advocacy, and Community"
          </p>
        </div>
        <div
          onClick={() =>
            document
              .getElementById("blogScroll")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-center items-center flex justify-center py-10 lg:py-0 cursor-pointer"
        >
          <h1 className="font-black text-lg text-blue-700">Explore more</h1>
          <div className="items-center ">
            <ArrowDownIcon className="w-5 text-blue-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
