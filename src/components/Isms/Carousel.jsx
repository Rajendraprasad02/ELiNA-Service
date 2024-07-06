import React, { useState } from "react";
import ReUseCarousel from "../reuseable/ReUseCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

const CarouselContent = [
  {
    icon: "",
    h1: "The pain areas true... Home Reinforcement is actually a major concern in the whole learning process.",
    p: "MCHP (Manipal University)",
  },
  {
    icon: "",
    h1: "It is helping us to complete the activities in a stepwise manner and through checklist able to communicate progress as well as feedback to go about in activities.",
    p: "Parent of a 6 year old Kid with Autism.",
  },
  {
    icon: "",
    h1: "App is very good. It is definitely a useful and quick learning guide for kids which we can use at any point in time when we don't have study books. Anywhere we can operate and kids will enjoy the learning.",
    p: "Parent of a 6 year old Kid with Autism.",
  },
];

const Carousel = ({ CarouselContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CarouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="lg:max-w-full">
        <p className="text-4xl p-5 text-center flex justify-center mt-24 mb-10 md:text-5xl lg:text-6xl font-black text-indigo-600">
          What our users have to say?
        </p>
        <div className="flex justify-center gap-20">
          <button className="bg-transparent border-none" onClick={prevSlide}>
            <ArrowLeftIcon className="w-5 text-gray-600" />
          </button>
          {CarouselContent.map((item, index) => (
            <div
              key={index}
              className={`max-w-lg ${
                index === currentIndex ? "" : "hidden"
              } transition-opacity duration-500 flex flex-col items-center h-[100%]`}
            >
              <div className="lg:h-[200px] md:p-12 py-10 ">
                <h1 className="text-center md:text-lg">{item.h1}</h1>
              </div>
              <p className="text-center font-semibold md:text-lg">{item.p}</p>
            </div>
          ))}
          <button className="bg-transparent border-none" onClick={nextSlide}>
            <ArrowRightIcon className="w-5 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {CarouselContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-4 border-none rounded-full ${
                index === currentIndex
                  ? "bg-gray-700 border"
                  : "bg-gray-400 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
