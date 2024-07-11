import React from "react";

const StoryOfElina = ({ storyOfElina }) => {
  return (
    <>
      <div className="">
        {storyOfElina.map((item) => (
          <div
            className={`  lg:h-screen flex flex-col lg:flex-row ${
              item.ImgDirection === "left" ? "" : "lg:flex-row-reverse"
            } justify-center gap-[5%] px-20 items-center ${
              item.ImgDirection === "left" ? "bg-[#f0f2fc]" : ""
            }`}
          >
            <div className="w-[50%]">
              <img
                className={`${
                  item.ImgDirection === "left" ? "items-end" : "items-end"
                }  animationHero w-[350px] h-[250px] md:w-[573px] md:h-[326px]`}
                src={item.src}
              />
            </div>
            <div className="animationHero w-[50%]    lg:p-0 font-medium text-base md:text-lg lg:text-xl">
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoryOfElina;
