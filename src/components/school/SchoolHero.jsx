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
          The School and Community Programs team at the Child Mind Institute
          brings evidence-based mental health care to high-need school
          communities through skill-building programs and direct clinical
          services for students, professional training for educators and
          school-based clinicians, and resources that support caregivers.
        </p>
      </div>
      <div className="md:w-[50%] w-full flex justify-center items-center p-5 md:pr-[8%]">
        <img src={hero} alt="Hero" className="max-h-screen rounded-3xl" />
      </div>
    </div>
  );
};

export default SchoolHero;
