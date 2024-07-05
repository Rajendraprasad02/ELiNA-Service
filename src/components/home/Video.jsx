import React from "react";
import { PlayIcon } from "@heroicons/react/outline";

const Video = () => {
  return (
    <div className="pt-20 md:p-10 HeroBg">
      <h1 className="flex animationHero justify-center text-5xl lg:text-6xl font-black text-indigo-600 lg:pb-5">
        About ELiNA
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 p-10  content-center lg:justify-around lg:items-center lg:gap-0">
        <div className="flex  lg:justify-center">
          <iframe
            src="https://www.youtube.com/embed/SXaZF4BE9l4"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="animationHero rounded-2xl lg:w-[35rem] lg:h-[20rem]"
          ></iframe>
        </div>
        <div className="animationHero lg:pr-5">
          <p className="text-sm lg:text-lg lg:font-semibold lg:pb-5">
            ELiNA was was conceived as a powerful concept of inclusion within{" "}
            <span>
              <a className=" underline cursor-pointer text-blue-950">HLC</a>
            </span>
            , and nurtured for a decade through extensive knowledge gathering,
            research, and real-life experiences. Our name, "ELiNA," signifies
            the first ray of sun and embodies our mission to be the first ray of
            hope for neurodiverse families.
          </p>
          <p className="hidden lg:block lg:text-base lg:pb-5">
            Guided by the visionary leadership of Mr. Naveen Mahesh and Ms.
            Padma Naveen, and fueled by the passion of Ms. Ramalakshmi and her
            team, ELiNA emerged as a separate organisation in 2020. With a
            foundation built on rich learnings, we now serve families and
            organisations, offering transformative programs like SAIL, CoMPASS,
            ANCHOR, and BUOYANCY.
          </p>
          <button className="text-xs font-normal p-2 mt-5 lg:w-[30%] lg:h-8 flex justify-center items-center lg:gap-2 bg-[#FF0000] border-none lg:text-lg lg:p-6 lg:rounded-3xl lg:m-0">
            YouTube
            <PlayIcon className="w-5 lg:w-8" />
          </button>
        </div>
      </div>
      <div className="bg-pink-500 animationHero p-5 m-10 rounded-3xl text-white lg:mx-24 lg:p-8 lg:rounded-3xl lg:font-semibold">
        <p className=" text-center text-sm pb-2 text md:text-xl md:pb-3 lg:text-2xl">
          "Inclusion is not a strategy to help people fit into the systems and
          structures that exist in our societies; it is about transforming those
          systems and structures to make it better for everyone."{" "}
        </p>
        <h1 className="text-end mt-auto text-white lg:font-bold lg:text-lg">
          - DIANE RICHLER.
        </h1>
      </div>
    </div>
  );
};

export default Video;
