import React from "react";
import hero from "../../images/school/schoolCompressed/hero-min.jpg";

const SchoolHero = () => {
  return (
    <div className="HeroBg2 flex flex-col md:flex-row justify-center items-center md:py-[5%] lg:gap-10">
      <div className="md:w-[50%]  flex  flex-col justify-center p-5 md:pl-[8%]">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-blue-600">
          School Programs
        </h1>
        <p className="lg:text-lg text-lg md:text-sm">
          <span className="font-extrabold">
            Integrating Efforts for Comprehensive Support
            <br />
          </span>
          At Elina, we understand the pivotal role that schools play in a
          child's development. We work closely with educational institutions to
          ensure that every child receives the support they need to thrive. Our
          approach integrates the efforts of schools with those of families and
          professionals, creating a holistic and inclusive learning environment.
          Here's how we support you:
        </p>
      </div>
      <div className="md:w-[50%] w-full flex justify-center items-center p-5 md:pr-[8%]">
        <img src={hero} alt="Hero" className="max-h-screen rounded-3xl" />
      </div>
    </div>
  );
};

export default SchoolHero;
