import React from "react";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const ContactUsHero = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="HeroBg2 h-fit ">
        <div className="text-6xl lg:text-8xl font-black text-blue-700 text-center pb-12 pt-[12%]">
          Get in Touch with Us
        </div>
        <div className="text-lg lg:text-2xl text-center pb-[3%]">
          We're here to answer any questions you may have. Reach out to us and
          we'll respond as soon as we can.
        </div>
        <div className=" pb-[14%] items-center flex justify-center">
          <button className="px-6 py-3 bg-blue-600 border-blue-600 hover:text-blue-600 hover:border-blue-600">
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUsHero;
