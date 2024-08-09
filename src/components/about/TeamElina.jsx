import React from "react";
import pic1 from "../../images/about/team1.jpg";

const TeamElina = ({ teamElinaContent, teamElinaContent2 }) => {
  return (
    <>
      <div className="HeroBg2">
        <div className="p-10">
          <h1 className="text-center text-5xl lg:text-6xl font-black text-blue-700 my-10 lg:m-16 animationHero">
            Visionaries of Elina
          </h1>
          <div className="flex flex-wrap justify-center w-[100%]">
            <div className="flex flex-col  items-center relative md:w-full animationHero">
              <img
                className="rounded-full w-[200px] h-[200px] "
                src={pic1}
              ></img>
              <h1 className="text-center text-lg font-bold lg:pt-[1%]">
                Ramalakshmi Kannan
              </h1>
              <p className="mx-auto font-medium text-base text-gray-500">
                (Founder/CEO)
              </p>
              <div className=" absolute opacity-0  ease-in-out delay-150 hover:opacity-100 duration-300">
                <p className=" w-[200px] h-[200px] py-5 px-4 ease-in-out delay-150 text-xs font-light text-white text-center flex items-center rounded-full hover:bg-black-rgba ">
                  Ramalakshmi Kannan, a seasoned special educator and counselor,
                  is the co-founder and CEO of Elina. She leverages her
                  extensive experience to promote empathy and inclusion through
                  customized programs for homes, schools, and workplaces.
                </p>
              </div>
              {/* <p>
              Ramalakshmi Kannan is a seasoned special educator and counselor
              with extensive experience in fostering inclusive environments for
              neurodiverse individuals. As the co-founder and CEO of Elina, she
              leads the organization in promoting empathy and inclusion through
              customized programs for homes, schools, and workplaces.
            </p> */}
            </div>
            {teamElinaContent.map((item) => (
              <div className="flex flex-col  items-center relative md:w-[33.3%] animationHero">
                <img
                  className="rounded-full w-[200px] h-[200px] "
                  src={item.pic}
                ></img>
                <h1 className="text-center text-lg font-bold lg:pt-[3%]">
                  {item.h1}
                </h1>
                <p className="mx-auto font-medium text-base text-gray-500 ">
                  {item.p}
                </p>
                <div className="absolute opacity-0 ease-in-out delay-150 hover:opacity-100 duration-300">
                  <p className=" w-[200px] h-[200px] p-5 ease-in-out delay-150 text-xs font-light text-white text-center flex items-center rounded-full hover:bg-black-rgba ">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-black text-blue-700 my-10 lg:m-16 animationHero">
            The Elina Family
          </h1>
          <div className="flex justify-center flex-wrap w-[100%]">
            {teamElinaContent2.map((item) => (
              <div className="flex flex-col items-center relative md:w-[33.3%] mb-20 animationHero">
                <img
                  className="flex rounded-full w-[250px] h-[250px]"
                  src={item.pic}
                ></img>
                <h1 className="text-center text-lg font-bold lg:pt-[3%]">
                  {item.h1}
                </h1>
                <p className="mx-auto px-10 font-medium text-sm text-center text-gray-500">
                  {item.p}
                </p>
                <div className=" absolute opacity-0  ease-in-out delay-150 hover:opacity-100 duration-300">
                  <p className=" w-[250px] h-[250px] py-5 px-4 ease-in-out delay-150 text-xs font-light text-white text-center flex items-center rounded-full hover:bg-black-rgba ">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamElina;
