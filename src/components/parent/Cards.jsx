import React from "react";
import communication from "../../images/communication.jpg";
import strenght from "../../images/strenght.jpg";
import environment from "../../images/environment.jpg";
const CardContent = [
  {
    h1: "Enable Communication",
    p: "At ELiNA, we understand that you want the absolute best for your child as a parent. We also recognise that it is important for you to be informed of everything that is being done as a part of your child's intervention plan. This is exactly why we prioritise seamless communication among all the professionals involved in your child's development. This way, your child receives the support they deserve and you can also rest assured knowing how your child is being taken care of on the journey to empowerment! ",
    src: communication,
    leftImg: true,
  },
  {
    h1: "Work on Strengths",
    p: "We all have our unique strengths. Identifying your child's unique strengths and working on that is crucial to the work we do. We believe that such an approach helps us build on their strengths and cater to their unique needs. This sets a solid foundation for your child to progress over time. Building on a child's strength is something we return to at each stage of our process, whether that is designing, curating, or creating environments for them to thrive and realise their full potential.",
    src: strenght,
    leftImg: false,
  },
  {
    h1: "Enable Environments",
    p: "The environment we live in plays a huge part in our daily lives. ELiNA recognises this very well and believes that an empowering environment is crucial for any child. With this in mind, we work towards creating inclusive spaces for your child to thrive, regardless of the environment they are in. It is important for your child to feel seen and safe wherever they are, and we work towards enabling such spaces.",
    src: environment,
    leftImg: true,
  },
];

const Cards = () => {
  const { innerWidth } = window;
  return (
    <>
      <div className="HeroBg2">
        {CardContent.map((item) => (
          <div className="">
            {item.leftImg && innerWidth > 425 ? (
              <div class="flex flex-col items-center justify-around md:flex-row md:p-10 lg:w-[100%] lg:h-[30%]">
                <div className="md:w-[50%]  flex justify-center">
                  <img
                    class="object-cover w-full rounded-3xl h-96 md:h-auto md:w-48  lg:h-[50%] lg:w-[40%]"
                    src={item.src}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-around p-4 leading-normal md:w-[50%] lg:pr-[15%]">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.h1}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.p}
                  </p>
                  <button className="">Learn more</button>
                </div>
              </div>
            ) : (
              <div class="flex flex-col items-center justify-around md:flex-row md:p-10 lg:w-[100%] lg:h-[30%]">
                <div class="flex flex-col justify-between p-4 leading-normal md:w-[50%] lg:pl-[15%]">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.h1}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.p}
                  </p>
                  <button className="">Learn more</button>
                </div>
                <div className="md:w-[50%] flex justify-center">
                  <img
                    class="object-cover w-full rounded-2xl h-96 md:h-auto md:w-48  lg:h-[50%] lg:w-[40%]"
                    src={item.src}
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

export default Cards;