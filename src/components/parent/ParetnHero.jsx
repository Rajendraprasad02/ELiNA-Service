import React, { useState, useEffect } from "react";

// import parentFamily from "../../images/parentFamily.jpg";
import parentFamily from "../../images/compressed/parent/parentFamily-min.jpg";
import BreadCrumbs from "../reuseable/BreadCrumbs";
const ParetnHero = () => {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const updateCurrentPage = () => {
      const pathname = window.location.pathname;
      setCurrentPage(pathname === "/" ? "Home" : pathname);
    };
    updateCurrentPage();

    // Listen to route changes
    window.addEventListener("popstate", updateCurrentPage);

    return () => {
      window.removeEventListener("popstate", updateCurrentPage);
    };
  }, []);

  return (
    <>
      <BreadCrumbs />
      <div className="parentBg">
        <div className=" flex flex-col lg:gap-5 items-center text-white px-5  lg:px-[10%] lg:pt-[10%] lg:pb-[6%]">
          <h1 className="text-6xl lg:text-[4.75rem] text-white py-5 md:py-0 text-center font-black">
            No Parent Should feel alone EVER.
          </h1>
          <h2 className="text-lg text-center p-4 text-gray-200 lg:text-white lg:text-2xl">
            "Empowering Your Child's Journey to a Brighter Future!"
          </h2>
          <p className="text-sm p-3 text-center text-gray-200 lg:text-white lg:text-lg">
            <span className="underline font-bold cursor-pointer">
              <a href="/parentform">Join us today!</a>
            </span>{" "}
            Get personalized plans and expert guidance to help your
            neurodivergent child
          </p>
        </div>
        <div className="flex justify-center pb-8">
          <a
            href="#"
            class="flex flex-col items-center w-[90%] bg-white border border-gray-200 rounded-lg md:py-7 md:px-5 shadow md:flex-row md:max-w-3xl "
          >
            <img
              class="object-contain w-[90%] py-5 lg:py-0 lg:w-64 lg:mx-5 rounded-t-lg lg:h-auto  md:h-auto md:w-48 md:rounded-lg"
              src={parentFamily}
              alt=""
            />
            <div class="flex flex-col justify-between px-4 pb-3 leading-normal">
              <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Join us in our mission to empower parents and foster disability
                inclusion in our communities.
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Let's work together to support your child's growth and
                engagement!"
              </p>
              <button className="bg-pink-600 w-[60%] lg:w-[50%] p-1 md:p-0 mx-auto lg:mx-0 border-pink-600 lg:h-8 text-lg hover:text-pink-600 hover:border-pink-600">
                <a href="/parentform">Join our program </a>
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ParetnHero;
