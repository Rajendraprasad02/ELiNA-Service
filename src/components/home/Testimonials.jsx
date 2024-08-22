import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

const Carousel = () => {
  const [carouselContent, setCarouselContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //   "http://ttipl-uat.com:60162/api/testimonial/home"
          "https://cors-anywhere.herokuapp.com/http://ttipl-uat.com:60162/api/testimonial/home"
        );
        // Filter out inactive testimonials if needed
        const activeTestimonials = response.data.filter(
          (item) => item.active_flag === 1
        );
        setCarouselContent(activeTestimonials);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };
  console.log(carouselContent);

  return (
    <div className="lg:max-w-full">
      <p className="text-4xl p-5 text-center flex justify-center mt-24 mb-10 md:text-5xl lg:text-6xl font-black text-blue-600">
        Voices of our community
      </p>
      <div className="flex justify-center lg:gap-20">
        <button className="bg-transparent border-none" onClick={prevSlide}>
          <ArrowLeftIcon className="w-5 text-gray-600" />
        </button>
        {carouselContent.map((item, index) => (
          <div
            key={item.id}
            className={`max-w-lg ${
              index === currentIndex ? "" : "hidden"
            } transition-opacity duration-500 flex flex-col items-center h-[100%] bg-pink-600 shadow-2xl lg:p-10 rounded-3xl`}
          >
            <div className="lg:h-[300px] md:p-2 py-10 flex flex-col justify-center items-center">
              <h1 className="text-center text-white md:text-base align-middle p-5">
                {item.testimonial_content}
              </h1>
            </div>
            <p className="text-center text-white font-semibold md:text-lg p-5">
              {item.testimonial_author}
            </p>
          </div>
        ))}
        <button className="bg-transparent border-none" onClick={nextSlide}>
          <ArrowRightIcon className="w-5 text-gray-600" />
        </button>
      </div>
      <div className="flex justify-center mt-8">
        {carouselContent.map((_, index) => (
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
