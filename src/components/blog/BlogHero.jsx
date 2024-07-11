import React from "react";
import { ArrowCircleDownIcon, ArrowDownIcon } from "@heroicons/react/outline";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const BlogHero = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="h-fit HeroBg2 p-36">
        <h1 className="text-7xl font-black text-blue-700 text-center">
          Everyone has a story to tell.
        </h1>
        <div className="text-xl font-semibold text-center p-24">
          <p>Autism Spectrum Explained: Resources and Real-Life Experiences</p>
          <p>
            "Journey with Autism: Understanding, Acceptance, and Empowerment"
          </p>
          <p>"Insights into Autism: Education, Advocacy, and Community"</p>
        </div>
        <div className="text-center items-center flex justify-center">
          <h1 className="font-black text-lg">Explore more</h1>
          <div className="items-center">
            <ArrowDownIcon className="w-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
