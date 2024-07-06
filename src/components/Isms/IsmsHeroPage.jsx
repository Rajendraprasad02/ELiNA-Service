import React from "react";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const IsmsHeroPage = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="IsmsBg pt-[30%] md:pt-0 md:h-fit">
        <div className="flex flex-col gap-10 items-center  justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center text-blue-700 content-center md:px lg:px-48 mt-[8%] font-black">
            {/* Platform For Delivering Inclusion Services To Special Childcare
            Providers */}
            Inclusive Service Platform for Special Childcare Providers
          </h1>
          <p className="text-center lg:px-[20%] text-lg]">
            Take your therapy experience online to enrich the lives of both
            caregivers and children, facilitating improved support and
            reinforcing skills in the comfort of home.
          </p>
          <button
            type="button"
            class="lg:p-3 lg:w-[15%] text-white bg-gradient-to-r border-none from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-white lg:font-black lg:text-xl"
          >
            Get started
          </button>
          <button className="lg:p-3 lg:w-[15%] bg-white shadow-2xl border-none text-blue-700">
            Schedule Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default IsmsHeroPage;
