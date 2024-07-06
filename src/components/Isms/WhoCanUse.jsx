import React from "react";

const WhoCanUse = ({ KeyContent, KeyContent2, WhoCanUseContent }) => {
  return (
    <>
      <div className="IsmsBg2">
        <h1 className="text-4xl animationHero flex justify-center mt-28 mb-16 md:text-5xl lg:text-6xl font-black text-indigo-600">
          Who can use ISMS?
        </h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-center mx-auto md:w-[80%] lg:w-[100%] lg:gap-8">
          {WhoCanUseContent.map((item) => (
            // md:w-[50%] lg:w-96
            <div class="animationHero bg-transparent zoomIsms  md:p-3 lg:p-5 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <a className="flex justify-center" href="#">
                <img
                  class="rounded-full w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
                  src={item.WhoCanUseImg}
                  alt=""
                />
              </a>
              <div class="p-5 flex justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.p}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Key Benefits */}
        <div className="animationHero text-4xl flex justify-center  md:text-5xl lg:text-6xl font-black text-indigo-600 mb-5 mt-10 md:mb-10 lg:mt-28">
          Key Benefits
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center flex-col md:flex-row content-center px-5 my-8 md:m-5 lg:shadow-2xl gap-10 lg:gap-20 lg:w-[80%] md:h-[350px] rounded-3xl lg:p-10 lg:mb-28 bg-white">
            <div className="flex flex-col gap-10 md:w-[50%]">
              {KeyContent.map((item) => (
                <div className="animationHero flex flex-row items-center gap-10">
                  <img className="w-8" src={item.icon}></img>
                  <p className="text-base lg:text-lg">{item.p}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10 md:w-[50%]">
              {KeyContent2.map((item) => (
                <div className="animationHero flex flex-row items-center gap-10">
                  <img className="w-8" src={item.icon}></img>
                  <p className="text-base lg:text-lg">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoCanUse;
