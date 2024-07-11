import React from "react";

const TeamElina = ({ teamElinaContent, teamElinaContent2 }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl lg:text-6xl font-black text-blue-700 m-10">
          Team ELiNA
        </h1>
        {teamElinaContent.map((item) => (
          <a
            href="#"
            class="flex flex-col w-[80%] m-5 items-center bg-white rounded-3xl shadow-xl md:flex-row"
          >
            <img
              class="object-cover w-full lg:w-[22%] lg:h-[300px] m-5 rounded-3xl"
              src={item.pic}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.h1}
              </h5>
              <p class="mb-3 font-semibold text-blue-600 text-sm bg-blue-100 w-fit rounded-xl px-3 py-2">
                {item.p}
              </p>
            </div>
          </a>
        ))}
        {teamElinaContent2.map((item) => (
          <a
            href="#"
            class="flex flex-col w-[80%] m-5 items-center bg-white rounded-3xl shadow-xl md:flex-row"
          >
            <img
              class="object-cover w-full lg:w-[22%] lg:h-[350px] m-5 rounded-3xl"
              src={item.pic}
              alt=""
            />
            <div class="flex items-start flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.h1}
              </h5>
              <p class="mb-3 font-semibold text-blue-600 text-sm bg-blue-100 w-fit rounded-xl px-3 py-2">
                {item.p}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default TeamElina;
