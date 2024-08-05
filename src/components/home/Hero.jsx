import React, { useState, useEffect, lazy, Suspense } from "react";
import { Carousel } from "flowbite-react";
// import heroimg from "../../images/teaching3.jpg";
import heroimg from "../../images/compressed/hero/teaching3-min.jpg";
import heroimg2 from "../../images/heroPage/1.jpg";
import heroimg3 from "../../images/heroPage/2.jpg";

import { ArrowRightIcon, ChatIcon } from "@heroicons/react/outline";
import BreadCrumbs from "../reuseable/BreadCrumbs";

// const heroimg2 = lazy(import("../../images/heroPage/1.jpg"));

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
        <div className="fixed bottom-2 lg:bottom-4 right-4   rounded-full  cursor-pointer lg:w-[50px] z-50">
          <ChatIcon className="w-10 lg:w-14 text-blue-600" />
        </div>
        <div className="fixed bottom-2 lg:bottom-4 lg:ml-5 bg-blue-600 p-2 rounded-full shadow-md cursor-pointer z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-3 lg:w-5"
            fill="#ffffff"
          >
            <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
          </svg>
        </div>

        <div className=" flex flex-col  lg:flex-row mx:[4%] lg:mx-[6%] lg:pxg-28  md:pt-[3%]  lg:pb-10 ">
          <div className=" flex flex-col justify-center text-start lg:text-start md:text-center gap-14 md:gap-6 my-6 mx-10 mt-7 md:mx-24 md:my-10  lg:pr-10 lg:m-0">
            <h1 className=" text-4xl font-black text-gray-800 md:text-4xl lg:text-6xl">
              Welcome to Elina's World:
              <br />
              <span className="text-5xl  text-indigo-600 md:text-6xl lg:text-6xl">
                Empowering Families and Shaping Futures
              </span>
            </h1>
            <p className="text-pretty pb-10 text-sm md:pb-0  md:text-xl ">
              At Elina, we envision a world where every child is provided with
              the tools and support to realize their full potential. We are
              dedicated to offering comprehensive resources, guidance, and
              support to children with{" "}
              <span className="text-pink-600 font-black">ADHD,</span>{" "}
              <span className="text-pink-600 font-black">Autism,</span>{" "}
              <span className="text-pink-600 font-black">
                Learning Disabilities,
              </span>{" "}
              <span className="text-pink-600 font-black">Dyslexia,</span>{" "}
              <span className="text-pink-600 font-black">Dyspraxia,</span>{" "}
              <span className="text-pink-600 font-black">Dyscalculia,</span>{" "}
              <span className="text-pink-600 font-black">
                Intellectual Disability,
              </span>{" "}
              along with their families, schools, and professionals. Our mission
              is to empower families and shape brighter futures through
              personalized programs and inclusive practices.
            </p>
          </div>

          <img
            className="hidden rounded-3xl object-cover lg:block lg:w-[40%]"
            src={heroimg2}
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-3 pxh-10 pb-20 justify-start md:justify-center lg:justify-start mx-[10%] lg:mx-[6%] lg:pr-0 lg:pb-10 lg:gap-5">
          {HeroContent.map((item) => (
            <button className="text-white cursor-default bg-pink-600 border-pink-700 hover:border-pink-700 hover:text-pink-600 rounded-2xl text-sm p-1 px-3 md:px-7 md:py-2 md:text-lg lg:px-4 lg:py-1 lg:text-2xl">
              {item.HeroButtonText}
            </button>
          ))}
          {/* <div className="items-center flex gap-2 cursor-pointer transition duration-300 ease-in-out hover:scale-110">
            <p className="text-pink-600 text-lg font-bold md:text-xl">
              See all resource
            </p>
            <ArrowRightIcon className="w-5 text-pink-600 font-bold text-xl" />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Hero;
