import React from "react";
import communication from "../../images/communication.jpg";
import strenght from "../../images/strenght.jpg";
import environment from "../../images/environment.jpg";
const CardContent = [
  // {
  //   h1: (
  //     <span>
  //       Enable <span className="text-pink-600"> Communication</span>
  //     </span>
  //   ),
  //   p: "At ELiNA, we understand that you want the absolute best for your child as a parent. We also recognise that it is important for you to be informed of everything that is being done as a part of your child's intervention plan. This is exactly why we prioritise seamless communication among all the professionals involved in your child's development. This way, your child receives the support they deserve and you can also rest assured knowing how your child is being taken care of on the journey to empowerment! ",
  //   src: communication,
  //   leftImg: true,
  // },
  // {
  //   h1: (
  //     <span>
  //       Work on<span className="text-pink-600"> Strengths</span>
  //     </span>
  //   ),
  //   p: "We all have our unique strengths. Identifying your child's unique strengths and working on that is crucial to the work we do. We believe that such an approach helps us build on their strengths and cater to their unique needs. This sets a solid foundation for your child to progress over time. Building on a child's strength is something we return to at each stage of our process, whether that is designing, curating, or creating environments for them to thrive and realise their full potential.",
  //   src: strenght,
  //   leftImg: false,
  // },
  // {
  //   h1: (
  //     <span>
  //       Enable <span className="text-pink-600">Environments</span>
  //     </span>
  //   ),
  //   p: "The environment we live in plays a huge part in our daily lives. ELiNA recognises this very well and believes that an empowering environment is crucial for any child. With this in mind, we work towards creating inclusive spaces for your child to thrive, regardless of the environment they are in. It is important for your child to feel seen and safe wherever they are, and we work towards enabling such spaces.",
  //   src: environment,
  //   leftImg: true,
  // },
];

const Cards = () => {
  const { innerWidth } = window;
  return (
    <>
      <div className="HeroBg2">
        <div className="text-center text-4xl md:text-5xl lg:text-6xl font-black text-blue-700 animationHero py-12">
          <h1>How We Empower Your Child's Journey</h1>
        </div>
        {/* {CardContent.map((item) => (
          <div className="">
            {item.leftImg && innerWidth > 425 ? (
              <div class="flex flex-col items-center justify-around md:flex-row md:p-10 lg:w-[100%] lg:h-[30%] ">
                <div className="md:w-[50%]  flex justify-center  leftToRight">
                  <img
                    class="object-cover w-full rounded-3xl h-96 md:h-auto md:w-48  lg:h-[50%] lg:w-[60%]"
                    src={item.src}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-around p-4 leading-normal md:w-[50%] lg:pr-[15%] rightToLeft">
                  <h5 class="mb-2 text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                    {item.h1}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.p}
                  </p>
                </div>
              </div>
            ) : (
              <div class="flex flex-col items-center justify-around md:flex-row md:p-10 lg:w-[100%] lg:h-[30%] ">
                <div class="flex flex-col justify-between  p-8 leading-normal md:w-[50%] lg:pl-[15%]  leftToRight">
                  <h5 class="mb-2 text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                    {item.h1}
                  </h5>
                  <p class="mb-3 font-normal  text-gray-700 dark:text-gray-400">
                    {item.p}
                  </p>
                </div>
                <div className="md:w-[50%] flex justify-center rightToLeft">
                  <img
                    class="object-cover w-[80%] rounded-2xl  md:h-auto md:w-48  lg:h-[50%] lg:w-[60%]"
                    src={item.src}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        ))} */}
        <div className="flex flex-col-reverse justify-center items-start md:flex-row-reverse p-5 md:p-10 gap-[5%]">
          <div className="lg:w-[60%] w-full">
            <li className="text-lg">
              <span className="text-pink-600 font-black text-xl">
                Comprehensive Guidance:{" "}
              </span>
              We help you navigate the complex landscape of neurodivergent care,
              offering clear and concise information about your child's
              condition and needs.
            </li>
            <li className="text-lg">
              <span className="text-pink-600 font-black text-xl">
                Structured Approach:{" "}
              </span>
              Our programs provide a structured pathway, simplifying the process
              and reducing confusion.
            </li>

            <li className="text-lg">
              <span className="text-pink-600 font-black text-xl">
                Supportive Community:{" "}
              </span>
              Connect with other parents, share experiences, and find comfort in
              a community that understands your journey.
            </li>

            <li className="text-lg">
              <span className="text-pink-600 font-black text-xl">
                Tailored Interventions:{" "}
              </span>
              Receive personalized strategies and support tailored to your
              child's unique strengths and challenges.
            </li>
            <li className="text-lg">
              <span className="text-pink-600 font-black text-xl">
                Ongoing Support:{" "}
              </span>
              Continuous hand-holding and regular updates on your child's
              progress, ensuring you are always informed and involved.
            </li>
          </div>
          <div className="w-full lg:w-[40%]">
            <img className="rounded-3xl" src={communication} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
