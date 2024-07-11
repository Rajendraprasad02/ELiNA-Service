import React from "react";

const StoryOfElina = ({ storyOfElina }) => {
  return (
    <>
      <div className="">
        {storyOfElina.map((item) => (
          <div
            className={`p-16  lg:h-screen flex flex-col lg:flex-row ${
              item.ImgDirection === "left" ? "" : "lg:flex-row-reverse"
            } justify-center gap-10 md:gap-[5%] px-8  md:px-20 items-center ${
              item.ImgDirection === "left" ? "bg-[#f0f2fc]" : ""
            }`}
          >
            <div className="w-[100%] md:w-[50%] ">
              <img
                className={`${
                  item.ImgDirection === "left" ? "items-end" : "items-end"
                } rounded-3xl animationHero w-full md:w-[573px] md:h-[326px]`}
                src={item.src}
              />
            </div>
            <div className="animationHero w-[100%] md:w-[50%]    lg:p-0 font-medium text-base md:text-lg lg:text-xl">
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoryOfElina;
