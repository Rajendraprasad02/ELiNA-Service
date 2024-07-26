import React from "react";

const SchoolActualHero = () => {
  return (
    <div className=" schoolBgHero h-screen ">
      <div className=" bg-black-bg px-[0%] h-screen lg:px-[5%] py-[40%] lg:py-[9%]">
        <div className="flex flex-col justify-center items-center gap-20">
          <p className="text-white text-5xl md:text-6xl font-black text-center">
            Together for Every Child <br />
            <span className="text-4xl md:text-5xl lg:text-7xl">
              "Creating Inclusive Learning Environments for All"
            </span>
          </p>
          <p className="text-xl text-center font-bold text-white">
            Empowering every student to thrive through equitable and inclusive
            education.
          </p>
          <div className="flex gap-5">
            <button className="bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:text-white hover:border-white p-2 lg:p-4 text-xl rounded-xl">
              Learn More
            </button>
            <button className="bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:text-white hover:border-white p-2 lg:p-4 text-xl rounded-xl">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolActualHero;
