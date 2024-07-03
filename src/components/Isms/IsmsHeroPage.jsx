import React from "react";

const IsmsHeroPage = () => {
  return (
    <>
      <div className="IsmsBg lg:h-fit">
        <div className="flex flex-col gap-10 items-center  justify-center">
          <h1 className="text-6xl text-center text-blue-700 content-center px-48 lg:mt-[8%] font-black">
            Platform for delivering therapy services to childcare providers
          </h1>
          <p className="text-center px-[20%] text-lg">
            Take your therapy experience online to enrich the lives of both
            caregivers and children, facilitating improved support and
            reinforcing skills in the comfort of home.
          </p>
          <button
            type="button"
            class="lg:p-5 lg:w-[15%] text-white bg-gradient-to-r border-none from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get started
          </button>
          <button className="lg:p-5 lg:w-[15%] bg-white shadow-xl border-none text-blue-700">
            Schedule Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default IsmsHeroPage;
