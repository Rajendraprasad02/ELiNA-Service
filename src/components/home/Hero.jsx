import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import heroimg from "../../images/teaching3.jpg";
import { ArrowRightIcon, ChatIcon } from "@heroicons/react/outline";
import BreadCrumbs from "../reuseable/BreadCrumbs";

const Hero = ({ HeroContent }) => {
  // const [currentPage, setCurrentPage] = useState("");
  // useEffect(() => {
  //   const updateCurrentPage = () => {
  //     const pathname = window.location.pathname;
  //     setCurrentPage(pathname === "/" ? "Home" : pathname);
  //   };
  //   updateCurrentPage();

  //   // Listen to route changes
  //   window.addEventListener("popstate", updateCurrentPage);

  //   return () => {
  //     window.removeEventListener("popstate", updateCurrentPage);
  //   };
  // }, []);

  return (
    <>
      <div className="HeroBg ">
        {/* <div className="fixed bottom-4 right-8  p-4 rounded-full  cursor-pointer lg:w-[50px] z-50">
          <ChatIcon className="w-14 text-blue-600" />
        </div>
        <div className="fixed bottom-4 lg:ml-5 bg-blue-600 p-2 rounded-full shadow-md cursor-pointer z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-5"
            fill="#ffffff"
          >
            <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
          </svg>
        </div> */}

        <div className=" flex flex-col lg:flex-row  lg:px-28 lg:pt-10 lg:pb-10 ">
          <div className=" flex flex-col justify-center text-start lg:text-start md:text-center gap-6 my-6 mx-10 mt-7 md:mx-24 md:my-10  lg:px-10 lg:m-0">
            <h1 className=" text-3xl font-black text-gray-900 md:text-4xl lg:text-6xl">
              If they can’t learn the way we teach,
              <br />
              <span className="text-4xl  text-indigo-600 md:text-6xl lg:text-6xl">
                We teach the way they learn.
              </span>
            </h1>
            <p className="text-pretty text-sm  md:text-xl ">
              <span className="text-pink-500 font-extrabold cursor-pointer">
                Teaching
              </span>{" "}
              is a profound act of empathy and empowerment. It's about fostering
              growth, igniting passion for learning, and guiding individuals
              toward their fullest potential.{" "}
              <span className="text-pink-500 font-extrabold cursor-pointer">
                Each student's journey is a testament
              </span>{" "}
              to the transformative power of education.
            </p>
          </div>
          <img
            className="hidden rounded-3xl lg:block lg:w-[40%]"
            src={heroimg}
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-3 px-10 pb-20 justify-start md:justify-center lg:justify-start lg:pl-36 lg:pr-0 lg:pb-10 lg:gap-5">
          {HeroContent.map((item) => (
            <button className="text-white bg-pink-600 border-none rounded-2xl text-sm p-1 px-3 md:px-7 md:py-2 md:text-lg lg:px-4 lg:py-2 lg:text-2xl">
              {item.HeroButtonText}
            </button>
          ))}
          <div className="items-center flex gap-2 cursor-pointer transition duration-300 ease-in-out hover:scale-110">
            <p className="text-pink-600 text-lg font-bold md:text-xl">
              See all resource
            </p>
            <ArrowRightIcon className="w-5 text-pink-600 font-bold text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
