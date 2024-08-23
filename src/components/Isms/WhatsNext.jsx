import React from "react";
import calender from "../../images/isms/calendar.png";

const WhatsNext = () => {
  return (
    <>
      <div className="IsmsWhatNext animationHero WhatsNext text-white w-[90%] md:w-[80%] flex flex-col items-center p-8 m-20 gap-4 ml-auto mr-auto rounded-3xl  bg-pink-500">
        <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-bold">
          So, What's Next?
        </h1>
        <p className=" font-extrabold text-sm md:text-lg">
          Get Started with ISMS Today.
        </p>
        <h2 className="text-sm text-center lg:text-xl md:text-base font-normal">
          Create your organization account and start by exploring the features.
        </h2>
        <button className="bg-blue-600 text-lg p-2 py-1 md:px-5 md:py-3 border-blue-600 hover:text-white hover:border-white">
          Create account
        </button>
        <p>or</p>
        <p className="font-semibold text-center lg:text-lg">
          Get in touch with us and Schedule a demo call.
        </p>
        <button className="bg-white flex items-center p-2 border-white py-1 md:px-5 md:py-3 text-lg font-black text-blue-600 hover:text-white hover:bg-transparent hover:border-white">
          {/* <span>
            <img className="w-5" src={calender} />
          </span> */}
          <span>Schedule Demo </span>
        </button>
      </div>
    </>
  );
};

export default WhatsNext;
