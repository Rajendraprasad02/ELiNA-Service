import React from "react";

const WhatsNext = () => {
  return (
    <>
      <div className="animationHero WhatsNext text-white w-[80%] flex flex-col items-center p-8 m-20 gap-4 ml-auto mr-auto rounded-3xl  bg-purple-700">
        <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-bold">
          So, What's Next?
        </h1>
        <p className=" font-extrabold text-sm md:text-lg">
          Get Started with ISMS Today.
        </p>
        <h2 className="text-sm text-center lg:text-xl md:text-base font-normal">
          Create your organization account and start by exploring the features.
        </h2>
        <button className="bg-blue-700 text-lg p-2 py-1 md:px-5 md:py-3 border-blue-700 hover:text-white hover:border-white">
          Create account
        </button>
        <p>7-day free trial</p>
        <p>or</p>
        <p className="font-semibold text-center lg:text-lg">
          Get in touch with us and Schedule a demo call.
        </p>
        <button className="bg-white p-2 py-1 md:px-5 md:py-3 text-lg font-black text-blue-700 hover:text-white hover:bg-transparent hover:border-white">
          Schedule Demo
        </button>
      </div>
    </>
  );
};

export default WhatsNext;
