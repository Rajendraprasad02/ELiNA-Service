import React from "react";
import hero from "../../images/school/hero.jpg";

const SchoolHero = () => {
  return (
    <div className="HeroBg flex justify-center items-center py-[10%] gap-10">
      <div className="w-[50%]  flex flex-col justify-center  pl-[8%]">
        <h1 className="text-7xl font-bold mb-4 text-blue-600">
          School Programs
        </h1>
        <p className="text-lg ">
          The School and Community Programs team at the Child Mind Institute
          brings evidence-based mental health care to high-need school
          communities through skill-building programs and direct clinical
          services for students, professional training for educators and
          school-based clinicians, and resources that support caregivers.
        </p>
      </div>
      <div className="w-[50%]  flex justify-center items-center pr-[8%]">
        <img src={hero} alt="Hero" className="max-h-screen" />
      </div>
    </div>
  );
};

export default SchoolHero;
