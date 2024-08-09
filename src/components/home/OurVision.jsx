import React from "react";
import vision from "../../images/heroPage/card1.png";
import mission from "../../images/heroPage/card2.png";

const OurVisionContent = [
  {
    h1: (
      // <span>
      //   Our{" "}
      //   <span className="text-pink-500 text-4xl font-extrabold">Vision</span>
      // </span>
      <span>
        The Problem with{" "}
        <span className="text-pink-500 text-4xl font-extrabold">
          Disjointed Interventions
        </span>
      </span>
    ),
    // p: "To co-create a more empathetic and inclusive society while embracing neurodiversity.",
    p: "Interventions from special educators, occupational therapists, and speech therapists can often be disjointed and lack coordination. This fragmentation can leave children feeling confused and overwhelmed, as they struggle to navigate different approaches and strategies. Without a unified plan, the efforts of these professionals may not fully address the child's unique needs, leading to inconsistent progress and additional stress for both the child and their family.",
    photo: vision,
    leftImg: false,
  },
  {
    h1: (
      // <span>
      //   Our{" "}
      //   <span className="text-pink-500 text-4xl font-extrabold">Mission</span>
      // </span>
      <span>
        Elina's{" "}
        <span className="text-pink-500 text-4xl font-extrabold">
          Coordinated Approach
        </span>
      </span>
    ),
    // p: "To empower parents of children with neurodiverse needs, build a community of professionals to empower parents, and to provide structured holistic support to schools for becoming more inclusive.",
    p: "At Elina, we serve as a central coordinating figure, ensuring that all interventions are seamlessly integrated. By linking the efforts of special educators, occupational therapists, and speech therapists, we create a cohesive and harmonized support system. This coordinated approach ensures that every aspect of a child's development is addressed, resulting in smooth and focused progress. Our goal is to provide a unified and comprehensive support system that maximizes each child's potential.",
    photo: mission,
    leftImg: true,
  },
];

const OurVision = () => {
  const { innerWidth } = window;
  return (
    <>
      <div className="HeroBg">
        <h1 className=" text-center  text-5xl lg:text-6xl font-black text-indigo-600  p-5 lg:pt-[5%] lg:pb-[5%]">
          Together For A Purpose
        </h1>
        {OurVisionContent.map((item) => (
          <div className="">
            {item.leftImg && innerWidth > 430 ? (
              <div class=" flex flex-col   lg:flex-row md:flex-col-reverse p-6 lg:w-[100%] lg:h-[30%]  ">
                <div className="md:w-[60%] lg:w-[50%]  flex justify-center">
                  <img
                    class="object-cover w-full rounded-3xl    lg:h-[350px] lg:w-[600px]"
                    src={item.photo}
                    alt=""
                  />
                </div>
                <div class=" flex flex-col md:p-0 leading-normal lg:w-[50%] md:w-full lg:pl-[2%] ">
                  <h1 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-4">
                    {item.h1}
                  </h1>
                  <p class="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400 lg:pt-[3%]">
                    {item.p}
                  </p>
                  {/* <button className="">Learn more</button> */}
                </div>
              </div>
            ) : (
              <div class=" flex flex-col justify-around lg:flex-row p-6 lg:w-[100%] lg:h-[30%] ">
                <div class=" flex flex-col  lg:p-0 leading-normal lg:w-[50%] md:w-full lg:pl-[5%]">
                  <h1 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:mb-4">
                    {item.h1}
                  </h1>
                  <p class="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400 lg:pt-[2%]">
                    {item.p}
                  </p>
                  {/* <button className="">Learn more</button> */}
                </div>
                <div className="md:w-[60%] lg:w-[50%]  flex justify-center">
                  <img
                    class="object-cover w-full rounded-2xl  md:h-auto md:w-full  lg:h-[350px] lg:w-[600px]"
                    src={item.photo}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default OurVision;
