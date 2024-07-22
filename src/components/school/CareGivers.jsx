import React from "react";

const CareGivers = () => {
  return (
    <>
      <div className="flex text-center flex-col justify-center items-center py-[4%] gap-5">
        <h1 className="text-5xl font-semibold text-blue-600">
          Caregiver and Educator Workshops
        </h1>
        <p className="text-lg px-5 lg:px-[20%]">
          Join our free caregiver workshops and educator professional
          development for partner districts in New York City and the San
          Francisco Bay Area.
        </p>
        <button className="bg-blue-600 border-blue-600 text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 py-2 px-4 rounded-full">
          Learn more and Register
        </button>
      </div>
    </>
  );
};

export default CareGivers;
