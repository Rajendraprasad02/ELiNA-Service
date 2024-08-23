import React from "react";

const StoryOfElina = ({ storyOfElina }) => {
  return (
    <>
      <div id="scroll" className="">
        {storyOfElina.map((item) => (
          <div
            className={`p-16  lg:h-screen flex flex-col lg:flex-row ${
              item.ImgDirection === "left" ? "" : "lg:flex-row-reverse"
            } justify-center gap-10 md:gap-[5%] px-8  md:px-20 items-center ${
              item.ImgDirection === "left" ? "HeroBg" : "HeroBg2"
            }`}
          >
            <div className="w-[100%] md:w-[50%] ">
              <img
                className={`${
                  item.ImgDirection === "left"
                    ? "items-end leftToRight"
                    : "items-end rightToLeft"
                } rounded-3xl animationHero w-full md:w-[573px] md:h-[356px]`}
                src={item.src}
              />
            </div>
            <div
              className={`${
                item.ImgDirection === "left" ? "rightToLeft" : "leftToRight"
              } w-[100%] md:w-[50%] lg:p-0 font-medium text-base md:text-lg lg:text-xl`}
            >
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoryOfElina;
