import React from "react";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const ProfessionalHero = () => {
  return (
    <>
      <BreadCrumbs />

      <div className="professionalBg h-screen ">
        <div className=" lg:bg-black-bg1 bg-black-bg  px-[0%] h-screen lg:px-[10%] py-[40%] lg:py-[9%]">
          <div className="flex flex-col justify-center items-center gap-20">
            <div className="lg:bg-black-bg lg:p-10 rounded-3xl flex flex-col justify-center items-center gap-20">
              <p className="text-white text-5xl md:text-7xl font-black text-center">
                Transforming Care: Where Expertise Meets Compassion
              </p>
              <p className="text-xl text-center font-normal text-white px-[5%]">
                Welcome to a place where professional expertise seamlessly
                blends with heartfelt compassion. At ELiNA, we believe in a
                holistic approach to child development, partnering with
                therapists to empower every child’s journey.
              </p>
            </div>
            <div className="flex gap-5">
              <a href="/#/service-form">
                <button className="bg-blue-700 border-blue-700 text-white hover:bg-transparent hover:text-white hover:border-white p-2 lg:p-4 text-xl lg:px-10 rounded-xl">
                  Join Us on This Journey
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalHero;
