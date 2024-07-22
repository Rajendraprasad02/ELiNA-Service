import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

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
    <div className="lg:max-w-full">
      <p className="text-4xl p-5 text-center flex justify-center mt-24 mb-10 md:text-5xl lg:text-6xl font-black text-indigo-600">
        Voices of our community
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
            } transition-opacity duration-500 flex flex-col items-center h-[100%] bg-white shadow-2xl lg:p-10 rounded-3xl`}
          >
            <div className="lg:h-[300px] md:p-2 py-10 flex flex-col justify-center items-center">
              <h1 className="text-center md:text-base align-middle">
                {item.h1}
              </h1>
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
  );
};

export default Carousel;
