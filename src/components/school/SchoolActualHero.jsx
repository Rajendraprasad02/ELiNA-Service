import React from "react";

const SchoolActualHero = () => {
  return (
    <div className=" schoolBgHero h-screen ">
      <div className=" lg:bg-black-bg1 bg-black-bg px-[0%] h-screen lg:px-[5%] py-[40%] lg:py-[9%]">
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="lg:bg-black-bg lg:p-10 rounded-3xl">
            <p className="text-white text-5xl md:text-6xl font-black text-center">
              Together for Every Child <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">
                "Creating Inclusive Learning Environments for All"
              </span>
            </p>
            <p className="text-xl text-center font-bold text-white">
              Empowering every student to thrive through equitable and inclusive
              education.
            </p>
          </div>
          <div className="flex gap-5">
            <a href="/#/school-form">
              <button className="bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:text-white lg:text-2xl hover:border-white p-2 lg:p-4 text-xl rounded-xl">
                Get Involved
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolActualHero;
