import React from "react";

const CareGivers = () => {
  return (
    <>
      <div className="flex text-center flex-col justify-center items-center py-28 gap-10 HeroBg2">
        <h1 className="text-5xl md:text-6xl font-semibold text-blue-600 animationHero">
          Together We Thrive: Partnering for Success
        </h1>
        <p className="md:text-xl text-base  px-5 lg:px-[14%] animationHero">
          At Elina, our goal is to create an inclusive, supportive, and thriving
          school environment where every child can succeed. The SAIL and CoMPASS
          Programs are essential components in this journey, providing crucial
          insights into the factors affecting student performance and ensuring
          continuous support. By empowering educators, nurturing students, and
          fostering collaboration, we help schools become a beacon of support
          for children with special needs. Join us in making a difference and
          ensuring that every child has the opportunity to reach their full
          potential.
        </p>
        <a
          href="/#/school-form"
          className="md:text-base text-sm px-5 lg:px-[18%] cursor-pointer underline font-bold text-blue-800 animationHero"
        >
          Contact us today to learn more about how we can support your school
          community.
        </a>
        <a href="/#/school-form">
          <button className="animationHero bg-blue-600 border-blue-600 text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 py-2 px-4 rounded-full">
            Learn more and Register
          </button>
        </a>
      </div>
    </>
  );
};

export default CareGivers;
