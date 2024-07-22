import React from "react";

const CareGivers = () => {
  return (
    <>
      <div className="flex text-center flex-col justify-center items-center py-28 gap-10">
        <h1 className="text-5xl md:text-6xl font-semibold text-blue-600 animationHero">
          Caregiver and Educator Workshops
        </h1>
        <p className="text-xl px-5 lg:px-[18%] animationHero">
          Join our free caregiver workshops and educator professional
          development for partner districts in New York City and the San
          Francisco Bay Area.
        </p>
        <a href="/schoolform">
          <button className="animationHero bg-blue-600 border-blue-600 text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 py-2 px-4 rounded-full">
            Learn more and Register
          </button>
        </a>
      </div>
    </>
  );
};

export default CareGivers;
