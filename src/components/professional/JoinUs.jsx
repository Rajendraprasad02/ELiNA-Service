import React from "react";

const JoinUs = () => {
  return (
    <>
      <div className="flex text-center flex-col justify-center items-center py-28 gap-10 HeroBg2">
        <h1 className="text-5xl md:text-6xl font-semibold text-blue-600 ">
          Join Us in Making a Difference
        </h1>
        <p className="md:text-xl text-base  px-5 lg:px-[14%] ">
          At Elina, we believe that the best outcomes are achieved through
          collaboration and a unified approach. By joining us in delivering our
          CoMPASS program, professionals gain access to a supportive network and
          comprehensive resources, allowing them to make a meaningful impact in
          the lives of children with neurodivergent conditions. Our
          technology-based enhancements and flexible collaboration model ensure
          that every child receives the best possible support, regardless of
          location.
        </p>
        <p className="md:text-lg text-base  px-5 lg:px-[14%] ">
          Partner with us and become part of a community dedicated to empowering
          children and supporting their unique journeys. Together, we can ensure
          that every child has the opportunity to thrive and reach their full
          potential.
        </p>
        <a
          href="/#/service-form"
          className="md:text-base text-sm px-5 lg:px-[18%] cursor-pointer underline font-bold text-blue-800 "
        >
          Contact us today to learn more about how you can collaborate with
          Elina and contribute to a comprehensive and effective support system
          for children and their families.
        </a>
        <a href="/#/service-form">
          <button className=" bg-blue-600 border-blue-600 lg:text-2xl text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 py-2 px-4 rounded-full">
            Join Us!
          </button>
        </a>
      </div>
    </>
  );
};

export default JoinUs;
